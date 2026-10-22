var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, Injectable, BadRequestException, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service.js';
import { EmailService } from '../email/email.service.js';
import { createHash, randomInt } from 'node:crypto';
let AuthService = class AuthService {
    prisma;
    jwt;
    config;
    email;
    constructor(prisma, jwt, config, email) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
        this.email = email;
    }
    normalizeEmail(email) {
        return email.trim().toLowerCase();
    }
    async issueToken(user) {
        const accessToken = await this.jwt.signAsync({
            sub: user.id,
            email: user.email,
        });
        return {
            accessToken,
            tokenType: 'Bearer',
            expiresIn: 900,
        };
    }
    hashVerificationCode(userId, code) {
        return createHash("sha256")
            .update(`${userId}:${code}`)
            .digest("hex");
    }
    generateVerificationCode() {
        return randomInt(0, 1_000_000)
            .toString()
            .padStart(6, "0");
    }
    async register(dto) {
        const email = this.normalizeEmail(dto.email);
        const existing = await this.prisma.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existing) {
            throw new ConflictException("Unable to register with this email.");
        }
        const role = await this.prisma.role.findFirst({
            where: {
                name: "CLIENT",
                scope: "PLATFORM",
                organizationId: null,
            },
            select: { id: true },
        });
        if (!role) {
            throw new Error("The CLIENT platform role is missing. Run the database seed.");
        }
        const passwordHash = await bcrypt.hash(dto.password, 12);
        const code = this.generateVerificationCode();
        const user = await this.prisma.$transaction(async (tx) => {
            const created = await tx.user.create({
                data: {
                    name: dto.name.trim(),
                    email,
                    passwordHash,
                    status: "PENDING",
                    emailVerifiedAt: null,
                    mfaEnabled: false,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    status: true,
                },
            });
            await tx.userRole.create({
                data: {
                    userId: created.id,
                    roleId: role.id,
                    organizationId: null,
                },
            });
            await tx.authToken.create({
                data: {
                    userId: created.id,
                    purpose: "EMAIL_VERIFICATION",
                    tokenHash: this.hashVerificationCode(created.id, code),
                    expiresAt: new Date(Date.now() + 10 * 60 * 1000),
                },
            });
            return created;
        });
        await this.email.sendVerificationCode(user.email, code);
        return {
            message: "Verification code sent to your email.",
            email: user.email,
            verificationRequired: true,
        };
    }
    async verifyEmail(dto) {
        const email = this.normalizeEmail(dto.email);
        const user = await this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                status: true,
                emailVerifiedAt: true,
            },
        });
        if (!user) {
            throw new BadRequestException("Invalid or expired verification code.");
        }
        if (user.emailVerifiedAt && user.status === "ACTIVE") {
            throw new BadRequestException("Email is already verified.");
        }
        const now = new Date();
        const tokenHash = this.hashVerificationCode(user.id, dto.code);
        const token = await this.prisma.authToken.findFirst({
            where: {
                userId: user.id,
                purpose: "EMAIL_VERIFICATION",
                tokenHash,
                usedAt: null,
                expiresAt: { gt: now },
            },
            select: { id: true },
        });
        if (!token) {
            throw new BadRequestException("Invalid or expired verification code.");
        }
        const result = await this.prisma.$transaction(async (tx) => {
            const consumed = await tx.authToken.updateMany({
                where: {
                    id: token.id,
                    usedAt: null,
                    expiresAt: { gt: now },
                },
                data: { usedAt: now },
            });
            if (consumed.count !== 1) {
                throw new BadRequestException("Invalid or expired verification code.");
            }
            return tx.user.update({
                where: { id: user.id },
                data: {
                    emailVerifiedAt: now,
                    status: "ACTIVE",
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    status: true,
                },
            });
        });
        return {
            message: "Email verified successfully. You can now sign in.",
            user: result,
        };
    }
    async login(dto) {
        const email = this.normalizeEmail(dto.email);
        const user = await this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                passwordHash: true,
                status: true,
            },
        });
        const passwordMatches = user?.passwordHash
            ? await bcrypt.compare(dto.password, user.passwordHash)
            : false;
        if (!user || !passwordMatches || user.status !== 'ACTIVE') {
            throw new UnauthorizedException('Invalid email or password.');
        }
        const assignments = await this.prisma.userRole.findMany({
            where: {
                userId: user.id,
                OR: [
                    { expiresAt: null },
                    { expiresAt: { gt: new Date() } },
                ],
            },
            select: {
                role: {
                    select: {
                        name: true,
                        scope: true,
                        organizationId: true,
                    },
                },
            },
        });
        const roles = assignments.map((assignment) => assignment.role.name);
        const token = await this.issueToken(user);
        return {
            ...token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                status: user.status,
                roles,
            },
        };
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                status: true,
            },
        });
        if (!user || user.status !== 'ACTIVE') {
            throw new UnauthorizedException();
        }
        const assignments = await this.prisma.userRole.findMany({
            where: {
                userId,
                OR: [
                    { expiresAt: null },
                    { expiresAt: { gt: new Date() } },
                ],
            },
            select: {
                role: {
                    select: {
                        name: true,
                        scope: true,
                        organizationId: true,
                    },
                },
            },
        });
        return {
            ...user,
            roles: assignments.map((assignment) => ({
                name: assignment.role.name,
                scope: assignment.role.scope,
                organizationId: assignment.role.organizationId,
            })),
        };
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService,
        ConfigService,
        EmailService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
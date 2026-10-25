var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards, BadRequestException, UnauthorizedException, } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { Public } from './decorators/public.decorator.js';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot.dto.js';
import { VerifyEmailDto } from './dto/verify-email.dto.js';
import { VerifyTotpDto, DisableMfaDto } from './dto/mfa.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { EmailService } from '../email/email.service.js';
import bcrypt from 'bcryptjs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { authenticator } = require('otplib');
import { randomBytes, createHash } from 'node:crypto';
import { JwtAuthGuard, } from './guards/jwt-auth.guard.js';
let AuthController = class AuthController {
    auth;
    constructor(auth) {
        this.auth = auth;
    }
    register(dto) {
        return this.auth.register(dto);
    }
    verifyEmail(dto) {
        return this.auth.verifyEmail(dto);
    }
    login(dto, request) {
        return this.auth.login(dto, {
            ipAddress: request.ip,
            userAgent: request.get('user-agent') ?? undefined,
        });
    }
    async forgotPassword(dto) {
        return this.auth.forgotPassword(dto);
    }
    async verifyMfaChallenge(dto) {
        return this.auth.verifyMfaChallenge(dto.challengeId, dto.code);
    }
    async resendMfaChallenge(dto) {
        return this.auth.resendMfaChallenge(dto.challengeId);
    }
    async signout(request) {
        return { message: 'Successfully signed out' };
    }
    me(request) {
        return this.auth.getProfile(request.user.sub);
    }
};
__decorate([
    Public(),
    Post('register'),
    Throttle({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    Public(),
    Post('verify-email'),
    HttpCode(HttpStatus.OK),
    Throttle({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyEmailDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    Public(),
    Post('login'),
    HttpCode(HttpStatus.OK),
    Throttle({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    Public(),
    Post('forgot-password'),
    HttpCode(HttpStatus.OK),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    Public(),
    Post('mfa/challenge/verify'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyMfaChallenge", null);
__decorate([
    Public(),
    Post('mfa/challenge/resend'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendMfaChallenge", null);
__decorate([
    Post('signout'),
    HttpCode(HttpStatus.OK),
    UseGuards(JwtAuthGuard),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signout", null);
__decorate([
    Get('me'),
    UseGuards(JwtAuthGuard),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
AuthController = __decorate([
    Controller('auth'),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
let MfaController = class MfaController {
    prisma;
    emailService;
    configService;
    constructor(prisma, emailService, configService) {
        this.prisma = prisma;
        this.emailService = emailService;
        this.configService = configService;
    }
    async enableEmailMfa(request) {
        const userId = request.user.sub;
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: { email: true, name: true },
        });
        await this.prisma.mfaMethod.deleteMany({
            where: { userId },
        });
        await this.prisma.mfaMethod.create({
            data: {
                userId,
                type: 'EMAIL',
                verifiedAt: new Date(),
            },
        });
        await this.prisma.user.update({
            where: { id: userId },
            data: { mfaEnabled: true },
        });
        await this.emailService.sendVerificationCode(user.email, 'ACTIVATED', 'en');
        return {
            message: 'Email MFA activated successfully.',
            method: 'EMAIL',
        };
    }
    async generateTotpSecret(request) {
        const userId = request.user.sub;
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: { email: true },
        });
        const appName = this.configService.get('APP_NAME', 'Rave');
        const secret = authenticator.generateSecret();
        const otpauthUrl = authenticator.keyuri(user.email, appName, secret);
        await this.prisma.mfaMethod.deleteMany({
            where: { userId, type: 'TOTP' },
        });
        await this.prisma.mfaMethod.create({
            data: {
                userId,
                type: 'TOTP',
                secretCiphertext: secret,
                verifiedAt: null,
            },
        });
        return {
            secret,
            otpauthUrl,
            message: 'Scan the QR code with your Authenticator App.',
        };
    }
    async verifyAndEnableTotp(request, dto) {
        const userId = request.user.sub;
        const mfaRecord = await this.prisma.mfaMethod.findFirst({
            where: { userId, type: 'TOTP' },
        });
        if (!mfaRecord || !mfaRecord.secretCiphertext) {
            throw new BadRequestException('No pending Authenticator setup found.');
        }
        const isValid = authenticator.verify({
            token: dto.code,
            secret: mfaRecord.secretCiphertext,
        });
        if (!isValid) {
            throw new BadRequestException('Invalid authentication code.');
        }
        await this.prisma.mfaMethod.update({
            where: { id: mfaRecord.id },
            data: { verifiedAt: new Date() },
        });
        await this.prisma.user.update({
            where: { id: userId },
            data: { mfaEnabled: true },
        });
        const rawRecoveryCodes = Array.from({ length: 4 }, () => `RAVE-${randomBytes(3).toString('hex').toUpperCase()}-${randomBytes(2).toString('hex').toUpperCase()}`);
        await this.prisma.recoveryCode.deleteMany({ where: { userId } });
        for (const code of rawRecoveryCodes) {
            const codeHash = createHash('sha256').update(code).digest('hex');
            await this.prisma.recoveryCode.create({
                data: { userId, codeHash },
            });
        }
        return {
            message: 'Authenticator App MFA successfully activated.',
            recoveryCodes: rawRecoveryCodes,
        };
    }
    async getPasskeyRegistrationOptions(request) {
        const userId = request.user.sub;
        const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId } });
        return {
            challenge: randomBytes(32).toString('base64url'),
            rp: { name: 'Rave Embassy Portal', id: 'localhost' },
            user: { id: user.id, name: user.email, displayName: user.name },
            pubKeyCredParams: [{ alg: -7, type: 'public-key' }, { alg: -257, type: 'public-key' }],
            timeout: 60000,
            attestation: 'direct',
        };
    }
    async verifyPasskeyRegistration(request, dto) {
        const userId = request.user.sub;
        await this.prisma.mfaMethod.create({
            data: {
                userId,
                type: 'PASSKEY',
                credentialId: dto.credentialId ?? 'mock-cred-id',
                publicKey: dto.publicKey ?? 'mock-pub-key',
                verifiedAt: new Date(),
            },
        });
        await this.prisma.user.update({
            where: { id: userId },
            data: { mfaEnabled: true },
        });
        return { message: 'Passkey hardware security key registered successfully.' };
    }
    async disableMfa(request, dto) {
        const userId = request.user.sub;
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: { passwordHash: true },
        });
        if (!user.passwordHash) {
            throw new UnauthorizedException('User account has no password set.');
        }
        const passwordMatches = await bcrypt.compare(dto.password, user.passwordHash);
        if (!passwordMatches) {
            throw new UnauthorizedException('Incorrect password provided.');
        }
        await this.prisma.$transaction([
            this.prisma.mfaMethod.deleteMany({ where: { userId } }),
            this.prisma.recoveryCode.deleteMany({ where: { userId } }),
            this.prisma.user.update({
                where: { id: userId },
                data: { mfaEnabled: false },
            }),
        ]);
        return { message: 'Multi-factor authentication has been disabled.' };
    }
};
__decorate([
    Post('email/enable'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "enableEmailMfa", null);
__decorate([
    Post('authenticator/generate'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "generateTotpSecret", null);
__decorate([
    Post('authenticator/verify'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, VerifyTotpDto]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "verifyAndEnableTotp", null);
__decorate([
    Post('passkey/register-options'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "getPasskeyRegistrationOptions", null);
__decorate([
    Post('passkey/verify-register'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "verifyPasskeyRegistration", null);
__decorate([
    Post('disable'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DisableMfaDto]),
    __metadata("design:returntype", Promise)
], MfaController.prototype, "disableMfa", null);
MfaController = __decorate([
    Controller('auth/mfa'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [PrismaService,
        EmailService,
        ConfigService])
], MfaController);
export { MfaController };
//# sourceMappingURL=auth.controller.js.map
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
import { Body, Controller, Post, Req, UseGuards, BadRequestException, UnauthorizedException, } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { EmailService } from '../email/email.service.js';
import { VerifyTotpDto, DisableMfaDto } from './dto/mfa.dto.js';
import bcrypt from 'bcryptjs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { authenticator } = require('otplib');
import { randomBytes, createHash } from 'node:crypto';
let MfaController = class MfaController {
    prisma;
    emailService;
    constructor(prisma, emailService) {
        this.prisma = prisma;
        this.emailService = emailService;
    }
    async enableEmailMfa(request) {
        const userId = request.user.sub;
        await this.prisma.user.update({
            where: { id: userId },
            data: { mfaEnabled: true },
        });
        const existingMethod = await this.prisma.mfaMethod.findFirst({
            where: { userId, type: 'EMAIL' },
        });
        if (existingMethod) {
            await this.prisma.mfaMethod.update({
                where: { id: existingMethod.id },
                data: { verifiedAt: new Date() },
            });
        }
        else {
            await this.prisma.mfaMethod.create({
                data: {
                    userId,
                    type: 'EMAIL',
                    verifiedAt: new Date(),
                },
            });
        }
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (user && user.email) {
            await this.emailService.sendMfaActivatedNotification({
                to: user.email,
                name: user.name ?? 'Valued User',
                mfaType: 'Email Passcode',
            });
        }
        return { message: 'Email MFA successfully activated.' };
    }
    async generateTotpSecret(request) {
        const userId = request.user.sub;
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: { email: true },
        });
        const secret = authenticator.generateSecret();
        const otpauthUrl = authenticator.keyuri(user.email, 'Visa Portal', secret);
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
        const rawRecoveryCodes = Array.from({ length: 4 }, () => `VISA-${randomBytes(3).toString('hex').toUpperCase()}-${randomBytes(2).toString('hex').toUpperCase()}`);
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
            rp: { name: 'Visa Portal', id: 'localhost' },
            user: { id: user.id, name: user.email, displayName: user.name ?? 'User' },
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
        EmailService])
], MfaController);
export { MfaController };
//# sourceMappingURL=mfa.controller.js.map
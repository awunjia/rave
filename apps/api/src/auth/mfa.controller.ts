import {
    Body,
    Controller,
    Post,
    Req,
    UseGuards,
    BadRequestException,
    UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { JwtAuthGuard, AuthenticatedUser } from './guards/jwt-auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { EmailService } from '../email/email.service.js';
import { VerifyTotpDto, DisableMfaDto } from './dto/mfa.dto.js';
import bcrypt from 'bcryptjs';

// Bulletproof require for otplib to bypass ESM/CJS type mismatches
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { authenticator } = require('otplib');

import { randomBytes, createHash } from 'node:crypto';

type AuthenticatedRequest = Request & {
    user: AuthenticatedUser;
};

@Controller('auth/mfa')
@UseGuards(JwtAuthGuard)
export class MfaController {
    constructor(
        private readonly prisma: PrismaService,
        private readonly emailService: EmailService,
    ) { }

    // --- 1. EMAIL MFA ---
    @Post('email/enable')
    async enableEmailMfa(@Req() request: AuthenticatedRequest) {
        const userId = request.user.sub;

        // 1. Mark MFA as enabled in Prisma user record
        await this.prisma.user.update({
            where: { id: userId },
            data: { mfaEnabled: true },
        });

        // 2. Ensure Email MfaMethod record exists and is marked active (Safe findFirst + update/create pattern)
        const existingMethod = await this.prisma.mfaMethod.findFirst({
            where: { userId, type: 'EMAIL' },
        });

        if (existingMethod) {
            await this.prisma.mfaMethod.update({
                where: { id: existingMethod.id },
                data: { verifiedAt: new Date() },
            });
        } else {
            await this.prisma.mfaMethod.create({
                data: {
                    userId,
                    type: 'EMAIL',
                    verifiedAt: new Date(),
                },
            });
        }

        const user = await this.prisma.user.findUnique({ where: { id: userId } });

        // 3. Dispatch activation notification email with null safety fallbacks
        if (user && user.email) {
            await this.emailService.sendMfaActivatedNotification({
                to: user.email,
                name: user.name ?? 'Valued User',
                mfaType: 'Email Passcode',
            });
        }

        return { message: 'Email MFA successfully activated.' };
    }

    // --- 2. AUTHENTICATOR APP (TOTP) - Step 1: Generate Secret & URI ---
    @Post('authenticator/generate')
    async generateTotpSecret(@Req() request: AuthenticatedRequest) {
        const userId = request.user.sub;

        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: { email: true },
        });

        const secret = authenticator.generateSecret();
        const otpauthUrl = authenticator.keyuri(
            user.email,
            'Visa Portal',
            secret,
        );

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

    // --- 2. AUTHENTICATOR APP (TOTP) - Step 2: Verify & Issue Recovery Codes ---
    @Post('authenticator/verify')
    async verifyAndEnableTotp(
        @Req() request: AuthenticatedRequest,
        @Body() dto: VerifyTotpDto,
    ) {
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

        const rawRecoveryCodes = Array.from({ length: 4 }, () =>
            `VISA-${randomBytes(3).toString('hex').toUpperCase()}-${randomBytes(2).toString('hex').toUpperCase()}`
        );

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

    // --- 3. PASSKEYS (WEBAUTHN Stubs) ---
    @Post('passkey/register-options')
    async getPasskeyRegistrationOptions(@Req() request: AuthenticatedRequest) {
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

    @Post('passkey/verify-register')
    async verifyPasskeyRegistration(
        @Req() request: AuthenticatedRequest,
        @Body() dto: Record<string, any>,
    ) {
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

    // --- 4. DISABLE MFA (Password Protected) ---
    @Post('disable')
    async disableMfa(
        @Req() request: AuthenticatedRequest,
        @Body() dto: DisableMfaDto,
    ) {
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
}
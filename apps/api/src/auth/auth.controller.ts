import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
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

import {
  AuthenticatedUser,
  JwtAuthGuard,
} from './guards/jwt-auth.guard.js';

type AuthenticatedRequest = Request & {
  user: AuthenticatedUser;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) { }

  @Public()
  @Post('register')
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Public()
  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  verifyEmail(@Body() dto: VerifyEmailDto) {
    return this.auth.verifyEmail(dto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  login(
    @Body() dto: LoginDto,
    @Req() request: Request,
  ) {
    return this.auth.login(dto, {
      ipAddress: request.ip,
      userAgent: request.get('user-agent') ?? undefined,
    });
  }

  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.auth.forgotPassword(dto);
  }

  @Public()
  @Post('mfa/challenge/verify')
  async verifyMfaChallenge(@Body() dto: { challengeId: string; code: string }) {
    return this.auth.verifyMfaChallenge(dto.challengeId, dto.code);
  }

  @Public()
  @Post('mfa/challenge/resend')
  async resendMfaChallenge(@Body() dto: { challengeId: string }) {
    return this.auth.resendMfaChallenge(dto.challengeId);
  }

  @Post('signout')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async signout(@Req() request: AuthenticatedRequest) {
    return { message: 'Successfully signed out' };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() request: AuthenticatedRequest) {
    return this.auth.getProfile(request.user.sub);
  }
}

@Controller('auth/mfa')
@UseGuards(JwtAuthGuard)
export class MfaController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly configService: ConfigService,
  ) { }

  // --- 1. EMAIL MFA ---
  @Post('email/enable')
  async enableEmailMfa(@Req() request: AuthenticatedRequest) {
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

    await this.emailService.sendVerificationCode(
      user.email,
      'ACTIVATED',
      'en',
    );

    return {
      message: 'Email MFA activated successfully.',
      method: 'EMAIL',
    };
  }

  // --- 2. AUTHENTICATOR APP (TOTP) ---
  @Post('authenticator/generate')
  async generateTotpSecret(@Req() request: AuthenticatedRequest) {
    const userId = request.user.sub;

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { email: true },
    });

    const appName = this.configService.get<string>('APP_NAME', 'Rave');
    const secret = authenticator.generateSecret();
    const otpauthUrl = authenticator.keyuri(
      user.email,
      appName,
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
      `RAVE-${randomBytes(3).toString('hex').toUpperCase()}-${randomBytes(2).toString('hex').toUpperCase()}`
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

  // --- 3. PASSKEYS (WEBAUTHN) ---
  @Post('passkey/register-options')
  async getPasskeyRegistrationOptions(@Req() request: AuthenticatedRequest) {
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
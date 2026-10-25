import {
  ConflictException,
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';

import { Logger, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot.dto.js';
import { EmailService } from '../email/email.service.js';
import { VerifyEmailDto } from "./dto/verify-email.dto.js";
import { createHash, randomInt, randomBytes, randomUUID } from 'node:crypto';

@Injectable()
export class AuthService {

  private readonly logger = new Logger(AuthService.name)

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly email: EmailService,
  ) { }

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }

  private async issueToken(user: {
    id: string;
    email: string;
  }) {
    // 1. Fetch active user roles from database to embed in JWT claims
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
          },
        },
      },
    });

    const roles = assignments.map((assignment) => assignment.role.name);

    // 2. Establish role precedence (SUPER_ADMIN takes top priority if user has multiple roles)
    const roleHierarchy = ['SUPER_ADMIN', 'ADMIN', 'CONSULTANT', 'REVIEWER', 'CLIENT'];
    const primaryRole = roles.sort(
      (a, b) => roleHierarchy.indexOf(a) - roleHierarchy.indexOf(b)
    )[0] || 'CLIENT';

    // 3. Sign the token with role claims included
    const accessToken = await this.jwt.signAsync({
      sub: user.id,
      email: user.email,
      role: primaryRole,
      roles,
      tokenUse: "access",
    });

    return {
      accessToken,
      tokenType: "Bearer" as const,
      expiresIn: 900,
    };
  }

  private hashVerificationCode(
    userId: string,
    code: string,
  ): string {
    return createHash("sha256")
      .update(`${userId}:${code}`)
      .digest("hex");
  }

  private generateVerificationCode(): string {
    return randomInt(0, 1_000_000)
      .toString()
      .padStart(6, "0");
  }

  private async createEmailLoginChallenge(user: {
    id: string;
    email: string;
  }) {
    const now = new Date();
    const code = this.generateVerificationCode();
    const expiresAt = new Date(now.getTime() + 5 * 60_000);

    const challenge = await this.prisma.authToken.create({
      data: {
        userId: user.id,
        purpose: 'LOGIN_CHALLENGE',
        tokenHash: this.hashVerificationCode(user.id, code),
        expiresAt,
      },
      select: {
        id: true,
      },
    });

    try {
      await this.email.sendMfaCode(user.email, code, 'en');
    } catch (error) {
      await this.prisma.authToken.updateMany({
        where: {
          id: challenge.id,
          userId: user.id,
          purpose: 'LOGIN_CHALLENGE',
          usedAt: null,
        },
        data: {
          usedAt: new Date(),
        },
      });

      throw error;
    }

    return {
      mfaRequired: true,
      challengeId: challenge.id,
      methods: ['EMAIL'],
      expiresIn: 300,
      email: user.email,
    };
  }

  async register(dto: RegisterDto) {
    const email = this.normalizeEmail(dto.email);
    const now = new Date();
    const cooldownMs = 60_000;
    const expiresAt = new Date(now.getTime() + 10 * 60_000);

    const code = this.generateVerificationCode();

    let registration: {
      userId: string;
      email: string;
      tokenId: string;
      code: string;
    };

    try {
      registration = await this.prisma.$transaction(async (tx) => {
        await tx.$executeRaw`
          SELECT pg_advisory_xact_lock(
            hashtextextended(${email}, 0)
          )`
          ;

        const existingUser = await tx.user.findUnique({
          where: { email },
          select: {
            id: true,
            email: true,
            status: true,
            emailVerifiedAt: true,
          },
        });

        if (
          existingUser &&
          (existingUser.status !== 'PENDING' ||
            existingUser.emailVerifiedAt)
        ) {
          throw new ConflictException(
            'Unable to register with this email.',
          );
        }

        let userId: string;

        if (existingUser) {
          userId = existingUser.id;

          const latestToken = await tx.authToken.findFirst({
            where: {
              userId,
              purpose: 'EMAIL_VERIFICATION',
              usedAt: null,
              expiresAt: { gt: now },
            },
            orderBy: { createdAt: 'desc' },
            select: { createdAt: true },
          });

          if (
            latestToken &&
            now.getTime() - latestToken.createdAt.getTime() <
            cooldownMs
          ) {
            throw new BadRequestException(
              'Please wait before requesting another verification code.',
            );
          }
        } else {
          const role = await tx.role.findFirst({
            where: {
              name: 'CLIENT',
              scope: 'PLATFORM',
              organizationId: null,
            },
            select: { id: true },
          });

          if (!role) {
            throw new Error(
              'The CLIENT platform role is missing. Run the database seed.',
            );
          }

          const passwordHash = await bcrypt.hash(dto.password, 12);

          const user = await tx.user.create({
            data: {
              name: dto.name.trim(),
              email,
              passwordHash,
              status: 'PENDING',
              emailVerifiedAt: null,
              mfaEnabled: false,
            },
            select: { id: true, email: true },
          });

          userId = user.id;

          await tx.userRole.create({
            data: {
              userId,
              roleId: role.id,
              organizationId: null,
            },
          });
        }

        const token = await tx.authToken.create({
          data: {
            userId,
            purpose: 'EMAIL_VERIFICATION',
            tokenHash: this.hashVerificationCode(userId, code),
            expiresAt,
          },
          select: { id: true },
        });

        return {
          userId,
          email,
          tokenId: token.id,
          code,
        };
      });
    } catch (error: unknown) {
      if (
        error instanceof ConflictException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Unable to register with this email.',
        );
      }

      throw error;
    }

    try {
      await this.email.sendVerificationCode(
        registration.email,
        registration.code,
        dto.locale ?? 'en',
      );
    } catch (error: unknown) {
      await this.prisma.authToken.updateMany({
        where: {
          id: registration.tokenId,
          userId: registration.userId,
          usedAt: null,
        },
        data: { usedAt: new Date() },
      });

      throw error;
    }

    await this.prisma.authToken.updateMany({
      where: {
        userId: registration.userId,
        purpose: 'EMAIL_VERIFICATION',
        id: { not: registration.tokenId },
        usedAt: null,
      },
      data: { usedAt: new Date() },
    });

    return {
      message: 'Verification code sent to your email.',
      email: registration.email,
      verificationRequired: true,
    };
  }

  async verifyEmail(dto: VerifyEmailDto) {
    const email = this.normalizeEmail(dto.email);
    const now = new Date();
    const maxAttempts = 5;

    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        status: true,
        emailVerifiedAt: true,
      },
    });

    if (!user || user.status !== 'PENDING') {
      throw new BadRequestException(
        'Invalid or expired verification code.',
      );
    }

    const token = await this.prisma.authToken.findFirst({
      where: {
        userId: user.id,
        purpose: 'EMAIL_VERIFICATION',
        usedAt: null,
        expiresAt: { gt: now },
      },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        tokenHash: true,
      },
    });

    if (!token) {
      throw new BadRequestException(
        'Invalid or expired verification code.',
      );
    }

    const attempt = await this.prisma.authToken.updateMany({
      where: {
        id: token.id,
        usedAt: null,
        expiresAt: { gt: now },
        attemptCount: { lt: maxAttempts },
      },
      data: {
        attemptCount: { increment: 1 },
      },
    });

    if (attempt.count !== 1) {
      throw new BadRequestException(
        'Invalid or expired verification code.',
      );
    }

    const submittedHash = this.hashVerificationCode(
      user.id,
      dto.code,
    );

    if (submittedHash !== token.tokenHash) {
      throw new BadRequestException(
        'Invalid or expired verification code.',
      );
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const consumed = await tx.authToken.updateMany({
        where: {
          id: token.id,
          usedAt: null,
          expiresAt: { gt: new Date() },
          attemptCount: { lte: maxAttempts },
        },
        data: {
          usedAt: new Date(),
        },
      });

      if (consumed.count !== 1) {
        throw new BadRequestException(
          'Invalid or expired verification code.',
        );
      }

      const activated = await tx.user.updateMany({
        where: {
          id: user.id,
          status: 'PENDING',
          emailVerifiedAt: null,
        },
        data: {
          emailVerifiedAt: new Date(),
          status: 'ACTIVE',
        },
      });

      if (activated.count !== 1) {
        throw new BadRequestException(
          'Invalid or expired verification code.',
        );
      }

      return tx.user.findUniqueOrThrow({
        where: { id: user.id },
        select: {
          id: true,
          name: true,
          email: true,
          status: true,
        },
      });
    });

    const authToken = await this.issueToken({
      id: result.id,
      email: result.email,
    });

    const assignments = await this.prisma.userRole.findMany({
      where: {
        userId: result.id,
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
      message: 'Email verified successfully.',
      ...authToken,
      user: {
        ...result,
        roles: assignments.map((assignment) => assignment.role.name),
      },
    };
  }

  async login(
    dto: LoginDto,
    context?: {
      ipAddress?: string;
      userAgent?: string;
    },
  ) {
    const email = this.normalizeEmail(dto.email);

    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        passwordHash: true,
        status: true,
        emailVerifiedAt: true,
        mfaEnabled: true,
      },
    });

    const passwordMatches = user?.passwordHash
      ? await bcrypt.compare(dto.password, user.passwordHash)
      : false;

    if (
      !user ||
      !passwordMatches ||
      user.status !== 'ACTIVE' ||
      !user.emailVerifiedAt
    ) {
      throw new UnauthorizedException(
        'Invalid email or password.',
      );
    }

    // MFA must never be bypassed by falling back to password-only login.
    if (user.mfaEnabled) {
      const emailMethod = await this.prisma.mfaMethod.findFirst({
        where: {
          userId: user.id,
          type: 'EMAIL',
          verifiedAt: { not: null },
        },
        select: { id: true },
      });

      if (!emailMethod) {
        throw new UnauthorizedException(
          'Unable to complete authentication.',
        );
      }

      return this.createEmailLoginChallenge({
        id: user.id,
        email: user.email,
      });
    }

    // Password-only login when MFA is disabled.
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

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

    const roles = assignments.map(
      (assignment) => assignment.role.name,
    );

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

  async verifyMfaChallenge(challengeId: string, code: string) {
    const now = new Date();
    const maxAttempts = 5;

    const token = await this.prisma.authToken.findFirst({
      where: {
        id: challengeId,
        purpose: 'LOGIN_CHALLENGE',
        usedAt: null,
        expiresAt: { gt: now },
      },
      select: {
        id: true,
        userId: true,
        tokenHash: true,
      },
    });

    if (!token) {
      throw new BadRequestException('Invalid or expired verification code.');
    }

    const attempt = await this.prisma.authToken.updateMany({
      where: {
        id: token.id,
        usedAt: null,
        expiresAt: { gt: now },
        attemptCount: { lt: maxAttempts },
      },
      data: {
        attemptCount: { increment: 1 },
      },
    });

    if (attempt.count !== 1) {
      throw new BadRequestException('Invalid or expired verification code.');
    }

    const submittedHash = this.hashVerificationCode(token.userId, code);

    if (submittedHash !== token.tokenHash) {
      throw new BadRequestException('Invalid or expired verification code.');
    }

    const result = await this.prisma.$transaction(async (tx) => {
      await tx.authToken.update({
        where: { id: token.id },
        data: { usedAt: new Date() },
      });

      await tx.user.update({
        where: { id: token.userId },
        data: { lastLoginAt: new Date() },
      });

      return tx.user.findUniqueOrThrow({
        where: { id: token.userId },
        select: {
          id: true,
          name: true,
          email: true,
          status: true,
        },
      });
    });

    const authToken = await this.issueToken({
      id: result.id,
      email: result.email,
    });

    const assignments = await this.prisma.userRole.findMany({
      where: {
        userId: result.id,
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
      message: 'MFA verification successful.',
      ...authToken,
      user: {
        ...result,
        roles: assignments.map((assignment) => assignment.role.name),
      },
    };
  }


  async forgotPassword(
    dto: ForgotPasswordDto,
  ): Promise<{ message: string }> {
    const email = this.normalizeEmail(dto.email);
    const now = new Date();
    const cooldownMs = 60_000;
    const tokenExpiryMs = 60 * 60 * 1000;

    const genericSuccessMessage =
      'If an account with that email exists, a password reset link has been sent.';

    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true },
    });

    // Return the same generic response when no account exists.
    if (!user) {
      return { message: genericSuccessMessage };
    }

    // Check the latest unused password-reset token before creating another.
    const latestToken = await this.prisma.authToken.findFirst({
      where: {
        userId: user.id,
        purpose: 'PASSWORD_RESET',
        usedAt: null,
      },
      orderBy: { createdAt: 'desc' },
      select: { createdAt: true },
    });

    if (
      latestToken &&
      now.getTime() - latestToken.createdAt.getTime() < cooldownMs
    ) {
      const remainingSeconds = Math.ceil(
        (cooldownMs -
          (now.getTime() - latestToken.createdAt.getTime())) /
        1000,
      );

      throw new HttpException(
        `Please wait ${remainingSeconds} seconds before requesting another reset link.`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    // Generate a cryptographically secure, one-time reset token.
    const rawToken = randomBytes(48).toString('hex');
    const tokenHash = createHash('sha256')
      .update(rawToken)
      .digest('hex');
    const expiresAt = new Date(now.getTime() + tokenExpiryMs);

    await this.prisma.authToken.create({
      data: {
        userId: user.id,
        purpose: 'PASSWORD_RESET',
        tokenHash,
        expiresAt,
      },
    });

    // Never log the raw token or include it in error messages.
    try {
      await this.email.sendPasswordResetEmail(
        user.email,
        rawToken,
        dto.locale ?? 'en',
      );
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.stack ?? error.message : String(error);

      this.logger.error(
        `Failed to send password reset email to ${user.email}`,
        errorMessage,
      );

      // Keep the response generic to avoid exposing account information.
      // The stored token can be cleaned up or invalidated separately.
    }

    return { message: genericSuccessMessage };
  }


  async resetPassword(dto: { token: string; password: string }) {
    const tokenHash = createHash('sha256').update(dto.token).digest('hex');
    const now = new Date();

    const authToken = await this.prisma.authToken.findFirst({
      where: {
        purpose: 'PASSWORD_RESET',
        tokenHash,
        usedAt: null,
        expiresAt: { gt: now },
      },
    });

    if (!authToken) {
      throw new BadRequestException('Invalid or expired password reset link.');
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);

    // Update user password and invalidate the token transactionally
    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: authToken.userId },
        data: { passwordHash },
      }),
      this.prisma.authToken.update({
        where: { id: authToken.id },
        data: { usedAt: now },
      }),
      // Optional: Invalidate all other active login tokens/sessions for security
      this.prisma.authToken.updateMany({
        where: { userId: authToken.userId, purpose: 'LOGIN_CHALLENGE', usedAt: null },
        data: { usedAt: now },
      }),
    ]);

    return { message: 'Password has been successfully reset.' };
  }

  async resendMfaChallenge(challengeId: string) {
    const now = new Date();
    const cooldownMs = 60_000;

    const existingToken = await this.prisma.authToken.findUnique({
      where: { id: challengeId },
      select: { userId: true },
    });

    if (!existingToken) {
      throw new BadRequestException('Invalid challenge session.');
    }

    // Check the latest LOGIN_CHALLENGE for this user to enforce cooldown accurately
    const latestToken = await this.prisma.authToken.findFirst({
      where: {
        userId: existingToken.userId,
        purpose: 'LOGIN_CHALLENGE',
        usedAt: null,
      },
      orderBy: { createdAt: 'desc' },
      select: { createdAt: true },
    });

    if (latestToken && now.getTime() - latestToken.createdAt.getTime() < cooldownMs) {
      const remainingSeconds = Math.ceil(
        (cooldownMs - (now.getTime() - latestToken.createdAt.getTime())) / 1000
      );
      throw new BadRequestException(
        `Please wait ${remainingSeconds} seconds before requesting another code.`
      );
    }

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: existingToken.userId },
      select: { id: true, email: true, status: true },
    });

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException('User account is not active.');
    }

    // Invalidate previous outstanding challenges
    await this.prisma.authToken.updateMany({
      where: {
        userId: user.id,
        purpose: 'LOGIN_CHALLENGE',
        usedAt: null,
      },
      data: { usedAt: new Date() },
    });

    // Create a fresh challenge and dispatch email
    return this.createEmailLoginChallenge({
      id: user.id,
      email: user.email,
    });
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        status: true,
        mfaEnabled: true,
      },
    });

    if (!user || user.status !== 'ACTIVE') {
      throw new UnauthorizedException();
    }

    // Fetch active/verified MFA methods for this user
    const mfaMethods = await this.prisma.mfaMethod.findMany({
      where: {
        userId,
        verifiedAt: { not: null },
      },
      select: { type: true },
    });

    // Determine primary active factor type (e.g., EMAIL, TOTP, PASSKEY)
    const activeMfaType = mfaMethods.length > 0 ? mfaMethods[0].type : null;

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
      mfaEnabled: user.mfaEnabled,
      activeMfaType,
      roles: assignments.map((assignment) => ({
        name: assignment.role.name,
        scope: assignment.role.scope,
        organizationId: assignment.role.organizationId,
      })),
    };
  }
}
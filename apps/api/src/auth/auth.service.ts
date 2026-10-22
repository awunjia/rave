
import {
    ConflictException,
    Injectable,
    BadRequestException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { ConfigService } from '@nestjs/config';
  import bcrypt from 'bcryptjs';
  import { PrismaService } from '../prisma/prisma.service.js';
  import { RegisterDto } from './dto/register.dto.js';
  import { LoginDto } from './dto/login.dto.js';
  import { EmailService } from '../email/email.service.js';
  import { VerifyEmailDto } from "./dto/verify-email.dto.js";
  import { createHash, randomInt } from 'node:crypto';

  
  @Injectable()
  export class AuthService {
    constructor(
      private readonly prisma: PrismaService,
      private readonly jwt: JwtService,
      private readonly config: ConfigService,
      private readonly email: EmailService,
    ) {}
  
    private normalizeEmail(email: string): string {
      return email.trim().toLowerCase();
    }
  
    private async issueToken(user: {
      id: string;
      email: string;
    }) {
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
  
   async register(dto: RegisterDto) {
      const email = this.normalizeEmail(dto.email);

      const existing = await this.prisma.user.findUnique({
        where: { email },
        select: { id: true },
      });

      if (existing) {
        throw new ConflictException(
          "Unable to register with this email.",
        );
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
        throw new Error(
          "The CLIENT platform role is missing. Run the database seed.",
        );
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

      // Send only after the database transaction succeeds.
      await this.email.sendVerificationCode(user.email, code);

      return {
        message: "Verification code sent to your email.",
        email: user.email,
        verificationRequired: true,
      };
    }


    async verifyEmail(dto: VerifyEmailDto) {
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
        throw new BadRequestException(
          "Invalid or expired verification code.",
        );
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
        throw new BadRequestException(
          "Invalid or expired verification code.",
        );
      }

      // Recheck and consume the token atomically to prevent reuse.
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
          throw new BadRequestException(
            "Invalid or expired verification code.",
          );
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
  
    async login(dto: LoginDto) {
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
  
      
const passwordMatches =
  user?.passwordHash
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
  
    async getProfile(userId: string) {
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
  }
  
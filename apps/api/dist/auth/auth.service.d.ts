import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { EmailService } from '../email/email.service.js';
import { VerifyEmailDto } from "./dto/verify-email.dto.js";
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    private readonly email;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, email: EmailService);
    private normalizeEmail;
    private issueToken;
    private hashVerificationCode;
    private generateVerificationCode;
    register(dto: RegisterDto): Promise<{
        message: string;
        email: string;
        verificationRequired: boolean;
    }>;
    verifyEmail(dto: VerifyEmailDto): Promise<{
        user: {
            roles: {
                name: string;
                scope: import("../generated/prisma/enums.js").RoleScope;
                organizationId: string | null;
            }[];
            name: string | null;
            email: string;
            id: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        };
        accessToken: string;
        tokenType: string;
        expiresIn: number;
        message: string;
    }>;
    login(dto: LoginDto, context?: {
        ipAddress?: string;
        userAgent?: string;
    }): Promise<{
        user: {
            id: string;
            name: string | null;
            email: string;
            status: "ACTIVE";
            roles: string[];
        };
        accessToken: string;
        tokenType: string;
        expiresIn: number;
    }>;
    getProfile(userId: string): Promise<{
        roles: {
            name: string;
            scope: import("../generated/prisma/enums.js").RoleScope;
            organizationId: string | null;
        }[];
        name: string | null;
        email: string;
        id: string;
        status: import("../generated/prisma/enums.js").UserStatus;
    }>;
}

import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot.dto.js';
import { EmailService } from '../email/email.service.js';
import { VerifyEmailDto } from "./dto/verify-email.dto.js";
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    private readonly email;
    private readonly logger;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, email: EmailService);
    private normalizeEmail;
    private issueToken;
    private hashVerificationCode;
    private generateVerificationCode;
    private createEmailLoginChallenge;
    register(dto: RegisterDto): Promise<{
        message: string;
        email: string;
        verificationRequired: boolean;
    }>;
    verifyEmail(dto: VerifyEmailDto): Promise<{
        user: {
            roles: string[];
            name: string | null;
            id: string;
            email: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        };
        accessToken: string;
        tokenType: "Bearer";
        expiresIn: number;
        message: string;
    }>;
    login(dto: LoginDto, context?: {
        ipAddress?: string;
        userAgent?: string;
    }): Promise<{
        mfaRequired: boolean;
        challengeId: string;
        methods: string[];
        expiresIn: number;
        email: string;
    } | {
        user: {
            id: string;
            name: string | null;
            email: string;
            status: "ACTIVE";
            roles: string[];
        };
        accessToken: string;
        tokenType: "Bearer";
        expiresIn: number;
    }>;
    verifyMfaChallenge(challengeId: string, code: string): Promise<{
        user: {
            roles: string[];
            name: string | null;
            id: string;
            email: string;
            status: import("../generated/prisma/enums.js").UserStatus;
        };
        accessToken: string;
        tokenType: "Bearer";
        expiresIn: number;
        message: string;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: {
        token: string;
        password: string;
    }): Promise<{
        message: string;
    }>;
    resendMfaChallenge(challengeId: string): Promise<{
        mfaRequired: boolean;
        challengeId: string;
        methods: string[];
        expiresIn: number;
        email: string;
    }>;
    getProfile(userId: string): Promise<{
        mfaEnabled: boolean;
        activeMfaType: import("../generated/prisma/enums.js").MfaType | null;
        roles: {
            name: string;
            scope: import("../generated/prisma/enums.js").RoleScope;
            organizationId: string | null;
        }[];
        name: string | null;
        id: string;
        email: string;
        status: import("../generated/prisma/enums.js").UserStatus;
    }>;
}

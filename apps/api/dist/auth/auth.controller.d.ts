import type { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot.dto.js';
import { VerifyEmailDto } from './dto/verify-email.dto.js';
import { VerifyTotpDto, DisableMfaDto } from './dto/mfa.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { EmailService } from '../email/email.service.js';
import { AuthenticatedUser } from './guards/jwt-auth.guard.js';
type AuthenticatedRequest = Request & {
    user: AuthenticatedUser;
};
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
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
    login(dto: LoginDto, request: Request): Promise<{
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
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    verifyMfaChallenge(dto: {
        challengeId: string;
        code: string;
    }): Promise<{
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
    resendMfaChallenge(dto: {
        challengeId: string;
    }): Promise<{
        mfaRequired: boolean;
        challengeId: string;
        methods: string[];
        expiresIn: number;
        email: string;
    }>;
    signout(request: AuthenticatedRequest): Promise<{
        message: string;
    }>;
    me(request: AuthenticatedRequest): Promise<{
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
export declare class MfaController {
    private readonly prisma;
    private readonly emailService;
    private readonly configService;
    constructor(prisma: PrismaService, emailService: EmailService, configService: ConfigService);
    enableEmailMfa(request: AuthenticatedRequest): Promise<{
        message: string;
        method: string;
    }>;
    generateTotpSecret(request: AuthenticatedRequest): Promise<{
        secret: any;
        otpauthUrl: any;
        message: string;
    }>;
    verifyAndEnableTotp(request: AuthenticatedRequest, dto: VerifyTotpDto): Promise<{
        message: string;
        recoveryCodes: string[];
    }>;
    getPasskeyRegistrationOptions(request: AuthenticatedRequest): Promise<{
        challenge: string;
        rp: {
            name: string;
            id: string;
        };
        user: {
            id: string;
            name: string;
            displayName: string | null;
        };
        pubKeyCredParams: {
            alg: number;
            type: string;
        }[];
        timeout: number;
        attestation: string;
    }>;
    verifyPasskeyRegistration(request: AuthenticatedRequest, dto: Record<string, any>): Promise<{
        message: string;
    }>;
    disableMfa(request: AuthenticatedRequest, dto: DisableMfaDto): Promise<{
        message: string;
    }>;
}
export {};

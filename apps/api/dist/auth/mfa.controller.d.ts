import type { Request } from 'express';
import { AuthenticatedUser } from './guards/jwt-auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { EmailService } from '../email/email.service.js';
import { VerifyTotpDto, DisableMfaDto } from './dto/mfa.dto.js';
type AuthenticatedRequest = Request & {
    user: AuthenticatedUser;
};
export declare class MfaController {
    private readonly prisma;
    private readonly emailService;
    constructor(prisma: PrismaService, emailService: EmailService);
    enableEmailMfa(request: AuthenticatedRequest): Promise<{
        message: string;
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
            displayName: string;
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

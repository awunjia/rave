import type { Request } from 'express';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { VerifyEmailDto } from './dto/verify-email.dto.js';
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
    login(dto: LoginDto, request: Request): Promise<{
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
    me(request: AuthenticatedRequest): Promise<{
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
export {};

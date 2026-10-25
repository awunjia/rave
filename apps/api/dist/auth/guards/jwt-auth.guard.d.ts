import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { DefaultUserRole } from "../../generated/prisma/enums.js";
export interface AuthenticatedUser {
    sub: string;
    email: string;
    role: DefaultUserRole;
    roles?: DefaultUserRole[];
    tokenUse: "access";
}
export type AuthenticatedRequest = Request & {
    user: AuthenticatedUser;
};
declare class _JwtAuthGuard implements CanActivate {
    private readonly jwt;
    private readonly reflector;
    constructor(jwt: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export { _JwtAuthGuard as JwtAuthGuard };

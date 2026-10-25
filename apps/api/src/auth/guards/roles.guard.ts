import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DefaultUserRole } from '../../generated/prisma/enums.js';
import { ROLES_KEY } from '../decorators/roles.decorator.js';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator.js';
import { AuthenticatedRequest } from './jwt-auth.guard.js';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        // 1. Skip if public
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        const requiredRoles = this.reflector.getAllAndOverride<DefaultUserRole[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        // If no @Roles decorator is present, any authenticated user can access it
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }

        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const user = request.user;

        if (!user) {
            return false;
        }

        // SUPER_ADMIN has global access across all endpoints
        if (user.role === DefaultUserRole.SUPER_ADMIN) {
            return true;
        }

        // Check user's primary role or assigned roles array
        const userRoles: DefaultUserRole[] = [
            user.role,
            ...(user.roles || []),
        ];

        return requiredRoles.some((role) => userRoles.includes(role));
    }
}
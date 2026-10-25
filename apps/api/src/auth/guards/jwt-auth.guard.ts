import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { DefaultUserRole } from "../../generated/prisma/enums.js";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator.js";

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

@Injectable()
class _JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    private readonly reflector: Reflector
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. Check if the route is explicitly marked public
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const authorization = request.headers.authorization;
    const match = authorization?.match(/^Bearer ([^\s]+)$/);

    if (!match) {
      throw new UnauthorizedException("Authentication required.");
    }

    try {
      const payload = await this.jwt.verifyAsync<AuthenticatedUser>(match[1], {
        algorithms: ["HS256"],
      });

      if (
        typeof payload.sub !== "string" ||
        !payload.sub ||
        typeof payload.email !== "string" ||
        !payload.email ||
        !payload.role ||
        payload.tokenUse !== "access"
      ) {
        throw new UnauthorizedException("Invalid access token payload.");
      }

      request.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException("Invalid or expired access token.");
    }
  }
}

export { _JwtAuthGuard as JwtAuthGuard };
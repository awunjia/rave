
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import type { Request } from 'express';
  
  export interface AuthenticatedUser {
    sub: string;
    email: string;
  }
  
  type AuthenticatedRequest = Request & {
    user: AuthenticatedUser;
  };
  
  @Injectable()
  export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwt: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context
        .switchToHttp()
        .getRequest<AuthenticatedRequest>();
  
      const [scheme, token] =
        request.headers.authorization?.split(' ') ?? [];
  
      if (scheme !== 'Bearer' || !token) {
        throw new UnauthorizedException('Authentication required.');
      }
  
      try {
        request.user = await this.jwt.verifyAsync<AuthenticatedUser>(
          token,
        );
  
        if (!request.user.sub || !request.user.email) {
          throw new UnauthorizedException('Invalid access token.');
        }
  
        return true;
      } catch {
        throw new UnauthorizedException('Invalid or expired access token.');
      }
    }
  }
  
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException, } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator.js";
let _JwtAuthGuard = class _JwtAuthGuard {
    jwt;
    reflector;
    constructor(jwt, reflector) {
        this.jwt = jwt;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;
        const match = authorization?.match(/^Bearer ([^\s]+)$/);
        if (!match) {
            throw new UnauthorizedException("Authentication required.");
        }
        try {
            const payload = await this.jwt.verifyAsync(match[1], {
                algorithms: ["HS256"],
            });
            if (typeof payload.sub !== "string" ||
                !payload.sub ||
                typeof payload.email !== "string" ||
                !payload.email ||
                !payload.role ||
                payload.tokenUse !== "access") {
                throw new UnauthorizedException("Invalid access token payload.");
            }
            request.user = payload;
            return true;
        }
        catch {
            throw new UnauthorizedException("Invalid or expired access token.");
        }
    }
};
_JwtAuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService,
        Reflector])
], _JwtAuthGuard);
export { _JwtAuthGuard as JwtAuthGuard };
//# sourceMappingURL=jwt-auth.guard.js.map
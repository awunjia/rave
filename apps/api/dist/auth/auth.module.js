var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from './auth.controller.js';
import { MfaController } from './mfa.controller.js';
import { AuthService } from './auth.service.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { RolesGuard } from './guards/roles.guard.js';
import { EmailModule } from '../email/email.module.js';
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    Module({
        imports: [
            ConfigModule,
            EmailModule,
            JwtModule.registerAsync({
                imports: [ConfigModule],
                inject: [ConfigService],
                useFactory: (config) => ({
                    secret: config.getOrThrow('JWT_ACCESS_SECRET'),
                    signOptions: {
                        algorithm: "HS256",
                        expiresIn: 900,
                        issuer: "rave-api",
                        audience: "rave-web",
                    },
                    verifyOptions: {
                        algorithms: ["HS256"],
                        issuer: "rave-api",
                        audience: "rave-web",
                    },
                }),
            }),
        ],
        controllers: [AuthController, MfaController],
        providers: [
            AuthService,
            {
                provide: APP_GUARD,
                useClass: JwtAuthGuard,
            },
            {
                provide: APP_GUARD,
                useClass: RolesGuard,
            },
        ],
        exports: [AuthService],
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map
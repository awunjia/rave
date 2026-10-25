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

@Module({
  imports: [
    ConfigModule,
    EmailModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_ACCESS_SECRET'),
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
      useClass: JwtAuthGuard, // Runs first: validates JWT & attaches request.user
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,   // Runs second: checks role permissions via @Roles()
    },
  ],
  exports: [AuthService],
})
export class AuthModule { }
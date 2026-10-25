var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthController } from './health/health.controller.js';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule, } from '@nestjs/throttler';
export const { ObserveModule, ObserveInstrument } = createObserveModule();
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '../../.env',
            }),
            ObserveModule.forRoot({
                appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
                appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
                serviceId: 'api',
            }),
            ThrottlerModule.forRoot([
                {
                    name: 'default',
                    ttl: 60_000,
                    limit: 100,
                },
            ]),
            AuthModule,
            PrismaModule,
        ],
        controllers: [AppController, HealthController],
        providers: [
            AppService,
            {
                provide: APP_GUARD,
                useClass: ThrottlerGuard,
            },
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
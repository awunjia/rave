import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  // Pass the ObserveInstrument option here to fix the tracing span error
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: process.env.WEB_URL ?? 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });

  const port = Number(process.env.PORT) || 4000;

  await app.listen(port, '0.0.0.0');

  console.log(`API running at http://localhost:${port}/api/v1`);
}

bootstrap().catch((error) => {
  console.error('Failed to start API:', error);
  process.exit(1);
});
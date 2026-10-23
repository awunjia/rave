
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.enableCors({
    origin: process.env.WEB_URL ?? 'http://localhost:3000',
    credentials: true,
  });

  const port = Number(process.env.PORT) || 4000;

  await app.listen(port, '0.0.0.0');

  console.log(`API running at http://localhost:${port}/api/v1`);
}

bootstrap().catch((error) => {
  console.error('Failed to start API:', error);
  process.exit(1);
});

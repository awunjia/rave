
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    UseGuards,
  } from '@nestjs/common';
  import type { Request } from 'express';
  import { AuthService } from './auth.service.js';
  import { RegisterDto } from './dto/register.dto.js';
  import { LoginDto } from './dto/login.dto.js';
  import { VerifyEmailDto } from "./dto/verify-email.dto.js";
  import {
    AuthenticatedUser,
    JwtAuthGuard,
  } from './guards/jwt-auth.guard.js';
  
  type AuthenticatedRequest = Request & {
    user: AuthenticatedUser;
  };
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly auth: AuthService) {}
  
    @Post('register')
    register(@Body() dto: RegisterDto) {
      return this.auth.register(dto);
    }

    @Post("verify-email")
    @HttpCode(HttpStatus.OK)
    verifyEmail(@Body() dto: VerifyEmailDto) {
      return this.auth.verifyEmail(dto);
    }
  
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: LoginDto) {
      return this.auth.login(dto);
    }
  
    @Get('me')
    @UseGuards(JwtAuthGuard)
    me(@Req() request: AuthenticatedRequest) {
      return this.auth.getProfile(request.user.sub);
    }
  }
  
import { IsEmail, IsOptional, IsString, IsIn } from 'class-validator';

export class ForgotPasswordDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @IsIn(['en', 'fr'])
  locale?: string;
}
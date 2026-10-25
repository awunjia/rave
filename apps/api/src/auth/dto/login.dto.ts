
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsString()
  @MinLength(1, {
    message: 'Password is required.',
  })
  @MaxLength(72, {
    message: 'Password must not exceed 72 characters.',
  })
  password!: string;
}

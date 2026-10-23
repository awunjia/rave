
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  Matches,
  IsOptional,
  IsIn,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name!: string;

  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsOptional()
  @IsIn(['en', 'fr'])
  locale?: 'en' | 'fr';

  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long.',
  })
  @MaxLength(72, {
    message: 'Password must not exceed 72 characters.',
  })
  @Matches(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter.',
  })
  @Matches(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter.',
  })
  @Matches(/[0-9]/, {
    message: 'Password must contain at least one number.',
  })
  @Matches(/[^A-Za-z0-9]/, {
    message: 'Password must contain at least one special character.',
  })
  password!: string;
}

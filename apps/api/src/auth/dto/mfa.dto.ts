import { IsString, IsNotEmpty, Length } from 'class-validator';

export class VerifyTotpDto {
    @IsString()
    @IsNotEmpty()
    @Length(6, 6, { message: 'TOTP code must be exactly 6 digits.' })
    code: string;
}

export class DisableMfaDto {
    @IsString()
    @IsNotEmpty()
    password: string;
}
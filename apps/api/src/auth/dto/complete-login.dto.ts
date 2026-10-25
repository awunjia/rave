
import {
    IsIn,
    IsString,
    IsUUID,
    Matches,
} from 'class-validator';

export class CompleteLoginDto {
    @IsUUID()
    challengeId!: string;

    @IsString()
    @Matches(/^\d{6}$/, {
        message: 'Authentication code must contain exactly 6 digits.',
    })
    code!: string;

    @IsIn(['EMAIL', 'TOTP'])
    method!: 'EMAIL' | 'TOTP';
}

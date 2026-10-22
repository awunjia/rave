import { ConfigService } from '@nestjs/config';
export declare class EmailService {
    private readonly config;
    private readonly logger;
    private transporter?;
    constructor(config: ConfigService);
    private getTransporter;
    sendMail(options: {
        to: string;
        subject: string;
        text: string;
        html?: string;
    }): Promise<void>;
    sendMfaCode(to: string, code: string): Promise<void>;
    sendPasswordResetLink(to: string, resetUrl: string): Promise<void>;
    sendVerificationCode(to: string, code: string): Promise<void>;
}

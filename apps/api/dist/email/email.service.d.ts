import { ConfigService } from '@nestjs/config';
export type EmailLocale = 'en' | 'fr';
export declare class EmailService {
    private readonly config;
    private readonly logger;
    private transporter?;
    constructor(config: ConfigService);
    private getTransporter;
    private normalizeLocale;
    private escapeHtml;
    private renderOtp;
    private renderEmail;
    private sendMail;
    sendVerificationCode(to: string, code: string, requestedLocale?: string): Promise<void>;
    sendMfaCode(to: string, code: string, requestedLocale?: string): Promise<void>;
    sendPasswordResetLink(to: string, resetUrl: string, requestedLocale?: string): Promise<void>;
}

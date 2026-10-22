
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { type Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter?: Transporter;

  constructor(private readonly config: ConfigService) {}

  private getTransporter(): Transporter {
    if (this.transporter) {
      return this.transporter;
    }

    const host = this.config.get<string>('SMTP_HOST');
    const port = Number(this.config.get<string>('SMTP_PORT') ?? 587);
    const user = this.config.get<string>('SMTP_USER');
    const pass = this.config.get<string>('SMTP_PASS');

    if (!host || !user || !pass || !Number.isInteger(port) ||
        port < 1 || port > 65535) {
      throw new InternalServerErrorException(
        'Email delivery is not configured.',
      );
    }

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure:
        this.config.get<string>('SMTP_SECURE') === 'true',
      auth: { user, pass },
    });

    return this.transporter;
  }

  async sendMail(options: {
    to: string;
    subject: string;
    text: string;
    html?: string;
  }): Promise<void> {
    const from = this.config.get<string>('SMTP_FROM');

    if (!from) {
      throw new InternalServerErrorException(
        'Email sender is not configured.',
      );
    }

    try {
      await this.getTransporter().sendMail({
        from,
        to: options.to,
        subject: options.subject,
        text: options.text,
        ...(options.html ? { html: options.html } : {}),
      });

      this.logger.log('Email sent successfully.');
    } catch (error: unknown) {
      // Do not log credentials, message contents, or verification codes.
      this.logger.error(
        `Email delivery failed: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );

      throw new InternalServerErrorException(
        'Unable to send email at this time.',
      );
    }
  }

  async sendMfaCode(to: string, code: string): Promise<void> {
    await this.sendMail({
      to,
      subject: 'Your Rave security verification code',
      text: [
        `Your Rave verification code is: ${code}`,
        '',
        'This code expires shortly. Do not share it with anyone.',
        'If you did not request this code, you can ignore this email.',
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:520px;margin:auto">
          <h2>Rave security verification</h2>
          <p>Use the following code to verify your identity:</p>
          <p style="font-size:28px;font-weight:bold;letter-spacing:6px">
            ${code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </p>
          <p>This code expires shortly. Do not share it with anyone.</p>
          <p>If you did not request this code, ignore this email.</p>
        </div>
      `,
    });
  }

  async sendPasswordResetLink(
    to: string,
    resetUrl: string,
  ): Promise<void> {
    await this.sendMail({
      to,
      subject: 'Reset your Rave password',
      text: [
        'A password reset was requested for your Rave account.',
        '',
        `Use this link to reset your password: ${resetUrl}`,
        '',
        'If you did not request this, you can ignore this email.',
      ].join('\n'),
    });
  }


  async sendVerificationCode(
  to: string,
  code: string,
): Promise<void> {
  const digits = code.split("");

  const cells = digits
    .map(
      (digit) => `
        <td style="padding:0 3px">
          <div style="
            width:38px;
            height:48px;
            line-height:48px;
            text-align:center;
            border:1px solid #D9E2EC;
            border-radius:8px;
            background:#F0F4F8;
            color:#102A43;
            font-size:25px;
            font-weight:700;
          ">${digit}</div>
        </td>`,
    )
    .join("");

  await this.sendMail({
    to,
    subject: "Verify your email address | Rave",
    text: [
      "Welcome to Rave!",
      "",
      `Your email verification code is: ${code}`,
      "",
      "This code expires in 10 minutes.",
      "If you did not create a Rave account, you can ignore this email.",
    ].join("\n"),
    html: `
      <div style="margin:0;padding:36px 12px;background:#F0F4F8;
                  font-family:Arial,Helvetica,sans-serif;color:#243B53">
        <div style="max-width:540px;margin:0 auto;background:#FFFFFF;
                    border-radius:14px;overflow:hidden;
                    border:1px solid #D9E2EC">
          <div style="padding:27px 32px;background:#102A43;color:#FFFFFF">
            <div style="font-size:27px;font-weight:700;letter-spacing:1px">
              Rave
            </div>
            <div style="margin-top:7px;font-size:13px;color:#D9E2EC">
              Travel consultation, made clearer.
            </div>
          </div>

          <div style="padding:32px">
            <h1 style="margin:0 0 16px;color:#102A43;font-size:24px">
              Verify your email
            </h1>

            <p style="font-size:15px;line-height:1.8">
              Welcome to Rave! Enter the verification code below to
              confirm your email address and complete your registration.
            </p>

            <div style="margin:28px 0;text-align:center">
              <table role="presentation"
                     style="margin:0 auto;border-collapse:separate">
                <tr>
                  ${cells}
                  <td style="padding-left:8px;vertical-align:middle">
                    <span title="Copy code"
                          aria-label="Copy code"
                          style="font-size:20px;color:#486581">▢</span>
                  </td>
                </tr>
              </table>
            </div>

            <p style="text-align:center;font-size:13px;color:#486581">
              Enter all six digits on the verification page.
            </p>

            <div style="margin:24px 0;padding:14px 16px;
                        background:#F0F4F8;border-radius:8px;
                        font-size:13px;line-height:1.7">
              <strong style="color:#102A43">Security notice</strong><br>
              This code expires in 10 minutes. Never share it with anyone.
              Rave support will never ask you to disclose your code.
            </div>

            <p style="font-size:14px;line-height:1.7">
              If you didn't create a Rave account, you can safely ignore
              this email.
            </p>

            <p style="margin-top:30px;font-size:13px;color:#829AB1">
              &copy; ${new Date().getFullYear()} Rave. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    `,
  });
}
}

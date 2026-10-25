var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EmailService_1;
import { Injectable, InternalServerErrorException, Logger, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer from 'nodemailer';
const COLORS = {
    navy: '#123B66',
    navyDark: '#0B1F3A',
    gold: '#D4AF37',
    background: '#F8FAFC',
    white: '#FFFFFF',
    foreground: '#102A43',
    muted: '#EEF2F7',
    border: '#E2E8F0',
    secondary: '#486581',
    subtle: '#829AB1',
};
const TRANSLATIONS = {
    en: {
        brandTagline: 'Consultations with confidence.',
        automatedNotice: 'This is an automated security email.',
        subjects: {
            verification: 'Verify your email address | Rave',
            mfa: 'Your Rave security verification code',
            reset: 'Reset your Rave password',
            mfaActivated: 'Security Alert: MFA Activated | Rave',
        },
        verification: {
            preheader: 'Confirm your email to complete registration.',
            heading: 'Verify your email address',
            greeting: 'Welcome to Rave!',
            body: 'Enter the verification code below to confirm your email address and activate your account.',
            codeLabel: 'YOUR VERIFICATION CODE',
            copyHint: 'Select the code to copy it, then paste it into the verification page.',
            securityTitle: 'Keep your account secure',
            securityBody: 'This code expires in 10 minutes. Never share it with anyone. Rave support will never ask for your verification code.',
            ignoreNotice: 'If you did not create a Rave account, you can safely ignore this email.',
            resetButton: 'Reset my password',
            resetExpiry: 'This link expires shortly.',
            footer: 'All rights reserved.',
        },
        mfa: {
            preheader: 'Your Rave security verification code.',
            heading: 'Security verification',
            greeting: 'Hello,',
            body: 'Use the verification code below to confirm your identity.',
            codeLabel: 'YOUR SECURITY CODE',
            copyHint: 'Select the code to copy it, then paste it into the verification page.',
            securityTitle: 'Important security notice',
            securityBody: 'This code expires shortly. Never share it with anyone, including anyone claiming to represent Rave.',
            ignoreNotice: 'If you did not request this code, you can ignore this email.',
            resetButton: 'Reset my password',
            resetExpiry: 'This link expires shortly.',
            footer: 'All rights reserved.',
        },
        reset: {
            preheader: 'Instructions to reset your Rave password.',
            heading: 'Reset your password',
            greeting: 'Hello,',
            body: 'We received a request to reset your Rave password. Use the button below to choose a new password.',
            codeLabel: 'YOUR VERIFICATION CODE',
            copyHint: 'If the button does not work, copy the link into your browser.',
            securityTitle: 'Keep your account secure',
            securityBody: 'If you did not request a password reset, do not use the link. Your password remains unchanged unless you complete the reset.',
            ignoreNotice: 'If you did not request this change, you can safely ignore this email.',
            resetButton: 'Reset my password',
            resetExpiry: 'This reset link is valid for a limited time.',
            footer: 'All rights reserved.',
        },
        mfaActivated: {
            preheader: 'Multi-factor authentication has been activated on your account.',
            heading: 'Multi-Factor Authentication Activated',
            greeting: 'Hello {name},',
            body: 'This email confirms that <strong>{mfaType}</strong> multi-factor authentication has been successfully activated on your account. On your next sign-in, a security verification challenge will be required.',
            securityTitle: 'Keep your account secure',
            securityBody: 'If you did not perform this action, please reset your password immediately.',
            ignoreNotice: 'This is an automated security notification.',
            footer: 'All rights reserved.',
        },
    },
    fr: {
        brandTagline: 'Des consultations en toute confiance.',
        automatedNotice: 'Ceci est un e-mail de sécurité automatique.',
        subjects: {
            verification: 'Vérifiez votre adresse e-mail | Rave',
            mfa: 'Votre code de vérification de sécurité Rave',
            reset: 'Réinitialisez votre mot de passe Rave',
            mfaActivated: 'Alerte de sécurité : MFA activé | Rave',
        },
        verification: {
            preheader: 'Confirmez votre adresse e-mail pour terminer votre inscription.',
            heading: 'Vérifiez votre adresse e-mail',
            greeting: 'Bienvenue sur Rave !',
            body: 'Saisissez le code ci-dessous pour confirmer votre adresse e-mail et activer votre compte.',
            codeLabel: 'VOTRE CODE DE VÉRIFICATION',
            copyHint: 'Sélectionnez le code pour le copier, puis collez-le sur la page de vérification.',
            securityTitle: 'Protégez votre compte',
            securityBody: 'Ce code expire dans 10 minutes. Ne le communiquez à personne. Le support Rave ne vous demandera jamais votre code.',
            ignoreNotice: "Si vous n'avez pas créé de compte Rave, vous pouvez ignorer cet e-mail.",
            resetButton: 'Réinitialiser mon mot de passe',
            resetExpiry: 'Ce lien expire prochainement.',
            footer: 'Tous droits réservés.',
        },
        mfa: {
            preheader: 'Votre code de vérification de sécurité Rave.',
            heading: 'Vérification de sécurité',
            greeting: 'Bonjour,',
            body: 'Utilisez le code ci-dessous pour confirmer votre identité.',
            codeLabel: 'VOTRE CODE DE SÉCURITÉ',
            copyHint: 'Sélectionnez le code pour le copier, puis collez-le sur la page de vérification.',
            securityTitle: 'Important : sécurité de votre compte',
            securityBody: 'Ce code expire prochainement. Ne le communiquez à personne, même à une personne prétendant représenter Rave.',
            ignoreNotice: "Si vous n'avez pas demandé ce code, vous pouvez ignorer cet e-mail.",
            resetButton: 'Réinitialiser mon mot de passe',
            resetExpiry: 'Ce lien expire prochainement.',
            footer: 'Tous droits réservés.',
        },
        reset: {
            preheader: 'Instructions pour réinitialiser votre mot de passe Rave.',
            heading: 'Réinitialisez votre mot de passe',
            greeting: 'Bonjour,',
            body: 'Nous avons reçu une demande de réinitialisation de votre mot de passe Rave. Cliquez ci-dessous pour en choisir un nouveau.',
            codeLabel: 'VOTRE CODE DE VÉRIFICATION',
            copyHint: 'Si le bouton ne fonctionne pas, copiez le lien dans votre navigateur.',
            securityTitle: 'Protégez votre compte',
            securityBody: "Si vous n'avez pas demandé cette réinitialisation, n'utilisez pas le lien. Votre mot de passe restera inchangé si vous ne terminez pas la procédure.",
            ignoreNotice: "Si vous n'avez pas demandé cette modification, vous pouvez ignorer cet e-mail.",
            resetButton: 'Réinitialiser mon mot de passe',
            resetExpiry: 'Ce lien est valable pendant une durée limitée.',
            footer: 'Tous droits réservés.',
        },
        mfaActivated: {
            preheader: "L'authentification multifacteur a été activée sur votre compte.",
            heading: 'Authentification multifacteur activée',
            greeting: 'Bonjour {name},',
            body: "Cet e-mail confirme que l'authentification multifacteur <strong>{mfaType}</strong> a été activée sur votre compte. Lors de votre prochaine connexion, un défi de vérification de sécurité sera requis.",
            securityTitle: 'Protégez votre compte',
            securityBody: "Si vous n'êtes pas à l'origine de cette action, veuillez réinitialiser votre mot de passe immédiatement.",
            ignoreNotice: 'Ceci est une notification de sécurité automatique.',
            footer: 'Tous droits réservés.',
        },
    },
};
let EmailService = EmailService_1 = class EmailService {
    config;
    logger = new Logger(EmailService_1.name);
    transporter;
    constructor(config) {
        this.config = config;
    }
    getTransporter() {
        if (this.transporter)
            return this.transporter;
        const host = this.config.get('SMTP_HOST');
        const port = Number(this.config.get('SMTP_PORT') ?? 587);
        const user = this.config.get('SMTP_USER');
        const pass = this.config.get('SMTP_PASS');
        if (!host ||
            !user ||
            !pass ||
            !Number.isInteger(port) ||
            port < 1 ||
            port > 65535) {
            throw new InternalServerErrorException('Email delivery is not configured.');
        }
        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure: this.config.get('SMTP_SECURE') === 'true',
            auth: { user, pass },
        });
        return this.transporter;
    }
    normalizeLocale(locale) {
        return locale?.trim().toLowerCase().startsWith('fr') ? 'fr' : 'en';
    }
    escapeHtml(value) {
        return value.replace(/[&<>"']/g, (character) => {
            const entities = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
            };
            return entities[character];
        });
    }
    renderOtp(code, content) {
        const e = (value) => this.escapeHtml(value);
        return `
      <table role="presentation" width="100%" cellspacing="0"
             cellpadding="0" border="0" style="margin:28px 0;">
        <tr>
          <td align="center">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;
                      letter-spacing:1.8px;color:${COLORS.secondary};">
              ${e(content.codeLabel ?? '')}
            </p>
            <table role="presentation" cellspacing="0" cellpadding="0"
                   border="0" style="margin:0 auto;">
              <tr>
                <td style="padding:15px 18px;background:${COLORS.muted};
                           border:1px solid ${COLORS.border};
                           border-radius:10px;">
                  <span style="font-family:Arial,sans-serif;font-size:29px;
                               font-weight:700;letter-spacing:6px;
                               line-height:1.5;color:${COLORS.navyDark};
                               overflow-wrap:anywhere;user-select:text;">
                    ${e(code)}
                  </span>
                </td>
                <td width="38" align="center" valign="middle"
                    style="padding-left:8px;">
                  <span aria-hidden="true"
                        style="display:inline-block;width:16px;height:19px;
                               border:2px solid ${COLORS.secondary};
                               border-radius:3px;font-size:0;">
                    <span style="display:block;position:relative;
                                 left:-5px;top:4px;width:13px;height:15px;
                                 background:${COLORS.white};
                                 border:2px solid ${COLORS.secondary};
                                 border-radius:3px;"></span>
                  </span>
                </td>
              </tr>
            </table>
            <p style="margin:12px 0 0;font-size:12px;line-height:1.8;
                      color:${COLORS.secondary};">
              ${e(content.copyHint ?? '')}
            </p>
          </td>
        </tr>
      </table>
    `;
    }
    renderEmail(options) {
        const { locale, content, code, resetUrl } = options;
        const translations = TRANSLATIONS[locale];
        const e = (value) => this.escapeHtml(value);
        const otpHtml = code ? this.renderOtp(code, content) : '';
        const resetHtml = resetUrl
            ? `
        <p style="text-align:center;margin:28px 0;">
          <a href="${e(resetUrl)}"
             style="display:inline-block;padding:15px 26px;
                    background:${COLORS.gold};border-radius:8px;
                    color:${COLORS.navyDark};font-size:15px;
                    font-weight:700;text-decoration:none;">
            ${e(content.resetButton ?? '')}
          </a>
        </p>
        <p style="font-size:13px;line-height:1.8;color:${COLORS.secondary};">
          ${e(content.resetExpiry ?? '')}
        </p>
        <p style="font-size:12px;line-height:1.8;overflow-wrap:anywhere;
                  color:${COLORS.secondary};">
          ${e(content.copyHint ?? '')}<br />
          <a href="${e(resetUrl)}" style="color:${COLORS.navy};">
            ${e(resetUrl)}
          </a>
        </p>
      `
            : '';
        return `
      <!doctype html>
      <html lang="${locale}">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="color-scheme" content="light" />
          <title>${e(content.heading)}</title>
        </head>
        <body style="margin:0;padding:0;background:${COLORS.background};
                     font-family:Arial,Helvetica,sans-serif;
                     color:${COLORS.foreground};">
          <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
            ${e(content.preheader)}
          </div>
          <table role="presentation" width="100%" cellspacing="0"
                 cellpadding="0" border="0"
                 style="background:${COLORS.background};">
            <tr>
              <td align="center" style="padding:32px 12px;">
                <table role="presentation" width="100%" cellspacing="0"
                       cellpadding="0" border="0"
                       style="max-width:560px;background:${COLORS.white};
                              border:1px solid ${COLORS.border};
                              border-radius:12px;">
                  <tr>
                    <td style="padding:25px 30px;background:${COLORS.navyDark};
                               border-bottom:3px solid ${COLORS.gold};">
                      <p style="margin:0;font-size:28px;font-weight:800;
                                color:${COLORS.white};">
                        Rave<span style="color:${COLORS.gold};">.</span>
                      </p>
                      <p style="margin:7px 0 0;font-size:12px;color:#D9E2EC;">
                        ${e(translations.brandTagline)}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px 30px;">
                      <h1 style="margin:0 0 20px;font-size:24px;
                                 line-height:1.35;color:${COLORS.navyDark};">
                        ${e(content.heading)}
                      </h1>
                      <p style="font-size:15px;line-height:1.8;">
                        ${content.greeting}
                      </p>
                      <p style="font-size:15px;line-height:1.9;">
                        ${content.body}
                      </p>
                      ${otpHtml}
                      ${resetHtml}
                      <table role="presentation" width="100%" cellspacing="0"
                             cellpadding="0" border="0"
                             style="margin-top:25px;background:${COLORS.background};
                                    border:1px solid ${COLORS.border};
                                    border-radius:8px;">
                        <tr>
                          <td style="padding:16px;">
                            <p style="margin:0 0 7px;font-size:13px;
                                      font-weight:700;color:${COLORS.navyDark};">
                              ${e(content.securityTitle)}
                            </p>
                            <p style="margin:0;font-size:13px;line-height:1.8;
                                      color:${COLORS.secondary};">
                              ${e(content.securityBody)}
                            </p>
                          </td>
                        </tr>
                      </table>
                      <p style="margin-top:22px;font-size:13px;line-height:1.8;
                                color:${COLORS.secondary};">
                        ${e(content.ignoreNotice)}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:20px 30px;background:${COLORS.background};
                               border-top:1px solid ${COLORS.border};">
                      <p style="margin:0 0 6px;font-size:12px;line-height:1.8;
                                color:${COLORS.secondary};">
                        &copy; ${new Date().getFullYear()} Rave.
                        ${e(content.footer)}
                      </p>
                      <p style="margin:0;font-size:11px;color:${COLORS.subtle};">
                        ${e(translations.automatedNotice)}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
    }
    async sendMail(options) {
        const from = this.config.get('SMTP_FROM');
        if (!from) {
            throw new InternalServerErrorException('Email sender is not configured.');
        }
        try {
            await this.getTransporter().sendMail({
                from,
                to: options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
            });
            this.logger.log('Email sent successfully.');
        }
        catch (error) {
            this.logger.error(`Email delivery failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
            throw new InternalServerErrorException('Unable to send email at this time.');
        }
    }
    async sendVerificationCode(to, code, requestedLocale = 'en') {
        const locale = this.normalizeLocale(requestedLocale);
        const translations = TRANSLATIONS[locale];
        const content = translations.verification;
        await this.sendMail({
            to,
            subject: translations.subjects.verification,
            text: [
                content.heading,
                '',
                content.greeting,
                content.body,
                '',
                `${content.codeLabel}: ${code}`,
                '',
                content.copyHint,
                '',
                content.securityTitle,
                content.securityBody,
                content.ignoreNotice,
            ].join('\n'),
            html: this.renderEmail({ locale, content, code }),
        });
    }
    async sendMfaCode(to, code, requestedLocale = 'en') {
        const locale = this.normalizeLocale(requestedLocale);
        const translations = TRANSLATIONS[locale];
        const content = translations.mfa;
        await this.sendMail({
            to,
            subject: translations.subjects.mfa,
            text: [
                content.heading,
                '',
                content.greeting,
                content.body,
                '',
                `${content.codeLabel}: ${code}`,
                '',
                content.copyHint,
                '',
                content.securityTitle,
                content.securityBody,
                content.ignoreNotice,
            ].join('\n'),
            html: this.renderEmail({ locale, content, code }),
        });
    }
    async sendPasswordResetEmail(to, token, requestedLocale = 'en') {
        const locale = this.normalizeLocale(requestedLocale);
        const translations = TRANSLATIONS[locale];
        const content = translations.reset;
        const frontendUrl = this.config.get('FRONTEND_URL') ||
            process.env.FRONTEND_URL ||
            'http://localhost:3000';
        const resetPath = locale === 'fr'
            ? '/auth/reinitialisation-mot-de-passe'
            : '/auth/reset-password';
        const resetUrl = `${frontendUrl.replace(/\/+$/, '')}/${locale}${resetPath}?token=${token}`;
        await this.sendMail({
            to,
            subject: translations.subjects.reset,
            text: [
                content.heading,
                '',
                content.greeting,
                content.body,
                '',
                `${content.resetButton}: ${resetUrl}`,
                '',
                content.resetExpiry,
                content.securityTitle,
                content.securityBody,
                content.ignoreNotice,
            ].join('\n'),
            html: this.renderEmail({
                locale,
                content,
                resetUrl,
            }),
        });
    }
    async sendPasswordResetLink(to, resetUrl, requestedLocale = 'en') {
        const locale = this.normalizeLocale(requestedLocale);
        const translations = TRANSLATIONS[locale];
        const content = translations.reset;
        let parsedUrl;
        try {
            parsedUrl = new URL(resetUrl);
        }
        catch {
            throw new InternalServerErrorException('Password reset URL is invalid.');
        }
        const appUrl = this.config.get('APP_URL');
        if (!appUrl) {
            throw new InternalServerErrorException('Application URL is not configured.');
        }
        let trustedOrigin;
        try {
            trustedOrigin = new URL(appUrl).origin;
        }
        catch {
            throw new InternalServerErrorException('Application URL is invalid.');
        }
        if ((parsedUrl.protocol !== 'https:' &&
            parsedUrl.protocol !== 'http:') ||
            parsedUrl.origin !== trustedOrigin) {
            throw new InternalServerErrorException('Password reset URL must belong to the configured application.');
        }
        const safeResetUrl = parsedUrl.toString();
        await this.sendMail({
            to,
            subject: translations.subjects.reset,
            text: [
                content.heading,
                '',
                content.greeting,
                content.body,
                '',
                `${content.resetButton}: ${safeResetUrl}`,
                '',
                content.resetExpiry,
                content.securityTitle,
                content.securityBody,
                content.ignoreNotice,
            ].join('\n'),
            html: this.renderEmail({
                locale,
                content,
                resetUrl: safeResetUrl,
            }),
        });
    }
    async sendMfaActivatedNotification(params) {
        const locale = this.normalizeLocale(params.requestedLocale);
        const translations = TRANSLATIONS[locale];
        const template = translations.mfaActivated;
        const greeting = template.greeting.replace('{name}', params.name);
        const body = template.body.replace('{mfaType}', params.mfaType);
        const content = {
            ...template,
            greeting,
            body,
        };
        await this.sendMail({
            to: params.to,
            subject: translations.subjects.mfaActivated,
            text: [
                content.heading,
                '',
                greeting,
                body,
                '',
                content.securityTitle,
                content.securityBody,
                content.ignoreNotice,
            ].join('\n'),
            html: this.renderEmail({ locale, content }),
        });
    }
};
EmailService = EmailService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], EmailService);
export { EmailService };
//# sourceMappingURL=email.service.js.map
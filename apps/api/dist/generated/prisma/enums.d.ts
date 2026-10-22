export declare const DefaultUserRole: {
    readonly CLIENT: "CLIENT";
    readonly CONSULTANT: "CONSULTANT";
    readonly REVIEWER: "REVIEWER";
    readonly ADMIN: "ADMIN";
    readonly SUPER_ADMIN: "SUPER_ADMIN";
};
export type DefaultUserRole = (typeof DefaultUserRole)[keyof typeof DefaultUserRole];
export declare const UserStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const AuthProvider: {
    readonly EMAIL: "EMAIL";
    readonly GOOGLE: "GOOGLE";
};
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
export declare const MfaType: {
    readonly EMAIL: "EMAIL";
    readonly TOTP: "TOTP";
    readonly PASSKEY: "PASSKEY";
};
export type MfaType = (typeof MfaType)[keyof typeof MfaType];
export declare const TokenPurpose: {
    readonly EMAIL_VERIFICATION: "EMAIL_VERIFICATION";
    readonly PASSWORD_RESET: "PASSWORD_RESET";
    readonly LOGIN_CHALLENGE: "LOGIN_CHALLENGE";
};
export type TokenPurpose = (typeof TokenPurpose)[keyof typeof TokenPurpose];
export declare const RoleScope: {
    readonly PLATFORM: "PLATFORM";
    readonly ORGANIZATION: "ORGANIZATION";
};
export type RoleScope = (typeof RoleScope)[keyof typeof RoleScope];
export declare const BookingStatus: {
    readonly PENDING_PAYMENT: "PENDING_PAYMENT";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
    readonly NO_SHOW: "NO_SHOW";
    readonly EXPIRED: "EXPIRED";
};
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
export declare const PaymentProvider: {
    readonly STRIPE: "STRIPE";
    readonly MTN_MOMO_CM: "MTN_MOMO_CM";
    readonly ORANGE_MONEY_CM: "ORANGE_MONEY_CM";
};
export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly SUCCEEDED: "SUCCEEDED";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
    readonly REFUND_PENDING: "REFUND_PENDING";
    readonly PARTIALLY_REFUNDED: "PARTIALLY_REFUNDED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const RefundStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly SUCCEEDED: "SUCCEEDED";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
};
export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus];
export declare const MeetingProvider: {
    readonly GOOGLE_MEET: "GOOGLE_MEET";
    readonly ZOOM: "ZOOM";
};
export type MeetingProvider = (typeof MeetingProvider)[keyof typeof MeetingProvider];
export declare const ContentStatus: {
    readonly DRAFT: "DRAFT";
    readonly IN_REVIEW: "IN_REVIEW";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus];
export declare const NotificationStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly SENT: "SENT";
    readonly FAILED: "FAILED";
};
export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus];
export declare const NotificationChannel: {
    readonly EMAIL: "EMAIL";
    readonly IN_APP: "IN_APP";
};
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];
export declare const AuditSeverity: {
    readonly INFO: "INFO";
    readonly WARNING: "WARNING";
    readonly CRITICAL: "CRITICAL";
};
export type AuditSeverity = (typeof AuditSeverity)[keyof typeof AuditSeverity];

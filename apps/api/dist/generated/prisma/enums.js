export const DefaultUserRole = {
    CLIENT: 'CLIENT',
    CONSULTANT: 'CONSULTANT',
    REVIEWER: 'REVIEWER',
    ADMIN: 'ADMIN',
    SUPER_ADMIN: 'SUPER_ADMIN'
};
export const UserStatus = {
    PENDING: 'PENDING',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    DELETED: 'DELETED'
};
export const AuthProvider = {
    EMAIL: 'EMAIL',
    GOOGLE: 'GOOGLE'
};
export const MfaType = {
    EMAIL: 'EMAIL',
    TOTP: 'TOTP',
    PASSKEY: 'PASSKEY'
};
export const TokenPurpose = {
    EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
    PASSWORD_RESET: 'PASSWORD_RESET',
    LOGIN_CHALLENGE: 'LOGIN_CHALLENGE'
};
export const RoleScope = {
    PLATFORM: 'PLATFORM',
    ORGANIZATION: 'ORGANIZATION'
};
export const BookingStatus = {
    PENDING_PAYMENT: 'PENDING_PAYMENT',
    CONFIRMED: 'CONFIRMED',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED',
    NO_SHOW: 'NO_SHOW',
    EXPIRED: 'EXPIRED'
};
export const PaymentProvider = {
    STRIPE: 'STRIPE',
    MTN_MOMO_CM: 'MTN_MOMO_CM',
    ORANGE_MONEY_CM: 'ORANGE_MONEY_CM'
};
export const PaymentStatus = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    SUCCEEDED: 'SUCCEEDED',
    FAILED: 'FAILED',
    CANCELLED: 'CANCELLED',
    REFUND_PENDING: 'REFUND_PENDING',
    PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED',
    REFUNDED: 'REFUNDED'
};
export const RefundStatus = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    SUCCEEDED: 'SUCCEEDED',
    FAILED: 'FAILED',
    CANCELLED: 'CANCELLED'
};
export const MeetingProvider = {
    GOOGLE_MEET: 'GOOGLE_MEET',
    ZOOM: 'ZOOM'
};
export const ContentStatus = {
    DRAFT: 'DRAFT',
    IN_REVIEW: 'IN_REVIEW',
    PUBLISHED: 'PUBLISHED',
    ARCHIVED: 'ARCHIVED'
};
export const NotificationStatus = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    SENT: 'SENT',
    FAILED: 'FAILED'
};
export const NotificationChannel = {
    EMAIL: 'EMAIL',
    IN_APP: 'IN_APP'
};
export const AuditSeverity = {
    INFO: 'INFO',
    WARNING: 'WARNING',
    CRITICAL: 'CRITICAL'
};
//# sourceMappingURL=enums.js.map
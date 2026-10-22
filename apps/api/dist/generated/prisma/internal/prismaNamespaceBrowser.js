import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    AuthAccount: 'AuthAccount',
    Session: 'Session',
    AuthToken: 'AuthToken',
    MfaMethod: 'MfaMethod',
    RecoveryCode: 'RecoveryCode',
    FailedLoginAttempt: 'FailedLoginAttempt',
    SecurityEvent: 'SecurityEvent',
    Organization: 'Organization',
    OrganizationMember: 'OrganizationMember',
    Role: 'Role',
    Permission: 'Permission',
    RolePermission: 'RolePermission',
    UserRole: 'UserRole',
    AccessPolicy: 'AccessPolicy',
    AccessRule: 'AccessRule',
    ConsultantProfile: 'ConsultantProfile',
    Service: 'Service',
    AvailabilityRule: 'AvailabilityRule',
    AvailabilityException: 'AvailabilityException',
    Booking: 'Booking',
    BookingStatusHistory: 'BookingStatusHistory',
    MeetingProviderAccount: 'MeetingProviderAccount',
    Meeting: 'Meeting',
    Payment: 'Payment',
    PaymentAttempt: 'PaymentAttempt',
    PaymentWebhookEvent: 'PaymentWebhookEvent',
    Refund: 'Refund',
    Invoice: 'Invoice',
    Notification: 'Notification',
    NotificationPreference: 'NotificationPreference',
    OutboxEvent: 'OutboxEvent',
    BlogPost: 'BlogPost',
    BlogRevision: 'BlogRevision',
    BlogCategory: 'BlogCategory',
    BlogTag: 'BlogTag',
    BlogPostTag: 'BlogPostTag',
    OrganizationSetting: 'OrganizationSetting',
    UserSetting: 'UserSetting',
    SystemSetting: 'SystemSetting',
    FeatureFlag: 'FeatureFlag',
    AuditLog: 'AuditLog',
    ApplicationEvent: 'ApplicationEvent',
    IntegrationHealthCheck: 'IntegrationHealthCheck',
    JobExecution: 'JobExecution',
    AnalyticsEvent: 'AnalyticsEvent',
    DailyMetric: 'DailyMetric'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    role: 'role',
    status: 'status',
    emailVerifiedAt: 'emailVerifiedAt',
    mfaEnabled: 'mfaEnabled',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
export const AuthAccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    mfaVerifiedAt: 'mfaVerifiedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
};
export const AuthTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    purpose: 'purpose',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
export const MfaMethodScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    name: 'name',
    secretCiphertext: 'secretCiphertext',
    credentialId: 'credentialId',
    publicKey: 'publicKey',
    counter: 'counter',
    verifiedAt: 'verifiedAt',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt'
};
export const RecoveryCodeScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    codeHash: 'codeHash',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
export const FailedLoginAttemptScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    emailNormalized: 'emailNormalized',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    reason: 'reason',
    attemptedAt: 'attemptedAt'
};
export const SecurityEventScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    eventType: 'eventType',
    severity: 'severity',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
export const OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrganizationMemberScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    isActive: 'isActive',
    joinedAt: 'joinedAt'
};
export const RoleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    scope: 'scope',
    organizationId: 'organizationId',
    description: 'description',
    isSystem: 'isSystem',
    createdAt: 'createdAt'
};
export const PermissionScalarFieldEnum = {
    id: 'id',
    key: 'key',
    description: 'description',
    createdAt: 'createdAt'
};
export const RolePermissionScalarFieldEnum = {
    roleId: 'roleId',
    permissionId: 'permissionId'
};
export const UserRoleScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    organizationId: 'organizationId',
    grantedById: 'grantedById',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
export const AccessPolicyScalarFieldEnum = {
    id: 'id',
    key: 'key',
    description: 'description',
    isActive: 'isActive',
    effect: 'effect',
    conditions: 'conditions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AccessRuleScalarFieldEnum = {
    id: 'id',
    policyId: 'policyId',
    resource: 'resource',
    action: 'action',
    attributes: 'attributes',
    createdAt: 'createdAt'
};
export const ConsultantProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    headline: 'headline',
    biography: 'biography',
    isBookable: 'isBookable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ServiceScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    durationMinutes: 'durationMinutes',
    priceMinor: 'priceMinor',
    currency: 'currency',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AvailabilityRuleScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    consultantId: 'consultantId',
    dayOfWeek: 'dayOfWeek',
    startMinute: 'startMinute',
    endMinute: 'endMinute',
    timeZone: 'timeZone',
    effectiveFrom: 'effectiveFrom',
    effectiveUntil: 'effectiveUntil',
    isActive: 'isActive'
};
export const AvailabilityExceptionScalarFieldEnum = {
    id: 'id',
    consultantId: 'consultantId',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    reason: 'reason',
    isAvailable: 'isAvailable'
};
export const BookingScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    clientId: 'clientId',
    consultantId: 'consultantId',
    serviceId: 'serviceId',
    status: 'status',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    timeZone: 'timeZone',
    priceMinor: 'priceMinor',
    currency: 'currency',
    idempotencyKey: 'idempotencyKey',
    expiresAt: 'expiresAt',
    cancelledAt: 'cancelledAt',
    cancellationReason: 'cancellationReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BookingStatusHistoryScalarFieldEnum = {
    id: 'id',
    bookingId: 'bookingId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    reason: 'reason',
    changedBy: 'changedBy',
    createdAt: 'createdAt'
};
export const MeetingProviderAccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    provider: 'provider',
    externalAccountId: 'externalAccountId',
    accessTokenCiphertext: 'accessTokenCiphertext',
    refreshTokenCiphertext: 'refreshTokenCiphertext',
    tokenExpiresAt: 'tokenExpiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MeetingScalarFieldEnum = {
    id: 'id',
    bookingId: 'bookingId',
    provider: 'provider',
    externalMeetingId: 'externalMeetingId',
    joinUrl: 'joinUrl',
    encryptedHostUrl: 'encryptedHostUrl',
    startsAt: 'startsAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PaymentScalarFieldEnum = {
    id: 'id',
    bookingId: 'bookingId',
    provider: 'provider',
    status: 'status',
    amountMinor: 'amountMinor',
    currency: 'currency',
    providerReference: 'providerReference',
    idempotencyKey: 'idempotencyKey',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PaymentAttemptScalarFieldEnum = {
    id: 'id',
    paymentId: 'paymentId',
    attemptNumber: 'attemptNumber',
    status: 'status',
    providerReference: 'providerReference',
    errorCode: 'errorCode',
    createdAt: 'createdAt'
};
export const PaymentWebhookEventScalarFieldEnum = {
    id: 'id',
    provider: 'provider',
    externalEventId: 'externalEventId',
    payload: 'payload',
    processedAt: 'processedAt',
    receivedAt: 'receivedAt'
};
export const RefundScalarFieldEnum = {
    id: 'id',
    paymentId: 'paymentId',
    amountMinor: 'amountMinor',
    currency: 'currency',
    status: 'status',
    providerReference: 'providerReference',
    reason: 'reason',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const InvoiceScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    bookingId: 'bookingId',
    invoiceNumber: 'invoiceNumber',
    amountMinor: 'amountMinor',
    currency: 'currency',
    issuedAt: 'issuedAt',
    dueAt: 'dueAt'
};
export const NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    channel: 'channel',
    status: 'status',
    subject: 'subject',
    body: 'body',
    metadata: 'metadata',
    sentAt: 'sentAt',
    createdAt: 'createdAt'
};
export const NotificationPreferenceScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    emailEnabled: 'emailEnabled',
    remindersEnabled: 'remindersEnabled',
    marketingEnabled: 'marketingEnabled'
};
export const OutboxEventScalarFieldEnum = {
    id: 'id',
    eventType: 'eventType',
    aggregateId: 'aggregateId',
    payload: 'payload',
    attempts: 'attempts',
    availableAt: 'availableAt',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
};
export const BlogPostScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    authorId: 'authorId',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    status: 'status',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BlogRevisionScalarFieldEnum = {
    id: 'id',
    postId: 'postId',
    authorId: 'authorId',
    content: 'content',
    createdAt: 'createdAt'
};
export const BlogCategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description'
};
export const BlogTagScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug'
};
export const BlogPostTagScalarFieldEnum = {
    postId: 'postId',
    tagId: 'tagId'
};
export const OrganizationSettingScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
};
export const UserSettingScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    value: 'value',
    updatedAt: 'updatedAt'
};
export const SystemSettingScalarFieldEnum = {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt'
};
export const FeatureFlagScalarFieldEnum = {
    id: 'id',
    key: 'key',
    enabled: 'enabled',
    description: 'description',
    updatedAt: 'updatedAt'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    severity: 'severity',
    metadata: 'metadata',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
};
export const ApplicationEventScalarFieldEnum = {
    id: 'id',
    name: 'name',
    level: 'level',
    message: 'message',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
export const IntegrationHealthCheckScalarFieldEnum = {
    id: 'id',
    integration: 'integration',
    isHealthy: 'isHealthy',
    latencyMs: 'latencyMs',
    message: 'message',
    checkedAt: 'checkedAt'
};
export const JobExecutionScalarFieldEnum = {
    id: 'id',
    jobName: 'jobName',
    status: 'status',
    attempts: 'attempts',
    error: 'error',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt'
};
export const AnalyticsEventScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    actorId: 'actorId',
    eventName: 'eventName',
    anonymousId: 'anonymousId',
    properties: 'properties',
    occurredAt: 'occurredAt'
};
export const DailyMetricScalarFieldEnum = {
    id: 'id',
    metric: 'metric',
    dimensions: 'dimensions',
    dimensionsKey: 'dimensionsKey',
    value: 'value',
    date: 'date',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map
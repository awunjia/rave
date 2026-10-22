import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get authAccount(): Prisma.AuthAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get session(): Prisma.SessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get authToken(): Prisma.AuthTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mfaMethod(): Prisma.MfaMethodDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get recoveryCode(): Prisma.RecoveryCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get failedLoginAttempt(): Prisma.FailedLoginAttemptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get securityEvent(): Prisma.SecurityEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get organization(): Prisma.OrganizationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get permission(): Prisma.PermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userRole(): Prisma.UserRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get accessPolicy(): Prisma.AccessPolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get accessRule(): Prisma.AccessRuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get consultantProfile(): Prisma.ConsultantProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get service(): Prisma.ServiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get availabilityRule(): Prisma.AvailabilityRuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get availabilityException(): Prisma.AvailabilityExceptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get booking(): Prisma.BookingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bookingStatusHistory(): Prisma.BookingStatusHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get meetingProviderAccount(): Prisma.MeetingProviderAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get meeting(): Prisma.MeetingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payment(): Prisma.PaymentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentAttempt(): Prisma.PaymentAttemptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentWebhookEvent(): Prisma.PaymentWebhookEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refund(): Prisma.RefundDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invoice(): Prisma.InvoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notificationPreference(): Prisma.NotificationPreferenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get outboxEvent(): Prisma.OutboxEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get blogPost(): Prisma.BlogPostDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get blogRevision(): Prisma.BlogRevisionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get blogCategory(): Prisma.BlogCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get blogTag(): Prisma.BlogTagDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get blogPostTag(): Prisma.BlogPostTagDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get organizationSetting(): Prisma.OrganizationSettingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userSetting(): Prisma.UserSettingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get featureFlag(): Prisma.FeatureFlagDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get applicationEvent(): Prisma.ApplicationEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get integrationHealthCheck(): Prisma.IntegrationHealthCheckDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get jobExecution(): Prisma.JobExecutionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get analyticsEvent(): Prisma.AnalyticsEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dailyMetric(): Prisma.DailyMetricDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;

import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SecurityEventModel = runtime.Types.Result.DefaultSelection<Prisma.$SecurityEventPayload>;
export type AggregateSecurityEvent = {
    _count: SecurityEventCountAggregateOutputType | null;
    _min: SecurityEventMinAggregateOutputType | null;
    _max: SecurityEventMaxAggregateOutputType | null;
};
export type SecurityEventMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    eventType: string | null;
    severity: $Enums.AuditSeverity | null;
    ipAddress: string | null;
    userAgent: string | null;
    createdAt: Date | null;
};
export type SecurityEventMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    eventType: string | null;
    severity: $Enums.AuditSeverity | null;
    ipAddress: string | null;
    userAgent: string | null;
    createdAt: Date | null;
};
export type SecurityEventCountAggregateOutputType = {
    id: number;
    userId: number;
    eventType: number;
    severity: number;
    ipAddress: number;
    userAgent: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type SecurityEventMinAggregateInputType = {
    id?: true;
    userId?: true;
    eventType?: true;
    severity?: true;
    ipAddress?: true;
    userAgent?: true;
    createdAt?: true;
};
export type SecurityEventMaxAggregateInputType = {
    id?: true;
    userId?: true;
    eventType?: true;
    severity?: true;
    ipAddress?: true;
    userAgent?: true;
    createdAt?: true;
};
export type SecurityEventCountAggregateInputType = {
    id?: true;
    userId?: true;
    eventType?: true;
    severity?: true;
    ipAddress?: true;
    userAgent?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type SecurityEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SecurityEventWhereInput;
    orderBy?: Prisma.SecurityEventOrderByWithRelationInput | Prisma.SecurityEventOrderByWithRelationInput[];
    cursor?: Prisma.SecurityEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SecurityEventCountAggregateInputType;
    _min?: SecurityEventMinAggregateInputType;
    _max?: SecurityEventMaxAggregateInputType;
};
export type GetSecurityEventAggregateType<T extends SecurityEventAggregateArgs> = {
    [P in keyof T & keyof AggregateSecurityEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSecurityEvent[P]> : Prisma.GetScalarType<T[P], AggregateSecurityEvent[P]>;
};
export type SecurityEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SecurityEventWhereInput;
    orderBy?: Prisma.SecurityEventOrderByWithAggregationInput | Prisma.SecurityEventOrderByWithAggregationInput[];
    by: Prisma.SecurityEventScalarFieldEnum[] | Prisma.SecurityEventScalarFieldEnum;
    having?: Prisma.SecurityEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SecurityEventCountAggregateInputType | true;
    _min?: SecurityEventMinAggregateInputType;
    _max?: SecurityEventMaxAggregateInputType;
};
export type SecurityEventGroupByOutputType = {
    id: string;
    userId: string | null;
    eventType: string;
    severity: $Enums.AuditSeverity;
    ipAddress: string | null;
    userAgent: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: SecurityEventCountAggregateOutputType | null;
    _min: SecurityEventMinAggregateOutputType | null;
    _max: SecurityEventMaxAggregateOutputType | null;
};
export type GetSecurityEventGroupByPayload<T extends SecurityEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SecurityEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SecurityEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SecurityEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SecurityEventGroupByOutputType[P]>;
}>>;
export type SecurityEventWhereInput = {
    AND?: Prisma.SecurityEventWhereInput | Prisma.SecurityEventWhereInput[];
    OR?: Prisma.SecurityEventWhereInput[];
    NOT?: Prisma.SecurityEventWhereInput | Prisma.SecurityEventWhereInput[];
    id?: Prisma.UuidFilter<"SecurityEvent"> | string;
    userId?: Prisma.UuidNullableFilter<"SecurityEvent"> | string | null;
    eventType?: Prisma.StringFilter<"SecurityEvent"> | string;
    severity?: Prisma.EnumAuditSeverityFilter<"SecurityEvent"> | $Enums.AuditSeverity;
    ipAddress?: Prisma.StringNullableFilter<"SecurityEvent"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"SecurityEvent"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"SecurityEvent">;
    createdAt?: Prisma.DateTimeFilter<"SecurityEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type SecurityEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SecurityEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SecurityEventWhereInput | Prisma.SecurityEventWhereInput[];
    OR?: Prisma.SecurityEventWhereInput[];
    NOT?: Prisma.SecurityEventWhereInput | Prisma.SecurityEventWhereInput[];
    userId?: Prisma.UuidNullableFilter<"SecurityEvent"> | string | null;
    eventType?: Prisma.StringFilter<"SecurityEvent"> | string;
    severity?: Prisma.EnumAuditSeverityFilter<"SecurityEvent"> | $Enums.AuditSeverity;
    ipAddress?: Prisma.StringNullableFilter<"SecurityEvent"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"SecurityEvent"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"SecurityEvent">;
    createdAt?: Prisma.DateTimeFilter<"SecurityEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type SecurityEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SecurityEventCountOrderByAggregateInput;
    _max?: Prisma.SecurityEventMaxOrderByAggregateInput;
    _min?: Prisma.SecurityEventMinOrderByAggregateInput;
};
export type SecurityEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.SecurityEventScalarWhereWithAggregatesInput | Prisma.SecurityEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.SecurityEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SecurityEventScalarWhereWithAggregatesInput | Prisma.SecurityEventScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SecurityEvent"> | string;
    userId?: Prisma.UuidNullableWithAggregatesFilter<"SecurityEvent"> | string | null;
    eventType?: Prisma.StringWithAggregatesFilter<"SecurityEvent"> | string;
    severity?: Prisma.EnumAuditSeverityWithAggregatesFilter<"SecurityEvent"> | $Enums.AuditSeverity;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"SecurityEvent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SecurityEvent"> | Date | string;
};
export type SecurityEventCreateInput = {
    id?: string;
    eventType: string;
    severity?: $Enums.AuditSeverity;
    ipAddress?: string | null;
    userAgent?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutSecurityEventsInput;
};
export type SecurityEventUncheckedCreateInput = {
    id?: string;
    userId?: string | null;
    eventType: string;
    severity?: $Enums.AuditSeverity;
    ipAddress?: string | null;
    userAgent?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type SecurityEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumAuditSeverityFieldUpdateOperationsInput | $Enums.AuditSeverity;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutSecurityEventsNestedInput;
};
export type SecurityEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumAuditSeverityFieldUpdateOperationsInput | $Enums.AuditSeverity;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityEventCreateManyInput = {
    id?: string;
    userId?: string | null;
    eventType: string;
    severity?: $Enums.AuditSeverity;
    ipAddress?: string | null;
    userAgent?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type SecurityEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumAuditSeverityFieldUpdateOperationsInput | $Enums.AuditSeverity;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumAuditSeverityFieldUpdateOperationsInput | $Enums.AuditSeverity;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityEventListRelationFilter = {
    every?: Prisma.SecurityEventWhereInput;
    some?: Prisma.SecurityEventWhereInput;
    none?: Prisma.SecurityEventWhereInput;
};
export type SecurityEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SecurityEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SecurityEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SecurityEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SecurityEventCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SecurityEventCreateWithoutUserInput, Prisma.SecurityEventUncheckedCreateWithoutUserInput> | Prisma.SecurityEventCreateWithoutUserInput[] | Prisma.SecurityEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SecurityEventCreateOrConnectWithoutUserInput | Prisma.SecurityEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SecurityEventCreateManyUserInputEnvelope;
    connect?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
};
export type SecurityEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SecurityEventCreateWithoutUserInput, Prisma.SecurityEventUncheckedCreateWithoutUserInput> | Prisma.SecurityEventCreateWithoutUserInput[] | Prisma.SecurityEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SecurityEventCreateOrConnectWithoutUserInput | Prisma.SecurityEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SecurityEventCreateManyUserInputEnvelope;
    connect?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
};
export type SecurityEventUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SecurityEventCreateWithoutUserInput, Prisma.SecurityEventUncheckedCreateWithoutUserInput> | Prisma.SecurityEventCreateWithoutUserInput[] | Prisma.SecurityEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SecurityEventCreateOrConnectWithoutUserInput | Prisma.SecurityEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SecurityEventUpsertWithWhereUniqueWithoutUserInput | Prisma.SecurityEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SecurityEventCreateManyUserInputEnvelope;
    set?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
    disconnect?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
    delete?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
    connect?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
    update?: Prisma.SecurityEventUpdateWithWhereUniqueWithoutUserInput | Prisma.SecurityEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SecurityEventUpdateManyWithWhereWithoutUserInput | Prisma.SecurityEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SecurityEventScalarWhereInput | Prisma.SecurityEventScalarWhereInput[];
};
export type SecurityEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SecurityEventCreateWithoutUserInput, Prisma.SecurityEventUncheckedCreateWithoutUserInput> | Prisma.SecurityEventCreateWithoutUserInput[] | Prisma.SecurityEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SecurityEventCreateOrConnectWithoutUserInput | Prisma.SecurityEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SecurityEventUpsertWithWhereUniqueWithoutUserInput | Prisma.SecurityEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SecurityEventCreateManyUserInputEnvelope;
    set?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
    disconnect?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
    delete?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
    connect?: Prisma.SecurityEventWhereUniqueInput | Prisma.SecurityEventWhereUniqueInput[];
    update?: Prisma.SecurityEventUpdateWithWhereUniqueWithoutUserInput | Prisma.SecurityEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SecurityEventUpdateManyWithWhereWithoutUserInput | Prisma.SecurityEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SecurityEventScalarWhereInput | Prisma.SecurityEventScalarWhereInput[];
};
export type EnumAuditSeverityFieldUpdateOperationsInput = {
    set?: $Enums.AuditSeverity;
};
export type SecurityEventCreateWithoutUserInput = {
    id?: string;
    eventType: string;
    severity?: $Enums.AuditSeverity;
    ipAddress?: string | null;
    userAgent?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type SecurityEventUncheckedCreateWithoutUserInput = {
    id?: string;
    eventType: string;
    severity?: $Enums.AuditSeverity;
    ipAddress?: string | null;
    userAgent?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type SecurityEventCreateOrConnectWithoutUserInput = {
    where: Prisma.SecurityEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.SecurityEventCreateWithoutUserInput, Prisma.SecurityEventUncheckedCreateWithoutUserInput>;
};
export type SecurityEventCreateManyUserInputEnvelope = {
    data: Prisma.SecurityEventCreateManyUserInput | Prisma.SecurityEventCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SecurityEventUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SecurityEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.SecurityEventUpdateWithoutUserInput, Prisma.SecurityEventUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SecurityEventCreateWithoutUserInput, Prisma.SecurityEventUncheckedCreateWithoutUserInput>;
};
export type SecurityEventUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SecurityEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.SecurityEventUpdateWithoutUserInput, Prisma.SecurityEventUncheckedUpdateWithoutUserInput>;
};
export type SecurityEventUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SecurityEventScalarWhereInput;
    data: Prisma.XOR<Prisma.SecurityEventUpdateManyMutationInput, Prisma.SecurityEventUncheckedUpdateManyWithoutUserInput>;
};
export type SecurityEventScalarWhereInput = {
    AND?: Prisma.SecurityEventScalarWhereInput | Prisma.SecurityEventScalarWhereInput[];
    OR?: Prisma.SecurityEventScalarWhereInput[];
    NOT?: Prisma.SecurityEventScalarWhereInput | Prisma.SecurityEventScalarWhereInput[];
    id?: Prisma.UuidFilter<"SecurityEvent"> | string;
    userId?: Prisma.UuidNullableFilter<"SecurityEvent"> | string | null;
    eventType?: Prisma.StringFilter<"SecurityEvent"> | string;
    severity?: Prisma.EnumAuditSeverityFilter<"SecurityEvent"> | $Enums.AuditSeverity;
    ipAddress?: Prisma.StringNullableFilter<"SecurityEvent"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"SecurityEvent"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"SecurityEvent">;
    createdAt?: Prisma.DateTimeFilter<"SecurityEvent"> | Date | string;
};
export type SecurityEventCreateManyUserInput = {
    id?: string;
    eventType: string;
    severity?: $Enums.AuditSeverity;
    ipAddress?: string | null;
    userAgent?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type SecurityEventUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumAuditSeverityFieldUpdateOperationsInput | $Enums.AuditSeverity;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityEventUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumAuditSeverityFieldUpdateOperationsInput | $Enums.AuditSeverity;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityEventUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumAuditSeverityFieldUpdateOperationsInput | $Enums.AuditSeverity;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventType?: boolean;
    severity?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.SecurityEvent$userArgs<ExtArgs>;
}, ExtArgs["result"]["securityEvent"]>;
export type SecurityEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventType?: boolean;
    severity?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.SecurityEvent$userArgs<ExtArgs>;
}, ExtArgs["result"]["securityEvent"]>;
export type SecurityEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    eventType?: boolean;
    severity?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.SecurityEvent$userArgs<ExtArgs>;
}, ExtArgs["result"]["securityEvent"]>;
export type SecurityEventSelectScalar = {
    id?: boolean;
    userId?: boolean;
    eventType?: boolean;
    severity?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type SecurityEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "eventType" | "severity" | "ipAddress" | "userAgent" | "metadata" | "createdAt", ExtArgs["result"]["securityEvent"]>;
export type SecurityEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.SecurityEvent$userArgs<ExtArgs>;
};
export type SecurityEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.SecurityEvent$userArgs<ExtArgs>;
};
export type SecurityEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.SecurityEvent$userArgs<ExtArgs>;
};
export type $SecurityEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SecurityEvent";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string | null;
        eventType: string;
        severity: $Enums.AuditSeverity;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["securityEvent"]>;
    composites: {};
};
export type SecurityEventGetPayload<S extends boolean | null | undefined | SecurityEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload, S>;
export type SecurityEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SecurityEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SecurityEventCountAggregateInputType | true;
};
export interface SecurityEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SecurityEvent'];
        meta: {
            name: 'SecurityEvent';
        };
    };
    findUnique<T extends SecurityEventFindUniqueArgs>(args: Prisma.SelectSubset<T, SecurityEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SecurityEventClient<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SecurityEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SecurityEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SecurityEventClient<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SecurityEventFindFirstArgs>(args?: Prisma.SelectSubset<T, SecurityEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__SecurityEventClient<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SecurityEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SecurityEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SecurityEventClient<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SecurityEventFindManyArgs>(args?: Prisma.SelectSubset<T, SecurityEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SecurityEventCreateArgs>(args: Prisma.SelectSubset<T, SecurityEventCreateArgs<ExtArgs>>): Prisma.Prisma__SecurityEventClient<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SecurityEventCreateManyArgs>(args?: Prisma.SelectSubset<T, SecurityEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SecurityEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SecurityEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SecurityEventDeleteArgs>(args: Prisma.SelectSubset<T, SecurityEventDeleteArgs<ExtArgs>>): Prisma.Prisma__SecurityEventClient<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SecurityEventUpdateArgs>(args: Prisma.SelectSubset<T, SecurityEventUpdateArgs<ExtArgs>>): Prisma.Prisma__SecurityEventClient<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SecurityEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, SecurityEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SecurityEventUpdateManyArgs>(args: Prisma.SelectSubset<T, SecurityEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SecurityEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SecurityEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SecurityEventUpsertArgs>(args: Prisma.SelectSubset<T, SecurityEventUpsertArgs<ExtArgs>>): Prisma.Prisma__SecurityEventClient<runtime.Types.Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SecurityEventCountArgs>(args?: Prisma.Subset<T, SecurityEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SecurityEventCountAggregateOutputType> : number>;
    aggregate<T extends SecurityEventAggregateArgs>(args: Prisma.Subset<T, SecurityEventAggregateArgs>): Prisma.PrismaPromise<GetSecurityEventAggregateType<T>>;
    groupBy<T extends SecurityEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SecurityEventGroupByArgs['orderBy'];
    } : {
        orderBy?: SecurityEventGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SecurityEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SecurityEventFieldRefs;
}
export interface Prisma__SecurityEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.SecurityEvent$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SecurityEvent$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SecurityEventFieldRefs {
    readonly id: Prisma.FieldRef<"SecurityEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"SecurityEvent", 'String'>;
    readonly eventType: Prisma.FieldRef<"SecurityEvent", 'String'>;
    readonly severity: Prisma.FieldRef<"SecurityEvent", 'AuditSeverity'>;
    readonly ipAddress: Prisma.FieldRef<"SecurityEvent", 'String'>;
    readonly userAgent: Prisma.FieldRef<"SecurityEvent", 'String'>;
    readonly metadata: Prisma.FieldRef<"SecurityEvent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"SecurityEvent", 'DateTime'>;
}
export type SecurityEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    where: Prisma.SecurityEventWhereUniqueInput;
};
export type SecurityEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    where: Prisma.SecurityEventWhereUniqueInput;
};
export type SecurityEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    where?: Prisma.SecurityEventWhereInput;
    orderBy?: Prisma.SecurityEventOrderByWithRelationInput | Prisma.SecurityEventOrderByWithRelationInput[];
    cursor?: Prisma.SecurityEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SecurityEventScalarFieldEnum | Prisma.SecurityEventScalarFieldEnum[];
};
export type SecurityEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    where?: Prisma.SecurityEventWhereInput;
    orderBy?: Prisma.SecurityEventOrderByWithRelationInput | Prisma.SecurityEventOrderByWithRelationInput[];
    cursor?: Prisma.SecurityEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SecurityEventScalarFieldEnum | Prisma.SecurityEventScalarFieldEnum[];
};
export type SecurityEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    where?: Prisma.SecurityEventWhereInput;
    orderBy?: Prisma.SecurityEventOrderByWithRelationInput | Prisma.SecurityEventOrderByWithRelationInput[];
    cursor?: Prisma.SecurityEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SecurityEventScalarFieldEnum | Prisma.SecurityEventScalarFieldEnum[];
};
export type SecurityEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SecurityEventCreateInput, Prisma.SecurityEventUncheckedCreateInput>;
};
export type SecurityEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SecurityEventCreateManyInput | Prisma.SecurityEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SecurityEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    data: Prisma.SecurityEventCreateManyInput | Prisma.SecurityEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SecurityEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SecurityEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SecurityEventUpdateInput, Prisma.SecurityEventUncheckedUpdateInput>;
    where: Prisma.SecurityEventWhereUniqueInput;
};
export type SecurityEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SecurityEventUpdateManyMutationInput, Prisma.SecurityEventUncheckedUpdateManyInput>;
    where?: Prisma.SecurityEventWhereInput;
    limit?: number;
};
export type SecurityEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SecurityEventUpdateManyMutationInput, Prisma.SecurityEventUncheckedUpdateManyInput>;
    where?: Prisma.SecurityEventWhereInput;
    limit?: number;
    include?: Prisma.SecurityEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SecurityEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    where: Prisma.SecurityEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.SecurityEventCreateInput, Prisma.SecurityEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SecurityEventUpdateInput, Prisma.SecurityEventUncheckedUpdateInput>;
};
export type SecurityEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
    where: Prisma.SecurityEventWhereUniqueInput;
};
export type SecurityEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SecurityEventWhereInput;
    limit?: number;
};
export type SecurityEvent$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type SecurityEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SecurityEventSelect<ExtArgs> | null;
    omit?: Prisma.SecurityEventOmit<ExtArgs> | null;
    include?: Prisma.SecurityEventInclude<ExtArgs> | null;
};

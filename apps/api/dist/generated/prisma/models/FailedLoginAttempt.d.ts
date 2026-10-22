import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FailedLoginAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$FailedLoginAttemptPayload>;
export type AggregateFailedLoginAttempt = {
    _count: FailedLoginAttemptCountAggregateOutputType | null;
    _min: FailedLoginAttemptMinAggregateOutputType | null;
    _max: FailedLoginAttemptMaxAggregateOutputType | null;
};
export type FailedLoginAttemptMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    emailNormalized: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    reason: string | null;
    attemptedAt: Date | null;
};
export type FailedLoginAttemptMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    emailNormalized: string | null;
    ipAddress: string | null;
    userAgent: string | null;
    reason: string | null;
    attemptedAt: Date | null;
};
export type FailedLoginAttemptCountAggregateOutputType = {
    id: number;
    userId: number;
    emailNormalized: number;
    ipAddress: number;
    userAgent: number;
    reason: number;
    attemptedAt: number;
    _all: number;
};
export type FailedLoginAttemptMinAggregateInputType = {
    id?: true;
    userId?: true;
    emailNormalized?: true;
    ipAddress?: true;
    userAgent?: true;
    reason?: true;
    attemptedAt?: true;
};
export type FailedLoginAttemptMaxAggregateInputType = {
    id?: true;
    userId?: true;
    emailNormalized?: true;
    ipAddress?: true;
    userAgent?: true;
    reason?: true;
    attemptedAt?: true;
};
export type FailedLoginAttemptCountAggregateInputType = {
    id?: true;
    userId?: true;
    emailNormalized?: true;
    ipAddress?: true;
    userAgent?: true;
    reason?: true;
    attemptedAt?: true;
    _all?: true;
};
export type FailedLoginAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FailedLoginAttemptWhereInput;
    orderBy?: Prisma.FailedLoginAttemptOrderByWithRelationInput | Prisma.FailedLoginAttemptOrderByWithRelationInput[];
    cursor?: Prisma.FailedLoginAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FailedLoginAttemptCountAggregateInputType;
    _min?: FailedLoginAttemptMinAggregateInputType;
    _max?: FailedLoginAttemptMaxAggregateInputType;
};
export type GetFailedLoginAttemptAggregateType<T extends FailedLoginAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregateFailedLoginAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFailedLoginAttempt[P]> : Prisma.GetScalarType<T[P], AggregateFailedLoginAttempt[P]>;
};
export type FailedLoginAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FailedLoginAttemptWhereInput;
    orderBy?: Prisma.FailedLoginAttemptOrderByWithAggregationInput | Prisma.FailedLoginAttemptOrderByWithAggregationInput[];
    by: Prisma.FailedLoginAttemptScalarFieldEnum[] | Prisma.FailedLoginAttemptScalarFieldEnum;
    having?: Prisma.FailedLoginAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FailedLoginAttemptCountAggregateInputType | true;
    _min?: FailedLoginAttemptMinAggregateInputType;
    _max?: FailedLoginAttemptMaxAggregateInputType;
};
export type FailedLoginAttemptGroupByOutputType = {
    id: string;
    userId: string | null;
    emailNormalized: string;
    ipAddress: string | null;
    userAgent: string | null;
    reason: string;
    attemptedAt: Date;
    _count: FailedLoginAttemptCountAggregateOutputType | null;
    _min: FailedLoginAttemptMinAggregateOutputType | null;
    _max: FailedLoginAttemptMaxAggregateOutputType | null;
};
export type GetFailedLoginAttemptGroupByPayload<T extends FailedLoginAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FailedLoginAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FailedLoginAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FailedLoginAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FailedLoginAttemptGroupByOutputType[P]>;
}>>;
export type FailedLoginAttemptWhereInput = {
    AND?: Prisma.FailedLoginAttemptWhereInput | Prisma.FailedLoginAttemptWhereInput[];
    OR?: Prisma.FailedLoginAttemptWhereInput[];
    NOT?: Prisma.FailedLoginAttemptWhereInput | Prisma.FailedLoginAttemptWhereInput[];
    id?: Prisma.UuidFilter<"FailedLoginAttempt"> | string;
    userId?: Prisma.UuidNullableFilter<"FailedLoginAttempt"> | string | null;
    emailNormalized?: Prisma.StringFilter<"FailedLoginAttempt"> | string;
    ipAddress?: Prisma.StringNullableFilter<"FailedLoginAttempt"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"FailedLoginAttempt"> | string | null;
    reason?: Prisma.StringFilter<"FailedLoginAttempt"> | string;
    attemptedAt?: Prisma.DateTimeFilter<"FailedLoginAttempt"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type FailedLoginAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailNormalized?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type FailedLoginAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FailedLoginAttemptWhereInput | Prisma.FailedLoginAttemptWhereInput[];
    OR?: Prisma.FailedLoginAttemptWhereInput[];
    NOT?: Prisma.FailedLoginAttemptWhereInput | Prisma.FailedLoginAttemptWhereInput[];
    userId?: Prisma.UuidNullableFilter<"FailedLoginAttempt"> | string | null;
    emailNormalized?: Prisma.StringFilter<"FailedLoginAttempt"> | string;
    ipAddress?: Prisma.StringNullableFilter<"FailedLoginAttempt"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"FailedLoginAttempt"> | string | null;
    reason?: Prisma.StringFilter<"FailedLoginAttempt"> | string;
    attemptedAt?: Prisma.DateTimeFilter<"FailedLoginAttempt"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type FailedLoginAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailNormalized?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    _count?: Prisma.FailedLoginAttemptCountOrderByAggregateInput;
    _max?: Prisma.FailedLoginAttemptMaxOrderByAggregateInput;
    _min?: Prisma.FailedLoginAttemptMinOrderByAggregateInput;
};
export type FailedLoginAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.FailedLoginAttemptScalarWhereWithAggregatesInput | Prisma.FailedLoginAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.FailedLoginAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FailedLoginAttemptScalarWhereWithAggregatesInput | Prisma.FailedLoginAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"FailedLoginAttempt"> | string;
    userId?: Prisma.UuidNullableWithAggregatesFilter<"FailedLoginAttempt"> | string | null;
    emailNormalized?: Prisma.StringWithAggregatesFilter<"FailedLoginAttempt"> | string;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"FailedLoginAttempt"> | string | null;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"FailedLoginAttempt"> | string | null;
    reason?: Prisma.StringWithAggregatesFilter<"FailedLoginAttempt"> | string;
    attemptedAt?: Prisma.DateTimeWithAggregatesFilter<"FailedLoginAttempt"> | Date | string;
};
export type FailedLoginAttemptCreateInput = {
    id?: string;
    emailNormalized: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    reason: string;
    attemptedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutFailedLoginAttemptsInput;
};
export type FailedLoginAttemptUncheckedCreateInput = {
    id?: string;
    userId?: string | null;
    emailNormalized: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    reason: string;
    attemptedAt?: Date | string;
};
export type FailedLoginAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emailNormalized?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutFailedLoginAttemptsNestedInput;
};
export type FailedLoginAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailNormalized?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FailedLoginAttemptCreateManyInput = {
    id?: string;
    userId?: string | null;
    emailNormalized: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    reason: string;
    attemptedAt?: Date | string;
};
export type FailedLoginAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emailNormalized?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FailedLoginAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailNormalized?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FailedLoginAttemptListRelationFilter = {
    every?: Prisma.FailedLoginAttemptWhereInput;
    some?: Prisma.FailedLoginAttemptWhereInput;
    none?: Prisma.FailedLoginAttemptWhereInput;
};
export type FailedLoginAttemptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FailedLoginAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    emailNormalized?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
};
export type FailedLoginAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    emailNormalized?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
};
export type FailedLoginAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    emailNormalized?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
};
export type FailedLoginAttemptCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FailedLoginAttemptCreateWithoutUserInput, Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput> | Prisma.FailedLoginAttemptCreateWithoutUserInput[] | Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FailedLoginAttemptCreateOrConnectWithoutUserInput | Prisma.FailedLoginAttemptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FailedLoginAttemptCreateManyUserInputEnvelope;
    connect?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
};
export type FailedLoginAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FailedLoginAttemptCreateWithoutUserInput, Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput> | Prisma.FailedLoginAttemptCreateWithoutUserInput[] | Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FailedLoginAttemptCreateOrConnectWithoutUserInput | Prisma.FailedLoginAttemptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FailedLoginAttemptCreateManyUserInputEnvelope;
    connect?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
};
export type FailedLoginAttemptUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FailedLoginAttemptCreateWithoutUserInput, Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput> | Prisma.FailedLoginAttemptCreateWithoutUserInput[] | Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FailedLoginAttemptCreateOrConnectWithoutUserInput | Prisma.FailedLoginAttemptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FailedLoginAttemptUpsertWithWhereUniqueWithoutUserInput | Prisma.FailedLoginAttemptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FailedLoginAttemptCreateManyUserInputEnvelope;
    set?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
    disconnect?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
    delete?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
    connect?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
    update?: Prisma.FailedLoginAttemptUpdateWithWhereUniqueWithoutUserInput | Prisma.FailedLoginAttemptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FailedLoginAttemptUpdateManyWithWhereWithoutUserInput | Prisma.FailedLoginAttemptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FailedLoginAttemptScalarWhereInput | Prisma.FailedLoginAttemptScalarWhereInput[];
};
export type FailedLoginAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FailedLoginAttemptCreateWithoutUserInput, Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput> | Prisma.FailedLoginAttemptCreateWithoutUserInput[] | Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FailedLoginAttemptCreateOrConnectWithoutUserInput | Prisma.FailedLoginAttemptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FailedLoginAttemptUpsertWithWhereUniqueWithoutUserInput | Prisma.FailedLoginAttemptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FailedLoginAttemptCreateManyUserInputEnvelope;
    set?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
    disconnect?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
    delete?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
    connect?: Prisma.FailedLoginAttemptWhereUniqueInput | Prisma.FailedLoginAttemptWhereUniqueInput[];
    update?: Prisma.FailedLoginAttemptUpdateWithWhereUniqueWithoutUserInput | Prisma.FailedLoginAttemptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FailedLoginAttemptUpdateManyWithWhereWithoutUserInput | Prisma.FailedLoginAttemptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FailedLoginAttemptScalarWhereInput | Prisma.FailedLoginAttemptScalarWhereInput[];
};
export type FailedLoginAttemptCreateWithoutUserInput = {
    id?: string;
    emailNormalized: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    reason: string;
    attemptedAt?: Date | string;
};
export type FailedLoginAttemptUncheckedCreateWithoutUserInput = {
    id?: string;
    emailNormalized: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    reason: string;
    attemptedAt?: Date | string;
};
export type FailedLoginAttemptCreateOrConnectWithoutUserInput = {
    where: Prisma.FailedLoginAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.FailedLoginAttemptCreateWithoutUserInput, Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput>;
};
export type FailedLoginAttemptCreateManyUserInputEnvelope = {
    data: Prisma.FailedLoginAttemptCreateManyUserInput | Prisma.FailedLoginAttemptCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type FailedLoginAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FailedLoginAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.FailedLoginAttemptUpdateWithoutUserInput, Prisma.FailedLoginAttemptUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FailedLoginAttemptCreateWithoutUserInput, Prisma.FailedLoginAttemptUncheckedCreateWithoutUserInput>;
};
export type FailedLoginAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FailedLoginAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.FailedLoginAttemptUpdateWithoutUserInput, Prisma.FailedLoginAttemptUncheckedUpdateWithoutUserInput>;
};
export type FailedLoginAttemptUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FailedLoginAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.FailedLoginAttemptUpdateManyMutationInput, Prisma.FailedLoginAttemptUncheckedUpdateManyWithoutUserInput>;
};
export type FailedLoginAttemptScalarWhereInput = {
    AND?: Prisma.FailedLoginAttemptScalarWhereInput | Prisma.FailedLoginAttemptScalarWhereInput[];
    OR?: Prisma.FailedLoginAttemptScalarWhereInput[];
    NOT?: Prisma.FailedLoginAttemptScalarWhereInput | Prisma.FailedLoginAttemptScalarWhereInput[];
    id?: Prisma.UuidFilter<"FailedLoginAttempt"> | string;
    userId?: Prisma.UuidNullableFilter<"FailedLoginAttempt"> | string | null;
    emailNormalized?: Prisma.StringFilter<"FailedLoginAttempt"> | string;
    ipAddress?: Prisma.StringNullableFilter<"FailedLoginAttempt"> | string | null;
    userAgent?: Prisma.StringNullableFilter<"FailedLoginAttempt"> | string | null;
    reason?: Prisma.StringFilter<"FailedLoginAttempt"> | string;
    attemptedAt?: Prisma.DateTimeFilter<"FailedLoginAttempt"> | Date | string;
};
export type FailedLoginAttemptCreateManyUserInput = {
    id?: string;
    emailNormalized: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    reason: string;
    attemptedAt?: Date | string;
};
export type FailedLoginAttemptUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emailNormalized?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FailedLoginAttemptUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emailNormalized?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FailedLoginAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emailNormalized?: Prisma.StringFieldUpdateOperationsInput | string;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FailedLoginAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    emailNormalized?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    reason?: boolean;
    attemptedAt?: boolean;
    user?: boolean | Prisma.FailedLoginAttempt$userArgs<ExtArgs>;
}, ExtArgs["result"]["failedLoginAttempt"]>;
export type FailedLoginAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    emailNormalized?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    reason?: boolean;
    attemptedAt?: boolean;
    user?: boolean | Prisma.FailedLoginAttempt$userArgs<ExtArgs>;
}, ExtArgs["result"]["failedLoginAttempt"]>;
export type FailedLoginAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    emailNormalized?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    reason?: boolean;
    attemptedAt?: boolean;
    user?: boolean | Prisma.FailedLoginAttempt$userArgs<ExtArgs>;
}, ExtArgs["result"]["failedLoginAttempt"]>;
export type FailedLoginAttemptSelectScalar = {
    id?: boolean;
    userId?: boolean;
    emailNormalized?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    reason?: boolean;
    attemptedAt?: boolean;
};
export type FailedLoginAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "emailNormalized" | "ipAddress" | "userAgent" | "reason" | "attemptedAt", ExtArgs["result"]["failedLoginAttempt"]>;
export type FailedLoginAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.FailedLoginAttempt$userArgs<ExtArgs>;
};
export type FailedLoginAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.FailedLoginAttempt$userArgs<ExtArgs>;
};
export type FailedLoginAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.FailedLoginAttempt$userArgs<ExtArgs>;
};
export type $FailedLoginAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FailedLoginAttempt";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string | null;
        emailNormalized: string;
        ipAddress: string | null;
        userAgent: string | null;
        reason: string;
        attemptedAt: Date;
    }, ExtArgs["result"]["failedLoginAttempt"]>;
    composites: {};
};
export type FailedLoginAttemptGetPayload<S extends boolean | null | undefined | FailedLoginAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload, S>;
export type FailedLoginAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FailedLoginAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FailedLoginAttemptCountAggregateInputType | true;
};
export interface FailedLoginAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FailedLoginAttempt'];
        meta: {
            name: 'FailedLoginAttempt';
        };
    };
    findUnique<T extends FailedLoginAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, FailedLoginAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FailedLoginAttemptClient<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FailedLoginAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FailedLoginAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FailedLoginAttemptClient<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FailedLoginAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, FailedLoginAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__FailedLoginAttemptClient<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FailedLoginAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FailedLoginAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FailedLoginAttemptClient<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FailedLoginAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, FailedLoginAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FailedLoginAttemptCreateArgs>(args: Prisma.SelectSubset<T, FailedLoginAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__FailedLoginAttemptClient<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FailedLoginAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, FailedLoginAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FailedLoginAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FailedLoginAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FailedLoginAttemptDeleteArgs>(args: Prisma.SelectSubset<T, FailedLoginAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__FailedLoginAttemptClient<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FailedLoginAttemptUpdateArgs>(args: Prisma.SelectSubset<T, FailedLoginAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__FailedLoginAttemptClient<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FailedLoginAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, FailedLoginAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FailedLoginAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, FailedLoginAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FailedLoginAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FailedLoginAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FailedLoginAttemptUpsertArgs>(args: Prisma.SelectSubset<T, FailedLoginAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__FailedLoginAttemptClient<runtime.Types.Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FailedLoginAttemptCountArgs>(args?: Prisma.Subset<T, FailedLoginAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FailedLoginAttemptCountAggregateOutputType> : number>;
    aggregate<T extends FailedLoginAttemptAggregateArgs>(args: Prisma.Subset<T, FailedLoginAttemptAggregateArgs>): Prisma.PrismaPromise<GetFailedLoginAttemptAggregateType<T>>;
    groupBy<T extends FailedLoginAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FailedLoginAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: FailedLoginAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FailedLoginAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailedLoginAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FailedLoginAttemptFieldRefs;
}
export interface Prisma__FailedLoginAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.FailedLoginAttempt$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FailedLoginAttempt$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FailedLoginAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"FailedLoginAttempt", 'String'>;
    readonly userId: Prisma.FieldRef<"FailedLoginAttempt", 'String'>;
    readonly emailNormalized: Prisma.FieldRef<"FailedLoginAttempt", 'String'>;
    readonly ipAddress: Prisma.FieldRef<"FailedLoginAttempt", 'String'>;
    readonly userAgent: Prisma.FieldRef<"FailedLoginAttempt", 'String'>;
    readonly reason: Prisma.FieldRef<"FailedLoginAttempt", 'String'>;
    readonly attemptedAt: Prisma.FieldRef<"FailedLoginAttempt", 'DateTime'>;
}
export type FailedLoginAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    where: Prisma.FailedLoginAttemptWhereUniqueInput;
};
export type FailedLoginAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    where: Prisma.FailedLoginAttemptWhereUniqueInput;
};
export type FailedLoginAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    where?: Prisma.FailedLoginAttemptWhereInput;
    orderBy?: Prisma.FailedLoginAttemptOrderByWithRelationInput | Prisma.FailedLoginAttemptOrderByWithRelationInput[];
    cursor?: Prisma.FailedLoginAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FailedLoginAttemptScalarFieldEnum | Prisma.FailedLoginAttemptScalarFieldEnum[];
};
export type FailedLoginAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    where?: Prisma.FailedLoginAttemptWhereInput;
    orderBy?: Prisma.FailedLoginAttemptOrderByWithRelationInput | Prisma.FailedLoginAttemptOrderByWithRelationInput[];
    cursor?: Prisma.FailedLoginAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FailedLoginAttemptScalarFieldEnum | Prisma.FailedLoginAttemptScalarFieldEnum[];
};
export type FailedLoginAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    where?: Prisma.FailedLoginAttemptWhereInput;
    orderBy?: Prisma.FailedLoginAttemptOrderByWithRelationInput | Prisma.FailedLoginAttemptOrderByWithRelationInput[];
    cursor?: Prisma.FailedLoginAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FailedLoginAttemptScalarFieldEnum | Prisma.FailedLoginAttemptScalarFieldEnum[];
};
export type FailedLoginAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FailedLoginAttemptCreateInput, Prisma.FailedLoginAttemptUncheckedCreateInput>;
};
export type FailedLoginAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FailedLoginAttemptCreateManyInput | Prisma.FailedLoginAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FailedLoginAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    data: Prisma.FailedLoginAttemptCreateManyInput | Prisma.FailedLoginAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FailedLoginAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FailedLoginAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FailedLoginAttemptUpdateInput, Prisma.FailedLoginAttemptUncheckedUpdateInput>;
    where: Prisma.FailedLoginAttemptWhereUniqueInput;
};
export type FailedLoginAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FailedLoginAttemptUpdateManyMutationInput, Prisma.FailedLoginAttemptUncheckedUpdateManyInput>;
    where?: Prisma.FailedLoginAttemptWhereInput;
    limit?: number;
};
export type FailedLoginAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FailedLoginAttemptUpdateManyMutationInput, Prisma.FailedLoginAttemptUncheckedUpdateManyInput>;
    where?: Prisma.FailedLoginAttemptWhereInput;
    limit?: number;
    include?: Prisma.FailedLoginAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FailedLoginAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    where: Prisma.FailedLoginAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.FailedLoginAttemptCreateInput, Prisma.FailedLoginAttemptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FailedLoginAttemptUpdateInput, Prisma.FailedLoginAttemptUncheckedUpdateInput>;
};
export type FailedLoginAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
    where: Prisma.FailedLoginAttemptWhereUniqueInput;
};
export type FailedLoginAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FailedLoginAttemptWhereInput;
    limit?: number;
};
export type FailedLoginAttempt$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type FailedLoginAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FailedLoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.FailedLoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.FailedLoginAttemptInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentAttemptPayload>;
export type AggregatePaymentAttempt = {
    _count: PaymentAttemptCountAggregateOutputType | null;
    _avg: PaymentAttemptAvgAggregateOutputType | null;
    _sum: PaymentAttemptSumAggregateOutputType | null;
    _min: PaymentAttemptMinAggregateOutputType | null;
    _max: PaymentAttemptMaxAggregateOutputType | null;
};
export type PaymentAttemptAvgAggregateOutputType = {
    attemptNumber: number | null;
};
export type PaymentAttemptSumAggregateOutputType = {
    attemptNumber: number | null;
};
export type PaymentAttemptMinAggregateOutputType = {
    id: string | null;
    paymentId: string | null;
    attemptNumber: number | null;
    status: $Enums.PaymentStatus | null;
    providerReference: string | null;
    errorCode: string | null;
    createdAt: Date | null;
};
export type PaymentAttemptMaxAggregateOutputType = {
    id: string | null;
    paymentId: string | null;
    attemptNumber: number | null;
    status: $Enums.PaymentStatus | null;
    providerReference: string | null;
    errorCode: string | null;
    createdAt: Date | null;
};
export type PaymentAttemptCountAggregateOutputType = {
    id: number;
    paymentId: number;
    attemptNumber: number;
    status: number;
    providerReference: number;
    errorCode: number;
    createdAt: number;
    _all: number;
};
export type PaymentAttemptAvgAggregateInputType = {
    attemptNumber?: true;
};
export type PaymentAttemptSumAggregateInputType = {
    attemptNumber?: true;
};
export type PaymentAttemptMinAggregateInputType = {
    id?: true;
    paymentId?: true;
    attemptNumber?: true;
    status?: true;
    providerReference?: true;
    errorCode?: true;
    createdAt?: true;
};
export type PaymentAttemptMaxAggregateInputType = {
    id?: true;
    paymentId?: true;
    attemptNumber?: true;
    status?: true;
    providerReference?: true;
    errorCode?: true;
    createdAt?: true;
};
export type PaymentAttemptCountAggregateInputType = {
    id?: true;
    paymentId?: true;
    attemptNumber?: true;
    status?: true;
    providerReference?: true;
    errorCode?: true;
    createdAt?: true;
    _all?: true;
};
export type PaymentAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentAttemptCountAggregateInputType;
    _avg?: PaymentAttemptAvgAggregateInputType;
    _sum?: PaymentAttemptSumAggregateInputType;
    _min?: PaymentAttemptMinAggregateInputType;
    _max?: PaymentAttemptMaxAggregateInputType;
};
export type GetPaymentAttemptAggregateType<T extends PaymentAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentAttempt[P]> : Prisma.GetScalarType<T[P], AggregatePaymentAttempt[P]>;
};
export type PaymentAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithAggregationInput | Prisma.PaymentAttemptOrderByWithAggregationInput[];
    by: Prisma.PaymentAttemptScalarFieldEnum[] | Prisma.PaymentAttemptScalarFieldEnum;
    having?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentAttemptCountAggregateInputType | true;
    _avg?: PaymentAttemptAvgAggregateInputType;
    _sum?: PaymentAttemptSumAggregateInputType;
    _min?: PaymentAttemptMinAggregateInputType;
    _max?: PaymentAttemptMaxAggregateInputType;
};
export type PaymentAttemptGroupByOutputType = {
    id: string;
    paymentId: string;
    attemptNumber: number;
    status: $Enums.PaymentStatus;
    providerReference: string | null;
    errorCode: string | null;
    createdAt: Date;
    _count: PaymentAttemptCountAggregateOutputType | null;
    _avg: PaymentAttemptAvgAggregateOutputType | null;
    _sum: PaymentAttemptSumAggregateOutputType | null;
    _min: PaymentAttemptMinAggregateOutputType | null;
    _max: PaymentAttemptMaxAggregateOutputType | null;
};
export type GetPaymentAttemptGroupByPayload<T extends PaymentAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentAttemptGroupByOutputType[P]>;
}>>;
export type PaymentAttemptWhereInput = {
    AND?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    OR?: Prisma.PaymentAttemptWhereInput[];
    NOT?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    id?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    paymentId?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    attemptNumber?: Prisma.IntFilter<"PaymentAttempt"> | number;
    status?: Prisma.EnumPaymentStatusFilter<"PaymentAttempt"> | $Enums.PaymentStatus;
    providerReference?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    errorCode?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
};
export type PaymentAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    attemptNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payment?: Prisma.PaymentOrderByWithRelationInput;
};
export type PaymentAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    paymentId_attemptNumber?: Prisma.PaymentAttemptPaymentIdAttemptNumberCompoundUniqueInput;
    AND?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    OR?: Prisma.PaymentAttemptWhereInput[];
    NOT?: Prisma.PaymentAttemptWhereInput | Prisma.PaymentAttemptWhereInput[];
    paymentId?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    attemptNumber?: Prisma.IntFilter<"PaymentAttempt"> | number;
    status?: Prisma.EnumPaymentStatusFilter<"PaymentAttempt"> | $Enums.PaymentStatus;
    providerReference?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    errorCode?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentScalarRelationFilter, Prisma.PaymentWhereInput>;
}, "id" | "paymentId_attemptNumber">;
export type PaymentAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    attemptNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentAttemptCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAttemptAvgOrderByAggregateInput;
    _max?: Prisma.PaymentAttemptMaxOrderByAggregateInput;
    _min?: Prisma.PaymentAttemptMinOrderByAggregateInput;
    _sum?: Prisma.PaymentAttemptSumOrderByAggregateInput;
};
export type PaymentAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput | Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentAttemptScalarWhereWithAggregatesInput | Prisma.PaymentAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PaymentAttempt"> | string;
    paymentId?: Prisma.UuidWithAggregatesFilter<"PaymentAttempt"> | string;
    attemptNumber?: Prisma.IntWithAggregatesFilter<"PaymentAttempt"> | number;
    status?: Prisma.EnumPaymentStatusWithAggregatesFilter<"PaymentAttempt"> | $Enums.PaymentStatus;
    providerReference?: Prisma.StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null;
    errorCode?: Prisma.StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentAttempt"> | Date | string;
};
export type PaymentAttemptCreateInput = {
    id?: string;
    attemptNumber: number;
    status: $Enums.PaymentStatus;
    providerReference?: string | null;
    errorCode?: string | null;
    createdAt?: Date | string;
    payment: Prisma.PaymentCreateNestedOneWithoutAttemptsInput;
};
export type PaymentAttemptUncheckedCreateInput = {
    id?: string;
    paymentId: string;
    attemptNumber: number;
    status: $Enums.PaymentStatus;
    providerReference?: string | null;
    errorCode?: string | null;
    createdAt?: Date | string;
};
export type PaymentAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentUpdateOneRequiredWithoutAttemptsNestedInput;
};
export type PaymentAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptCreateManyInput = {
    id?: string;
    paymentId: string;
    attemptNumber: number;
    status: $Enums.PaymentStatus;
    providerReference?: string | null;
    errorCode?: string | null;
    createdAt?: Date | string;
};
export type PaymentAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptListRelationFilter = {
    every?: Prisma.PaymentAttemptWhereInput;
    some?: Prisma.PaymentAttemptWhereInput;
    none?: Prisma.PaymentAttemptWhereInput;
};
export type PaymentAttemptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentAttemptPaymentIdAttemptNumberCompoundUniqueInput = {
    paymentId: string;
    attemptNumber: number;
};
export type PaymentAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    attemptNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrder;
    errorCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentAttemptAvgOrderByAggregateInput = {
    attemptNumber?: Prisma.SortOrder;
};
export type PaymentAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    attemptNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrder;
    errorCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    attemptNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrder;
    errorCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PaymentAttemptSumOrderByAggregateInput = {
    attemptNumber?: Prisma.SortOrder;
};
export type PaymentAttemptCreateNestedManyWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutPaymentInput, Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput> | Prisma.PaymentAttemptCreateWithoutPaymentInput[] | Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.PaymentAttemptCreateOrConnectWithoutPaymentInput | Prisma.PaymentAttemptCreateOrConnectWithoutPaymentInput[];
    createMany?: Prisma.PaymentAttemptCreateManyPaymentInputEnvelope;
    connect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
};
export type PaymentAttemptUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutPaymentInput, Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput> | Prisma.PaymentAttemptCreateWithoutPaymentInput[] | Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.PaymentAttemptCreateOrConnectWithoutPaymentInput | Prisma.PaymentAttemptCreateOrConnectWithoutPaymentInput[];
    createMany?: Prisma.PaymentAttemptCreateManyPaymentInputEnvelope;
    connect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
};
export type PaymentAttemptUpdateManyWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutPaymentInput, Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput> | Prisma.PaymentAttemptCreateWithoutPaymentInput[] | Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.PaymentAttemptCreateOrConnectWithoutPaymentInput | Prisma.PaymentAttemptCreateOrConnectWithoutPaymentInput[];
    upsert?: Prisma.PaymentAttemptUpsertWithWhereUniqueWithoutPaymentInput | Prisma.PaymentAttemptUpsertWithWhereUniqueWithoutPaymentInput[];
    createMany?: Prisma.PaymentAttemptCreateManyPaymentInputEnvelope;
    set?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    disconnect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    delete?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    connect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    update?: Prisma.PaymentAttemptUpdateWithWhereUniqueWithoutPaymentInput | Prisma.PaymentAttemptUpdateWithWhereUniqueWithoutPaymentInput[];
    updateMany?: Prisma.PaymentAttemptUpdateManyWithWhereWithoutPaymentInput | Prisma.PaymentAttemptUpdateManyWithWhereWithoutPaymentInput[];
    deleteMany?: Prisma.PaymentAttemptScalarWhereInput | Prisma.PaymentAttemptScalarWhereInput[];
};
export type PaymentAttemptUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutPaymentInput, Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput> | Prisma.PaymentAttemptCreateWithoutPaymentInput[] | Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: Prisma.PaymentAttemptCreateOrConnectWithoutPaymentInput | Prisma.PaymentAttemptCreateOrConnectWithoutPaymentInput[];
    upsert?: Prisma.PaymentAttemptUpsertWithWhereUniqueWithoutPaymentInput | Prisma.PaymentAttemptUpsertWithWhereUniqueWithoutPaymentInput[];
    createMany?: Prisma.PaymentAttemptCreateManyPaymentInputEnvelope;
    set?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    disconnect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    delete?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    connect?: Prisma.PaymentAttemptWhereUniqueInput | Prisma.PaymentAttemptWhereUniqueInput[];
    update?: Prisma.PaymentAttemptUpdateWithWhereUniqueWithoutPaymentInput | Prisma.PaymentAttemptUpdateWithWhereUniqueWithoutPaymentInput[];
    updateMany?: Prisma.PaymentAttemptUpdateManyWithWhereWithoutPaymentInput | Prisma.PaymentAttemptUpdateManyWithWhereWithoutPaymentInput[];
    deleteMany?: Prisma.PaymentAttemptScalarWhereInput | Prisma.PaymentAttemptScalarWhereInput[];
};
export type PaymentAttemptCreateWithoutPaymentInput = {
    id?: string;
    attemptNumber: number;
    status: $Enums.PaymentStatus;
    providerReference?: string | null;
    errorCode?: string | null;
    createdAt?: Date | string;
};
export type PaymentAttemptUncheckedCreateWithoutPaymentInput = {
    id?: string;
    attemptNumber: number;
    status: $Enums.PaymentStatus;
    providerReference?: string | null;
    errorCode?: string | null;
    createdAt?: Date | string;
};
export type PaymentAttemptCreateOrConnectWithoutPaymentInput = {
    where: Prisma.PaymentAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutPaymentInput, Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput>;
};
export type PaymentAttemptCreateManyPaymentInputEnvelope = {
    data: Prisma.PaymentAttemptCreateManyPaymentInput | Prisma.PaymentAttemptCreateManyPaymentInput[];
    skipDuplicates?: boolean;
};
export type PaymentAttemptUpsertWithWhereUniqueWithoutPaymentInput = {
    where: Prisma.PaymentAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentAttemptUpdateWithoutPaymentInput, Prisma.PaymentAttemptUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.PaymentAttemptCreateWithoutPaymentInput, Prisma.PaymentAttemptUncheckedCreateWithoutPaymentInput>;
};
export type PaymentAttemptUpdateWithWhereUniqueWithoutPaymentInput = {
    where: Prisma.PaymentAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateWithoutPaymentInput, Prisma.PaymentAttemptUncheckedUpdateWithoutPaymentInput>;
};
export type PaymentAttemptUpdateManyWithWhereWithoutPaymentInput = {
    where: Prisma.PaymentAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateManyMutationInput, Prisma.PaymentAttemptUncheckedUpdateManyWithoutPaymentInput>;
};
export type PaymentAttemptScalarWhereInput = {
    AND?: Prisma.PaymentAttemptScalarWhereInput | Prisma.PaymentAttemptScalarWhereInput[];
    OR?: Prisma.PaymentAttemptScalarWhereInput[];
    NOT?: Prisma.PaymentAttemptScalarWhereInput | Prisma.PaymentAttemptScalarWhereInput[];
    id?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    paymentId?: Prisma.UuidFilter<"PaymentAttempt"> | string;
    attemptNumber?: Prisma.IntFilter<"PaymentAttempt"> | number;
    status?: Prisma.EnumPaymentStatusFilter<"PaymentAttempt"> | $Enums.PaymentStatus;
    providerReference?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    errorCode?: Prisma.StringNullableFilter<"PaymentAttempt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentAttempt"> | Date | string;
};
export type PaymentAttemptCreateManyPaymentInput = {
    id?: string;
    attemptNumber: number;
    status: $Enums.PaymentStatus;
    providerReference?: string | null;
    errorCode?: string | null;
    createdAt?: Date | string;
};
export type PaymentAttemptUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptUncheckedUpdateManyWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    attemptNumber?: boolean;
    status?: boolean;
    providerReference?: boolean;
    errorCode?: boolean;
    createdAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    attemptNumber?: boolean;
    status?: boolean;
    providerReference?: boolean;
    errorCode?: boolean;
    createdAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentId?: boolean;
    attemptNumber?: boolean;
    status?: boolean;
    providerReference?: boolean;
    errorCode?: boolean;
    createdAt?: boolean;
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptSelectScalar = {
    id?: boolean;
    paymentId?: boolean;
    attemptNumber?: boolean;
    status?: boolean;
    providerReference?: boolean;
    errorCode?: boolean;
    createdAt?: boolean;
};
export type PaymentAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paymentId" | "attemptNumber" | "status" | "providerReference" | "errorCode" | "createdAt", ExtArgs["result"]["paymentAttempt"]>;
export type PaymentAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
};
export type PaymentAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
};
export type PaymentAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.PaymentDefaultArgs<ExtArgs>;
};
export type $PaymentAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentAttempt";
    objects: {
        payment: Prisma.$PaymentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        paymentId: string;
        attemptNumber: number;
        status: $Enums.PaymentStatus;
        providerReference: string | null;
        errorCode: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["paymentAttempt"]>;
    composites: {};
};
export type PaymentAttemptGetPayload<S extends boolean | null | undefined | PaymentAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload, S>;
export type PaymentAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentAttemptCountAggregateInputType | true;
};
export interface PaymentAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentAttempt'];
        meta: {
            name: 'PaymentAttempt';
        };
    };
    findUnique<T extends PaymentAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentAttemptCreateArgs>(args: Prisma.SelectSubset<T, PaymentAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentAttemptDeleteArgs>(args: Prisma.SelectSubset<T, PaymentAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentAttemptUpdateArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentAttemptUpsertArgs>(args: Prisma.SelectSubset<T, PaymentAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentAttemptCountArgs>(args?: Prisma.Subset<T, PaymentAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentAttemptCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAttemptAggregateArgs>(args: Prisma.Subset<T, PaymentAttemptAggregateArgs>): Prisma.PrismaPromise<GetPaymentAttemptAggregateType<T>>;
    groupBy<T extends PaymentAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentAttemptFieldRefs;
}
export interface Prisma__PaymentAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payment<T extends Prisma.PaymentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentDefaultArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly paymentId: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly attemptNumber: Prisma.FieldRef<"PaymentAttempt", 'Int'>;
    readonly status: Prisma.FieldRef<"PaymentAttempt", 'PaymentStatus'>;
    readonly providerReference: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly errorCode: Prisma.FieldRef<"PaymentAttempt", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PaymentAttempt", 'DateTime'>;
}
export type PaymentAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentAttemptScalarFieldEnum | Prisma.PaymentAttemptScalarFieldEnum[];
};
export type PaymentAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentAttemptScalarFieldEnum | Prisma.PaymentAttemptScalarFieldEnum[];
};
export type PaymentAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where?: Prisma.PaymentAttemptWhereInput;
    orderBy?: Prisma.PaymentAttemptOrderByWithRelationInput | Prisma.PaymentAttemptOrderByWithRelationInput[];
    cursor?: Prisma.PaymentAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentAttemptScalarFieldEnum | Prisma.PaymentAttemptScalarFieldEnum[];
};
export type PaymentAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptCreateInput, Prisma.PaymentAttemptUncheckedCreateInput>;
};
export type PaymentAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentAttemptCreateManyInput | Prisma.PaymentAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    data: Prisma.PaymentAttemptCreateManyInput | Prisma.PaymentAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateInput, Prisma.PaymentAttemptUncheckedUpdateInput>;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateManyMutationInput, Prisma.PaymentAttemptUncheckedUpdateManyInput>;
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
};
export type PaymentAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentAttemptUpdateManyMutationInput, Prisma.PaymentAttemptUncheckedUpdateManyInput>;
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
    include?: Prisma.PaymentAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentAttemptCreateInput, Prisma.PaymentAttemptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentAttemptUpdateInput, Prisma.PaymentAttemptUncheckedUpdateInput>;
};
export type PaymentAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
    where: Prisma.PaymentAttemptWhereUniqueInput;
};
export type PaymentAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
    limit?: number;
};
export type PaymentAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentAttemptSelect<ExtArgs> | null;
    omit?: Prisma.PaymentAttemptOmit<ExtArgs> | null;
    include?: Prisma.PaymentAttemptInclude<ExtArgs> | null;
};

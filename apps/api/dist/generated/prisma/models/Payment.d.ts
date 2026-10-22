import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentPayload>;
export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type PaymentAvgAggregateOutputType = {
    amountMinor: number | null;
};
export type PaymentSumAggregateOutputType = {
    amountMinor: bigint | null;
};
export type PaymentMinAggregateOutputType = {
    id: string | null;
    bookingId: string | null;
    provider: $Enums.PaymentProvider | null;
    status: $Enums.PaymentStatus | null;
    amountMinor: bigint | null;
    currency: string | null;
    providerReference: string | null;
    idempotencyKey: string | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentMaxAggregateOutputType = {
    id: string | null;
    bookingId: string | null;
    provider: $Enums.PaymentProvider | null;
    status: $Enums.PaymentStatus | null;
    amountMinor: bigint | null;
    currency: string | null;
    providerReference: string | null;
    idempotencyKey: string | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentCountAggregateOutputType = {
    id: number;
    bookingId: number;
    provider: number;
    status: number;
    amountMinor: number;
    currency: number;
    providerReference: number;
    idempotencyKey: number;
    paidAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PaymentAvgAggregateInputType = {
    amountMinor?: true;
};
export type PaymentSumAggregateInputType = {
    amountMinor?: true;
};
export type PaymentMinAggregateInputType = {
    id?: true;
    bookingId?: true;
    provider?: true;
    status?: true;
    amountMinor?: true;
    currency?: true;
    providerReference?: true;
    idempotencyKey?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentMaxAggregateInputType = {
    id?: true;
    bookingId?: true;
    provider?: true;
    status?: true;
    amountMinor?: true;
    currency?: true;
    providerReference?: true;
    idempotencyKey?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentCountAggregateInputType = {
    id?: true;
    bookingId?: true;
    provider?: true;
    status?: true;
    amountMinor?: true;
    currency?: true;
    providerReference?: true;
    idempotencyKey?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentCountAggregateInputType;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment[P]> : Prisma.GetScalarType<T[P], AggregatePayment[P]>;
};
export type PaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithAggregationInput | Prisma.PaymentOrderByWithAggregationInput[];
    by: Prisma.PaymentScalarFieldEnum[] | Prisma.PaymentScalarFieldEnum;
    having?: Prisma.PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type PaymentGroupByOutputType = {
    id: string;
    bookingId: string;
    provider: $Enums.PaymentProvider;
    status: $Enums.PaymentStatus;
    amountMinor: bigint;
    currency: string;
    providerReference: string | null;
    idempotencyKey: string;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]>;
}>>;
export type PaymentWhereInput = {
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    id?: Prisma.UuidFilter<"Payment"> | string;
    bookingId?: Prisma.UuidFilter<"Payment"> | string;
    provider?: Prisma.EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFilter<"Payment"> | bigint | number;
    currency?: Prisma.StringFilter<"Payment"> | string;
    providerReference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    idempotencyKey?: Prisma.StringFilter<"Payment"> | string;
    paidAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    booking?: Prisma.XOR<Prisma.BookingScalarRelationFilter, Prisma.BookingWhereInput>;
    attempts?: Prisma.PaymentAttemptListRelationFilter;
    refunds?: Prisma.RefundListRelationFilter;
};
export type PaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    booking?: Prisma.BookingOrderByWithRelationInput;
    attempts?: Prisma.PaymentAttemptOrderByRelationAggregateInput;
    refunds?: Prisma.RefundOrderByRelationAggregateInput;
};
export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    idempotencyKey?: string;
    provider_providerReference?: Prisma.PaymentProviderProviderReferenceCompoundUniqueInput;
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    bookingId?: Prisma.UuidFilter<"Payment"> | string;
    provider?: Prisma.EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFilter<"Payment"> | bigint | number;
    currency?: Prisma.StringFilter<"Payment"> | string;
    providerReference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    booking?: Prisma.XOR<Prisma.BookingScalarRelationFilter, Prisma.BookingWhereInput>;
    attempts?: Prisma.PaymentAttemptListRelationFilter;
    refunds?: Prisma.RefundListRelationFilter;
}, "id" | "idempotencyKey" | "provider_providerReference">;
export type PaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAvgOrderByAggregateInput;
    _max?: Prisma.PaymentMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMinOrderByAggregateInput;
    _sum?: Prisma.PaymentSumOrderByAggregateInput;
};
export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Payment"> | string;
    bookingId?: Prisma.UuidWithAggregatesFilter<"Payment"> | string;
    provider?: Prisma.EnumPaymentProviderWithAggregatesFilter<"Payment"> | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntWithAggregatesFilter<"Payment"> | bigint | number;
    currency?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    providerReference?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    idempotencyKey?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
};
export type PaymentCreateInput = {
    id?: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking: Prisma.BookingCreateNestedOneWithoutPaymentsInput;
    attempts?: Prisma.PaymentAttemptCreateNestedManyWithoutPaymentInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateInput = {
    id?: string;
    bookingId: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.PaymentAttemptUncheckedCreateNestedManyWithoutPaymentInput;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.BookingUpdateOneRequiredWithoutPaymentsNestedInput;
    attempts?: Prisma.PaymentAttemptUpdateManyWithoutPaymentNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.PaymentAttemptUncheckedUpdateManyWithoutPaymentNestedInput;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentCreateManyInput = {
    id?: string;
    bookingId: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentListRelationFilter = {
    every?: Prisma.PaymentWhereInput;
    some?: Prisma.PaymentWhereInput;
    none?: Prisma.PaymentWhereInput;
};
export type PaymentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentProviderProviderReferenceCompoundUniqueInput = {
    provider: $Enums.PaymentProvider;
    providerReference: string;
};
export type PaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentAvgOrderByAggregateInput = {
    amountMinor?: Prisma.SortOrder;
};
export type PaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    providerReference?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentSumOrderByAggregateInput = {
    amountMinor?: Prisma.SortOrder;
};
export type PaymentScalarRelationFilter = {
    is?: Prisma.PaymentWhereInput;
    isNot?: Prisma.PaymentWhereInput;
};
export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutBookingInput, Prisma.PaymentUncheckedCreateWithoutBookingInput> | Prisma.PaymentCreateWithoutBookingInput[] | Prisma.PaymentUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutBookingInput | Prisma.PaymentCreateOrConnectWithoutBookingInput[];
    createMany?: Prisma.PaymentCreateManyBookingInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutBookingInput, Prisma.PaymentUncheckedCreateWithoutBookingInput> | Prisma.PaymentCreateWithoutBookingInput[] | Prisma.PaymentUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutBookingInput | Prisma.PaymentCreateOrConnectWithoutBookingInput[];
    createMany?: Prisma.PaymentCreateManyBookingInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutBookingInput, Prisma.PaymentUncheckedCreateWithoutBookingInput> | Prisma.PaymentCreateWithoutBookingInput[] | Prisma.PaymentUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutBookingInput | Prisma.PaymentCreateOrConnectWithoutBookingInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutBookingInput | Prisma.PaymentUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: Prisma.PaymentCreateManyBookingInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutBookingInput | Prisma.PaymentUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutBookingInput | Prisma.PaymentUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutBookingInput, Prisma.PaymentUncheckedCreateWithoutBookingInput> | Prisma.PaymentCreateWithoutBookingInput[] | Prisma.PaymentUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutBookingInput | Prisma.PaymentCreateOrConnectWithoutBookingInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutBookingInput | Prisma.PaymentUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: Prisma.PaymentCreateManyBookingInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutBookingInput | Prisma.PaymentUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutBookingInput | Prisma.PaymentUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type EnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider;
};
export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
};
export type PaymentCreateNestedOneWithoutAttemptsInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAttemptsInput, Prisma.PaymentUncheckedCreateWithoutAttemptsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAttemptsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAttemptsInput, Prisma.PaymentUncheckedCreateWithoutAttemptsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAttemptsInput;
    upsert?: Prisma.PaymentUpsertWithoutAttemptsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentUpdateToOneWithWhereWithoutAttemptsInput, Prisma.PaymentUpdateWithoutAttemptsInput>, Prisma.PaymentUncheckedUpdateWithoutAttemptsInput>;
};
export type PaymentCreateNestedOneWithoutRefundsInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRefundsInput, Prisma.PaymentUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRefundsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutRefundsInput, Prisma.PaymentUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutRefundsInput;
    upsert?: Prisma.PaymentUpsertWithoutRefundsInput;
    connect?: Prisma.PaymentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentUpdateToOneWithWhereWithoutRefundsInput, Prisma.PaymentUpdateWithoutRefundsInput>, Prisma.PaymentUncheckedUpdateWithoutRefundsInput>;
};
export type PaymentCreateWithoutBookingInput = {
    id?: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.PaymentAttemptCreateNestedManyWithoutPaymentInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.PaymentAttemptUncheckedCreateNestedManyWithoutPaymentInput;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutBookingInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutBookingInput, Prisma.PaymentUncheckedCreateWithoutBookingInput>;
};
export type PaymentCreateManyBookingInputEnvelope = {
    data: Prisma.PaymentCreateManyBookingInput | Prisma.PaymentCreateManyBookingInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutBookingInput, Prisma.PaymentUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutBookingInput, Prisma.PaymentUncheckedCreateWithoutBookingInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutBookingInput, Prisma.PaymentUncheckedUpdateWithoutBookingInput>;
};
export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutBookingInput>;
};
export type PaymentScalarWhereInput = {
    AND?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    OR?: Prisma.PaymentScalarWhereInput[];
    NOT?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    id?: Prisma.UuidFilter<"Payment"> | string;
    bookingId?: Prisma.UuidFilter<"Payment"> | string;
    provider?: Prisma.EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFilter<"Payment"> | bigint | number;
    currency?: Prisma.StringFilter<"Payment"> | string;
    providerReference?: Prisma.StringNullableFilter<"Payment"> | string | null;
    idempotencyKey?: Prisma.StringFilter<"Payment"> | string;
    paidAt?: Prisma.DateTimeNullableFilter<"Payment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payment"> | Date | string;
};
export type PaymentCreateWithoutAttemptsInput = {
    id?: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking: Prisma.BookingCreateNestedOneWithoutPaymentsInput;
    refunds?: Prisma.RefundCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutAttemptsInput = {
    id?: string;
    bookingId: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refunds?: Prisma.RefundUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutAttemptsInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAttemptsInput, Prisma.PaymentUncheckedCreateWithoutAttemptsInput>;
};
export type PaymentUpsertWithoutAttemptsInput = {
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutAttemptsInput, Prisma.PaymentUncheckedUpdateWithoutAttemptsInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAttemptsInput, Prisma.PaymentUncheckedCreateWithoutAttemptsInput>;
    where?: Prisma.PaymentWhereInput;
};
export type PaymentUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: Prisma.PaymentWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutAttemptsInput, Prisma.PaymentUncheckedUpdateWithoutAttemptsInput>;
};
export type PaymentUpdateWithoutAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.BookingUpdateOneRequiredWithoutPaymentsNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentCreateWithoutRefundsInput = {
    id?: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking: Prisma.BookingCreateNestedOneWithoutPaymentsInput;
    attempts?: Prisma.PaymentAttemptCreateNestedManyWithoutPaymentInput;
};
export type PaymentUncheckedCreateWithoutRefundsInput = {
    id?: string;
    bookingId: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attempts?: Prisma.PaymentAttemptUncheckedCreateNestedManyWithoutPaymentInput;
};
export type PaymentCreateOrConnectWithoutRefundsInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutRefundsInput, Prisma.PaymentUncheckedCreateWithoutRefundsInput>;
};
export type PaymentUpsertWithoutRefundsInput = {
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutRefundsInput, Prisma.PaymentUncheckedUpdateWithoutRefundsInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutRefundsInput, Prisma.PaymentUncheckedCreateWithoutRefundsInput>;
    where?: Prisma.PaymentWhereInput;
};
export type PaymentUpdateToOneWithWhereWithoutRefundsInput = {
    where?: Prisma.PaymentWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutRefundsInput, Prisma.PaymentUncheckedUpdateWithoutRefundsInput>;
};
export type PaymentUpdateWithoutRefundsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.BookingUpdateOneRequiredWithoutPaymentsNestedInput;
    attempts?: Prisma.PaymentAttemptUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutRefundsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.PaymentAttemptUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentCreateManyBookingInput = {
    id?: string;
    provider: $Enums.PaymentProvider;
    status?: $Enums.PaymentStatus;
    amountMinor: bigint | number;
    currency: string;
    providerReference?: string | null;
    idempotencyKey: string;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.PaymentAttemptUpdateManyWithoutPaymentNestedInput;
    refunds?: Prisma.RefundUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attempts?: Prisma.PaymentAttemptUncheckedUpdateManyWithoutPaymentNestedInput;
    refunds?: Prisma.RefundUncheckedUpdateManyWithoutPaymentNestedInput;
};
export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    providerReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentCountOutputType = {
    attempts: number;
    refunds: number;
};
export type PaymentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attempts?: boolean | PaymentCountOutputTypeCountAttemptsArgs;
    refunds?: boolean | PaymentCountOutputTypeCountRefundsArgs;
};
export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentCountOutputTypeSelect<ExtArgs> | null;
};
export type PaymentCountOutputTypeCountAttemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentAttemptWhereInput;
};
export type PaymentCountOutputTypeCountRefundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
};
export type PaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    provider?: boolean;
    status?: boolean;
    amountMinor?: boolean;
    currency?: boolean;
    providerReference?: boolean;
    idempotencyKey?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
    attempts?: boolean | Prisma.Payment$attemptsArgs<ExtArgs>;
    refunds?: boolean | Prisma.Payment$refundsArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    provider?: boolean;
    status?: boolean;
    amountMinor?: boolean;
    currency?: boolean;
    providerReference?: boolean;
    idempotencyKey?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    provider?: boolean;
    status?: boolean;
    amountMinor?: boolean;
    currency?: boolean;
    providerReference?: boolean;
    idempotencyKey?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectScalar = {
    id?: boolean;
    bookingId?: boolean;
    provider?: boolean;
    status?: boolean;
    amountMinor?: boolean;
    currency?: boolean;
    providerReference?: boolean;
    idempotencyKey?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bookingId" | "provider" | "status" | "amountMinor" | "currency" | "providerReference" | "idempotencyKey" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>;
export type PaymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
    attempts?: boolean | Prisma.Payment$attemptsArgs<ExtArgs>;
    refunds?: boolean | Prisma.Payment$refundsArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PaymentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type $PaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payment";
    objects: {
        booking: Prisma.$BookingPayload<ExtArgs>;
        attempts: Prisma.$PaymentAttemptPayload<ExtArgs>[];
        refunds: Prisma.$RefundPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bookingId: string;
        provider: $Enums.PaymentProvider;
        status: $Enums.PaymentStatus;
        amountMinor: bigint;
        currency: string;
        providerReference: string | null;
        idempotencyKey: string;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["payment"]>;
    composites: {};
};
export type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentPayload, S>;
export type PaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
};
export interface PaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
        meta: {
            name: 'Payment';
        };
    };
    findUnique<T extends PaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentCreateArgs>(args: Prisma.SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentDeleteArgs>(args: Prisma.SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentUpdateArgs>(args: Prisma.SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentUpsertArgs>(args: Prisma.SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentCountArgs>(args?: Prisma.Subset<T, PaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentCountAggregateOutputType> : number>;
    aggregate<T extends PaymentAggregateArgs>(args: Prisma.Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;
    groupBy<T extends PaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentFieldRefs;
}
export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    booking<T extends Prisma.BookingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookingDefaultArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attempts<T extends Prisma.Payment$attemptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payment$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refunds<T extends Prisma.Payment$refundsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payment$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentFieldRefs {
    readonly id: Prisma.FieldRef<"Payment", 'String'>;
    readonly bookingId: Prisma.FieldRef<"Payment", 'String'>;
    readonly provider: Prisma.FieldRef<"Payment", 'PaymentProvider'>;
    readonly status: Prisma.FieldRef<"Payment", 'PaymentStatus'>;
    readonly amountMinor: Prisma.FieldRef<"Payment", 'BigInt'>;
    readonly currency: Prisma.FieldRef<"Payment", 'String'>;
    readonly providerReference: Prisma.FieldRef<"Payment", 'String'>;
    readonly idempotencyKey: Prisma.FieldRef<"Payment", 'String'>;
    readonly paidAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Payment", 'DateTime'>;
}
export type PaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type PaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
};
export type PaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type PaymentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    where?: Prisma.PaymentWhereInput;
    limit?: number;
    include?: Prisma.PaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
};
export type PaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where: Prisma.PaymentWhereUniqueInput;
};
export type PaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    limit?: number;
};
export type Payment$attemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Payment$refundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundScalarFieldEnum | Prisma.RefundScalarFieldEnum[];
};
export type PaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
};

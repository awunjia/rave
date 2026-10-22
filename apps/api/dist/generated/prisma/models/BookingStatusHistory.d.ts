import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BookingStatusHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$BookingStatusHistoryPayload>;
export type AggregateBookingStatusHistory = {
    _count: BookingStatusHistoryCountAggregateOutputType | null;
    _min: BookingStatusHistoryMinAggregateOutputType | null;
    _max: BookingStatusHistoryMaxAggregateOutputType | null;
};
export type BookingStatusHistoryMinAggregateOutputType = {
    id: string | null;
    bookingId: string | null;
    fromStatus: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus | null;
    reason: string | null;
    changedBy: string | null;
    createdAt: Date | null;
};
export type BookingStatusHistoryMaxAggregateOutputType = {
    id: string | null;
    bookingId: string | null;
    fromStatus: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus | null;
    reason: string | null;
    changedBy: string | null;
    createdAt: Date | null;
};
export type BookingStatusHistoryCountAggregateOutputType = {
    id: number;
    bookingId: number;
    fromStatus: number;
    toStatus: number;
    reason: number;
    changedBy: number;
    createdAt: number;
    _all: number;
};
export type BookingStatusHistoryMinAggregateInputType = {
    id?: true;
    bookingId?: true;
    fromStatus?: true;
    toStatus?: true;
    reason?: true;
    changedBy?: true;
    createdAt?: true;
};
export type BookingStatusHistoryMaxAggregateInputType = {
    id?: true;
    bookingId?: true;
    fromStatus?: true;
    toStatus?: true;
    reason?: true;
    changedBy?: true;
    createdAt?: true;
};
export type BookingStatusHistoryCountAggregateInputType = {
    id?: true;
    bookingId?: true;
    fromStatus?: true;
    toStatus?: true;
    reason?: true;
    changedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type BookingStatusHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingStatusHistoryWhereInput;
    orderBy?: Prisma.BookingStatusHistoryOrderByWithRelationInput | Prisma.BookingStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BookingStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookingStatusHistoryCountAggregateInputType;
    _min?: BookingStatusHistoryMinAggregateInputType;
    _max?: BookingStatusHistoryMaxAggregateInputType;
};
export type GetBookingStatusHistoryAggregateType<T extends BookingStatusHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateBookingStatusHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBookingStatusHistory[P]> : Prisma.GetScalarType<T[P], AggregateBookingStatusHistory[P]>;
};
export type BookingStatusHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingStatusHistoryWhereInput;
    orderBy?: Prisma.BookingStatusHistoryOrderByWithAggregationInput | Prisma.BookingStatusHistoryOrderByWithAggregationInput[];
    by: Prisma.BookingStatusHistoryScalarFieldEnum[] | Prisma.BookingStatusHistoryScalarFieldEnum;
    having?: Prisma.BookingStatusHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingStatusHistoryCountAggregateInputType | true;
    _min?: BookingStatusHistoryMinAggregateInputType;
    _max?: BookingStatusHistoryMaxAggregateInputType;
};
export type BookingStatusHistoryGroupByOutputType = {
    id: string;
    bookingId: string;
    fromStatus: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus;
    reason: string | null;
    changedBy: string | null;
    createdAt: Date;
    _count: BookingStatusHistoryCountAggregateOutputType | null;
    _min: BookingStatusHistoryMinAggregateOutputType | null;
    _max: BookingStatusHistoryMaxAggregateOutputType | null;
};
export type GetBookingStatusHistoryGroupByPayload<T extends BookingStatusHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookingStatusHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookingStatusHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookingStatusHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookingStatusHistoryGroupByOutputType[P]>;
}>>;
export type BookingStatusHistoryWhereInput = {
    AND?: Prisma.BookingStatusHistoryWhereInput | Prisma.BookingStatusHistoryWhereInput[];
    OR?: Prisma.BookingStatusHistoryWhereInput[];
    NOT?: Prisma.BookingStatusHistoryWhereInput | Prisma.BookingStatusHistoryWhereInput[];
    id?: Prisma.UuidFilter<"BookingStatusHistory"> | string;
    bookingId?: Prisma.UuidFilter<"BookingStatusHistory"> | string;
    fromStatus?: Prisma.EnumBookingStatusNullableFilter<"BookingStatusHistory"> | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFilter<"BookingStatusHistory"> | $Enums.BookingStatus;
    reason?: Prisma.StringNullableFilter<"BookingStatusHistory"> | string | null;
    changedBy?: Prisma.UuidNullableFilter<"BookingStatusHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BookingStatusHistory"> | Date | string;
    booking?: Prisma.XOR<Prisma.BookingScalarRelationFilter, Prisma.BookingWhereInput>;
};
export type BookingStatusHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    toStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    booking?: Prisma.BookingOrderByWithRelationInput;
};
export type BookingStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BookingStatusHistoryWhereInput | Prisma.BookingStatusHistoryWhereInput[];
    OR?: Prisma.BookingStatusHistoryWhereInput[];
    NOT?: Prisma.BookingStatusHistoryWhereInput | Prisma.BookingStatusHistoryWhereInput[];
    bookingId?: Prisma.UuidFilter<"BookingStatusHistory"> | string;
    fromStatus?: Prisma.EnumBookingStatusNullableFilter<"BookingStatusHistory"> | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFilter<"BookingStatusHistory"> | $Enums.BookingStatus;
    reason?: Prisma.StringNullableFilter<"BookingStatusHistory"> | string | null;
    changedBy?: Prisma.UuidNullableFilter<"BookingStatusHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BookingStatusHistory"> | Date | string;
    booking?: Prisma.XOR<Prisma.BookingScalarRelationFilter, Prisma.BookingWhereInput>;
}, "id">;
export type BookingStatusHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    toStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BookingStatusHistoryCountOrderByAggregateInput;
    _max?: Prisma.BookingStatusHistoryMaxOrderByAggregateInput;
    _min?: Prisma.BookingStatusHistoryMinOrderByAggregateInput;
};
export type BookingStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookingStatusHistoryScalarWhereWithAggregatesInput | Prisma.BookingStatusHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookingStatusHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookingStatusHistoryScalarWhereWithAggregatesInput | Prisma.BookingStatusHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BookingStatusHistory"> | string;
    bookingId?: Prisma.UuidWithAggregatesFilter<"BookingStatusHistory"> | string;
    fromStatus?: Prisma.EnumBookingStatusNullableWithAggregatesFilter<"BookingStatusHistory"> | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusWithAggregatesFilter<"BookingStatusHistory"> | $Enums.BookingStatus;
    reason?: Prisma.StringNullableWithAggregatesFilter<"BookingStatusHistory"> | string | null;
    changedBy?: Prisma.UuidNullableWithAggregatesFilter<"BookingStatusHistory"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BookingStatusHistory"> | Date | string;
};
export type BookingStatusHistoryCreateInput = {
    id?: string;
    fromStatus?: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus;
    reason?: string | null;
    changedBy?: string | null;
    createdAt?: Date | string;
    booking: Prisma.BookingCreateNestedOneWithoutHistoryInput;
};
export type BookingStatusHistoryUncheckedCreateInput = {
    id?: string;
    bookingId: string;
    fromStatus?: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus;
    reason?: string | null;
    changedBy?: string | null;
    createdAt?: Date | string;
};
export type BookingStatusHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.BookingUpdateOneRequiredWithoutHistoryNestedInput;
};
export type BookingStatusHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingStatusHistoryCreateManyInput = {
    id?: string;
    bookingId: string;
    fromStatus?: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus;
    reason?: string | null;
    changedBy?: string | null;
    createdAt?: Date | string;
};
export type BookingStatusHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingStatusHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingStatusHistoryListRelationFilter = {
    every?: Prisma.BookingStatusHistoryWhereInput;
    some?: Prisma.BookingStatusHistoryWhereInput;
    none?: Prisma.BookingStatusHistoryWhereInput;
};
export type BookingStatusHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookingStatusHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrder;
    toStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    changedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingStatusHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrder;
    toStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    changedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingStatusHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    fromStatus?: Prisma.SortOrder;
    toStatus?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    changedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingStatusHistoryCreateNestedManyWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.BookingStatusHistoryCreateWithoutBookingInput, Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput> | Prisma.BookingStatusHistoryCreateWithoutBookingInput[] | Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: Prisma.BookingStatusHistoryCreateOrConnectWithoutBookingInput | Prisma.BookingStatusHistoryCreateOrConnectWithoutBookingInput[];
    createMany?: Prisma.BookingStatusHistoryCreateManyBookingInputEnvelope;
    connect?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
};
export type BookingStatusHistoryUncheckedCreateNestedManyWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.BookingStatusHistoryCreateWithoutBookingInput, Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput> | Prisma.BookingStatusHistoryCreateWithoutBookingInput[] | Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: Prisma.BookingStatusHistoryCreateOrConnectWithoutBookingInput | Prisma.BookingStatusHistoryCreateOrConnectWithoutBookingInput[];
    createMany?: Prisma.BookingStatusHistoryCreateManyBookingInputEnvelope;
    connect?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
};
export type BookingStatusHistoryUpdateManyWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.BookingStatusHistoryCreateWithoutBookingInput, Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput> | Prisma.BookingStatusHistoryCreateWithoutBookingInput[] | Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: Prisma.BookingStatusHistoryCreateOrConnectWithoutBookingInput | Prisma.BookingStatusHistoryCreateOrConnectWithoutBookingInput[];
    upsert?: Prisma.BookingStatusHistoryUpsertWithWhereUniqueWithoutBookingInput | Prisma.BookingStatusHistoryUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: Prisma.BookingStatusHistoryCreateManyBookingInputEnvelope;
    set?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
    disconnect?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
    delete?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
    connect?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
    update?: Prisma.BookingStatusHistoryUpdateWithWhereUniqueWithoutBookingInput | Prisma.BookingStatusHistoryUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?: Prisma.BookingStatusHistoryUpdateManyWithWhereWithoutBookingInput | Prisma.BookingStatusHistoryUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: Prisma.BookingStatusHistoryScalarWhereInput | Prisma.BookingStatusHistoryScalarWhereInput[];
};
export type BookingStatusHistoryUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.BookingStatusHistoryCreateWithoutBookingInput, Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput> | Prisma.BookingStatusHistoryCreateWithoutBookingInput[] | Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: Prisma.BookingStatusHistoryCreateOrConnectWithoutBookingInput | Prisma.BookingStatusHistoryCreateOrConnectWithoutBookingInput[];
    upsert?: Prisma.BookingStatusHistoryUpsertWithWhereUniqueWithoutBookingInput | Prisma.BookingStatusHistoryUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: Prisma.BookingStatusHistoryCreateManyBookingInputEnvelope;
    set?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
    disconnect?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
    delete?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
    connect?: Prisma.BookingStatusHistoryWhereUniqueInput | Prisma.BookingStatusHistoryWhereUniqueInput[];
    update?: Prisma.BookingStatusHistoryUpdateWithWhereUniqueWithoutBookingInput | Prisma.BookingStatusHistoryUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?: Prisma.BookingStatusHistoryUpdateManyWithWhereWithoutBookingInput | Prisma.BookingStatusHistoryUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: Prisma.BookingStatusHistoryScalarWhereInput | Prisma.BookingStatusHistoryScalarWhereInput[];
};
export type NullableEnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus | null;
};
export type BookingStatusHistoryCreateWithoutBookingInput = {
    id?: string;
    fromStatus?: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus;
    reason?: string | null;
    changedBy?: string | null;
    createdAt?: Date | string;
};
export type BookingStatusHistoryUncheckedCreateWithoutBookingInput = {
    id?: string;
    fromStatus?: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus;
    reason?: string | null;
    changedBy?: string | null;
    createdAt?: Date | string;
};
export type BookingStatusHistoryCreateOrConnectWithoutBookingInput = {
    where: Prisma.BookingStatusHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingStatusHistoryCreateWithoutBookingInput, Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput>;
};
export type BookingStatusHistoryCreateManyBookingInputEnvelope = {
    data: Prisma.BookingStatusHistoryCreateManyBookingInput | Prisma.BookingStatusHistoryCreateManyBookingInput[];
    skipDuplicates?: boolean;
};
export type BookingStatusHistoryUpsertWithWhereUniqueWithoutBookingInput = {
    where: Prisma.BookingStatusHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookingStatusHistoryUpdateWithoutBookingInput, Prisma.BookingStatusHistoryUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.BookingStatusHistoryCreateWithoutBookingInput, Prisma.BookingStatusHistoryUncheckedCreateWithoutBookingInput>;
};
export type BookingStatusHistoryUpdateWithWhereUniqueWithoutBookingInput = {
    where: Prisma.BookingStatusHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookingStatusHistoryUpdateWithoutBookingInput, Prisma.BookingStatusHistoryUncheckedUpdateWithoutBookingInput>;
};
export type BookingStatusHistoryUpdateManyWithWhereWithoutBookingInput = {
    where: Prisma.BookingStatusHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.BookingStatusHistoryUpdateManyMutationInput, Prisma.BookingStatusHistoryUncheckedUpdateManyWithoutBookingInput>;
};
export type BookingStatusHistoryScalarWhereInput = {
    AND?: Prisma.BookingStatusHistoryScalarWhereInput | Prisma.BookingStatusHistoryScalarWhereInput[];
    OR?: Prisma.BookingStatusHistoryScalarWhereInput[];
    NOT?: Prisma.BookingStatusHistoryScalarWhereInput | Prisma.BookingStatusHistoryScalarWhereInput[];
    id?: Prisma.UuidFilter<"BookingStatusHistory"> | string;
    bookingId?: Prisma.UuidFilter<"BookingStatusHistory"> | string;
    fromStatus?: Prisma.EnumBookingStatusNullableFilter<"BookingStatusHistory"> | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFilter<"BookingStatusHistory"> | $Enums.BookingStatus;
    reason?: Prisma.StringNullableFilter<"BookingStatusHistory"> | string | null;
    changedBy?: Prisma.UuidNullableFilter<"BookingStatusHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BookingStatusHistory"> | Date | string;
};
export type BookingStatusHistoryCreateManyBookingInput = {
    id?: string;
    fromStatus?: $Enums.BookingStatus | null;
    toStatus: $Enums.BookingStatus;
    reason?: string | null;
    changedBy?: string | null;
    createdAt?: Date | string;
};
export type BookingStatusHistoryUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingStatusHistoryUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingStatusHistoryUncheckedUpdateManyWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromStatus?: Prisma.NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null;
    toStatus?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingStatusHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    fromStatus?: boolean;
    toStatus?: boolean;
    reason?: boolean;
    changedBy?: boolean;
    createdAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookingStatusHistory"]>;
export type BookingStatusHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    fromStatus?: boolean;
    toStatus?: boolean;
    reason?: boolean;
    changedBy?: boolean;
    createdAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookingStatusHistory"]>;
export type BookingStatusHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    fromStatus?: boolean;
    toStatus?: boolean;
    reason?: boolean;
    changedBy?: boolean;
    createdAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookingStatusHistory"]>;
export type BookingStatusHistorySelectScalar = {
    id?: boolean;
    bookingId?: boolean;
    fromStatus?: boolean;
    toStatus?: boolean;
    reason?: boolean;
    changedBy?: boolean;
    createdAt?: boolean;
};
export type BookingStatusHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bookingId" | "fromStatus" | "toStatus" | "reason" | "changedBy" | "createdAt", ExtArgs["result"]["bookingStatusHistory"]>;
export type BookingStatusHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type BookingStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type BookingStatusHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type $BookingStatusHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BookingStatusHistory";
    objects: {
        booking: Prisma.$BookingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bookingId: string;
        fromStatus: $Enums.BookingStatus | null;
        toStatus: $Enums.BookingStatus;
        reason: string | null;
        changedBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["bookingStatusHistory"]>;
    composites: {};
};
export type BookingStatusHistoryGetPayload<S extends boolean | null | undefined | BookingStatusHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload, S>;
export type BookingStatusHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookingStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookingStatusHistoryCountAggregateInputType | true;
};
export interface BookingStatusHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BookingStatusHistory'];
        meta: {
            name: 'BookingStatusHistory';
        };
    };
    findUnique<T extends BookingStatusHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, BookingStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookingStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookingStatusHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookingStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookingStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookingStatusHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, BookingStatusHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookingStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookingStatusHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookingStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookingStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookingStatusHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, BookingStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookingStatusHistoryCreateArgs>(args: Prisma.SelectSubset<T, BookingStatusHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__BookingStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookingStatusHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, BookingStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookingStatusHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookingStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookingStatusHistoryDeleteArgs>(args: Prisma.SelectSubset<T, BookingStatusHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__BookingStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookingStatusHistoryUpdateArgs>(args: Prisma.SelectSubset<T, BookingStatusHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__BookingStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookingStatusHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookingStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookingStatusHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, BookingStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookingStatusHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookingStatusHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookingStatusHistoryUpsertArgs>(args: Prisma.SelectSubset<T, BookingStatusHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__BookingStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$BookingStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookingStatusHistoryCountArgs>(args?: Prisma.Subset<T, BookingStatusHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookingStatusHistoryCountAggregateOutputType> : number>;
    aggregate<T extends BookingStatusHistoryAggregateArgs>(args: Prisma.Subset<T, BookingStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetBookingStatusHistoryAggregateType<T>>;
    groupBy<T extends BookingStatusHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookingStatusHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: BookingStatusHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookingStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookingStatusHistoryFieldRefs;
}
export interface Prisma__BookingStatusHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    booking<T extends Prisma.BookingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookingDefaultArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookingStatusHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"BookingStatusHistory", 'String'>;
    readonly bookingId: Prisma.FieldRef<"BookingStatusHistory", 'String'>;
    readonly fromStatus: Prisma.FieldRef<"BookingStatusHistory", 'BookingStatus'>;
    readonly toStatus: Prisma.FieldRef<"BookingStatusHistory", 'BookingStatus'>;
    readonly reason: Prisma.FieldRef<"BookingStatusHistory", 'String'>;
    readonly changedBy: Prisma.FieldRef<"BookingStatusHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BookingStatusHistory", 'DateTime'>;
}
export type BookingStatusHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    where: Prisma.BookingStatusHistoryWhereUniqueInput;
};
export type BookingStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    where: Prisma.BookingStatusHistoryWhereUniqueInput;
};
export type BookingStatusHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    where?: Prisma.BookingStatusHistoryWhereInput;
    orderBy?: Prisma.BookingStatusHistoryOrderByWithRelationInput | Prisma.BookingStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BookingStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingStatusHistoryScalarFieldEnum | Prisma.BookingStatusHistoryScalarFieldEnum[];
};
export type BookingStatusHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    where?: Prisma.BookingStatusHistoryWhereInput;
    orderBy?: Prisma.BookingStatusHistoryOrderByWithRelationInput | Prisma.BookingStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BookingStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingStatusHistoryScalarFieldEnum | Prisma.BookingStatusHistoryScalarFieldEnum[];
};
export type BookingStatusHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    where?: Prisma.BookingStatusHistoryWhereInput;
    orderBy?: Prisma.BookingStatusHistoryOrderByWithRelationInput | Prisma.BookingStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BookingStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingStatusHistoryScalarFieldEnum | Prisma.BookingStatusHistoryScalarFieldEnum[];
};
export type BookingStatusHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookingStatusHistoryCreateInput, Prisma.BookingStatusHistoryUncheckedCreateInput>;
};
export type BookingStatusHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookingStatusHistoryCreateManyInput | Prisma.BookingStatusHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookingStatusHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    data: Prisma.BookingStatusHistoryCreateManyInput | Prisma.BookingStatusHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BookingStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BookingStatusHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookingStatusHistoryUpdateInput, Prisma.BookingStatusHistoryUncheckedUpdateInput>;
    where: Prisma.BookingStatusHistoryWhereUniqueInput;
};
export type BookingStatusHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookingStatusHistoryUpdateManyMutationInput, Prisma.BookingStatusHistoryUncheckedUpdateManyInput>;
    where?: Prisma.BookingStatusHistoryWhereInput;
    limit?: number;
};
export type BookingStatusHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookingStatusHistoryUpdateManyMutationInput, Prisma.BookingStatusHistoryUncheckedUpdateManyInput>;
    where?: Prisma.BookingStatusHistoryWhereInput;
    limit?: number;
    include?: Prisma.BookingStatusHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BookingStatusHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    where: Prisma.BookingStatusHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingStatusHistoryCreateInput, Prisma.BookingStatusHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookingStatusHistoryUpdateInput, Prisma.BookingStatusHistoryUncheckedUpdateInput>;
};
export type BookingStatusHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
    where: Prisma.BookingStatusHistoryWhereUniqueInput;
};
export type BookingStatusHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingStatusHistoryWhereInput;
    limit?: number;
};
export type BookingStatusHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.BookingStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.BookingStatusHistoryInclude<ExtArgs> | null;
};

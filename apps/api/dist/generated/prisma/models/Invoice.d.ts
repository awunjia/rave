import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoicePayload>;
export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type InvoiceAvgAggregateOutputType = {
    amountMinor: number | null;
};
export type InvoiceSumAggregateOutputType = {
    amountMinor: bigint | null;
};
export type InvoiceMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    bookingId: string | null;
    invoiceNumber: string | null;
    amountMinor: bigint | null;
    currency: string | null;
    issuedAt: Date | null;
    dueAt: Date | null;
};
export type InvoiceMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    bookingId: string | null;
    invoiceNumber: string | null;
    amountMinor: bigint | null;
    currency: string | null;
    issuedAt: Date | null;
    dueAt: Date | null;
};
export type InvoiceCountAggregateOutputType = {
    id: number;
    organizationId: number;
    bookingId: number;
    invoiceNumber: number;
    amountMinor: number;
    currency: number;
    issuedAt: number;
    dueAt: number;
    _all: number;
};
export type InvoiceAvgAggregateInputType = {
    amountMinor?: true;
};
export type InvoiceSumAggregateInputType = {
    amountMinor?: true;
};
export type InvoiceMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    bookingId?: true;
    invoiceNumber?: true;
    amountMinor?: true;
    currency?: true;
    issuedAt?: true;
    dueAt?: true;
};
export type InvoiceMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    bookingId?: true;
    invoiceNumber?: true;
    amountMinor?: true;
    currency?: true;
    issuedAt?: true;
    dueAt?: true;
};
export type InvoiceCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    bookingId?: true;
    invoiceNumber?: true;
    amountMinor?: true;
    currency?: true;
    issuedAt?: true;
    dueAt?: true;
    _all?: true;
};
export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvoiceCountAggregateInputType;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoice[P]> : Prisma.GetScalarType<T[P], AggregateInvoice[P]>;
};
export type InvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithAggregationInput | Prisma.InvoiceOrderByWithAggregationInput[];
    by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum;
    having?: Prisma.InvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type InvoiceGroupByOutputType = {
    id: string;
    organizationId: string;
    bookingId: string;
    invoiceNumber: string;
    amountMinor: bigint;
    currency: string;
    issuedAt: Date;
    dueAt: Date | null;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
}>>;
export type InvoiceWhereInput = {
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    id?: Prisma.UuidFilter<"Invoice"> | string;
    organizationId?: Prisma.UuidFilter<"Invoice"> | string;
    bookingId?: Prisma.UuidFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"Invoice"> | string;
    amountMinor?: Prisma.BigIntFilter<"Invoice"> | bigint | number;
    currency?: Prisma.StringFilter<"Invoice"> | string;
    issuedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    booking?: Prisma.XOR<Prisma.BookingScalarRelationFilter, Prisma.BookingWhereInput>;
};
export type InvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    booking?: Prisma.BookingOrderByWithRelationInput;
};
export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bookingId?: string;
    invoiceNumber?: string;
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    organizationId?: Prisma.UuidFilter<"Invoice"> | string;
    amountMinor?: Prisma.BigIntFilter<"Invoice"> | bigint | number;
    currency?: Prisma.StringFilter<"Invoice"> | string;
    issuedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    booking?: Prisma.XOR<Prisma.BookingScalarRelationFilter, Prisma.BookingWhereInput>;
}, "id" | "bookingId" | "invoiceNumber">;
export type InvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InvoiceCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceSumOrderByAggregateInput;
};
export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Invoice"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"Invoice"> | string;
    bookingId?: Prisma.UuidWithAggregatesFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    amountMinor?: Prisma.BigIntWithAggregatesFilter<"Invoice"> | bigint | number;
    currency?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    issuedAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    dueAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null;
};
export type InvoiceCreateInput = {
    id?: string;
    invoiceNumber: string;
    amountMinor: bigint | number;
    currency: string;
    issuedAt?: Date | string;
    dueAt?: Date | string | null;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvoicesInput;
    booking: Prisma.BookingCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    bookingId: string;
    invoiceNumber: string;
    amountMinor: bigint | number;
    currency: string;
    issuedAt?: Date | string;
    dueAt?: Date | string | null;
};
export type InvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvoicesNestedInput;
    booking?: Prisma.BookingUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvoiceCreateManyInput = {
    id?: string;
    organizationId: string;
    bookingId: string;
    invoiceNumber: string;
    amountMinor: bigint | number;
    currency: string;
    issuedAt?: Date | string;
    dueAt?: Date | string | null;
};
export type InvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvoiceListRelationFilter = {
    every?: Prisma.InvoiceWhereInput;
    some?: Prisma.InvoiceWhereInput;
    none?: Prisma.InvoiceWhereInput;
};
export type InvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceNullableScalarRelationFilter = {
    is?: Prisma.InvoiceWhereInput | null;
    isNot?: Prisma.InvoiceWhereInput | null;
};
export type InvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
};
export type InvoiceAvgOrderByAggregateInput = {
    amountMinor?: Prisma.SortOrder;
};
export type InvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
};
export type InvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    amountMinor?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
};
export type InvoiceSumOrderByAggregateInput = {
    amountMinor?: Prisma.SortOrder;
};
export type InvoiceCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.InvoiceCreateWithoutOrganizationInput[] | Prisma.InvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrganizationInput | Prisma.InvoiceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.InvoiceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.InvoiceCreateWithoutOrganizationInput[] | Prisma.InvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrganizationInput | Prisma.InvoiceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.InvoiceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.InvoiceCreateWithoutOrganizationInput[] | Prisma.InvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrganizationInput | Prisma.InvoiceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.InvoiceCreateManyOrganizationInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutOrganizationInput | Prisma.InvoiceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.InvoiceCreateWithoutOrganizationInput[] | Prisma.InvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrganizationInput | Prisma.InvoiceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.InvoiceCreateManyOrganizationInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutOrganizationInput | Prisma.InvoiceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutBookingInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUncheckedCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutBookingInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateOneWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.InvoiceUpsertWithoutBookingInput;
    disconnect?: Prisma.InvoiceWhereInput | boolean;
    delete?: Prisma.InvoiceWhereInput | boolean;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutBookingInput, Prisma.InvoiceUpdateWithoutBookingInput>, Prisma.InvoiceUncheckedUpdateWithoutBookingInput>;
};
export type InvoiceUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.InvoiceUpsertWithoutBookingInput;
    disconnect?: Prisma.InvoiceWhereInput | boolean;
    delete?: Prisma.InvoiceWhereInput | boolean;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutBookingInput, Prisma.InvoiceUpdateWithoutBookingInput>, Prisma.InvoiceUncheckedUpdateWithoutBookingInput>;
};
export type InvoiceCreateWithoutOrganizationInput = {
    id?: string;
    invoiceNumber: string;
    amountMinor: bigint | number;
    currency: string;
    issuedAt?: Date | string;
    dueAt?: Date | string | null;
    booking: Prisma.BookingCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    bookingId: string;
    invoiceNumber: string;
    amountMinor: bigint | number;
    currency: string;
    issuedAt?: Date | string;
    dueAt?: Date | string | null;
};
export type InvoiceCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput>;
};
export type InvoiceCreateManyOrganizationInputEnvelope = {
    data: Prisma.InvoiceCreateManyOrganizationInput | Prisma.InvoiceCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutOrganizationInput, Prisma.InvoiceUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutOrganizationInput, Prisma.InvoiceUncheckedUpdateWithoutOrganizationInput>;
};
export type InvoiceUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationInput>;
};
export type InvoiceScalarWhereInput = {
    AND?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    OR?: Prisma.InvoiceScalarWhereInput[];
    NOT?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    id?: Prisma.UuidFilter<"Invoice"> | string;
    organizationId?: Prisma.UuidFilter<"Invoice"> | string;
    bookingId?: Prisma.UuidFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"Invoice"> | string;
    amountMinor?: Prisma.BigIntFilter<"Invoice"> | bigint | number;
    currency?: Prisma.StringFilter<"Invoice"> | string;
    issuedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
};
export type InvoiceCreateWithoutBookingInput = {
    id?: string;
    invoiceNumber: string;
    amountMinor: bigint | number;
    currency: string;
    issuedAt?: Date | string;
    dueAt?: Date | string | null;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateWithoutBookingInput = {
    id?: string;
    organizationId: string;
    invoiceNumber: string;
    amountMinor: bigint | number;
    currency: string;
    issuedAt?: Date | string;
    dueAt?: Date | string | null;
};
export type InvoiceCreateOrConnectWithoutBookingInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
};
export type InvoiceUpsertWithoutBookingInput = {
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutBookingInput, Prisma.InvoiceUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    where?: Prisma.InvoiceWhereInput;
};
export type InvoiceUpdateToOneWithWhereWithoutBookingInput = {
    where?: Prisma.InvoiceWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutBookingInput, Prisma.InvoiceUncheckedUpdateWithoutBookingInput>;
};
export type InvoiceUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvoiceCreateManyOrganizationInput = {
    id?: string;
    bookingId: string;
    invoiceNumber: string;
    amountMinor: bigint | number;
    currency: string;
    issuedAt?: Date | string;
    dueAt?: Date | string | null;
};
export type InvoiceUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    booking?: Prisma.BookingUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvoiceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    amountMinor?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    bookingId?: boolean;
    invoiceNumber?: boolean;
    amountMinor?: boolean;
    currency?: boolean;
    issuedAt?: boolean;
    dueAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    bookingId?: boolean;
    invoiceNumber?: boolean;
    amountMinor?: boolean;
    currency?: boolean;
    issuedAt?: boolean;
    dueAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    bookingId?: boolean;
    invoiceNumber?: boolean;
    amountMinor?: boolean;
    currency?: boolean;
    issuedAt?: boolean;
    dueAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    bookingId?: boolean;
    invoiceNumber?: boolean;
    amountMinor?: boolean;
    currency?: boolean;
    issuedAt?: boolean;
    dueAt?: boolean;
};
export type InvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "bookingId" | "invoiceNumber" | "amountMinor" | "currency" | "issuedAt" | "dueAt", ExtArgs["result"]["invoice"]>;
export type InvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type $InvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invoice";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        booking: Prisma.$BookingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        bookingId: string;
        invoiceNumber: string;
        amountMinor: bigint;
        currency: string;
        issuedAt: Date;
        dueAt: Date | null;
    }, ExtArgs["result"]["invoice"]>;
    composites: {};
};
export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoicePayload, S>;
export type InvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true;
};
export interface InvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invoice'];
        meta: {
            name: 'Invoice';
        };
    };
    findUnique<T extends InvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvoiceCreateArgs>(args: Prisma.SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvoiceCountArgs>(args?: Prisma.Subset<T, InvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType> : number>;
    aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;
    groupBy<T extends InvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvoiceFieldRefs;
}
export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    booking<T extends Prisma.BookingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookingDefaultArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"Invoice", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly bookingId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly invoiceNumber: Prisma.FieldRef<"Invoice", 'String'>;
    readonly amountMinor: Prisma.FieldRef<"Invoice", 'BigInt'>;
    readonly currency: Prisma.FieldRef<"Invoice", 'String'>;
    readonly issuedAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly dueAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
}
export type InvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type InvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type InvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type InvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
};
export type InvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
    include?: Prisma.InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
};
export type InvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type InvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
};

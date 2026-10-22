import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AvailabilityExceptionModel = runtime.Types.Result.DefaultSelection<Prisma.$AvailabilityExceptionPayload>;
export type AggregateAvailabilityException = {
    _count: AvailabilityExceptionCountAggregateOutputType | null;
    _min: AvailabilityExceptionMinAggregateOutputType | null;
    _max: AvailabilityExceptionMaxAggregateOutputType | null;
};
export type AvailabilityExceptionMinAggregateOutputType = {
    id: string | null;
    consultantId: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    reason: string | null;
    isAvailable: boolean | null;
};
export type AvailabilityExceptionMaxAggregateOutputType = {
    id: string | null;
    consultantId: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    reason: string | null;
    isAvailable: boolean | null;
};
export type AvailabilityExceptionCountAggregateOutputType = {
    id: number;
    consultantId: number;
    startsAt: number;
    endsAt: number;
    reason: number;
    isAvailable: number;
    _all: number;
};
export type AvailabilityExceptionMinAggregateInputType = {
    id?: true;
    consultantId?: true;
    startsAt?: true;
    endsAt?: true;
    reason?: true;
    isAvailable?: true;
};
export type AvailabilityExceptionMaxAggregateInputType = {
    id?: true;
    consultantId?: true;
    startsAt?: true;
    endsAt?: true;
    reason?: true;
    isAvailable?: true;
};
export type AvailabilityExceptionCountAggregateInputType = {
    id?: true;
    consultantId?: true;
    startsAt?: true;
    endsAt?: true;
    reason?: true;
    isAvailable?: true;
    _all?: true;
};
export type AvailabilityExceptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityExceptionWhereInput;
    orderBy?: Prisma.AvailabilityExceptionOrderByWithRelationInput | Prisma.AvailabilityExceptionOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityExceptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AvailabilityExceptionCountAggregateInputType;
    _min?: AvailabilityExceptionMinAggregateInputType;
    _max?: AvailabilityExceptionMaxAggregateInputType;
};
export type GetAvailabilityExceptionAggregateType<T extends AvailabilityExceptionAggregateArgs> = {
    [P in keyof T & keyof AggregateAvailabilityException]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvailabilityException[P]> : Prisma.GetScalarType<T[P], AggregateAvailabilityException[P]>;
};
export type AvailabilityExceptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityExceptionWhereInput;
    orderBy?: Prisma.AvailabilityExceptionOrderByWithAggregationInput | Prisma.AvailabilityExceptionOrderByWithAggregationInput[];
    by: Prisma.AvailabilityExceptionScalarFieldEnum[] | Prisma.AvailabilityExceptionScalarFieldEnum;
    having?: Prisma.AvailabilityExceptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvailabilityExceptionCountAggregateInputType | true;
    _min?: AvailabilityExceptionMinAggregateInputType;
    _max?: AvailabilityExceptionMaxAggregateInputType;
};
export type AvailabilityExceptionGroupByOutputType = {
    id: string;
    consultantId: string;
    startsAt: Date;
    endsAt: Date;
    reason: string | null;
    isAvailable: boolean;
    _count: AvailabilityExceptionCountAggregateOutputType | null;
    _min: AvailabilityExceptionMinAggregateOutputType | null;
    _max: AvailabilityExceptionMaxAggregateOutputType | null;
};
export type GetAvailabilityExceptionGroupByPayload<T extends AvailabilityExceptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvailabilityExceptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvailabilityExceptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvailabilityExceptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvailabilityExceptionGroupByOutputType[P]>;
}>>;
export type AvailabilityExceptionWhereInput = {
    AND?: Prisma.AvailabilityExceptionWhereInput | Prisma.AvailabilityExceptionWhereInput[];
    OR?: Prisma.AvailabilityExceptionWhereInput[];
    NOT?: Prisma.AvailabilityExceptionWhereInput | Prisma.AvailabilityExceptionWhereInput[];
    id?: Prisma.UuidFilter<"AvailabilityException"> | string;
    consultantId?: Prisma.UuidFilter<"AvailabilityException"> | string;
    startsAt?: Prisma.DateTimeFilter<"AvailabilityException"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"AvailabilityException"> | Date | string;
    reason?: Prisma.StringNullableFilter<"AvailabilityException"> | string | null;
    isAvailable?: Prisma.BoolFilter<"AvailabilityException"> | boolean;
    consultant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AvailabilityExceptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    consultant?: Prisma.UserOrderByWithRelationInput;
};
export type AvailabilityExceptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AvailabilityExceptionWhereInput | Prisma.AvailabilityExceptionWhereInput[];
    OR?: Prisma.AvailabilityExceptionWhereInput[];
    NOT?: Prisma.AvailabilityExceptionWhereInput | Prisma.AvailabilityExceptionWhereInput[];
    consultantId?: Prisma.UuidFilter<"AvailabilityException"> | string;
    startsAt?: Prisma.DateTimeFilter<"AvailabilityException"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"AvailabilityException"> | Date | string;
    reason?: Prisma.StringNullableFilter<"AvailabilityException"> | string | null;
    isAvailable?: Prisma.BoolFilter<"AvailabilityException"> | boolean;
    consultant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AvailabilityExceptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    _count?: Prisma.AvailabilityExceptionCountOrderByAggregateInput;
    _max?: Prisma.AvailabilityExceptionMaxOrderByAggregateInput;
    _min?: Prisma.AvailabilityExceptionMinOrderByAggregateInput;
};
export type AvailabilityExceptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvailabilityExceptionScalarWhereWithAggregatesInput | Prisma.AvailabilityExceptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvailabilityExceptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvailabilityExceptionScalarWhereWithAggregatesInput | Prisma.AvailabilityExceptionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AvailabilityException"> | string;
    consultantId?: Prisma.UuidWithAggregatesFilter<"AvailabilityException"> | string;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"AvailabilityException"> | Date | string;
    endsAt?: Prisma.DateTimeWithAggregatesFilter<"AvailabilityException"> | Date | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"AvailabilityException"> | string | null;
    isAvailable?: Prisma.BoolWithAggregatesFilter<"AvailabilityException"> | boolean;
};
export type AvailabilityExceptionCreateInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    reason?: string | null;
    isAvailable?: boolean;
    consultant: Prisma.UserCreateNestedOneWithoutAvailabilityExceptionsInput;
};
export type AvailabilityExceptionUncheckedCreateInput = {
    id?: string;
    consultantId: string;
    startsAt: Date | string;
    endsAt: Date | string;
    reason?: string | null;
    isAvailable?: boolean;
};
export type AvailabilityExceptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consultant?: Prisma.UserUpdateOneRequiredWithoutAvailabilityExceptionsNestedInput;
};
export type AvailabilityExceptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    consultantId?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityExceptionCreateManyInput = {
    id?: string;
    consultantId: string;
    startsAt: Date | string;
    endsAt: Date | string;
    reason?: string | null;
    isAvailable?: boolean;
};
export type AvailabilityExceptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityExceptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    consultantId?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityExceptionListRelationFilter = {
    every?: Prisma.AvailabilityExceptionWhereInput;
    some?: Prisma.AvailabilityExceptionWhereInput;
    none?: Prisma.AvailabilityExceptionWhereInput;
};
export type AvailabilityExceptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AvailabilityExceptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
};
export type AvailabilityExceptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
};
export type AvailabilityExceptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
};
export type AvailabilityExceptionCreateNestedManyWithoutConsultantInput = {
    create?: Prisma.XOR<Prisma.AvailabilityExceptionCreateWithoutConsultantInput, Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput> | Prisma.AvailabilityExceptionCreateWithoutConsultantInput[] | Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput[];
    connectOrCreate?: Prisma.AvailabilityExceptionCreateOrConnectWithoutConsultantInput | Prisma.AvailabilityExceptionCreateOrConnectWithoutConsultantInput[];
    createMany?: Prisma.AvailabilityExceptionCreateManyConsultantInputEnvelope;
    connect?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
};
export type AvailabilityExceptionUncheckedCreateNestedManyWithoutConsultantInput = {
    create?: Prisma.XOR<Prisma.AvailabilityExceptionCreateWithoutConsultantInput, Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput> | Prisma.AvailabilityExceptionCreateWithoutConsultantInput[] | Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput[];
    connectOrCreate?: Prisma.AvailabilityExceptionCreateOrConnectWithoutConsultantInput | Prisma.AvailabilityExceptionCreateOrConnectWithoutConsultantInput[];
    createMany?: Prisma.AvailabilityExceptionCreateManyConsultantInputEnvelope;
    connect?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
};
export type AvailabilityExceptionUpdateManyWithoutConsultantNestedInput = {
    create?: Prisma.XOR<Prisma.AvailabilityExceptionCreateWithoutConsultantInput, Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput> | Prisma.AvailabilityExceptionCreateWithoutConsultantInput[] | Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput[];
    connectOrCreate?: Prisma.AvailabilityExceptionCreateOrConnectWithoutConsultantInput | Prisma.AvailabilityExceptionCreateOrConnectWithoutConsultantInput[];
    upsert?: Prisma.AvailabilityExceptionUpsertWithWhereUniqueWithoutConsultantInput | Prisma.AvailabilityExceptionUpsertWithWhereUniqueWithoutConsultantInput[];
    createMany?: Prisma.AvailabilityExceptionCreateManyConsultantInputEnvelope;
    set?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
    disconnect?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
    delete?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
    connect?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
    update?: Prisma.AvailabilityExceptionUpdateWithWhereUniqueWithoutConsultantInput | Prisma.AvailabilityExceptionUpdateWithWhereUniqueWithoutConsultantInput[];
    updateMany?: Prisma.AvailabilityExceptionUpdateManyWithWhereWithoutConsultantInput | Prisma.AvailabilityExceptionUpdateManyWithWhereWithoutConsultantInput[];
    deleteMany?: Prisma.AvailabilityExceptionScalarWhereInput | Prisma.AvailabilityExceptionScalarWhereInput[];
};
export type AvailabilityExceptionUncheckedUpdateManyWithoutConsultantNestedInput = {
    create?: Prisma.XOR<Prisma.AvailabilityExceptionCreateWithoutConsultantInput, Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput> | Prisma.AvailabilityExceptionCreateWithoutConsultantInput[] | Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput[];
    connectOrCreate?: Prisma.AvailabilityExceptionCreateOrConnectWithoutConsultantInput | Prisma.AvailabilityExceptionCreateOrConnectWithoutConsultantInput[];
    upsert?: Prisma.AvailabilityExceptionUpsertWithWhereUniqueWithoutConsultantInput | Prisma.AvailabilityExceptionUpsertWithWhereUniqueWithoutConsultantInput[];
    createMany?: Prisma.AvailabilityExceptionCreateManyConsultantInputEnvelope;
    set?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
    disconnect?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
    delete?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
    connect?: Prisma.AvailabilityExceptionWhereUniqueInput | Prisma.AvailabilityExceptionWhereUniqueInput[];
    update?: Prisma.AvailabilityExceptionUpdateWithWhereUniqueWithoutConsultantInput | Prisma.AvailabilityExceptionUpdateWithWhereUniqueWithoutConsultantInput[];
    updateMany?: Prisma.AvailabilityExceptionUpdateManyWithWhereWithoutConsultantInput | Prisma.AvailabilityExceptionUpdateManyWithWhereWithoutConsultantInput[];
    deleteMany?: Prisma.AvailabilityExceptionScalarWhereInput | Prisma.AvailabilityExceptionScalarWhereInput[];
};
export type AvailabilityExceptionCreateWithoutConsultantInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    reason?: string | null;
    isAvailable?: boolean;
};
export type AvailabilityExceptionUncheckedCreateWithoutConsultantInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    reason?: string | null;
    isAvailable?: boolean;
};
export type AvailabilityExceptionCreateOrConnectWithoutConsultantInput = {
    where: Prisma.AvailabilityExceptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvailabilityExceptionCreateWithoutConsultantInput, Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput>;
};
export type AvailabilityExceptionCreateManyConsultantInputEnvelope = {
    data: Prisma.AvailabilityExceptionCreateManyConsultantInput | Prisma.AvailabilityExceptionCreateManyConsultantInput[];
    skipDuplicates?: boolean;
};
export type AvailabilityExceptionUpsertWithWhereUniqueWithoutConsultantInput = {
    where: Prisma.AvailabilityExceptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.AvailabilityExceptionUpdateWithoutConsultantInput, Prisma.AvailabilityExceptionUncheckedUpdateWithoutConsultantInput>;
    create: Prisma.XOR<Prisma.AvailabilityExceptionCreateWithoutConsultantInput, Prisma.AvailabilityExceptionUncheckedCreateWithoutConsultantInput>;
};
export type AvailabilityExceptionUpdateWithWhereUniqueWithoutConsultantInput = {
    where: Prisma.AvailabilityExceptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.AvailabilityExceptionUpdateWithoutConsultantInput, Prisma.AvailabilityExceptionUncheckedUpdateWithoutConsultantInput>;
};
export type AvailabilityExceptionUpdateManyWithWhereWithoutConsultantInput = {
    where: Prisma.AvailabilityExceptionScalarWhereInput;
    data: Prisma.XOR<Prisma.AvailabilityExceptionUpdateManyMutationInput, Prisma.AvailabilityExceptionUncheckedUpdateManyWithoutConsultantInput>;
};
export type AvailabilityExceptionScalarWhereInput = {
    AND?: Prisma.AvailabilityExceptionScalarWhereInput | Prisma.AvailabilityExceptionScalarWhereInput[];
    OR?: Prisma.AvailabilityExceptionScalarWhereInput[];
    NOT?: Prisma.AvailabilityExceptionScalarWhereInput | Prisma.AvailabilityExceptionScalarWhereInput[];
    id?: Prisma.UuidFilter<"AvailabilityException"> | string;
    consultantId?: Prisma.UuidFilter<"AvailabilityException"> | string;
    startsAt?: Prisma.DateTimeFilter<"AvailabilityException"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"AvailabilityException"> | Date | string;
    reason?: Prisma.StringNullableFilter<"AvailabilityException"> | string | null;
    isAvailable?: Prisma.BoolFilter<"AvailabilityException"> | boolean;
};
export type AvailabilityExceptionCreateManyConsultantInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    reason?: string | null;
    isAvailable?: boolean;
};
export type AvailabilityExceptionUpdateWithoutConsultantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityExceptionUncheckedUpdateWithoutConsultantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityExceptionUncheckedUpdateManyWithoutConsultantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityExceptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    consultantId?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    reason?: boolean;
    isAvailable?: boolean;
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availabilityException"]>;
export type AvailabilityExceptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    consultantId?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    reason?: boolean;
    isAvailable?: boolean;
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availabilityException"]>;
export type AvailabilityExceptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    consultantId?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    reason?: boolean;
    isAvailable?: boolean;
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availabilityException"]>;
export type AvailabilityExceptionSelectScalar = {
    id?: boolean;
    consultantId?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    reason?: boolean;
    isAvailable?: boolean;
};
export type AvailabilityExceptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "consultantId" | "startsAt" | "endsAt" | "reason" | "isAvailable", ExtArgs["result"]["availabilityException"]>;
export type AvailabilityExceptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AvailabilityExceptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AvailabilityExceptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AvailabilityExceptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AvailabilityException";
    objects: {
        consultant: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        consultantId: string;
        startsAt: Date;
        endsAt: Date;
        reason: string | null;
        isAvailable: boolean;
    }, ExtArgs["result"]["availabilityException"]>;
    composites: {};
};
export type AvailabilityExceptionGetPayload<S extends boolean | null | undefined | AvailabilityExceptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload, S>;
export type AvailabilityExceptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvailabilityExceptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvailabilityExceptionCountAggregateInputType | true;
};
export interface AvailabilityExceptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityException'];
        meta: {
            name: 'AvailabilityException';
        };
    };
    findUnique<T extends AvailabilityExceptionFindUniqueArgs>(args: Prisma.SelectSubset<T, AvailabilityExceptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvailabilityExceptionClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AvailabilityExceptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvailabilityExceptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvailabilityExceptionClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AvailabilityExceptionFindFirstArgs>(args?: Prisma.SelectSubset<T, AvailabilityExceptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvailabilityExceptionClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AvailabilityExceptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvailabilityExceptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvailabilityExceptionClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AvailabilityExceptionFindManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityExceptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AvailabilityExceptionCreateArgs>(args: Prisma.SelectSubset<T, AvailabilityExceptionCreateArgs<ExtArgs>>): Prisma.Prisma__AvailabilityExceptionClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AvailabilityExceptionCreateManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityExceptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AvailabilityExceptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvailabilityExceptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AvailabilityExceptionDeleteArgs>(args: Prisma.SelectSubset<T, AvailabilityExceptionDeleteArgs<ExtArgs>>): Prisma.Prisma__AvailabilityExceptionClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AvailabilityExceptionUpdateArgs>(args: Prisma.SelectSubset<T, AvailabilityExceptionUpdateArgs<ExtArgs>>): Prisma.Prisma__AvailabilityExceptionClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AvailabilityExceptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityExceptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AvailabilityExceptionUpdateManyArgs>(args: Prisma.SelectSubset<T, AvailabilityExceptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AvailabilityExceptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvailabilityExceptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AvailabilityExceptionUpsertArgs>(args: Prisma.SelectSubset<T, AvailabilityExceptionUpsertArgs<ExtArgs>>): Prisma.Prisma__AvailabilityExceptionClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AvailabilityExceptionCountArgs>(args?: Prisma.Subset<T, AvailabilityExceptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvailabilityExceptionCountAggregateOutputType> : number>;
    aggregate<T extends AvailabilityExceptionAggregateArgs>(args: Prisma.Subset<T, AvailabilityExceptionAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityExceptionAggregateType<T>>;
    groupBy<T extends AvailabilityExceptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvailabilityExceptionGroupByArgs['orderBy'];
    } : {
        orderBy?: AvailabilityExceptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvailabilityExceptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityExceptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AvailabilityExceptionFieldRefs;
}
export interface Prisma__AvailabilityExceptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    consultant<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AvailabilityExceptionFieldRefs {
    readonly id: Prisma.FieldRef<"AvailabilityException", 'String'>;
    readonly consultantId: Prisma.FieldRef<"AvailabilityException", 'String'>;
    readonly startsAt: Prisma.FieldRef<"AvailabilityException", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"AvailabilityException", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"AvailabilityException", 'String'>;
    readonly isAvailable: Prisma.FieldRef<"AvailabilityException", 'Boolean'>;
}
export type AvailabilityExceptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    where: Prisma.AvailabilityExceptionWhereUniqueInput;
};
export type AvailabilityExceptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    where: Prisma.AvailabilityExceptionWhereUniqueInput;
};
export type AvailabilityExceptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    where?: Prisma.AvailabilityExceptionWhereInput;
    orderBy?: Prisma.AvailabilityExceptionOrderByWithRelationInput | Prisma.AvailabilityExceptionOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityExceptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityExceptionScalarFieldEnum | Prisma.AvailabilityExceptionScalarFieldEnum[];
};
export type AvailabilityExceptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    where?: Prisma.AvailabilityExceptionWhereInput;
    orderBy?: Prisma.AvailabilityExceptionOrderByWithRelationInput | Prisma.AvailabilityExceptionOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityExceptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityExceptionScalarFieldEnum | Prisma.AvailabilityExceptionScalarFieldEnum[];
};
export type AvailabilityExceptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    where?: Prisma.AvailabilityExceptionWhereInput;
    orderBy?: Prisma.AvailabilityExceptionOrderByWithRelationInput | Prisma.AvailabilityExceptionOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityExceptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityExceptionScalarFieldEnum | Prisma.AvailabilityExceptionScalarFieldEnum[];
};
export type AvailabilityExceptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvailabilityExceptionCreateInput, Prisma.AvailabilityExceptionUncheckedCreateInput>;
};
export type AvailabilityExceptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AvailabilityExceptionCreateManyInput | Prisma.AvailabilityExceptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AvailabilityExceptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    data: Prisma.AvailabilityExceptionCreateManyInput | Prisma.AvailabilityExceptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AvailabilityExceptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AvailabilityExceptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvailabilityExceptionUpdateInput, Prisma.AvailabilityExceptionUncheckedUpdateInput>;
    where: Prisma.AvailabilityExceptionWhereUniqueInput;
};
export type AvailabilityExceptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AvailabilityExceptionUpdateManyMutationInput, Prisma.AvailabilityExceptionUncheckedUpdateManyInput>;
    where?: Prisma.AvailabilityExceptionWhereInput;
    limit?: number;
};
export type AvailabilityExceptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvailabilityExceptionUpdateManyMutationInput, Prisma.AvailabilityExceptionUncheckedUpdateManyInput>;
    where?: Prisma.AvailabilityExceptionWhereInput;
    limit?: number;
    include?: Prisma.AvailabilityExceptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AvailabilityExceptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    where: Prisma.AvailabilityExceptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvailabilityExceptionCreateInput, Prisma.AvailabilityExceptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AvailabilityExceptionUpdateInput, Prisma.AvailabilityExceptionUncheckedUpdateInput>;
};
export type AvailabilityExceptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
    where: Prisma.AvailabilityExceptionWhereUniqueInput;
};
export type AvailabilityExceptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityExceptionWhereInput;
    limit?: number;
};
export type AvailabilityExceptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityExceptionSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityExceptionOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityExceptionInclude<ExtArgs> | null;
};

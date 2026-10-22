import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RecoveryCodeModel = runtime.Types.Result.DefaultSelection<Prisma.$RecoveryCodePayload>;
export type AggregateRecoveryCode = {
    _count: RecoveryCodeCountAggregateOutputType | null;
    _min: RecoveryCodeMinAggregateOutputType | null;
    _max: RecoveryCodeMaxAggregateOutputType | null;
};
export type RecoveryCodeMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    codeHash: string | null;
    usedAt: Date | null;
    createdAt: Date | null;
};
export type RecoveryCodeMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    codeHash: string | null;
    usedAt: Date | null;
    createdAt: Date | null;
};
export type RecoveryCodeCountAggregateOutputType = {
    id: number;
    userId: number;
    codeHash: number;
    usedAt: number;
    createdAt: number;
    _all: number;
};
export type RecoveryCodeMinAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
};
export type RecoveryCodeMaxAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
};
export type RecoveryCodeCountAggregateInputType = {
    id?: true;
    userId?: true;
    codeHash?: true;
    usedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type RecoveryCodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecoveryCodeWhereInput;
    orderBy?: Prisma.RecoveryCodeOrderByWithRelationInput | Prisma.RecoveryCodeOrderByWithRelationInput[];
    cursor?: Prisma.RecoveryCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RecoveryCodeCountAggregateInputType;
    _min?: RecoveryCodeMinAggregateInputType;
    _max?: RecoveryCodeMaxAggregateInputType;
};
export type GetRecoveryCodeAggregateType<T extends RecoveryCodeAggregateArgs> = {
    [P in keyof T & keyof AggregateRecoveryCode]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecoveryCode[P]> : Prisma.GetScalarType<T[P], AggregateRecoveryCode[P]>;
};
export type RecoveryCodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecoveryCodeWhereInput;
    orderBy?: Prisma.RecoveryCodeOrderByWithAggregationInput | Prisma.RecoveryCodeOrderByWithAggregationInput[];
    by: Prisma.RecoveryCodeScalarFieldEnum[] | Prisma.RecoveryCodeScalarFieldEnum;
    having?: Prisma.RecoveryCodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecoveryCodeCountAggregateInputType | true;
    _min?: RecoveryCodeMinAggregateInputType;
    _max?: RecoveryCodeMaxAggregateInputType;
};
export type RecoveryCodeGroupByOutputType = {
    id: string;
    userId: string;
    codeHash: string;
    usedAt: Date | null;
    createdAt: Date;
    _count: RecoveryCodeCountAggregateOutputType | null;
    _min: RecoveryCodeMinAggregateOutputType | null;
    _max: RecoveryCodeMaxAggregateOutputType | null;
};
export type GetRecoveryCodeGroupByPayload<T extends RecoveryCodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecoveryCodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecoveryCodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecoveryCodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecoveryCodeGroupByOutputType[P]>;
}>>;
export type RecoveryCodeWhereInput = {
    AND?: Prisma.RecoveryCodeWhereInput | Prisma.RecoveryCodeWhereInput[];
    OR?: Prisma.RecoveryCodeWhereInput[];
    NOT?: Prisma.RecoveryCodeWhereInput | Prisma.RecoveryCodeWhereInput[];
    id?: Prisma.UuidFilter<"RecoveryCode"> | string;
    userId?: Prisma.UuidFilter<"RecoveryCode"> | string;
    codeHash?: Prisma.StringFilter<"RecoveryCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"RecoveryCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RecoveryCode"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type RecoveryCodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type RecoveryCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    codeHash?: string;
    AND?: Prisma.RecoveryCodeWhereInput | Prisma.RecoveryCodeWhereInput[];
    OR?: Prisma.RecoveryCodeWhereInput[];
    NOT?: Prisma.RecoveryCodeWhereInput | Prisma.RecoveryCodeWhereInput[];
    userId?: Prisma.UuidFilter<"RecoveryCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"RecoveryCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RecoveryCode"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "codeHash">;
export type RecoveryCodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RecoveryCodeCountOrderByAggregateInput;
    _max?: Prisma.RecoveryCodeMaxOrderByAggregateInput;
    _min?: Prisma.RecoveryCodeMinOrderByAggregateInput;
};
export type RecoveryCodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecoveryCodeScalarWhereWithAggregatesInput | Prisma.RecoveryCodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecoveryCodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecoveryCodeScalarWhereWithAggregatesInput | Prisma.RecoveryCodeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RecoveryCode"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"RecoveryCode"> | string;
    codeHash?: Prisma.StringWithAggregatesFilter<"RecoveryCode"> | string;
    usedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RecoveryCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RecoveryCode"> | Date | string;
};
export type RecoveryCodeCreateInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRecoveryCodesInput;
};
export type RecoveryCodeUncheckedCreateInput = {
    id?: string;
    userId: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type RecoveryCodeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRecoveryCodesNestedInput;
};
export type RecoveryCodeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecoveryCodeCreateManyInput = {
    id?: string;
    userId: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type RecoveryCodeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecoveryCodeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecoveryCodeListRelationFilter = {
    every?: Prisma.RecoveryCodeWhereInput;
    some?: Prisma.RecoveryCodeWhereInput;
    none?: Prisma.RecoveryCodeWhereInput;
};
export type RecoveryCodeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RecoveryCodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecoveryCodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecoveryCodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    codeHash?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecoveryCodeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecoveryCodeCreateWithoutUserInput, Prisma.RecoveryCodeUncheckedCreateWithoutUserInput> | Prisma.RecoveryCodeCreateWithoutUserInput[] | Prisma.RecoveryCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecoveryCodeCreateOrConnectWithoutUserInput | Prisma.RecoveryCodeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecoveryCodeCreateManyUserInputEnvelope;
    connect?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
};
export type RecoveryCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecoveryCodeCreateWithoutUserInput, Prisma.RecoveryCodeUncheckedCreateWithoutUserInput> | Prisma.RecoveryCodeCreateWithoutUserInput[] | Prisma.RecoveryCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecoveryCodeCreateOrConnectWithoutUserInput | Prisma.RecoveryCodeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecoveryCodeCreateManyUserInputEnvelope;
    connect?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
};
export type RecoveryCodeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecoveryCodeCreateWithoutUserInput, Prisma.RecoveryCodeUncheckedCreateWithoutUserInput> | Prisma.RecoveryCodeCreateWithoutUserInput[] | Prisma.RecoveryCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecoveryCodeCreateOrConnectWithoutUserInput | Prisma.RecoveryCodeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecoveryCodeUpsertWithWhereUniqueWithoutUserInput | Prisma.RecoveryCodeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecoveryCodeCreateManyUserInputEnvelope;
    set?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
    disconnect?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
    delete?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
    connect?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
    update?: Prisma.RecoveryCodeUpdateWithWhereUniqueWithoutUserInput | Prisma.RecoveryCodeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecoveryCodeUpdateManyWithWhereWithoutUserInput | Prisma.RecoveryCodeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecoveryCodeScalarWhereInput | Prisma.RecoveryCodeScalarWhereInput[];
};
export type RecoveryCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecoveryCodeCreateWithoutUserInput, Prisma.RecoveryCodeUncheckedCreateWithoutUserInput> | Prisma.RecoveryCodeCreateWithoutUserInput[] | Prisma.RecoveryCodeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecoveryCodeCreateOrConnectWithoutUserInput | Prisma.RecoveryCodeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecoveryCodeUpsertWithWhereUniqueWithoutUserInput | Prisma.RecoveryCodeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecoveryCodeCreateManyUserInputEnvelope;
    set?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
    disconnect?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
    delete?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
    connect?: Prisma.RecoveryCodeWhereUniqueInput | Prisma.RecoveryCodeWhereUniqueInput[];
    update?: Prisma.RecoveryCodeUpdateWithWhereUniqueWithoutUserInput | Prisma.RecoveryCodeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecoveryCodeUpdateManyWithWhereWithoutUserInput | Prisma.RecoveryCodeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecoveryCodeScalarWhereInput | Prisma.RecoveryCodeScalarWhereInput[];
};
export type RecoveryCodeCreateWithoutUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type RecoveryCodeUncheckedCreateWithoutUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type RecoveryCodeCreateOrConnectWithoutUserInput = {
    where: Prisma.RecoveryCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecoveryCodeCreateWithoutUserInput, Prisma.RecoveryCodeUncheckedCreateWithoutUserInput>;
};
export type RecoveryCodeCreateManyUserInputEnvelope = {
    data: Prisma.RecoveryCodeCreateManyUserInput | Prisma.RecoveryCodeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RecoveryCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecoveryCodeWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecoveryCodeUpdateWithoutUserInput, Prisma.RecoveryCodeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RecoveryCodeCreateWithoutUserInput, Prisma.RecoveryCodeUncheckedCreateWithoutUserInput>;
};
export type RecoveryCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecoveryCodeWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecoveryCodeUpdateWithoutUserInput, Prisma.RecoveryCodeUncheckedUpdateWithoutUserInput>;
};
export type RecoveryCodeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RecoveryCodeScalarWhereInput;
    data: Prisma.XOR<Prisma.RecoveryCodeUpdateManyMutationInput, Prisma.RecoveryCodeUncheckedUpdateManyWithoutUserInput>;
};
export type RecoveryCodeScalarWhereInput = {
    AND?: Prisma.RecoveryCodeScalarWhereInput | Prisma.RecoveryCodeScalarWhereInput[];
    OR?: Prisma.RecoveryCodeScalarWhereInput[];
    NOT?: Prisma.RecoveryCodeScalarWhereInput | Prisma.RecoveryCodeScalarWhereInput[];
    id?: Prisma.UuidFilter<"RecoveryCode"> | string;
    userId?: Prisma.UuidFilter<"RecoveryCode"> | string;
    codeHash?: Prisma.StringFilter<"RecoveryCode"> | string;
    usedAt?: Prisma.DateTimeNullableFilter<"RecoveryCode"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RecoveryCode"> | Date | string;
};
export type RecoveryCodeCreateManyUserInput = {
    id?: string;
    codeHash: string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type RecoveryCodeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecoveryCodeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecoveryCodeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codeHash?: Prisma.StringFieldUpdateOperationsInput | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecoveryCodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recoveryCode"]>;
export type RecoveryCodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recoveryCode"]>;
export type RecoveryCodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recoveryCode"]>;
export type RecoveryCodeSelectScalar = {
    id?: boolean;
    userId?: boolean;
    codeHash?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
};
export type RecoveryCodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "codeHash" | "usedAt" | "createdAt", ExtArgs["result"]["recoveryCode"]>;
export type RecoveryCodeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RecoveryCodeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RecoveryCodeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RecoveryCodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RecoveryCode";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        codeHash: string;
        usedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["recoveryCode"]>;
    composites: {};
};
export type RecoveryCodeGetPayload<S extends boolean | null | undefined | RecoveryCodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload, S>;
export type RecoveryCodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecoveryCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecoveryCodeCountAggregateInputType | true;
};
export interface RecoveryCodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RecoveryCode'];
        meta: {
            name: 'RecoveryCode';
        };
    };
    findUnique<T extends RecoveryCodeFindUniqueArgs>(args: Prisma.SelectSubset<T, RecoveryCodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RecoveryCodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecoveryCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RecoveryCodeFindFirstArgs>(args?: Prisma.SelectSubset<T, RecoveryCodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RecoveryCodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecoveryCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RecoveryCodeFindManyArgs>(args?: Prisma.SelectSubset<T, RecoveryCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RecoveryCodeCreateArgs>(args: Prisma.SelectSubset<T, RecoveryCodeCreateArgs<ExtArgs>>): Prisma.Prisma__RecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RecoveryCodeCreateManyArgs>(args?: Prisma.SelectSubset<T, RecoveryCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RecoveryCodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecoveryCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RecoveryCodeDeleteArgs>(args: Prisma.SelectSubset<T, RecoveryCodeDeleteArgs<ExtArgs>>): Prisma.Prisma__RecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RecoveryCodeUpdateArgs>(args: Prisma.SelectSubset<T, RecoveryCodeUpdateArgs<ExtArgs>>): Prisma.Prisma__RecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RecoveryCodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecoveryCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RecoveryCodeUpdateManyArgs>(args: Prisma.SelectSubset<T, RecoveryCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RecoveryCodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecoveryCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RecoveryCodeUpsertArgs>(args: Prisma.SelectSubset<T, RecoveryCodeUpsertArgs<ExtArgs>>): Prisma.Prisma__RecoveryCodeClient<runtime.Types.Result.GetResult<Prisma.$RecoveryCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RecoveryCodeCountArgs>(args?: Prisma.Subset<T, RecoveryCodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecoveryCodeCountAggregateOutputType> : number>;
    aggregate<T extends RecoveryCodeAggregateArgs>(args: Prisma.Subset<T, RecoveryCodeAggregateArgs>): Prisma.PrismaPromise<GetRecoveryCodeAggregateType<T>>;
    groupBy<T extends RecoveryCodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecoveryCodeGroupByArgs['orderBy'];
    } : {
        orderBy?: RecoveryCodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecoveryCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecoveryCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RecoveryCodeFieldRefs;
}
export interface Prisma__RecoveryCodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RecoveryCodeFieldRefs {
    readonly id: Prisma.FieldRef<"RecoveryCode", 'String'>;
    readonly userId: Prisma.FieldRef<"RecoveryCode", 'String'>;
    readonly codeHash: Prisma.FieldRef<"RecoveryCode", 'String'>;
    readonly usedAt: Prisma.FieldRef<"RecoveryCode", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RecoveryCode", 'DateTime'>;
}
export type RecoveryCodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    where: Prisma.RecoveryCodeWhereUniqueInput;
};
export type RecoveryCodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    where: Prisma.RecoveryCodeWhereUniqueInput;
};
export type RecoveryCodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    where?: Prisma.RecoveryCodeWhereInput;
    orderBy?: Prisma.RecoveryCodeOrderByWithRelationInput | Prisma.RecoveryCodeOrderByWithRelationInput[];
    cursor?: Prisma.RecoveryCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecoveryCodeScalarFieldEnum | Prisma.RecoveryCodeScalarFieldEnum[];
};
export type RecoveryCodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    where?: Prisma.RecoveryCodeWhereInput;
    orderBy?: Prisma.RecoveryCodeOrderByWithRelationInput | Prisma.RecoveryCodeOrderByWithRelationInput[];
    cursor?: Prisma.RecoveryCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecoveryCodeScalarFieldEnum | Prisma.RecoveryCodeScalarFieldEnum[];
};
export type RecoveryCodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    where?: Prisma.RecoveryCodeWhereInput;
    orderBy?: Prisma.RecoveryCodeOrderByWithRelationInput | Prisma.RecoveryCodeOrderByWithRelationInput[];
    cursor?: Prisma.RecoveryCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecoveryCodeScalarFieldEnum | Prisma.RecoveryCodeScalarFieldEnum[];
};
export type RecoveryCodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecoveryCodeCreateInput, Prisma.RecoveryCodeUncheckedCreateInput>;
};
export type RecoveryCodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RecoveryCodeCreateManyInput | Prisma.RecoveryCodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RecoveryCodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    data: Prisma.RecoveryCodeCreateManyInput | Prisma.RecoveryCodeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RecoveryCodeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RecoveryCodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecoveryCodeUpdateInput, Prisma.RecoveryCodeUncheckedUpdateInput>;
    where: Prisma.RecoveryCodeWhereUniqueInput;
};
export type RecoveryCodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RecoveryCodeUpdateManyMutationInput, Prisma.RecoveryCodeUncheckedUpdateManyInput>;
    where?: Prisma.RecoveryCodeWhereInput;
    limit?: number;
};
export type RecoveryCodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RecoveryCodeUpdateManyMutationInput, Prisma.RecoveryCodeUncheckedUpdateManyInput>;
    where?: Prisma.RecoveryCodeWhereInput;
    limit?: number;
    include?: Prisma.RecoveryCodeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RecoveryCodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    where: Prisma.RecoveryCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecoveryCodeCreateInput, Prisma.RecoveryCodeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RecoveryCodeUpdateInput, Prisma.RecoveryCodeUncheckedUpdateInput>;
};
export type RecoveryCodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
    where: Prisma.RecoveryCodeWhereUniqueInput;
};
export type RecoveryCodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecoveryCodeWhereInput;
    limit?: number;
};
export type RecoveryCodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RecoveryCodeSelect<ExtArgs> | null;
    omit?: Prisma.RecoveryCodeOmit<ExtArgs> | null;
    include?: Prisma.RecoveryCodeInclude<ExtArgs> | null;
};

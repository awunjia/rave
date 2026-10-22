import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MfaMethodModel = runtime.Types.Result.DefaultSelection<Prisma.$MfaMethodPayload>;
export type AggregateMfaMethod = {
    _count: MfaMethodCountAggregateOutputType | null;
    _avg: MfaMethodAvgAggregateOutputType | null;
    _sum: MfaMethodSumAggregateOutputType | null;
    _min: MfaMethodMinAggregateOutputType | null;
    _max: MfaMethodMaxAggregateOutputType | null;
};
export type MfaMethodAvgAggregateOutputType = {
    counter: number | null;
};
export type MfaMethodSumAggregateOutputType = {
    counter: bigint | null;
};
export type MfaMethodMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: $Enums.MfaType | null;
    name: string | null;
    secretCiphertext: string | null;
    credentialId: string | null;
    publicKey: string | null;
    counter: bigint | null;
    verifiedAt: Date | null;
    lastUsedAt: Date | null;
    createdAt: Date | null;
};
export type MfaMethodMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: $Enums.MfaType | null;
    name: string | null;
    secretCiphertext: string | null;
    credentialId: string | null;
    publicKey: string | null;
    counter: bigint | null;
    verifiedAt: Date | null;
    lastUsedAt: Date | null;
    createdAt: Date | null;
};
export type MfaMethodCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    name: number;
    secretCiphertext: number;
    credentialId: number;
    publicKey: number;
    counter: number;
    verifiedAt: number;
    lastUsedAt: number;
    createdAt: number;
    _all: number;
};
export type MfaMethodAvgAggregateInputType = {
    counter?: true;
};
export type MfaMethodSumAggregateInputType = {
    counter?: true;
};
export type MfaMethodMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    name?: true;
    secretCiphertext?: true;
    credentialId?: true;
    publicKey?: true;
    counter?: true;
    verifiedAt?: true;
    lastUsedAt?: true;
    createdAt?: true;
};
export type MfaMethodMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    name?: true;
    secretCiphertext?: true;
    credentialId?: true;
    publicKey?: true;
    counter?: true;
    verifiedAt?: true;
    lastUsedAt?: true;
    createdAt?: true;
};
export type MfaMethodCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    name?: true;
    secretCiphertext?: true;
    credentialId?: true;
    publicKey?: true;
    counter?: true;
    verifiedAt?: true;
    lastUsedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type MfaMethodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaMethodWhereInput;
    orderBy?: Prisma.MfaMethodOrderByWithRelationInput | Prisma.MfaMethodOrderByWithRelationInput[];
    cursor?: Prisma.MfaMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MfaMethodCountAggregateInputType;
    _avg?: MfaMethodAvgAggregateInputType;
    _sum?: MfaMethodSumAggregateInputType;
    _min?: MfaMethodMinAggregateInputType;
    _max?: MfaMethodMaxAggregateInputType;
};
export type GetMfaMethodAggregateType<T extends MfaMethodAggregateArgs> = {
    [P in keyof T & keyof AggregateMfaMethod]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMfaMethod[P]> : Prisma.GetScalarType<T[P], AggregateMfaMethod[P]>;
};
export type MfaMethodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaMethodWhereInput;
    orderBy?: Prisma.MfaMethodOrderByWithAggregationInput | Prisma.MfaMethodOrderByWithAggregationInput[];
    by: Prisma.MfaMethodScalarFieldEnum[] | Prisma.MfaMethodScalarFieldEnum;
    having?: Prisma.MfaMethodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MfaMethodCountAggregateInputType | true;
    _avg?: MfaMethodAvgAggregateInputType;
    _sum?: MfaMethodSumAggregateInputType;
    _min?: MfaMethodMinAggregateInputType;
    _max?: MfaMethodMaxAggregateInputType;
};
export type MfaMethodGroupByOutputType = {
    id: string;
    userId: string;
    type: $Enums.MfaType;
    name: string | null;
    secretCiphertext: string | null;
    credentialId: string | null;
    publicKey: string | null;
    counter: bigint;
    verifiedAt: Date | null;
    lastUsedAt: Date | null;
    createdAt: Date;
    _count: MfaMethodCountAggregateOutputType | null;
    _avg: MfaMethodAvgAggregateOutputType | null;
    _sum: MfaMethodSumAggregateOutputType | null;
    _min: MfaMethodMinAggregateOutputType | null;
    _max: MfaMethodMaxAggregateOutputType | null;
};
export type GetMfaMethodGroupByPayload<T extends MfaMethodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MfaMethodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MfaMethodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MfaMethodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MfaMethodGroupByOutputType[P]>;
}>>;
export type MfaMethodWhereInput = {
    AND?: Prisma.MfaMethodWhereInput | Prisma.MfaMethodWhereInput[];
    OR?: Prisma.MfaMethodWhereInput[];
    NOT?: Prisma.MfaMethodWhereInput | Prisma.MfaMethodWhereInput[];
    id?: Prisma.UuidFilter<"MfaMethod"> | string;
    userId?: Prisma.UuidFilter<"MfaMethod"> | string;
    type?: Prisma.EnumMfaTypeFilter<"MfaMethod"> | $Enums.MfaType;
    name?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    secretCiphertext?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    credentialId?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    publicKey?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    counter?: Prisma.BigIntFilter<"MfaMethod"> | bigint | number;
    verifiedAt?: Prisma.DateTimeNullableFilter<"MfaMethod"> | Date | string | null;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"MfaMethod"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaMethod"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MfaMethodOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrderInput | Prisma.SortOrder;
    credentialId?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    counter?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type MfaMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    credentialId?: string;
    AND?: Prisma.MfaMethodWhereInput | Prisma.MfaMethodWhereInput[];
    OR?: Prisma.MfaMethodWhereInput[];
    NOT?: Prisma.MfaMethodWhereInput | Prisma.MfaMethodWhereInput[];
    userId?: Prisma.UuidFilter<"MfaMethod"> | string;
    type?: Prisma.EnumMfaTypeFilter<"MfaMethod"> | $Enums.MfaType;
    name?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    secretCiphertext?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    publicKey?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    counter?: Prisma.BigIntFilter<"MfaMethod"> | bigint | number;
    verifiedAt?: Prisma.DateTimeNullableFilter<"MfaMethod"> | Date | string | null;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"MfaMethod"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaMethod"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "credentialId">;
export type MfaMethodOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrderInput | Prisma.SortOrder;
    credentialId?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    counter?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MfaMethodCountOrderByAggregateInput;
    _avg?: Prisma.MfaMethodAvgOrderByAggregateInput;
    _max?: Prisma.MfaMethodMaxOrderByAggregateInput;
    _min?: Prisma.MfaMethodMinOrderByAggregateInput;
    _sum?: Prisma.MfaMethodSumOrderByAggregateInput;
};
export type MfaMethodScalarWhereWithAggregatesInput = {
    AND?: Prisma.MfaMethodScalarWhereWithAggregatesInput | Prisma.MfaMethodScalarWhereWithAggregatesInput[];
    OR?: Prisma.MfaMethodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MfaMethodScalarWhereWithAggregatesInput | Prisma.MfaMethodScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MfaMethod"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"MfaMethod"> | string;
    type?: Prisma.EnumMfaTypeWithAggregatesFilter<"MfaMethod"> | $Enums.MfaType;
    name?: Prisma.StringNullableWithAggregatesFilter<"MfaMethod"> | string | null;
    secretCiphertext?: Prisma.StringNullableWithAggregatesFilter<"MfaMethod"> | string | null;
    credentialId?: Prisma.StringNullableWithAggregatesFilter<"MfaMethod"> | string | null;
    publicKey?: Prisma.StringNullableWithAggregatesFilter<"MfaMethod"> | string | null;
    counter?: Prisma.BigIntWithAggregatesFilter<"MfaMethod"> | bigint | number;
    verifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MfaMethod"> | Date | string | null;
    lastUsedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MfaMethod"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MfaMethod"> | Date | string;
};
export type MfaMethodCreateInput = {
    id?: string;
    type: $Enums.MfaType;
    name?: string | null;
    secretCiphertext?: string | null;
    credentialId?: string | null;
    publicKey?: string | null;
    counter?: bigint | number;
    verifiedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMfaMethodsInput;
};
export type MfaMethodUncheckedCreateInput = {
    id?: string;
    userId: string;
    type: $Enums.MfaType;
    name?: string | null;
    secretCiphertext?: string | null;
    credentialId?: string | null;
    publicKey?: string | null;
    counter?: bigint | number;
    verifiedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaMethodUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMfaTypeFieldUpdateOperationsInput | $Enums.MfaType;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secretCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counter?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMfaMethodsNestedInput;
};
export type MfaMethodUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMfaTypeFieldUpdateOperationsInput | $Enums.MfaType;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secretCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counter?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaMethodCreateManyInput = {
    id?: string;
    userId: string;
    type: $Enums.MfaType;
    name?: string | null;
    secretCiphertext?: string | null;
    credentialId?: string | null;
    publicKey?: string | null;
    counter?: bigint | number;
    verifiedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaMethodUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMfaTypeFieldUpdateOperationsInput | $Enums.MfaType;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secretCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counter?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaMethodUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMfaTypeFieldUpdateOperationsInput | $Enums.MfaType;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secretCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counter?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaMethodListRelationFilter = {
    every?: Prisma.MfaMethodWhereInput;
    some?: Prisma.MfaMethodWhereInput;
    none?: Prisma.MfaMethodWhereInput;
};
export type MfaMethodOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MfaMethodCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrder;
    credentialId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    counter?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaMethodAvgOrderByAggregateInput = {
    counter?: Prisma.SortOrder;
};
export type MfaMethodMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrder;
    credentialId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    counter?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaMethodMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrder;
    credentialId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    counter?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MfaMethodSumOrderByAggregateInput = {
    counter?: Prisma.SortOrder;
};
export type MfaMethodCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MfaMethodCreateWithoutUserInput, Prisma.MfaMethodUncheckedCreateWithoutUserInput> | Prisma.MfaMethodCreateWithoutUserInput[] | Prisma.MfaMethodUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaMethodCreateOrConnectWithoutUserInput | Prisma.MfaMethodCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MfaMethodCreateManyUserInputEnvelope;
    connect?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
};
export type MfaMethodUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MfaMethodCreateWithoutUserInput, Prisma.MfaMethodUncheckedCreateWithoutUserInput> | Prisma.MfaMethodCreateWithoutUserInput[] | Prisma.MfaMethodUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaMethodCreateOrConnectWithoutUserInput | Prisma.MfaMethodCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MfaMethodCreateManyUserInputEnvelope;
    connect?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
};
export type MfaMethodUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MfaMethodCreateWithoutUserInput, Prisma.MfaMethodUncheckedCreateWithoutUserInput> | Prisma.MfaMethodCreateWithoutUserInput[] | Prisma.MfaMethodUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaMethodCreateOrConnectWithoutUserInput | Prisma.MfaMethodCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MfaMethodUpsertWithWhereUniqueWithoutUserInput | Prisma.MfaMethodUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MfaMethodCreateManyUserInputEnvelope;
    set?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
    disconnect?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
    delete?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
    connect?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
    update?: Prisma.MfaMethodUpdateWithWhereUniqueWithoutUserInput | Prisma.MfaMethodUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MfaMethodUpdateManyWithWhereWithoutUserInput | Prisma.MfaMethodUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MfaMethodScalarWhereInput | Prisma.MfaMethodScalarWhereInput[];
};
export type MfaMethodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MfaMethodCreateWithoutUserInput, Prisma.MfaMethodUncheckedCreateWithoutUserInput> | Prisma.MfaMethodCreateWithoutUserInput[] | Prisma.MfaMethodUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MfaMethodCreateOrConnectWithoutUserInput | Prisma.MfaMethodCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MfaMethodUpsertWithWhereUniqueWithoutUserInput | Prisma.MfaMethodUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MfaMethodCreateManyUserInputEnvelope;
    set?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
    disconnect?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
    delete?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
    connect?: Prisma.MfaMethodWhereUniqueInput | Prisma.MfaMethodWhereUniqueInput[];
    update?: Prisma.MfaMethodUpdateWithWhereUniqueWithoutUserInput | Prisma.MfaMethodUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MfaMethodUpdateManyWithWhereWithoutUserInput | Prisma.MfaMethodUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MfaMethodScalarWhereInput | Prisma.MfaMethodScalarWhereInput[];
};
export type EnumMfaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MfaType;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type MfaMethodCreateWithoutUserInput = {
    id?: string;
    type: $Enums.MfaType;
    name?: string | null;
    secretCiphertext?: string | null;
    credentialId?: string | null;
    publicKey?: string | null;
    counter?: bigint | number;
    verifiedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaMethodUncheckedCreateWithoutUserInput = {
    id?: string;
    type: $Enums.MfaType;
    name?: string | null;
    secretCiphertext?: string | null;
    credentialId?: string | null;
    publicKey?: string | null;
    counter?: bigint | number;
    verifiedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaMethodCreateOrConnectWithoutUserInput = {
    where: Prisma.MfaMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.MfaMethodCreateWithoutUserInput, Prisma.MfaMethodUncheckedCreateWithoutUserInput>;
};
export type MfaMethodCreateManyUserInputEnvelope = {
    data: Prisma.MfaMethodCreateManyUserInput | Prisma.MfaMethodCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MfaMethodUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MfaMethodWhereUniqueInput;
    update: Prisma.XOR<Prisma.MfaMethodUpdateWithoutUserInput, Prisma.MfaMethodUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MfaMethodCreateWithoutUserInput, Prisma.MfaMethodUncheckedCreateWithoutUserInput>;
};
export type MfaMethodUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MfaMethodWhereUniqueInput;
    data: Prisma.XOR<Prisma.MfaMethodUpdateWithoutUserInput, Prisma.MfaMethodUncheckedUpdateWithoutUserInput>;
};
export type MfaMethodUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MfaMethodScalarWhereInput;
    data: Prisma.XOR<Prisma.MfaMethodUpdateManyMutationInput, Prisma.MfaMethodUncheckedUpdateManyWithoutUserInput>;
};
export type MfaMethodScalarWhereInput = {
    AND?: Prisma.MfaMethodScalarWhereInput | Prisma.MfaMethodScalarWhereInput[];
    OR?: Prisma.MfaMethodScalarWhereInput[];
    NOT?: Prisma.MfaMethodScalarWhereInput | Prisma.MfaMethodScalarWhereInput[];
    id?: Prisma.UuidFilter<"MfaMethod"> | string;
    userId?: Prisma.UuidFilter<"MfaMethod"> | string;
    type?: Prisma.EnumMfaTypeFilter<"MfaMethod"> | $Enums.MfaType;
    name?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    secretCiphertext?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    credentialId?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    publicKey?: Prisma.StringNullableFilter<"MfaMethod"> | string | null;
    counter?: Prisma.BigIntFilter<"MfaMethod"> | bigint | number;
    verifiedAt?: Prisma.DateTimeNullableFilter<"MfaMethod"> | Date | string | null;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"MfaMethod"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MfaMethod"> | Date | string;
};
export type MfaMethodCreateManyUserInput = {
    id?: string;
    type: $Enums.MfaType;
    name?: string | null;
    secretCiphertext?: string | null;
    credentialId?: string | null;
    publicKey?: string | null;
    counter?: bigint | number;
    verifiedAt?: Date | string | null;
    lastUsedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MfaMethodUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMfaTypeFieldUpdateOperationsInput | $Enums.MfaType;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secretCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counter?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaMethodUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMfaTypeFieldUpdateOperationsInput | $Enums.MfaType;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secretCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counter?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaMethodUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMfaTypeFieldUpdateOperationsInput | $Enums.MfaType;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secretCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counter?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MfaMethodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    name?: boolean;
    secretCiphertext?: boolean;
    credentialId?: boolean;
    publicKey?: boolean;
    counter?: boolean;
    verifiedAt?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaMethod"]>;
export type MfaMethodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    name?: boolean;
    secretCiphertext?: boolean;
    credentialId?: boolean;
    publicKey?: boolean;
    counter?: boolean;
    verifiedAt?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaMethod"]>;
export type MfaMethodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    name?: boolean;
    secretCiphertext?: boolean;
    credentialId?: boolean;
    publicKey?: boolean;
    counter?: boolean;
    verifiedAt?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mfaMethod"]>;
export type MfaMethodSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    name?: boolean;
    secretCiphertext?: boolean;
    credentialId?: boolean;
    publicKey?: boolean;
    counter?: boolean;
    verifiedAt?: boolean;
    lastUsedAt?: boolean;
    createdAt?: boolean;
};
export type MfaMethodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "type" | "name" | "secretCiphertext" | "credentialId" | "publicKey" | "counter" | "verifiedAt" | "lastUsedAt" | "createdAt", ExtArgs["result"]["mfaMethod"]>;
export type MfaMethodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MfaMethodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MfaMethodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MfaMethodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MfaMethod";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        type: $Enums.MfaType;
        name: string | null;
        secretCiphertext: string | null;
        credentialId: string | null;
        publicKey: string | null;
        counter: bigint;
        verifiedAt: Date | null;
        lastUsedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["mfaMethod"]>;
    composites: {};
};
export type MfaMethodGetPayload<S extends boolean | null | undefined | MfaMethodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload, S>;
export type MfaMethodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MfaMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MfaMethodCountAggregateInputType | true;
};
export interface MfaMethodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MfaMethod'];
        meta: {
            name: 'MfaMethod';
        };
    };
    findUnique<T extends MfaMethodFindUniqueArgs>(args: Prisma.SelectSubset<T, MfaMethodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MfaMethodClient<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MfaMethodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MfaMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaMethodClient<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MfaMethodFindFirstArgs>(args?: Prisma.SelectSubset<T, MfaMethodFindFirstArgs<ExtArgs>>): Prisma.Prisma__MfaMethodClient<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MfaMethodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MfaMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MfaMethodClient<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MfaMethodFindManyArgs>(args?: Prisma.SelectSubset<T, MfaMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MfaMethodCreateArgs>(args: Prisma.SelectSubset<T, MfaMethodCreateArgs<ExtArgs>>): Prisma.Prisma__MfaMethodClient<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MfaMethodCreateManyArgs>(args?: Prisma.SelectSubset<T, MfaMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MfaMethodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MfaMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MfaMethodDeleteArgs>(args: Prisma.SelectSubset<T, MfaMethodDeleteArgs<ExtArgs>>): Prisma.Prisma__MfaMethodClient<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MfaMethodUpdateArgs>(args: Prisma.SelectSubset<T, MfaMethodUpdateArgs<ExtArgs>>): Prisma.Prisma__MfaMethodClient<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MfaMethodDeleteManyArgs>(args?: Prisma.SelectSubset<T, MfaMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MfaMethodUpdateManyArgs>(args: Prisma.SelectSubset<T, MfaMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MfaMethodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MfaMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MfaMethodUpsertArgs>(args: Prisma.SelectSubset<T, MfaMethodUpsertArgs<ExtArgs>>): Prisma.Prisma__MfaMethodClient<runtime.Types.Result.GetResult<Prisma.$MfaMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MfaMethodCountArgs>(args?: Prisma.Subset<T, MfaMethodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MfaMethodCountAggregateOutputType> : number>;
    aggregate<T extends MfaMethodAggregateArgs>(args: Prisma.Subset<T, MfaMethodAggregateArgs>): Prisma.PrismaPromise<GetMfaMethodAggregateType<T>>;
    groupBy<T extends MfaMethodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MfaMethodGroupByArgs['orderBy'];
    } : {
        orderBy?: MfaMethodGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MfaMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfaMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MfaMethodFieldRefs;
}
export interface Prisma__MfaMethodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MfaMethodFieldRefs {
    readonly id: Prisma.FieldRef<"MfaMethod", 'String'>;
    readonly userId: Prisma.FieldRef<"MfaMethod", 'String'>;
    readonly type: Prisma.FieldRef<"MfaMethod", 'MfaType'>;
    readonly name: Prisma.FieldRef<"MfaMethod", 'String'>;
    readonly secretCiphertext: Prisma.FieldRef<"MfaMethod", 'String'>;
    readonly credentialId: Prisma.FieldRef<"MfaMethod", 'String'>;
    readonly publicKey: Prisma.FieldRef<"MfaMethod", 'String'>;
    readonly counter: Prisma.FieldRef<"MfaMethod", 'BigInt'>;
    readonly verifiedAt: Prisma.FieldRef<"MfaMethod", 'DateTime'>;
    readonly lastUsedAt: Prisma.FieldRef<"MfaMethod", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"MfaMethod", 'DateTime'>;
}
export type MfaMethodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    where: Prisma.MfaMethodWhereUniqueInput;
};
export type MfaMethodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    where: Prisma.MfaMethodWhereUniqueInput;
};
export type MfaMethodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    where?: Prisma.MfaMethodWhereInput;
    orderBy?: Prisma.MfaMethodOrderByWithRelationInput | Prisma.MfaMethodOrderByWithRelationInput[];
    cursor?: Prisma.MfaMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaMethodScalarFieldEnum | Prisma.MfaMethodScalarFieldEnum[];
};
export type MfaMethodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    where?: Prisma.MfaMethodWhereInput;
    orderBy?: Prisma.MfaMethodOrderByWithRelationInput | Prisma.MfaMethodOrderByWithRelationInput[];
    cursor?: Prisma.MfaMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaMethodScalarFieldEnum | Prisma.MfaMethodScalarFieldEnum[];
};
export type MfaMethodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    where?: Prisma.MfaMethodWhereInput;
    orderBy?: Prisma.MfaMethodOrderByWithRelationInput | Prisma.MfaMethodOrderByWithRelationInput[];
    cursor?: Prisma.MfaMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MfaMethodScalarFieldEnum | Prisma.MfaMethodScalarFieldEnum[];
};
export type MfaMethodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaMethodCreateInput, Prisma.MfaMethodUncheckedCreateInput>;
};
export type MfaMethodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MfaMethodCreateManyInput | Prisma.MfaMethodCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MfaMethodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    data: Prisma.MfaMethodCreateManyInput | Prisma.MfaMethodCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MfaMethodIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MfaMethodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaMethodUpdateInput, Prisma.MfaMethodUncheckedUpdateInput>;
    where: Prisma.MfaMethodWhereUniqueInput;
};
export type MfaMethodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MfaMethodUpdateManyMutationInput, Prisma.MfaMethodUncheckedUpdateManyInput>;
    where?: Prisma.MfaMethodWhereInput;
    limit?: number;
};
export type MfaMethodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MfaMethodUpdateManyMutationInput, Prisma.MfaMethodUncheckedUpdateManyInput>;
    where?: Prisma.MfaMethodWhereInput;
    limit?: number;
    include?: Prisma.MfaMethodIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MfaMethodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    where: Prisma.MfaMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.MfaMethodCreateInput, Prisma.MfaMethodUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MfaMethodUpdateInput, Prisma.MfaMethodUncheckedUpdateInput>;
};
export type MfaMethodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
    where: Prisma.MfaMethodWhereUniqueInput;
};
export type MfaMethodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MfaMethodWhereInput;
    limit?: number;
};
export type MfaMethodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MfaMethodSelect<ExtArgs> | null;
    omit?: Prisma.MfaMethodOmit<ExtArgs> | null;
    include?: Prisma.MfaMethodInclude<ExtArgs> | null;
};

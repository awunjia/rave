import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MeetingProviderAccountModel = runtime.Types.Result.DefaultSelection<Prisma.$MeetingProviderAccountPayload>;
export type AggregateMeetingProviderAccount = {
    _count: MeetingProviderAccountCountAggregateOutputType | null;
    _min: MeetingProviderAccountMinAggregateOutputType | null;
    _max: MeetingProviderAccountMaxAggregateOutputType | null;
};
export type MeetingProviderAccountMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    provider: $Enums.MeetingProvider | null;
    externalAccountId: string | null;
    accessTokenCiphertext: string | null;
    refreshTokenCiphertext: string | null;
    tokenExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MeetingProviderAccountMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    provider: $Enums.MeetingProvider | null;
    externalAccountId: string | null;
    accessTokenCiphertext: string | null;
    refreshTokenCiphertext: string | null;
    tokenExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MeetingProviderAccountCountAggregateOutputType = {
    id: number;
    userId: number;
    organizationId: number;
    provider: number;
    externalAccountId: number;
    accessTokenCiphertext: number;
    refreshTokenCiphertext: number;
    tokenExpiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MeetingProviderAccountMinAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    provider?: true;
    externalAccountId?: true;
    accessTokenCiphertext?: true;
    refreshTokenCiphertext?: true;
    tokenExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MeetingProviderAccountMaxAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    provider?: true;
    externalAccountId?: true;
    accessTokenCiphertext?: true;
    refreshTokenCiphertext?: true;
    tokenExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MeetingProviderAccountCountAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    provider?: true;
    externalAccountId?: true;
    accessTokenCiphertext?: true;
    refreshTokenCiphertext?: true;
    tokenExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MeetingProviderAccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingProviderAccountWhereInput;
    orderBy?: Prisma.MeetingProviderAccountOrderByWithRelationInput | Prisma.MeetingProviderAccountOrderByWithRelationInput[];
    cursor?: Prisma.MeetingProviderAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MeetingProviderAccountCountAggregateInputType;
    _min?: MeetingProviderAccountMinAggregateInputType;
    _max?: MeetingProviderAccountMaxAggregateInputType;
};
export type GetMeetingProviderAccountAggregateType<T extends MeetingProviderAccountAggregateArgs> = {
    [P in keyof T & keyof AggregateMeetingProviderAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMeetingProviderAccount[P]> : Prisma.GetScalarType<T[P], AggregateMeetingProviderAccount[P]>;
};
export type MeetingProviderAccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingProviderAccountWhereInput;
    orderBy?: Prisma.MeetingProviderAccountOrderByWithAggregationInput | Prisma.MeetingProviderAccountOrderByWithAggregationInput[];
    by: Prisma.MeetingProviderAccountScalarFieldEnum[] | Prisma.MeetingProviderAccountScalarFieldEnum;
    having?: Prisma.MeetingProviderAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MeetingProviderAccountCountAggregateInputType | true;
    _min?: MeetingProviderAccountMinAggregateInputType;
    _max?: MeetingProviderAccountMaxAggregateInputType;
};
export type MeetingProviderAccountGroupByOutputType = {
    id: string;
    userId: string;
    organizationId: string | null;
    provider: $Enums.MeetingProvider;
    externalAccountId: string | null;
    accessTokenCiphertext: string | null;
    refreshTokenCiphertext: string | null;
    tokenExpiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MeetingProviderAccountCountAggregateOutputType | null;
    _min: MeetingProviderAccountMinAggregateOutputType | null;
    _max: MeetingProviderAccountMaxAggregateOutputType | null;
};
export type GetMeetingProviderAccountGroupByPayload<T extends MeetingProviderAccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MeetingProviderAccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MeetingProviderAccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MeetingProviderAccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MeetingProviderAccountGroupByOutputType[P]>;
}>>;
export type MeetingProviderAccountWhereInput = {
    AND?: Prisma.MeetingProviderAccountWhereInput | Prisma.MeetingProviderAccountWhereInput[];
    OR?: Prisma.MeetingProviderAccountWhereInput[];
    NOT?: Prisma.MeetingProviderAccountWhereInput | Prisma.MeetingProviderAccountWhereInput[];
    id?: Prisma.UuidFilter<"MeetingProviderAccount"> | string;
    userId?: Prisma.UuidFilter<"MeetingProviderAccount"> | string;
    organizationId?: Prisma.UuidNullableFilter<"MeetingProviderAccount"> | string | null;
    provider?: Prisma.EnumMeetingProviderFilter<"MeetingProviderAccount"> | $Enums.MeetingProvider;
    externalAccountId?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    accessTokenCiphertext?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    refreshTokenCiphertext?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"MeetingProviderAccount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MeetingProviderAccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MeetingProviderAccount"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
};
export type MeetingProviderAccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    accessTokenCiphertext?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshTokenCiphertext?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type MeetingProviderAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_provider_organizationId?: Prisma.MeetingProviderAccountUserIdProviderOrganizationIdCompoundUniqueInput;
    AND?: Prisma.MeetingProviderAccountWhereInput | Prisma.MeetingProviderAccountWhereInput[];
    OR?: Prisma.MeetingProviderAccountWhereInput[];
    NOT?: Prisma.MeetingProviderAccountWhereInput | Prisma.MeetingProviderAccountWhereInput[];
    userId?: Prisma.UuidFilter<"MeetingProviderAccount"> | string;
    organizationId?: Prisma.UuidNullableFilter<"MeetingProviderAccount"> | string | null;
    provider?: Prisma.EnumMeetingProviderFilter<"MeetingProviderAccount"> | $Enums.MeetingProvider;
    externalAccountId?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    accessTokenCiphertext?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    refreshTokenCiphertext?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"MeetingProviderAccount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MeetingProviderAccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MeetingProviderAccount"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
}, "id" | "userId_provider_organizationId">;
export type MeetingProviderAccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    accessTokenCiphertext?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshTokenCiphertext?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MeetingProviderAccountCountOrderByAggregateInput;
    _max?: Prisma.MeetingProviderAccountMaxOrderByAggregateInput;
    _min?: Prisma.MeetingProviderAccountMinOrderByAggregateInput;
};
export type MeetingProviderAccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.MeetingProviderAccountScalarWhereWithAggregatesInput | Prisma.MeetingProviderAccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.MeetingProviderAccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MeetingProviderAccountScalarWhereWithAggregatesInput | Prisma.MeetingProviderAccountScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MeetingProviderAccount"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"MeetingProviderAccount"> | string;
    organizationId?: Prisma.UuidNullableWithAggregatesFilter<"MeetingProviderAccount"> | string | null;
    provider?: Prisma.EnumMeetingProviderWithAggregatesFilter<"MeetingProviderAccount"> | $Enums.MeetingProvider;
    externalAccountId?: Prisma.StringNullableWithAggregatesFilter<"MeetingProviderAccount"> | string | null;
    accessTokenCiphertext?: Prisma.StringNullableWithAggregatesFilter<"MeetingProviderAccount"> | string | null;
    refreshTokenCiphertext?: Prisma.StringNullableWithAggregatesFilter<"MeetingProviderAccount"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MeetingProviderAccount"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MeetingProviderAccount"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MeetingProviderAccount"> | Date | string;
};
export type MeetingProviderAccountCreateInput = {
    id?: string;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMeetingAccountsInput;
    organization?: Prisma.OrganizationCreateNestedOneWithoutMeetingAccountsInput;
};
export type MeetingProviderAccountUncheckedCreateInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingProviderAccountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMeetingAccountsNestedInput;
    organization?: Prisma.OrganizationUpdateOneWithoutMeetingAccountsNestedInput;
};
export type MeetingProviderAccountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingProviderAccountCreateManyInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingProviderAccountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingProviderAccountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingProviderAccountListRelationFilter = {
    every?: Prisma.MeetingProviderAccountWhereInput;
    some?: Prisma.MeetingProviderAccountWhereInput;
    none?: Prisma.MeetingProviderAccountWhereInput;
};
export type MeetingProviderAccountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MeetingProviderAccountUserIdProviderOrganizationIdCompoundUniqueInput = {
    userId: string;
    provider: $Enums.MeetingProvider;
    organizationId: string;
};
export type MeetingProviderAccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrder;
    accessTokenCiphertext?: Prisma.SortOrder;
    refreshTokenCiphertext?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeetingProviderAccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrder;
    accessTokenCiphertext?: Prisma.SortOrder;
    refreshTokenCiphertext?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeetingProviderAccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrder;
    accessTokenCiphertext?: Prisma.SortOrder;
    refreshTokenCiphertext?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeetingProviderAccountCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutUserInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput> | Prisma.MeetingProviderAccountCreateWithoutUserInput[] | Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MeetingProviderAccountCreateOrConnectWithoutUserInput | Prisma.MeetingProviderAccountCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MeetingProviderAccountCreateManyUserInputEnvelope;
    connect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
};
export type MeetingProviderAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutUserInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput> | Prisma.MeetingProviderAccountCreateWithoutUserInput[] | Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MeetingProviderAccountCreateOrConnectWithoutUserInput | Prisma.MeetingProviderAccountCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MeetingProviderAccountCreateManyUserInputEnvelope;
    connect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
};
export type MeetingProviderAccountUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutUserInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput> | Prisma.MeetingProviderAccountCreateWithoutUserInput[] | Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MeetingProviderAccountCreateOrConnectWithoutUserInput | Prisma.MeetingProviderAccountCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MeetingProviderAccountUpsertWithWhereUniqueWithoutUserInput | Prisma.MeetingProviderAccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MeetingProviderAccountCreateManyUserInputEnvelope;
    set?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    disconnect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    delete?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    connect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    update?: Prisma.MeetingProviderAccountUpdateWithWhereUniqueWithoutUserInput | Prisma.MeetingProviderAccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MeetingProviderAccountUpdateManyWithWhereWithoutUserInput | Prisma.MeetingProviderAccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MeetingProviderAccountScalarWhereInput | Prisma.MeetingProviderAccountScalarWhereInput[];
};
export type MeetingProviderAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutUserInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput> | Prisma.MeetingProviderAccountCreateWithoutUserInput[] | Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MeetingProviderAccountCreateOrConnectWithoutUserInput | Prisma.MeetingProviderAccountCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MeetingProviderAccountUpsertWithWhereUniqueWithoutUserInput | Prisma.MeetingProviderAccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MeetingProviderAccountCreateManyUserInputEnvelope;
    set?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    disconnect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    delete?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    connect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    update?: Prisma.MeetingProviderAccountUpdateWithWhereUniqueWithoutUserInput | Prisma.MeetingProviderAccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MeetingProviderAccountUpdateManyWithWhereWithoutUserInput | Prisma.MeetingProviderAccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MeetingProviderAccountScalarWhereInput | Prisma.MeetingProviderAccountScalarWhereInput[];
};
export type MeetingProviderAccountCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutOrganizationInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput> | Prisma.MeetingProviderAccountCreateWithoutOrganizationInput[] | Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MeetingProviderAccountCreateOrConnectWithoutOrganizationInput | Prisma.MeetingProviderAccountCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.MeetingProviderAccountCreateManyOrganizationInputEnvelope;
    connect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
};
export type MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutOrganizationInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput> | Prisma.MeetingProviderAccountCreateWithoutOrganizationInput[] | Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MeetingProviderAccountCreateOrConnectWithoutOrganizationInput | Prisma.MeetingProviderAccountCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.MeetingProviderAccountCreateManyOrganizationInputEnvelope;
    connect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
};
export type MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutOrganizationInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput> | Prisma.MeetingProviderAccountCreateWithoutOrganizationInput[] | Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MeetingProviderAccountCreateOrConnectWithoutOrganizationInput | Prisma.MeetingProviderAccountCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.MeetingProviderAccountUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.MeetingProviderAccountUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.MeetingProviderAccountCreateManyOrganizationInputEnvelope;
    set?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    disconnect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    delete?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    connect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    update?: Prisma.MeetingProviderAccountUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.MeetingProviderAccountUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.MeetingProviderAccountUpdateManyWithWhereWithoutOrganizationInput | Prisma.MeetingProviderAccountUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.MeetingProviderAccountScalarWhereInput | Prisma.MeetingProviderAccountScalarWhereInput[];
};
export type MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutOrganizationInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput> | Prisma.MeetingProviderAccountCreateWithoutOrganizationInput[] | Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MeetingProviderAccountCreateOrConnectWithoutOrganizationInput | Prisma.MeetingProviderAccountCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.MeetingProviderAccountUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.MeetingProviderAccountUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.MeetingProviderAccountCreateManyOrganizationInputEnvelope;
    set?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    disconnect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    delete?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    connect?: Prisma.MeetingProviderAccountWhereUniqueInput | Prisma.MeetingProviderAccountWhereUniqueInput[];
    update?: Prisma.MeetingProviderAccountUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.MeetingProviderAccountUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.MeetingProviderAccountUpdateManyWithWhereWithoutOrganizationInput | Prisma.MeetingProviderAccountUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.MeetingProviderAccountScalarWhereInput | Prisma.MeetingProviderAccountScalarWhereInput[];
};
export type EnumMeetingProviderFieldUpdateOperationsInput = {
    set?: $Enums.MeetingProvider;
};
export type MeetingProviderAccountCreateWithoutUserInput = {
    id?: string;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutMeetingAccountsInput;
};
export type MeetingProviderAccountUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId?: string | null;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingProviderAccountCreateOrConnectWithoutUserInput = {
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutUserInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput>;
};
export type MeetingProviderAccountCreateManyUserInputEnvelope = {
    data: Prisma.MeetingProviderAccountCreateManyUserInput | Prisma.MeetingProviderAccountCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MeetingProviderAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.MeetingProviderAccountUpdateWithoutUserInput, Prisma.MeetingProviderAccountUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutUserInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutUserInput>;
};
export type MeetingProviderAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.MeetingProviderAccountUpdateWithoutUserInput, Prisma.MeetingProviderAccountUncheckedUpdateWithoutUserInput>;
};
export type MeetingProviderAccountUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MeetingProviderAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.MeetingProviderAccountUpdateManyMutationInput, Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutUserInput>;
};
export type MeetingProviderAccountScalarWhereInput = {
    AND?: Prisma.MeetingProviderAccountScalarWhereInput | Prisma.MeetingProviderAccountScalarWhereInput[];
    OR?: Prisma.MeetingProviderAccountScalarWhereInput[];
    NOT?: Prisma.MeetingProviderAccountScalarWhereInput | Prisma.MeetingProviderAccountScalarWhereInput[];
    id?: Prisma.UuidFilter<"MeetingProviderAccount"> | string;
    userId?: Prisma.UuidFilter<"MeetingProviderAccount"> | string;
    organizationId?: Prisma.UuidNullableFilter<"MeetingProviderAccount"> | string | null;
    provider?: Prisma.EnumMeetingProviderFilter<"MeetingProviderAccount"> | $Enums.MeetingProvider;
    externalAccountId?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    accessTokenCiphertext?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    refreshTokenCiphertext?: Prisma.StringNullableFilter<"MeetingProviderAccount"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"MeetingProviderAccount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MeetingProviderAccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MeetingProviderAccount"> | Date | string;
};
export type MeetingProviderAccountCreateWithoutOrganizationInput = {
    id?: string;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMeetingAccountsInput;
};
export type MeetingProviderAccountUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId: string;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingProviderAccountCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutOrganizationInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput>;
};
export type MeetingProviderAccountCreateManyOrganizationInputEnvelope = {
    data: Prisma.MeetingProviderAccountCreateManyOrganizationInput | Prisma.MeetingProviderAccountCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type MeetingProviderAccountUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.MeetingProviderAccountUpdateWithoutOrganizationInput, Prisma.MeetingProviderAccountUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.MeetingProviderAccountCreateWithoutOrganizationInput, Prisma.MeetingProviderAccountUncheckedCreateWithoutOrganizationInput>;
};
export type MeetingProviderAccountUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.MeetingProviderAccountUpdateWithoutOrganizationInput, Prisma.MeetingProviderAccountUncheckedUpdateWithoutOrganizationInput>;
};
export type MeetingProviderAccountUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.MeetingProviderAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.MeetingProviderAccountUpdateManyMutationInput, Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationInput>;
};
export type MeetingProviderAccountCreateManyUserInput = {
    id?: string;
    organizationId?: string | null;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingProviderAccountUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutMeetingAccountsNestedInput;
};
export type MeetingProviderAccountUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingProviderAccountUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingProviderAccountCreateManyOrganizationInput = {
    id?: string;
    userId: string;
    provider: $Enums.MeetingProvider;
    externalAccountId?: string | null;
    accessTokenCiphertext?: string | null;
    refreshTokenCiphertext?: string | null;
    tokenExpiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingProviderAccountUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMeetingAccountsNestedInput;
};
export type MeetingProviderAccountUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshTokenCiphertext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingProviderAccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    provider?: boolean;
    externalAccountId?: boolean;
    accessTokenCiphertext?: boolean;
    refreshTokenCiphertext?: boolean;
    tokenExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.MeetingProviderAccount$organizationArgs<ExtArgs>;
}, ExtArgs["result"]["meetingProviderAccount"]>;
export type MeetingProviderAccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    provider?: boolean;
    externalAccountId?: boolean;
    accessTokenCiphertext?: boolean;
    refreshTokenCiphertext?: boolean;
    tokenExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.MeetingProviderAccount$organizationArgs<ExtArgs>;
}, ExtArgs["result"]["meetingProviderAccount"]>;
export type MeetingProviderAccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    provider?: boolean;
    externalAccountId?: boolean;
    accessTokenCiphertext?: boolean;
    refreshTokenCiphertext?: boolean;
    tokenExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.MeetingProviderAccount$organizationArgs<ExtArgs>;
}, ExtArgs["result"]["meetingProviderAccount"]>;
export type MeetingProviderAccountSelectScalar = {
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    provider?: boolean;
    externalAccountId?: boolean;
    accessTokenCiphertext?: boolean;
    refreshTokenCiphertext?: boolean;
    tokenExpiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MeetingProviderAccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "organizationId" | "provider" | "externalAccountId" | "accessTokenCiphertext" | "refreshTokenCiphertext" | "tokenExpiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["meetingProviderAccount"]>;
export type MeetingProviderAccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.MeetingProviderAccount$organizationArgs<ExtArgs>;
};
export type MeetingProviderAccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.MeetingProviderAccount$organizationArgs<ExtArgs>;
};
export type MeetingProviderAccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.MeetingProviderAccount$organizationArgs<ExtArgs>;
};
export type $MeetingProviderAccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MeetingProviderAccount";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        organization: Prisma.$OrganizationPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        organizationId: string | null;
        provider: $Enums.MeetingProvider;
        externalAccountId: string | null;
        accessTokenCiphertext: string | null;
        refreshTokenCiphertext: string | null;
        tokenExpiresAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["meetingProviderAccount"]>;
    composites: {};
};
export type MeetingProviderAccountGetPayload<S extends boolean | null | undefined | MeetingProviderAccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload, S>;
export type MeetingProviderAccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MeetingProviderAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MeetingProviderAccountCountAggregateInputType | true;
};
export interface MeetingProviderAccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MeetingProviderAccount'];
        meta: {
            name: 'MeetingProviderAccount';
        };
    };
    findUnique<T extends MeetingProviderAccountFindUniqueArgs>(args: Prisma.SelectSubset<T, MeetingProviderAccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MeetingProviderAccountClient<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MeetingProviderAccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MeetingProviderAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeetingProviderAccountClient<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MeetingProviderAccountFindFirstArgs>(args?: Prisma.SelectSubset<T, MeetingProviderAccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__MeetingProviderAccountClient<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MeetingProviderAccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MeetingProviderAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeetingProviderAccountClient<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MeetingProviderAccountFindManyArgs>(args?: Prisma.SelectSubset<T, MeetingProviderAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MeetingProviderAccountCreateArgs>(args: Prisma.SelectSubset<T, MeetingProviderAccountCreateArgs<ExtArgs>>): Prisma.Prisma__MeetingProviderAccountClient<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MeetingProviderAccountCreateManyArgs>(args?: Prisma.SelectSubset<T, MeetingProviderAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MeetingProviderAccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MeetingProviderAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MeetingProviderAccountDeleteArgs>(args: Prisma.SelectSubset<T, MeetingProviderAccountDeleteArgs<ExtArgs>>): Prisma.Prisma__MeetingProviderAccountClient<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MeetingProviderAccountUpdateArgs>(args: Prisma.SelectSubset<T, MeetingProviderAccountUpdateArgs<ExtArgs>>): Prisma.Prisma__MeetingProviderAccountClient<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MeetingProviderAccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, MeetingProviderAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MeetingProviderAccountUpdateManyArgs>(args: Prisma.SelectSubset<T, MeetingProviderAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MeetingProviderAccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MeetingProviderAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MeetingProviderAccountUpsertArgs>(args: Prisma.SelectSubset<T, MeetingProviderAccountUpsertArgs<ExtArgs>>): Prisma.Prisma__MeetingProviderAccountClient<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MeetingProviderAccountCountArgs>(args?: Prisma.Subset<T, MeetingProviderAccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MeetingProviderAccountCountAggregateOutputType> : number>;
    aggregate<T extends MeetingProviderAccountAggregateArgs>(args: Prisma.Subset<T, MeetingProviderAccountAggregateArgs>): Prisma.PrismaPromise<GetMeetingProviderAccountAggregateType<T>>;
    groupBy<T extends MeetingProviderAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MeetingProviderAccountGroupByArgs['orderBy'];
    } : {
        orderBy?: MeetingProviderAccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MeetingProviderAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingProviderAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MeetingProviderAccountFieldRefs;
}
export interface Prisma__MeetingProviderAccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organization<T extends Prisma.MeetingProviderAccount$organizationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MeetingProviderAccount$organizationArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MeetingProviderAccountFieldRefs {
    readonly id: Prisma.FieldRef<"MeetingProviderAccount", 'String'>;
    readonly userId: Prisma.FieldRef<"MeetingProviderAccount", 'String'>;
    readonly organizationId: Prisma.FieldRef<"MeetingProviderAccount", 'String'>;
    readonly provider: Prisma.FieldRef<"MeetingProviderAccount", 'MeetingProvider'>;
    readonly externalAccountId: Prisma.FieldRef<"MeetingProviderAccount", 'String'>;
    readonly accessTokenCiphertext: Prisma.FieldRef<"MeetingProviderAccount", 'String'>;
    readonly refreshTokenCiphertext: Prisma.FieldRef<"MeetingProviderAccount", 'String'>;
    readonly tokenExpiresAt: Prisma.FieldRef<"MeetingProviderAccount", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"MeetingProviderAccount", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MeetingProviderAccount", 'DateTime'>;
}
export type MeetingProviderAccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
};
export type MeetingProviderAccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
};
export type MeetingProviderAccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    where?: Prisma.MeetingProviderAccountWhereInput;
    orderBy?: Prisma.MeetingProviderAccountOrderByWithRelationInput | Prisma.MeetingProviderAccountOrderByWithRelationInput[];
    cursor?: Prisma.MeetingProviderAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeetingProviderAccountScalarFieldEnum | Prisma.MeetingProviderAccountScalarFieldEnum[];
};
export type MeetingProviderAccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    where?: Prisma.MeetingProviderAccountWhereInput;
    orderBy?: Prisma.MeetingProviderAccountOrderByWithRelationInput | Prisma.MeetingProviderAccountOrderByWithRelationInput[];
    cursor?: Prisma.MeetingProviderAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeetingProviderAccountScalarFieldEnum | Prisma.MeetingProviderAccountScalarFieldEnum[];
};
export type MeetingProviderAccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    where?: Prisma.MeetingProviderAccountWhereInput;
    orderBy?: Prisma.MeetingProviderAccountOrderByWithRelationInput | Prisma.MeetingProviderAccountOrderByWithRelationInput[];
    cursor?: Prisma.MeetingProviderAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeetingProviderAccountScalarFieldEnum | Prisma.MeetingProviderAccountScalarFieldEnum[];
};
export type MeetingProviderAccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingProviderAccountCreateInput, Prisma.MeetingProviderAccountUncheckedCreateInput>;
};
export type MeetingProviderAccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MeetingProviderAccountCreateManyInput | Prisma.MeetingProviderAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MeetingProviderAccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    data: Prisma.MeetingProviderAccountCreateManyInput | Prisma.MeetingProviderAccountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MeetingProviderAccountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MeetingProviderAccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingProviderAccountUpdateInput, Prisma.MeetingProviderAccountUncheckedUpdateInput>;
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
};
export type MeetingProviderAccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MeetingProviderAccountUpdateManyMutationInput, Prisma.MeetingProviderAccountUncheckedUpdateManyInput>;
    where?: Prisma.MeetingProviderAccountWhereInput;
    limit?: number;
};
export type MeetingProviderAccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingProviderAccountUpdateManyMutationInput, Prisma.MeetingProviderAccountUncheckedUpdateManyInput>;
    where?: Prisma.MeetingProviderAccountWhereInput;
    limit?: number;
    include?: Prisma.MeetingProviderAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MeetingProviderAccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeetingProviderAccountCreateInput, Prisma.MeetingProviderAccountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MeetingProviderAccountUpdateInput, Prisma.MeetingProviderAccountUncheckedUpdateInput>;
};
export type MeetingProviderAccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    where: Prisma.MeetingProviderAccountWhereUniqueInput;
};
export type MeetingProviderAccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingProviderAccountWhereInput;
    limit?: number;
};
export type MeetingProviderAccount$organizationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
};
export type MeetingProviderAccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
};

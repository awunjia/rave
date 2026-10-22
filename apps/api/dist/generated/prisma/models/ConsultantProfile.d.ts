import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConsultantProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsultantProfilePayload>;
export type AggregateConsultantProfile = {
    _count: ConsultantProfileCountAggregateOutputType | null;
    _min: ConsultantProfileMinAggregateOutputType | null;
    _max: ConsultantProfileMaxAggregateOutputType | null;
};
export type ConsultantProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    headline: string | null;
    biography: string | null;
    isBookable: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConsultantProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    headline: string | null;
    biography: string | null;
    isBookable: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConsultantProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    organizationId: number;
    headline: number;
    biography: number;
    isBookable: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ConsultantProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    headline?: true;
    biography?: true;
    isBookable?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConsultantProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    headline?: true;
    biography?: true;
    isBookable?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConsultantProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    headline?: true;
    biography?: true;
    isBookable?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ConsultantProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultantProfileWhereInput;
    orderBy?: Prisma.ConsultantProfileOrderByWithRelationInput | Prisma.ConsultantProfileOrderByWithRelationInput[];
    cursor?: Prisma.ConsultantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConsultantProfileCountAggregateInputType;
    _min?: ConsultantProfileMinAggregateInputType;
    _max?: ConsultantProfileMaxAggregateInputType;
};
export type GetConsultantProfileAggregateType<T extends ConsultantProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateConsultantProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsultantProfile[P]> : Prisma.GetScalarType<T[P], AggregateConsultantProfile[P]>;
};
export type ConsultantProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultantProfileWhereInput;
    orderBy?: Prisma.ConsultantProfileOrderByWithAggregationInput | Prisma.ConsultantProfileOrderByWithAggregationInput[];
    by: Prisma.ConsultantProfileScalarFieldEnum[] | Prisma.ConsultantProfileScalarFieldEnum;
    having?: Prisma.ConsultantProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsultantProfileCountAggregateInputType | true;
    _min?: ConsultantProfileMinAggregateInputType;
    _max?: ConsultantProfileMaxAggregateInputType;
};
export type ConsultantProfileGroupByOutputType = {
    id: string;
    userId: string;
    organizationId: string;
    headline: string | null;
    biography: string | null;
    isBookable: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ConsultantProfileCountAggregateOutputType | null;
    _min: ConsultantProfileMinAggregateOutputType | null;
    _max: ConsultantProfileMaxAggregateOutputType | null;
};
export type GetConsultantProfileGroupByPayload<T extends ConsultantProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsultantProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsultantProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsultantProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsultantProfileGroupByOutputType[P]>;
}>>;
export type ConsultantProfileWhereInput = {
    AND?: Prisma.ConsultantProfileWhereInput | Prisma.ConsultantProfileWhereInput[];
    OR?: Prisma.ConsultantProfileWhereInput[];
    NOT?: Prisma.ConsultantProfileWhereInput | Prisma.ConsultantProfileWhereInput[];
    id?: Prisma.UuidFilter<"ConsultantProfile"> | string;
    userId?: Prisma.UuidFilter<"ConsultantProfile"> | string;
    organizationId?: Prisma.UuidFilter<"ConsultantProfile"> | string;
    headline?: Prisma.StringNullableFilter<"ConsultantProfile"> | string | null;
    biography?: Prisma.StringNullableFilter<"ConsultantProfile"> | string | null;
    isBookable?: Prisma.BoolFilter<"ConsultantProfile"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ConsultantProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ConsultantProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type ConsultantProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    headline?: Prisma.SortOrderInput | Prisma.SortOrder;
    biography?: Prisma.SortOrderInput | Prisma.SortOrder;
    isBookable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type ConsultantProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ConsultantProfileWhereInput | Prisma.ConsultantProfileWhereInput[];
    OR?: Prisma.ConsultantProfileWhereInput[];
    NOT?: Prisma.ConsultantProfileWhereInput | Prisma.ConsultantProfileWhereInput[];
    organizationId?: Prisma.UuidFilter<"ConsultantProfile"> | string;
    headline?: Prisma.StringNullableFilter<"ConsultantProfile"> | string | null;
    biography?: Prisma.StringNullableFilter<"ConsultantProfile"> | string | null;
    isBookable?: Prisma.BoolFilter<"ConsultantProfile"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ConsultantProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ConsultantProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id" | "userId">;
export type ConsultantProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    headline?: Prisma.SortOrderInput | Prisma.SortOrder;
    biography?: Prisma.SortOrderInput | Prisma.SortOrder;
    isBookable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ConsultantProfileCountOrderByAggregateInput;
    _max?: Prisma.ConsultantProfileMaxOrderByAggregateInput;
    _min?: Prisma.ConsultantProfileMinOrderByAggregateInput;
};
export type ConsultantProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsultantProfileScalarWhereWithAggregatesInput | Prisma.ConsultantProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsultantProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsultantProfileScalarWhereWithAggregatesInput | Prisma.ConsultantProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ConsultantProfile"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"ConsultantProfile"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"ConsultantProfile"> | string;
    headline?: Prisma.StringNullableWithAggregatesFilter<"ConsultantProfile"> | string | null;
    biography?: Prisma.StringNullableWithAggregatesFilter<"ConsultantProfile"> | string | null;
    isBookable?: Prisma.BoolWithAggregatesFilter<"ConsultantProfile"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ConsultantProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ConsultantProfile"> | Date | string;
};
export type ConsultantProfileCreateInput = {
    id?: string;
    headline?: string | null;
    biography?: string | null;
    isBookable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutConsultantProfileInput;
    organization: Prisma.OrganizationCreateNestedOneWithoutConsultantProfilesInput;
};
export type ConsultantProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    organizationId: string;
    headline?: string | null;
    biography?: string | null;
    isBookable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultantProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutConsultantProfileNestedInput;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutConsultantProfilesNestedInput;
};
export type ConsultantProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultantProfileCreateManyInput = {
    id?: string;
    userId: string;
    organizationId: string;
    headline?: string | null;
    biography?: string | null;
    isBookable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultantProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultantProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultantProfileNullableScalarRelationFilter = {
    is?: Prisma.ConsultantProfileWhereInput | null;
    isNot?: Prisma.ConsultantProfileWhereInput | null;
};
export type ConsultantProfileListRelationFilter = {
    every?: Prisma.ConsultantProfileWhereInput;
    some?: Prisma.ConsultantProfileWhereInput;
    none?: Prisma.ConsultantProfileWhereInput;
};
export type ConsultantProfileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConsultantProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    headline?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    isBookable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsultantProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    headline?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    isBookable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsultantProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    headline?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    isBookable?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsultantProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutUserInput, Prisma.ConsultantProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ConsultantProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ConsultantProfileWhereUniqueInput;
};
export type ConsultantProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutUserInput, Prisma.ConsultantProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ConsultantProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ConsultantProfileWhereUniqueInput;
};
export type ConsultantProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutUserInput, Prisma.ConsultantProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ConsultantProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ConsultantProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ConsultantProfileWhereInput | boolean;
    delete?: Prisma.ConsultantProfileWhereInput | boolean;
    connect?: Prisma.ConsultantProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConsultantProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ConsultantProfileUpdateWithoutUserInput>, Prisma.ConsultantProfileUncheckedUpdateWithoutUserInput>;
};
export type ConsultantProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutUserInput, Prisma.ConsultantProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ConsultantProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ConsultantProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ConsultantProfileWhereInput | boolean;
    delete?: Prisma.ConsultantProfileWhereInput | boolean;
    connect?: Prisma.ConsultantProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConsultantProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ConsultantProfileUpdateWithoutUserInput>, Prisma.ConsultantProfileUncheckedUpdateWithoutUserInput>;
};
export type ConsultantProfileCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutOrganizationInput, Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput> | Prisma.ConsultantProfileCreateWithoutOrganizationInput[] | Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ConsultantProfileCreateOrConnectWithoutOrganizationInput | Prisma.ConsultantProfileCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ConsultantProfileCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
};
export type ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutOrganizationInput, Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput> | Prisma.ConsultantProfileCreateWithoutOrganizationInput[] | Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ConsultantProfileCreateOrConnectWithoutOrganizationInput | Prisma.ConsultantProfileCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ConsultantProfileCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
};
export type ConsultantProfileUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutOrganizationInput, Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput> | Prisma.ConsultantProfileCreateWithoutOrganizationInput[] | Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ConsultantProfileCreateOrConnectWithoutOrganizationInput | Prisma.ConsultantProfileCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ConsultantProfileUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ConsultantProfileUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ConsultantProfileCreateManyOrganizationInputEnvelope;
    set?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
    disconnect?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
    delete?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
    connect?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
    update?: Prisma.ConsultantProfileUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ConsultantProfileUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ConsultantProfileUpdateManyWithWhereWithoutOrganizationInput | Prisma.ConsultantProfileUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ConsultantProfileScalarWhereInput | Prisma.ConsultantProfileScalarWhereInput[];
};
export type ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutOrganizationInput, Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput> | Prisma.ConsultantProfileCreateWithoutOrganizationInput[] | Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ConsultantProfileCreateOrConnectWithoutOrganizationInput | Prisma.ConsultantProfileCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ConsultantProfileUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ConsultantProfileUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ConsultantProfileCreateManyOrganizationInputEnvelope;
    set?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
    disconnect?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
    delete?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
    connect?: Prisma.ConsultantProfileWhereUniqueInput | Prisma.ConsultantProfileWhereUniqueInput[];
    update?: Prisma.ConsultantProfileUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ConsultantProfileUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ConsultantProfileUpdateManyWithWhereWithoutOrganizationInput | Prisma.ConsultantProfileUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ConsultantProfileScalarWhereInput | Prisma.ConsultantProfileScalarWhereInput[];
};
export type ConsultantProfileCreateWithoutUserInput = {
    id?: string;
    headline?: string | null;
    biography?: string | null;
    isBookable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutConsultantProfilesInput;
};
export type ConsultantProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId: string;
    headline?: string | null;
    biography?: string | null;
    isBookable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultantProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.ConsultantProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutUserInput, Prisma.ConsultantProfileUncheckedCreateWithoutUserInput>;
};
export type ConsultantProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ConsultantProfileUpdateWithoutUserInput, Prisma.ConsultantProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutUserInput, Prisma.ConsultantProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.ConsultantProfileWhereInput;
};
export type ConsultantProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ConsultantProfileWhereInput;
    data: Prisma.XOR<Prisma.ConsultantProfileUpdateWithoutUserInput, Prisma.ConsultantProfileUncheckedUpdateWithoutUserInput>;
};
export type ConsultantProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutConsultantProfilesNestedInput;
};
export type ConsultantProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultantProfileCreateWithoutOrganizationInput = {
    id?: string;
    headline?: string | null;
    biography?: string | null;
    isBookable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutConsultantProfileInput;
};
export type ConsultantProfileUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId: string;
    headline?: string | null;
    biography?: string | null;
    isBookable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultantProfileCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ConsultantProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutOrganizationInput, Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput>;
};
export type ConsultantProfileCreateManyOrganizationInputEnvelope = {
    data: Prisma.ConsultantProfileCreateManyOrganizationInput | Prisma.ConsultantProfileCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ConsultantProfileUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ConsultantProfileWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultantProfileUpdateWithoutOrganizationInput, Prisma.ConsultantProfileUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ConsultantProfileCreateWithoutOrganizationInput, Prisma.ConsultantProfileUncheckedCreateWithoutOrganizationInput>;
};
export type ConsultantProfileUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ConsultantProfileWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultantProfileUpdateWithoutOrganizationInput, Prisma.ConsultantProfileUncheckedUpdateWithoutOrganizationInput>;
};
export type ConsultantProfileUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ConsultantProfileScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultantProfileUpdateManyMutationInput, Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ConsultantProfileScalarWhereInput = {
    AND?: Prisma.ConsultantProfileScalarWhereInput | Prisma.ConsultantProfileScalarWhereInput[];
    OR?: Prisma.ConsultantProfileScalarWhereInput[];
    NOT?: Prisma.ConsultantProfileScalarWhereInput | Prisma.ConsultantProfileScalarWhereInput[];
    id?: Prisma.UuidFilter<"ConsultantProfile"> | string;
    userId?: Prisma.UuidFilter<"ConsultantProfile"> | string;
    organizationId?: Prisma.UuidFilter<"ConsultantProfile"> | string;
    headline?: Prisma.StringNullableFilter<"ConsultantProfile"> | string | null;
    biography?: Prisma.StringNullableFilter<"ConsultantProfile"> | string | null;
    isBookable?: Prisma.BoolFilter<"ConsultantProfile"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ConsultantProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ConsultantProfile"> | Date | string;
};
export type ConsultantProfileCreateManyOrganizationInput = {
    id?: string;
    userId: string;
    headline?: string | null;
    biography?: string | null;
    isBookable?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultantProfileUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutConsultantProfileNestedInput;
};
export type ConsultantProfileUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultantProfileUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isBookable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultantProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    headline?: boolean;
    biography?: boolean;
    isBookable?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consultantProfile"]>;
export type ConsultantProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    headline?: boolean;
    biography?: boolean;
    isBookable?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consultantProfile"]>;
export type ConsultantProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    headline?: boolean;
    biography?: boolean;
    isBookable?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consultantProfile"]>;
export type ConsultantProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    headline?: boolean;
    biography?: boolean;
    isBookable?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ConsultantProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "organizationId" | "headline" | "biography" | "isBookable" | "createdAt" | "updatedAt", ExtArgs["result"]["consultantProfile"]>;
export type ConsultantProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type ConsultantProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type ConsultantProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $ConsultantProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ConsultantProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        organizationId: string;
        headline: string | null;
        biography: string | null;
        isBookable: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["consultantProfile"]>;
    composites: {};
};
export type ConsultantProfileGetPayload<S extends boolean | null | undefined | ConsultantProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload, S>;
export type ConsultantProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsultantProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsultantProfileCountAggregateInputType | true;
};
export interface ConsultantProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ConsultantProfile'];
        meta: {
            name: 'ConsultantProfile';
        };
    };
    findUnique<T extends ConsultantProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsultantProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsultantProfileClient<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConsultantProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsultantProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsultantProfileClient<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConsultantProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsultantProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsultantProfileClient<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConsultantProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsultantProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsultantProfileClient<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConsultantProfileFindManyArgs>(args?: Prisma.SelectSubset<T, ConsultantProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConsultantProfileCreateArgs>(args: Prisma.SelectSubset<T, ConsultantProfileCreateArgs<ExtArgs>>): Prisma.Prisma__ConsultantProfileClient<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConsultantProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsultantProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConsultantProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConsultantProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConsultantProfileDeleteArgs>(args: Prisma.SelectSubset<T, ConsultantProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsultantProfileClient<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConsultantProfileUpdateArgs>(args: Prisma.SelectSubset<T, ConsultantProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsultantProfileClient<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConsultantProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsultantProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConsultantProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsultantProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConsultantProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConsultantProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConsultantProfileUpsertArgs>(args: Prisma.SelectSubset<T, ConsultantProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsultantProfileClient<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConsultantProfileCountArgs>(args?: Prisma.Subset<T, ConsultantProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsultantProfileCountAggregateOutputType> : number>;
    aggregate<T extends ConsultantProfileAggregateArgs>(args: Prisma.Subset<T, ConsultantProfileAggregateArgs>): Prisma.PrismaPromise<GetConsultantProfileAggregateType<T>>;
    groupBy<T extends ConsultantProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsultantProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsultantProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsultantProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultantProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConsultantProfileFieldRefs;
}
export interface Prisma__ConsultantProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConsultantProfileFieldRefs {
    readonly id: Prisma.FieldRef<"ConsultantProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"ConsultantProfile", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ConsultantProfile", 'String'>;
    readonly headline: Prisma.FieldRef<"ConsultantProfile", 'String'>;
    readonly biography: Prisma.FieldRef<"ConsultantProfile", 'String'>;
    readonly isBookable: Prisma.FieldRef<"ConsultantProfile", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ConsultantProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ConsultantProfile", 'DateTime'>;
}
export type ConsultantProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    where: Prisma.ConsultantProfileWhereUniqueInput;
};
export type ConsultantProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    where: Prisma.ConsultantProfileWhereUniqueInput;
};
export type ConsultantProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    where?: Prisma.ConsultantProfileWhereInput;
    orderBy?: Prisma.ConsultantProfileOrderByWithRelationInput | Prisma.ConsultantProfileOrderByWithRelationInput[];
    cursor?: Prisma.ConsultantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultantProfileScalarFieldEnum | Prisma.ConsultantProfileScalarFieldEnum[];
};
export type ConsultantProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    where?: Prisma.ConsultantProfileWhereInput;
    orderBy?: Prisma.ConsultantProfileOrderByWithRelationInput | Prisma.ConsultantProfileOrderByWithRelationInput[];
    cursor?: Prisma.ConsultantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultantProfileScalarFieldEnum | Prisma.ConsultantProfileScalarFieldEnum[];
};
export type ConsultantProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    where?: Prisma.ConsultantProfileWhereInput;
    orderBy?: Prisma.ConsultantProfileOrderByWithRelationInput | Prisma.ConsultantProfileOrderByWithRelationInput[];
    cursor?: Prisma.ConsultantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultantProfileScalarFieldEnum | Prisma.ConsultantProfileScalarFieldEnum[];
};
export type ConsultantProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsultantProfileCreateInput, Prisma.ConsultantProfileUncheckedCreateInput>;
};
export type ConsultantProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConsultantProfileCreateManyInput | Prisma.ConsultantProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConsultantProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    data: Prisma.ConsultantProfileCreateManyInput | Prisma.ConsultantProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConsultantProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConsultantProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsultantProfileUpdateInput, Prisma.ConsultantProfileUncheckedUpdateInput>;
    where: Prisma.ConsultantProfileWhereUniqueInput;
};
export type ConsultantProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConsultantProfileUpdateManyMutationInput, Prisma.ConsultantProfileUncheckedUpdateManyInput>;
    where?: Prisma.ConsultantProfileWhereInput;
    limit?: number;
};
export type ConsultantProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsultantProfileUpdateManyMutationInput, Prisma.ConsultantProfileUncheckedUpdateManyInput>;
    where?: Prisma.ConsultantProfileWhereInput;
    limit?: number;
    include?: Prisma.ConsultantProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConsultantProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    where: Prisma.ConsultantProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultantProfileCreateInput, Prisma.ConsultantProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConsultantProfileUpdateInput, Prisma.ConsultantProfileUncheckedUpdateInput>;
};
export type ConsultantProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    where: Prisma.ConsultantProfileWhereUniqueInput;
};
export type ConsultantProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultantProfileWhereInput;
    limit?: number;
};
export type ConsultantProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
};

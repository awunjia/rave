import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AvailabilityRuleModel = runtime.Types.Result.DefaultSelection<Prisma.$AvailabilityRulePayload>;
export type AggregateAvailabilityRule = {
    _count: AvailabilityRuleCountAggregateOutputType | null;
    _avg: AvailabilityRuleAvgAggregateOutputType | null;
    _sum: AvailabilityRuleSumAggregateOutputType | null;
    _min: AvailabilityRuleMinAggregateOutputType | null;
    _max: AvailabilityRuleMaxAggregateOutputType | null;
};
export type AvailabilityRuleAvgAggregateOutputType = {
    dayOfWeek: number | null;
    startMinute: number | null;
    endMinute: number | null;
};
export type AvailabilityRuleSumAggregateOutputType = {
    dayOfWeek: number | null;
    startMinute: number | null;
    endMinute: number | null;
};
export type AvailabilityRuleMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    consultantId: string | null;
    dayOfWeek: number | null;
    startMinute: number | null;
    endMinute: number | null;
    timeZone: string | null;
    effectiveFrom: Date | null;
    effectiveUntil: Date | null;
    isActive: boolean | null;
};
export type AvailabilityRuleMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    consultantId: string | null;
    dayOfWeek: number | null;
    startMinute: number | null;
    endMinute: number | null;
    timeZone: string | null;
    effectiveFrom: Date | null;
    effectiveUntil: Date | null;
    isActive: boolean | null;
};
export type AvailabilityRuleCountAggregateOutputType = {
    id: number;
    organizationId: number;
    consultantId: number;
    dayOfWeek: number;
    startMinute: number;
    endMinute: number;
    timeZone: number;
    effectiveFrom: number;
    effectiveUntil: number;
    isActive: number;
    _all: number;
};
export type AvailabilityRuleAvgAggregateInputType = {
    dayOfWeek?: true;
    startMinute?: true;
    endMinute?: true;
};
export type AvailabilityRuleSumAggregateInputType = {
    dayOfWeek?: true;
    startMinute?: true;
    endMinute?: true;
};
export type AvailabilityRuleMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    consultantId?: true;
    dayOfWeek?: true;
    startMinute?: true;
    endMinute?: true;
    timeZone?: true;
    effectiveFrom?: true;
    effectiveUntil?: true;
    isActive?: true;
};
export type AvailabilityRuleMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    consultantId?: true;
    dayOfWeek?: true;
    startMinute?: true;
    endMinute?: true;
    timeZone?: true;
    effectiveFrom?: true;
    effectiveUntil?: true;
    isActive?: true;
};
export type AvailabilityRuleCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    consultantId?: true;
    dayOfWeek?: true;
    startMinute?: true;
    endMinute?: true;
    timeZone?: true;
    effectiveFrom?: true;
    effectiveUntil?: true;
    isActive?: true;
    _all?: true;
};
export type AvailabilityRuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityRuleWhereInput;
    orderBy?: Prisma.AvailabilityRuleOrderByWithRelationInput | Prisma.AvailabilityRuleOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AvailabilityRuleCountAggregateInputType;
    _avg?: AvailabilityRuleAvgAggregateInputType;
    _sum?: AvailabilityRuleSumAggregateInputType;
    _min?: AvailabilityRuleMinAggregateInputType;
    _max?: AvailabilityRuleMaxAggregateInputType;
};
export type GetAvailabilityRuleAggregateType<T extends AvailabilityRuleAggregateArgs> = {
    [P in keyof T & keyof AggregateAvailabilityRule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvailabilityRule[P]> : Prisma.GetScalarType<T[P], AggregateAvailabilityRule[P]>;
};
export type AvailabilityRuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityRuleWhereInput;
    orderBy?: Prisma.AvailabilityRuleOrderByWithAggregationInput | Prisma.AvailabilityRuleOrderByWithAggregationInput[];
    by: Prisma.AvailabilityRuleScalarFieldEnum[] | Prisma.AvailabilityRuleScalarFieldEnum;
    having?: Prisma.AvailabilityRuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AvailabilityRuleCountAggregateInputType | true;
    _avg?: AvailabilityRuleAvgAggregateInputType;
    _sum?: AvailabilityRuleSumAggregateInputType;
    _min?: AvailabilityRuleMinAggregateInputType;
    _max?: AvailabilityRuleMaxAggregateInputType;
};
export type AvailabilityRuleGroupByOutputType = {
    id: string;
    organizationId: string;
    consultantId: string;
    dayOfWeek: number;
    startMinute: number;
    endMinute: number;
    timeZone: string;
    effectiveFrom: Date | null;
    effectiveUntil: Date | null;
    isActive: boolean;
    _count: AvailabilityRuleCountAggregateOutputType | null;
    _avg: AvailabilityRuleAvgAggregateOutputType | null;
    _sum: AvailabilityRuleSumAggregateOutputType | null;
    _min: AvailabilityRuleMinAggregateOutputType | null;
    _max: AvailabilityRuleMaxAggregateOutputType | null;
};
export type GetAvailabilityRuleGroupByPayload<T extends AvailabilityRuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AvailabilityRuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AvailabilityRuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AvailabilityRuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AvailabilityRuleGroupByOutputType[P]>;
}>>;
export type AvailabilityRuleWhereInput = {
    AND?: Prisma.AvailabilityRuleWhereInput | Prisma.AvailabilityRuleWhereInput[];
    OR?: Prisma.AvailabilityRuleWhereInput[];
    NOT?: Prisma.AvailabilityRuleWhereInput | Prisma.AvailabilityRuleWhereInput[];
    id?: Prisma.UuidFilter<"AvailabilityRule"> | string;
    organizationId?: Prisma.UuidFilter<"AvailabilityRule"> | string;
    consultantId?: Prisma.UuidFilter<"AvailabilityRule"> | string;
    dayOfWeek?: Prisma.IntFilter<"AvailabilityRule"> | number;
    startMinute?: Prisma.IntFilter<"AvailabilityRule"> | number;
    endMinute?: Prisma.IntFilter<"AvailabilityRule"> | number;
    timeZone?: Prisma.StringFilter<"AvailabilityRule"> | string;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"AvailabilityRule"> | Date | string | null;
    effectiveUntil?: Prisma.DateTimeNullableFilter<"AvailabilityRule"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"AvailabilityRule"> | boolean;
    consultant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AvailabilityRuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startMinute?: Prisma.SortOrder;
    endMinute?: Prisma.SortOrder;
    timeZone?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    consultant?: Prisma.UserOrderByWithRelationInput;
};
export type AvailabilityRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AvailabilityRuleWhereInput | Prisma.AvailabilityRuleWhereInput[];
    OR?: Prisma.AvailabilityRuleWhereInput[];
    NOT?: Prisma.AvailabilityRuleWhereInput | Prisma.AvailabilityRuleWhereInput[];
    organizationId?: Prisma.UuidFilter<"AvailabilityRule"> | string;
    consultantId?: Prisma.UuidFilter<"AvailabilityRule"> | string;
    dayOfWeek?: Prisma.IntFilter<"AvailabilityRule"> | number;
    startMinute?: Prisma.IntFilter<"AvailabilityRule"> | number;
    endMinute?: Prisma.IntFilter<"AvailabilityRule"> | number;
    timeZone?: Prisma.StringFilter<"AvailabilityRule"> | string;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"AvailabilityRule"> | Date | string | null;
    effectiveUntil?: Prisma.DateTimeNullableFilter<"AvailabilityRule"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"AvailabilityRule"> | boolean;
    consultant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AvailabilityRuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startMinute?: Prisma.SortOrder;
    endMinute?: Prisma.SortOrder;
    timeZone?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.AvailabilityRuleCountOrderByAggregateInput;
    _avg?: Prisma.AvailabilityRuleAvgOrderByAggregateInput;
    _max?: Prisma.AvailabilityRuleMaxOrderByAggregateInput;
    _min?: Prisma.AvailabilityRuleMinOrderByAggregateInput;
    _sum?: Prisma.AvailabilityRuleSumOrderByAggregateInput;
};
export type AvailabilityRuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.AvailabilityRuleScalarWhereWithAggregatesInput | Prisma.AvailabilityRuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.AvailabilityRuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AvailabilityRuleScalarWhereWithAggregatesInput | Prisma.AvailabilityRuleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AvailabilityRule"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"AvailabilityRule"> | string;
    consultantId?: Prisma.UuidWithAggregatesFilter<"AvailabilityRule"> | string;
    dayOfWeek?: Prisma.IntWithAggregatesFilter<"AvailabilityRule"> | number;
    startMinute?: Prisma.IntWithAggregatesFilter<"AvailabilityRule"> | number;
    endMinute?: Prisma.IntWithAggregatesFilter<"AvailabilityRule"> | number;
    timeZone?: Prisma.StringWithAggregatesFilter<"AvailabilityRule"> | string;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"AvailabilityRule"> | Date | string | null;
    effectiveUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"AvailabilityRule"> | Date | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"AvailabilityRule"> | boolean;
};
export type AvailabilityRuleCreateInput = {
    id?: string;
    organizationId: string;
    dayOfWeek: number;
    startMinute: number;
    endMinute: number;
    timeZone: string;
    effectiveFrom?: Date | string | null;
    effectiveUntil?: Date | string | null;
    isActive?: boolean;
    consultant: Prisma.UserCreateNestedOneWithoutAvailabilityRulesInput;
};
export type AvailabilityRuleUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    consultantId: string;
    dayOfWeek: number;
    startMinute: number;
    endMinute: number;
    timeZone: string;
    effectiveFrom?: Date | string | null;
    effectiveUntil?: Date | string | null;
    isActive?: boolean;
};
export type AvailabilityRuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    timeZone?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consultant?: Prisma.UserUpdateOneRequiredWithoutAvailabilityRulesNestedInput;
};
export type AvailabilityRuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    consultantId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    timeZone?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityRuleCreateManyInput = {
    id?: string;
    organizationId: string;
    consultantId: string;
    dayOfWeek: number;
    startMinute: number;
    endMinute: number;
    timeZone: string;
    effectiveFrom?: Date | string | null;
    effectiveUntil?: Date | string | null;
    isActive?: boolean;
};
export type AvailabilityRuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    timeZone?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityRuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    consultantId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    timeZone?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityRuleListRelationFilter = {
    every?: Prisma.AvailabilityRuleWhereInput;
    some?: Prisma.AvailabilityRuleWhereInput;
    none?: Prisma.AvailabilityRuleWhereInput;
};
export type AvailabilityRuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AvailabilityRuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startMinute?: Prisma.SortOrder;
    endMinute?: Prisma.SortOrder;
    timeZone?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveUntil?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type AvailabilityRuleAvgOrderByAggregateInput = {
    dayOfWeek?: Prisma.SortOrder;
    startMinute?: Prisma.SortOrder;
    endMinute?: Prisma.SortOrder;
};
export type AvailabilityRuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startMinute?: Prisma.SortOrder;
    endMinute?: Prisma.SortOrder;
    timeZone?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveUntil?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type AvailabilityRuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    consultantId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startMinute?: Prisma.SortOrder;
    endMinute?: Prisma.SortOrder;
    timeZone?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveUntil?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type AvailabilityRuleSumOrderByAggregateInput = {
    dayOfWeek?: Prisma.SortOrder;
    startMinute?: Prisma.SortOrder;
    endMinute?: Prisma.SortOrder;
};
export type AvailabilityRuleCreateNestedManyWithoutConsultantInput = {
    create?: Prisma.XOR<Prisma.AvailabilityRuleCreateWithoutConsultantInput, Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput> | Prisma.AvailabilityRuleCreateWithoutConsultantInput[] | Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput[];
    connectOrCreate?: Prisma.AvailabilityRuleCreateOrConnectWithoutConsultantInput | Prisma.AvailabilityRuleCreateOrConnectWithoutConsultantInput[];
    createMany?: Prisma.AvailabilityRuleCreateManyConsultantInputEnvelope;
    connect?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
};
export type AvailabilityRuleUncheckedCreateNestedManyWithoutConsultantInput = {
    create?: Prisma.XOR<Prisma.AvailabilityRuleCreateWithoutConsultantInput, Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput> | Prisma.AvailabilityRuleCreateWithoutConsultantInput[] | Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput[];
    connectOrCreate?: Prisma.AvailabilityRuleCreateOrConnectWithoutConsultantInput | Prisma.AvailabilityRuleCreateOrConnectWithoutConsultantInput[];
    createMany?: Prisma.AvailabilityRuleCreateManyConsultantInputEnvelope;
    connect?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
};
export type AvailabilityRuleUpdateManyWithoutConsultantNestedInput = {
    create?: Prisma.XOR<Prisma.AvailabilityRuleCreateWithoutConsultantInput, Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput> | Prisma.AvailabilityRuleCreateWithoutConsultantInput[] | Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput[];
    connectOrCreate?: Prisma.AvailabilityRuleCreateOrConnectWithoutConsultantInput | Prisma.AvailabilityRuleCreateOrConnectWithoutConsultantInput[];
    upsert?: Prisma.AvailabilityRuleUpsertWithWhereUniqueWithoutConsultantInput | Prisma.AvailabilityRuleUpsertWithWhereUniqueWithoutConsultantInput[];
    createMany?: Prisma.AvailabilityRuleCreateManyConsultantInputEnvelope;
    set?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
    disconnect?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
    delete?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
    connect?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
    update?: Prisma.AvailabilityRuleUpdateWithWhereUniqueWithoutConsultantInput | Prisma.AvailabilityRuleUpdateWithWhereUniqueWithoutConsultantInput[];
    updateMany?: Prisma.AvailabilityRuleUpdateManyWithWhereWithoutConsultantInput | Prisma.AvailabilityRuleUpdateManyWithWhereWithoutConsultantInput[];
    deleteMany?: Prisma.AvailabilityRuleScalarWhereInput | Prisma.AvailabilityRuleScalarWhereInput[];
};
export type AvailabilityRuleUncheckedUpdateManyWithoutConsultantNestedInput = {
    create?: Prisma.XOR<Prisma.AvailabilityRuleCreateWithoutConsultantInput, Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput> | Prisma.AvailabilityRuleCreateWithoutConsultantInput[] | Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput[];
    connectOrCreate?: Prisma.AvailabilityRuleCreateOrConnectWithoutConsultantInput | Prisma.AvailabilityRuleCreateOrConnectWithoutConsultantInput[];
    upsert?: Prisma.AvailabilityRuleUpsertWithWhereUniqueWithoutConsultantInput | Prisma.AvailabilityRuleUpsertWithWhereUniqueWithoutConsultantInput[];
    createMany?: Prisma.AvailabilityRuleCreateManyConsultantInputEnvelope;
    set?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
    disconnect?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
    delete?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
    connect?: Prisma.AvailabilityRuleWhereUniqueInput | Prisma.AvailabilityRuleWhereUniqueInput[];
    update?: Prisma.AvailabilityRuleUpdateWithWhereUniqueWithoutConsultantInput | Prisma.AvailabilityRuleUpdateWithWhereUniqueWithoutConsultantInput[];
    updateMany?: Prisma.AvailabilityRuleUpdateManyWithWhereWithoutConsultantInput | Prisma.AvailabilityRuleUpdateManyWithWhereWithoutConsultantInput[];
    deleteMany?: Prisma.AvailabilityRuleScalarWhereInput | Prisma.AvailabilityRuleScalarWhereInput[];
};
export type AvailabilityRuleCreateWithoutConsultantInput = {
    id?: string;
    organizationId: string;
    dayOfWeek: number;
    startMinute: number;
    endMinute: number;
    timeZone: string;
    effectiveFrom?: Date | string | null;
    effectiveUntil?: Date | string | null;
    isActive?: boolean;
};
export type AvailabilityRuleUncheckedCreateWithoutConsultantInput = {
    id?: string;
    organizationId: string;
    dayOfWeek: number;
    startMinute: number;
    endMinute: number;
    timeZone: string;
    effectiveFrom?: Date | string | null;
    effectiveUntil?: Date | string | null;
    isActive?: boolean;
};
export type AvailabilityRuleCreateOrConnectWithoutConsultantInput = {
    where: Prisma.AvailabilityRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvailabilityRuleCreateWithoutConsultantInput, Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput>;
};
export type AvailabilityRuleCreateManyConsultantInputEnvelope = {
    data: Prisma.AvailabilityRuleCreateManyConsultantInput | Prisma.AvailabilityRuleCreateManyConsultantInput[];
    skipDuplicates?: boolean;
};
export type AvailabilityRuleUpsertWithWhereUniqueWithoutConsultantInput = {
    where: Prisma.AvailabilityRuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.AvailabilityRuleUpdateWithoutConsultantInput, Prisma.AvailabilityRuleUncheckedUpdateWithoutConsultantInput>;
    create: Prisma.XOR<Prisma.AvailabilityRuleCreateWithoutConsultantInput, Prisma.AvailabilityRuleUncheckedCreateWithoutConsultantInput>;
};
export type AvailabilityRuleUpdateWithWhereUniqueWithoutConsultantInput = {
    where: Prisma.AvailabilityRuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.AvailabilityRuleUpdateWithoutConsultantInput, Prisma.AvailabilityRuleUncheckedUpdateWithoutConsultantInput>;
};
export type AvailabilityRuleUpdateManyWithWhereWithoutConsultantInput = {
    where: Prisma.AvailabilityRuleScalarWhereInput;
    data: Prisma.XOR<Prisma.AvailabilityRuleUpdateManyMutationInput, Prisma.AvailabilityRuleUncheckedUpdateManyWithoutConsultantInput>;
};
export type AvailabilityRuleScalarWhereInput = {
    AND?: Prisma.AvailabilityRuleScalarWhereInput | Prisma.AvailabilityRuleScalarWhereInput[];
    OR?: Prisma.AvailabilityRuleScalarWhereInput[];
    NOT?: Prisma.AvailabilityRuleScalarWhereInput | Prisma.AvailabilityRuleScalarWhereInput[];
    id?: Prisma.UuidFilter<"AvailabilityRule"> | string;
    organizationId?: Prisma.UuidFilter<"AvailabilityRule"> | string;
    consultantId?: Prisma.UuidFilter<"AvailabilityRule"> | string;
    dayOfWeek?: Prisma.IntFilter<"AvailabilityRule"> | number;
    startMinute?: Prisma.IntFilter<"AvailabilityRule"> | number;
    endMinute?: Prisma.IntFilter<"AvailabilityRule"> | number;
    timeZone?: Prisma.StringFilter<"AvailabilityRule"> | string;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"AvailabilityRule"> | Date | string | null;
    effectiveUntil?: Prisma.DateTimeNullableFilter<"AvailabilityRule"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"AvailabilityRule"> | boolean;
};
export type AvailabilityRuleCreateManyConsultantInput = {
    id?: string;
    organizationId: string;
    dayOfWeek: number;
    startMinute: number;
    endMinute: number;
    timeZone: string;
    effectiveFrom?: Date | string | null;
    effectiveUntil?: Date | string | null;
    isActive?: boolean;
};
export type AvailabilityRuleUpdateWithoutConsultantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    timeZone?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityRuleUncheckedUpdateWithoutConsultantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    timeZone?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityRuleUncheckedUpdateManyWithoutConsultantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinute?: Prisma.IntFieldUpdateOperationsInput | number;
    timeZone?: Prisma.StringFieldUpdateOperationsInput | string;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    effectiveUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AvailabilityRuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    consultantId?: boolean;
    dayOfWeek?: boolean;
    startMinute?: boolean;
    endMinute?: boolean;
    timeZone?: boolean;
    effectiveFrom?: boolean;
    effectiveUntil?: boolean;
    isActive?: boolean;
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availabilityRule"]>;
export type AvailabilityRuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    consultantId?: boolean;
    dayOfWeek?: boolean;
    startMinute?: boolean;
    endMinute?: boolean;
    timeZone?: boolean;
    effectiveFrom?: boolean;
    effectiveUntil?: boolean;
    isActive?: boolean;
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availabilityRule"]>;
export type AvailabilityRuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    consultantId?: boolean;
    dayOfWeek?: boolean;
    startMinute?: boolean;
    endMinute?: boolean;
    timeZone?: boolean;
    effectiveFrom?: boolean;
    effectiveUntil?: boolean;
    isActive?: boolean;
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availabilityRule"]>;
export type AvailabilityRuleSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    consultantId?: boolean;
    dayOfWeek?: boolean;
    startMinute?: boolean;
    endMinute?: boolean;
    timeZone?: boolean;
    effectiveFrom?: boolean;
    effectiveUntil?: boolean;
    isActive?: boolean;
};
export type AvailabilityRuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "consultantId" | "dayOfWeek" | "startMinute" | "endMinute" | "timeZone" | "effectiveFrom" | "effectiveUntil" | "isActive", ExtArgs["result"]["availabilityRule"]>;
export type AvailabilityRuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AvailabilityRuleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AvailabilityRuleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consultant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AvailabilityRulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AvailabilityRule";
    objects: {
        consultant: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        consultantId: string;
        dayOfWeek: number;
        startMinute: number;
        endMinute: number;
        timeZone: string;
        effectiveFrom: Date | null;
        effectiveUntil: Date | null;
        isActive: boolean;
    }, ExtArgs["result"]["availabilityRule"]>;
    composites: {};
};
export type AvailabilityRuleGetPayload<S extends boolean | null | undefined | AvailabilityRuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload, S>;
export type AvailabilityRuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AvailabilityRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AvailabilityRuleCountAggregateInputType | true;
};
export interface AvailabilityRuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityRule'];
        meta: {
            name: 'AvailabilityRule';
        };
    };
    findUnique<T extends AvailabilityRuleFindUniqueArgs>(args: Prisma.SelectSubset<T, AvailabilityRuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AvailabilityRuleClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AvailabilityRuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AvailabilityRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvailabilityRuleClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AvailabilityRuleFindFirstArgs>(args?: Prisma.SelectSubset<T, AvailabilityRuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__AvailabilityRuleClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AvailabilityRuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AvailabilityRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AvailabilityRuleClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AvailabilityRuleFindManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AvailabilityRuleCreateArgs>(args: Prisma.SelectSubset<T, AvailabilityRuleCreateArgs<ExtArgs>>): Prisma.Prisma__AvailabilityRuleClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AvailabilityRuleCreateManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AvailabilityRuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AvailabilityRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AvailabilityRuleDeleteArgs>(args: Prisma.SelectSubset<T, AvailabilityRuleDeleteArgs<ExtArgs>>): Prisma.Prisma__AvailabilityRuleClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AvailabilityRuleUpdateArgs>(args: Prisma.SelectSubset<T, AvailabilityRuleUpdateArgs<ExtArgs>>): Prisma.Prisma__AvailabilityRuleClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AvailabilityRuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, AvailabilityRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AvailabilityRuleUpdateManyArgs>(args: Prisma.SelectSubset<T, AvailabilityRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AvailabilityRuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AvailabilityRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AvailabilityRuleUpsertArgs>(args: Prisma.SelectSubset<T, AvailabilityRuleUpsertArgs<ExtArgs>>): Prisma.Prisma__AvailabilityRuleClient<runtime.Types.Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AvailabilityRuleCountArgs>(args?: Prisma.Subset<T, AvailabilityRuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AvailabilityRuleCountAggregateOutputType> : number>;
    aggregate<T extends AvailabilityRuleAggregateArgs>(args: Prisma.Subset<T, AvailabilityRuleAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityRuleAggregateType<T>>;
    groupBy<T extends AvailabilityRuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AvailabilityRuleGroupByArgs['orderBy'];
    } : {
        orderBy?: AvailabilityRuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AvailabilityRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AvailabilityRuleFieldRefs;
}
export interface Prisma__AvailabilityRuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    consultant<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AvailabilityRuleFieldRefs {
    readonly id: Prisma.FieldRef<"AvailabilityRule", 'String'>;
    readonly organizationId: Prisma.FieldRef<"AvailabilityRule", 'String'>;
    readonly consultantId: Prisma.FieldRef<"AvailabilityRule", 'String'>;
    readonly dayOfWeek: Prisma.FieldRef<"AvailabilityRule", 'Int'>;
    readonly startMinute: Prisma.FieldRef<"AvailabilityRule", 'Int'>;
    readonly endMinute: Prisma.FieldRef<"AvailabilityRule", 'Int'>;
    readonly timeZone: Prisma.FieldRef<"AvailabilityRule", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"AvailabilityRule", 'DateTime'>;
    readonly effectiveUntil: Prisma.FieldRef<"AvailabilityRule", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"AvailabilityRule", 'Boolean'>;
}
export type AvailabilityRuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    where: Prisma.AvailabilityRuleWhereUniqueInput;
};
export type AvailabilityRuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    where: Prisma.AvailabilityRuleWhereUniqueInput;
};
export type AvailabilityRuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    where?: Prisma.AvailabilityRuleWhereInput;
    orderBy?: Prisma.AvailabilityRuleOrderByWithRelationInput | Prisma.AvailabilityRuleOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityRuleScalarFieldEnum | Prisma.AvailabilityRuleScalarFieldEnum[];
};
export type AvailabilityRuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    where?: Prisma.AvailabilityRuleWhereInput;
    orderBy?: Prisma.AvailabilityRuleOrderByWithRelationInput | Prisma.AvailabilityRuleOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityRuleScalarFieldEnum | Prisma.AvailabilityRuleScalarFieldEnum[];
};
export type AvailabilityRuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    where?: Prisma.AvailabilityRuleWhereInput;
    orderBy?: Prisma.AvailabilityRuleOrderByWithRelationInput | Prisma.AvailabilityRuleOrderByWithRelationInput[];
    cursor?: Prisma.AvailabilityRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AvailabilityRuleScalarFieldEnum | Prisma.AvailabilityRuleScalarFieldEnum[];
};
export type AvailabilityRuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvailabilityRuleCreateInput, Prisma.AvailabilityRuleUncheckedCreateInput>;
};
export type AvailabilityRuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AvailabilityRuleCreateManyInput | Prisma.AvailabilityRuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AvailabilityRuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    data: Prisma.AvailabilityRuleCreateManyInput | Prisma.AvailabilityRuleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AvailabilityRuleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AvailabilityRuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvailabilityRuleUpdateInput, Prisma.AvailabilityRuleUncheckedUpdateInput>;
    where: Prisma.AvailabilityRuleWhereUniqueInput;
};
export type AvailabilityRuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AvailabilityRuleUpdateManyMutationInput, Prisma.AvailabilityRuleUncheckedUpdateManyInput>;
    where?: Prisma.AvailabilityRuleWhereInput;
    limit?: number;
};
export type AvailabilityRuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AvailabilityRuleUpdateManyMutationInput, Prisma.AvailabilityRuleUncheckedUpdateManyInput>;
    where?: Prisma.AvailabilityRuleWhereInput;
    limit?: number;
    include?: Prisma.AvailabilityRuleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AvailabilityRuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    where: Prisma.AvailabilityRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AvailabilityRuleCreateInput, Prisma.AvailabilityRuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AvailabilityRuleUpdateInput, Prisma.AvailabilityRuleUncheckedUpdateInput>;
};
export type AvailabilityRuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
    where: Prisma.AvailabilityRuleWhereUniqueInput;
};
export type AvailabilityRuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AvailabilityRuleWhereInput;
    limit?: number;
};
export type AvailabilityRuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvailabilityRuleSelect<ExtArgs> | null;
    omit?: Prisma.AvailabilityRuleOmit<ExtArgs> | null;
    include?: Prisma.AvailabilityRuleInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnalyticsEventModel = runtime.Types.Result.DefaultSelection<Prisma.$AnalyticsEventPayload>;
export type AggregateAnalyticsEvent = {
    _count: AnalyticsEventCountAggregateOutputType | null;
    _min: AnalyticsEventMinAggregateOutputType | null;
    _max: AnalyticsEventMaxAggregateOutputType | null;
};
export type AnalyticsEventMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    actorId: string | null;
    eventName: string | null;
    anonymousId: string | null;
    occurredAt: Date | null;
};
export type AnalyticsEventMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    actorId: string | null;
    eventName: string | null;
    anonymousId: string | null;
    occurredAt: Date | null;
};
export type AnalyticsEventCountAggregateOutputType = {
    id: number;
    organizationId: number;
    actorId: number;
    eventName: number;
    anonymousId: number;
    properties: number;
    occurredAt: number;
    _all: number;
};
export type AnalyticsEventMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    actorId?: true;
    eventName?: true;
    anonymousId?: true;
    occurredAt?: true;
};
export type AnalyticsEventMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    actorId?: true;
    eventName?: true;
    anonymousId?: true;
    occurredAt?: true;
};
export type AnalyticsEventCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    actorId?: true;
    eventName?: true;
    anonymousId?: true;
    properties?: true;
    occurredAt?: true;
    _all?: true;
};
export type AnalyticsEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsEventWhereInput;
    orderBy?: Prisma.AnalyticsEventOrderByWithRelationInput | Prisma.AnalyticsEventOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnalyticsEventCountAggregateInputType;
    _min?: AnalyticsEventMinAggregateInputType;
    _max?: AnalyticsEventMaxAggregateInputType;
};
export type GetAnalyticsEventAggregateType<T extends AnalyticsEventAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalyticsEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalyticsEvent[P]> : Prisma.GetScalarType<T[P], AggregateAnalyticsEvent[P]>;
};
export type AnalyticsEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsEventWhereInput;
    orderBy?: Prisma.AnalyticsEventOrderByWithAggregationInput | Prisma.AnalyticsEventOrderByWithAggregationInput[];
    by: Prisma.AnalyticsEventScalarFieldEnum[] | Prisma.AnalyticsEventScalarFieldEnum;
    having?: Prisma.AnalyticsEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalyticsEventCountAggregateInputType | true;
    _min?: AnalyticsEventMinAggregateInputType;
    _max?: AnalyticsEventMaxAggregateInputType;
};
export type AnalyticsEventGroupByOutputType = {
    id: string;
    organizationId: string | null;
    actorId: string | null;
    eventName: string;
    anonymousId: string | null;
    properties: runtime.JsonValue | null;
    occurredAt: Date;
    _count: AnalyticsEventCountAggregateOutputType | null;
    _min: AnalyticsEventMinAggregateOutputType | null;
    _max: AnalyticsEventMaxAggregateOutputType | null;
};
export type GetAnalyticsEventGroupByPayload<T extends AnalyticsEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnalyticsEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnalyticsEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>;
}>>;
export type AnalyticsEventWhereInput = {
    AND?: Prisma.AnalyticsEventWhereInput | Prisma.AnalyticsEventWhereInput[];
    OR?: Prisma.AnalyticsEventWhereInput[];
    NOT?: Prisma.AnalyticsEventWhereInput | Prisma.AnalyticsEventWhereInput[];
    id?: Prisma.UuidFilter<"AnalyticsEvent"> | string;
    organizationId?: Prisma.UuidNullableFilter<"AnalyticsEvent"> | string | null;
    actorId?: Prisma.UuidNullableFilter<"AnalyticsEvent"> | string | null;
    eventName?: Prisma.StringFilter<"AnalyticsEvent"> | string;
    anonymousId?: Prisma.StringNullableFilter<"AnalyticsEvent"> | string | null;
    properties?: Prisma.JsonNullableFilter<"AnalyticsEvent">;
    occurredAt?: Prisma.DateTimeFilter<"AnalyticsEvent"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    actor?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type AnalyticsEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    anonymousId?: Prisma.SortOrderInput | Prisma.SortOrder;
    properties?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    actor?: Prisma.UserOrderByWithRelationInput;
};
export type AnalyticsEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AnalyticsEventWhereInput | Prisma.AnalyticsEventWhereInput[];
    OR?: Prisma.AnalyticsEventWhereInput[];
    NOT?: Prisma.AnalyticsEventWhereInput | Prisma.AnalyticsEventWhereInput[];
    organizationId?: Prisma.UuidNullableFilter<"AnalyticsEvent"> | string | null;
    actorId?: Prisma.UuidNullableFilter<"AnalyticsEvent"> | string | null;
    eventName?: Prisma.StringFilter<"AnalyticsEvent"> | string;
    anonymousId?: Prisma.StringNullableFilter<"AnalyticsEvent"> | string | null;
    properties?: Prisma.JsonNullableFilter<"AnalyticsEvent">;
    occurredAt?: Prisma.DateTimeFilter<"AnalyticsEvent"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    actor?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type AnalyticsEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    anonymousId?: Prisma.SortOrderInput | Prisma.SortOrder;
    properties?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    _count?: Prisma.AnalyticsEventCountOrderByAggregateInput;
    _max?: Prisma.AnalyticsEventMaxOrderByAggregateInput;
    _min?: Prisma.AnalyticsEventMinOrderByAggregateInput;
};
export type AnalyticsEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnalyticsEventScalarWhereWithAggregatesInput | Prisma.AnalyticsEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnalyticsEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnalyticsEventScalarWhereWithAggregatesInput | Prisma.AnalyticsEventScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AnalyticsEvent"> | string;
    organizationId?: Prisma.UuidNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null;
    actorId?: Prisma.UuidNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null;
    eventName?: Prisma.StringWithAggregatesFilter<"AnalyticsEvent"> | string;
    anonymousId?: Prisma.StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null;
    properties?: Prisma.JsonNullableWithAggregatesFilter<"AnalyticsEvent">;
    occurredAt?: Prisma.DateTimeWithAggregatesFilter<"AnalyticsEvent"> | Date | string;
};
export type AnalyticsEventCreateInput = {
    id?: string;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutAnalyticsEventsInput;
    actor?: Prisma.UserCreateNestedOneWithoutAnalyticsEventsInput;
};
export type AnalyticsEventUncheckedCreateInput = {
    id?: string;
    organizationId?: string | null;
    actorId?: string | null;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type AnalyticsEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutAnalyticsEventsNestedInput;
    actor?: Prisma.UserUpdateOneWithoutAnalyticsEventsNestedInput;
};
export type AnalyticsEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsEventCreateManyInput = {
    id?: string;
    organizationId?: string | null;
    actorId?: string | null;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type AnalyticsEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsEventListRelationFilter = {
    every?: Prisma.AnalyticsEventWhereInput;
    some?: Prisma.AnalyticsEventWhereInput;
    none?: Prisma.AnalyticsEventWhereInput;
};
export type AnalyticsEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnalyticsEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    anonymousId?: Prisma.SortOrder;
    properties?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type AnalyticsEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    anonymousId?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type AnalyticsEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    eventName?: Prisma.SortOrder;
    anonymousId?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type AnalyticsEventCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutActorInput, Prisma.AnalyticsEventUncheckedCreateWithoutActorInput> | Prisma.AnalyticsEventCreateWithoutActorInput[] | Prisma.AnalyticsEventUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.AnalyticsEventCreateOrConnectWithoutActorInput | Prisma.AnalyticsEventCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.AnalyticsEventCreateManyActorInputEnvelope;
    connect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
};
export type AnalyticsEventUncheckedCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutActorInput, Prisma.AnalyticsEventUncheckedCreateWithoutActorInput> | Prisma.AnalyticsEventCreateWithoutActorInput[] | Prisma.AnalyticsEventUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.AnalyticsEventCreateOrConnectWithoutActorInput | Prisma.AnalyticsEventCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.AnalyticsEventCreateManyActorInputEnvelope;
    connect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
};
export type AnalyticsEventUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutActorInput, Prisma.AnalyticsEventUncheckedCreateWithoutActorInput> | Prisma.AnalyticsEventCreateWithoutActorInput[] | Prisma.AnalyticsEventUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.AnalyticsEventCreateOrConnectWithoutActorInput | Prisma.AnalyticsEventCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.AnalyticsEventUpsertWithWhereUniqueWithoutActorInput | Prisma.AnalyticsEventUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.AnalyticsEventCreateManyActorInputEnvelope;
    set?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    disconnect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    delete?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    connect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    update?: Prisma.AnalyticsEventUpdateWithWhereUniqueWithoutActorInput | Prisma.AnalyticsEventUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.AnalyticsEventUpdateManyWithWhereWithoutActorInput | Prisma.AnalyticsEventUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.AnalyticsEventScalarWhereInput | Prisma.AnalyticsEventScalarWhereInput[];
};
export type AnalyticsEventUncheckedUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutActorInput, Prisma.AnalyticsEventUncheckedCreateWithoutActorInput> | Prisma.AnalyticsEventCreateWithoutActorInput[] | Prisma.AnalyticsEventUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.AnalyticsEventCreateOrConnectWithoutActorInput | Prisma.AnalyticsEventCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.AnalyticsEventUpsertWithWhereUniqueWithoutActorInput | Prisma.AnalyticsEventUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.AnalyticsEventCreateManyActorInputEnvelope;
    set?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    disconnect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    delete?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    connect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    update?: Prisma.AnalyticsEventUpdateWithWhereUniqueWithoutActorInput | Prisma.AnalyticsEventUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.AnalyticsEventUpdateManyWithWhereWithoutActorInput | Prisma.AnalyticsEventUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.AnalyticsEventScalarWhereInput | Prisma.AnalyticsEventScalarWhereInput[];
};
export type AnalyticsEventCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutOrganizationInput, Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput> | Prisma.AnalyticsEventCreateWithoutOrganizationInput[] | Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AnalyticsEventCreateOrConnectWithoutOrganizationInput | Prisma.AnalyticsEventCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AnalyticsEventCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
};
export type AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutOrganizationInput, Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput> | Prisma.AnalyticsEventCreateWithoutOrganizationInput[] | Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AnalyticsEventCreateOrConnectWithoutOrganizationInput | Prisma.AnalyticsEventCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AnalyticsEventCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
};
export type AnalyticsEventUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutOrganizationInput, Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput> | Prisma.AnalyticsEventCreateWithoutOrganizationInput[] | Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AnalyticsEventCreateOrConnectWithoutOrganizationInput | Prisma.AnalyticsEventCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AnalyticsEventUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AnalyticsEventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AnalyticsEventCreateManyOrganizationInputEnvelope;
    set?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    disconnect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    delete?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    connect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    update?: Prisma.AnalyticsEventUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AnalyticsEventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AnalyticsEventUpdateManyWithWhereWithoutOrganizationInput | Prisma.AnalyticsEventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AnalyticsEventScalarWhereInput | Prisma.AnalyticsEventScalarWhereInput[];
};
export type AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutOrganizationInput, Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput> | Prisma.AnalyticsEventCreateWithoutOrganizationInput[] | Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AnalyticsEventCreateOrConnectWithoutOrganizationInput | Prisma.AnalyticsEventCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AnalyticsEventUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AnalyticsEventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AnalyticsEventCreateManyOrganizationInputEnvelope;
    set?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    disconnect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    delete?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    connect?: Prisma.AnalyticsEventWhereUniqueInput | Prisma.AnalyticsEventWhereUniqueInput[];
    update?: Prisma.AnalyticsEventUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AnalyticsEventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AnalyticsEventUpdateManyWithWhereWithoutOrganizationInput | Prisma.AnalyticsEventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AnalyticsEventScalarWhereInput | Prisma.AnalyticsEventScalarWhereInput[];
};
export type AnalyticsEventCreateWithoutActorInput = {
    id?: string;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutAnalyticsEventsInput;
};
export type AnalyticsEventUncheckedCreateWithoutActorInput = {
    id?: string;
    organizationId?: string | null;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type AnalyticsEventCreateOrConnectWithoutActorInput = {
    where: Prisma.AnalyticsEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutActorInput, Prisma.AnalyticsEventUncheckedCreateWithoutActorInput>;
};
export type AnalyticsEventCreateManyActorInputEnvelope = {
    data: Prisma.AnalyticsEventCreateManyActorInput | Prisma.AnalyticsEventCreateManyActorInput[];
    skipDuplicates?: boolean;
};
export type AnalyticsEventUpsertWithWhereUniqueWithoutActorInput = {
    where: Prisma.AnalyticsEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnalyticsEventUpdateWithoutActorInput, Prisma.AnalyticsEventUncheckedUpdateWithoutActorInput>;
    create: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutActorInput, Prisma.AnalyticsEventUncheckedCreateWithoutActorInput>;
};
export type AnalyticsEventUpdateWithWhereUniqueWithoutActorInput = {
    where: Prisma.AnalyticsEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnalyticsEventUpdateWithoutActorInput, Prisma.AnalyticsEventUncheckedUpdateWithoutActorInput>;
};
export type AnalyticsEventUpdateManyWithWhereWithoutActorInput = {
    where: Prisma.AnalyticsEventScalarWhereInput;
    data: Prisma.XOR<Prisma.AnalyticsEventUpdateManyMutationInput, Prisma.AnalyticsEventUncheckedUpdateManyWithoutActorInput>;
};
export type AnalyticsEventScalarWhereInput = {
    AND?: Prisma.AnalyticsEventScalarWhereInput | Prisma.AnalyticsEventScalarWhereInput[];
    OR?: Prisma.AnalyticsEventScalarWhereInput[];
    NOT?: Prisma.AnalyticsEventScalarWhereInput | Prisma.AnalyticsEventScalarWhereInput[];
    id?: Prisma.UuidFilter<"AnalyticsEvent"> | string;
    organizationId?: Prisma.UuidNullableFilter<"AnalyticsEvent"> | string | null;
    actorId?: Prisma.UuidNullableFilter<"AnalyticsEvent"> | string | null;
    eventName?: Prisma.StringFilter<"AnalyticsEvent"> | string;
    anonymousId?: Prisma.StringNullableFilter<"AnalyticsEvent"> | string | null;
    properties?: Prisma.JsonNullableFilter<"AnalyticsEvent">;
    occurredAt?: Prisma.DateTimeFilter<"AnalyticsEvent"> | Date | string;
};
export type AnalyticsEventCreateWithoutOrganizationInput = {
    id?: string;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
    actor?: Prisma.UserCreateNestedOneWithoutAnalyticsEventsInput;
};
export type AnalyticsEventUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    actorId?: string | null;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type AnalyticsEventCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.AnalyticsEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutOrganizationInput, Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput>;
};
export type AnalyticsEventCreateManyOrganizationInputEnvelope = {
    data: Prisma.AnalyticsEventCreateManyOrganizationInput | Prisma.AnalyticsEventCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type AnalyticsEventUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AnalyticsEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnalyticsEventUpdateWithoutOrganizationInput, Prisma.AnalyticsEventUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.AnalyticsEventCreateWithoutOrganizationInput, Prisma.AnalyticsEventUncheckedCreateWithoutOrganizationInput>;
};
export type AnalyticsEventUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AnalyticsEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnalyticsEventUpdateWithoutOrganizationInput, Prisma.AnalyticsEventUncheckedUpdateWithoutOrganizationInput>;
};
export type AnalyticsEventUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.AnalyticsEventScalarWhereInput;
    data: Prisma.XOR<Prisma.AnalyticsEventUpdateManyMutationInput, Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationInput>;
};
export type AnalyticsEventCreateManyActorInput = {
    id?: string;
    organizationId?: string | null;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type AnalyticsEventUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutAnalyticsEventsNestedInput;
};
export type AnalyticsEventUncheckedUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsEventUncheckedUpdateManyWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsEventCreateManyOrganizationInput = {
    id?: string;
    actorId?: string | null;
    eventName: string;
    anonymousId?: string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type AnalyticsEventUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.UserUpdateOneWithoutAnalyticsEventsNestedInput;
};
export type AnalyticsEventUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsEventUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    eventName?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymousId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    properties?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    actorId?: boolean;
    eventName?: boolean;
    anonymousId?: boolean;
    properties?: boolean;
    occurredAt?: boolean;
    organization?: boolean | Prisma.AnalyticsEvent$organizationArgs<ExtArgs>;
    actor?: boolean | Prisma.AnalyticsEvent$actorArgs<ExtArgs>;
}, ExtArgs["result"]["analyticsEvent"]>;
export type AnalyticsEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    actorId?: boolean;
    eventName?: boolean;
    anonymousId?: boolean;
    properties?: boolean;
    occurredAt?: boolean;
    organization?: boolean | Prisma.AnalyticsEvent$organizationArgs<ExtArgs>;
    actor?: boolean | Prisma.AnalyticsEvent$actorArgs<ExtArgs>;
}, ExtArgs["result"]["analyticsEvent"]>;
export type AnalyticsEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    actorId?: boolean;
    eventName?: boolean;
    anonymousId?: boolean;
    properties?: boolean;
    occurredAt?: boolean;
    organization?: boolean | Prisma.AnalyticsEvent$organizationArgs<ExtArgs>;
    actor?: boolean | Prisma.AnalyticsEvent$actorArgs<ExtArgs>;
}, ExtArgs["result"]["analyticsEvent"]>;
export type AnalyticsEventSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    actorId?: boolean;
    eventName?: boolean;
    anonymousId?: boolean;
    properties?: boolean;
    occurredAt?: boolean;
};
export type AnalyticsEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "actorId" | "eventName" | "anonymousId" | "properties" | "occurredAt", ExtArgs["result"]["analyticsEvent"]>;
export type AnalyticsEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.AnalyticsEvent$organizationArgs<ExtArgs>;
    actor?: boolean | Prisma.AnalyticsEvent$actorArgs<ExtArgs>;
};
export type AnalyticsEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.AnalyticsEvent$organizationArgs<ExtArgs>;
    actor?: boolean | Prisma.AnalyticsEvent$actorArgs<ExtArgs>;
};
export type AnalyticsEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.AnalyticsEvent$organizationArgs<ExtArgs>;
    actor?: boolean | Prisma.AnalyticsEvent$actorArgs<ExtArgs>;
};
export type $AnalyticsEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnalyticsEvent";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs> | null;
        actor: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string | null;
        actorId: string | null;
        eventName: string;
        anonymousId: string | null;
        properties: runtime.JsonValue | null;
        occurredAt: Date;
    }, ExtArgs["result"]["analyticsEvent"]>;
    composites: {};
};
export type AnalyticsEventGetPayload<S extends boolean | null | undefined | AnalyticsEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload, S>;
export type AnalyticsEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnalyticsEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnalyticsEventCountAggregateInputType | true;
};
export interface AnalyticsEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsEvent'];
        meta: {
            name: 'AnalyticsEvent';
        };
    };
    findUnique<T extends AnalyticsEventFindUniqueArgs>(args: Prisma.SelectSubset<T, AnalyticsEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnalyticsEventClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnalyticsEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyticsEventClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnalyticsEventFindFirstArgs>(args?: Prisma.SelectSubset<T, AnalyticsEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnalyticsEventClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnalyticsEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnalyticsEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyticsEventClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnalyticsEventFindManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnalyticsEventCreateArgs>(args: Prisma.SelectSubset<T, AnalyticsEventCreateArgs<ExtArgs>>): Prisma.Prisma__AnalyticsEventClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnalyticsEventCreateManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnalyticsEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnalyticsEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnalyticsEventDeleteArgs>(args: Prisma.SelectSubset<T, AnalyticsEventDeleteArgs<ExtArgs>>): Prisma.Prisma__AnalyticsEventClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnalyticsEventUpdateArgs>(args: Prisma.SelectSubset<T, AnalyticsEventUpdateArgs<ExtArgs>>): Prisma.Prisma__AnalyticsEventClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnalyticsEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnalyticsEventUpdateManyArgs>(args: Prisma.SelectSubset<T, AnalyticsEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnalyticsEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnalyticsEventUpsertArgs>(args: Prisma.SelectSubset<T, AnalyticsEventUpsertArgs<ExtArgs>>): Prisma.Prisma__AnalyticsEventClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnalyticsEventCountArgs>(args?: Prisma.Subset<T, AnalyticsEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnalyticsEventCountAggregateOutputType> : number>;
    aggregate<T extends AnalyticsEventAggregateArgs>(args: Prisma.Subset<T, AnalyticsEventAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsEventAggregateType<T>>;
    groupBy<T extends AnalyticsEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnalyticsEventGroupByArgs['orderBy'];
    } : {
        orderBy?: AnalyticsEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnalyticsEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnalyticsEventFieldRefs;
}
export interface Prisma__AnalyticsEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.AnalyticsEvent$organizationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalyticsEvent$organizationArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    actor<T extends Prisma.AnalyticsEvent$actorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalyticsEvent$actorArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnalyticsEventFieldRefs {
    readonly id: Prisma.FieldRef<"AnalyticsEvent", 'String'>;
    readonly organizationId: Prisma.FieldRef<"AnalyticsEvent", 'String'>;
    readonly actorId: Prisma.FieldRef<"AnalyticsEvent", 'String'>;
    readonly eventName: Prisma.FieldRef<"AnalyticsEvent", 'String'>;
    readonly anonymousId: Prisma.FieldRef<"AnalyticsEvent", 'String'>;
    readonly properties: Prisma.FieldRef<"AnalyticsEvent", 'Json'>;
    readonly occurredAt: Prisma.FieldRef<"AnalyticsEvent", 'DateTime'>;
}
export type AnalyticsEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    where: Prisma.AnalyticsEventWhereUniqueInput;
};
export type AnalyticsEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    where: Prisma.AnalyticsEventWhereUniqueInput;
};
export type AnalyticsEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    where?: Prisma.AnalyticsEventWhereInput;
    orderBy?: Prisma.AnalyticsEventOrderByWithRelationInput | Prisma.AnalyticsEventOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsEventScalarFieldEnum | Prisma.AnalyticsEventScalarFieldEnum[];
};
export type AnalyticsEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    where?: Prisma.AnalyticsEventWhereInput;
    orderBy?: Prisma.AnalyticsEventOrderByWithRelationInput | Prisma.AnalyticsEventOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsEventScalarFieldEnum | Prisma.AnalyticsEventScalarFieldEnum[];
};
export type AnalyticsEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    where?: Prisma.AnalyticsEventWhereInput;
    orderBy?: Prisma.AnalyticsEventOrderByWithRelationInput | Prisma.AnalyticsEventOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsEventScalarFieldEnum | Prisma.AnalyticsEventScalarFieldEnum[];
};
export type AnalyticsEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyticsEventCreateInput, Prisma.AnalyticsEventUncheckedCreateInput>;
};
export type AnalyticsEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnalyticsEventCreateManyInput | Prisma.AnalyticsEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnalyticsEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    data: Prisma.AnalyticsEventCreateManyInput | Prisma.AnalyticsEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnalyticsEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnalyticsEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyticsEventUpdateInput, Prisma.AnalyticsEventUncheckedUpdateInput>;
    where: Prisma.AnalyticsEventWhereUniqueInput;
};
export type AnalyticsEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnalyticsEventUpdateManyMutationInput, Prisma.AnalyticsEventUncheckedUpdateManyInput>;
    where?: Prisma.AnalyticsEventWhereInput;
    limit?: number;
};
export type AnalyticsEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyticsEventUpdateManyMutationInput, Prisma.AnalyticsEventUncheckedUpdateManyInput>;
    where?: Prisma.AnalyticsEventWhereInput;
    limit?: number;
    include?: Prisma.AnalyticsEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnalyticsEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    where: Prisma.AnalyticsEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsEventCreateInput, Prisma.AnalyticsEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnalyticsEventUpdateInput, Prisma.AnalyticsEventUncheckedUpdateInput>;
};
export type AnalyticsEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    where: Prisma.AnalyticsEventWhereUniqueInput;
};
export type AnalyticsEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsEventWhereInput;
    limit?: number;
};
export type AnalyticsEvent$organizationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
};
export type AnalyticsEvent$actorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type AnalyticsEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
};

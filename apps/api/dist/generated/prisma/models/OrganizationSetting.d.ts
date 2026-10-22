import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganizationSettingModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationSettingPayload>;
export type AggregateOrganizationSetting = {
    _count: OrganizationSettingCountAggregateOutputType | null;
    _min: OrganizationSettingMinAggregateOutputType | null;
    _max: OrganizationSettingMaxAggregateOutputType | null;
};
export type OrganizationSettingMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    key: string | null;
    updatedAt: Date | null;
};
export type OrganizationSettingMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    key: string | null;
    updatedAt: Date | null;
};
export type OrganizationSettingCountAggregateOutputType = {
    id: number;
    organizationId: number;
    key: number;
    value: number;
    updatedAt: number;
    _all: number;
};
export type OrganizationSettingMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    key?: true;
    updatedAt?: true;
};
export type OrganizationSettingMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    key?: true;
    updatedAt?: true;
};
export type OrganizationSettingCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    key?: true;
    value?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganizationSettingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationSettingWhereInput;
    orderBy?: Prisma.OrganizationSettingOrderByWithRelationInput | Prisma.OrganizationSettingOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationSettingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationSettingCountAggregateInputType;
    _min?: OrganizationSettingMinAggregateInputType;
    _max?: OrganizationSettingMaxAggregateInputType;
};
export type GetOrganizationSettingAggregateType<T extends OrganizationSettingAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganizationSetting]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganizationSetting[P]> : Prisma.GetScalarType<T[P], AggregateOrganizationSetting[P]>;
};
export type OrganizationSettingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationSettingWhereInput;
    orderBy?: Prisma.OrganizationSettingOrderByWithAggregationInput | Prisma.OrganizationSettingOrderByWithAggregationInput[];
    by: Prisma.OrganizationSettingScalarFieldEnum[] | Prisma.OrganizationSettingScalarFieldEnum;
    having?: Prisma.OrganizationSettingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationSettingCountAggregateInputType | true;
    _min?: OrganizationSettingMinAggregateInputType;
    _max?: OrganizationSettingMaxAggregateInputType;
};
export type OrganizationSettingGroupByOutputType = {
    id: string;
    organizationId: string;
    key: string;
    value: runtime.JsonValue;
    updatedAt: Date;
    _count: OrganizationSettingCountAggregateOutputType | null;
    _min: OrganizationSettingMinAggregateOutputType | null;
    _max: OrganizationSettingMaxAggregateOutputType | null;
};
export type GetOrganizationSettingGroupByPayload<T extends OrganizationSettingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationSettingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationSettingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationSettingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationSettingGroupByOutputType[P]>;
}>>;
export type OrganizationSettingWhereInput = {
    AND?: Prisma.OrganizationSettingWhereInput | Prisma.OrganizationSettingWhereInput[];
    OR?: Prisma.OrganizationSettingWhereInput[];
    NOT?: Prisma.OrganizationSettingWhereInput | Prisma.OrganizationSettingWhereInput[];
    id?: Prisma.UuidFilter<"OrganizationSetting"> | string;
    organizationId?: Prisma.UuidFilter<"OrganizationSetting"> | string;
    key?: Prisma.StringFilter<"OrganizationSetting"> | string;
    value?: Prisma.JsonFilter<"OrganizationSetting">;
    updatedAt?: Prisma.DateTimeFilter<"OrganizationSetting"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type OrganizationSettingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type OrganizationSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organizationId_key?: Prisma.OrganizationSettingOrganizationIdKeyCompoundUniqueInput;
    AND?: Prisma.OrganizationSettingWhereInput | Prisma.OrganizationSettingWhereInput[];
    OR?: Prisma.OrganizationSettingWhereInput[];
    NOT?: Prisma.OrganizationSettingWhereInput | Prisma.OrganizationSettingWhereInput[];
    organizationId?: Prisma.UuidFilter<"OrganizationSetting"> | string;
    key?: Prisma.StringFilter<"OrganizationSetting"> | string;
    value?: Prisma.JsonFilter<"OrganizationSetting">;
    updatedAt?: Prisma.DateTimeFilter<"OrganizationSetting"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id" | "organizationId_key">;
export type OrganizationSettingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationSettingCountOrderByAggregateInput;
    _max?: Prisma.OrganizationSettingMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationSettingMinOrderByAggregateInput;
};
export type OrganizationSettingScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationSettingScalarWhereWithAggregatesInput | Prisma.OrganizationSettingScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationSettingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationSettingScalarWhereWithAggregatesInput | Prisma.OrganizationSettingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"OrganizationSetting"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"OrganizationSetting"> | string;
    key?: Prisma.StringWithAggregatesFilter<"OrganizationSetting"> | string;
    value?: Prisma.JsonWithAggregatesFilter<"OrganizationSetting">;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OrganizationSetting"> | Date | string;
};
export type OrganizationSettingCreateInput = {
    id?: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutSettingsInput;
};
export type OrganizationSettingUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type OrganizationSettingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutSettingsNestedInput;
};
export type OrganizationSettingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationSettingCreateManyInput = {
    id?: string;
    organizationId: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type OrganizationSettingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationSettingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationSettingListRelationFilter = {
    every?: Prisma.OrganizationSettingWhereInput;
    some?: Prisma.OrganizationSettingWhereInput;
    none?: Prisma.OrganizationSettingWhereInput;
};
export type OrganizationSettingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrganizationSettingOrganizationIdKeyCompoundUniqueInput = {
    organizationId: string;
    key: string;
};
export type OrganizationSettingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationSettingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationSettingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationSettingCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.OrganizationSettingCreateWithoutOrganizationInput, Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationSettingCreateWithoutOrganizationInput[] | Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationSettingCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationSettingCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationSettingCreateManyOrganizationInputEnvelope;
    connect?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
};
export type OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.OrganizationSettingCreateWithoutOrganizationInput, Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationSettingCreateWithoutOrganizationInput[] | Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationSettingCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationSettingCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationSettingCreateManyOrganizationInputEnvelope;
    connect?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
};
export type OrganizationSettingUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationSettingCreateWithoutOrganizationInput, Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationSettingCreateWithoutOrganizationInput[] | Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationSettingCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationSettingCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.OrganizationSettingUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationSettingUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationSettingCreateManyOrganizationInputEnvelope;
    set?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
    disconnect?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
    delete?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
    connect?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
    update?: Prisma.OrganizationSettingUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationSettingUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.OrganizationSettingUpdateManyWithWhereWithoutOrganizationInput | Prisma.OrganizationSettingUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.OrganizationSettingScalarWhereInput | Prisma.OrganizationSettingScalarWhereInput[];
};
export type OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationSettingCreateWithoutOrganizationInput, Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationSettingCreateWithoutOrganizationInput[] | Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationSettingCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationSettingCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.OrganizationSettingUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationSettingUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationSettingCreateManyOrganizationInputEnvelope;
    set?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
    disconnect?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
    delete?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
    connect?: Prisma.OrganizationSettingWhereUniqueInput | Prisma.OrganizationSettingWhereUniqueInput[];
    update?: Prisma.OrganizationSettingUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationSettingUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.OrganizationSettingUpdateManyWithWhereWithoutOrganizationInput | Prisma.OrganizationSettingUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.OrganizationSettingScalarWhereInput | Prisma.OrganizationSettingScalarWhereInput[];
};
export type OrganizationSettingCreateWithoutOrganizationInput = {
    id?: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type OrganizationSettingUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type OrganizationSettingCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.OrganizationSettingWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationSettingCreateWithoutOrganizationInput, Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput>;
};
export type OrganizationSettingCreateManyOrganizationInputEnvelope = {
    data: Prisma.OrganizationSettingCreateManyOrganizationInput | Prisma.OrganizationSettingCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type OrganizationSettingUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.OrganizationSettingWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrganizationSettingUpdateWithoutOrganizationInput, Prisma.OrganizationSettingUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.OrganizationSettingCreateWithoutOrganizationInput, Prisma.OrganizationSettingUncheckedCreateWithoutOrganizationInput>;
};
export type OrganizationSettingUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.OrganizationSettingWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrganizationSettingUpdateWithoutOrganizationInput, Prisma.OrganizationSettingUncheckedUpdateWithoutOrganizationInput>;
};
export type OrganizationSettingUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.OrganizationSettingScalarWhereInput;
    data: Prisma.XOR<Prisma.OrganizationSettingUpdateManyMutationInput, Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationInput>;
};
export type OrganizationSettingScalarWhereInput = {
    AND?: Prisma.OrganizationSettingScalarWhereInput | Prisma.OrganizationSettingScalarWhereInput[];
    OR?: Prisma.OrganizationSettingScalarWhereInput[];
    NOT?: Prisma.OrganizationSettingScalarWhereInput | Prisma.OrganizationSettingScalarWhereInput[];
    id?: Prisma.UuidFilter<"OrganizationSetting"> | string;
    organizationId?: Prisma.UuidFilter<"OrganizationSetting"> | string;
    key?: Prisma.StringFilter<"OrganizationSetting"> | string;
    value?: Prisma.JsonFilter<"OrganizationSetting">;
    updatedAt?: Prisma.DateTimeFilter<"OrganizationSetting"> | Date | string;
};
export type OrganizationSettingCreateManyOrganizationInput = {
    id?: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type OrganizationSettingUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationSettingUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationSettingUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationSettingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationSetting"]>;
export type OrganizationSettingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationSetting"]>;
export type OrganizationSettingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationSetting"]>;
export type OrganizationSettingSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
};
export type OrganizationSettingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "key" | "value" | "updatedAt", ExtArgs["result"]["organizationSetting"]>;
export type OrganizationSettingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type OrganizationSettingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type OrganizationSettingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $OrganizationSettingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrganizationSetting";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        key: string;
        value: runtime.JsonValue;
        updatedAt: Date;
    }, ExtArgs["result"]["organizationSetting"]>;
    composites: {};
};
export type OrganizationSettingGetPayload<S extends boolean | null | undefined | OrganizationSettingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload, S>;
export type OrganizationSettingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationSettingCountAggregateInputType | true;
};
export interface OrganizationSettingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrganizationSetting'];
        meta: {
            name: 'OrganizationSetting';
        };
    };
    findUnique<T extends OrganizationSettingFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationSettingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationSettingClient<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationSettingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationSettingClient<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationSettingFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationSettingFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationSettingClient<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationSettingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationSettingClient<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationSettingFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationSettingCreateArgs>(args: Prisma.SelectSubset<T, OrganizationSettingCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationSettingClient<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationSettingCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationSettingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationSettingDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationSettingDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationSettingClient<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationSettingUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationSettingUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationSettingClient<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationSettingDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationSettingUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationSettingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationSettingUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationSettingUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationSettingClient<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationSettingCountArgs>(args?: Prisma.Subset<T, OrganizationSettingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationSettingCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationSettingAggregateArgs>(args: Prisma.Subset<T, OrganizationSettingAggregateArgs>): Prisma.PrismaPromise<GetOrganizationSettingAggregateType<T>>;
    groupBy<T extends OrganizationSettingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationSettingGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationSettingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationSettingFieldRefs;
}
export interface Prisma__OrganizationSettingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationSettingFieldRefs {
    readonly id: Prisma.FieldRef<"OrganizationSetting", 'String'>;
    readonly organizationId: Prisma.FieldRef<"OrganizationSetting", 'String'>;
    readonly key: Prisma.FieldRef<"OrganizationSetting", 'String'>;
    readonly value: Prisma.FieldRef<"OrganizationSetting", 'Json'>;
    readonly updatedAt: Prisma.FieldRef<"OrganizationSetting", 'DateTime'>;
}
export type OrganizationSettingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    where: Prisma.OrganizationSettingWhereUniqueInput;
};
export type OrganizationSettingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    where: Prisma.OrganizationSettingWhereUniqueInput;
};
export type OrganizationSettingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    where?: Prisma.OrganizationSettingWhereInput;
    orderBy?: Prisma.OrganizationSettingOrderByWithRelationInput | Prisma.OrganizationSettingOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationSettingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationSettingScalarFieldEnum | Prisma.OrganizationSettingScalarFieldEnum[];
};
export type OrganizationSettingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    where?: Prisma.OrganizationSettingWhereInput;
    orderBy?: Prisma.OrganizationSettingOrderByWithRelationInput | Prisma.OrganizationSettingOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationSettingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationSettingScalarFieldEnum | Prisma.OrganizationSettingScalarFieldEnum[];
};
export type OrganizationSettingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    where?: Prisma.OrganizationSettingWhereInput;
    orderBy?: Prisma.OrganizationSettingOrderByWithRelationInput | Prisma.OrganizationSettingOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationSettingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationSettingScalarFieldEnum | Prisma.OrganizationSettingScalarFieldEnum[];
};
export type OrganizationSettingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationSettingCreateInput, Prisma.OrganizationSettingUncheckedCreateInput>;
};
export type OrganizationSettingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationSettingCreateManyInput | Prisma.OrganizationSettingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationSettingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    data: Prisma.OrganizationSettingCreateManyInput | Prisma.OrganizationSettingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrganizationSettingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrganizationSettingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationSettingUpdateInput, Prisma.OrganizationSettingUncheckedUpdateInput>;
    where: Prisma.OrganizationSettingWhereUniqueInput;
};
export type OrganizationSettingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationSettingUpdateManyMutationInput, Prisma.OrganizationSettingUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationSettingWhereInput;
    limit?: number;
};
export type OrganizationSettingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationSettingUpdateManyMutationInput, Prisma.OrganizationSettingUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationSettingWhereInput;
    limit?: number;
    include?: Prisma.OrganizationSettingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrganizationSettingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    where: Prisma.OrganizationSettingWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationSettingCreateInput, Prisma.OrganizationSettingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationSettingUpdateInput, Prisma.OrganizationSettingUncheckedUpdateInput>;
};
export type OrganizationSettingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    where: Prisma.OrganizationSettingWhereUniqueInput;
};
export type OrganizationSettingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationSettingWhereInput;
    limit?: number;
};
export type OrganizationSettingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
};

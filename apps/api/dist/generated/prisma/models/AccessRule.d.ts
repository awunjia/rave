import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AccessRuleModel = runtime.Types.Result.DefaultSelection<Prisma.$AccessRulePayload>;
export type AggregateAccessRule = {
    _count: AccessRuleCountAggregateOutputType | null;
    _min: AccessRuleMinAggregateOutputType | null;
    _max: AccessRuleMaxAggregateOutputType | null;
};
export type AccessRuleMinAggregateOutputType = {
    id: string | null;
    policyId: string | null;
    resource: string | null;
    action: string | null;
    createdAt: Date | null;
};
export type AccessRuleMaxAggregateOutputType = {
    id: string | null;
    policyId: string | null;
    resource: string | null;
    action: string | null;
    createdAt: Date | null;
};
export type AccessRuleCountAggregateOutputType = {
    id: number;
    policyId: number;
    resource: number;
    action: number;
    attributes: number;
    createdAt: number;
    _all: number;
};
export type AccessRuleMinAggregateInputType = {
    id?: true;
    policyId?: true;
    resource?: true;
    action?: true;
    createdAt?: true;
};
export type AccessRuleMaxAggregateInputType = {
    id?: true;
    policyId?: true;
    resource?: true;
    action?: true;
    createdAt?: true;
};
export type AccessRuleCountAggregateInputType = {
    id?: true;
    policyId?: true;
    resource?: true;
    action?: true;
    attributes?: true;
    createdAt?: true;
    _all?: true;
};
export type AccessRuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessRuleWhereInput;
    orderBy?: Prisma.AccessRuleOrderByWithRelationInput | Prisma.AccessRuleOrderByWithRelationInput[];
    cursor?: Prisma.AccessRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AccessRuleCountAggregateInputType;
    _min?: AccessRuleMinAggregateInputType;
    _max?: AccessRuleMaxAggregateInputType;
};
export type GetAccessRuleAggregateType<T extends AccessRuleAggregateArgs> = {
    [P in keyof T & keyof AggregateAccessRule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAccessRule[P]> : Prisma.GetScalarType<T[P], AggregateAccessRule[P]>;
};
export type AccessRuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessRuleWhereInput;
    orderBy?: Prisma.AccessRuleOrderByWithAggregationInput | Prisma.AccessRuleOrderByWithAggregationInput[];
    by: Prisma.AccessRuleScalarFieldEnum[] | Prisma.AccessRuleScalarFieldEnum;
    having?: Prisma.AccessRuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccessRuleCountAggregateInputType | true;
    _min?: AccessRuleMinAggregateInputType;
    _max?: AccessRuleMaxAggregateInputType;
};
export type AccessRuleGroupByOutputType = {
    id: string;
    policyId: string;
    resource: string;
    action: string;
    attributes: runtime.JsonValue;
    createdAt: Date;
    _count: AccessRuleCountAggregateOutputType | null;
    _min: AccessRuleMinAggregateOutputType | null;
    _max: AccessRuleMaxAggregateOutputType | null;
};
export type GetAccessRuleGroupByPayload<T extends AccessRuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AccessRuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AccessRuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AccessRuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AccessRuleGroupByOutputType[P]>;
}>>;
export type AccessRuleWhereInput = {
    AND?: Prisma.AccessRuleWhereInput | Prisma.AccessRuleWhereInput[];
    OR?: Prisma.AccessRuleWhereInput[];
    NOT?: Prisma.AccessRuleWhereInput | Prisma.AccessRuleWhereInput[];
    id?: Prisma.UuidFilter<"AccessRule"> | string;
    policyId?: Prisma.UuidFilter<"AccessRule"> | string;
    resource?: Prisma.StringFilter<"AccessRule"> | string;
    action?: Prisma.StringFilter<"AccessRule"> | string;
    attributes?: Prisma.JsonFilter<"AccessRule">;
    createdAt?: Prisma.DateTimeFilter<"AccessRule"> | Date | string;
    policy?: Prisma.XOR<Prisma.AccessPolicyScalarRelationFilter, Prisma.AccessPolicyWhereInput>;
};
export type AccessRuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    policy?: Prisma.AccessPolicyOrderByWithRelationInput;
};
export type AccessRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AccessRuleWhereInput | Prisma.AccessRuleWhereInput[];
    OR?: Prisma.AccessRuleWhereInput[];
    NOT?: Prisma.AccessRuleWhereInput | Prisma.AccessRuleWhereInput[];
    policyId?: Prisma.UuidFilter<"AccessRule"> | string;
    resource?: Prisma.StringFilter<"AccessRule"> | string;
    action?: Prisma.StringFilter<"AccessRule"> | string;
    attributes?: Prisma.JsonFilter<"AccessRule">;
    createdAt?: Prisma.DateTimeFilter<"AccessRule"> | Date | string;
    policy?: Prisma.XOR<Prisma.AccessPolicyScalarRelationFilter, Prisma.AccessPolicyWhereInput>;
}, "id">;
export type AccessRuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AccessRuleCountOrderByAggregateInput;
    _max?: Prisma.AccessRuleMaxOrderByAggregateInput;
    _min?: Prisma.AccessRuleMinOrderByAggregateInput;
};
export type AccessRuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.AccessRuleScalarWhereWithAggregatesInput | Prisma.AccessRuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.AccessRuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AccessRuleScalarWhereWithAggregatesInput | Prisma.AccessRuleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AccessRule"> | string;
    policyId?: Prisma.UuidWithAggregatesFilter<"AccessRule"> | string;
    resource?: Prisma.StringWithAggregatesFilter<"AccessRule"> | string;
    action?: Prisma.StringWithAggregatesFilter<"AccessRule"> | string;
    attributes?: Prisma.JsonWithAggregatesFilter<"AccessRule">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AccessRule"> | Date | string;
};
export type AccessRuleCreateInput = {
    id?: string;
    resource: string;
    action: string;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    policy: Prisma.AccessPolicyCreateNestedOneWithoutRulesInput;
};
export type AccessRuleUncheckedCreateInput = {
    id?: string;
    policyId: string;
    resource: string;
    action: string;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AccessRuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    policy?: Prisma.AccessPolicyUpdateOneRequiredWithoutRulesNestedInput;
};
export type AccessRuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policyId?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessRuleCreateManyInput = {
    id?: string;
    policyId: string;
    resource: string;
    action: string;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AccessRuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessRuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    policyId?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessRuleListRelationFilter = {
    every?: Prisma.AccessRuleWhereInput;
    some?: Prisma.AccessRuleWhereInput;
    none?: Prisma.AccessRuleWhereInput;
};
export type AccessRuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AccessRuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AccessRuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AccessRuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    policyId?: Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AccessRuleCreateNestedManyWithoutPolicyInput = {
    create?: Prisma.XOR<Prisma.AccessRuleCreateWithoutPolicyInput, Prisma.AccessRuleUncheckedCreateWithoutPolicyInput> | Prisma.AccessRuleCreateWithoutPolicyInput[] | Prisma.AccessRuleUncheckedCreateWithoutPolicyInput[];
    connectOrCreate?: Prisma.AccessRuleCreateOrConnectWithoutPolicyInput | Prisma.AccessRuleCreateOrConnectWithoutPolicyInput[];
    createMany?: Prisma.AccessRuleCreateManyPolicyInputEnvelope;
    connect?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
};
export type AccessRuleUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: Prisma.XOR<Prisma.AccessRuleCreateWithoutPolicyInput, Prisma.AccessRuleUncheckedCreateWithoutPolicyInput> | Prisma.AccessRuleCreateWithoutPolicyInput[] | Prisma.AccessRuleUncheckedCreateWithoutPolicyInput[];
    connectOrCreate?: Prisma.AccessRuleCreateOrConnectWithoutPolicyInput | Prisma.AccessRuleCreateOrConnectWithoutPolicyInput[];
    createMany?: Prisma.AccessRuleCreateManyPolicyInputEnvelope;
    connect?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
};
export type AccessRuleUpdateManyWithoutPolicyNestedInput = {
    create?: Prisma.XOR<Prisma.AccessRuleCreateWithoutPolicyInput, Prisma.AccessRuleUncheckedCreateWithoutPolicyInput> | Prisma.AccessRuleCreateWithoutPolicyInput[] | Prisma.AccessRuleUncheckedCreateWithoutPolicyInput[];
    connectOrCreate?: Prisma.AccessRuleCreateOrConnectWithoutPolicyInput | Prisma.AccessRuleCreateOrConnectWithoutPolicyInput[];
    upsert?: Prisma.AccessRuleUpsertWithWhereUniqueWithoutPolicyInput | Prisma.AccessRuleUpsertWithWhereUniqueWithoutPolicyInput[];
    createMany?: Prisma.AccessRuleCreateManyPolicyInputEnvelope;
    set?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
    disconnect?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
    delete?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
    connect?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
    update?: Prisma.AccessRuleUpdateWithWhereUniqueWithoutPolicyInput | Prisma.AccessRuleUpdateWithWhereUniqueWithoutPolicyInput[];
    updateMany?: Prisma.AccessRuleUpdateManyWithWhereWithoutPolicyInput | Prisma.AccessRuleUpdateManyWithWhereWithoutPolicyInput[];
    deleteMany?: Prisma.AccessRuleScalarWhereInput | Prisma.AccessRuleScalarWhereInput[];
};
export type AccessRuleUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: Prisma.XOR<Prisma.AccessRuleCreateWithoutPolicyInput, Prisma.AccessRuleUncheckedCreateWithoutPolicyInput> | Prisma.AccessRuleCreateWithoutPolicyInput[] | Prisma.AccessRuleUncheckedCreateWithoutPolicyInput[];
    connectOrCreate?: Prisma.AccessRuleCreateOrConnectWithoutPolicyInput | Prisma.AccessRuleCreateOrConnectWithoutPolicyInput[];
    upsert?: Prisma.AccessRuleUpsertWithWhereUniqueWithoutPolicyInput | Prisma.AccessRuleUpsertWithWhereUniqueWithoutPolicyInput[];
    createMany?: Prisma.AccessRuleCreateManyPolicyInputEnvelope;
    set?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
    disconnect?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
    delete?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
    connect?: Prisma.AccessRuleWhereUniqueInput | Prisma.AccessRuleWhereUniqueInput[];
    update?: Prisma.AccessRuleUpdateWithWhereUniqueWithoutPolicyInput | Prisma.AccessRuleUpdateWithWhereUniqueWithoutPolicyInput[];
    updateMany?: Prisma.AccessRuleUpdateManyWithWhereWithoutPolicyInput | Prisma.AccessRuleUpdateManyWithWhereWithoutPolicyInput[];
    deleteMany?: Prisma.AccessRuleScalarWhereInput | Prisma.AccessRuleScalarWhereInput[];
};
export type AccessRuleCreateWithoutPolicyInput = {
    id?: string;
    resource: string;
    action: string;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AccessRuleUncheckedCreateWithoutPolicyInput = {
    id?: string;
    resource: string;
    action: string;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AccessRuleCreateOrConnectWithoutPolicyInput = {
    where: Prisma.AccessRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessRuleCreateWithoutPolicyInput, Prisma.AccessRuleUncheckedCreateWithoutPolicyInput>;
};
export type AccessRuleCreateManyPolicyInputEnvelope = {
    data: Prisma.AccessRuleCreateManyPolicyInput | Prisma.AccessRuleCreateManyPolicyInput[];
    skipDuplicates?: boolean;
};
export type AccessRuleUpsertWithWhereUniqueWithoutPolicyInput = {
    where: Prisma.AccessRuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccessRuleUpdateWithoutPolicyInput, Prisma.AccessRuleUncheckedUpdateWithoutPolicyInput>;
    create: Prisma.XOR<Prisma.AccessRuleCreateWithoutPolicyInput, Prisma.AccessRuleUncheckedCreateWithoutPolicyInput>;
};
export type AccessRuleUpdateWithWhereUniqueWithoutPolicyInput = {
    where: Prisma.AccessRuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccessRuleUpdateWithoutPolicyInput, Prisma.AccessRuleUncheckedUpdateWithoutPolicyInput>;
};
export type AccessRuleUpdateManyWithWhereWithoutPolicyInput = {
    where: Prisma.AccessRuleScalarWhereInput;
    data: Prisma.XOR<Prisma.AccessRuleUpdateManyMutationInput, Prisma.AccessRuleUncheckedUpdateManyWithoutPolicyInput>;
};
export type AccessRuleScalarWhereInput = {
    AND?: Prisma.AccessRuleScalarWhereInput | Prisma.AccessRuleScalarWhereInput[];
    OR?: Prisma.AccessRuleScalarWhereInput[];
    NOT?: Prisma.AccessRuleScalarWhereInput | Prisma.AccessRuleScalarWhereInput[];
    id?: Prisma.UuidFilter<"AccessRule"> | string;
    policyId?: Prisma.UuidFilter<"AccessRule"> | string;
    resource?: Prisma.StringFilter<"AccessRule"> | string;
    action?: Prisma.StringFilter<"AccessRule"> | string;
    attributes?: Prisma.JsonFilter<"AccessRule">;
    createdAt?: Prisma.DateTimeFilter<"AccessRule"> | Date | string;
};
export type AccessRuleCreateManyPolicyInput = {
    id?: string;
    resource: string;
    action: string;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AccessRuleUpdateWithoutPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessRuleUncheckedUpdateWithoutPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessRuleUncheckedUpdateManyWithoutPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessRuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policyId?: boolean;
    resource?: boolean;
    action?: boolean;
    attributes?: boolean;
    createdAt?: boolean;
    policy?: boolean | Prisma.AccessPolicyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessRule"]>;
export type AccessRuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policyId?: boolean;
    resource?: boolean;
    action?: boolean;
    attributes?: boolean;
    createdAt?: boolean;
    policy?: boolean | Prisma.AccessPolicyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessRule"]>;
export type AccessRuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    policyId?: boolean;
    resource?: boolean;
    action?: boolean;
    attributes?: boolean;
    createdAt?: boolean;
    policy?: boolean | Prisma.AccessPolicyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessRule"]>;
export type AccessRuleSelectScalar = {
    id?: boolean;
    policyId?: boolean;
    resource?: boolean;
    action?: boolean;
    attributes?: boolean;
    createdAt?: boolean;
};
export type AccessRuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "policyId" | "resource" | "action" | "attributes" | "createdAt", ExtArgs["result"]["accessRule"]>;
export type AccessRuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    policy?: boolean | Prisma.AccessPolicyDefaultArgs<ExtArgs>;
};
export type AccessRuleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    policy?: boolean | Prisma.AccessPolicyDefaultArgs<ExtArgs>;
};
export type AccessRuleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    policy?: boolean | Prisma.AccessPolicyDefaultArgs<ExtArgs>;
};
export type $AccessRulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AccessRule";
    objects: {
        policy: Prisma.$AccessPolicyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        policyId: string;
        resource: string;
        action: string;
        attributes: runtime.JsonValue;
        createdAt: Date;
    }, ExtArgs["result"]["accessRule"]>;
    composites: {};
};
export type AccessRuleGetPayload<S extends boolean | null | undefined | AccessRuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AccessRulePayload, S>;
export type AccessRuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AccessRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccessRuleCountAggregateInputType | true;
};
export interface AccessRuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AccessRule'];
        meta: {
            name: 'AccessRule';
        };
    };
    findUnique<T extends AccessRuleFindUniqueArgs>(args: Prisma.SelectSubset<T, AccessRuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AccessRuleClient<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AccessRuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AccessRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccessRuleClient<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AccessRuleFindFirstArgs>(args?: Prisma.SelectSubset<T, AccessRuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__AccessRuleClient<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AccessRuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AccessRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccessRuleClient<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AccessRuleFindManyArgs>(args?: Prisma.SelectSubset<T, AccessRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AccessRuleCreateArgs>(args: Prisma.SelectSubset<T, AccessRuleCreateArgs<ExtArgs>>): Prisma.Prisma__AccessRuleClient<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AccessRuleCreateManyArgs>(args?: Prisma.SelectSubset<T, AccessRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AccessRuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AccessRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AccessRuleDeleteArgs>(args: Prisma.SelectSubset<T, AccessRuleDeleteArgs<ExtArgs>>): Prisma.Prisma__AccessRuleClient<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AccessRuleUpdateArgs>(args: Prisma.SelectSubset<T, AccessRuleUpdateArgs<ExtArgs>>): Prisma.Prisma__AccessRuleClient<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AccessRuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, AccessRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AccessRuleUpdateManyArgs>(args: Prisma.SelectSubset<T, AccessRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AccessRuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AccessRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AccessRuleUpsertArgs>(args: Prisma.SelectSubset<T, AccessRuleUpsertArgs<ExtArgs>>): Prisma.Prisma__AccessRuleClient<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AccessRuleCountArgs>(args?: Prisma.Subset<T, AccessRuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AccessRuleCountAggregateOutputType> : number>;
    aggregate<T extends AccessRuleAggregateArgs>(args: Prisma.Subset<T, AccessRuleAggregateArgs>): Prisma.PrismaPromise<GetAccessRuleAggregateType<T>>;
    groupBy<T extends AccessRuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AccessRuleGroupByArgs['orderBy'];
    } : {
        orderBy?: AccessRuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AccessRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AccessRuleFieldRefs;
}
export interface Prisma__AccessRuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    policy<T extends Prisma.AccessPolicyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccessPolicyDefaultArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AccessRuleFieldRefs {
    readonly id: Prisma.FieldRef<"AccessRule", 'String'>;
    readonly policyId: Prisma.FieldRef<"AccessRule", 'String'>;
    readonly resource: Prisma.FieldRef<"AccessRule", 'String'>;
    readonly action: Prisma.FieldRef<"AccessRule", 'String'>;
    readonly attributes: Prisma.FieldRef<"AccessRule", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"AccessRule", 'DateTime'>;
}
export type AccessRuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    where: Prisma.AccessRuleWhereUniqueInput;
};
export type AccessRuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    where: Prisma.AccessRuleWhereUniqueInput;
};
export type AccessRuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    where?: Prisma.AccessRuleWhereInput;
    orderBy?: Prisma.AccessRuleOrderByWithRelationInput | Prisma.AccessRuleOrderByWithRelationInput[];
    cursor?: Prisma.AccessRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessRuleScalarFieldEnum | Prisma.AccessRuleScalarFieldEnum[];
};
export type AccessRuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    where?: Prisma.AccessRuleWhereInput;
    orderBy?: Prisma.AccessRuleOrderByWithRelationInput | Prisma.AccessRuleOrderByWithRelationInput[];
    cursor?: Prisma.AccessRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessRuleScalarFieldEnum | Prisma.AccessRuleScalarFieldEnum[];
};
export type AccessRuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    where?: Prisma.AccessRuleWhereInput;
    orderBy?: Prisma.AccessRuleOrderByWithRelationInput | Prisma.AccessRuleOrderByWithRelationInput[];
    cursor?: Prisma.AccessRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessRuleScalarFieldEnum | Prisma.AccessRuleScalarFieldEnum[];
};
export type AccessRuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccessRuleCreateInput, Prisma.AccessRuleUncheckedCreateInput>;
};
export type AccessRuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AccessRuleCreateManyInput | Prisma.AccessRuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AccessRuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    data: Prisma.AccessRuleCreateManyInput | Prisma.AccessRuleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AccessRuleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AccessRuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccessRuleUpdateInput, Prisma.AccessRuleUncheckedUpdateInput>;
    where: Prisma.AccessRuleWhereUniqueInput;
};
export type AccessRuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AccessRuleUpdateManyMutationInput, Prisma.AccessRuleUncheckedUpdateManyInput>;
    where?: Prisma.AccessRuleWhereInput;
    limit?: number;
};
export type AccessRuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccessRuleUpdateManyMutationInput, Prisma.AccessRuleUncheckedUpdateManyInput>;
    where?: Prisma.AccessRuleWhereInput;
    limit?: number;
    include?: Prisma.AccessRuleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AccessRuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    where: Prisma.AccessRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessRuleCreateInput, Prisma.AccessRuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AccessRuleUpdateInput, Prisma.AccessRuleUncheckedUpdateInput>;
};
export type AccessRuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
    where: Prisma.AccessRuleWhereUniqueInput;
};
export type AccessRuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessRuleWhereInput;
    limit?: number;
};
export type AccessRuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessRuleSelect<ExtArgs> | null;
    omit?: Prisma.AccessRuleOmit<ExtArgs> | null;
    include?: Prisma.AccessRuleInclude<ExtArgs> | null;
};

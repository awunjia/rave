import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AccessPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$AccessPolicyPayload>;
export type AggregateAccessPolicy = {
    _count: AccessPolicyCountAggregateOutputType | null;
    _min: AccessPolicyMinAggregateOutputType | null;
    _max: AccessPolicyMaxAggregateOutputType | null;
};
export type AccessPolicyMinAggregateOutputType = {
    id: string | null;
    key: string | null;
    description: string | null;
    isActive: boolean | null;
    effect: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AccessPolicyMaxAggregateOutputType = {
    id: string | null;
    key: string | null;
    description: string | null;
    isActive: boolean | null;
    effect: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AccessPolicyCountAggregateOutputType = {
    id: number;
    key: number;
    description: number;
    isActive: number;
    effect: number;
    conditions: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AccessPolicyMinAggregateInputType = {
    id?: true;
    key?: true;
    description?: true;
    isActive?: true;
    effect?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AccessPolicyMaxAggregateInputType = {
    id?: true;
    key?: true;
    description?: true;
    isActive?: true;
    effect?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AccessPolicyCountAggregateInputType = {
    id?: true;
    key?: true;
    description?: true;
    isActive?: true;
    effect?: true;
    conditions?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AccessPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessPolicyWhereInput;
    orderBy?: Prisma.AccessPolicyOrderByWithRelationInput | Prisma.AccessPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AccessPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AccessPolicyCountAggregateInputType;
    _min?: AccessPolicyMinAggregateInputType;
    _max?: AccessPolicyMaxAggregateInputType;
};
export type GetAccessPolicyAggregateType<T extends AccessPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateAccessPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAccessPolicy[P]> : Prisma.GetScalarType<T[P], AggregateAccessPolicy[P]>;
};
export type AccessPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessPolicyWhereInput;
    orderBy?: Prisma.AccessPolicyOrderByWithAggregationInput | Prisma.AccessPolicyOrderByWithAggregationInput[];
    by: Prisma.AccessPolicyScalarFieldEnum[] | Prisma.AccessPolicyScalarFieldEnum;
    having?: Prisma.AccessPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccessPolicyCountAggregateInputType | true;
    _min?: AccessPolicyMinAggregateInputType;
    _max?: AccessPolicyMaxAggregateInputType;
};
export type AccessPolicyGroupByOutputType = {
    id: string;
    key: string;
    description: string | null;
    isActive: boolean;
    effect: string;
    conditions: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: AccessPolicyCountAggregateOutputType | null;
    _min: AccessPolicyMinAggregateOutputType | null;
    _max: AccessPolicyMaxAggregateOutputType | null;
};
export type GetAccessPolicyGroupByPayload<T extends AccessPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AccessPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AccessPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AccessPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AccessPolicyGroupByOutputType[P]>;
}>>;
export type AccessPolicyWhereInput = {
    AND?: Prisma.AccessPolicyWhereInput | Prisma.AccessPolicyWhereInput[];
    OR?: Prisma.AccessPolicyWhereInput[];
    NOT?: Prisma.AccessPolicyWhereInput | Prisma.AccessPolicyWhereInput[];
    id?: Prisma.UuidFilter<"AccessPolicy"> | string;
    key?: Prisma.StringFilter<"AccessPolicy"> | string;
    description?: Prisma.StringNullableFilter<"AccessPolicy"> | string | null;
    isActive?: Prisma.BoolFilter<"AccessPolicy"> | boolean;
    effect?: Prisma.StringFilter<"AccessPolicy"> | string;
    conditions?: Prisma.JsonFilter<"AccessPolicy">;
    createdAt?: Prisma.DateTimeFilter<"AccessPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AccessPolicy"> | Date | string;
    rules?: Prisma.AccessRuleListRelationFilter;
};
export type AccessPolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effect?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rules?: Prisma.AccessRuleOrderByRelationAggregateInput;
};
export type AccessPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    key?: string;
    AND?: Prisma.AccessPolicyWhereInput | Prisma.AccessPolicyWhereInput[];
    OR?: Prisma.AccessPolicyWhereInput[];
    NOT?: Prisma.AccessPolicyWhereInput | Prisma.AccessPolicyWhereInput[];
    description?: Prisma.StringNullableFilter<"AccessPolicy"> | string | null;
    isActive?: Prisma.BoolFilter<"AccessPolicy"> | boolean;
    effect?: Prisma.StringFilter<"AccessPolicy"> | string;
    conditions?: Prisma.JsonFilter<"AccessPolicy">;
    createdAt?: Prisma.DateTimeFilter<"AccessPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AccessPolicy"> | Date | string;
    rules?: Prisma.AccessRuleListRelationFilter;
}, "id" | "key">;
export type AccessPolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effect?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AccessPolicyCountOrderByAggregateInput;
    _max?: Prisma.AccessPolicyMaxOrderByAggregateInput;
    _min?: Prisma.AccessPolicyMinOrderByAggregateInput;
};
export type AccessPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.AccessPolicyScalarWhereWithAggregatesInput | Prisma.AccessPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.AccessPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AccessPolicyScalarWhereWithAggregatesInput | Prisma.AccessPolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AccessPolicy"> | string;
    key?: Prisma.StringWithAggregatesFilter<"AccessPolicy"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"AccessPolicy"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"AccessPolicy"> | boolean;
    effect?: Prisma.StringWithAggregatesFilter<"AccessPolicy"> | string;
    conditions?: Prisma.JsonWithAggregatesFilter<"AccessPolicy">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AccessPolicy"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AccessPolicy"> | Date | string;
};
export type AccessPolicyCreateInput = {
    id?: string;
    key: string;
    description?: string | null;
    isActive?: boolean;
    effect?: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rules?: Prisma.AccessRuleCreateNestedManyWithoutPolicyInput;
};
export type AccessPolicyUncheckedCreateInput = {
    id?: string;
    key: string;
    description?: string | null;
    isActive?: boolean;
    effect?: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rules?: Prisma.AccessRuleUncheckedCreateNestedManyWithoutPolicyInput;
};
export type AccessPolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effect?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rules?: Prisma.AccessRuleUpdateManyWithoutPolicyNestedInput;
};
export type AccessPolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effect?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rules?: Prisma.AccessRuleUncheckedUpdateManyWithoutPolicyNestedInput;
};
export type AccessPolicyCreateManyInput = {
    id?: string;
    key: string;
    description?: string | null;
    isActive?: boolean;
    effect?: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AccessPolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effect?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessPolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effect?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessPolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effect?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AccessPolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effect?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AccessPolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    effect?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AccessPolicyScalarRelationFilter = {
    is?: Prisma.AccessPolicyWhereInput;
    isNot?: Prisma.AccessPolicyWhereInput;
};
export type AccessPolicyCreateNestedOneWithoutRulesInput = {
    create?: Prisma.XOR<Prisma.AccessPolicyCreateWithoutRulesInput, Prisma.AccessPolicyUncheckedCreateWithoutRulesInput>;
    connectOrCreate?: Prisma.AccessPolicyCreateOrConnectWithoutRulesInput;
    connect?: Prisma.AccessPolicyWhereUniqueInput;
};
export type AccessPolicyUpdateOneRequiredWithoutRulesNestedInput = {
    create?: Prisma.XOR<Prisma.AccessPolicyCreateWithoutRulesInput, Prisma.AccessPolicyUncheckedCreateWithoutRulesInput>;
    connectOrCreate?: Prisma.AccessPolicyCreateOrConnectWithoutRulesInput;
    upsert?: Prisma.AccessPolicyUpsertWithoutRulesInput;
    connect?: Prisma.AccessPolicyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccessPolicyUpdateToOneWithWhereWithoutRulesInput, Prisma.AccessPolicyUpdateWithoutRulesInput>, Prisma.AccessPolicyUncheckedUpdateWithoutRulesInput>;
};
export type AccessPolicyCreateWithoutRulesInput = {
    id?: string;
    key: string;
    description?: string | null;
    isActive?: boolean;
    effect?: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AccessPolicyUncheckedCreateWithoutRulesInput = {
    id?: string;
    key: string;
    description?: string | null;
    isActive?: boolean;
    effect?: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AccessPolicyCreateOrConnectWithoutRulesInput = {
    where: Prisma.AccessPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessPolicyCreateWithoutRulesInput, Prisma.AccessPolicyUncheckedCreateWithoutRulesInput>;
};
export type AccessPolicyUpsertWithoutRulesInput = {
    update: Prisma.XOR<Prisma.AccessPolicyUpdateWithoutRulesInput, Prisma.AccessPolicyUncheckedUpdateWithoutRulesInput>;
    create: Prisma.XOR<Prisma.AccessPolicyCreateWithoutRulesInput, Prisma.AccessPolicyUncheckedCreateWithoutRulesInput>;
    where?: Prisma.AccessPolicyWhereInput;
};
export type AccessPolicyUpdateToOneWithWhereWithoutRulesInput = {
    where?: Prisma.AccessPolicyWhereInput;
    data: Prisma.XOR<Prisma.AccessPolicyUpdateWithoutRulesInput, Prisma.AccessPolicyUncheckedUpdateWithoutRulesInput>;
};
export type AccessPolicyUpdateWithoutRulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effect?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessPolicyUncheckedUpdateWithoutRulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    effect?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AccessPolicyCountOutputType = {
    rules: number;
};
export type AccessPolicyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rules?: boolean | AccessPolicyCountOutputTypeCountRulesArgs;
};
export type AccessPolicyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicyCountOutputTypeSelect<ExtArgs> | null;
};
export type AccessPolicyCountOutputTypeCountRulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessRuleWhereInput;
};
export type AccessPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    description?: boolean;
    isActive?: boolean;
    effect?: boolean;
    conditions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rules?: boolean | Prisma.AccessPolicy$rulesArgs<ExtArgs>;
    _count?: boolean | Prisma.AccessPolicyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accessPolicy"]>;
export type AccessPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    description?: boolean;
    isActive?: boolean;
    effect?: boolean;
    conditions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["accessPolicy"]>;
export type AccessPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    description?: boolean;
    isActive?: boolean;
    effect?: boolean;
    conditions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["accessPolicy"]>;
export type AccessPolicySelectScalar = {
    id?: boolean;
    key?: boolean;
    description?: boolean;
    isActive?: boolean;
    effect?: boolean;
    conditions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AccessPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "description" | "isActive" | "effect" | "conditions" | "createdAt" | "updatedAt", ExtArgs["result"]["accessPolicy"]>;
export type AccessPolicyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rules?: boolean | Prisma.AccessPolicy$rulesArgs<ExtArgs>;
    _count?: boolean | Prisma.AccessPolicyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AccessPolicyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AccessPolicyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AccessPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AccessPolicy";
    objects: {
        rules: Prisma.$AccessRulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        key: string;
        description: string | null;
        isActive: boolean;
        effect: string;
        conditions: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["accessPolicy"]>;
    composites: {};
};
export type AccessPolicyGetPayload<S extends boolean | null | undefined | AccessPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload, S>;
export type AccessPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AccessPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccessPolicyCountAggregateInputType | true;
};
export interface AccessPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AccessPolicy'];
        meta: {
            name: 'AccessPolicy';
        };
    };
    findUnique<T extends AccessPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, AccessPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AccessPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AccessPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AccessPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, AccessPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AccessPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AccessPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AccessPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, AccessPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AccessPolicyCreateArgs>(args: Prisma.SelectSubset<T, AccessPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AccessPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, AccessPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AccessPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AccessPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AccessPolicyDeleteArgs>(args: Prisma.SelectSubset<T, AccessPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AccessPolicyUpdateArgs>(args: Prisma.SelectSubset<T, AccessPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AccessPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, AccessPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AccessPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, AccessPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AccessPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AccessPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AccessPolicyUpsertArgs>(args: Prisma.SelectSubset<T, AccessPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__AccessPolicyClient<runtime.Types.Result.GetResult<Prisma.$AccessPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AccessPolicyCountArgs>(args?: Prisma.Subset<T, AccessPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AccessPolicyCountAggregateOutputType> : number>;
    aggregate<T extends AccessPolicyAggregateArgs>(args: Prisma.Subset<T, AccessPolicyAggregateArgs>): Prisma.PrismaPromise<GetAccessPolicyAggregateType<T>>;
    groupBy<T extends AccessPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AccessPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: AccessPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AccessPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AccessPolicyFieldRefs;
}
export interface Prisma__AccessPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rules<T extends Prisma.AccessPolicy$rulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccessPolicy$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AccessPolicyFieldRefs {
    readonly id: Prisma.FieldRef<"AccessPolicy", 'String'>;
    readonly key: Prisma.FieldRef<"AccessPolicy", 'String'>;
    readonly description: Prisma.FieldRef<"AccessPolicy", 'String'>;
    readonly isActive: Prisma.FieldRef<"AccessPolicy", 'Boolean'>;
    readonly effect: Prisma.FieldRef<"AccessPolicy", 'String'>;
    readonly conditions: Prisma.FieldRef<"AccessPolicy", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"AccessPolicy", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AccessPolicy", 'DateTime'>;
}
export type AccessPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    where: Prisma.AccessPolicyWhereUniqueInput;
};
export type AccessPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    where: Prisma.AccessPolicyWhereUniqueInput;
};
export type AccessPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    where?: Prisma.AccessPolicyWhereInput;
    orderBy?: Prisma.AccessPolicyOrderByWithRelationInput | Prisma.AccessPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AccessPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessPolicyScalarFieldEnum | Prisma.AccessPolicyScalarFieldEnum[];
};
export type AccessPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    where?: Prisma.AccessPolicyWhereInput;
    orderBy?: Prisma.AccessPolicyOrderByWithRelationInput | Prisma.AccessPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AccessPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessPolicyScalarFieldEnum | Prisma.AccessPolicyScalarFieldEnum[];
};
export type AccessPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    where?: Prisma.AccessPolicyWhereInput;
    orderBy?: Prisma.AccessPolicyOrderByWithRelationInput | Prisma.AccessPolicyOrderByWithRelationInput[];
    cursor?: Prisma.AccessPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccessPolicyScalarFieldEnum | Prisma.AccessPolicyScalarFieldEnum[];
};
export type AccessPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccessPolicyCreateInput, Prisma.AccessPolicyUncheckedCreateInput>;
};
export type AccessPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AccessPolicyCreateManyInput | Prisma.AccessPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AccessPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    data: Prisma.AccessPolicyCreateManyInput | Prisma.AccessPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AccessPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccessPolicyUpdateInput, Prisma.AccessPolicyUncheckedUpdateInput>;
    where: Prisma.AccessPolicyWhereUniqueInput;
};
export type AccessPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AccessPolicyUpdateManyMutationInput, Prisma.AccessPolicyUncheckedUpdateManyInput>;
    where?: Prisma.AccessPolicyWhereInput;
    limit?: number;
};
export type AccessPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccessPolicyUpdateManyMutationInput, Prisma.AccessPolicyUncheckedUpdateManyInput>;
    where?: Prisma.AccessPolicyWhereInput;
    limit?: number;
};
export type AccessPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    where: Prisma.AccessPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccessPolicyCreateInput, Prisma.AccessPolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AccessPolicyUpdateInput, Prisma.AccessPolicyUncheckedUpdateInput>;
};
export type AccessPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
    where: Prisma.AccessPolicyWhereUniqueInput;
};
export type AccessPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccessPolicyWhereInput;
    limit?: number;
};
export type AccessPolicy$rulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AccessPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccessPolicySelect<ExtArgs> | null;
    omit?: Prisma.AccessPolicyOmit<ExtArgs> | null;
    include?: Prisma.AccessPolicyInclude<ExtArgs> | null;
};

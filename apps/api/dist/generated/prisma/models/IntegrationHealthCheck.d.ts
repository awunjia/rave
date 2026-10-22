import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IntegrationHealthCheckModel = runtime.Types.Result.DefaultSelection<Prisma.$IntegrationHealthCheckPayload>;
export type AggregateIntegrationHealthCheck = {
    _count: IntegrationHealthCheckCountAggregateOutputType | null;
    _avg: IntegrationHealthCheckAvgAggregateOutputType | null;
    _sum: IntegrationHealthCheckSumAggregateOutputType | null;
    _min: IntegrationHealthCheckMinAggregateOutputType | null;
    _max: IntegrationHealthCheckMaxAggregateOutputType | null;
};
export type IntegrationHealthCheckAvgAggregateOutputType = {
    latencyMs: number | null;
};
export type IntegrationHealthCheckSumAggregateOutputType = {
    latencyMs: number | null;
};
export type IntegrationHealthCheckMinAggregateOutputType = {
    id: string | null;
    integration: string | null;
    isHealthy: boolean | null;
    latencyMs: number | null;
    message: string | null;
    checkedAt: Date | null;
};
export type IntegrationHealthCheckMaxAggregateOutputType = {
    id: string | null;
    integration: string | null;
    isHealthy: boolean | null;
    latencyMs: number | null;
    message: string | null;
    checkedAt: Date | null;
};
export type IntegrationHealthCheckCountAggregateOutputType = {
    id: number;
    integration: number;
    isHealthy: number;
    latencyMs: number;
    message: number;
    checkedAt: number;
    _all: number;
};
export type IntegrationHealthCheckAvgAggregateInputType = {
    latencyMs?: true;
};
export type IntegrationHealthCheckSumAggregateInputType = {
    latencyMs?: true;
};
export type IntegrationHealthCheckMinAggregateInputType = {
    id?: true;
    integration?: true;
    isHealthy?: true;
    latencyMs?: true;
    message?: true;
    checkedAt?: true;
};
export type IntegrationHealthCheckMaxAggregateInputType = {
    id?: true;
    integration?: true;
    isHealthy?: true;
    latencyMs?: true;
    message?: true;
    checkedAt?: true;
};
export type IntegrationHealthCheckCountAggregateInputType = {
    id?: true;
    integration?: true;
    isHealthy?: true;
    latencyMs?: true;
    message?: true;
    checkedAt?: true;
    _all?: true;
};
export type IntegrationHealthCheckAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntegrationHealthCheckWhereInput;
    orderBy?: Prisma.IntegrationHealthCheckOrderByWithRelationInput | Prisma.IntegrationHealthCheckOrderByWithRelationInput[];
    cursor?: Prisma.IntegrationHealthCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IntegrationHealthCheckCountAggregateInputType;
    _avg?: IntegrationHealthCheckAvgAggregateInputType;
    _sum?: IntegrationHealthCheckSumAggregateInputType;
    _min?: IntegrationHealthCheckMinAggregateInputType;
    _max?: IntegrationHealthCheckMaxAggregateInputType;
};
export type GetIntegrationHealthCheckAggregateType<T extends IntegrationHealthCheckAggregateArgs> = {
    [P in keyof T & keyof AggregateIntegrationHealthCheck]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIntegrationHealthCheck[P]> : Prisma.GetScalarType<T[P], AggregateIntegrationHealthCheck[P]>;
};
export type IntegrationHealthCheckGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntegrationHealthCheckWhereInput;
    orderBy?: Prisma.IntegrationHealthCheckOrderByWithAggregationInput | Prisma.IntegrationHealthCheckOrderByWithAggregationInput[];
    by: Prisma.IntegrationHealthCheckScalarFieldEnum[] | Prisma.IntegrationHealthCheckScalarFieldEnum;
    having?: Prisma.IntegrationHealthCheckScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IntegrationHealthCheckCountAggregateInputType | true;
    _avg?: IntegrationHealthCheckAvgAggregateInputType;
    _sum?: IntegrationHealthCheckSumAggregateInputType;
    _min?: IntegrationHealthCheckMinAggregateInputType;
    _max?: IntegrationHealthCheckMaxAggregateInputType;
};
export type IntegrationHealthCheckGroupByOutputType = {
    id: string;
    integration: string;
    isHealthy: boolean;
    latencyMs: number | null;
    message: string | null;
    checkedAt: Date;
    _count: IntegrationHealthCheckCountAggregateOutputType | null;
    _avg: IntegrationHealthCheckAvgAggregateOutputType | null;
    _sum: IntegrationHealthCheckSumAggregateOutputType | null;
    _min: IntegrationHealthCheckMinAggregateOutputType | null;
    _max: IntegrationHealthCheckMaxAggregateOutputType | null;
};
export type GetIntegrationHealthCheckGroupByPayload<T extends IntegrationHealthCheckGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IntegrationHealthCheckGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IntegrationHealthCheckGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IntegrationHealthCheckGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IntegrationHealthCheckGroupByOutputType[P]>;
}>>;
export type IntegrationHealthCheckWhereInput = {
    AND?: Prisma.IntegrationHealthCheckWhereInput | Prisma.IntegrationHealthCheckWhereInput[];
    OR?: Prisma.IntegrationHealthCheckWhereInput[];
    NOT?: Prisma.IntegrationHealthCheckWhereInput | Prisma.IntegrationHealthCheckWhereInput[];
    id?: Prisma.UuidFilter<"IntegrationHealthCheck"> | string;
    integration?: Prisma.StringFilter<"IntegrationHealthCheck"> | string;
    isHealthy?: Prisma.BoolFilter<"IntegrationHealthCheck"> | boolean;
    latencyMs?: Prisma.IntNullableFilter<"IntegrationHealthCheck"> | number | null;
    message?: Prisma.StringNullableFilter<"IntegrationHealthCheck"> | string | null;
    checkedAt?: Prisma.DateTimeFilter<"IntegrationHealthCheck"> | Date | string;
};
export type IntegrationHealthCheckOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    integration?: Prisma.SortOrder;
    isHealthy?: Prisma.SortOrder;
    latencyMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
};
export type IntegrationHealthCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.IntegrationHealthCheckWhereInput | Prisma.IntegrationHealthCheckWhereInput[];
    OR?: Prisma.IntegrationHealthCheckWhereInput[];
    NOT?: Prisma.IntegrationHealthCheckWhereInput | Prisma.IntegrationHealthCheckWhereInput[];
    integration?: Prisma.StringFilter<"IntegrationHealthCheck"> | string;
    isHealthy?: Prisma.BoolFilter<"IntegrationHealthCheck"> | boolean;
    latencyMs?: Prisma.IntNullableFilter<"IntegrationHealthCheck"> | number | null;
    message?: Prisma.StringNullableFilter<"IntegrationHealthCheck"> | string | null;
    checkedAt?: Prisma.DateTimeFilter<"IntegrationHealthCheck"> | Date | string;
}, "id">;
export type IntegrationHealthCheckOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    integration?: Prisma.SortOrder;
    isHealthy?: Prisma.SortOrder;
    latencyMs?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
    _count?: Prisma.IntegrationHealthCheckCountOrderByAggregateInput;
    _avg?: Prisma.IntegrationHealthCheckAvgOrderByAggregateInput;
    _max?: Prisma.IntegrationHealthCheckMaxOrderByAggregateInput;
    _min?: Prisma.IntegrationHealthCheckMinOrderByAggregateInput;
    _sum?: Prisma.IntegrationHealthCheckSumOrderByAggregateInput;
};
export type IntegrationHealthCheckScalarWhereWithAggregatesInput = {
    AND?: Prisma.IntegrationHealthCheckScalarWhereWithAggregatesInput | Prisma.IntegrationHealthCheckScalarWhereWithAggregatesInput[];
    OR?: Prisma.IntegrationHealthCheckScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IntegrationHealthCheckScalarWhereWithAggregatesInput | Prisma.IntegrationHealthCheckScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"IntegrationHealthCheck"> | string;
    integration?: Prisma.StringWithAggregatesFilter<"IntegrationHealthCheck"> | string;
    isHealthy?: Prisma.BoolWithAggregatesFilter<"IntegrationHealthCheck"> | boolean;
    latencyMs?: Prisma.IntNullableWithAggregatesFilter<"IntegrationHealthCheck"> | number | null;
    message?: Prisma.StringNullableWithAggregatesFilter<"IntegrationHealthCheck"> | string | null;
    checkedAt?: Prisma.DateTimeWithAggregatesFilter<"IntegrationHealthCheck"> | Date | string;
};
export type IntegrationHealthCheckCreateInput = {
    id?: string;
    integration: string;
    isHealthy: boolean;
    latencyMs?: number | null;
    message?: string | null;
    checkedAt?: Date | string;
};
export type IntegrationHealthCheckUncheckedCreateInput = {
    id?: string;
    integration: string;
    isHealthy: boolean;
    latencyMs?: number | null;
    message?: string | null;
    checkedAt?: Date | string;
};
export type IntegrationHealthCheckUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    integration?: Prisma.StringFieldUpdateOperationsInput | string;
    isHealthy?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latencyMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationHealthCheckUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    integration?: Prisma.StringFieldUpdateOperationsInput | string;
    isHealthy?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latencyMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationHealthCheckCreateManyInput = {
    id?: string;
    integration: string;
    isHealthy: boolean;
    latencyMs?: number | null;
    message?: string | null;
    checkedAt?: Date | string;
};
export type IntegrationHealthCheckUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    integration?: Prisma.StringFieldUpdateOperationsInput | string;
    isHealthy?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latencyMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationHealthCheckUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    integration?: Prisma.StringFieldUpdateOperationsInput | string;
    isHealthy?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    latencyMs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IntegrationHealthCheckCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    integration?: Prisma.SortOrder;
    isHealthy?: Prisma.SortOrder;
    latencyMs?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
};
export type IntegrationHealthCheckAvgOrderByAggregateInput = {
    latencyMs?: Prisma.SortOrder;
};
export type IntegrationHealthCheckMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    integration?: Prisma.SortOrder;
    isHealthy?: Prisma.SortOrder;
    latencyMs?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
};
export type IntegrationHealthCheckMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    integration?: Prisma.SortOrder;
    isHealthy?: Prisma.SortOrder;
    latencyMs?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    checkedAt?: Prisma.SortOrder;
};
export type IntegrationHealthCheckSumOrderByAggregateInput = {
    latencyMs?: Prisma.SortOrder;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntegrationHealthCheckSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    integration?: boolean;
    isHealthy?: boolean;
    latencyMs?: boolean;
    message?: boolean;
    checkedAt?: boolean;
}, ExtArgs["result"]["integrationHealthCheck"]>;
export type IntegrationHealthCheckSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    integration?: boolean;
    isHealthy?: boolean;
    latencyMs?: boolean;
    message?: boolean;
    checkedAt?: boolean;
}, ExtArgs["result"]["integrationHealthCheck"]>;
export type IntegrationHealthCheckSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    integration?: boolean;
    isHealthy?: boolean;
    latencyMs?: boolean;
    message?: boolean;
    checkedAt?: boolean;
}, ExtArgs["result"]["integrationHealthCheck"]>;
export type IntegrationHealthCheckSelectScalar = {
    id?: boolean;
    integration?: boolean;
    isHealthy?: boolean;
    latencyMs?: boolean;
    message?: boolean;
    checkedAt?: boolean;
};
export type IntegrationHealthCheckOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "integration" | "isHealthy" | "latencyMs" | "message" | "checkedAt", ExtArgs["result"]["integrationHealthCheck"]>;
export type $IntegrationHealthCheckPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IntegrationHealthCheck";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        integration: string;
        isHealthy: boolean;
        latencyMs: number | null;
        message: string | null;
        checkedAt: Date;
    }, ExtArgs["result"]["integrationHealthCheck"]>;
    composites: {};
};
export type IntegrationHealthCheckGetPayload<S extends boolean | null | undefined | IntegrationHealthCheckDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload, S>;
export type IntegrationHealthCheckCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IntegrationHealthCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IntegrationHealthCheckCountAggregateInputType | true;
};
export interface IntegrationHealthCheckDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IntegrationHealthCheck'];
        meta: {
            name: 'IntegrationHealthCheck';
        };
    };
    findUnique<T extends IntegrationHealthCheckFindUniqueArgs>(args: Prisma.SelectSubset<T, IntegrationHealthCheckFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IntegrationHealthCheckClient<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IntegrationHealthCheckFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IntegrationHealthCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IntegrationHealthCheckClient<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IntegrationHealthCheckFindFirstArgs>(args?: Prisma.SelectSubset<T, IntegrationHealthCheckFindFirstArgs<ExtArgs>>): Prisma.Prisma__IntegrationHealthCheckClient<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IntegrationHealthCheckFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IntegrationHealthCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IntegrationHealthCheckClient<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IntegrationHealthCheckFindManyArgs>(args?: Prisma.SelectSubset<T, IntegrationHealthCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IntegrationHealthCheckCreateArgs>(args: Prisma.SelectSubset<T, IntegrationHealthCheckCreateArgs<ExtArgs>>): Prisma.Prisma__IntegrationHealthCheckClient<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IntegrationHealthCheckCreateManyArgs>(args?: Prisma.SelectSubset<T, IntegrationHealthCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IntegrationHealthCheckCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IntegrationHealthCheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IntegrationHealthCheckDeleteArgs>(args: Prisma.SelectSubset<T, IntegrationHealthCheckDeleteArgs<ExtArgs>>): Prisma.Prisma__IntegrationHealthCheckClient<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IntegrationHealthCheckUpdateArgs>(args: Prisma.SelectSubset<T, IntegrationHealthCheckUpdateArgs<ExtArgs>>): Prisma.Prisma__IntegrationHealthCheckClient<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IntegrationHealthCheckDeleteManyArgs>(args?: Prisma.SelectSubset<T, IntegrationHealthCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IntegrationHealthCheckUpdateManyArgs>(args: Prisma.SelectSubset<T, IntegrationHealthCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IntegrationHealthCheckUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IntegrationHealthCheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IntegrationHealthCheckUpsertArgs>(args: Prisma.SelectSubset<T, IntegrationHealthCheckUpsertArgs<ExtArgs>>): Prisma.Prisma__IntegrationHealthCheckClient<runtime.Types.Result.GetResult<Prisma.$IntegrationHealthCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IntegrationHealthCheckCountArgs>(args?: Prisma.Subset<T, IntegrationHealthCheckCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IntegrationHealthCheckCountAggregateOutputType> : number>;
    aggregate<T extends IntegrationHealthCheckAggregateArgs>(args: Prisma.Subset<T, IntegrationHealthCheckAggregateArgs>): Prisma.PrismaPromise<GetIntegrationHealthCheckAggregateType<T>>;
    groupBy<T extends IntegrationHealthCheckGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IntegrationHealthCheckGroupByArgs['orderBy'];
    } : {
        orderBy?: IntegrationHealthCheckGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IntegrationHealthCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationHealthCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IntegrationHealthCheckFieldRefs;
}
export interface Prisma__IntegrationHealthCheckClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IntegrationHealthCheckFieldRefs {
    readonly id: Prisma.FieldRef<"IntegrationHealthCheck", 'String'>;
    readonly integration: Prisma.FieldRef<"IntegrationHealthCheck", 'String'>;
    readonly isHealthy: Prisma.FieldRef<"IntegrationHealthCheck", 'Boolean'>;
    readonly latencyMs: Prisma.FieldRef<"IntegrationHealthCheck", 'Int'>;
    readonly message: Prisma.FieldRef<"IntegrationHealthCheck", 'String'>;
    readonly checkedAt: Prisma.FieldRef<"IntegrationHealthCheck", 'DateTime'>;
}
export type IntegrationHealthCheckFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    where: Prisma.IntegrationHealthCheckWhereUniqueInput;
};
export type IntegrationHealthCheckFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    where: Prisma.IntegrationHealthCheckWhereUniqueInput;
};
export type IntegrationHealthCheckFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    where?: Prisma.IntegrationHealthCheckWhereInput;
    orderBy?: Prisma.IntegrationHealthCheckOrderByWithRelationInput | Prisma.IntegrationHealthCheckOrderByWithRelationInput[];
    cursor?: Prisma.IntegrationHealthCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IntegrationHealthCheckScalarFieldEnum | Prisma.IntegrationHealthCheckScalarFieldEnum[];
};
export type IntegrationHealthCheckFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    where?: Prisma.IntegrationHealthCheckWhereInput;
    orderBy?: Prisma.IntegrationHealthCheckOrderByWithRelationInput | Prisma.IntegrationHealthCheckOrderByWithRelationInput[];
    cursor?: Prisma.IntegrationHealthCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IntegrationHealthCheckScalarFieldEnum | Prisma.IntegrationHealthCheckScalarFieldEnum[];
};
export type IntegrationHealthCheckFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    where?: Prisma.IntegrationHealthCheckWhereInput;
    orderBy?: Prisma.IntegrationHealthCheckOrderByWithRelationInput | Prisma.IntegrationHealthCheckOrderByWithRelationInput[];
    cursor?: Prisma.IntegrationHealthCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IntegrationHealthCheckScalarFieldEnum | Prisma.IntegrationHealthCheckScalarFieldEnum[];
};
export type IntegrationHealthCheckCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntegrationHealthCheckCreateInput, Prisma.IntegrationHealthCheckUncheckedCreateInput>;
};
export type IntegrationHealthCheckCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IntegrationHealthCheckCreateManyInput | Prisma.IntegrationHealthCheckCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IntegrationHealthCheckCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    data: Prisma.IntegrationHealthCheckCreateManyInput | Prisma.IntegrationHealthCheckCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IntegrationHealthCheckUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntegrationHealthCheckUpdateInput, Prisma.IntegrationHealthCheckUncheckedUpdateInput>;
    where: Prisma.IntegrationHealthCheckWhereUniqueInput;
};
export type IntegrationHealthCheckUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IntegrationHealthCheckUpdateManyMutationInput, Prisma.IntegrationHealthCheckUncheckedUpdateManyInput>;
    where?: Prisma.IntegrationHealthCheckWhereInput;
    limit?: number;
};
export type IntegrationHealthCheckUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IntegrationHealthCheckUpdateManyMutationInput, Prisma.IntegrationHealthCheckUncheckedUpdateManyInput>;
    where?: Prisma.IntegrationHealthCheckWhereInput;
    limit?: number;
};
export type IntegrationHealthCheckUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    where: Prisma.IntegrationHealthCheckWhereUniqueInput;
    create: Prisma.XOR<Prisma.IntegrationHealthCheckCreateInput, Prisma.IntegrationHealthCheckUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IntegrationHealthCheckUpdateInput, Prisma.IntegrationHealthCheckUncheckedUpdateInput>;
};
export type IntegrationHealthCheckDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
    where: Prisma.IntegrationHealthCheckWhereUniqueInput;
};
export type IntegrationHealthCheckDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IntegrationHealthCheckWhereInput;
    limit?: number;
};
export type IntegrationHealthCheckDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IntegrationHealthCheckSelect<ExtArgs> | null;
    omit?: Prisma.IntegrationHealthCheckOmit<ExtArgs> | null;
};

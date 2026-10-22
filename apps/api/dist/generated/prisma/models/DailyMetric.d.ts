import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DailyMetricModel = runtime.Types.Result.DefaultSelection<Prisma.$DailyMetricPayload>;
export type AggregateDailyMetric = {
    _count: DailyMetricCountAggregateOutputType | null;
    _avg: DailyMetricAvgAggregateOutputType | null;
    _sum: DailyMetricSumAggregateOutputType | null;
    _min: DailyMetricMinAggregateOutputType | null;
    _max: DailyMetricMaxAggregateOutputType | null;
};
export type DailyMetricAvgAggregateOutputType = {
    value: runtime.Decimal | null;
};
export type DailyMetricSumAggregateOutputType = {
    value: runtime.Decimal | null;
};
export type DailyMetricMinAggregateOutputType = {
    id: string | null;
    metric: string | null;
    dimensionsKey: string | null;
    value: runtime.Decimal | null;
    date: Date | null;
    createdAt: Date | null;
};
export type DailyMetricMaxAggregateOutputType = {
    id: string | null;
    metric: string | null;
    dimensionsKey: string | null;
    value: runtime.Decimal | null;
    date: Date | null;
    createdAt: Date | null;
};
export type DailyMetricCountAggregateOutputType = {
    id: number;
    metric: number;
    dimensions: number;
    dimensionsKey: number;
    value: number;
    date: number;
    createdAt: number;
    _all: number;
};
export type DailyMetricAvgAggregateInputType = {
    value?: true;
};
export type DailyMetricSumAggregateInputType = {
    value?: true;
};
export type DailyMetricMinAggregateInputType = {
    id?: true;
    metric?: true;
    dimensionsKey?: true;
    value?: true;
    date?: true;
    createdAt?: true;
};
export type DailyMetricMaxAggregateInputType = {
    id?: true;
    metric?: true;
    dimensionsKey?: true;
    value?: true;
    date?: true;
    createdAt?: true;
};
export type DailyMetricCountAggregateInputType = {
    id?: true;
    metric?: true;
    dimensions?: true;
    dimensionsKey?: true;
    value?: true;
    date?: true;
    createdAt?: true;
    _all?: true;
};
export type DailyMetricAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DailyMetricWhereInput;
    orderBy?: Prisma.DailyMetricOrderByWithRelationInput | Prisma.DailyMetricOrderByWithRelationInput[];
    cursor?: Prisma.DailyMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DailyMetricCountAggregateInputType;
    _avg?: DailyMetricAvgAggregateInputType;
    _sum?: DailyMetricSumAggregateInputType;
    _min?: DailyMetricMinAggregateInputType;
    _max?: DailyMetricMaxAggregateInputType;
};
export type GetDailyMetricAggregateType<T extends DailyMetricAggregateArgs> = {
    [P in keyof T & keyof AggregateDailyMetric]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDailyMetric[P]> : Prisma.GetScalarType<T[P], AggregateDailyMetric[P]>;
};
export type DailyMetricGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DailyMetricWhereInput;
    orderBy?: Prisma.DailyMetricOrderByWithAggregationInput | Prisma.DailyMetricOrderByWithAggregationInput[];
    by: Prisma.DailyMetricScalarFieldEnum[] | Prisma.DailyMetricScalarFieldEnum;
    having?: Prisma.DailyMetricScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DailyMetricCountAggregateInputType | true;
    _avg?: DailyMetricAvgAggregateInputType;
    _sum?: DailyMetricSumAggregateInputType;
    _min?: DailyMetricMinAggregateInputType;
    _max?: DailyMetricMaxAggregateInputType;
};
export type DailyMetricGroupByOutputType = {
    id: string;
    metric: string;
    dimensions: runtime.JsonValue | null;
    dimensionsKey: string;
    value: runtime.Decimal;
    date: Date;
    createdAt: Date;
    _count: DailyMetricCountAggregateOutputType | null;
    _avg: DailyMetricAvgAggregateOutputType | null;
    _sum: DailyMetricSumAggregateOutputType | null;
    _min: DailyMetricMinAggregateOutputType | null;
    _max: DailyMetricMaxAggregateOutputType | null;
};
export type GetDailyMetricGroupByPayload<T extends DailyMetricGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DailyMetricGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DailyMetricGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DailyMetricGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DailyMetricGroupByOutputType[P]>;
}>>;
export type DailyMetricWhereInput = {
    AND?: Prisma.DailyMetricWhereInput | Prisma.DailyMetricWhereInput[];
    OR?: Prisma.DailyMetricWhereInput[];
    NOT?: Prisma.DailyMetricWhereInput | Prisma.DailyMetricWhereInput[];
    id?: Prisma.UuidFilter<"DailyMetric"> | string;
    metric?: Prisma.StringFilter<"DailyMetric"> | string;
    dimensions?: Prisma.JsonNullableFilter<"DailyMetric">;
    dimensionsKey?: Prisma.StringFilter<"DailyMetric"> | string;
    value?: Prisma.DecimalFilter<"DailyMetric"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFilter<"DailyMetric"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DailyMetric"> | Date | string;
};
export type DailyMetricOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    dimensions?: Prisma.SortOrderInput | Prisma.SortOrder;
    dimensionsKey?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DailyMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    metric_date_dimensionsKey?: Prisma.DailyMetricMetricDateDimensionsKeyCompoundUniqueInput;
    AND?: Prisma.DailyMetricWhereInput | Prisma.DailyMetricWhereInput[];
    OR?: Prisma.DailyMetricWhereInput[];
    NOT?: Prisma.DailyMetricWhereInput | Prisma.DailyMetricWhereInput[];
    metric?: Prisma.StringFilter<"DailyMetric"> | string;
    dimensions?: Prisma.JsonNullableFilter<"DailyMetric">;
    dimensionsKey?: Prisma.StringFilter<"DailyMetric"> | string;
    value?: Prisma.DecimalFilter<"DailyMetric"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFilter<"DailyMetric"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"DailyMetric"> | Date | string;
}, "id" | "metric_date_dimensionsKey">;
export type DailyMetricOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    dimensions?: Prisma.SortOrderInput | Prisma.SortOrder;
    dimensionsKey?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DailyMetricCountOrderByAggregateInput;
    _avg?: Prisma.DailyMetricAvgOrderByAggregateInput;
    _max?: Prisma.DailyMetricMaxOrderByAggregateInput;
    _min?: Prisma.DailyMetricMinOrderByAggregateInput;
    _sum?: Prisma.DailyMetricSumOrderByAggregateInput;
};
export type DailyMetricScalarWhereWithAggregatesInput = {
    AND?: Prisma.DailyMetricScalarWhereWithAggregatesInput | Prisma.DailyMetricScalarWhereWithAggregatesInput[];
    OR?: Prisma.DailyMetricScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DailyMetricScalarWhereWithAggregatesInput | Prisma.DailyMetricScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DailyMetric"> | string;
    metric?: Prisma.StringWithAggregatesFilter<"DailyMetric"> | string;
    dimensions?: Prisma.JsonNullableWithAggregatesFilter<"DailyMetric">;
    dimensionsKey?: Prisma.StringWithAggregatesFilter<"DailyMetric"> | string;
    value?: Prisma.DecimalWithAggregatesFilter<"DailyMetric"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"DailyMetric"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DailyMetric"> | Date | string;
};
export type DailyMetricCreateInput = {
    id?: string;
    metric: string;
    dimensions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    dimensionsKey?: string;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date: Date | string;
    createdAt?: Date | string;
};
export type DailyMetricUncheckedCreateInput = {
    id?: string;
    metric: string;
    dimensions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    dimensionsKey?: string;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date: Date | string;
    createdAt?: Date | string;
};
export type DailyMetricUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    dimensionsKey?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyMetricUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    dimensionsKey?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyMetricCreateManyInput = {
    id?: string;
    metric: string;
    dimensions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    dimensionsKey?: string;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    date: Date | string;
    createdAt?: Date | string;
};
export type DailyMetricUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    dimensionsKey?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyMetricUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metric?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    dimensionsKey?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DailyMetricMetricDateDimensionsKeyCompoundUniqueInput = {
    metric: string;
    date: Date | string;
    dimensionsKey: string;
};
export type DailyMetricCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    dimensions?: Prisma.SortOrder;
    dimensionsKey?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DailyMetricAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type DailyMetricMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    dimensionsKey?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DailyMetricMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    dimensionsKey?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DailyMetricSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DailyMetricSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metric?: boolean;
    dimensions?: boolean;
    dimensionsKey?: boolean;
    value?: boolean;
    date?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dailyMetric"]>;
export type DailyMetricSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metric?: boolean;
    dimensions?: boolean;
    dimensionsKey?: boolean;
    value?: boolean;
    date?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dailyMetric"]>;
export type DailyMetricSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    metric?: boolean;
    dimensions?: boolean;
    dimensionsKey?: boolean;
    value?: boolean;
    date?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dailyMetric"]>;
export type DailyMetricSelectScalar = {
    id?: boolean;
    metric?: boolean;
    dimensions?: boolean;
    dimensionsKey?: boolean;
    value?: boolean;
    date?: boolean;
    createdAt?: boolean;
};
export type DailyMetricOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "metric" | "dimensions" | "dimensionsKey" | "value" | "date" | "createdAt", ExtArgs["result"]["dailyMetric"]>;
export type $DailyMetricPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DailyMetric";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        metric: string;
        dimensions: runtime.JsonValue | null;
        dimensionsKey: string;
        value: runtime.Decimal;
        date: Date;
        createdAt: Date;
    }, ExtArgs["result"]["dailyMetric"]>;
    composites: {};
};
export type DailyMetricGetPayload<S extends boolean | null | undefined | DailyMetricDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload, S>;
export type DailyMetricCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DailyMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DailyMetricCountAggregateInputType | true;
};
export interface DailyMetricDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DailyMetric'];
        meta: {
            name: 'DailyMetric';
        };
    };
    findUnique<T extends DailyMetricFindUniqueArgs>(args: Prisma.SelectSubset<T, DailyMetricFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DailyMetricClient<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DailyMetricFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DailyMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DailyMetricClient<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DailyMetricFindFirstArgs>(args?: Prisma.SelectSubset<T, DailyMetricFindFirstArgs<ExtArgs>>): Prisma.Prisma__DailyMetricClient<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DailyMetricFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DailyMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DailyMetricClient<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DailyMetricFindManyArgs>(args?: Prisma.SelectSubset<T, DailyMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DailyMetricCreateArgs>(args: Prisma.SelectSubset<T, DailyMetricCreateArgs<ExtArgs>>): Prisma.Prisma__DailyMetricClient<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DailyMetricCreateManyArgs>(args?: Prisma.SelectSubset<T, DailyMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DailyMetricCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DailyMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DailyMetricDeleteArgs>(args: Prisma.SelectSubset<T, DailyMetricDeleteArgs<ExtArgs>>): Prisma.Prisma__DailyMetricClient<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DailyMetricUpdateArgs>(args: Prisma.SelectSubset<T, DailyMetricUpdateArgs<ExtArgs>>): Prisma.Prisma__DailyMetricClient<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DailyMetricDeleteManyArgs>(args?: Prisma.SelectSubset<T, DailyMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DailyMetricUpdateManyArgs>(args: Prisma.SelectSubset<T, DailyMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DailyMetricUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DailyMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DailyMetricUpsertArgs>(args: Prisma.SelectSubset<T, DailyMetricUpsertArgs<ExtArgs>>): Prisma.Prisma__DailyMetricClient<runtime.Types.Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DailyMetricCountArgs>(args?: Prisma.Subset<T, DailyMetricCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DailyMetricCountAggregateOutputType> : number>;
    aggregate<T extends DailyMetricAggregateArgs>(args: Prisma.Subset<T, DailyMetricAggregateArgs>): Prisma.PrismaPromise<GetDailyMetricAggregateType<T>>;
    groupBy<T extends DailyMetricGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DailyMetricGroupByArgs['orderBy'];
    } : {
        orderBy?: DailyMetricGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DailyMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DailyMetricFieldRefs;
}
export interface Prisma__DailyMetricClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DailyMetricFieldRefs {
    readonly id: Prisma.FieldRef<"DailyMetric", 'String'>;
    readonly metric: Prisma.FieldRef<"DailyMetric", 'String'>;
    readonly dimensions: Prisma.FieldRef<"DailyMetric", 'Json'>;
    readonly dimensionsKey: Prisma.FieldRef<"DailyMetric", 'String'>;
    readonly value: Prisma.FieldRef<"DailyMetric", 'Decimal'>;
    readonly date: Prisma.FieldRef<"DailyMetric", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"DailyMetric", 'DateTime'>;
}
export type DailyMetricFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    where: Prisma.DailyMetricWhereUniqueInput;
};
export type DailyMetricFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    where: Prisma.DailyMetricWhereUniqueInput;
};
export type DailyMetricFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    where?: Prisma.DailyMetricWhereInput;
    orderBy?: Prisma.DailyMetricOrderByWithRelationInput | Prisma.DailyMetricOrderByWithRelationInput[];
    cursor?: Prisma.DailyMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DailyMetricScalarFieldEnum | Prisma.DailyMetricScalarFieldEnum[];
};
export type DailyMetricFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    where?: Prisma.DailyMetricWhereInput;
    orderBy?: Prisma.DailyMetricOrderByWithRelationInput | Prisma.DailyMetricOrderByWithRelationInput[];
    cursor?: Prisma.DailyMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DailyMetricScalarFieldEnum | Prisma.DailyMetricScalarFieldEnum[];
};
export type DailyMetricFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    where?: Prisma.DailyMetricWhereInput;
    orderBy?: Prisma.DailyMetricOrderByWithRelationInput | Prisma.DailyMetricOrderByWithRelationInput[];
    cursor?: Prisma.DailyMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DailyMetricScalarFieldEnum | Prisma.DailyMetricScalarFieldEnum[];
};
export type DailyMetricCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DailyMetricCreateInput, Prisma.DailyMetricUncheckedCreateInput>;
};
export type DailyMetricCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DailyMetricCreateManyInput | Prisma.DailyMetricCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DailyMetricCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    data: Prisma.DailyMetricCreateManyInput | Prisma.DailyMetricCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DailyMetricUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DailyMetricUpdateInput, Prisma.DailyMetricUncheckedUpdateInput>;
    where: Prisma.DailyMetricWhereUniqueInput;
};
export type DailyMetricUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DailyMetricUpdateManyMutationInput, Prisma.DailyMetricUncheckedUpdateManyInput>;
    where?: Prisma.DailyMetricWhereInput;
    limit?: number;
};
export type DailyMetricUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DailyMetricUpdateManyMutationInput, Prisma.DailyMetricUncheckedUpdateManyInput>;
    where?: Prisma.DailyMetricWhereInput;
    limit?: number;
};
export type DailyMetricUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    where: Prisma.DailyMetricWhereUniqueInput;
    create: Prisma.XOR<Prisma.DailyMetricCreateInput, Prisma.DailyMetricUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DailyMetricUpdateInput, Prisma.DailyMetricUncheckedUpdateInput>;
};
export type DailyMetricDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
    where: Prisma.DailyMetricWhereUniqueInput;
};
export type DailyMetricDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DailyMetricWhereInput;
    limit?: number;
};
export type DailyMetricDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DailyMetricSelect<ExtArgs> | null;
    omit?: Prisma.DailyMetricOmit<ExtArgs> | null;
};

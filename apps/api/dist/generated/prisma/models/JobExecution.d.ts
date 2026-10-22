import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JobExecutionModel = runtime.Types.Result.DefaultSelection<Prisma.$JobExecutionPayload>;
export type AggregateJobExecution = {
    _count: JobExecutionCountAggregateOutputType | null;
    _avg: JobExecutionAvgAggregateOutputType | null;
    _sum: JobExecutionSumAggregateOutputType | null;
    _min: JobExecutionMinAggregateOutputType | null;
    _max: JobExecutionMaxAggregateOutputType | null;
};
export type JobExecutionAvgAggregateOutputType = {
    attempts: number | null;
};
export type JobExecutionSumAggregateOutputType = {
    attempts: number | null;
};
export type JobExecutionMinAggregateOutputType = {
    id: string | null;
    jobName: string | null;
    status: string | null;
    attempts: number | null;
    error: string | null;
    startedAt: Date | null;
    finishedAt: Date | null;
};
export type JobExecutionMaxAggregateOutputType = {
    id: string | null;
    jobName: string | null;
    status: string | null;
    attempts: number | null;
    error: string | null;
    startedAt: Date | null;
    finishedAt: Date | null;
};
export type JobExecutionCountAggregateOutputType = {
    id: number;
    jobName: number;
    status: number;
    attempts: number;
    error: number;
    startedAt: number;
    finishedAt: number;
    _all: number;
};
export type JobExecutionAvgAggregateInputType = {
    attempts?: true;
};
export type JobExecutionSumAggregateInputType = {
    attempts?: true;
};
export type JobExecutionMinAggregateInputType = {
    id?: true;
    jobName?: true;
    status?: true;
    attempts?: true;
    error?: true;
    startedAt?: true;
    finishedAt?: true;
};
export type JobExecutionMaxAggregateInputType = {
    id?: true;
    jobName?: true;
    status?: true;
    attempts?: true;
    error?: true;
    startedAt?: true;
    finishedAt?: true;
};
export type JobExecutionCountAggregateInputType = {
    id?: true;
    jobName?: true;
    status?: true;
    attempts?: true;
    error?: true;
    startedAt?: true;
    finishedAt?: true;
    _all?: true;
};
export type JobExecutionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobExecutionWhereInput;
    orderBy?: Prisma.JobExecutionOrderByWithRelationInput | Prisma.JobExecutionOrderByWithRelationInput[];
    cursor?: Prisma.JobExecutionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JobExecutionCountAggregateInputType;
    _avg?: JobExecutionAvgAggregateInputType;
    _sum?: JobExecutionSumAggregateInputType;
    _min?: JobExecutionMinAggregateInputType;
    _max?: JobExecutionMaxAggregateInputType;
};
export type GetJobExecutionAggregateType<T extends JobExecutionAggregateArgs> = {
    [P in keyof T & keyof AggregateJobExecution]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJobExecution[P]> : Prisma.GetScalarType<T[P], AggregateJobExecution[P]>;
};
export type JobExecutionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobExecutionWhereInput;
    orderBy?: Prisma.JobExecutionOrderByWithAggregationInput | Prisma.JobExecutionOrderByWithAggregationInput[];
    by: Prisma.JobExecutionScalarFieldEnum[] | Prisma.JobExecutionScalarFieldEnum;
    having?: Prisma.JobExecutionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobExecutionCountAggregateInputType | true;
    _avg?: JobExecutionAvgAggregateInputType;
    _sum?: JobExecutionSumAggregateInputType;
    _min?: JobExecutionMinAggregateInputType;
    _max?: JobExecutionMaxAggregateInputType;
};
export type JobExecutionGroupByOutputType = {
    id: string;
    jobName: string;
    status: string;
    attempts: number;
    error: string | null;
    startedAt: Date;
    finishedAt: Date | null;
    _count: JobExecutionCountAggregateOutputType | null;
    _avg: JobExecutionAvgAggregateOutputType | null;
    _sum: JobExecutionSumAggregateOutputType | null;
    _min: JobExecutionMinAggregateOutputType | null;
    _max: JobExecutionMaxAggregateOutputType | null;
};
export type GetJobExecutionGroupByPayload<T extends JobExecutionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JobExecutionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JobExecutionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JobExecutionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JobExecutionGroupByOutputType[P]>;
}>>;
export type JobExecutionWhereInput = {
    AND?: Prisma.JobExecutionWhereInput | Prisma.JobExecutionWhereInput[];
    OR?: Prisma.JobExecutionWhereInput[];
    NOT?: Prisma.JobExecutionWhereInput | Prisma.JobExecutionWhereInput[];
    id?: Prisma.UuidFilter<"JobExecution"> | string;
    jobName?: Prisma.StringFilter<"JobExecution"> | string;
    status?: Prisma.StringFilter<"JobExecution"> | string;
    attempts?: Prisma.IntFilter<"JobExecution"> | number;
    error?: Prisma.StringNullableFilter<"JobExecution"> | string | null;
    startedAt?: Prisma.DateTimeFilter<"JobExecution"> | Date | string;
    finishedAt?: Prisma.DateTimeNullableFilter<"JobExecution"> | Date | string | null;
};
export type JobExecutionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jobName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type JobExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.JobExecutionWhereInput | Prisma.JobExecutionWhereInput[];
    OR?: Prisma.JobExecutionWhereInput[];
    NOT?: Prisma.JobExecutionWhereInput | Prisma.JobExecutionWhereInput[];
    jobName?: Prisma.StringFilter<"JobExecution"> | string;
    status?: Prisma.StringFilter<"JobExecution"> | string;
    attempts?: Prisma.IntFilter<"JobExecution"> | number;
    error?: Prisma.StringNullableFilter<"JobExecution"> | string | null;
    startedAt?: Prisma.DateTimeFilter<"JobExecution"> | Date | string;
    finishedAt?: Prisma.DateTimeNullableFilter<"JobExecution"> | Date | string | null;
}, "id">;
export type JobExecutionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jobName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.JobExecutionCountOrderByAggregateInput;
    _avg?: Prisma.JobExecutionAvgOrderByAggregateInput;
    _max?: Prisma.JobExecutionMaxOrderByAggregateInput;
    _min?: Prisma.JobExecutionMinOrderByAggregateInput;
    _sum?: Prisma.JobExecutionSumOrderByAggregateInput;
};
export type JobExecutionScalarWhereWithAggregatesInput = {
    AND?: Prisma.JobExecutionScalarWhereWithAggregatesInput | Prisma.JobExecutionScalarWhereWithAggregatesInput[];
    OR?: Prisma.JobExecutionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JobExecutionScalarWhereWithAggregatesInput | Prisma.JobExecutionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"JobExecution"> | string;
    jobName?: Prisma.StringWithAggregatesFilter<"JobExecution"> | string;
    status?: Prisma.StringWithAggregatesFilter<"JobExecution"> | string;
    attempts?: Prisma.IntWithAggregatesFilter<"JobExecution"> | number;
    error?: Prisma.StringNullableWithAggregatesFilter<"JobExecution"> | string | null;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"JobExecution"> | Date | string;
    finishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"JobExecution"> | Date | string | null;
};
export type JobExecutionCreateInput = {
    id?: string;
    jobName: string;
    status: string;
    attempts?: number;
    error?: string | null;
    startedAt?: Date | string;
    finishedAt?: Date | string | null;
};
export type JobExecutionUncheckedCreateInput = {
    id?: string;
    jobName: string;
    status: string;
    attempts?: number;
    error?: string | null;
    startedAt?: Date | string;
    finishedAt?: Date | string | null;
};
export type JobExecutionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type JobExecutionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type JobExecutionCreateManyInput = {
    id?: string;
    jobName: string;
    status: string;
    attempts?: number;
    error?: string | null;
    startedAt?: Date | string;
    finishedAt?: Date | string | null;
};
export type JobExecutionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type JobExecutionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type JobExecutionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
};
export type JobExecutionAvgOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type JobExecutionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
};
export type JobExecutionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    finishedAt?: Prisma.SortOrder;
};
export type JobExecutionSumOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type JobExecutionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobName?: boolean;
    status?: boolean;
    attempts?: boolean;
    error?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
}, ExtArgs["result"]["jobExecution"]>;
export type JobExecutionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobName?: boolean;
    status?: boolean;
    attempts?: boolean;
    error?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
}, ExtArgs["result"]["jobExecution"]>;
export type JobExecutionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobName?: boolean;
    status?: boolean;
    attempts?: boolean;
    error?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
}, ExtArgs["result"]["jobExecution"]>;
export type JobExecutionSelectScalar = {
    id?: boolean;
    jobName?: boolean;
    status?: boolean;
    attempts?: boolean;
    error?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
};
export type JobExecutionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jobName" | "status" | "attempts" | "error" | "startedAt" | "finishedAt", ExtArgs["result"]["jobExecution"]>;
export type $JobExecutionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JobExecution";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jobName: string;
        status: string;
        attempts: number;
        error: string | null;
        startedAt: Date;
        finishedAt: Date | null;
    }, ExtArgs["result"]["jobExecution"]>;
    composites: {};
};
export type JobExecutionGetPayload<S extends boolean | null | undefined | JobExecutionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload, S>;
export type JobExecutionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JobExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobExecutionCountAggregateInputType | true;
};
export interface JobExecutionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JobExecution'];
        meta: {
            name: 'JobExecution';
        };
    };
    findUnique<T extends JobExecutionFindUniqueArgs>(args: Prisma.SelectSubset<T, JobExecutionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JobExecutionClient<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JobExecutionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JobExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobExecutionClient<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JobExecutionFindFirstArgs>(args?: Prisma.SelectSubset<T, JobExecutionFindFirstArgs<ExtArgs>>): Prisma.Prisma__JobExecutionClient<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JobExecutionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JobExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JobExecutionClient<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JobExecutionFindManyArgs>(args?: Prisma.SelectSubset<T, JobExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JobExecutionCreateArgs>(args: Prisma.SelectSubset<T, JobExecutionCreateArgs<ExtArgs>>): Prisma.Prisma__JobExecutionClient<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JobExecutionCreateManyArgs>(args?: Prisma.SelectSubset<T, JobExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JobExecutionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JobExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JobExecutionDeleteArgs>(args: Prisma.SelectSubset<T, JobExecutionDeleteArgs<ExtArgs>>): Prisma.Prisma__JobExecutionClient<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JobExecutionUpdateArgs>(args: Prisma.SelectSubset<T, JobExecutionUpdateArgs<ExtArgs>>): Prisma.Prisma__JobExecutionClient<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JobExecutionDeleteManyArgs>(args?: Prisma.SelectSubset<T, JobExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JobExecutionUpdateManyArgs>(args: Prisma.SelectSubset<T, JobExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JobExecutionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JobExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JobExecutionUpsertArgs>(args: Prisma.SelectSubset<T, JobExecutionUpsertArgs<ExtArgs>>): Prisma.Prisma__JobExecutionClient<runtime.Types.Result.GetResult<Prisma.$JobExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JobExecutionCountArgs>(args?: Prisma.Subset<T, JobExecutionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JobExecutionCountAggregateOutputType> : number>;
    aggregate<T extends JobExecutionAggregateArgs>(args: Prisma.Subset<T, JobExecutionAggregateArgs>): Prisma.PrismaPromise<GetJobExecutionAggregateType<T>>;
    groupBy<T extends JobExecutionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JobExecutionGroupByArgs['orderBy'];
    } : {
        orderBy?: JobExecutionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JobExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JobExecutionFieldRefs;
}
export interface Prisma__JobExecutionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JobExecutionFieldRefs {
    readonly id: Prisma.FieldRef<"JobExecution", 'String'>;
    readonly jobName: Prisma.FieldRef<"JobExecution", 'String'>;
    readonly status: Prisma.FieldRef<"JobExecution", 'String'>;
    readonly attempts: Prisma.FieldRef<"JobExecution", 'Int'>;
    readonly error: Prisma.FieldRef<"JobExecution", 'String'>;
    readonly startedAt: Prisma.FieldRef<"JobExecution", 'DateTime'>;
    readonly finishedAt: Prisma.FieldRef<"JobExecution", 'DateTime'>;
}
export type JobExecutionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    where: Prisma.JobExecutionWhereUniqueInput;
};
export type JobExecutionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    where: Prisma.JobExecutionWhereUniqueInput;
};
export type JobExecutionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    where?: Prisma.JobExecutionWhereInput;
    orderBy?: Prisma.JobExecutionOrderByWithRelationInput | Prisma.JobExecutionOrderByWithRelationInput[];
    cursor?: Prisma.JobExecutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobExecutionScalarFieldEnum | Prisma.JobExecutionScalarFieldEnum[];
};
export type JobExecutionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    where?: Prisma.JobExecutionWhereInput;
    orderBy?: Prisma.JobExecutionOrderByWithRelationInput | Prisma.JobExecutionOrderByWithRelationInput[];
    cursor?: Prisma.JobExecutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobExecutionScalarFieldEnum | Prisma.JobExecutionScalarFieldEnum[];
};
export type JobExecutionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    where?: Prisma.JobExecutionWhereInput;
    orderBy?: Prisma.JobExecutionOrderByWithRelationInput | Prisma.JobExecutionOrderByWithRelationInput[];
    cursor?: Prisma.JobExecutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobExecutionScalarFieldEnum | Prisma.JobExecutionScalarFieldEnum[];
};
export type JobExecutionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JobExecutionCreateInput, Prisma.JobExecutionUncheckedCreateInput>;
};
export type JobExecutionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JobExecutionCreateManyInput | Prisma.JobExecutionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JobExecutionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    data: Prisma.JobExecutionCreateManyInput | Prisma.JobExecutionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JobExecutionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JobExecutionUpdateInput, Prisma.JobExecutionUncheckedUpdateInput>;
    where: Prisma.JobExecutionWhereUniqueInput;
};
export type JobExecutionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JobExecutionUpdateManyMutationInput, Prisma.JobExecutionUncheckedUpdateManyInput>;
    where?: Prisma.JobExecutionWhereInput;
    limit?: number;
};
export type JobExecutionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JobExecutionUpdateManyMutationInput, Prisma.JobExecutionUncheckedUpdateManyInput>;
    where?: Prisma.JobExecutionWhereInput;
    limit?: number;
};
export type JobExecutionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    where: Prisma.JobExecutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.JobExecutionCreateInput, Prisma.JobExecutionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JobExecutionUpdateInput, Prisma.JobExecutionUncheckedUpdateInput>;
};
export type JobExecutionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
    where: Prisma.JobExecutionWhereUniqueInput;
};
export type JobExecutionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobExecutionWhereInput;
    limit?: number;
};
export type JobExecutionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobExecutionSelect<ExtArgs> | null;
    omit?: Prisma.JobExecutionOmit<ExtArgs> | null;
};

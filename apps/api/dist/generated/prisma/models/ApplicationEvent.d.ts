import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApplicationEventModel = runtime.Types.Result.DefaultSelection<Prisma.$ApplicationEventPayload>;
export type AggregateApplicationEvent = {
    _count: ApplicationEventCountAggregateOutputType | null;
    _min: ApplicationEventMinAggregateOutputType | null;
    _max: ApplicationEventMaxAggregateOutputType | null;
};
export type ApplicationEventMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    level: string | null;
    message: string | null;
    createdAt: Date | null;
};
export type ApplicationEventMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    level: string | null;
    message: string | null;
    createdAt: Date | null;
};
export type ApplicationEventCountAggregateOutputType = {
    id: number;
    name: number;
    level: number;
    message: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type ApplicationEventMinAggregateInputType = {
    id?: true;
    name?: true;
    level?: true;
    message?: true;
    createdAt?: true;
};
export type ApplicationEventMaxAggregateInputType = {
    id?: true;
    name?: true;
    level?: true;
    message?: true;
    createdAt?: true;
};
export type ApplicationEventCountAggregateInputType = {
    id?: true;
    name?: true;
    level?: true;
    message?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type ApplicationEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationEventWhereInput;
    orderBy?: Prisma.ApplicationEventOrderByWithRelationInput | Prisma.ApplicationEventOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApplicationEventCountAggregateInputType;
    _min?: ApplicationEventMinAggregateInputType;
    _max?: ApplicationEventMaxAggregateInputType;
};
export type GetApplicationEventAggregateType<T extends ApplicationEventAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicationEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApplicationEvent[P]> : Prisma.GetScalarType<T[P], AggregateApplicationEvent[P]>;
};
export type ApplicationEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationEventWhereInput;
    orderBy?: Prisma.ApplicationEventOrderByWithAggregationInput | Prisma.ApplicationEventOrderByWithAggregationInput[];
    by: Prisma.ApplicationEventScalarFieldEnum[] | Prisma.ApplicationEventScalarFieldEnum;
    having?: Prisma.ApplicationEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationEventCountAggregateInputType | true;
    _min?: ApplicationEventMinAggregateInputType;
    _max?: ApplicationEventMaxAggregateInputType;
};
export type ApplicationEventGroupByOutputType = {
    id: string;
    name: string;
    level: string;
    message: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: ApplicationEventCountAggregateOutputType | null;
    _min: ApplicationEventMinAggregateOutputType | null;
    _max: ApplicationEventMaxAggregateOutputType | null;
};
export type GetApplicationEventGroupByPayload<T extends ApplicationEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApplicationEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApplicationEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApplicationEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApplicationEventGroupByOutputType[P]>;
}>>;
export type ApplicationEventWhereInput = {
    AND?: Prisma.ApplicationEventWhereInput | Prisma.ApplicationEventWhereInput[];
    OR?: Prisma.ApplicationEventWhereInput[];
    NOT?: Prisma.ApplicationEventWhereInput | Prisma.ApplicationEventWhereInput[];
    id?: Prisma.UuidFilter<"ApplicationEvent"> | string;
    name?: Prisma.StringFilter<"ApplicationEvent"> | string;
    level?: Prisma.StringFilter<"ApplicationEvent"> | string;
    message?: Prisma.StringNullableFilter<"ApplicationEvent"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"ApplicationEvent">;
    createdAt?: Prisma.DateTimeFilter<"ApplicationEvent"> | Date | string;
};
export type ApplicationEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApplicationEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ApplicationEventWhereInput | Prisma.ApplicationEventWhereInput[];
    OR?: Prisma.ApplicationEventWhereInput[];
    NOT?: Prisma.ApplicationEventWhereInput | Prisma.ApplicationEventWhereInput[];
    name?: Prisma.StringFilter<"ApplicationEvent"> | string;
    level?: Prisma.StringFilter<"ApplicationEvent"> | string;
    message?: Prisma.StringNullableFilter<"ApplicationEvent"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"ApplicationEvent">;
    createdAt?: Prisma.DateTimeFilter<"ApplicationEvent"> | Date | string;
}, "id">;
export type ApplicationEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ApplicationEventCountOrderByAggregateInput;
    _max?: Prisma.ApplicationEventMaxOrderByAggregateInput;
    _min?: Prisma.ApplicationEventMinOrderByAggregateInput;
};
export type ApplicationEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApplicationEventScalarWhereWithAggregatesInput | Prisma.ApplicationEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApplicationEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApplicationEventScalarWhereWithAggregatesInput | Prisma.ApplicationEventScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ApplicationEvent"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ApplicationEvent"> | string;
    level?: Prisma.StringWithAggregatesFilter<"ApplicationEvent"> | string;
    message?: Prisma.StringNullableWithAggregatesFilter<"ApplicationEvent"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"ApplicationEvent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApplicationEvent"> | Date | string;
};
export type ApplicationEventCreateInput = {
    id?: string;
    name: string;
    level: string;
    message?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ApplicationEventUncheckedCreateInput = {
    id?: string;
    name: string;
    level: string;
    message?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ApplicationEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationEventCreateManyInput = {
    id?: string;
    name: string;
    level: string;
    message?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ApplicationEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApplicationEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApplicationEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApplicationEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    level?: boolean;
    message?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["applicationEvent"]>;
export type ApplicationEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    level?: boolean;
    message?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["applicationEvent"]>;
export type ApplicationEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    level?: boolean;
    message?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["applicationEvent"]>;
export type ApplicationEventSelectScalar = {
    id?: boolean;
    name?: boolean;
    level?: boolean;
    message?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type ApplicationEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "level" | "message" | "metadata" | "createdAt", ExtArgs["result"]["applicationEvent"]>;
export type $ApplicationEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApplicationEvent";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        level: string;
        message: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["applicationEvent"]>;
    composites: {};
};
export type ApplicationEventGetPayload<S extends boolean | null | undefined | ApplicationEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload, S>;
export type ApplicationEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApplicationEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApplicationEventCountAggregateInputType | true;
};
export interface ApplicationEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApplicationEvent'];
        meta: {
            name: 'ApplicationEvent';
        };
    };
    findUnique<T extends ApplicationEventFindUniqueArgs>(args: Prisma.SelectSubset<T, ApplicationEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApplicationEventClient<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApplicationEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApplicationEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationEventClient<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApplicationEventFindFirstArgs>(args?: Prisma.SelectSubset<T, ApplicationEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApplicationEventClient<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApplicationEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApplicationEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationEventClient<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApplicationEventFindManyArgs>(args?: Prisma.SelectSubset<T, ApplicationEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApplicationEventCreateArgs>(args: Prisma.SelectSubset<T, ApplicationEventCreateArgs<ExtArgs>>): Prisma.Prisma__ApplicationEventClient<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApplicationEventCreateManyArgs>(args?: Prisma.SelectSubset<T, ApplicationEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApplicationEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApplicationEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApplicationEventDeleteArgs>(args: Prisma.SelectSubset<T, ApplicationEventDeleteArgs<ExtArgs>>): Prisma.Prisma__ApplicationEventClient<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApplicationEventUpdateArgs>(args: Prisma.SelectSubset<T, ApplicationEventUpdateArgs<ExtArgs>>): Prisma.Prisma__ApplicationEventClient<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApplicationEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApplicationEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApplicationEventUpdateManyArgs>(args: Prisma.SelectSubset<T, ApplicationEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApplicationEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApplicationEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApplicationEventUpsertArgs>(args: Prisma.SelectSubset<T, ApplicationEventUpsertArgs<ExtArgs>>): Prisma.Prisma__ApplicationEventClient<runtime.Types.Result.GetResult<Prisma.$ApplicationEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApplicationEventCountArgs>(args?: Prisma.Subset<T, ApplicationEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApplicationEventCountAggregateOutputType> : number>;
    aggregate<T extends ApplicationEventAggregateArgs>(args: Prisma.Subset<T, ApplicationEventAggregateArgs>): Prisma.PrismaPromise<GetApplicationEventAggregateType<T>>;
    groupBy<T extends ApplicationEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApplicationEventGroupByArgs['orderBy'];
    } : {
        orderBy?: ApplicationEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApplicationEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApplicationEventFieldRefs;
}
export interface Prisma__ApplicationEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApplicationEventFieldRefs {
    readonly id: Prisma.FieldRef<"ApplicationEvent", 'String'>;
    readonly name: Prisma.FieldRef<"ApplicationEvent", 'String'>;
    readonly level: Prisma.FieldRef<"ApplicationEvent", 'String'>;
    readonly message: Prisma.FieldRef<"ApplicationEvent", 'String'>;
    readonly metadata: Prisma.FieldRef<"ApplicationEvent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ApplicationEvent", 'DateTime'>;
}
export type ApplicationEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    where: Prisma.ApplicationEventWhereUniqueInput;
};
export type ApplicationEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    where: Prisma.ApplicationEventWhereUniqueInput;
};
export type ApplicationEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    where?: Prisma.ApplicationEventWhereInput;
    orderBy?: Prisma.ApplicationEventOrderByWithRelationInput | Prisma.ApplicationEventOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationEventScalarFieldEnum | Prisma.ApplicationEventScalarFieldEnum[];
};
export type ApplicationEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    where?: Prisma.ApplicationEventWhereInput;
    orderBy?: Prisma.ApplicationEventOrderByWithRelationInput | Prisma.ApplicationEventOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationEventScalarFieldEnum | Prisma.ApplicationEventScalarFieldEnum[];
};
export type ApplicationEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    where?: Prisma.ApplicationEventWhereInput;
    orderBy?: Prisma.ApplicationEventOrderByWithRelationInput | Prisma.ApplicationEventOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationEventScalarFieldEnum | Prisma.ApplicationEventScalarFieldEnum[];
};
export type ApplicationEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationEventCreateInput, Prisma.ApplicationEventUncheckedCreateInput>;
};
export type ApplicationEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApplicationEventCreateManyInput | Prisma.ApplicationEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApplicationEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    data: Prisma.ApplicationEventCreateManyInput | Prisma.ApplicationEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApplicationEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationEventUpdateInput, Prisma.ApplicationEventUncheckedUpdateInput>;
    where: Prisma.ApplicationEventWhereUniqueInput;
};
export type ApplicationEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApplicationEventUpdateManyMutationInput, Prisma.ApplicationEventUncheckedUpdateManyInput>;
    where?: Prisma.ApplicationEventWhereInput;
    limit?: number;
};
export type ApplicationEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationEventUpdateManyMutationInput, Prisma.ApplicationEventUncheckedUpdateManyInput>;
    where?: Prisma.ApplicationEventWhereInput;
    limit?: number;
};
export type ApplicationEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    where: Prisma.ApplicationEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationEventCreateInput, Prisma.ApplicationEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApplicationEventUpdateInput, Prisma.ApplicationEventUncheckedUpdateInput>;
};
export type ApplicationEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
    where: Prisma.ApplicationEventWhereUniqueInput;
};
export type ApplicationEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationEventWhereInput;
    limit?: number;
};
export type ApplicationEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationEventSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationEventOmit<ExtArgs> | null;
};

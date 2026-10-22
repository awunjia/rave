import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlogCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$BlogCategoryPayload>;
export type AggregateBlogCategory = {
    _count: BlogCategoryCountAggregateOutputType | null;
    _min: BlogCategoryMinAggregateOutputType | null;
    _max: BlogCategoryMaxAggregateOutputType | null;
};
export type BlogCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
};
export type BlogCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
};
export type BlogCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    description: number;
    _all: number;
};
export type BlogCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
};
export type BlogCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
};
export type BlogCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    _all?: true;
};
export type BlogCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogCategoryWhereInput;
    orderBy?: Prisma.BlogCategoryOrderByWithRelationInput | Prisma.BlogCategoryOrderByWithRelationInput[];
    cursor?: Prisma.BlogCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlogCategoryCountAggregateInputType;
    _min?: BlogCategoryMinAggregateInputType;
    _max?: BlogCategoryMaxAggregateInputType;
};
export type GetBlogCategoryAggregateType<T extends BlogCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateBlogCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlogCategory[P]> : Prisma.GetScalarType<T[P], AggregateBlogCategory[P]>;
};
export type BlogCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogCategoryWhereInput;
    orderBy?: Prisma.BlogCategoryOrderByWithAggregationInput | Prisma.BlogCategoryOrderByWithAggregationInput[];
    by: Prisma.BlogCategoryScalarFieldEnum[] | Prisma.BlogCategoryScalarFieldEnum;
    having?: Prisma.BlogCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlogCategoryCountAggregateInputType | true;
    _min?: BlogCategoryMinAggregateInputType;
    _max?: BlogCategoryMaxAggregateInputType;
};
export type BlogCategoryGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    _count: BlogCategoryCountAggregateOutputType | null;
    _min: BlogCategoryMinAggregateOutputType | null;
    _max: BlogCategoryMaxAggregateOutputType | null;
};
export type GetBlogCategoryGroupByPayload<T extends BlogCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlogCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlogCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlogCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>;
}>>;
export type BlogCategoryWhereInput = {
    AND?: Prisma.BlogCategoryWhereInput | Prisma.BlogCategoryWhereInput[];
    OR?: Prisma.BlogCategoryWhereInput[];
    NOT?: Prisma.BlogCategoryWhereInput | Prisma.BlogCategoryWhereInput[];
    id?: Prisma.UuidFilter<"BlogCategory"> | string;
    name?: Prisma.StringFilter<"BlogCategory"> | string;
    slug?: Prisma.StringFilter<"BlogCategory"> | string;
    description?: Prisma.StringNullableFilter<"BlogCategory"> | string | null;
};
export type BlogCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type BlogCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: Prisma.BlogCategoryWhereInput | Prisma.BlogCategoryWhereInput[];
    OR?: Prisma.BlogCategoryWhereInput[];
    NOT?: Prisma.BlogCategoryWhereInput | Prisma.BlogCategoryWhereInput[];
    description?: Prisma.StringNullableFilter<"BlogCategory"> | string | null;
}, "id" | "name" | "slug">;
export type BlogCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BlogCategoryCountOrderByAggregateInput;
    _max?: Prisma.BlogCategoryMaxOrderByAggregateInput;
    _min?: Prisma.BlogCategoryMinOrderByAggregateInput;
};
export type BlogCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlogCategoryScalarWhereWithAggregatesInput | Prisma.BlogCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlogCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlogCategoryScalarWhereWithAggregatesInput | Prisma.BlogCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BlogCategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"BlogCategory"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"BlogCategory"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"BlogCategory"> | string | null;
};
export type BlogCategoryCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
};
export type BlogCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
};
export type BlogCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BlogCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BlogCategoryCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
};
export type BlogCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BlogCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BlogCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type BlogCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type BlogCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type BlogCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
}, ExtArgs["result"]["blogCategory"]>;
export type BlogCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
}, ExtArgs["result"]["blogCategory"]>;
export type BlogCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
}, ExtArgs["result"]["blogCategory"]>;
export type BlogCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
};
export type BlogCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "description", ExtArgs["result"]["blogCategory"]>;
export type $BlogCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlogCategory";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
    }, ExtArgs["result"]["blogCategory"]>;
    composites: {};
};
export type BlogCategoryGetPayload<S extends boolean | null | undefined | BlogCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload, S>;
export type BlogCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlogCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlogCategoryCountAggregateInputType | true;
};
export interface BlogCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlogCategory'];
        meta: {
            name: 'BlogCategory';
        };
    };
    findUnique<T extends BlogCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, BlogCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlogCategoryClient<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlogCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlogCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogCategoryClient<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlogCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, BlogCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlogCategoryClient<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlogCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlogCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogCategoryClient<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlogCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, BlogCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlogCategoryCreateArgs>(args: Prisma.SelectSubset<T, BlogCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__BlogCategoryClient<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlogCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, BlogCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BlogCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BlogCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BlogCategoryDeleteArgs>(args: Prisma.SelectSubset<T, BlogCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__BlogCategoryClient<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlogCategoryUpdateArgs>(args: Prisma.SelectSubset<T, BlogCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__BlogCategoryClient<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlogCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlogCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlogCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, BlogCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BlogCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BlogCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BlogCategoryUpsertArgs>(args: Prisma.SelectSubset<T, BlogCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__BlogCategoryClient<runtime.Types.Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BlogCategoryCountArgs>(args?: Prisma.Subset<T, BlogCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlogCategoryCountAggregateOutputType> : number>;
    aggregate<T extends BlogCategoryAggregateArgs>(args: Prisma.Subset<T, BlogCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlogCategoryAggregateType<T>>;
    groupBy<T extends BlogCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlogCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: BlogCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlogCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlogCategoryFieldRefs;
}
export interface Prisma__BlogCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlogCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"BlogCategory", 'String'>;
    readonly name: Prisma.FieldRef<"BlogCategory", 'String'>;
    readonly slug: Prisma.FieldRef<"BlogCategory", 'String'>;
    readonly description: Prisma.FieldRef<"BlogCategory", 'String'>;
}
export type BlogCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    where: Prisma.BlogCategoryWhereUniqueInput;
};
export type BlogCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    where: Prisma.BlogCategoryWhereUniqueInput;
};
export type BlogCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    where?: Prisma.BlogCategoryWhereInput;
    orderBy?: Prisma.BlogCategoryOrderByWithRelationInput | Prisma.BlogCategoryOrderByWithRelationInput[];
    cursor?: Prisma.BlogCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogCategoryScalarFieldEnum | Prisma.BlogCategoryScalarFieldEnum[];
};
export type BlogCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    where?: Prisma.BlogCategoryWhereInput;
    orderBy?: Prisma.BlogCategoryOrderByWithRelationInput | Prisma.BlogCategoryOrderByWithRelationInput[];
    cursor?: Prisma.BlogCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogCategoryScalarFieldEnum | Prisma.BlogCategoryScalarFieldEnum[];
};
export type BlogCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    where?: Prisma.BlogCategoryWhereInput;
    orderBy?: Prisma.BlogCategoryOrderByWithRelationInput | Prisma.BlogCategoryOrderByWithRelationInput[];
    cursor?: Prisma.BlogCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogCategoryScalarFieldEnum | Prisma.BlogCategoryScalarFieldEnum[];
};
export type BlogCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogCategoryCreateInput, Prisma.BlogCategoryUncheckedCreateInput>;
};
export type BlogCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlogCategoryCreateManyInput | Prisma.BlogCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlogCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    data: Prisma.BlogCategoryCreateManyInput | Prisma.BlogCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlogCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogCategoryUpdateInput, Prisma.BlogCategoryUncheckedUpdateInput>;
    where: Prisma.BlogCategoryWhereUniqueInput;
};
export type BlogCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlogCategoryUpdateManyMutationInput, Prisma.BlogCategoryUncheckedUpdateManyInput>;
    where?: Prisma.BlogCategoryWhereInput;
    limit?: number;
};
export type BlogCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogCategoryUpdateManyMutationInput, Prisma.BlogCategoryUncheckedUpdateManyInput>;
    where?: Prisma.BlogCategoryWhereInput;
    limit?: number;
};
export type BlogCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    where: Prisma.BlogCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogCategoryCreateInput, Prisma.BlogCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlogCategoryUpdateInput, Prisma.BlogCategoryUncheckedUpdateInput>;
};
export type BlogCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
    where: Prisma.BlogCategoryWhereUniqueInput;
};
export type BlogCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogCategoryWhereInput;
    limit?: number;
};
export type BlogCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogCategorySelect<ExtArgs> | null;
    omit?: Prisma.BlogCategoryOmit<ExtArgs> | null;
};

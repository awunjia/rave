import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlogTagModel = runtime.Types.Result.DefaultSelection<Prisma.$BlogTagPayload>;
export type AggregateBlogTag = {
    _count: BlogTagCountAggregateOutputType | null;
    _min: BlogTagMinAggregateOutputType | null;
    _max: BlogTagMaxAggregateOutputType | null;
};
export type BlogTagMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
};
export type BlogTagMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
};
export type BlogTagCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    _all: number;
};
export type BlogTagMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
};
export type BlogTagMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
};
export type BlogTagCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    _all?: true;
};
export type BlogTagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogTagWhereInput;
    orderBy?: Prisma.BlogTagOrderByWithRelationInput | Prisma.BlogTagOrderByWithRelationInput[];
    cursor?: Prisma.BlogTagWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlogTagCountAggregateInputType;
    _min?: BlogTagMinAggregateInputType;
    _max?: BlogTagMaxAggregateInputType;
};
export type GetBlogTagAggregateType<T extends BlogTagAggregateArgs> = {
    [P in keyof T & keyof AggregateBlogTag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlogTag[P]> : Prisma.GetScalarType<T[P], AggregateBlogTag[P]>;
};
export type BlogTagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogTagWhereInput;
    orderBy?: Prisma.BlogTagOrderByWithAggregationInput | Prisma.BlogTagOrderByWithAggregationInput[];
    by: Prisma.BlogTagScalarFieldEnum[] | Prisma.BlogTagScalarFieldEnum;
    having?: Prisma.BlogTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlogTagCountAggregateInputType | true;
    _min?: BlogTagMinAggregateInputType;
    _max?: BlogTagMaxAggregateInputType;
};
export type BlogTagGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    _count: BlogTagCountAggregateOutputType | null;
    _min: BlogTagMinAggregateOutputType | null;
    _max: BlogTagMaxAggregateOutputType | null;
};
export type GetBlogTagGroupByPayload<T extends BlogTagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlogTagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlogTagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlogTagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlogTagGroupByOutputType[P]>;
}>>;
export type BlogTagWhereInput = {
    AND?: Prisma.BlogTagWhereInput | Prisma.BlogTagWhereInput[];
    OR?: Prisma.BlogTagWhereInput[];
    NOT?: Prisma.BlogTagWhereInput | Prisma.BlogTagWhereInput[];
    id?: Prisma.UuidFilter<"BlogTag"> | string;
    name?: Prisma.StringFilter<"BlogTag"> | string;
    slug?: Prisma.StringFilter<"BlogTag"> | string;
    posts?: Prisma.BlogPostTagListRelationFilter;
};
export type BlogTagOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    posts?: Prisma.BlogPostTagOrderByRelationAggregateInput;
};
export type BlogTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: Prisma.BlogTagWhereInput | Prisma.BlogTagWhereInput[];
    OR?: Prisma.BlogTagWhereInput[];
    NOT?: Prisma.BlogTagWhereInput | Prisma.BlogTagWhereInput[];
    posts?: Prisma.BlogPostTagListRelationFilter;
}, "id" | "name" | "slug">;
export type BlogTagOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    _count?: Prisma.BlogTagCountOrderByAggregateInput;
    _max?: Prisma.BlogTagMaxOrderByAggregateInput;
    _min?: Prisma.BlogTagMinOrderByAggregateInput;
};
export type BlogTagScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlogTagScalarWhereWithAggregatesInput | Prisma.BlogTagScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlogTagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlogTagScalarWhereWithAggregatesInput | Prisma.BlogTagScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BlogTag"> | string;
    name?: Prisma.StringWithAggregatesFilter<"BlogTag"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"BlogTag"> | string;
};
export type BlogTagCreateInput = {
    id?: string;
    name: string;
    slug: string;
    posts?: Prisma.BlogPostTagCreateNestedManyWithoutTagInput;
};
export type BlogTagUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    posts?: Prisma.BlogPostTagUncheckedCreateNestedManyWithoutTagInput;
};
export type BlogTagUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    posts?: Prisma.BlogPostTagUpdateManyWithoutTagNestedInput;
};
export type BlogTagUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    posts?: Prisma.BlogPostTagUncheckedUpdateManyWithoutTagNestedInput;
};
export type BlogTagCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
};
export type BlogTagUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogTagUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogTagCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
};
export type BlogTagMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
};
export type BlogTagMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
};
export type BlogTagScalarRelationFilter = {
    is?: Prisma.BlogTagWhereInput;
    isNot?: Prisma.BlogTagWhereInput;
};
export type BlogTagCreateNestedOneWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.BlogTagCreateWithoutPostsInput, Prisma.BlogTagUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.BlogTagCreateOrConnectWithoutPostsInput;
    connect?: Prisma.BlogTagWhereUniqueInput;
};
export type BlogTagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.BlogTagCreateWithoutPostsInput, Prisma.BlogTagUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: Prisma.BlogTagCreateOrConnectWithoutPostsInput;
    upsert?: Prisma.BlogTagUpsertWithoutPostsInput;
    connect?: Prisma.BlogTagWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BlogTagUpdateToOneWithWhereWithoutPostsInput, Prisma.BlogTagUpdateWithoutPostsInput>, Prisma.BlogTagUncheckedUpdateWithoutPostsInput>;
};
export type BlogTagCreateWithoutPostsInput = {
    id?: string;
    name: string;
    slug: string;
};
export type BlogTagUncheckedCreateWithoutPostsInput = {
    id?: string;
    name: string;
    slug: string;
};
export type BlogTagCreateOrConnectWithoutPostsInput = {
    where: Prisma.BlogTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogTagCreateWithoutPostsInput, Prisma.BlogTagUncheckedCreateWithoutPostsInput>;
};
export type BlogTagUpsertWithoutPostsInput = {
    update: Prisma.XOR<Prisma.BlogTagUpdateWithoutPostsInput, Prisma.BlogTagUncheckedUpdateWithoutPostsInput>;
    create: Prisma.XOR<Prisma.BlogTagCreateWithoutPostsInput, Prisma.BlogTagUncheckedCreateWithoutPostsInput>;
    where?: Prisma.BlogTagWhereInput;
};
export type BlogTagUpdateToOneWithWhereWithoutPostsInput = {
    where?: Prisma.BlogTagWhereInput;
    data: Prisma.XOR<Prisma.BlogTagUpdateWithoutPostsInput, Prisma.BlogTagUncheckedUpdateWithoutPostsInput>;
};
export type BlogTagUpdateWithoutPostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogTagUncheckedUpdateWithoutPostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogTagCountOutputType = {
    posts: number;
};
export type BlogTagCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | BlogTagCountOutputTypeCountPostsArgs;
};
export type BlogTagCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagCountOutputTypeSelect<ExtArgs> | null;
};
export type BlogTagCountOutputTypeCountPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostTagWhereInput;
};
export type BlogTagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    posts?: boolean | Prisma.BlogTag$postsArgs<ExtArgs>;
    _count?: boolean | Prisma.BlogTagCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogTag"]>;
export type BlogTagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
}, ExtArgs["result"]["blogTag"]>;
export type BlogTagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
}, ExtArgs["result"]["blogTag"]>;
export type BlogTagSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
};
export type BlogTagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["blogTag"]>;
export type BlogTagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | Prisma.BlogTag$postsArgs<ExtArgs>;
    _count?: boolean | Prisma.BlogTagCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BlogTagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type BlogTagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $BlogTagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlogTag";
    objects: {
        posts: Prisma.$BlogPostTagPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
    }, ExtArgs["result"]["blogTag"]>;
    composites: {};
};
export type BlogTagGetPayload<S extends boolean | null | undefined | BlogTagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlogTagPayload, S>;
export type BlogTagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlogTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlogTagCountAggregateInputType | true;
};
export interface BlogTagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlogTag'];
        meta: {
            name: 'BlogTag';
        };
    };
    findUnique<T extends BlogTagFindUniqueArgs>(args: Prisma.SelectSubset<T, BlogTagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlogTagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlogTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlogTagFindFirstArgs>(args?: Prisma.SelectSubset<T, BlogTagFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlogTagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlogTagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlogTagFindManyArgs>(args?: Prisma.SelectSubset<T, BlogTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlogTagCreateArgs>(args: Prisma.SelectSubset<T, BlogTagCreateArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlogTagCreateManyArgs>(args?: Prisma.SelectSubset<T, BlogTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BlogTagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BlogTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BlogTagDeleteArgs>(args: Prisma.SelectSubset<T, BlogTagDeleteArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlogTagUpdateArgs>(args: Prisma.SelectSubset<T, BlogTagUpdateArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlogTagDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlogTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlogTagUpdateManyArgs>(args: Prisma.SelectSubset<T, BlogTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BlogTagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BlogTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BlogTagUpsertArgs>(args: Prisma.SelectSubset<T, BlogTagUpsertArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BlogTagCountArgs>(args?: Prisma.Subset<T, BlogTagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlogTagCountAggregateOutputType> : number>;
    aggregate<T extends BlogTagAggregateArgs>(args: Prisma.Subset<T, BlogTagAggregateArgs>): Prisma.PrismaPromise<GetBlogTagAggregateType<T>>;
    groupBy<T extends BlogTagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlogTagGroupByArgs['orderBy'];
    } : {
        orderBy?: BlogTagGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlogTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlogTagFieldRefs;
}
export interface Prisma__BlogTagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends Prisma.BlogTag$postsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BlogTag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlogTagFieldRefs {
    readonly id: Prisma.FieldRef<"BlogTag", 'String'>;
    readonly name: Prisma.FieldRef<"BlogTag", 'String'>;
    readonly slug: Prisma.FieldRef<"BlogTag", 'String'>;
}
export type BlogTagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    where: Prisma.BlogTagWhereUniqueInput;
};
export type BlogTagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    where: Prisma.BlogTagWhereUniqueInput;
};
export type BlogTagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    where?: Prisma.BlogTagWhereInput;
    orderBy?: Prisma.BlogTagOrderByWithRelationInput | Prisma.BlogTagOrderByWithRelationInput[];
    cursor?: Prisma.BlogTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogTagScalarFieldEnum | Prisma.BlogTagScalarFieldEnum[];
};
export type BlogTagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    where?: Prisma.BlogTagWhereInput;
    orderBy?: Prisma.BlogTagOrderByWithRelationInput | Prisma.BlogTagOrderByWithRelationInput[];
    cursor?: Prisma.BlogTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogTagScalarFieldEnum | Prisma.BlogTagScalarFieldEnum[];
};
export type BlogTagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    where?: Prisma.BlogTagWhereInput;
    orderBy?: Prisma.BlogTagOrderByWithRelationInput | Prisma.BlogTagOrderByWithRelationInput[];
    cursor?: Prisma.BlogTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogTagScalarFieldEnum | Prisma.BlogTagScalarFieldEnum[];
};
export type BlogTagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogTagCreateInput, Prisma.BlogTagUncheckedCreateInput>;
};
export type BlogTagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlogTagCreateManyInput | Prisma.BlogTagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlogTagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    data: Prisma.BlogTagCreateManyInput | Prisma.BlogTagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlogTagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogTagUpdateInput, Prisma.BlogTagUncheckedUpdateInput>;
    where: Prisma.BlogTagWhereUniqueInput;
};
export type BlogTagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlogTagUpdateManyMutationInput, Prisma.BlogTagUncheckedUpdateManyInput>;
    where?: Prisma.BlogTagWhereInput;
    limit?: number;
};
export type BlogTagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogTagUpdateManyMutationInput, Prisma.BlogTagUncheckedUpdateManyInput>;
    where?: Prisma.BlogTagWhereInput;
    limit?: number;
};
export type BlogTagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    where: Prisma.BlogTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogTagCreateInput, Prisma.BlogTagUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlogTagUpdateInput, Prisma.BlogTagUncheckedUpdateInput>;
};
export type BlogTagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
    where: Prisma.BlogTagWhereUniqueInput;
};
export type BlogTagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogTagWhereInput;
    limit?: number;
};
export type BlogTag$postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    include?: Prisma.BlogPostTagInclude<ExtArgs> | null;
    where?: Prisma.BlogPostTagWhereInput;
    orderBy?: Prisma.BlogPostTagOrderByWithRelationInput | Prisma.BlogPostTagOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogPostTagScalarFieldEnum | Prisma.BlogPostTagScalarFieldEnum[];
};
export type BlogTagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogTagOmit<ExtArgs> | null;
    include?: Prisma.BlogTagInclude<ExtArgs> | null;
};

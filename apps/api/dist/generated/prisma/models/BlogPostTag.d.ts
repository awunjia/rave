import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlogPostTagModel = runtime.Types.Result.DefaultSelection<Prisma.$BlogPostTagPayload>;
export type AggregateBlogPostTag = {
    _count: BlogPostTagCountAggregateOutputType | null;
    _min: BlogPostTagMinAggregateOutputType | null;
    _max: BlogPostTagMaxAggregateOutputType | null;
};
export type BlogPostTagMinAggregateOutputType = {
    postId: string | null;
    tagId: string | null;
};
export type BlogPostTagMaxAggregateOutputType = {
    postId: string | null;
    tagId: string | null;
};
export type BlogPostTagCountAggregateOutputType = {
    postId: number;
    tagId: number;
    _all: number;
};
export type BlogPostTagMinAggregateInputType = {
    postId?: true;
    tagId?: true;
};
export type BlogPostTagMaxAggregateInputType = {
    postId?: true;
    tagId?: true;
};
export type BlogPostTagCountAggregateInputType = {
    postId?: true;
    tagId?: true;
    _all?: true;
};
export type BlogPostTagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostTagWhereInput;
    orderBy?: Prisma.BlogPostTagOrderByWithRelationInput | Prisma.BlogPostTagOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostTagWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlogPostTagCountAggregateInputType;
    _min?: BlogPostTagMinAggregateInputType;
    _max?: BlogPostTagMaxAggregateInputType;
};
export type GetBlogPostTagAggregateType<T extends BlogPostTagAggregateArgs> = {
    [P in keyof T & keyof AggregateBlogPostTag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlogPostTag[P]> : Prisma.GetScalarType<T[P], AggregateBlogPostTag[P]>;
};
export type BlogPostTagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostTagWhereInput;
    orderBy?: Prisma.BlogPostTagOrderByWithAggregationInput | Prisma.BlogPostTagOrderByWithAggregationInput[];
    by: Prisma.BlogPostTagScalarFieldEnum[] | Prisma.BlogPostTagScalarFieldEnum;
    having?: Prisma.BlogPostTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlogPostTagCountAggregateInputType | true;
    _min?: BlogPostTagMinAggregateInputType;
    _max?: BlogPostTagMaxAggregateInputType;
};
export type BlogPostTagGroupByOutputType = {
    postId: string;
    tagId: string;
    _count: BlogPostTagCountAggregateOutputType | null;
    _min: BlogPostTagMinAggregateOutputType | null;
    _max: BlogPostTagMaxAggregateOutputType | null;
};
export type GetBlogPostTagGroupByPayload<T extends BlogPostTagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlogPostTagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlogPostTagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlogPostTagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlogPostTagGroupByOutputType[P]>;
}>>;
export type BlogPostTagWhereInput = {
    AND?: Prisma.BlogPostTagWhereInput | Prisma.BlogPostTagWhereInput[];
    OR?: Prisma.BlogPostTagWhereInput[];
    NOT?: Prisma.BlogPostTagWhereInput | Prisma.BlogPostTagWhereInput[];
    postId?: Prisma.UuidFilter<"BlogPostTag"> | string;
    tagId?: Prisma.UuidFilter<"BlogPostTag"> | string;
    post?: Prisma.XOR<Prisma.BlogPostScalarRelationFilter, Prisma.BlogPostWhereInput>;
    tag?: Prisma.XOR<Prisma.BlogTagScalarRelationFilter, Prisma.BlogTagWhereInput>;
};
export type BlogPostTagOrderByWithRelationInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
    post?: Prisma.BlogPostOrderByWithRelationInput;
    tag?: Prisma.BlogTagOrderByWithRelationInput;
};
export type BlogPostTagWhereUniqueInput = Prisma.AtLeast<{
    postId_tagId?: Prisma.BlogPostTagPostIdTagIdCompoundUniqueInput;
    AND?: Prisma.BlogPostTagWhereInput | Prisma.BlogPostTagWhereInput[];
    OR?: Prisma.BlogPostTagWhereInput[];
    NOT?: Prisma.BlogPostTagWhereInput | Prisma.BlogPostTagWhereInput[];
    postId?: Prisma.UuidFilter<"BlogPostTag"> | string;
    tagId?: Prisma.UuidFilter<"BlogPostTag"> | string;
    post?: Prisma.XOR<Prisma.BlogPostScalarRelationFilter, Prisma.BlogPostWhereInput>;
    tag?: Prisma.XOR<Prisma.BlogTagScalarRelationFilter, Prisma.BlogTagWhereInput>;
}, "postId_tagId">;
export type BlogPostTagOrderByWithAggregationInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
    _count?: Prisma.BlogPostTagCountOrderByAggregateInput;
    _max?: Prisma.BlogPostTagMaxOrderByAggregateInput;
    _min?: Prisma.BlogPostTagMinOrderByAggregateInput;
};
export type BlogPostTagScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlogPostTagScalarWhereWithAggregatesInput | Prisma.BlogPostTagScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlogPostTagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlogPostTagScalarWhereWithAggregatesInput | Prisma.BlogPostTagScalarWhereWithAggregatesInput[];
    postId?: Prisma.UuidWithAggregatesFilter<"BlogPostTag"> | string;
    tagId?: Prisma.UuidWithAggregatesFilter<"BlogPostTag"> | string;
};
export type BlogPostTagCreateInput = {
    post: Prisma.BlogPostCreateNestedOneWithoutTagsInput;
    tag: Prisma.BlogTagCreateNestedOneWithoutPostsInput;
};
export type BlogPostTagUncheckedCreateInput = {
    postId: string;
    tagId: string;
};
export type BlogPostTagUpdateInput = {
    post?: Prisma.BlogPostUpdateOneRequiredWithoutTagsNestedInput;
    tag?: Prisma.BlogTagUpdateOneRequiredWithoutPostsNestedInput;
};
export type BlogPostTagUncheckedUpdateInput = {
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogPostTagCreateManyInput = {
    postId: string;
    tagId: string;
};
export type BlogPostTagUpdateManyMutationInput = {};
export type BlogPostTagUncheckedUpdateManyInput = {
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogPostTagListRelationFilter = {
    every?: Prisma.BlogPostTagWhereInput;
    some?: Prisma.BlogPostTagWhereInput;
    none?: Prisma.BlogPostTagWhereInput;
};
export type BlogPostTagOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BlogPostTagPostIdTagIdCompoundUniqueInput = {
    postId: string;
    tagId: string;
};
export type BlogPostTagCountOrderByAggregateInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type BlogPostTagMaxOrderByAggregateInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type BlogPostTagMinOrderByAggregateInput = {
    postId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type BlogPostTagCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.BlogPostTagCreateWithoutPostInput, Prisma.BlogPostTagUncheckedCreateWithoutPostInput> | Prisma.BlogPostTagCreateWithoutPostInput[] | Prisma.BlogPostTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.BlogPostTagCreateOrConnectWithoutPostInput | Prisma.BlogPostTagCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.BlogPostTagCreateManyPostInputEnvelope;
    connect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
};
export type BlogPostTagUncheckedCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.BlogPostTagCreateWithoutPostInput, Prisma.BlogPostTagUncheckedCreateWithoutPostInput> | Prisma.BlogPostTagCreateWithoutPostInput[] | Prisma.BlogPostTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.BlogPostTagCreateOrConnectWithoutPostInput | Prisma.BlogPostTagCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.BlogPostTagCreateManyPostInputEnvelope;
    connect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
};
export type BlogPostTagUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostTagCreateWithoutPostInput, Prisma.BlogPostTagUncheckedCreateWithoutPostInput> | Prisma.BlogPostTagCreateWithoutPostInput[] | Prisma.BlogPostTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.BlogPostTagCreateOrConnectWithoutPostInput | Prisma.BlogPostTagCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.BlogPostTagUpsertWithWhereUniqueWithoutPostInput | Prisma.BlogPostTagUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.BlogPostTagCreateManyPostInputEnvelope;
    set?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    disconnect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    delete?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    connect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    update?: Prisma.BlogPostTagUpdateWithWhereUniqueWithoutPostInput | Prisma.BlogPostTagUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.BlogPostTagUpdateManyWithWhereWithoutPostInput | Prisma.BlogPostTagUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.BlogPostTagScalarWhereInput | Prisma.BlogPostTagScalarWhereInput[];
};
export type BlogPostTagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostTagCreateWithoutPostInput, Prisma.BlogPostTagUncheckedCreateWithoutPostInput> | Prisma.BlogPostTagCreateWithoutPostInput[] | Prisma.BlogPostTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.BlogPostTagCreateOrConnectWithoutPostInput | Prisma.BlogPostTagCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.BlogPostTagUpsertWithWhereUniqueWithoutPostInput | Prisma.BlogPostTagUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.BlogPostTagCreateManyPostInputEnvelope;
    set?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    disconnect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    delete?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    connect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    update?: Prisma.BlogPostTagUpdateWithWhereUniqueWithoutPostInput | Prisma.BlogPostTagUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.BlogPostTagUpdateManyWithWhereWithoutPostInput | Prisma.BlogPostTagUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.BlogPostTagScalarWhereInput | Prisma.BlogPostTagScalarWhereInput[];
};
export type BlogPostTagCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.BlogPostTagCreateWithoutTagInput, Prisma.BlogPostTagUncheckedCreateWithoutTagInput> | Prisma.BlogPostTagCreateWithoutTagInput[] | Prisma.BlogPostTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.BlogPostTagCreateOrConnectWithoutTagInput | Prisma.BlogPostTagCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.BlogPostTagCreateManyTagInputEnvelope;
    connect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
};
export type BlogPostTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.BlogPostTagCreateWithoutTagInput, Prisma.BlogPostTagUncheckedCreateWithoutTagInput> | Prisma.BlogPostTagCreateWithoutTagInput[] | Prisma.BlogPostTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.BlogPostTagCreateOrConnectWithoutTagInput | Prisma.BlogPostTagCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.BlogPostTagCreateManyTagInputEnvelope;
    connect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
};
export type BlogPostTagUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostTagCreateWithoutTagInput, Prisma.BlogPostTagUncheckedCreateWithoutTagInput> | Prisma.BlogPostTagCreateWithoutTagInput[] | Prisma.BlogPostTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.BlogPostTagCreateOrConnectWithoutTagInput | Prisma.BlogPostTagCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.BlogPostTagUpsertWithWhereUniqueWithoutTagInput | Prisma.BlogPostTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.BlogPostTagCreateManyTagInputEnvelope;
    set?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    disconnect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    delete?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    connect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    update?: Prisma.BlogPostTagUpdateWithWhereUniqueWithoutTagInput | Prisma.BlogPostTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.BlogPostTagUpdateManyWithWhereWithoutTagInput | Prisma.BlogPostTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.BlogPostTagScalarWhereInput | Prisma.BlogPostTagScalarWhereInput[];
};
export type BlogPostTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostTagCreateWithoutTagInput, Prisma.BlogPostTagUncheckedCreateWithoutTagInput> | Prisma.BlogPostTagCreateWithoutTagInput[] | Prisma.BlogPostTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.BlogPostTagCreateOrConnectWithoutTagInput | Prisma.BlogPostTagCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.BlogPostTagUpsertWithWhereUniqueWithoutTagInput | Prisma.BlogPostTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.BlogPostTagCreateManyTagInputEnvelope;
    set?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    disconnect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    delete?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    connect?: Prisma.BlogPostTagWhereUniqueInput | Prisma.BlogPostTagWhereUniqueInput[];
    update?: Prisma.BlogPostTagUpdateWithWhereUniqueWithoutTagInput | Prisma.BlogPostTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.BlogPostTagUpdateManyWithWhereWithoutTagInput | Prisma.BlogPostTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.BlogPostTagScalarWhereInput | Prisma.BlogPostTagScalarWhereInput[];
};
export type BlogPostTagCreateWithoutPostInput = {
    tag: Prisma.BlogTagCreateNestedOneWithoutPostsInput;
};
export type BlogPostTagUncheckedCreateWithoutPostInput = {
    tagId: string;
};
export type BlogPostTagCreateOrConnectWithoutPostInput = {
    where: Prisma.BlogPostTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostTagCreateWithoutPostInput, Prisma.BlogPostTagUncheckedCreateWithoutPostInput>;
};
export type BlogPostTagCreateManyPostInputEnvelope = {
    data: Prisma.BlogPostTagCreateManyPostInput | Prisma.BlogPostTagCreateManyPostInput[];
    skipDuplicates?: boolean;
};
export type BlogPostTagUpsertWithWhereUniqueWithoutPostInput = {
    where: Prisma.BlogPostTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlogPostTagUpdateWithoutPostInput, Prisma.BlogPostTagUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.BlogPostTagCreateWithoutPostInput, Prisma.BlogPostTagUncheckedCreateWithoutPostInput>;
};
export type BlogPostTagUpdateWithWhereUniqueWithoutPostInput = {
    where: Prisma.BlogPostTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlogPostTagUpdateWithoutPostInput, Prisma.BlogPostTagUncheckedUpdateWithoutPostInput>;
};
export type BlogPostTagUpdateManyWithWhereWithoutPostInput = {
    where: Prisma.BlogPostTagScalarWhereInput;
    data: Prisma.XOR<Prisma.BlogPostTagUpdateManyMutationInput, Prisma.BlogPostTagUncheckedUpdateManyWithoutPostInput>;
};
export type BlogPostTagScalarWhereInput = {
    AND?: Prisma.BlogPostTagScalarWhereInput | Prisma.BlogPostTagScalarWhereInput[];
    OR?: Prisma.BlogPostTagScalarWhereInput[];
    NOT?: Prisma.BlogPostTagScalarWhereInput | Prisma.BlogPostTagScalarWhereInput[];
    postId?: Prisma.UuidFilter<"BlogPostTag"> | string;
    tagId?: Prisma.UuidFilter<"BlogPostTag"> | string;
};
export type BlogPostTagCreateWithoutTagInput = {
    post: Prisma.BlogPostCreateNestedOneWithoutTagsInput;
};
export type BlogPostTagUncheckedCreateWithoutTagInput = {
    postId: string;
};
export type BlogPostTagCreateOrConnectWithoutTagInput = {
    where: Prisma.BlogPostTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostTagCreateWithoutTagInput, Prisma.BlogPostTagUncheckedCreateWithoutTagInput>;
};
export type BlogPostTagCreateManyTagInputEnvelope = {
    data: Prisma.BlogPostTagCreateManyTagInput | Prisma.BlogPostTagCreateManyTagInput[];
    skipDuplicates?: boolean;
};
export type BlogPostTagUpsertWithWhereUniqueWithoutTagInput = {
    where: Prisma.BlogPostTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlogPostTagUpdateWithoutTagInput, Prisma.BlogPostTagUncheckedUpdateWithoutTagInput>;
    create: Prisma.XOR<Prisma.BlogPostTagCreateWithoutTagInput, Prisma.BlogPostTagUncheckedCreateWithoutTagInput>;
};
export type BlogPostTagUpdateWithWhereUniqueWithoutTagInput = {
    where: Prisma.BlogPostTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlogPostTagUpdateWithoutTagInput, Prisma.BlogPostTagUncheckedUpdateWithoutTagInput>;
};
export type BlogPostTagUpdateManyWithWhereWithoutTagInput = {
    where: Prisma.BlogPostTagScalarWhereInput;
    data: Prisma.XOR<Prisma.BlogPostTagUpdateManyMutationInput, Prisma.BlogPostTagUncheckedUpdateManyWithoutTagInput>;
};
export type BlogPostTagCreateManyPostInput = {
    tagId: string;
};
export type BlogPostTagUpdateWithoutPostInput = {
    tag?: Prisma.BlogTagUpdateOneRequiredWithoutPostsNestedInput;
};
export type BlogPostTagUncheckedUpdateWithoutPostInput = {
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogPostTagUncheckedUpdateManyWithoutPostInput = {
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogPostTagCreateManyTagInput = {
    postId: string;
};
export type BlogPostTagUpdateWithoutTagInput = {
    post?: Prisma.BlogPostUpdateOneRequiredWithoutTagsNestedInput;
};
export type BlogPostTagUncheckedUpdateWithoutTagInput = {
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogPostTagUncheckedUpdateManyWithoutTagInput = {
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BlogPostTagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    postId?: boolean;
    tagId?: boolean;
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.BlogTagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPostTag"]>;
export type BlogPostTagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    postId?: boolean;
    tagId?: boolean;
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.BlogTagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPostTag"]>;
export type BlogPostTagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    postId?: boolean;
    tagId?: boolean;
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.BlogTagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPostTag"]>;
export type BlogPostTagSelectScalar = {
    postId?: boolean;
    tagId?: boolean;
};
export type BlogPostTagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"postId" | "tagId", ExtArgs["result"]["blogPostTag"]>;
export type BlogPostTagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.BlogTagDefaultArgs<ExtArgs>;
};
export type BlogPostTagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.BlogTagDefaultArgs<ExtArgs>;
};
export type BlogPostTagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.BlogTagDefaultArgs<ExtArgs>;
};
export type $BlogPostTagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlogPostTag";
    objects: {
        post: Prisma.$BlogPostPayload<ExtArgs>;
        tag: Prisma.$BlogTagPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        postId: string;
        tagId: string;
    }, ExtArgs["result"]["blogPostTag"]>;
    composites: {};
};
export type BlogPostTagGetPayload<S extends boolean | null | undefined | BlogPostTagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload, S>;
export type BlogPostTagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlogPostTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlogPostTagCountAggregateInputType | true;
};
export interface BlogPostTagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlogPostTag'];
        meta: {
            name: 'BlogPostTag';
        };
    };
    findUnique<T extends BlogPostTagFindUniqueArgs>(args: Prisma.SelectSubset<T, BlogPostTagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlogPostTagClient<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlogPostTagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlogPostTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogPostTagClient<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlogPostTagFindFirstArgs>(args?: Prisma.SelectSubset<T, BlogPostTagFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlogPostTagClient<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlogPostTagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlogPostTagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogPostTagClient<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlogPostTagFindManyArgs>(args?: Prisma.SelectSubset<T, BlogPostTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlogPostTagCreateArgs>(args: Prisma.SelectSubset<T, BlogPostTagCreateArgs<ExtArgs>>): Prisma.Prisma__BlogPostTagClient<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlogPostTagCreateManyArgs>(args?: Prisma.SelectSubset<T, BlogPostTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BlogPostTagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BlogPostTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BlogPostTagDeleteArgs>(args: Prisma.SelectSubset<T, BlogPostTagDeleteArgs<ExtArgs>>): Prisma.Prisma__BlogPostTagClient<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlogPostTagUpdateArgs>(args: Prisma.SelectSubset<T, BlogPostTagUpdateArgs<ExtArgs>>): Prisma.Prisma__BlogPostTagClient<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlogPostTagDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlogPostTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlogPostTagUpdateManyArgs>(args: Prisma.SelectSubset<T, BlogPostTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BlogPostTagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BlogPostTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BlogPostTagUpsertArgs>(args: Prisma.SelectSubset<T, BlogPostTagUpsertArgs<ExtArgs>>): Prisma.Prisma__BlogPostTagClient<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BlogPostTagCountArgs>(args?: Prisma.Subset<T, BlogPostTagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlogPostTagCountAggregateOutputType> : number>;
    aggregate<T extends BlogPostTagAggregateArgs>(args: Prisma.Subset<T, BlogPostTagAggregateArgs>): Prisma.PrismaPromise<GetBlogPostTagAggregateType<T>>;
    groupBy<T extends BlogPostTagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlogPostTagGroupByArgs['orderBy'];
    } : {
        orderBy?: BlogPostTagGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlogPostTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlogPostTagFieldRefs;
}
export interface Prisma__BlogPostTagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    post<T extends Prisma.BlogPostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BlogPostDefaultArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tag<T extends Prisma.BlogTagDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BlogTagDefaultArgs<ExtArgs>>): Prisma.Prisma__BlogTagClient<runtime.Types.Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlogPostTagFieldRefs {
    readonly postId: Prisma.FieldRef<"BlogPostTag", 'String'>;
    readonly tagId: Prisma.FieldRef<"BlogPostTag", 'String'>;
}
export type BlogPostTagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    include?: Prisma.BlogPostTagInclude<ExtArgs> | null;
    where: Prisma.BlogPostTagWhereUniqueInput;
};
export type BlogPostTagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    include?: Prisma.BlogPostTagInclude<ExtArgs> | null;
    where: Prisma.BlogPostTagWhereUniqueInput;
};
export type BlogPostTagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BlogPostTagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BlogPostTagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BlogPostTagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    include?: Prisma.BlogPostTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostTagCreateInput, Prisma.BlogPostTagUncheckedCreateInput>;
};
export type BlogPostTagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlogPostTagCreateManyInput | Prisma.BlogPostTagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlogPostTagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    data: Prisma.BlogPostTagCreateManyInput | Prisma.BlogPostTagCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BlogPostTagIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BlogPostTagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    include?: Prisma.BlogPostTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostTagUpdateInput, Prisma.BlogPostTagUncheckedUpdateInput>;
    where: Prisma.BlogPostTagWhereUniqueInput;
};
export type BlogPostTagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlogPostTagUpdateManyMutationInput, Prisma.BlogPostTagUncheckedUpdateManyInput>;
    where?: Prisma.BlogPostTagWhereInput;
    limit?: number;
};
export type BlogPostTagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostTagUpdateManyMutationInput, Prisma.BlogPostTagUncheckedUpdateManyInput>;
    where?: Prisma.BlogPostTagWhereInput;
    limit?: number;
    include?: Prisma.BlogPostTagIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BlogPostTagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    include?: Prisma.BlogPostTagInclude<ExtArgs> | null;
    where: Prisma.BlogPostTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostTagCreateInput, Prisma.BlogPostTagUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlogPostTagUpdateInput, Prisma.BlogPostTagUncheckedUpdateInput>;
};
export type BlogPostTagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    include?: Prisma.BlogPostTagInclude<ExtArgs> | null;
    where: Prisma.BlogPostTagWhereUniqueInput;
};
export type BlogPostTagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostTagWhereInput;
    limit?: number;
};
export type BlogPostTagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostTagSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostTagOmit<ExtArgs> | null;
    include?: Prisma.BlogPostTagInclude<ExtArgs> | null;
};

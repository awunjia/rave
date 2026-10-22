import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlogRevisionModel = runtime.Types.Result.DefaultSelection<Prisma.$BlogRevisionPayload>;
export type AggregateBlogRevision = {
    _count: BlogRevisionCountAggregateOutputType | null;
    _min: BlogRevisionMinAggregateOutputType | null;
    _max: BlogRevisionMaxAggregateOutputType | null;
};
export type BlogRevisionMinAggregateOutputType = {
    id: string | null;
    postId: string | null;
    authorId: string | null;
    content: string | null;
    createdAt: Date | null;
};
export type BlogRevisionMaxAggregateOutputType = {
    id: string | null;
    postId: string | null;
    authorId: string | null;
    content: string | null;
    createdAt: Date | null;
};
export type BlogRevisionCountAggregateOutputType = {
    id: number;
    postId: number;
    authorId: number;
    content: number;
    createdAt: number;
    _all: number;
};
export type BlogRevisionMinAggregateInputType = {
    id?: true;
    postId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
};
export type BlogRevisionMaxAggregateInputType = {
    id?: true;
    postId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
};
export type BlogRevisionCountAggregateInputType = {
    id?: true;
    postId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
    _all?: true;
};
export type BlogRevisionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogRevisionWhereInput;
    orderBy?: Prisma.BlogRevisionOrderByWithRelationInput | Prisma.BlogRevisionOrderByWithRelationInput[];
    cursor?: Prisma.BlogRevisionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlogRevisionCountAggregateInputType;
    _min?: BlogRevisionMinAggregateInputType;
    _max?: BlogRevisionMaxAggregateInputType;
};
export type GetBlogRevisionAggregateType<T extends BlogRevisionAggregateArgs> = {
    [P in keyof T & keyof AggregateBlogRevision]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlogRevision[P]> : Prisma.GetScalarType<T[P], AggregateBlogRevision[P]>;
};
export type BlogRevisionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogRevisionWhereInput;
    orderBy?: Prisma.BlogRevisionOrderByWithAggregationInput | Prisma.BlogRevisionOrderByWithAggregationInput[];
    by: Prisma.BlogRevisionScalarFieldEnum[] | Prisma.BlogRevisionScalarFieldEnum;
    having?: Prisma.BlogRevisionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlogRevisionCountAggregateInputType | true;
    _min?: BlogRevisionMinAggregateInputType;
    _max?: BlogRevisionMaxAggregateInputType;
};
export type BlogRevisionGroupByOutputType = {
    id: string;
    postId: string;
    authorId: string;
    content: string;
    createdAt: Date;
    _count: BlogRevisionCountAggregateOutputType | null;
    _min: BlogRevisionMinAggregateOutputType | null;
    _max: BlogRevisionMaxAggregateOutputType | null;
};
export type GetBlogRevisionGroupByPayload<T extends BlogRevisionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlogRevisionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlogRevisionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlogRevisionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlogRevisionGroupByOutputType[P]>;
}>>;
export type BlogRevisionWhereInput = {
    AND?: Prisma.BlogRevisionWhereInput | Prisma.BlogRevisionWhereInput[];
    OR?: Prisma.BlogRevisionWhereInput[];
    NOT?: Prisma.BlogRevisionWhereInput | Prisma.BlogRevisionWhereInput[];
    id?: Prisma.UuidFilter<"BlogRevision"> | string;
    postId?: Prisma.UuidFilter<"BlogRevision"> | string;
    authorId?: Prisma.UuidFilter<"BlogRevision"> | string;
    content?: Prisma.StringFilter<"BlogRevision"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlogRevision"> | Date | string;
    post?: Prisma.XOR<Prisma.BlogPostScalarRelationFilter, Prisma.BlogPostWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BlogRevisionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    post?: Prisma.BlogPostOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type BlogRevisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BlogRevisionWhereInput | Prisma.BlogRevisionWhereInput[];
    OR?: Prisma.BlogRevisionWhereInput[];
    NOT?: Prisma.BlogRevisionWhereInput | Prisma.BlogRevisionWhereInput[];
    postId?: Prisma.UuidFilter<"BlogRevision"> | string;
    authorId?: Prisma.UuidFilter<"BlogRevision"> | string;
    content?: Prisma.StringFilter<"BlogRevision"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlogRevision"> | Date | string;
    post?: Prisma.XOR<Prisma.BlogPostScalarRelationFilter, Prisma.BlogPostWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type BlogRevisionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BlogRevisionCountOrderByAggregateInput;
    _max?: Prisma.BlogRevisionMaxOrderByAggregateInput;
    _min?: Prisma.BlogRevisionMinOrderByAggregateInput;
};
export type BlogRevisionScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlogRevisionScalarWhereWithAggregatesInput | Prisma.BlogRevisionScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlogRevisionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlogRevisionScalarWhereWithAggregatesInput | Prisma.BlogRevisionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BlogRevision"> | string;
    postId?: Prisma.UuidWithAggregatesFilter<"BlogRevision"> | string;
    authorId?: Prisma.UuidWithAggregatesFilter<"BlogRevision"> | string;
    content?: Prisma.StringWithAggregatesFilter<"BlogRevision"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BlogRevision"> | Date | string;
};
export type BlogRevisionCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    post: Prisma.BlogPostCreateNestedOneWithoutRevisionsInput;
    author: Prisma.UserCreateNestedOneWithoutBlogRevisionsInput;
};
export type BlogRevisionUncheckedCreateInput = {
    id?: string;
    postId: string;
    authorId: string;
    content: string;
    createdAt?: Date | string;
};
export type BlogRevisionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.BlogPostUpdateOneRequiredWithoutRevisionsNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutBlogRevisionsNestedInput;
};
export type BlogRevisionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogRevisionCreateManyInput = {
    id?: string;
    postId: string;
    authorId: string;
    content: string;
    createdAt?: Date | string;
};
export type BlogRevisionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogRevisionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogRevisionListRelationFilter = {
    every?: Prisma.BlogRevisionWhereInput;
    some?: Prisma.BlogRevisionWhereInput;
    none?: Prisma.BlogRevisionWhereInput;
};
export type BlogRevisionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BlogRevisionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlogRevisionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlogRevisionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    postId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BlogRevisionCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.BlogRevisionCreateWithoutAuthorInput, Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput> | Prisma.BlogRevisionCreateWithoutAuthorInput[] | Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogRevisionCreateOrConnectWithoutAuthorInput | Prisma.BlogRevisionCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.BlogRevisionCreateManyAuthorInputEnvelope;
    connect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
};
export type BlogRevisionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.BlogRevisionCreateWithoutAuthorInput, Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput> | Prisma.BlogRevisionCreateWithoutAuthorInput[] | Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogRevisionCreateOrConnectWithoutAuthorInput | Prisma.BlogRevisionCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.BlogRevisionCreateManyAuthorInputEnvelope;
    connect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
};
export type BlogRevisionUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.BlogRevisionCreateWithoutAuthorInput, Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput> | Prisma.BlogRevisionCreateWithoutAuthorInput[] | Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogRevisionCreateOrConnectWithoutAuthorInput | Prisma.BlogRevisionCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.BlogRevisionUpsertWithWhereUniqueWithoutAuthorInput | Prisma.BlogRevisionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.BlogRevisionCreateManyAuthorInputEnvelope;
    set?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    disconnect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    delete?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    connect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    update?: Prisma.BlogRevisionUpdateWithWhereUniqueWithoutAuthorInput | Prisma.BlogRevisionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.BlogRevisionUpdateManyWithWhereWithoutAuthorInput | Prisma.BlogRevisionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.BlogRevisionScalarWhereInput | Prisma.BlogRevisionScalarWhereInput[];
};
export type BlogRevisionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.BlogRevisionCreateWithoutAuthorInput, Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput> | Prisma.BlogRevisionCreateWithoutAuthorInput[] | Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogRevisionCreateOrConnectWithoutAuthorInput | Prisma.BlogRevisionCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.BlogRevisionUpsertWithWhereUniqueWithoutAuthorInput | Prisma.BlogRevisionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.BlogRevisionCreateManyAuthorInputEnvelope;
    set?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    disconnect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    delete?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    connect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    update?: Prisma.BlogRevisionUpdateWithWhereUniqueWithoutAuthorInput | Prisma.BlogRevisionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.BlogRevisionUpdateManyWithWhereWithoutAuthorInput | Prisma.BlogRevisionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.BlogRevisionScalarWhereInput | Prisma.BlogRevisionScalarWhereInput[];
};
export type BlogRevisionCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.BlogRevisionCreateWithoutPostInput, Prisma.BlogRevisionUncheckedCreateWithoutPostInput> | Prisma.BlogRevisionCreateWithoutPostInput[] | Prisma.BlogRevisionUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.BlogRevisionCreateOrConnectWithoutPostInput | Prisma.BlogRevisionCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.BlogRevisionCreateManyPostInputEnvelope;
    connect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
};
export type BlogRevisionUncheckedCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.BlogRevisionCreateWithoutPostInput, Prisma.BlogRevisionUncheckedCreateWithoutPostInput> | Prisma.BlogRevisionCreateWithoutPostInput[] | Prisma.BlogRevisionUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.BlogRevisionCreateOrConnectWithoutPostInput | Prisma.BlogRevisionCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.BlogRevisionCreateManyPostInputEnvelope;
    connect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
};
export type BlogRevisionUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.BlogRevisionCreateWithoutPostInput, Prisma.BlogRevisionUncheckedCreateWithoutPostInput> | Prisma.BlogRevisionCreateWithoutPostInput[] | Prisma.BlogRevisionUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.BlogRevisionCreateOrConnectWithoutPostInput | Prisma.BlogRevisionCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.BlogRevisionUpsertWithWhereUniqueWithoutPostInput | Prisma.BlogRevisionUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.BlogRevisionCreateManyPostInputEnvelope;
    set?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    disconnect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    delete?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    connect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    update?: Prisma.BlogRevisionUpdateWithWhereUniqueWithoutPostInput | Prisma.BlogRevisionUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.BlogRevisionUpdateManyWithWhereWithoutPostInput | Prisma.BlogRevisionUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.BlogRevisionScalarWhereInput | Prisma.BlogRevisionScalarWhereInput[];
};
export type BlogRevisionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.BlogRevisionCreateWithoutPostInput, Prisma.BlogRevisionUncheckedCreateWithoutPostInput> | Prisma.BlogRevisionCreateWithoutPostInput[] | Prisma.BlogRevisionUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.BlogRevisionCreateOrConnectWithoutPostInput | Prisma.BlogRevisionCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.BlogRevisionUpsertWithWhereUniqueWithoutPostInput | Prisma.BlogRevisionUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.BlogRevisionCreateManyPostInputEnvelope;
    set?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    disconnect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    delete?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    connect?: Prisma.BlogRevisionWhereUniqueInput | Prisma.BlogRevisionWhereUniqueInput[];
    update?: Prisma.BlogRevisionUpdateWithWhereUniqueWithoutPostInput | Prisma.BlogRevisionUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.BlogRevisionUpdateManyWithWhereWithoutPostInput | Prisma.BlogRevisionUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.BlogRevisionScalarWhereInput | Prisma.BlogRevisionScalarWhereInput[];
};
export type BlogRevisionCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    post: Prisma.BlogPostCreateNestedOneWithoutRevisionsInput;
};
export type BlogRevisionUncheckedCreateWithoutAuthorInput = {
    id?: string;
    postId: string;
    content: string;
    createdAt?: Date | string;
};
export type BlogRevisionCreateOrConnectWithoutAuthorInput = {
    where: Prisma.BlogRevisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogRevisionCreateWithoutAuthorInput, Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput>;
};
export type BlogRevisionCreateManyAuthorInputEnvelope = {
    data: Prisma.BlogRevisionCreateManyAuthorInput | Prisma.BlogRevisionCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type BlogRevisionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.BlogRevisionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlogRevisionUpdateWithoutAuthorInput, Prisma.BlogRevisionUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.BlogRevisionCreateWithoutAuthorInput, Prisma.BlogRevisionUncheckedCreateWithoutAuthorInput>;
};
export type BlogRevisionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.BlogRevisionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlogRevisionUpdateWithoutAuthorInput, Prisma.BlogRevisionUncheckedUpdateWithoutAuthorInput>;
};
export type BlogRevisionUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.BlogRevisionScalarWhereInput;
    data: Prisma.XOR<Prisma.BlogRevisionUpdateManyMutationInput, Prisma.BlogRevisionUncheckedUpdateManyWithoutAuthorInput>;
};
export type BlogRevisionScalarWhereInput = {
    AND?: Prisma.BlogRevisionScalarWhereInput | Prisma.BlogRevisionScalarWhereInput[];
    OR?: Prisma.BlogRevisionScalarWhereInput[];
    NOT?: Prisma.BlogRevisionScalarWhereInput | Prisma.BlogRevisionScalarWhereInput[];
    id?: Prisma.UuidFilter<"BlogRevision"> | string;
    postId?: Prisma.UuidFilter<"BlogRevision"> | string;
    authorId?: Prisma.UuidFilter<"BlogRevision"> | string;
    content?: Prisma.StringFilter<"BlogRevision"> | string;
    createdAt?: Prisma.DateTimeFilter<"BlogRevision"> | Date | string;
};
export type BlogRevisionCreateWithoutPostInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutBlogRevisionsInput;
};
export type BlogRevisionUncheckedCreateWithoutPostInput = {
    id?: string;
    authorId: string;
    content: string;
    createdAt?: Date | string;
};
export type BlogRevisionCreateOrConnectWithoutPostInput = {
    where: Prisma.BlogRevisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogRevisionCreateWithoutPostInput, Prisma.BlogRevisionUncheckedCreateWithoutPostInput>;
};
export type BlogRevisionCreateManyPostInputEnvelope = {
    data: Prisma.BlogRevisionCreateManyPostInput | Prisma.BlogRevisionCreateManyPostInput[];
    skipDuplicates?: boolean;
};
export type BlogRevisionUpsertWithWhereUniqueWithoutPostInput = {
    where: Prisma.BlogRevisionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlogRevisionUpdateWithoutPostInput, Prisma.BlogRevisionUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.BlogRevisionCreateWithoutPostInput, Prisma.BlogRevisionUncheckedCreateWithoutPostInput>;
};
export type BlogRevisionUpdateWithWhereUniqueWithoutPostInput = {
    where: Prisma.BlogRevisionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlogRevisionUpdateWithoutPostInput, Prisma.BlogRevisionUncheckedUpdateWithoutPostInput>;
};
export type BlogRevisionUpdateManyWithWhereWithoutPostInput = {
    where: Prisma.BlogRevisionScalarWhereInput;
    data: Prisma.XOR<Prisma.BlogRevisionUpdateManyMutationInput, Prisma.BlogRevisionUncheckedUpdateManyWithoutPostInput>;
};
export type BlogRevisionCreateManyAuthorInput = {
    id?: string;
    postId: string;
    content: string;
    createdAt?: Date | string;
};
export type BlogRevisionUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.BlogPostUpdateOneRequiredWithoutRevisionsNestedInput;
};
export type BlogRevisionUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogRevisionUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    postId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogRevisionCreateManyPostInput = {
    id?: string;
    authorId: string;
    content: string;
    createdAt?: Date | string;
};
export type BlogRevisionUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutBlogRevisionsNestedInput;
};
export type BlogRevisionUncheckedUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogRevisionUncheckedUpdateManyWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogRevisionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    postId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogRevision"]>;
export type BlogRevisionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    postId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogRevision"]>;
export type BlogRevisionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    postId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogRevision"]>;
export type BlogRevisionSelectScalar = {
    id?: boolean;
    postId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
};
export type BlogRevisionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "postId" | "authorId" | "content" | "createdAt", ExtArgs["result"]["blogRevision"]>;
export type BlogRevisionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BlogRevisionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BlogRevisionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.BlogPostDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BlogRevisionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlogRevision";
    objects: {
        post: Prisma.$BlogPostPayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        postId: string;
        authorId: string;
        content: string;
        createdAt: Date;
    }, ExtArgs["result"]["blogRevision"]>;
    composites: {};
};
export type BlogRevisionGetPayload<S extends boolean | null | undefined | BlogRevisionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload, S>;
export type BlogRevisionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlogRevisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlogRevisionCountAggregateInputType | true;
};
export interface BlogRevisionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlogRevision'];
        meta: {
            name: 'BlogRevision';
        };
    };
    findUnique<T extends BlogRevisionFindUniqueArgs>(args: Prisma.SelectSubset<T, BlogRevisionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlogRevisionClient<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlogRevisionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlogRevisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogRevisionClient<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlogRevisionFindFirstArgs>(args?: Prisma.SelectSubset<T, BlogRevisionFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlogRevisionClient<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlogRevisionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlogRevisionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogRevisionClient<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlogRevisionFindManyArgs>(args?: Prisma.SelectSubset<T, BlogRevisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlogRevisionCreateArgs>(args: Prisma.SelectSubset<T, BlogRevisionCreateArgs<ExtArgs>>): Prisma.Prisma__BlogRevisionClient<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlogRevisionCreateManyArgs>(args?: Prisma.SelectSubset<T, BlogRevisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BlogRevisionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BlogRevisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BlogRevisionDeleteArgs>(args: Prisma.SelectSubset<T, BlogRevisionDeleteArgs<ExtArgs>>): Prisma.Prisma__BlogRevisionClient<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlogRevisionUpdateArgs>(args: Prisma.SelectSubset<T, BlogRevisionUpdateArgs<ExtArgs>>): Prisma.Prisma__BlogRevisionClient<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlogRevisionDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlogRevisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlogRevisionUpdateManyArgs>(args: Prisma.SelectSubset<T, BlogRevisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BlogRevisionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BlogRevisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BlogRevisionUpsertArgs>(args: Prisma.SelectSubset<T, BlogRevisionUpsertArgs<ExtArgs>>): Prisma.Prisma__BlogRevisionClient<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BlogRevisionCountArgs>(args?: Prisma.Subset<T, BlogRevisionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlogRevisionCountAggregateOutputType> : number>;
    aggregate<T extends BlogRevisionAggregateArgs>(args: Prisma.Subset<T, BlogRevisionAggregateArgs>): Prisma.PrismaPromise<GetBlogRevisionAggregateType<T>>;
    groupBy<T extends BlogRevisionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlogRevisionGroupByArgs['orderBy'];
    } : {
        orderBy?: BlogRevisionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlogRevisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogRevisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlogRevisionFieldRefs;
}
export interface Prisma__BlogRevisionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    post<T extends Prisma.BlogPostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BlogPostDefaultArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlogRevisionFieldRefs {
    readonly id: Prisma.FieldRef<"BlogRevision", 'String'>;
    readonly postId: Prisma.FieldRef<"BlogRevision", 'String'>;
    readonly authorId: Prisma.FieldRef<"BlogRevision", 'String'>;
    readonly content: Prisma.FieldRef<"BlogRevision", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BlogRevision", 'DateTime'>;
}
export type BlogRevisionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    where: Prisma.BlogRevisionWhereUniqueInput;
};
export type BlogRevisionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    where: Prisma.BlogRevisionWhereUniqueInput;
};
export type BlogRevisionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    where?: Prisma.BlogRevisionWhereInput;
    orderBy?: Prisma.BlogRevisionOrderByWithRelationInput | Prisma.BlogRevisionOrderByWithRelationInput[];
    cursor?: Prisma.BlogRevisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogRevisionScalarFieldEnum | Prisma.BlogRevisionScalarFieldEnum[];
};
export type BlogRevisionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    where?: Prisma.BlogRevisionWhereInput;
    orderBy?: Prisma.BlogRevisionOrderByWithRelationInput | Prisma.BlogRevisionOrderByWithRelationInput[];
    cursor?: Prisma.BlogRevisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogRevisionScalarFieldEnum | Prisma.BlogRevisionScalarFieldEnum[];
};
export type BlogRevisionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    where?: Prisma.BlogRevisionWhereInput;
    orderBy?: Prisma.BlogRevisionOrderByWithRelationInput | Prisma.BlogRevisionOrderByWithRelationInput[];
    cursor?: Prisma.BlogRevisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogRevisionScalarFieldEnum | Prisma.BlogRevisionScalarFieldEnum[];
};
export type BlogRevisionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogRevisionCreateInput, Prisma.BlogRevisionUncheckedCreateInput>;
};
export type BlogRevisionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlogRevisionCreateManyInput | Prisma.BlogRevisionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlogRevisionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    data: Prisma.BlogRevisionCreateManyInput | Prisma.BlogRevisionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BlogRevisionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BlogRevisionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogRevisionUpdateInput, Prisma.BlogRevisionUncheckedUpdateInput>;
    where: Prisma.BlogRevisionWhereUniqueInput;
};
export type BlogRevisionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlogRevisionUpdateManyMutationInput, Prisma.BlogRevisionUncheckedUpdateManyInput>;
    where?: Prisma.BlogRevisionWhereInput;
    limit?: number;
};
export type BlogRevisionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogRevisionUpdateManyMutationInput, Prisma.BlogRevisionUncheckedUpdateManyInput>;
    where?: Prisma.BlogRevisionWhereInput;
    limit?: number;
    include?: Prisma.BlogRevisionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BlogRevisionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    where: Prisma.BlogRevisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogRevisionCreateInput, Prisma.BlogRevisionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlogRevisionUpdateInput, Prisma.BlogRevisionUncheckedUpdateInput>;
};
export type BlogRevisionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
    where: Prisma.BlogRevisionWhereUniqueInput;
};
export type BlogRevisionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogRevisionWhereInput;
    limit?: number;
};
export type BlogRevisionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogRevisionSelect<ExtArgs> | null;
    omit?: Prisma.BlogRevisionOmit<ExtArgs> | null;
    include?: Prisma.BlogRevisionInclude<ExtArgs> | null;
};

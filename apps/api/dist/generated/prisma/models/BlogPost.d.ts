import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BlogPostModel = runtime.Types.Result.DefaultSelection<Prisma.$BlogPostPayload>;
export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null;
    _min: BlogPostMinAggregateOutputType | null;
    _max: BlogPostMaxAggregateOutputType | null;
};
export type BlogPostMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    authorId: string | null;
    title: string | null;
    slug: string | null;
    excerpt: string | null;
    content: string | null;
    status: $Enums.ContentStatus | null;
    seoTitle: string | null;
    seoDescription: string | null;
    publishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BlogPostMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    authorId: string | null;
    title: string | null;
    slug: string | null;
    excerpt: string | null;
    content: string | null;
    status: $Enums.ContentStatus | null;
    seoTitle: string | null;
    seoDescription: string | null;
    publishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BlogPostCountAggregateOutputType = {
    id: number;
    organizationId: number;
    authorId: number;
    title: number;
    slug: number;
    excerpt: number;
    content: number;
    status: number;
    seoTitle: number;
    seoDescription: number;
    publishedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BlogPostMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    authorId?: true;
    title?: true;
    slug?: true;
    excerpt?: true;
    content?: true;
    status?: true;
    seoTitle?: true;
    seoDescription?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BlogPostMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    authorId?: true;
    title?: true;
    slug?: true;
    excerpt?: true;
    content?: true;
    status?: true;
    seoTitle?: true;
    seoDescription?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BlogPostCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    authorId?: true;
    title?: true;
    slug?: true;
    excerpt?: true;
    content?: true;
    status?: true;
    seoTitle?: true;
    seoDescription?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BlogPostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithRelationInput | Prisma.BlogPostOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BlogPostCountAggregateInputType;
    _min?: BlogPostMinAggregateInputType;
    _max?: BlogPostMaxAggregateInputType;
};
export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
    [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBlogPost[P]> : Prisma.GetScalarType<T[P], AggregateBlogPost[P]>;
};
export type BlogPostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithAggregationInput | Prisma.BlogPostOrderByWithAggregationInput[];
    by: Prisma.BlogPostScalarFieldEnum[] | Prisma.BlogPostScalarFieldEnum;
    having?: Prisma.BlogPostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlogPostCountAggregateInputType | true;
    _min?: BlogPostMinAggregateInputType;
    _max?: BlogPostMaxAggregateInputType;
};
export type BlogPostGroupByOutputType = {
    id: string;
    organizationId: string | null;
    authorId: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    status: $Enums.ContentStatus;
    seoTitle: string | null;
    seoDescription: string | null;
    publishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BlogPostCountAggregateOutputType | null;
    _min: BlogPostMinAggregateOutputType | null;
    _max: BlogPostMaxAggregateOutputType | null;
};
export type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BlogPostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BlogPostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BlogPostGroupByOutputType[P]>;
}>>;
export type BlogPostWhereInput = {
    AND?: Prisma.BlogPostWhereInput | Prisma.BlogPostWhereInput[];
    OR?: Prisma.BlogPostWhereInput[];
    NOT?: Prisma.BlogPostWhereInput | Prisma.BlogPostWhereInput[];
    id?: Prisma.UuidFilter<"BlogPost"> | string;
    organizationId?: Prisma.UuidNullableFilter<"BlogPost"> | string | null;
    authorId?: Prisma.UuidFilter<"BlogPost"> | string;
    title?: Prisma.StringFilter<"BlogPost"> | string;
    slug?: Prisma.StringFilter<"BlogPost"> | string;
    excerpt?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    content?: Prisma.StringFilter<"BlogPost"> | string;
    status?: Prisma.EnumContentStatusFilter<"BlogPost"> | $Enums.ContentStatus;
    seoTitle?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    seoDescription?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"BlogPost"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    revisions?: Prisma.BlogRevisionListRelationFilter;
    tags?: Prisma.BlogPostTagListRelationFilter;
};
export type BlogPostOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    seoTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    seoDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
    revisions?: Prisma.BlogRevisionOrderByRelationAggregateInput;
    tags?: Prisma.BlogPostTagOrderByRelationAggregateInput;
};
export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.BlogPostWhereInput | Prisma.BlogPostWhereInput[];
    OR?: Prisma.BlogPostWhereInput[];
    NOT?: Prisma.BlogPostWhereInput | Prisma.BlogPostWhereInput[];
    organizationId?: Prisma.UuidNullableFilter<"BlogPost"> | string | null;
    authorId?: Prisma.UuidFilter<"BlogPost"> | string;
    title?: Prisma.StringFilter<"BlogPost"> | string;
    excerpt?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    content?: Prisma.StringFilter<"BlogPost"> | string;
    status?: Prisma.EnumContentStatusFilter<"BlogPost"> | $Enums.ContentStatus;
    seoTitle?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    seoDescription?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"BlogPost"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationWhereInput> | null;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    revisions?: Prisma.BlogRevisionListRelationFilter;
    tags?: Prisma.BlogPostTagListRelationFilter;
}, "id" | "slug">;
export type BlogPostOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    seoTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    seoDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BlogPostCountOrderByAggregateInput;
    _max?: Prisma.BlogPostMaxOrderByAggregateInput;
    _min?: Prisma.BlogPostMinOrderByAggregateInput;
};
export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: Prisma.BlogPostScalarWhereWithAggregatesInput | Prisma.BlogPostScalarWhereWithAggregatesInput[];
    OR?: Prisma.BlogPostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BlogPostScalarWhereWithAggregatesInput | Prisma.BlogPostScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BlogPost"> | string;
    organizationId?: Prisma.UuidNullableWithAggregatesFilter<"BlogPost"> | string | null;
    authorId?: Prisma.UuidWithAggregatesFilter<"BlogPost"> | string;
    title?: Prisma.StringWithAggregatesFilter<"BlogPost"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"BlogPost"> | string;
    excerpt?: Prisma.StringNullableWithAggregatesFilter<"BlogPost"> | string | null;
    content?: Prisma.StringWithAggregatesFilter<"BlogPost"> | string;
    status?: Prisma.EnumContentStatusWithAggregatesFilter<"BlogPost"> | $Enums.ContentStatus;
    seoTitle?: Prisma.StringNullableWithAggregatesFilter<"BlogPost"> | string | null;
    seoDescription?: Prisma.StringNullableWithAggregatesFilter<"BlogPost"> | string | null;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BlogPost"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BlogPost"> | Date | string;
};
export type BlogPostCreateInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutBlogPostsInput;
    author: Prisma.UserCreateNestedOneWithoutBlogPostsInput;
    revisions?: Prisma.BlogRevisionCreateNestedManyWithoutPostInput;
    tags?: Prisma.BlogPostTagCreateNestedManyWithoutPostInput;
};
export type BlogPostUncheckedCreateInput = {
    id?: string;
    organizationId?: string | null;
    authorId: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    revisions?: Prisma.BlogRevisionUncheckedCreateNestedManyWithoutPostInput;
    tags?: Prisma.BlogPostTagUncheckedCreateNestedManyWithoutPostInput;
};
export type BlogPostUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutBlogPostsNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutBlogPostsNestedInput;
    revisions?: Prisma.BlogRevisionUpdateManyWithoutPostNestedInput;
    tags?: Prisma.BlogPostTagUpdateManyWithoutPostNestedInput;
};
export type BlogPostUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revisions?: Prisma.BlogRevisionUncheckedUpdateManyWithoutPostNestedInput;
    tags?: Prisma.BlogPostTagUncheckedUpdateManyWithoutPostNestedInput;
};
export type BlogPostCreateManyInput = {
    id?: string;
    organizationId?: string | null;
    authorId: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlogPostUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostListRelationFilter = {
    every?: Prisma.BlogPostWhereInput;
    some?: Prisma.BlogPostWhereInput;
    none?: Prisma.BlogPostWhereInput;
};
export type BlogPostOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BlogPostCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    seoTitle?: Prisma.SortOrder;
    seoDescription?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlogPostMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    seoTitle?: Prisma.SortOrder;
    seoDescription?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlogPostMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    excerpt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    seoTitle?: Prisma.SortOrder;
    seoDescription?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BlogPostScalarRelationFilter = {
    is?: Prisma.BlogPostWhereInput;
    isNot?: Prisma.BlogPostWhereInput;
};
export type BlogPostCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput> | Prisma.BlogPostCreateWithoutAuthorInput[] | Prisma.BlogPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutAuthorInput | Prisma.BlogPostCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.BlogPostCreateManyAuthorInputEnvelope;
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
};
export type BlogPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput> | Prisma.BlogPostCreateWithoutAuthorInput[] | Prisma.BlogPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutAuthorInput | Prisma.BlogPostCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.BlogPostCreateManyAuthorInputEnvelope;
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
};
export type BlogPostUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput> | Prisma.BlogPostCreateWithoutAuthorInput[] | Prisma.BlogPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutAuthorInput | Prisma.BlogPostCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.BlogPostUpsertWithWhereUniqueWithoutAuthorInput | Prisma.BlogPostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.BlogPostCreateManyAuthorInputEnvelope;
    set?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    disconnect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    delete?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    update?: Prisma.BlogPostUpdateWithWhereUniqueWithoutAuthorInput | Prisma.BlogPostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.BlogPostUpdateManyWithWhereWithoutAuthorInput | Prisma.BlogPostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
};
export type BlogPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput> | Prisma.BlogPostCreateWithoutAuthorInput[] | Prisma.BlogPostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutAuthorInput | Prisma.BlogPostCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.BlogPostUpsertWithWhereUniqueWithoutAuthorInput | Prisma.BlogPostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.BlogPostCreateManyAuthorInputEnvelope;
    set?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    disconnect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    delete?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    update?: Prisma.BlogPostUpdateWithWhereUniqueWithoutAuthorInput | Prisma.BlogPostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.BlogPostUpdateManyWithWhereWithoutAuthorInput | Prisma.BlogPostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
};
export type BlogPostCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutOrganizationInput, Prisma.BlogPostUncheckedCreateWithoutOrganizationInput> | Prisma.BlogPostCreateWithoutOrganizationInput[] | Prisma.BlogPostUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutOrganizationInput | Prisma.BlogPostCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.BlogPostCreateManyOrganizationInputEnvelope;
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
};
export type BlogPostUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutOrganizationInput, Prisma.BlogPostUncheckedCreateWithoutOrganizationInput> | Prisma.BlogPostCreateWithoutOrganizationInput[] | Prisma.BlogPostUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutOrganizationInput | Prisma.BlogPostCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.BlogPostCreateManyOrganizationInputEnvelope;
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
};
export type BlogPostUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutOrganizationInput, Prisma.BlogPostUncheckedCreateWithoutOrganizationInput> | Prisma.BlogPostCreateWithoutOrganizationInput[] | Prisma.BlogPostUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutOrganizationInput | Prisma.BlogPostCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.BlogPostUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.BlogPostUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.BlogPostCreateManyOrganizationInputEnvelope;
    set?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    disconnect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    delete?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    update?: Prisma.BlogPostUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.BlogPostUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.BlogPostUpdateManyWithWhereWithoutOrganizationInput | Prisma.BlogPostUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
};
export type BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutOrganizationInput, Prisma.BlogPostUncheckedCreateWithoutOrganizationInput> | Prisma.BlogPostCreateWithoutOrganizationInput[] | Prisma.BlogPostUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutOrganizationInput | Prisma.BlogPostCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.BlogPostUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.BlogPostUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.BlogPostCreateManyOrganizationInputEnvelope;
    set?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    disconnect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    delete?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    connect?: Prisma.BlogPostWhereUniqueInput | Prisma.BlogPostWhereUniqueInput[];
    update?: Prisma.BlogPostUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.BlogPostUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.BlogPostUpdateManyWithWhereWithoutOrganizationInput | Prisma.BlogPostUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
};
export type EnumContentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContentStatus;
};
export type BlogPostCreateNestedOneWithoutRevisionsInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutRevisionsInput, Prisma.BlogPostUncheckedCreateWithoutRevisionsInput>;
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutRevisionsInput;
    connect?: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostUpdateOneRequiredWithoutRevisionsNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutRevisionsInput, Prisma.BlogPostUncheckedCreateWithoutRevisionsInput>;
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutRevisionsInput;
    upsert?: Prisma.BlogPostUpsertWithoutRevisionsInput;
    connect?: Prisma.BlogPostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BlogPostUpdateToOneWithWhereWithoutRevisionsInput, Prisma.BlogPostUpdateWithoutRevisionsInput>, Prisma.BlogPostUncheckedUpdateWithoutRevisionsInput>;
};
export type BlogPostCreateNestedOneWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutTagsInput, Prisma.BlogPostUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutTagsInput;
    connect?: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.BlogPostCreateWithoutTagsInput, Prisma.BlogPostUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.BlogPostCreateOrConnectWithoutTagsInput;
    upsert?: Prisma.BlogPostUpsertWithoutTagsInput;
    connect?: Prisma.BlogPostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BlogPostUpdateToOneWithWhereWithoutTagsInput, Prisma.BlogPostUpdateWithoutTagsInput>, Prisma.BlogPostUncheckedUpdateWithoutTagsInput>;
};
export type BlogPostCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutBlogPostsInput;
    revisions?: Prisma.BlogRevisionCreateNestedManyWithoutPostInput;
    tags?: Prisma.BlogPostTagCreateNestedManyWithoutPostInput;
};
export type BlogPostUncheckedCreateWithoutAuthorInput = {
    id?: string;
    organizationId?: string | null;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    revisions?: Prisma.BlogRevisionUncheckedCreateNestedManyWithoutPostInput;
    tags?: Prisma.BlogPostTagUncheckedCreateNestedManyWithoutPostInput;
};
export type BlogPostCreateOrConnectWithoutAuthorInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput>;
};
export type BlogPostCreateManyAuthorInputEnvelope = {
    data: Prisma.BlogPostCreateManyAuthorInput | Prisma.BlogPostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type BlogPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlogPostUpdateWithoutAuthorInput, Prisma.BlogPostUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutAuthorInput, Prisma.BlogPostUncheckedCreateWithoutAuthorInput>;
};
export type BlogPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlogPostUpdateWithoutAuthorInput, Prisma.BlogPostUncheckedUpdateWithoutAuthorInput>;
};
export type BlogPostUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.BlogPostScalarWhereInput;
    data: Prisma.XOR<Prisma.BlogPostUpdateManyMutationInput, Prisma.BlogPostUncheckedUpdateManyWithoutAuthorInput>;
};
export type BlogPostScalarWhereInput = {
    AND?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
    OR?: Prisma.BlogPostScalarWhereInput[];
    NOT?: Prisma.BlogPostScalarWhereInput | Prisma.BlogPostScalarWhereInput[];
    id?: Prisma.UuidFilter<"BlogPost"> | string;
    organizationId?: Prisma.UuidNullableFilter<"BlogPost"> | string | null;
    authorId?: Prisma.UuidFilter<"BlogPost"> | string;
    title?: Prisma.StringFilter<"BlogPost"> | string;
    slug?: Prisma.StringFilter<"BlogPost"> | string;
    excerpt?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    content?: Prisma.StringFilter<"BlogPost"> | string;
    status?: Prisma.EnumContentStatusFilter<"BlogPost"> | $Enums.ContentStatus;
    seoTitle?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    seoDescription?: Prisma.StringNullableFilter<"BlogPost"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"BlogPost"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BlogPost"> | Date | string;
};
export type BlogPostCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutBlogPostsInput;
    revisions?: Prisma.BlogRevisionCreateNestedManyWithoutPostInput;
    tags?: Prisma.BlogPostTagCreateNestedManyWithoutPostInput;
};
export type BlogPostUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    revisions?: Prisma.BlogRevisionUncheckedCreateNestedManyWithoutPostInput;
    tags?: Prisma.BlogPostTagUncheckedCreateNestedManyWithoutPostInput;
};
export type BlogPostCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutOrganizationInput, Prisma.BlogPostUncheckedCreateWithoutOrganizationInput>;
};
export type BlogPostCreateManyOrganizationInputEnvelope = {
    data: Prisma.BlogPostCreateManyOrganizationInput | Prisma.BlogPostCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type BlogPostUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    update: Prisma.XOR<Prisma.BlogPostUpdateWithoutOrganizationInput, Prisma.BlogPostUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutOrganizationInput, Prisma.BlogPostUncheckedCreateWithoutOrganizationInput>;
};
export type BlogPostUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    data: Prisma.XOR<Prisma.BlogPostUpdateWithoutOrganizationInput, Prisma.BlogPostUncheckedUpdateWithoutOrganizationInput>;
};
export type BlogPostUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.BlogPostScalarWhereInput;
    data: Prisma.XOR<Prisma.BlogPostUpdateManyMutationInput, Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationInput>;
};
export type BlogPostCreateWithoutRevisionsInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutBlogPostsInput;
    author: Prisma.UserCreateNestedOneWithoutBlogPostsInput;
    tags?: Prisma.BlogPostTagCreateNestedManyWithoutPostInput;
};
export type BlogPostUncheckedCreateWithoutRevisionsInput = {
    id?: string;
    organizationId?: string | null;
    authorId: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: Prisma.BlogPostTagUncheckedCreateNestedManyWithoutPostInput;
};
export type BlogPostCreateOrConnectWithoutRevisionsInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutRevisionsInput, Prisma.BlogPostUncheckedCreateWithoutRevisionsInput>;
};
export type BlogPostUpsertWithoutRevisionsInput = {
    update: Prisma.XOR<Prisma.BlogPostUpdateWithoutRevisionsInput, Prisma.BlogPostUncheckedUpdateWithoutRevisionsInput>;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutRevisionsInput, Prisma.BlogPostUncheckedCreateWithoutRevisionsInput>;
    where?: Prisma.BlogPostWhereInput;
};
export type BlogPostUpdateToOneWithWhereWithoutRevisionsInput = {
    where?: Prisma.BlogPostWhereInput;
    data: Prisma.XOR<Prisma.BlogPostUpdateWithoutRevisionsInput, Prisma.BlogPostUncheckedUpdateWithoutRevisionsInput>;
};
export type BlogPostUpdateWithoutRevisionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutBlogPostsNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutBlogPostsNestedInput;
    tags?: Prisma.BlogPostTagUpdateManyWithoutPostNestedInput;
};
export type BlogPostUncheckedUpdateWithoutRevisionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: Prisma.BlogPostTagUncheckedUpdateManyWithoutPostNestedInput;
};
export type BlogPostCreateWithoutTagsInput = {
    id?: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: Prisma.OrganizationCreateNestedOneWithoutBlogPostsInput;
    author: Prisma.UserCreateNestedOneWithoutBlogPostsInput;
    revisions?: Prisma.BlogRevisionCreateNestedManyWithoutPostInput;
};
export type BlogPostUncheckedCreateWithoutTagsInput = {
    id?: string;
    organizationId?: string | null;
    authorId: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    revisions?: Prisma.BlogRevisionUncheckedCreateNestedManyWithoutPostInput;
};
export type BlogPostCreateOrConnectWithoutTagsInput = {
    where: Prisma.BlogPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutTagsInput, Prisma.BlogPostUncheckedCreateWithoutTagsInput>;
};
export type BlogPostUpsertWithoutTagsInput = {
    update: Prisma.XOR<Prisma.BlogPostUpdateWithoutTagsInput, Prisma.BlogPostUncheckedUpdateWithoutTagsInput>;
    create: Prisma.XOR<Prisma.BlogPostCreateWithoutTagsInput, Prisma.BlogPostUncheckedCreateWithoutTagsInput>;
    where?: Prisma.BlogPostWhereInput;
};
export type BlogPostUpdateToOneWithWhereWithoutTagsInput = {
    where?: Prisma.BlogPostWhereInput;
    data: Prisma.XOR<Prisma.BlogPostUpdateWithoutTagsInput, Prisma.BlogPostUncheckedUpdateWithoutTagsInput>;
};
export type BlogPostUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutBlogPostsNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutBlogPostsNestedInput;
    revisions?: Prisma.BlogRevisionUpdateManyWithoutPostNestedInput;
};
export type BlogPostUncheckedUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revisions?: Prisma.BlogRevisionUncheckedUpdateManyWithoutPostNestedInput;
};
export type BlogPostCreateManyAuthorInput = {
    id?: string;
    organizationId?: string | null;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlogPostUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneWithoutBlogPostsNestedInput;
    revisions?: Prisma.BlogRevisionUpdateManyWithoutPostNestedInput;
    tags?: Prisma.BlogPostTagUpdateManyWithoutPostNestedInput;
};
export type BlogPostUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revisions?: Prisma.BlogRevisionUncheckedUpdateManyWithoutPostNestedInput;
    tags?: Prisma.BlogPostTagUncheckedUpdateManyWithoutPostNestedInput;
};
export type BlogPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostCreateManyOrganizationInput = {
    id?: string;
    authorId: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;
    status?: $Enums.ContentStatus;
    seoTitle?: string | null;
    seoDescription?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BlogPostUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutBlogPostsNestedInput;
    revisions?: Prisma.BlogRevisionUpdateManyWithoutPostNestedInput;
    tags?: Prisma.BlogPostTagUpdateManyWithoutPostNestedInput;
};
export type BlogPostUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revisions?: Prisma.BlogRevisionUncheckedUpdateManyWithoutPostNestedInput;
    tags?: Prisma.BlogPostTagUncheckedUpdateManyWithoutPostNestedInput;
};
export type BlogPostUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    excerpt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BlogPostCountOutputType = {
    revisions: number;
    tags: number;
};
export type BlogPostCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    revisions?: boolean | BlogPostCountOutputTypeCountRevisionsArgs;
    tags?: boolean | BlogPostCountOutputTypeCountTagsArgs;
};
export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostCountOutputTypeSelect<ExtArgs> | null;
};
export type BlogPostCountOutputTypeCountRevisionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogRevisionWhereInput;
};
export type BlogPostCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostTagWhereInput;
};
export type BlogPostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    authorId?: boolean;
    title?: boolean;
    slug?: boolean;
    excerpt?: boolean;
    content?: boolean;
    status?: boolean;
    seoTitle?: boolean;
    seoDescription?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.BlogPost$organizationArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    revisions?: boolean | Prisma.BlogPost$revisionsArgs<ExtArgs>;
    tags?: boolean | Prisma.BlogPost$tagsArgs<ExtArgs>;
    _count?: boolean | Prisma.BlogPostCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPost"]>;
export type BlogPostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    authorId?: boolean;
    title?: boolean;
    slug?: boolean;
    excerpt?: boolean;
    content?: boolean;
    status?: boolean;
    seoTitle?: boolean;
    seoDescription?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.BlogPost$organizationArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPost"]>;
export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    authorId?: boolean;
    title?: boolean;
    slug?: boolean;
    excerpt?: boolean;
    content?: boolean;
    status?: boolean;
    seoTitle?: boolean;
    seoDescription?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.BlogPost$organizationArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["blogPost"]>;
export type BlogPostSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    authorId?: boolean;
    title?: boolean;
    slug?: boolean;
    excerpt?: boolean;
    content?: boolean;
    status?: boolean;
    seoTitle?: boolean;
    seoDescription?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BlogPostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "authorId" | "title" | "slug" | "excerpt" | "content" | "status" | "seoTitle" | "seoDescription" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPost"]>;
export type BlogPostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.BlogPost$organizationArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    revisions?: boolean | Prisma.BlogPost$revisionsArgs<ExtArgs>;
    tags?: boolean | Prisma.BlogPost$tagsArgs<ExtArgs>;
    _count?: boolean | Prisma.BlogPostCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.BlogPost$organizationArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.BlogPost$organizationArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BlogPostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BlogPost";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs> | null;
        author: Prisma.$UserPayload<ExtArgs>;
        revisions: Prisma.$BlogRevisionPayload<ExtArgs>[];
        tags: Prisma.$BlogPostTagPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string | null;
        authorId: string;
        title: string;
        slug: string;
        excerpt: string | null;
        content: string;
        status: $Enums.ContentStatus;
        seoTitle: string | null;
        seoDescription: string | null;
        publishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["blogPost"]>;
    composites: {};
};
export type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BlogPostPayload, S>;
export type BlogPostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BlogPostCountAggregateInputType | true;
};
export interface BlogPostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'];
        meta: {
            name: 'BlogPost';
        };
    };
    findUnique<T extends BlogPostFindUniqueArgs>(args: Prisma.SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BlogPostFindFirstArgs>(args?: Prisma.SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BlogPostFindManyArgs>(args?: Prisma.SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BlogPostCreateArgs>(args: Prisma.SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BlogPostCreateManyArgs>(args?: Prisma.SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BlogPostDeleteArgs>(args: Prisma.SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BlogPostUpdateArgs>(args: Prisma.SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: Prisma.SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BlogPostUpdateManyArgs>(args: Prisma.SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BlogPostUpsertArgs>(args: Prisma.SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma.Prisma__BlogPostClient<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BlogPostCountArgs>(args?: Prisma.Subset<T, BlogPostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BlogPostCountAggregateOutputType> : number>;
    aggregate<T extends BlogPostAggregateArgs>(args: Prisma.Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>;
    groupBy<T extends BlogPostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BlogPostGroupByArgs['orderBy'];
    } : {
        orderBy?: BlogPostGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BlogPostFieldRefs;
}
export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.BlogPost$organizationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BlogPost$organizationArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    revisions<T extends Prisma.BlogPost$revisionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BlogPost$revisionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogRevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tags<T extends Prisma.BlogPost$tagsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BlogPost$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BlogPostFieldRefs {
    readonly id: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly organizationId: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly authorId: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly title: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly slug: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly excerpt: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly content: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly status: Prisma.FieldRef<"BlogPost", 'ContentStatus'>;
    readonly seoTitle: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly seoDescription: Prisma.FieldRef<"BlogPost", 'String'>;
    readonly publishedAt: Prisma.FieldRef<"BlogPost", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"BlogPost", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BlogPost", 'DateTime'>;
}
export type BlogPostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithRelationInput | Prisma.BlogPostOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogPostScalarFieldEnum | Prisma.BlogPostScalarFieldEnum[];
};
export type BlogPostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithRelationInput | Prisma.BlogPostOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogPostScalarFieldEnum | Prisma.BlogPostScalarFieldEnum[];
};
export type BlogPostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where?: Prisma.BlogPostWhereInput;
    orderBy?: Prisma.BlogPostOrderByWithRelationInput | Prisma.BlogPostOrderByWithRelationInput[];
    cursor?: Prisma.BlogPostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlogPostScalarFieldEnum | Prisma.BlogPostScalarFieldEnum[];
};
export type BlogPostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostCreateInput, Prisma.BlogPostUncheckedCreateInput>;
};
export type BlogPostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BlogPostCreateManyInput | Prisma.BlogPostCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BlogPostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    data: Prisma.BlogPostCreateManyInput | Prisma.BlogPostCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BlogPostIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BlogPostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostUpdateInput, Prisma.BlogPostUncheckedUpdateInput>;
    where: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BlogPostUpdateManyMutationInput, Prisma.BlogPostUncheckedUpdateManyInput>;
    where?: Prisma.BlogPostWhereInput;
    limit?: number;
};
export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BlogPostUpdateManyMutationInput, Prisma.BlogPostUncheckedUpdateManyInput>;
    where?: Prisma.BlogPostWhereInput;
    limit?: number;
    include?: Prisma.BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BlogPostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where: Prisma.BlogPostWhereUniqueInput;
    create: Prisma.XOR<Prisma.BlogPostCreateInput, Prisma.BlogPostUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BlogPostUpdateInput, Prisma.BlogPostUncheckedUpdateInput>;
};
export type BlogPostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
    where: Prisma.BlogPostWhereUniqueInput;
};
export type BlogPostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
    limit?: number;
};
export type BlogPost$organizationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
};
export type BlogPost$revisionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BlogPost$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BlogPostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BlogPostSelect<ExtArgs> | null;
    omit?: Prisma.BlogPostOmit<ExtArgs> | null;
    include?: Prisma.BlogPostInclude<ExtArgs> | null;
};

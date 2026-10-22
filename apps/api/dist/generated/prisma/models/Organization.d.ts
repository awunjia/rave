import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganizationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationPayload>;
export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganizationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationCountAggregateInputType;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganization[P]> : Prisma.GetScalarType<T[P], AggregateOrganization[P]>;
};
export type OrganizationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithAggregationInput | Prisma.OrganizationOrderByWithAggregationInput[];
    by: Prisma.OrganizationScalarFieldEnum[] | Prisma.OrganizationScalarFieldEnum;
    having?: Prisma.OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
}>>;
export type OrganizationWhereInput = {
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    id?: Prisma.UuidFilter<"Organization"> | string;
    name?: Prisma.StringFilter<"Organization"> | string;
    slug?: Prisma.StringFilter<"Organization"> | string;
    isActive?: Prisma.BoolFilter<"Organization"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    members?: Prisma.OrganizationMemberListRelationFilter;
    roles?: Prisma.RoleListRelationFilter;
    consultantProfiles?: Prisma.ConsultantProfileListRelationFilter;
    services?: Prisma.ServiceListRelationFilter;
    bookings?: Prisma.BookingListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
    settings?: Prisma.OrganizationSettingListRelationFilter;
    meetingAccounts?: Prisma.MeetingProviderAccountListRelationFilter;
    blogPosts?: Prisma.BlogPostListRelationFilter;
    analyticsEvents?: Prisma.AnalyticsEventListRelationFilter;
};
export type OrganizationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    members?: Prisma.OrganizationMemberOrderByRelationAggregateInput;
    roles?: Prisma.RoleOrderByRelationAggregateInput;
    consultantProfiles?: Prisma.ConsultantProfileOrderByRelationAggregateInput;
    services?: Prisma.ServiceOrderByRelationAggregateInput;
    bookings?: Prisma.BookingOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
    settings?: Prisma.OrganizationSettingOrderByRelationAggregateInput;
    meetingAccounts?: Prisma.MeetingProviderAccountOrderByRelationAggregateInput;
    blogPosts?: Prisma.BlogPostOrderByRelationAggregateInput;
    analyticsEvents?: Prisma.AnalyticsEventOrderByRelationAggregateInput;
};
export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    name?: Prisma.StringFilter<"Organization"> | string;
    isActive?: Prisma.BoolFilter<"Organization"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    members?: Prisma.OrganizationMemberListRelationFilter;
    roles?: Prisma.RoleListRelationFilter;
    consultantProfiles?: Prisma.ConsultantProfileListRelationFilter;
    services?: Prisma.ServiceListRelationFilter;
    bookings?: Prisma.BookingListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
    settings?: Prisma.OrganizationSettingListRelationFilter;
    meetingAccounts?: Prisma.MeetingProviderAccountListRelationFilter;
    blogPosts?: Prisma.BlogPostListRelationFilter;
    analyticsEvents?: Prisma.AnalyticsEventListRelationFilter;
}, "id" | "slug">;
export type OrganizationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationCountOrderByAggregateInput;
    _max?: Prisma.OrganizationMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationMinOrderByAggregateInput;
};
export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Organization"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Organization"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
};
export type OrganizationCreateInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput;
    isNot?: Prisma.OrganizationWhereInput;
};
export type OrganizationNullableScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput | null;
    isNot?: Prisma.OrganizationWhereInput | null;
};
export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMembersInput, Prisma.OrganizationUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMembersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMembersInput, Prisma.OrganizationUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.OrganizationUpsertWithoutMembersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutMembersInput, Prisma.OrganizationUpdateWithoutMembersInput>, Prisma.OrganizationUncheckedUpdateWithoutMembersInput>;
};
export type OrganizationCreateNestedOneWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutRolesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutRolesInput;
    upsert?: Prisma.OrganizationUpsertWithoutRolesInput;
    disconnect?: Prisma.OrganizationWhereInput | boolean;
    delete?: Prisma.OrganizationWhereInput | boolean;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutRolesInput, Prisma.OrganizationUpdateWithoutRolesInput>, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
};
export type OrganizationCreateNestedOneWithoutConsultantProfilesInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutConsultantProfilesInput, Prisma.OrganizationUncheckedCreateWithoutConsultantProfilesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutConsultantProfilesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutConsultantProfilesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutConsultantProfilesInput, Prisma.OrganizationUncheckedCreateWithoutConsultantProfilesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutConsultantProfilesInput;
    upsert?: Prisma.OrganizationUpsertWithoutConsultantProfilesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutConsultantProfilesInput, Prisma.OrganizationUpdateWithoutConsultantProfilesInput>, Prisma.OrganizationUncheckedUpdateWithoutConsultantProfilesInput>;
};
export type OrganizationCreateNestedOneWithoutServicesInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutServicesInput, Prisma.OrganizationUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutServicesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutServicesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutServicesInput, Prisma.OrganizationUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutServicesInput;
    upsert?: Prisma.OrganizationUpsertWithoutServicesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutServicesInput, Prisma.OrganizationUpdateWithoutServicesInput>, Prisma.OrganizationUncheckedUpdateWithoutServicesInput>;
};
export type OrganizationCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutBookingsInput, Prisma.OrganizationUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutBookingsInput, Prisma.OrganizationUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.OrganizationUpsertWithoutBookingsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutBookingsInput, Prisma.OrganizationUpdateWithoutBookingsInput>, Prisma.OrganizationUncheckedUpdateWithoutBookingsInput>;
};
export type OrganizationCreateNestedOneWithoutMeetingAccountsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMeetingAccountsInput, Prisma.OrganizationUncheckedCreateWithoutMeetingAccountsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMeetingAccountsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneWithoutMeetingAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMeetingAccountsInput, Prisma.OrganizationUncheckedCreateWithoutMeetingAccountsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMeetingAccountsInput;
    upsert?: Prisma.OrganizationUpsertWithoutMeetingAccountsInput;
    disconnect?: Prisma.OrganizationWhereInput | boolean;
    delete?: Prisma.OrganizationWhereInput | boolean;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutMeetingAccountsInput, Prisma.OrganizationUpdateWithoutMeetingAccountsInput>, Prisma.OrganizationUncheckedUpdateWithoutMeetingAccountsInput>;
};
export type OrganizationCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutInvoicesInput, Prisma.OrganizationUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutInvoicesInput, Prisma.OrganizationUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.OrganizationUpsertWithoutInvoicesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutInvoicesInput, Prisma.OrganizationUpdateWithoutInvoicesInput>, Prisma.OrganizationUncheckedUpdateWithoutInvoicesInput>;
};
export type OrganizationCreateNestedOneWithoutBlogPostsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutBlogPostsInput, Prisma.OrganizationUncheckedCreateWithoutBlogPostsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutBlogPostsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneWithoutBlogPostsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutBlogPostsInput, Prisma.OrganizationUncheckedCreateWithoutBlogPostsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutBlogPostsInput;
    upsert?: Prisma.OrganizationUpsertWithoutBlogPostsInput;
    disconnect?: Prisma.OrganizationWhereInput | boolean;
    delete?: Prisma.OrganizationWhereInput | boolean;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutBlogPostsInput, Prisma.OrganizationUpdateWithoutBlogPostsInput>, Prisma.OrganizationUncheckedUpdateWithoutBlogPostsInput>;
};
export type OrganizationCreateNestedOneWithoutSettingsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutSettingsInput, Prisma.OrganizationUncheckedCreateWithoutSettingsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutSettingsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutSettingsInput, Prisma.OrganizationUncheckedCreateWithoutSettingsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutSettingsInput;
    upsert?: Prisma.OrganizationUpsertWithoutSettingsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutSettingsInput, Prisma.OrganizationUpdateWithoutSettingsInput>, Prisma.OrganizationUncheckedUpdateWithoutSettingsInput>;
};
export type OrganizationCreateNestedOneWithoutAnalyticsEventsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAnalyticsEventsInput, Prisma.OrganizationUncheckedCreateWithoutAnalyticsEventsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAnalyticsEventsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneWithoutAnalyticsEventsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAnalyticsEventsInput, Prisma.OrganizationUncheckedCreateWithoutAnalyticsEventsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAnalyticsEventsInput;
    upsert?: Prisma.OrganizationUpsertWithoutAnalyticsEventsInput;
    disconnect?: Prisma.OrganizationWhereInput | boolean;
    delete?: Prisma.OrganizationWhereInput | boolean;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutAnalyticsEventsInput, Prisma.OrganizationUpdateWithoutAnalyticsEventsInput>, Prisma.OrganizationUncheckedUpdateWithoutAnalyticsEventsInput>;
};
export type OrganizationCreateWithoutMembersInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMembersInput, Prisma.OrganizationUncheckedCreateWithoutMembersInput>;
};
export type OrganizationUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutMembersInput, Prisma.OrganizationUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMembersInput, Prisma.OrganizationUncheckedCreateWithoutMembersInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutMembersInput, Prisma.OrganizationUncheckedUpdateWithoutMembersInput>;
};
export type OrganizationUpdateWithoutMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutRolesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutRolesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutRolesInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
};
export type OrganizationUpsertWithoutRolesInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutRolesInput, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutRolesInput, Prisma.OrganizationUncheckedCreateWithoutRolesInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutRolesInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutRolesInput, Prisma.OrganizationUncheckedUpdateWithoutRolesInput>;
};
export type OrganizationUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutConsultantProfilesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutConsultantProfilesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutConsultantProfilesInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutConsultantProfilesInput, Prisma.OrganizationUncheckedCreateWithoutConsultantProfilesInput>;
};
export type OrganizationUpsertWithoutConsultantProfilesInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutConsultantProfilesInput, Prisma.OrganizationUncheckedUpdateWithoutConsultantProfilesInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutConsultantProfilesInput, Prisma.OrganizationUncheckedCreateWithoutConsultantProfilesInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutConsultantProfilesInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutConsultantProfilesInput, Prisma.OrganizationUncheckedUpdateWithoutConsultantProfilesInput>;
};
export type OrganizationUpdateWithoutConsultantProfilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutConsultantProfilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutServicesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutServicesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutServicesInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutServicesInput, Prisma.OrganizationUncheckedCreateWithoutServicesInput>;
};
export type OrganizationUpsertWithoutServicesInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutServicesInput, Prisma.OrganizationUncheckedUpdateWithoutServicesInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutServicesInput, Prisma.OrganizationUncheckedCreateWithoutServicesInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutServicesInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutServicesInput, Prisma.OrganizationUncheckedUpdateWithoutServicesInput>;
};
export type OrganizationUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutBookingsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutBookingsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutBookingsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutBookingsInput, Prisma.OrganizationUncheckedCreateWithoutBookingsInput>;
};
export type OrganizationUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutBookingsInput, Prisma.OrganizationUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutBookingsInput, Prisma.OrganizationUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutBookingsInput, Prisma.OrganizationUncheckedUpdateWithoutBookingsInput>;
};
export type OrganizationUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutMeetingAccountsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutMeetingAccountsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutMeetingAccountsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMeetingAccountsInput, Prisma.OrganizationUncheckedCreateWithoutMeetingAccountsInput>;
};
export type OrganizationUpsertWithoutMeetingAccountsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutMeetingAccountsInput, Prisma.OrganizationUncheckedUpdateWithoutMeetingAccountsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMeetingAccountsInput, Prisma.OrganizationUncheckedCreateWithoutMeetingAccountsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutMeetingAccountsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutMeetingAccountsInput, Prisma.OrganizationUncheckedUpdateWithoutMeetingAccountsInput>;
};
export type OrganizationUpdateWithoutMeetingAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutMeetingAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutInvoicesInput, Prisma.OrganizationUncheckedCreateWithoutInvoicesInput>;
};
export type OrganizationUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutInvoicesInput, Prisma.OrganizationUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutInvoicesInput, Prisma.OrganizationUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutInvoicesInput, Prisma.OrganizationUncheckedUpdateWithoutInvoicesInput>;
};
export type OrganizationUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutBlogPostsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutBlogPostsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutBlogPostsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutBlogPostsInput, Prisma.OrganizationUncheckedCreateWithoutBlogPostsInput>;
};
export type OrganizationUpsertWithoutBlogPostsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutBlogPostsInput, Prisma.OrganizationUncheckedUpdateWithoutBlogPostsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutBlogPostsInput, Prisma.OrganizationUncheckedCreateWithoutBlogPostsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutBlogPostsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutBlogPostsInput, Prisma.OrganizationUncheckedUpdateWithoutBlogPostsInput>;
};
export type OrganizationUpdateWithoutBlogPostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutBlogPostsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutSettingsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutSettingsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutSettingsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutSettingsInput, Prisma.OrganizationUncheckedCreateWithoutSettingsInput>;
};
export type OrganizationUpsertWithoutSettingsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutSettingsInput, Prisma.OrganizationUncheckedUpdateWithoutSettingsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutSettingsInput, Prisma.OrganizationUncheckedCreateWithoutSettingsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutSettingsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutSettingsInput, Prisma.OrganizationUncheckedUpdateWithoutSettingsInput>;
};
export type OrganizationUpdateWithoutSettingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutSettingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
    analyticsEvents?: Prisma.AnalyticsEventUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutAnalyticsEventsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutAnalyticsEventsInput = {
    id?: string;
    name: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutOrganizationInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedCreateNestedManyWithoutOrganizationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganizationInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    settings?: Prisma.OrganizationSettingUncheckedCreateNestedManyWithoutOrganizationInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedCreateNestedManyWithoutOrganizationInput;
    blogPosts?: Prisma.BlogPostUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutAnalyticsEventsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAnalyticsEventsInput, Prisma.OrganizationUncheckedCreateWithoutAnalyticsEventsInput>;
};
export type OrganizationUpsertWithoutAnalyticsEventsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutAnalyticsEventsInput, Prisma.OrganizationUncheckedUpdateWithoutAnalyticsEventsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAnalyticsEventsInput, Prisma.OrganizationUncheckedCreateWithoutAnalyticsEventsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutAnalyticsEventsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutAnalyticsEventsInput, Prisma.OrganizationUncheckedUpdateWithoutAnalyticsEventsInput>;
};
export type OrganizationUpdateWithoutAnalyticsEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutAnalyticsEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutOrganizationNestedInput;
    consultantProfiles?: Prisma.ConsultantProfileUncheckedUpdateManyWithoutOrganizationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    settings?: Prisma.OrganizationSettingUncheckedUpdateManyWithoutOrganizationNestedInput;
    meetingAccounts?: Prisma.MeetingProviderAccountUncheckedUpdateManyWithoutOrganizationNestedInput;
    blogPosts?: Prisma.BlogPostUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCountOutputType = {
    members: number;
    roles: number;
    consultantProfiles: number;
    services: number;
    bookings: number;
    invoices: number;
    settings: number;
    meetingAccounts: number;
    blogPosts: number;
    analyticsEvents: number;
};
export type OrganizationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs;
    roles?: boolean | OrganizationCountOutputTypeCountRolesArgs;
    consultantProfiles?: boolean | OrganizationCountOutputTypeCountConsultantProfilesArgs;
    services?: boolean | OrganizationCountOutputTypeCountServicesArgs;
    bookings?: boolean | OrganizationCountOutputTypeCountBookingsArgs;
    invoices?: boolean | OrganizationCountOutputTypeCountInvoicesArgs;
    settings?: boolean | OrganizationCountOutputTypeCountSettingsArgs;
    meetingAccounts?: boolean | OrganizationCountOutputTypeCountMeetingAccountsArgs;
    blogPosts?: boolean | OrganizationCountOutputTypeCountBlogPostsArgs;
    analyticsEvents?: boolean | OrganizationCountOutputTypeCountAnalyticsEventsArgs;
};
export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationCountOutputTypeSelect<ExtArgs> | null;
};
export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationMemberWhereInput;
};
export type OrganizationCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
};
export type OrganizationCountOutputTypeCountConsultantProfilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultantProfileWhereInput;
};
export type OrganizationCountOutputTypeCountServicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
};
export type OrganizationCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
};
export type OrganizationCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type OrganizationCountOutputTypeCountSettingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationSettingWhereInput;
};
export type OrganizationCountOutputTypeCountMeetingAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingProviderAccountWhereInput;
};
export type OrganizationCountOutputTypeCountBlogPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlogPostWhereInput;
};
export type OrganizationCountOutputTypeCountAnalyticsEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsEventWhereInput;
};
export type OrganizationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    members?: boolean | Prisma.Organization$membersArgs<ExtArgs>;
    roles?: boolean | Prisma.Organization$rolesArgs<ExtArgs>;
    consultantProfiles?: boolean | Prisma.Organization$consultantProfilesArgs<ExtArgs>;
    services?: boolean | Prisma.Organization$servicesArgs<ExtArgs>;
    bookings?: boolean | Prisma.Organization$bookingsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Organization$invoicesArgs<ExtArgs>;
    settings?: boolean | Prisma.Organization$settingsArgs<ExtArgs>;
    meetingAccounts?: boolean | Prisma.Organization$meetingAccountsArgs<ExtArgs>;
    blogPosts?: boolean | Prisma.Organization$blogPostsArgs<ExtArgs>;
    analyticsEvents?: boolean | Prisma.Organization$analyticsEventsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrganizationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>;
export type OrganizationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | Prisma.Organization$membersArgs<ExtArgs>;
    roles?: boolean | Prisma.Organization$rolesArgs<ExtArgs>;
    consultantProfiles?: boolean | Prisma.Organization$consultantProfilesArgs<ExtArgs>;
    services?: boolean | Prisma.Organization$servicesArgs<ExtArgs>;
    bookings?: boolean | Prisma.Organization$bookingsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Organization$invoicesArgs<ExtArgs>;
    settings?: boolean | Prisma.Organization$settingsArgs<ExtArgs>;
    meetingAccounts?: boolean | Prisma.Organization$meetingAccountsArgs<ExtArgs>;
    blogPosts?: boolean | Prisma.Organization$blogPostsArgs<ExtArgs>;
    analyticsEvents?: boolean | Prisma.Organization$analyticsEventsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrganizationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Organization";
    objects: {
        members: Prisma.$OrganizationMemberPayload<ExtArgs>[];
        roles: Prisma.$RolePayload<ExtArgs>[];
        consultantProfiles: Prisma.$ConsultantProfilePayload<ExtArgs>[];
        services: Prisma.$ServicePayload<ExtArgs>[];
        bookings: Prisma.$BookingPayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
        settings: Prisma.$OrganizationSettingPayload<ExtArgs>[];
        meetingAccounts: Prisma.$MeetingProviderAccountPayload<ExtArgs>[];
        blogPosts: Prisma.$BlogPostPayload<ExtArgs>[];
        analyticsEvents: Prisma.$AnalyticsEventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["organization"]>;
    composites: {};
};
export type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationPayload, S>;
export type OrganizationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationCountAggregateInputType | true;
};
export interface OrganizationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Organization'];
        meta: {
            name: 'Organization';
        };
    };
    findUnique<T extends OrganizationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationCreateArgs>(args: Prisma.SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationCountArgs>(args?: Prisma.Subset<T, OrganizationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationAggregateArgs>(args: Prisma.Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;
    groupBy<T extends OrganizationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationFieldRefs;
}
export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    members<T extends Prisma.Organization$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    roles<T extends Prisma.Organization$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    consultantProfiles<T extends Prisma.Organization$consultantProfilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$consultantProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultantProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    services<T extends Prisma.Organization$servicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookings<T extends Prisma.Organization$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.Organization$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    settings<T extends Prisma.Organization$settingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    meetingAccounts<T extends Prisma.Organization$meetingAccountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$meetingAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingProviderAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    blogPosts<T extends Prisma.Organization$blogPostsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$blogPostsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    analyticsEvents<T extends Prisma.Organization$analyticsEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$analyticsEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationFieldRefs {
    readonly id: Prisma.FieldRef<"Organization", 'String'>;
    readonly name: Prisma.FieldRef<"Organization", 'String'>;
    readonly slug: Prisma.FieldRef<"Organization", 'String'>;
    readonly isActive: Prisma.FieldRef<"Organization", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Organization", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Organization", 'DateTime'>;
}
export type OrganizationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
};
export type OrganizationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
};
export type OrganizationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type Organization$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMemberSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMemberOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMemberInclude<ExtArgs> | null;
    where?: Prisma.OrganizationMemberWhereInput;
    orderBy?: Prisma.OrganizationMemberOrderByWithRelationInput | Prisma.OrganizationMemberOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationMemberScalarFieldEnum | Prisma.OrganizationMemberScalarFieldEnum[];
};
export type Organization$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type Organization$consultantProfilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsultantProfileSelect<ExtArgs> | null;
    omit?: Prisma.ConsultantProfileOmit<ExtArgs> | null;
    include?: Prisma.ConsultantProfileInclude<ExtArgs> | null;
    where?: Prisma.ConsultantProfileWhereInput;
    orderBy?: Prisma.ConsultantProfileOrderByWithRelationInput | Prisma.ConsultantProfileOrderByWithRelationInput[];
    cursor?: Prisma.ConsultantProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultantProfileScalarFieldEnum | Prisma.ConsultantProfileScalarFieldEnum[];
};
export type Organization$servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type Organization$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
export type Organization$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type Organization$settingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSettingSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationSettingOmit<ExtArgs> | null;
    include?: Prisma.OrganizationSettingInclude<ExtArgs> | null;
    where?: Prisma.OrganizationSettingWhereInput;
    orderBy?: Prisma.OrganizationSettingOrderByWithRelationInput | Prisma.OrganizationSettingOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationSettingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationSettingScalarFieldEnum | Prisma.OrganizationSettingScalarFieldEnum[];
};
export type Organization$meetingAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingProviderAccountSelect<ExtArgs> | null;
    omit?: Prisma.MeetingProviderAccountOmit<ExtArgs> | null;
    include?: Prisma.MeetingProviderAccountInclude<ExtArgs> | null;
    where?: Prisma.MeetingProviderAccountWhereInput;
    orderBy?: Prisma.MeetingProviderAccountOrderByWithRelationInput | Prisma.MeetingProviderAccountOrderByWithRelationInput[];
    cursor?: Prisma.MeetingProviderAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeetingProviderAccountScalarFieldEnum | Prisma.MeetingProviderAccountScalarFieldEnum[];
};
export type Organization$blogPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$analyticsEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsEventSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsEventOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsEventInclude<ExtArgs> | null;
    where?: Prisma.AnalyticsEventWhereInput;
    orderBy?: Prisma.AnalyticsEventOrderByWithRelationInput | Prisma.AnalyticsEventOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsEventScalarFieldEnum | Prisma.AnalyticsEventScalarFieldEnum[];
};
export type OrganizationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
};

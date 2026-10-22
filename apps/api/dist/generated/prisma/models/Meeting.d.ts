import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MeetingModel = runtime.Types.Result.DefaultSelection<Prisma.$MeetingPayload>;
export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null;
    _min: MeetingMinAggregateOutputType | null;
    _max: MeetingMaxAggregateOutputType | null;
};
export type MeetingMinAggregateOutputType = {
    id: string | null;
    bookingId: string | null;
    provider: $Enums.MeetingProvider | null;
    externalMeetingId: string | null;
    joinUrl: string | null;
    encryptedHostUrl: string | null;
    startsAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MeetingMaxAggregateOutputType = {
    id: string | null;
    bookingId: string | null;
    provider: $Enums.MeetingProvider | null;
    externalMeetingId: string | null;
    joinUrl: string | null;
    encryptedHostUrl: string | null;
    startsAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MeetingCountAggregateOutputType = {
    id: number;
    bookingId: number;
    provider: number;
    externalMeetingId: number;
    joinUrl: number;
    encryptedHostUrl: number;
    startsAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MeetingMinAggregateInputType = {
    id?: true;
    bookingId?: true;
    provider?: true;
    externalMeetingId?: true;
    joinUrl?: true;
    encryptedHostUrl?: true;
    startsAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MeetingMaxAggregateInputType = {
    id?: true;
    bookingId?: true;
    provider?: true;
    externalMeetingId?: true;
    joinUrl?: true;
    encryptedHostUrl?: true;
    startsAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MeetingCountAggregateInputType = {
    id?: true;
    bookingId?: true;
    provider?: true;
    externalMeetingId?: true;
    joinUrl?: true;
    encryptedHostUrl?: true;
    startsAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MeetingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingWhereInput;
    orderBy?: Prisma.MeetingOrderByWithRelationInput | Prisma.MeetingOrderByWithRelationInput[];
    cursor?: Prisma.MeetingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MeetingCountAggregateInputType;
    _min?: MeetingMinAggregateInputType;
    _max?: MeetingMaxAggregateInputType;
};
export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
    [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMeeting[P]> : Prisma.GetScalarType<T[P], AggregateMeeting[P]>;
};
export type MeetingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingWhereInput;
    orderBy?: Prisma.MeetingOrderByWithAggregationInput | Prisma.MeetingOrderByWithAggregationInput[];
    by: Prisma.MeetingScalarFieldEnum[] | Prisma.MeetingScalarFieldEnum;
    having?: Prisma.MeetingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MeetingCountAggregateInputType | true;
    _min?: MeetingMinAggregateInputType;
    _max?: MeetingMaxAggregateInputType;
};
export type MeetingGroupByOutputType = {
    id: string;
    bookingId: string;
    provider: $Enums.MeetingProvider;
    externalMeetingId: string | null;
    joinUrl: string | null;
    encryptedHostUrl: string | null;
    startsAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: MeetingCountAggregateOutputType | null;
    _min: MeetingMinAggregateOutputType | null;
    _max: MeetingMaxAggregateOutputType | null;
};
export type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MeetingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MeetingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MeetingGroupByOutputType[P]>;
}>>;
export type MeetingWhereInput = {
    AND?: Prisma.MeetingWhereInput | Prisma.MeetingWhereInput[];
    OR?: Prisma.MeetingWhereInput[];
    NOT?: Prisma.MeetingWhereInput | Prisma.MeetingWhereInput[];
    id?: Prisma.UuidFilter<"Meeting"> | string;
    bookingId?: Prisma.UuidFilter<"Meeting"> | string;
    provider?: Prisma.EnumMeetingProviderFilter<"Meeting"> | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    joinUrl?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    encryptedHostUrl?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    booking?: Prisma.XOR<Prisma.BookingScalarRelationFilter, Prisma.BookingWhereInput>;
};
export type MeetingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalMeetingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    joinUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    encryptedHostUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    booking?: Prisma.BookingOrderByWithRelationInput;
};
export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    bookingId?: string;
    AND?: Prisma.MeetingWhereInput | Prisma.MeetingWhereInput[];
    OR?: Prisma.MeetingWhereInput[];
    NOT?: Prisma.MeetingWhereInput | Prisma.MeetingWhereInput[];
    provider?: Prisma.EnumMeetingProviderFilter<"Meeting"> | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    joinUrl?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    encryptedHostUrl?: Prisma.StringNullableFilter<"Meeting"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Meeting"> | Date | string;
    booking?: Prisma.XOR<Prisma.BookingScalarRelationFilter, Prisma.BookingWhereInput>;
}, "id" | "bookingId">;
export type MeetingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalMeetingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    joinUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    encryptedHostUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MeetingCountOrderByAggregateInput;
    _max?: Prisma.MeetingMaxOrderByAggregateInput;
    _min?: Prisma.MeetingMinOrderByAggregateInput;
};
export type MeetingScalarWhereWithAggregatesInput = {
    AND?: Prisma.MeetingScalarWhereWithAggregatesInput | Prisma.MeetingScalarWhereWithAggregatesInput[];
    OR?: Prisma.MeetingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MeetingScalarWhereWithAggregatesInput | Prisma.MeetingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Meeting"> | string;
    bookingId?: Prisma.UuidWithAggregatesFilter<"Meeting"> | string;
    provider?: Prisma.EnumMeetingProviderWithAggregatesFilter<"Meeting"> | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.StringNullableWithAggregatesFilter<"Meeting"> | string | null;
    joinUrl?: Prisma.StringNullableWithAggregatesFilter<"Meeting"> | string | null;
    encryptedHostUrl?: Prisma.StringNullableWithAggregatesFilter<"Meeting"> | string | null;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"Meeting"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Meeting"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Meeting"> | Date | string;
};
export type MeetingCreateInput = {
    id?: string;
    provider: $Enums.MeetingProvider;
    externalMeetingId?: string | null;
    joinUrl?: string | null;
    encryptedHostUrl?: string | null;
    startsAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking: Prisma.BookingCreateNestedOneWithoutMeetingInput;
};
export type MeetingUncheckedCreateInput = {
    id?: string;
    bookingId: string;
    provider: $Enums.MeetingProvider;
    externalMeetingId?: string | null;
    joinUrl?: string | null;
    encryptedHostUrl?: string | null;
    startsAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    encryptedHostUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.BookingUpdateOneRequiredWithoutMeetingNestedInput;
};
export type MeetingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    encryptedHostUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingCreateManyInput = {
    id?: string;
    bookingId: string;
    provider: $Enums.MeetingProvider;
    externalMeetingId?: string | null;
    joinUrl?: string | null;
    encryptedHostUrl?: string | null;
    startsAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    encryptedHostUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookingId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    encryptedHostUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingNullableScalarRelationFilter = {
    is?: Prisma.MeetingWhereInput | null;
    isNot?: Prisma.MeetingWhereInput | null;
};
export type MeetingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalMeetingId?: Prisma.SortOrder;
    joinUrl?: Prisma.SortOrder;
    encryptedHostUrl?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeetingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalMeetingId?: Prisma.SortOrder;
    joinUrl?: Prisma.SortOrder;
    encryptedHostUrl?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeetingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bookingId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalMeetingId?: Prisma.SortOrder;
    joinUrl?: Prisma.SortOrder;
    encryptedHostUrl?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MeetingCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutBookingInput, Prisma.MeetingUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutBookingInput;
    connect?: Prisma.MeetingWhereUniqueInput;
};
export type MeetingUncheckedCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutBookingInput, Prisma.MeetingUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutBookingInput;
    connect?: Prisma.MeetingWhereUniqueInput;
};
export type MeetingUpdateOneWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutBookingInput, Prisma.MeetingUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.MeetingUpsertWithoutBookingInput;
    disconnect?: Prisma.MeetingWhereInput | boolean;
    delete?: Prisma.MeetingWhereInput | boolean;
    connect?: Prisma.MeetingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MeetingUpdateToOneWithWhereWithoutBookingInput, Prisma.MeetingUpdateWithoutBookingInput>, Prisma.MeetingUncheckedUpdateWithoutBookingInput>;
};
export type MeetingUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.MeetingCreateWithoutBookingInput, Prisma.MeetingUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.MeetingCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.MeetingUpsertWithoutBookingInput;
    disconnect?: Prisma.MeetingWhereInput | boolean;
    delete?: Prisma.MeetingWhereInput | boolean;
    connect?: Prisma.MeetingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MeetingUpdateToOneWithWhereWithoutBookingInput, Prisma.MeetingUpdateWithoutBookingInput>, Prisma.MeetingUncheckedUpdateWithoutBookingInput>;
};
export type MeetingCreateWithoutBookingInput = {
    id?: string;
    provider: $Enums.MeetingProvider;
    externalMeetingId?: string | null;
    joinUrl?: string | null;
    encryptedHostUrl?: string | null;
    startsAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingUncheckedCreateWithoutBookingInput = {
    id?: string;
    provider: $Enums.MeetingProvider;
    externalMeetingId?: string | null;
    joinUrl?: string | null;
    encryptedHostUrl?: string | null;
    startsAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MeetingCreateOrConnectWithoutBookingInput = {
    where: Prisma.MeetingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeetingCreateWithoutBookingInput, Prisma.MeetingUncheckedCreateWithoutBookingInput>;
};
export type MeetingUpsertWithoutBookingInput = {
    update: Prisma.XOR<Prisma.MeetingUpdateWithoutBookingInput, Prisma.MeetingUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.MeetingCreateWithoutBookingInput, Prisma.MeetingUncheckedCreateWithoutBookingInput>;
    where?: Prisma.MeetingWhereInput;
};
export type MeetingUpdateToOneWithWhereWithoutBookingInput = {
    where?: Prisma.MeetingWhereInput;
    data: Prisma.XOR<Prisma.MeetingUpdateWithoutBookingInput, Prisma.MeetingUncheckedUpdateWithoutBookingInput>;
};
export type MeetingUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    encryptedHostUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.EnumMeetingProviderFieldUpdateOperationsInput | $Enums.MeetingProvider;
    externalMeetingId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    encryptedHostUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MeetingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    provider?: boolean;
    externalMeetingId?: boolean;
    joinUrl?: boolean;
    encryptedHostUrl?: boolean;
    startsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meeting"]>;
export type MeetingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    provider?: boolean;
    externalMeetingId?: boolean;
    joinUrl?: boolean;
    encryptedHostUrl?: boolean;
    startsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meeting"]>;
export type MeetingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bookingId?: boolean;
    provider?: boolean;
    externalMeetingId?: boolean;
    joinUrl?: boolean;
    encryptedHostUrl?: boolean;
    startsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meeting"]>;
export type MeetingSelectScalar = {
    id?: boolean;
    bookingId?: boolean;
    provider?: boolean;
    externalMeetingId?: boolean;
    joinUrl?: boolean;
    encryptedHostUrl?: boolean;
    startsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MeetingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bookingId" | "provider" | "externalMeetingId" | "joinUrl" | "encryptedHostUrl" | "startsAt" | "createdAt" | "updatedAt", ExtArgs["result"]["meeting"]>;
export type MeetingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type MeetingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Prisma.BookingDefaultArgs<ExtArgs>;
};
export type $MeetingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Meeting";
    objects: {
        booking: Prisma.$BookingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bookingId: string;
        provider: $Enums.MeetingProvider;
        externalMeetingId: string | null;
        joinUrl: string | null;
        encryptedHostUrl: string | null;
        startsAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["meeting"]>;
    composites: {};
};
export type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MeetingPayload, S>;
export type MeetingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MeetingCountAggregateInputType | true;
};
export interface MeetingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Meeting'];
        meta: {
            name: 'Meeting';
        };
    };
    findUnique<T extends MeetingFindUniqueArgs>(args: Prisma.SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MeetingFindFirstArgs>(args?: Prisma.SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MeetingFindManyArgs>(args?: Prisma.SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MeetingCreateArgs>(args: Prisma.SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MeetingCreateManyArgs>(args?: Prisma.SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MeetingDeleteArgs>(args: Prisma.SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MeetingUpdateArgs>(args: Prisma.SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MeetingDeleteManyArgs>(args?: Prisma.SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MeetingUpdateManyArgs>(args: Prisma.SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MeetingUpsertArgs>(args: Prisma.SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma.Prisma__MeetingClient<runtime.Types.Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MeetingCountArgs>(args?: Prisma.Subset<T, MeetingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MeetingCountAggregateOutputType> : number>;
    aggregate<T extends MeetingAggregateArgs>(args: Prisma.Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>;
    groupBy<T extends MeetingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MeetingGroupByArgs['orderBy'];
    } : {
        orderBy?: MeetingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MeetingFieldRefs;
}
export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    booking<T extends Prisma.BookingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookingDefaultArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MeetingFieldRefs {
    readonly id: Prisma.FieldRef<"Meeting", 'String'>;
    readonly bookingId: Prisma.FieldRef<"Meeting", 'String'>;
    readonly provider: Prisma.FieldRef<"Meeting", 'MeetingProvider'>;
    readonly externalMeetingId: Prisma.FieldRef<"Meeting", 'String'>;
    readonly joinUrl: Prisma.FieldRef<"Meeting", 'String'>;
    readonly encryptedHostUrl: Prisma.FieldRef<"Meeting", 'String'>;
    readonly startsAt: Prisma.FieldRef<"Meeting", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Meeting", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Meeting", 'DateTime'>;
}
export type MeetingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where: Prisma.MeetingWhereUniqueInput;
};
export type MeetingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where: Prisma.MeetingWhereUniqueInput;
};
export type MeetingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where?: Prisma.MeetingWhereInput;
    orderBy?: Prisma.MeetingOrderByWithRelationInput | Prisma.MeetingOrderByWithRelationInput[];
    cursor?: Prisma.MeetingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeetingScalarFieldEnum | Prisma.MeetingScalarFieldEnum[];
};
export type MeetingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where?: Prisma.MeetingWhereInput;
    orderBy?: Prisma.MeetingOrderByWithRelationInput | Prisma.MeetingOrderByWithRelationInput[];
    cursor?: Prisma.MeetingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeetingScalarFieldEnum | Prisma.MeetingScalarFieldEnum[];
};
export type MeetingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where?: Prisma.MeetingWhereInput;
    orderBy?: Prisma.MeetingOrderByWithRelationInput | Prisma.MeetingOrderByWithRelationInput[];
    cursor?: Prisma.MeetingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MeetingScalarFieldEnum | Prisma.MeetingScalarFieldEnum[];
};
export type MeetingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingCreateInput, Prisma.MeetingUncheckedCreateInput>;
};
export type MeetingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MeetingCreateManyInput | Prisma.MeetingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MeetingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    data: Prisma.MeetingCreateManyInput | Prisma.MeetingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MeetingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MeetingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingUpdateInput, Prisma.MeetingUncheckedUpdateInput>;
    where: Prisma.MeetingWhereUniqueInput;
};
export type MeetingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MeetingUpdateManyMutationInput, Prisma.MeetingUncheckedUpdateManyInput>;
    where?: Prisma.MeetingWhereInput;
    limit?: number;
};
export type MeetingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MeetingUpdateManyMutationInput, Prisma.MeetingUncheckedUpdateManyInput>;
    where?: Prisma.MeetingWhereInput;
    limit?: number;
    include?: Prisma.MeetingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MeetingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where: Prisma.MeetingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeetingCreateInput, Prisma.MeetingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MeetingUpdateInput, Prisma.MeetingUncheckedUpdateInput>;
};
export type MeetingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
    where: Prisma.MeetingWhereUniqueInput;
};
export type MeetingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeetingWhereInput;
    limit?: number;
};
export type MeetingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MeetingSelect<ExtArgs> | null;
    omit?: Prisma.MeetingOmit<ExtArgs> | null;
    include?: Prisma.MeetingInclude<ExtArgs> | null;
};

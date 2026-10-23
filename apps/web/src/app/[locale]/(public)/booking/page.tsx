"use client";

import Image from "next/image"; import { Link } from "@/i18n/navigation"; import { ArrowRight, CalendarCheck, CheckCircle2, Clock3, Globe2, MapPin, MessageCircle, ShieldCheck, Sparkles, Video, Wallet, } from "lucide-react"; import { useTranslations } from "next-intl"; import { useAuth } from "@/hooks/use-auth";

const benefits = [{ key: "personalized", icon: Sparkles }, { key: "expertAdvice", icon: MessageCircle }, { key: "clearSteps", icon: CheckCircle2 }, { key: "secureSupport", icon: ShieldCheck },] as const;

export default function BookingPage() {
    const t = useTranslations("booking"); const { user, loading } = useAuth();

    const isAuthenticated = Boolean(user);

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/75">
                            <CalendarCheck
                                size={17}
                                className="text-icon-accent"
                                aria-hidden="true"
                            />
                            {t("eyebrow")}
                        </div>

                        <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            {t("heroTitle")}
                            <span className="mt-1 block text-heading-accent">
                                {t("heroHighlight")}
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
                            {t("heroDescription")}
                        </p>

                        {loading ? (
                            <button
                                type="button"
                                disabled
                                className="inline-flex items-center gap-2 rounded-xl bg-button-primary px-6 py-3.5 font-semibold text-button-primary-foreground opacity-70"
                            >
                                {t("loading")}
                            </button>
                        ) : (
                            <Link
                                href={
                                    isAuthenticated
                                        ? "/booking/schedule"
                                        : {
                                            pathname: "/auth/signin",
                                            query: {
                                                returnTo: "/booking/schedule",
                                            },
                                        }
                                }
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-button-primary px-6 py-3.5 font-semibold text-button-primary-foreground shadow-md transition hover:bg-button-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                            >
                                {isAuthenticated
                                    ? t("bookConsultation")
                                    : t("signInToBook")}

                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>
                        )}

                        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-foreground/70">
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2
                                    size={17}
                                    className="text-icon-accent"
                                    aria-hidden="true"
                                />
                                {t("trust.personalized")}
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2
                                    size={17}
                                    className="text-icon-accent"
                                    aria-hidden="true"
                                />
                                {t("trust.transparentPricing")}
                            </span>
                        </div>
                    </div>

                    {/* Consultation image */}
                    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted shadow-xl">
                            <Image
                                src="/images/consultation.png"
                                alt={t("imageAlt")}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-card/95 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-72">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                                        <ShieldCheck
                                            size={24}
                                            className="text-icon-accent"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            {t("imageCard.title")}
                                        </p>
                                        <p className="mt-1 text-sm text-foreground/65">
                                            {t("imageCard.description")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -right-2 -top-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-right-4 sm:top-6">
                            <p className="text-xs text-foreground/60">
                                {t("priceLabel")}
                            </p>
                            <p className="mt-1 text-2xl font-bold tracking-tight text-heading-accent">
                                $75
                                <span className="ml-1 text-xs font-medium text-foreground/60">
                                    CAD / {t("hour")}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meeting formats */}
            <section className="border-y border-border bg-card/40">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-heading-accent">
                            {t("formats.eyebrow")}
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                            {t("formats.title")}
                        </h2>

                        <p className="mt-4 leading-7 text-foreground/65">
                            {t("formats.description")}
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        <article className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60 hover:shadow-lg sm:p-8">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15">
                                <Video
                                    size={24}
                                    className="text-icon-accent"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                {t("formats.online.title")}
                            </h3>

                            <p className="mt-3 leading-7 text-foreground/65">
                                {t("formats.online.description")}
                            </p>

                            <ul className="mt-5 space-y-3">
                                {(
                                    [
                                        "onlinePoint1",
                                        "onlinePoint2",
                                        "onlinePoint3",
                                    ] as const
                                ).map((key) => (
                                    <li
                                        key={key}
                                        className="flex items-start gap-2.5 text-sm text-foreground/75"
                                    >
                                        <CheckCircle2
                                            size={17}
                                            className="mt-0.5 shrink-0 text-icon-accent"
                                            aria-hidden="true"
                                        />
                                        {t(`formats.${key}`)}
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60 hover:shadow-lg sm:p-8">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15">
                                <MapPin
                                    size={24}
                                    className="text-icon-accent"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                {t("formats.inPerson.title")}
                            </h3>

                            <p className="mt-3 leading-7 text-foreground/65">
                                {t("formats.inPerson.description")}
                            </p>

                            <ul className="mt-5 space-y-3">
                                {(
                                    [
                                        "inPersonPoint1",
                                        "inPersonPoint2",
                                        "inPersonPoint3",
                                    ] as const
                                ).map((key) => (
                                    <li
                                        key={key}
                                        className="flex items-start gap-2.5 text-sm text-foreground/75"
                                    >
                                        <CheckCircle2
                                            size={17}
                                            className="mt-0.5 shrink-0 text-icon-accent"
                                            aria-hidden="true"
                                        />
                                        {t(`formats.${key}`)}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-heading-accent">
                        {t("benefits.eyebrow")}
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {t("benefits.title")}
                    </h2>

                    <p className="mt-4 leading-7 text-foreground/65">
                        {t("benefits.description")}
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map(({ key, icon: Icon }, index) => (
                        <article
                            key={key}
                            className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-md sm:p-6"
                        >
                            <div className="flex size-11 items-center justify-center rounded-xl bg-accent/15">
                                <Icon
                                    size={22}
                                    className="text-icon-accent"
                                    aria-hidden="true"
                                />
                            </div>

                            <p className="mt-5 text-xs font-semibold tracking-widest text-heading-accent">
                                {String(index + 1).padStart(2, "0")}
                            </p>

                            <h3 className="mt-2 font-semibold">
                                {t(`benefits.items.${key}.title`)}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-foreground/65">
                                {t(`benefits.items.${key}.description`)}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Pricing and final CTA */}
            <section className="border-t border-border bg-card/40">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                    <div className="grid items-center gap-8 rounded-3xl bg-primary p-6 text-primary-foreground shadow-xl sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/75">
                                <Wallet
                                    size={18}
                                    className="text-accent"
                                    aria-hidden="true"
                                />
                                {t("pricing.eyebrow")}
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                                {t("pricing.title")}
                            </h2>

                            <p className="mt-4 leading-7 text-primary-foreground/75">
                                {t("pricing.description")}
                            </p>

                            <div className="mt-6 flex items-center gap-3 text-sm text-primary-foreground/80">
                                <Globe2
                                    size={18}
                                    className="text-accent"
                                    aria-hidden="true"
                                />
                                {t("pricing.note")}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:min-w-64">
                            <p className="text-sm text-primary-foreground/75">
                                {t("priceLabel")}
                            </p>

                            <p className="mt-2 text-5xl font-bold tracking-tight text-accent">
                                $75
                            </p>

                            <p className="mt-1 text-sm text-primary-foreground/75">
                                CAD / {t("hour")}
                            </p>

                            <div className="my-5 h-px bg-white/15" />

                            <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
                                <CheckCircle2
                                    size={17}
                                    className="text-accent"
                                    aria-hidden="true"
                                />
                                {t("pricing.noHiddenFees")}
                            </p>

                            {!loading && (
                                <Link
                                    href={
                                        isAuthenticated
                                            ? "/booking/schedule"
                                            : {
                                                pathname: "/auth/signin",
                                                query: {
                                                    returnTo: "/booking/schedule",
                                                },
                                            }
                                    }
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-button-primary px-5 py-3.5 text-center font-semibold text-button-primary-foreground transition hover:bg-button-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                                >
                                    {isAuthenticated
                                        ? t("bookConsultation")
                                        : t("signInToBook")}

                                    <ArrowRight size={18} aria-hidden="true" />
                                </Link>
                            )}
                        </div>
                    </div>

                    <p className="mt-6 text-center text-sm leading-6 text-foreground/60">
                        {t("footerNote")}
                    </p>
                </div>
            </section>
        </main>
    );


}
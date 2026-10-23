
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Home, Compass } from "lucide-react";

export default async function NotFound() {
    const t = await getTranslations("notFound");

    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
            <section className="w-full max-w-lg text-center">
                {/* App name and slogan on one line */}
                <p className="text-sm font-semibold tracking-wide text-muted-foreground">
                    <span className="font-extrabold tracking-[0.18em] text-[#102B46] dark:text-white">
                        RAVE
                    </span>
                    <span className="mx-2 text-border">|</span>
                    <span>{t("slogan")}</span>
                </p>

                {/* Compass above the large 404 */}
                <div className="mt-10 flex flex-col items-center">
                    <Compass
                        size={100}
                        strokeWidth={1.6}
                        className="mb-3 text-[#C8102E]"
                        aria-hidden="true"
                    />

                    <h1 className="text-8xl font-black leading-none tracking-tight text-[#102B46] dark:text-white sm:text-[10rem]">
                        404<span className="text-[#C8102E]">.</span>
                    </h1>
                </div>

                <h2 className="mt-7 text-2xl font-bold sm:text-3xl">
                    {t("title")}
                </h2>

                <p className="mt-4 leading-7 text-muted-foreground">
                    {t("description")}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#102B46] px-6 py-3 font-semibold text-white transition hover:bg-[#173D60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102B46] focus-visible:ring-offset-2"
                    >
                        <Home size={18} aria-hidden="true" />
                        {t("backHome")}
                    </Link>

                    <Link
                        href="/services"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        {t("exploreServices")}
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

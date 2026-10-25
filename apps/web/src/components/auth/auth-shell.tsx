
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type AuthShellProps = {
    children: ReactNode;
    eyebrow: string;
    title: string;
    description: string;
    brand: string;
    subbrand: String;
    tagline: string;
    imageSrc: string;
};

export function AuthShell({
    children,
    eyebrow,
    title,
    description,
    brand,
    subbrand,
    tagline,
    imageSrc,
}: AuthShellProps) {
    return (
        <main className="grid min-h-screen bg-background text-foreground lg:grid-cols-2">
            {/* Branded visual panel */}
            <aside className="relative hidden min-h-screen overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${imageSrc}")` }}
                />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-primary/75"
                />

                <div className="relative z-10">
                    <Link
                        href="/"
                        className="inline-flex flex-col items-start text-primary-foreground"
                    >
                        <span className="text-xl font-bold tracking-tight">
                            {brand}
                        </span>

                        <span className="mt-1 text-sm font-normal tracking-wide text-primary-foreground/80">
                            {subbrand}
                        </span>
                    </Link>
                </div>


                <div className="relative z-10 max-w-xl">
                    <div className="mb-6 h-1 w-14 rounded-full bg-accent" />

                    <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary-foreground xl:text-5xl">
                        {tagline}
                    </h1>

                    <p className="mt-6 max-w-md text-base leading-7 text-primary-foreground/80">
                        {description}
                    </p>

                    <div className="mt-8 flex items-center gap-3 text-sm text-primary-foreground/90">
                        <span
                            aria-hidden="true"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/60 text-accent"
                        >
                            ✓
                        </span>
                        <span>
                            Professional visa and travel consultation
                        </span>
                    </div>
                </div>

                <p className="relative z-10 text-sm text-primary-foreground/70">
                    © {new Date().getFullYear()} {brand}
                </p>
            </aside>

            {/* Form panel */}
            <section className="flex min-h-screen items-center justify-center bg-background px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
                <div className="w-full max-w-md">
                    {/* <Link
                        href="/"
                        className="mb-10 inline-flex text-lg font-bold tracking-tight text-foreground lg:hidden"
                    >
                        {brand}
                    </Link> */}

                    <div className="mb-8">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-heading-accent">
                            {eyebrow}
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            {title}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-foreground/70">
                            {description}
                        </p>
                    </div>

                    {children}
                </div>
            </section>
        </main>
    );
}

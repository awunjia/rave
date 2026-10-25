import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#102b46] text-white dark:bg-[#0c2035] dark:text-slate-100">
      {/* Background Subtle Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">

          {/* Left Column: Core Brand Messaging & CTAs */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d1b578]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0c991] sm:text-sm">
                Travel with confidence
              </p>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your journey deserves{" "}
              <span className="font-serif italic text-[#e0c991]">
                clarity.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 dark:text-slate-300 sm:text-lg">
              Understand visa requirements, prepare your documentation,
              and find the right guidance for your international journey.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/booking"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#d1b578] px-6 py-3 text-sm font-semibold text-[#102b46] transition-colors hover:bg-[#e4ce9f]"
              >
                Book a Consultancy
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 dark:border-white/20"
              >
                Discover our services
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75 dark:text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#d1b578]" />
                Clear guidance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#d1b578]" />
                Organized documents
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#d1b578]" />
                Dedicated guidance
              </span>
            </div>
          </div>

          {/* Right Column: Clean Branch Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src="/images/hero.jpg"
                alt="Consultancy Branch"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Identify your requirements",
    description: "Explore the visa category relevant to your plans.",
  },
  {
    number: "02",
    title: "Prepare your documents",
    description: "Review the documents needed for your application.",
  },
  {
    number: "03",
    title: "Plan your next steps",
    description: "Find guidance or manage your case in the client portal.",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#102b46] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d1b578]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0c991] sm:text-sm">
              Travel with confidence
            </p>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            Your journey deserves{" "}
            <span className="font-serif italic text-[#e0c991]">
              clarity.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Understand visa requirements, prepare your documentation,
            and find the right guidance for your international journey.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/visa-information"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#d1b578] px-6 py-3 text-sm font-semibold text-[#102b46] transition-colors hover:bg-[#e4ce9f]"
            >
              Explore visa information
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center border border-white/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Discover our services
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#d1b578]" />
              Clear guidance
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#d1b578]" />
              Organized documents
            </span>
          </div>
        </div>

        <aside className="border border-white/15 bg-white/[0.05] p-6 sm:p-8 lg:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0c991]">
                Get started
              </p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Plan your next steps.
              </h2>
            </div>

            <div className="flex size-12 shrink-0 items-center justify-center border border-white/15 text-[#e0c991]">
              <FileCheck2 size={24} />
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-white/65">
            Start with the essential information, then work through
            your preparation step by step.
          </p>

          <div className="mt-6 divide-y divide-white/10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 py-5">
                <span className="pt-0.5 font-mono text-sm text-[#d1b578]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

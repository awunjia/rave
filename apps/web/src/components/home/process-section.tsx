
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  MessagesSquare,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the information relevant to your travel plans and intended application.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Gather your documents and identify any questions that need clarification.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Get support",
    description:
      "Explore consultation options and use your account to organize your case.",
    icon: MessagesSquare,
  },
];

export function ProcessSection() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78a4d]">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A clearer path from planning to preparation.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article key={stage.number} className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center border border-border bg-background text-[#a78a4d]">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground">
                    STEP {stage.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {stage.description}
                </p>
              </article>
            );
          })}
        </div>

        <Link
          href="/travel-information"
          className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#a78a4d] hover:underline"
        >
          Explore travel guidance
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

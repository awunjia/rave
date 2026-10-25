import Image from "next/image";
import {
  Globe2,
  FileText,
  ShieldCheck,
  Scale,
} from "lucide-react";

const keyOfferings = [
  {
    icon: Globe2,
    title: "Global Mobility & Visas",
    description:
      "End-to-end processing for work, business, and residency applications.",
  },
  {
    icon: FileText,
    title: "Document Verification",
    description:
      "Thorough legal audit and preparation of required compliance paperwork.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    description:
      "Proactive guidance ensuring strict adherence to current immigration laws.",
  },
  {
    icon: Scale,
    title: "Legal Advisory",
    description:
      "Direct representation and strategic consulting for complex cases.",
  },
];

export function MajorOfferings() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* LEFT COLUMN: Clean Core Offerings */}
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78a4d]">
            Why Choose Us
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
            Comprehensive Legal & Immigration Support
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Our experienced consultancy team provides structured advice and hands-on case management across every phase of your application.
          </p>

          {/* Offerings Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 pt-6 border-t border-border">
            {keyOfferings.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-[#b49a64]/70"
                >
                  <div className="flex items-center gap-3 text-[#a78a4d]">
                    <div className="flex size-9 items-center justify-center rounded-md bg-muted text-[#a78a4d]">
                      <IconComponent size={19} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Branch Image */}
        <div className="lg:col-span-5 col-image">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border shadow-sm sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/office.jpeg"
              alt="Consultancy Branch Office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
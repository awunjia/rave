
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  FileCheck2,
  FileText,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Visa information",
    description:
      "Explore visa categories, eligibility requirements, and application procedures.",
    href: "/visa-information",
    label: "Explore visa guidance",
    icon: FileText,
  },
  {
    number: "02",
    title: "Consultations",
    description:
      "Learn about consultation options and how to prepare for an appointment.",
    href: "/appointments",
    label: "Appointment information",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Document preparation",
    description:
      "Understand supporting document requirements and organize your materials.",
    href: "/services",
    label: "View requirements",
    icon: FileCheck2,
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78a4d]">
            Our services
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Information for every step of your journey.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Find practical information to help you understand the
            process and prepare for your next steps.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold hover:text-[#a78a4d]"
        >
          All services
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.number}
              className="group flex flex-col border border-border bg-card p-6 transition-colors hover:border-[#b49a64]/70 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center bg-muted text-[#a78a4d]">
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <span className="font-mono text-sm text-muted-foreground">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-[#a78a4d]"
              >
                {service.label}
                <ArrowUpRight size={16} />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

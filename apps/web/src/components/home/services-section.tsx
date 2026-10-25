import Image from "next/image";
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
    imageSrc: "/images/visa2.jpg",
  },
  {
    number: "02",
    title: "Consultations",
    description:
      "Learn about consultation options and how to prepare for an appointment.",
    href: "/appointments",
    label: "Appointment information",
    icon: CalendarDays,
    imageSrc: "/images/consultation.webp",
  },
  {
    number: "03",
    title: "Document preparation",
    description:
      "Understand supporting document requirements and organize your materials.",
    href: "/services",
    label: "View requirements",
    icon: FileCheck2,
    imageSrc: "/images/documents.jpg",
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78a4d]">
            Our services
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Information for every step of your journey.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Find practical information to help you understand the process and
            prepare for your next steps.
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

      {/* Services Cards Grid with Images */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.number}
              className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:border-[#b49a64]/70 hover:shadow-md"
            >
              {/* Image Header Block */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />

                {/* Number Badge Overlay */}
                <div className="absolute right-3 top-3 bg-background/90 px-2.5 py-1 text-xs font-mono font-medium text-muted-foreground backdrop-blur-sm border border-border">
                  {service.number}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center bg-muted text-[#a78a4d]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>

                {/* Action Link */}
                <div className="mt-6 border-t border-border/60 pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-[#a78a4d]"
                  >
                    {service.label}
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
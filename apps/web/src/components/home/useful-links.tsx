
import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  MapPin,
  MessagesSquare,
} from "lucide-react";

const links = [
  {
    title: "Travel information",
    description: "Prepare for your international journey.",
    href: "/travel-information",
    icon: Globe2,
  },
  {
    title: "Appointments",
    description: "Explore consultation and appointment options.",
    href: "/appointments",
    icon: MapPin,
  },
  {
    title: "Contact our team",
    description: "Find the right channel for your questions.",
    href: "/contact",
    icon: MessagesSquare,
  },
];

export function UsefulLinks() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold">Useful information</h2>

        <div className="mt-6 grid gap-0 md:grid-cols-3">
          {links.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group flex gap-4 py-5 md:px-6 ${
                  index !== 0
                    ? "border-t border-border md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <Icon
                  size={22}
                  className="mt-1 shrink-0 text-[#a78a4d]"
                />

                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-[#a78a4d]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

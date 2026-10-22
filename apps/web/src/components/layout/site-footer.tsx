
"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Globe2 } from "lucide-react";

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Consistent initial server/client render; update after hydration.
  return <>{year ?? "2026"}</>;
}

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Visa information", href: "/visa-information" },
      { label: "Services", href: "/services" },
      { label: "Travel guidance", href: "/travel-information" },
      { label: "Appointments", href: "/appointments" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Rave", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Your account",
    links: [
      { label: "Client portal", href: "/login" },
      { label: "Create an account", href: "/register" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#102b46] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex size-11 items-center justify-center border border-white/20 text-[#e0c991]">
              <Globe2 size={23} />
            </div>

            <div>
              <span className="block font-bold tracking-[0.16em]">
                RAVE
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/55">
                Travel & Consular Assistance
              </span>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Clear information and practical guidance for your
            international journey.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-semibold">{group.title}</h2>

            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © <CurrentYear /> Rave. All rights reserved.
          </p>

          <p>Travel & Consular Assistance</p>
        </div>
      </div>
    </footer>
  );
}

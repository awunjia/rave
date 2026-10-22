
"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  Clock3,
  Mail,
  PhoneIncoming,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { useAuth } from "@/hooks/use-auth";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Visa Information", href: "/visa-information" },
  { label: "Travel Information", href: "/travel-information" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const { user, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("header");

  const portalHref = user ? "/portal" : "/login";

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top contact bar */}
      <div className="bg-[#102B46] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-x-4 gap-y-4 px-4 py-3 text-xs sm:gap-x-6 sm:px-6 sm:text-sm lg:grid-cols-4 lg:gap-6 lg:px-8">
          {/* Email */}
          <a
            href="mailto:info@rave.com"
            className="group flex min-w-0 items-center gap-3"
          >
            <Mail
              size={20}
              aria-hidden="true"
              className="shrink-0 transition-all duration-200 group-hover:scale-125 group-hover:text-red-500"
            />
            <span className="break-words">info@rave.com</span>
          </a>

          {/* Cameroon phone */}
          <a
            href="tel:+237651565843"
            className="group flex min-w-0 items-center gap-3"
          >
            <Phone
              size={20}
              aria-hidden="true"
              className="shrink-0 transition-all duration-200 group-hover:scale-125 group-hover:text-red-500"
            />
            <span>+237 651 565 843</span>
          </a>

          {/* Canada phone */}
          <a
            href="tel:+167976373020"
            className="group flex min-w-0 items-center gap-3"
          >
            <PhoneIncoming
              size={20}
              aria-hidden="true"
              className="shrink-0 transition-all duration-200 group-hover:scale-125 group-hover:text-red-500"
            />
            <span>+1 679 763 73020</span>
          </a>

          {/* Working hours */}
          <div className="group flex min-w-0 items-center gap-3 lg:justify-end">
            <Clock3
              size={20}
              aria-hidden="true"
              className="shrink-0 transition-all duration-200 group-hover:scale-125 group-hover:text-red-500"
            />
            <span>{t("workingHours")}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Rave homepage"
            className="shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/branding/logo.svg"
              alt="Rave"
              width={170}
              height={52}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {!loading && (
              <Link
                href={portalHref}
                className="hidden items-center justify-center rounded-md bg-[#B89555] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9E7B3E] sm:inline-flex"
              >
                {user ? "Open Portal" : "Sign In"}
              </Link>
            )}

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center rounded-md border border-border p-2 transition-colors hover:bg-muted xl:hidden"
            >
              {mobileMenuOpen ? (
                <X size={21} aria-hidden="true" />
              ) : (
                <Menu size={21} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background xl:hidden">
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-medium last:border-b-0 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center justify-between gap-4 py-4 sm:hidden">
                <ThemeToggle />

                {!loading && (
                  <Link
                    href={portalHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md bg-[#B89555] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9E7B3E]"
                  >
                    {user ? "Open Portal" : "Sign In"}
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

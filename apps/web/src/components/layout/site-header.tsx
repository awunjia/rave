
"use client";

import Image from "next/image";
import { Link, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Clock3,
  Mail,
  PhoneIncoming,
  Menu,
  Phone,
  X,
  ChevronDown,
  CalendarCheck,
  House,
  BriefcaseBusiness,
  Plane,
  BookMarked,
  GraduationCap,
  FileCheck,
  BookOpen,
  Info,
  ShieldCheck,
  MessageCircle,
  Newspaper,
  Contact,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

import { useAuth } from "@/hooks/use-auth";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/layout/language-selector";

type NavigationChild = {
  label: string;
  href:
  | "/services/visa-assistance"
  | "/services/travel-consultancy"
  | "/services/study-abroad"
  | "/services/passport-assistance"
  | "/services/flight-booking"
  | "/resources/why-us"
  | "/resources/about-us"
  | "/resources/attestations"
  | "/resources/testimonials";
  icon: LucideIcon;
};

type NavigationItem = {
  id: "home" | "services" | "resources" | "ourBlogs" | "contactUs";
  label: string;
  href: "/" | "/blogs" | "/contact-us";
  icon: LucideIcon;
  children?: readonly NavigationChild[];
};

const navigation: readonly NavigationItem[] = [
  {
    id: "home",
    label: "home",
    href: "/",
    icon: House,
  },
  {
    id: "services",
    label: "services",
    href: "/",
    icon: BriefcaseBusiness,
    children: [
      {
        label: "visaAssistance",
        href: "/services/visa-assistance",
        icon: FileCheck,
      },
      {
        label: "travelConsultancy",
        href: "/services/travel-consultancy",
        icon: Contact,
      },
      {
        label: "studyAbroad",
        href: "/services/study-abroad",
        icon: GraduationCap,
      },
      {
        label: "passportAssistance",
        href: "/services/passport-assistance",
        icon: BookMarked,
      },
      {
        label: "flightBooking",
        href: "/services/flight-booking",
        icon: Plane,
      },
    ],
  },
  {
    id: "resources",
    label: "resources",
    href: "/",
    icon: BookOpen,
    children: [
      {
        label: "whyUs",
        href: "/resources/why-us",
        icon: ShieldCheck,
      },
      {
        label: "aboutUs",
        href: "/resources/about-us",
        icon: Info,
      },
      {
        label: "attestations",
        href: "/resources/attestations",
        icon: FileCheck,
      },
      {
        label: "testimonials",
        href: "/resources/testimonials",
        icon: MessageCircle,
      },
    ],
  },
  {
    id: "ourBlogs",
    label: "ourBlogs",
    href: "/blogs",
    icon: Newspaper,
  },
  {
    id: "contactUs",
    label: "contactUs",
    href: "/contact-us",
    icon: Contact,
  },
];

export function SiteHeader() {
  const { loading } = useAuth();
  const router = useRouter();
  const t = useTranslations("header");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] =
    useState<NavigationItem["id"] | null>(null);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] =
    useState<NavigationItem["id"] | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
  };

  const handleBookNow = () => {
    closeMobileMenu();
    setDesktopSubmenuOpen(null);
    router.push("/booking");
  };

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Announcement marquee */}
      <div className="overflow-hidden whitespace-nowrap bg-marquee-background py-2 text-marquee">
        <div className="animate-marquee inline-flex w-max items-center">
          {[0, 1].map((index) => (
            <div
              key={`announcement-${index}`}
              className="flex shrink-0 items-center"
            >
              <span className="mx-6 text-xs font-normal md:text-sm">
                🇨🇦 Explore Canadian Express Entry - Get Expert Guidance on
                your Permanent Residency (PR) application.
              </span>

              <span
                className="mx-4 text-marquee-separator"
                aria-hidden="true"
              >
                ✦
              </span>

              <span className="mx-6 text-xs font-normal md:text-sm">
                🇨🇦 Découvrez Entrée Express Canada - Bénéficiez de conseils
                d’experts pour votre demande de Résidence Permanente (RP).
              </span>

              <span
                className="mx-4 text-marquee-separator"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-x-4 gap-y-4 px-4 py-3 text-sm sm:gap-x-6 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
          <a
            href="mailto:info@rave.com"
            className="group flex min-w-0 items-center gap-3"
          >
            <Mail size={20} aria-hidden="true" className="shrink-0" />
            <span className="break-words">info@rave.com</span>
          </a>

          <a
            href="tel:+237651565843"
            className="group flex min-w-0 items-center gap-3"
          >
            <Phone size={20} aria-hidden="true" className="shrink-0" />
            <span>+237 651 565 843</span>
          </a>

          <a
            href="tel:+167976373020"
            className="group flex min-w-0 items-center gap-3"
          >
            <PhoneIncoming
              size={20}
              aria-hidden="true"
              className="shrink-0"
            />
            <span>+1 679 763 73020</span>
          </a>

          <div className="flex min-w-0 items-center gap-3 lg:justify-end">
            <Clock3 size={20} aria-hidden="true" className="shrink-0" />
            <span>{t("workingHours")}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-5 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            aria-label={t("homepage")}
            className="flex shrink-0 items-center gap-3"
            onClick={() => {
              closeMobileMenu();
              setDesktopSubmenuOpen(null);
            }}
          >
            <Image
              src="/images/logo.jpeg"
              alt="Rave"
              width={170}
              height={52}
              priority
              className="h-10 w-auto object-contain sm:h-12"
            />

            <div className="hidden flex-col sm:flex">
              <span className="text-xl font-bold leading-tight tracking-wide text-muted-foreground">
                RAVE
              </span>
              <span className="text-sm leading-tight text-muted-foreground">
                {t("slogan")}
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label={t("mainNavigation")}
            className="hidden items-center gap-4 xl:flex 2xl:gap-5"
          >
            {navigation.map((item) => {
              const Icon = item.icon;
              const children = item.children;
              const hasChildren = Boolean(children?.length);
              const isSubmenuOpen = desktopSubmenuOpen === item.id;

              return (
                <div
                  key={item.id}
                  className="group relative"
                  onMouseEnter={() => {
                    if (hasChildren) {
                      setDesktopSubmenuOpen(item.id);
                    } else {
                      setDesktopSubmenuOpen(null);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) {
                      setDesktopSubmenuOpen((current) =>
                        current === item.id ? null : current
                      );
                    }
                  }}
                  onFocus={() => {
                    if (hasChildren) {
                      setDesktopSubmenuOpen(item.id);
                    }
                  }}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      aria-expanded={isSubmenuOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        setDesktopSubmenuOpen(
                          isSubmenuOpen ? null : item.id
                        )
                      }
                      className="group inline-flex items-center gap-2 whitespace-nowrap py-3 text-[15px] font-medium text-foreground/80 transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <Icon
                        size={18}
                        aria-hidden="true"
                        className="shrink-0 group-hover:text-icon-accent"
                      />
                      <span>{t(`navigation.${item.label}`)}</span>
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`transition-transform ${isSubmenuOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setDesktopSubmenuOpen(null)}
                      className="group inline-flex items-center gap-2 whitespace-nowrap py-3 text-[15px] font-medium text-foreground/80 transition-colors hover:text-accent-hover"
                    >
                      <Icon
                        size={18}
                        aria-hidden="true"
                        className="shrink-0 group-hover:text-icon-accent"
                      />
                      <span>{t(`navigation.${item.label}`)}</span>
                    </Link>
                  )}

                  {/* Desktop dropdown */}
                  {hasChildren && children && (
                    <div
                      id={`desktop-submenu-${item.id}`}
                      className={`absolute left-0 top-full z-50 min-w-64 rounded-xl border border-border bg-background p-2 shadow-xl transition-all duration-150 ${isSubmenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible pointer-events-none translate-y-1 opacity-0"
                        }`}
                    >
                      <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {t(`navigation.${item.label}`)}
                      </div>

                      {children.map((child) => {
                        const ChildIcon = child.icon;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDesktopSubmenuOpen(null)}
                            className="group flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-normal text-foreground/80 transition-colors duration-200 hover:bg-muted hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            <ChildIcon
                              size={19}
                              aria-hidden="true"
                              className="shrink-0 text-primary transition-colors duration-200 group-hover:text-icon-accent"
                            />
                            <span>{t(`navigation.${child.label}`)}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex sm:gap-3">
            <LanguageSelector />
            <ThemeToggle />

            {!loading && (
              <button
                type="button"
                onClick={handleBookNow}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-button-primary px-4 py-3 text-[15px] font-medium text-button-primary-foreground shadow-sm transition-all duration-200 hover:bg-button-primary-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <CalendarCheck
                  size={19}
                  aria-hidden="true"
                  className="shrink-0"
                />
                <span>{t("bookNow")}</span>
              </button>
            )}
          </div>

          {/* Mobile actions */}
          <div className="flex shrink-0 items-center gap-2 sm:hidden">
            <LanguageSelector />
            <ThemeToggle />

            <button
              type="button"
              aria-label={
                mobileMenuOpen ? t("closeMenu") : t("openMenu")
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() =>
                mobileMenuOpen
                  ? closeMobileMenu()
                  : setMobileMenuOpen(true)
              }
              className="inline-flex items-center justify-center rounded-lg border border-border p-2.5 text-foreground transition-colors duration-200 hover:bg-muted hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {mobileMenuOpen ? (
                <X size={23} aria-hidden="true" />
              ) : (
                <Menu size={23} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border bg-background xl:hidden"
          >
            <nav
              aria-label={t("mobileNavigation")}
              className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
            >
              {navigation.map((item) => {
                const Icon = item.icon;
                const children = item.children;
                const hasChildren = Boolean(children?.length);
                const isSubmenuOpen = mobileSubmenuOpen === item.id;
                const itemLabel = t(`navigation.${item.label}`);

                return (
                  <div key={item.id}>
                    <div className="flex items-center border-b border-border/60">
                      {hasChildren ? (
                        <button
                          type="button"
                          aria-expanded={isSubmenuOpen}
                          aria-controls={`mobile-submenu-${item.id}`}
                          onClick={() =>
                            setMobileSubmenuOpen(
                              isSubmenuOpen ? null : item.id
                            )
                          }
                          className="group flex w-full items-center gap-5 py-5 text-left text-base font-medium text-foreground/90 transition-colors duration-200 hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                        >
                          <Icon
                            size={20}
                            aria-hidden="true"
                            className="shrink-0 text-primary transition-colors duration-200 group-hover:text-icon-accent"
                          />
                          <span className="flex-1">{itemLabel}</span>
                          <ChevronDown
                            size={18}
                            aria-hidden="true"
                            className={`shrink-0 transition-transform duration-200 ${isSubmenuOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="group flex flex-1 items-center gap-5 py-5 text-base font-medium text-foreground/90 transition-colors duration-200 hover:text-accent-hover"
                        >
                          <Icon
                            size={20}
                            aria-hidden="true"
                            className="shrink-0 text-primary transition-colors duration-200 group-hover:text-icon-accent"
                          />
                          <span>{itemLabel}</span>
                        </Link>
                      )}
                    </div>

                    {/* Mobile submenu */}
                    {hasChildren && children && isSubmenuOpen && (
                      <div
                        id={`mobile-submenu-${item.id}`}
                        className="border-b border-border/60 bg-muted/30 py-2 pl-5"
                      >
                        {children.map((child) => {
                          const ChildIcon = child.icon;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="group flex items-center gap-3 rounded-md px-3 py-3 text-sm font-normal text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                              <ChildIcon
                                size={18}
                                aria-hidden="true"
                                className="shrink-0 transition-colors duration-200 group-hover:text-icon-accent"
                              />
                              <span>
                                {t(`navigation.${child.label}`)}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile booking action */}
              {!loading && (
                <div className="mt-5 border-t border-border pt-4 pb-2">
                  <button
                    type="button"
                    onClick={handleBookNow}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-button-primary px-4 py-4 text-base font-medium text-button-primary-foreground shadow-sm transition-all duration-200 hover:bg-button-primary-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <CalendarCheck size={20} aria-hidden="true" />
                    <span>{t("bookNow")}</span>
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


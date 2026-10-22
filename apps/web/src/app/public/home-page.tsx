import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

import { HeroSection } from "@/components/home/hero-section";
import { AnnouncementBanner } from "@/components/home/announcement-banner";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { PortalCta } from "@/components/home/portal-cta";
import { UsefulLinks } from "@/components/home/useful-links";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <AnnouncementBanner />
      <ServicesSection />
      <ProcessSection />
      <PortalCta />
      <UsefulLinks />
      <SiteFooter />
    </main>
  );
}
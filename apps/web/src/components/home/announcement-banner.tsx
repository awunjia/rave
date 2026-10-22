
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <Info
            size={20}
            className="mt-0.5 shrink-0 text-[#a78a4d]"
          />

          <div>
            <h2 className="text-sm font-semibold">
              Before starting your application
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Review the applicable requirements and prepare your
              supporting documents before booking a consultation.
            </p>
          </div>
        </div>

        <Link
          href="/visa-information"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#a78a4d] hover:underline"
        >
          Read the guidance
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

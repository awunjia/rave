
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function PortalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid overflow-hidden bg-[#f0ede5] text-[#102b46] md:grid-cols-[1fr_auto]">
        <div className="p-7 sm:p-10 lg:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b713e]">
            Your personal workspace
          </p>

          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Keep your case organized in one place.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#102b46]/70 sm:text-base">
            Access your applications, organize supporting documents,
            review your appointments, and follow your case through your
            personal client portal.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="inline-flex min-h-12 items-center gap-3 bg-[#102b46] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b4266]"
            >
              Create an account
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/login"
              className="inline-flex min-h-12 items-center border border-[#102b46]/20 px-6 py-3 text-sm font-semibold hover:bg-[#102b46]/5"
            >
              Sign in
            </Link>
          </div>
        </div>

        <div className="hidden min-w-64 items-center justify-center border-l border-[#102b46]/10 px-10 md:flex">
          <div className="flex size-36 items-center justify-center rounded-full border border-[#102b46]/15">
            <ShieldCheck size={52} strokeWidth={1.2} />
          </div>
        </div>
      </div>
    </section>
  );
}

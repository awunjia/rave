import { ReactNode } from "react";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { UserDropdown } from "@/components/portal/user-dropdown";
import { PortalHeaderActions } from "@/components/portal/portal-header-actions";
import { PortalSidebar } from "@/components/portal/portal-sidebar";
import { Search, Bell } from "lucide-react";

export const instant = false;

export default async function PortalLayout({ children }: { children: ReactNode }) {
    const user = await getCurrentUser();
    const locale = await getLocale();

    if (!user) {
        redirect(`/${locale}/auth/signin`);
    }

    const initials = user.name
        ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
        : "RC";

    return (
        <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">

            {/* Interactive Collapsible Sidebar */}
            <PortalSidebar user={user} locale={locale} initials={initials} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-slate-50 dark:bg-slate-950">
                <header className="h-20 border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl px-10 flex items-center justify-between sticky top-0 z-30">

                    {/* Search Bar Container (Height h-11) */}
                    <div className="flex items-center gap-4 w-72">
                        <div className="relative w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                <Search size={18} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search case notes..."
                                className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950 pl-10 pr-4 text-xs font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    {/* Right Header Controls */}
                    <div className="flex items-center gap-4">
                        <PortalHeaderActions />

                        <button
                            type="button"
                            aria-label="Notifications"
                            className="relative h-11 w-11 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer shadow-2xs"
                        >
                            <Bell size={20} />
                            <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-900" />
                        </button>

                        <div className="h-7 w-px bg-slate-200 dark:bg-slate-800" />

                        <UserDropdown user={user} locale={locale} initials={initials} />
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-10">
                    <div className="max-w-7xl mx-auto w-full space-y-8">
                        {children}
                    </div>
                </main>

                <footer className="h-16 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <p>© 2026 RAVE Embassy Visa Consultancy. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
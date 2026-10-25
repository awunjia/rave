import {
    FolderKanban, Calendar as CalendarIcon, FileCheck, CreditCard,
    ArrowUpRight, Plane, AlertCircle, Clock, Sparkles, FileText
} from "lucide-react";

interface DashboardProps {
    user: { name: string; email: string; role: string };
    locale: string;
}

export function ClientDashboard({ user, locale }: DashboardProps) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
                <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={13} /> Applicant Portal
                    </div>
                    <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                        Welcome back, {user.name}
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Track your visa progress, review document readiness, and manage scheduled consultations.
                    </p>
                </div>
                <a
                    href={`/${locale}/portal/appointments`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-500/10 hover:bg-amber-400 transition-all cursor-pointer flex-shrink-0"
                >
                    <CalendarIcon size={16} />
                    Book Consultation
                </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Applications</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">2 Visas</p>
                        <p className="text-[11px] text-blue-600 dark:text-blue-400 font-bold mt-0.5">Canada & Schengen</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                        <FolderKanban size={20} />
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next Deadline</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">Nov 04</p>
                        <p className="text-[11px] text-amber-600 dark:text-amber-400 font-bold mt-0.5">Biometrics Scheduled</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                        <Clock size={20} />
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Document Vault</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">8 / 10</p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">80% Verified</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        <FileCheck size={20} />
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Invoice</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">$250.00</p>
                        <p className="text-[11px] text-purple-600 dark:text-purple-400 font-bold mt-0.5">Retainer Fee</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                        <CreditCard size={20} />
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Application Status Feed</h2>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Real-time visa updates from assigned embassy consultants.</p>
                            </div>
                            <a href={`/${locale}/portal/case-notes`} className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1">
                                Full Feed <ArrowUpRight size={14} />
                            </a>
                        </div>

                        <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex items-start gap-3.5">
                            <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 font-bold">
                                <FileText size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Canada Tourist Visa (V-1)</p>
                                    <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">Under Review</span>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                                    Passport details and proof of funds verified by reviewer. Awaiting appointment confirmation.
                                </p>
                                <span className="text-[11px] font-semibold text-slate-400 mt-2 block">Updated 2 hours ago</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex items-start gap-3.5">
                            <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 font-bold">
                                <Plane size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Flight Reservation Itinerary</p>
                                    <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Confirmed</span>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                                    Roundtrip flight itinerary generated for embassy submission (YAU - TOR).
                                </p>
                                <span className="text-[11px] font-semibold text-slate-400 mt-2 block">Updated yesterday</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex items-start gap-3.5">
                            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 font-bold">
                                <AlertCircle size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Embassy Document Query</p>
                                    <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20">Action Required</span>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                                    Additional bank statement for July 2026 required by lead consultant.
                                </p>
                                <span className="text-[11px] font-semibold text-slate-400 mt-2 block">Updated Oct 22, 2026</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs space-y-4">
                        <h2 className="text-base font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                            <CalendarIcon size={18} className="text-amber-500" /> Next Consultation
                        </h2>
                        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                            <div className="flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                                <span>1-on-1 Visa Review</span>
                                <span>10:30 AM</span>
                            </div>
                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Monday, Oct 26, 2026</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Advisor: Sarah Jenkins</p>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-base font-bold text-slate-900 dark:text-white">Pending Retainer</h2>
                            <a href={`/${locale}/portal/payments`} className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">
                                Receipts
                            </a>
                        </div>
                        <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-900 dark:text-white">Consultancy Fee</p>
                                <p className="text-[11px] text-slate-400 font-medium mt-0.5">#INV-2026-089</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-black text-slate-900 dark:text-white">$250.00</p>
                                <a href={`/${locale}/portal/payments`} className="text-[11px] font-bold text-amber-600 hover:underline block mt-0.5">Pay Online →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
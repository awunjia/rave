import { ShieldCheck, FileCheck2, AlertTriangle, CheckCircle2, Eye } from "lucide-react";

interface DashboardProps {
    user: { name: string; email: string; role: string };
    locale: string;
}

export function ReviewerDashboard({ user, locale }: DashboardProps) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
                <div>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
                        Compliance & Audit Desk
                    </span>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                        Reviewer Terminal: {user.name}
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        9 embassy document packages awaiting quality assurance sign-off before embassy submission.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Queue Size</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">9 Packages</p>
                        <p className="text-[11px] text-purple-600 font-bold mt-0.5">High Priority</p>
                    </div>
                    <FileCheck2 size={20} className="text-purple-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Approved Today</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">16 Files</p>
                        <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Passed Compliance</p>
                    </div>
                    <CheckCircle2 size={20} className="text-emerald-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Flagged Discrepancies</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">2 Returned</p>
                        <p className="text-[11px] text-amber-600 font-bold mt-0.5">Requires Fixes</p>
                    </div>
                    <AlertTriangle size={20} className="text-amber-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Audit Accuracy</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">99.8%</p>
                        <p className="text-[11px] text-blue-600 font-bold mt-0.5">Zero Rejections</p>
                    </div>
                    <ShieldCheck size={20} className="text-blue-500" />
                </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Document Compliance Queue</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Verify passport validity, financial proof, and invitation letters.</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                                <FileCheck2 size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Schengen Visa Package #SC-9041</p>
                                <p className="text-xs text-slate-500">Applicant: David Sterling | Passport Valid until 2031</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-500/10 text-amber-600">Pending Review</span>
                            <button className="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-bold hover:opacity-90 flex items-center gap-1.5 cursor-pointer">
                                <Eye size={14} /> Audit Vault
                            </button>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                                <FileCheck2 size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">UK Visitor Visa Package #UK-1022</p>
                                <p className="text-xs text-slate-500">Applicant: Sarah Jenkins | Proof of Funds ($42,000 Verified)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-500/10 text-amber-600">Pending Review</span>
                            <button className="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-bold hover:opacity-90 flex items-center gap-1.5 cursor-pointer">
                                <Eye size={14} /> Audit Vault
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
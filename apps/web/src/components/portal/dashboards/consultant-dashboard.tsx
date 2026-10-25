import { Users, Calendar, FileSearch, CheckCircle2, ArrowUpRight, Plus, MessageSquare } from "lucide-react";

interface DashboardProps {
    user: { name: string; email: string; role: string };
    locale: string;
}

export function ConsultantDashboard({ user, locale }: DashboardProps) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
                <div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                        Consultant Workdesk
                    </span>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                        Advisor Desk: {user.name}
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        You have 4 client consultations scheduled today and 14 active visa files under your oversight.
                    </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-500/10 hover:bg-amber-400 cursor-pointer">
                    <Plus size={16} /> Log Case Note
                </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Assigned Applicants</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">14 Clients</p>
                        <p className="text-[11px] text-blue-600 font-bold mt-0.5">8 Active Consults</p>
                    </div>
                    <Users size={20} className="text-blue-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Today's Schedule</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">4 Meetings</p>
                        <p className="text-[11px] text-amber-600 font-bold mt-0.5">Next in 45 mins</p>
                    </div>
                    <Calendar size={20} className="text-amber-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Pending Vault Audits</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">6 Vaults</p>
                        <p className="text-[11px] text-purple-600 font-bold mt-0.5">Requires Verification</p>
                    </div>
                    <FileSearch size={20} className="text-purple-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Approval Success</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">98.4%</p>
                        <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Embassy Rate</p>
                    </div>
                    <CheckCircle2 size={20} className="text-emerald-500" />
                </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Active Applicant Pipeline</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Assigned client visa cases requiring guidance or review.</p>
                    </div>
                    <a href={`/${locale}/portal/case-notes`} className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1">
                        View All Applicants <ArrowUpRight size={14} />
                    </a>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200/80 dark:border-slate-800 text-[11px] font-extrabold uppercase text-slate-400">
                                <th className="pb-3 px-2">Applicant</th>
                                <th className="pb-3 px-2">Target Embassy</th>
                                <th className="pb-3 px-2">Visa Type</th>
                                <th className="pb-3 px-2">Status</th>
                                <th className="pb-3 px-2 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs font-semibold">
                            <tr>
                                <td className="py-3.5 px-2 font-bold text-slate-900 dark:text-white">Michael Vance</td>
                                <td className="py-3.5 px-2">🇨🇦 Canada (Ottawa)</td>
                                <td className="py-3.5 px-2">Express Entry Permanent Resident</td>
                                <td className="py-3.5 px-2"><span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 font-bold">Document Audit</span></td>
                                <td className="py-3.5 px-2 text-right"><button className="text-amber-600 font-bold hover:underline">Open File →</button></td>
                            </tr>
                            <tr>
                                <td className="py-3.5 px-2 font-bold text-slate-900 dark:text-white">Elena Rostova</td>
                                <td className="py-3.5 px-2">🇫🇷 France (Schengen)</td>
                                <td className="py-3.5 px-2">Business Long Stay (VLS-TS)</td>
                                <td className="py-3.5 px-2"><span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-bold">Biometrics Booked</span></td>
                                <td className="py-3.5 px-2 text-right"><button className="text-amber-600 font-bold hover:underline">Open File →</button></td>
                            </tr>
                            <tr>
                                <td className="py-3.5 px-2 font-bold text-slate-900 dark:text-white">Kofi Mensah</td>
                                <td className="py-3.5 px-2">🇬🇧 United Kingdom</td>
                                <td className="py-3.5 px-2">Skilled Worker Visa</td>
                                <td className="py-3.5 px-2"><span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold">Ready for Review</span></td>
                                <td className="py-3.5 px-2 text-right"><button className="text-amber-600 font-bold hover:underline">Open File →</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
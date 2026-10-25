import { Users, Shield, DollarSign, Activity, UserPlus, FileSpreadsheet } from "lucide-react";

interface DashboardProps {
    user: { name: string; email: string; role: string };
    locale: string;
}

export function AdminDashboard({ user, locale }: DashboardProps) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
                <div>
                    <span className="px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                        Executive Command Center
                    </span>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                        System Administration: {user.name}
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Platform health 100% operational. Active user roles: 42 Clients, 6 Consultants, 3 Reviewers, 2 Admins.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800 px-4 py-3 text-xs font-bold text-slate-900 dark:text-white hover:bg-slate-200 cursor-pointer">
                        <FileSpreadsheet size={16} /> Export Audit Log
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-500/10 hover:bg-amber-400 cursor-pointer">
                        <UserPlus size={16} /> Provision User
                    </button>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Total Users</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">53 Registered</p>
                        <p className="text-[11px] text-emerald-600 font-bold mt-0.5">+12% this month</p>
                    </div>
                    <Users size={20} className="text-blue-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Gross Retainers</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">$48,250.00</p>
                        <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Cleared Invoices</p>
                    </div>
                    <DollarSign size={20} className="text-emerald-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Total Submissions</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">128 Visas</p>
                        <p className="text-[11px] text-purple-600 font-bold mt-0.5">Across 8 Embassies</p>
                    </div>
                    <Shield size={20} className="text-purple-500" />
                </div>
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Backend Latency</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">21 ms</p>
                        <p className="text-[11px] text-emerald-600 font-bold mt-0.5">NestJS Engine OK</p>
                    </div>
                    <Activity size={20} className="text-amber-500" />
                </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">User Access & Role Management</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Control platform roles (CLIENT, CONSULTANT, REVIEWER, ADMIN).</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200/80 dark:border-slate-800 text-[11px] font-extrabold uppercase text-slate-400">
                                <th className="pb-3 px-2">User Name</th>
                                <th className="pb-3 px-2">Email Address</th>
                                <th className="pb-3 px-2">Assigned Role</th>
                                <th className="pb-3 px-2">Status</th>
                                <th className="pb-3 px-2 text-right">Settings</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs font-semibold">
                            <tr>
                                <td className="py-3.5 px-2 font-bold text-slate-900 dark:text-white">Sarah Jenkins</td>
                                <td className="py-3.5 px-2">sarah.j@ravevisa.com</td>
                                <td className="py-3.5 px-2"><span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-bold">CONSULTANT</span></td>
                                <td className="py-3.5 px-2"><span className="text-emerald-600 font-bold">● Active</span></td>
                                <td className="py-3.5 px-2 text-right"><button className="text-amber-600 font-bold hover:underline">Edit Privileges</button></td>
                            </tr>
                            <tr>
                                <td className="py-3.5 px-2 font-bold text-slate-900 dark:text-white">Alexandre Dubois</td>
                                <td className="py-3.5 px-2">a.dubois@ravevisa.com</td>
                                <td className="py-3.5 px-2"><span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 font-bold">REVIEWER</span></td>
                                <td className="py-3.5 px-2"><span className="text-emerald-600 font-bold">● Active</span></td>
                                <td className="py-3.5 px-2 text-right"><button className="text-amber-600 font-bold hover:underline">Edit Privileges</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
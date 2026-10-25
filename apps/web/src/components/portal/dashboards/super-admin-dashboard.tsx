import {
    Server, ShieldAlert, Database, KeyRound,
    Terminal, Zap, Lock
} from "lucide-react";

interface DashboardProps {
    user: { name: string; email: string; role: string };
    locale: string;
}

export function SuperAdminDashboard({ user, locale }: DashboardProps) {
    return (
        <div className="space-y-6">

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cluster Status</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">4 Nodes</p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">NestJS Microservices OK</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        <Server size={20} />
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Database Load</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">12.4% CPU</p>
                        <p className="text-[11px] text-blue-600 dark:text-blue-400 font-bold mt-0.5">PostgreSQL Pool (18/100)</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                        <Database size={20} />
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Security Events</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">0 Threats</p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">Rate Limit Guard Active</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                        <ShieldAlert size={20} />
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global Latency</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">18 ms</p>
                        <p className="text-[11px] text-amber-600 dark:text-amber-400 font-bold mt-0.5">API Gateway Response</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                        <Zap size={20} />
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white">NestJS Microservice Cluster</h2>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Internal service status and API gateway health.</p>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold">
                                All Systems Operational
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Auth & Session Microservice</p>
                                        <p className="text-xs text-slate-500">JWT Token Service | Port 4001</p>
                                    </div>
                                </div>
                                <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-300">12ms latency</span>
                            </div>

                            <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Embassy Document Vault Engine</p>
                                        <p className="text-xs text-slate-500">S3 Storage & Encryption | Port 4002</p>
                                    </div>
                                </div>
                                <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-300">22ms latency</span>
                            </div>

                            <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Payment & Invoice Webhook Gateway</p>
                                        <p className="text-xs text-slate-500">Stripe Integration | Port 4003</p>
                                    </div>
                                </div>
                                <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-300">15ms latency</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-base font-bold text-slate-900 dark:text-white">System Role Breakdown</h2>
                        </div>
                        <div className="space-y-2 text-xs font-bold">
                            <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                                <span className="text-slate-500">SUPER_ADMIN:</span>
                                <span className="text-slate-900 dark:text-white">1 Active</span>
                            </div>
                            <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                                <span className="text-slate-500">ADMIN:</span>
                                <span className="text-slate-900 dark:text-white">3 Active</span>
                            </div>
                            <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                                <span className="text-slate-500">CONSULTANT:</span>
                                <span className="text-slate-900 dark:text-white">8 Active</span>
                            </div>
                            <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                                <span className="text-slate-500">REVIEWER:</span>
                                <span className="text-slate-900 dark:text-white">4 Active</span>
                            </div>
                            <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                                <span className="text-slate-500">CLIENT:</span>
                                <span className="text-slate-900 dark:text-white">42 Applicants</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
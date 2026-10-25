"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FolderKanban,
    Calendar,
    FileCheck2,
    CreditCard,
    MessageSquare,
    Settings,
    LogOut,
    ClipboardList,
    ChevronLeft,
    ChevronRight,
    Activity,
    Server,
    Wifi,
    Sliders,
    SlidersHorizontal,
    Users,
    UserPlus,
    ShieldAlert,
    FileSearch,
    Shield
} from "lucide-react";

interface PortalSidebarProps {
    user: {
        name: string;
        email: string;
        role: "CLIENT" | "CONSULTANT" | "REVIEWER" | "ADMIN" | "SUPER_ADMIN" | string;
    };
    locale: string;
    initials: string;
}

export function PortalSidebar({ user, locale, initials }: PortalSidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();
    const [systemHealth, setSystemHealth] = useState({
        status: "OPERATIONAL",
        latency: "24ms",
        apiConnected: true
    });

    // Simulated health check state (ready for NestJS backend /health ping)
    useEffect(() => {
        const interval = setInterval(() => {
            const mockLatency = Math.floor(Math.random() * 15) + 18;
            setSystemHealth((prev) => ({ ...prev, latency: `${mockLatency}ms` }));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const role = user.role;

    // Helper for active link styling
    const isActive = (path: string) => pathname === path;

    // Clear client-side token storage when signing out
    const handleSignOut = () => {
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("mfaChallenge");
    };

    return (
        <aside
            className={`flex-shrink-0 border-r border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col z-20 shadow-sm transition-all duration-300 relative ${isCollapsed ? "w-20" : "w-80"
                }`}
        >
            {/* Collapse / Expand Toggle Button */}
            <button
                type="button"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3.5 top-7 h-7 w-7 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center shadow-md cursor-pointer transition-transform z-30"
                aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

            {/* 1. App Logo Header */}
            <div className="h-20 flex items-center px-6 border-b border-slate-200/80 dark:border-slate-800 gap-3.5 overflow-hidden">
                <div className="relative h-11 w-11 flex-shrink-0 flex items-center justify-center">
                    <Image
                        src="/images/logo.jpeg"
                        alt="RAVE Logo"
                        width={44}
                        height={44}
                        className="object-contain"
                        priority
                    />
                </div>
                {!isCollapsed && (
                    <div className="animate-in fade-in duration-200 min-w-0">
                        <span className="font-black text-xl tracking-wider block text-slate-900 dark:text-white leading-none">
                            RAVE
                        </span>
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-bold tracking-widest uppercase block mt-1">
                            Visa Consultation
                        </span>
                    </div>
                )}
            </div>

            {/* 2. System Stats & Health Status Widget */}
            <div className="p-4">
                <div
                    className={`rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/40 transition-all ${isCollapsed ? "p-2.5 flex justify-center" : "p-3.5"
                        }`}
                >
                    {isCollapsed ? (
                        <div
                            className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold border border-emerald-500/20"
                            title={`System: ${systemHealth.status} (${systemHealth.latency})`}
                        >
                            <Activity size={18} className="animate-pulse" />
                        </div>
                    ) : (
                        <div className="space-y-2.5 animate-in fade-in duration-200">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                    <Server size={13} className="text-500" />
                                    Service Status
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    100%
                                </span>
                            </div>

                            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80 space-y-1.5">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-100">
                                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                                        <Wifi size={13} className="text-500" /> Sync Latency:
                                    </span>
                                    <span className="font-mono text-slate-700 dark:text-slate-300">{systemHealth.latency}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* 3. Navigation Menu Links (Role-Based) */}
            <nav className="flex-1 px-4 py-1 space-y-1.5 overflow-y-auto">
                {!isCollapsed && (
                    <p className="px-3 pb-1 text-xs font-extrabold tracking-widest text-slate-400 uppercase">
                        Main Menu
                    </p>
                )}

                {/* Dashboard (All Roles) */}
                <Link
                    href={`/${locale}/portal`}
                    className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-bold transition-all ${isActive(`/${locale}/portal`)
                        ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/50"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                        } ${isCollapsed ? "justify-center px-0" : ""}`}
                    title={isCollapsed ? "Dashboard" : undefined}
                >
                    <LayoutDashboard size={20} className="text-amber-500 flex-shrink-0" />
                    {!isCollapsed && <span>Dashboard</span>}
                </Link>

                {/* Case Notes / Applications Feed */}
                <Link
                    href={`/${locale}/portal/case-notes`}
                    className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                        }`}
                    title={isCollapsed ? (role === "CLIENT" ? "Case Notes" : "Client Cases") : undefined}
                >
                    <FolderKanban size={20} className="text-slate-400 flex-shrink-0" />
                    {!isCollapsed && (
                        <>
                            <span>{role === "CLIENT" ? "Case Notes" : "Client Cases"}</span>
                            <span className="ml-auto px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                3
                            </span>
                        </>
                    )}
                </Link>

                {/* Consultations (CLIENT & CONSULTANT & ADMIN) */}
                {(role === "CLIENT" || role === "CONSULTANT" || role === "ADMIN" || role === "SUPER_ADMIN") && (
                    <Link
                        href={`/${locale}/portal/appointments`}
                        className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                            }`}
                        title={isCollapsed ? "Consultations" : undefined}
                    >
                        <Calendar size={20} className="text-slate-400 flex-shrink-0" />
                        {!isCollapsed && <span>Consultations</span>}
                    </Link>
                )}

                {/* Document Vault (CLIENT, REVIEWER, CONSULTANT) */}
                <Link
                    href={`/${locale}/portal/documents`}
                    className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                        }`}
                    title={isCollapsed ? (role === "REVIEWER" ? "Audit Vault" : "Document Vault") : undefined}
                >
                    <FileCheck2 size={20} className="text-slate-400 flex-shrink-0" />
                    {!isCollapsed && <span>{role === "REVIEWER" ? "Audit Vault Queue" : "Document Vault"}</span>}
                </Link>

                {/* Payments & Retainers (CLIENT, ADMIN, SUPER_ADMIN) */}
                {(role === "CLIENT" || role === "ADMIN" || role === "SUPER_ADMIN") && (
                    <Link
                        href={`/${locale}/portal/payments`}
                        className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                            }`}
                        title={isCollapsed ? "Payments & Billing" : undefined}
                    >
                        <CreditCard size={20} className="text-slate-400 flex-shrink-0" />
                        {!isCollapsed && <span>Payments & Retainers</span>}
                    </Link>
                )}

                {/* REVIEWER Specific Audit Menu */}
                {role === "REVIEWER" && (
                    <Link
                        href={`/${locale}/portal/compliance`}
                        className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                            }`}
                        title={isCollapsed ? "Compliance Checks" : undefined}
                    >
                        <FileSearch size={20} className="text-purple-500 flex-shrink-0" />
                        {!isCollapsed && <span>Compliance Audits</span>}
                    </Link>
                )}

                {/* ADMIN & SUPER_ADMIN User Roster */}
                {(role === "ADMIN" || role === "SUPER_ADMIN") && (
                    <Link
                        href={`/${locale}/portal/admin/users`}
                        className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                            }`}
                        title={isCollapsed ? "User Roster" : undefined}
                    >
                        <Users size={20} className="text-500 flex-shrink-0" />
                        {!isCollapsed && <span>User Directory</span>}
                    </Link>
                )}

                {/* SUPER_ADMIN Specific Root Tools */}
                {role === "SUPER_ADMIN" && (
                    <>
                        <Link
                            href={`/${locale}/portal/admin/users/management`}
                            className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                                }`}
                            title={isCollapsed ? "Invite User" : undefined}
                        >
                            <UserPlus size={20} className="text-500 flex-shrink-0" />
                            {!isCollapsed && <span>Manage Users</span>}
                        </Link>
                        <Link
                            href={`/${locale}/portal/admin/cluster`}
                            className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                                }`}
                            title={isCollapsed ? "Cluster Health" : undefined}
                        >
                            <Server size={20} className="text-500 flex-shrink-0" />
                            {!isCollapsed && <span>Cluster Telemetry</span>}
                        </Link>
                    </>
                )}

                {/* Support Section */}
                {!isCollapsed && (
                    <p className="px-3 pt-5 pb-1 text-xs font-extrabold tracking-widest text-slate-400 uppercase">
                        Support
                    </p>
                )}

                {/* Intake Smart Forms (CLIENT & CONSULTANT) */}
                {(role === "CLIENT" || role === "CONSULTANT") && (
                    <Link
                        href={`/${locale}/portal/intake-forms`}
                        className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                            }`}
                        title={isCollapsed ? "Intake Forms" : undefined}
                    >
                        <ClipboardList size={20} className="text-slate-400 flex-shrink-0" />
                        {!isCollapsed && <span>Intake Forms</span>}
                    </Link>
                )}

                <Link
                    href={`/${locale}/portal/messages`}
                    className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                        }`}
                    title={isCollapsed ? "Consultant Chat" : undefined}
                >
                    <MessageSquare size={20} className="text-slate-400 flex-shrink-0" />
                    {!isCollapsed && (
                        <>
                            <span>{role === "CLIENT" ? "Consultant Chat" : "Client Messages"}</span>
                            <span className="ml-auto px-2 py-0.5 text-xs font-extrabold rounded-full bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950">
                                1
                            </span>
                        </>
                    )}
                </Link>

                <Link
                    href={`/${locale}/portal/account-settings`}
                    className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                        }`}
                    title={isCollapsed ? "Account Settings" : undefined}
                >
                    <Settings size={20} className="text-slate-400 flex-shrink-0" />
                    {!isCollapsed && <span>Account Settings</span>}
                </Link>

                <Link
                    href={`/${locale}/portal/systems-settings`}
                    className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isCollapsed ? "justify-center px-0" : ""
                        }`}
                    title={isCollapsed ? "Account Settings" : undefined}
                >
                    <SlidersHorizontal size={20} className="text-slate-400 flex-shrink-0" />
                    {!isCollapsed && <span>System Settings</span>}
                </Link>
            </nav>

            {/* 4. Bottom Sign Out Action */}
            <div className="p-4 border-t border-slate-200/80 dark:border-slate-800">
                <form action="/api/auth/signout" method="POST">
                    <button
                        type="submit"
                        className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-base font-bold text-red-600 hover:bg-red-500/10 cursor-pointer transition-all ${isCollapsed ? "justify-center px-0" : ""
                            }`}
                        title={isCollapsed ? "Sign Out" : undefined}
                    >
                        <LogOut size={20} className="flex-shrink-0" onSubmit={handleSignOut} />
                        {!isCollapsed && <span>Sign Out</span>}
                    </button>
                </form>
            </div>
        </aside>
    );
}
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, User, Shield, LogOut, ExternalLink, Sparkles, Settings } from "lucide-react";

interface UserDropdownProps {
    user: {
        name: string;
        email: string;
        role: string;
        id?: string;
        avatarUrl?: string;
    };
    locale: string;
    initials?: string;
}

export function UserDropdown({ user, locale }: UserDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [imageError, setImageError] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Clear client-side token storage when signing out
    const handleSignOut = () => {
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("mfaChallenge");
    };

    const avatarSrc = user.avatarUrl && !imageError ? user.avatarUrl : "/images/avatar.jpg";

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all cursor-pointer focus:outline-none border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60"
            >
                <div className="relative h-11 w-11 rounded-2xl overflow-hidden border border-amber-500/30 shadow-md shadow-amber-500/10 flex-shrink-0 bg-slate-100 dark:bg-slate-800">
                    <Image
                        src={avatarSrc}
                        alt={user.name || "User Avatar"}
                        fill
                        sizes="48px"
                        className="object-cover"
                        onError={() => setImageError(true)}
                    />
                </div>
                <div className="hidden lg:block text-left">
                    <p className="text-sm font-bold leading-tight text-slate-900 dark:text-slate-100">{user.name || "Client"}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate max-w-[160px] font-medium">{user.email}</p>
                </div>
                <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-500" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-3 w-72 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 shadow-2xl z-50 animate-in fade-in-50 zoom-in-95">

                    {/* Profile Header */}
                    <div className="p-4 border border-slate-200/60 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/60 rounded-2xl mb-2">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative h-11 w-11 rounded-2xl overflow-hidden border border-amber-500/30 shadow-md shadow-amber-500/10 flex-shrink-0 bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src={avatarSrc}
                                    alt={user.name || "User Avatar"}
                                    fill
                                    className="object-cover"
                                    onError={() => setImageError(true)}
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                                    <Sparkles size={12} />
                                    Verified Account
                                </div>
                                <p className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">{user.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate font-medium">{user.email}</p>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider bg-slate-200/60 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                                <Shield size={12} className="text-amber-500" />
                                {user.role}
                            </span>
                            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Active
                            </span>
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <div className="space-y-1">
                        <Link
                            href={`/${locale}/portal/my-profile`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <User size={18} className="text-slate-400" />
                            My Profile
                        </Link>

                        <Link
                            href={`/${locale}/portal/my-account`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <Settings size={18} className="text-slate-400" />
                            My Account
                        </Link>

                        <Link
                            href={`/${locale}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <ExternalLink size={18} className="text-slate-400" />
                            Public Website
                        </Link>
                    </div>

                    <div className="my-2 border-t border-slate-200/60 dark:border-slate-800" />

                    {/* Sign Out Action with client-side cleanup */}
                    <form action="/api/auth/signout" method="POST" onSubmit={handleSignOut}>
                        <button
                            type="submit"
                            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                        >
                            <LogOut size={18} />
                            Sign Out
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
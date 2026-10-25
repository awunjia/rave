"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";

export function PortalHeaderActions() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        if (nextTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const handleLocaleChange = (newLocale: string) => {
        setIsLangOpen(false);
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-3">
            {/* Language Switcher Dropdown (h-11) */}
            <div className="relative" ref={langRef}>
                <button
                    type="button"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="h-11 flex items-center gap-2 px-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-2xs"
                >
                    <span className="text-base leading-none">
                        {locale === "en" ? "🇺🇸" : "🇫🇷"}
                    </span>
                    <span className="uppercase tracking-wider">{locale}</span>
                    <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
                </button>

                {isLangOpen && (
                    <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 shadow-xl z-50 animate-in fade-in-50 zoom-in-95">
                        <button
                            type="button"
                            onClick={() => handleLocaleChange("en")}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${locale === "en"
                                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-sm">🇺🇸</span> English
                            </span>
                            {locale === "en" && <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleLocaleChange("fr")}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${locale === "fr"
                                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-sm">🇫🇷</span> Français
                            </span>
                            {locale === "fr" && <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
                        </button>
                    </div>
                )}
            </div>

            {/* Dark / Light Theme Toggle (h-11) */}
            <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="h-11 w-11 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-2xs"
            >
                {theme === "light" ? (
                    <Moon size={18} className="text-slate-700" />
                ) : (
                    <Sun size={18} className="text-amber-400" />
                )}
            </button>
        </div>
    );
}

"use client";

import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
    {
        code: "en",
        label: "English",
        flag: "/images/flags/en.png",
    },
    {
        code: "fr",
        label: "Français",
        flag: "/images/flags/fr.png",
    },
] as const;

export function LanguageSelector() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage =
        languages.find((language) => language.code === locale) ?? languages[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    function changeLanguage(nextLocale: "en" | "fr") {
        setOpen(false);

        if (nextLocale !== locale) {
            router.replace(pathname, { locale: nextLocale });
        }
    }

    return (
        <div ref={dropdownRef} className="relative">
            <button
                type="button"
                aria-label="Select language"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((previous) => !previous)}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-[#102B46]/30 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102B46]"
            >
                <Image
                    src={currentLanguage.flag}
                    alt=""
                    width={22}
                    height={16}
                    className="h-4 w-[22px] rounded-sm object-cover"
                />

                <span>{currentLanguage.code.toUpperCase()}</span>

                <ChevronDown
                    size={15}
                    aria-hidden="true"
                    className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div
                    role="listbox"
                    aria-label="Available languages"
                    className="absolute right-0 top-full z-[60] mt-2 flex w-48 flex-col gap-1 rounded-xl border border-border bg-background p-2 shadow-xl shadow-black/10"
                >
                    {languages.map((language) => {
                        const selected = language.code === locale;

                        return (
                            <button
                                key={language.code}
                                type="button"
                                role="option"
                                aria-selected={selected}
                                onClick={() => changeLanguage(language.code)}
                                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${selected
                                    ? "bg-[#102B46]/[0.07] font-semibold text-[#102B46] dark:bg-white/10 dark:text-white"
                                    : "text-foreground hover:bg-muted"
                                    }`}
                            >
                                <Image
                                    src={language.flag}
                                    alt=""
                                    width={26}
                                    height={18}
                                    className="h-[18px] w-[26px] rounded-sm object-cover shadow-sm"
                                />

                                <span className="flex-1 text-left">{language.label}</span>

                                {selected && (
                                    <Check
                                        size={16}
                                        aria-hidden="true"
                                        className="text-[#C8102E]"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

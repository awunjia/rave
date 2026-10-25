"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children: React.ReactNode;
}

export function AccountButton({
    variant = "primary",
    size = "md",
    isLoading = false,
    children,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 font-bold transition-all rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-500/30";

    const sizeStyles = {
        sm: "px-3.5 py-2 text-xs",
        md: "px-5 py-3 text-xs font-black",
        lg: "px-6 py-3.5 text-sm font-black",
    };

    const variantStyles = {
        primary:
            "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10 hover:bg-amber-400 active:scale-[0.98]",
        secondary:
            "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/60",
        danger:
            "bg-red-600 text-white shadow-md shadow-red-600/10 hover:bg-red-500 active:scale-[0.98]",
        ghost:
            "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800",
    };

    return (
        <button
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 size={16} className="animate-spin flex-shrink-0" />}
            {children}
        </button>
    );
}

interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    description?: string;
    disabled?: boolean;
}

export function AccountToggle({
    checked,
    onChange,
    label,
    description,
    disabled = false,
}: ToggleProps) {
    return (
        <label
            className={`flex items-center justify-between p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
        >
            <div className="space-y-0.5 pr-4">
                {label && <p className="text-sm font-bold text-slate-900 dark:text-white">{label}</p>}
                {description && <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{description}</p>}
            </div>
            <div className="relative inline-flex items-center flex-shrink-0">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => !disabled && onChange(e.target.checked)}
                    disabled={disabled}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500" />
            </div>
        </label>
    );
}
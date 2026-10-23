
"use client";

import { useState, type InputHTMLAttributes } from "react";

type PasswordInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "id" | "name" | "type"
> & {
    id: string;
    name: string;
    label: string;
    showPasswordLabel?: string;
    hidePasswordLabel?: string;
};

export function PasswordInput({
    id,
    name,
    label,
    showPasswordLabel = "Show password",
    hidePasswordLabel = "Hide password",
    className = "",
    ...props
}: PasswordInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-foreground"
            >
                {label}
            </label>

            <div className="relative">
                <input
                    {...props}
                    id={id}
                    name={name}
                    type={visible ? "text" : "password"}
                    className={`block w-full rounded-xl border border-border bg-card px-4 py-3.5 pr-20 text-base text-foreground shadow-sm outline-none transition placeholder:text-foreground/45 focus:border-accent focus:ring-4 focus:ring-accent/15 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
                />

                <button
                    type="button"
                    onClick={() => setVisible((current) => !current)}
                    aria-label={visible ? hidePasswordLabel : showPasswordLabel}
                    aria-pressed={visible}
                    className="absolute inset-y-0 right-3 my-auto h-9 rounded-lg px-2 text-sm font-medium text-link-accent transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    {visible ? hidePasswordLabel : showPasswordLabel}
                </button>
            </div>
        </div>
    );
}

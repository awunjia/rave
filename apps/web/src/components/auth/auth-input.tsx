
import type { InputHTMLAttributes } from "react";

type AuthInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "id" | "name" | "type"
> & {
    id: string;
    name: string;
    label: string;
    type?: "text" | "email";
};

export function AuthInput({
    id,
    name,
    label,
    type = "text",
    className = "",
    ...props
}: AuthInputProps) {
    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-foreground"
            >
                {label}
            </label>

            <input
                {...props}
                id={id}
                name={name}
                type={type}
                className={`block w-full rounded-xl border border-border bg-card px-4 py-3.5 text-base text-foreground shadow-sm outline-none transition placeholder:text-foreground/45 focus:border-accent focus:ring-4 focus:ring-accent/15 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
            />
        </div>
    );
}

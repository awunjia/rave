
"use client";

import Image from "next/image";
import { useState } from "react";

type GoogleSignInButtonProps = {
    label: string;
    loadingLabel: string;
    errorMessage: string;
    onError: (message: string) => void;
};

export function GoogleSignInButton({
    label,
    loadingLabel,
    errorMessage,
    onError,
}: GoogleSignInButtonProps) {
    const [loading, setLoading] = useState(false);

    function handleGoogleSignIn() {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");

        if (!apiUrl) {
            onError(errorMessage);
            return;
        }

        setLoading(true);
        onError("");

        window.location.assign(`${apiUrl}/auth/google`);
    }

    return (
        <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
            <Image
                src="/images/google-logo.png"
                alt=""
                aria-hidden="true"
                width={100}
                height={100}
                className="h-5 w-5 shrink-0"
            />

            <span>{loading ? loadingLabel : label}</span>
        </button>
    );
}

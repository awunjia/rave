"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

import { AuthShell } from "@/components/auth/auth-shell";
import { AuthInput } from "@/components/auth/auth-input";
import { PasswordInput } from "@/components/auth/password-input";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";

export default function SignInPage() {
    const t = useTranslations("auth");
    const locale = useLocale();
    const router = useRouter();

    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Prevent rendering form UI if user is already authenticated
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            router.replace(`/${locale}/portal`);
        } else {
            setIsCheckingAuth(false);
        }
    }, [locale, router]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (loading) return;

        setError("");
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = String(formData.get("email") ?? "").trim();
        const password = String(formData.get("password") ?? "");

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                if (response.status === 429) {
                    setError(t("signin.errors.rateLimited"));
                } else if (response.status === 400 || response.status === 401) {
                    setError(t("signin.errors.invalidCredentials"));
                } else {
                    setError(t("signin.errors.generic"));
                }
                setLoading(false);
                return;
            }

            const result: any = await response.json();

            // Handle MFA Challenge Step if MFA is enabled
            if (result && result.mfaRequired) {
                sessionStorage.setItem("mfaChallenge", JSON.stringify(result));
                window.location.assign(`/${locale}/auth/mfa-challenge`);
                return;
            }

            if (!result || typeof result !== "object" || !result.accessToken) {
                setError(t("signin.errors.generic"));
                setLoading(false);
                return;
            }

            // 1. Save access token to localStorage
            localStorage.setItem("accessToken", result.accessToken);

            // 2. Establish session cookie scoped to root "/" for Middleware/Server Components
            const sessionRes = await fetch("/api/auth/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ accessToken: result.accessToken }),
            });

            if (!sessionRes.ok) {
                setError(t("signin.errors.generic"));
                setLoading(false);
                return;
            }

            // Determine destination & redirect safely
            const params = new URLSearchParams(window.location.search);
            const rawReturnTo = params.get("returnTo");
            const fallbackUrl = `/${locale}/portal`;

            let destination = fallbackUrl;

            if (
                rawReturnTo &&
                rawReturnTo.startsWith("/") &&
                !rawReturnTo.startsWith("//") &&
                !rawReturnTo.includes("\\")
            ) {
                destination = `/${locale}${rawReturnTo === "/" ? "" : rawReturnTo}`;
            }

            window.location.assign(destination);
        } catch {
            setError(t("signin.errors.network"));
            setLoading(false);
        }
    }

    // Hydration guard: Show loading spinner instead of flickering the form
    if (isCheckingAuth) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-slate-950">
                <Loader2 className="animate-spin text-amber-500" size={32} />
            </div>
        );
    }

    return (
        <AuthShell
            brand={t("brand")}
            subbrand={t("slogan")}
            eyebrow={t("signin.eyebrow")}
            title={t("signin.title")}
            description={t("signin.description")}
            tagline={t("shell.tagline")}
            imageSrc="/images/visa-consultation.jpg"
        >
            <div className="space-y-6">
                <GoogleSignInButton
                    label={t("signin.google")}
                    loadingLabel={t("signin.googleLoading")}
                    errorMessage={t("signin.errors.generic")}
                    onError={setError}
                />

                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-center text-xs text-foreground/60">
                        {t("signin.divider")}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <AuthInput
                        id="email"
                        name="email"
                        type="email"
                        label={t("signin.email")}
                        placeholder={t("signin.emailPlaceholder")}
                        autoComplete="email"
                        inputMode="email"
                        required
                        maxLength={254}
                    />

                    <div>
                        <div className="mb-2 flex justify-end">
                            <Link
                                href={`/${locale}/auth/forgot-password`}
                                className="text-sm font-medium text-link-accent hover:underline"
                            >
                                {t("signin.forgotPassword")}
                            </Link>
                        </div>

                        <PasswordInput
                            id="password"
                            name="password"
                            label={t("signin.password")}
                            placeholder={t("signin.passwordPlaceholder")}
                            autoComplete="current-password"
                            showPasswordLabel={t("signin.showPassword")}
                            hidePasswordLabel={t("signin.hidePassword")}
                            required
                            maxLength={128}
                        />
                    </div>

                    {error && (
                        <p
                            role="alert"
                            aria-live="polite"
                            className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300"
                        >
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-button-primary px-4 py-3.5 text-sm font-semibold text-button-primary-foreground shadow-sm transition-colors hover:bg-button-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                    >
                        {loading
                            ? t("signin.submitting")
                            : t("signin.submit")}
                    </button>
                </form>

                <p className="text-center text-sm text-foreground/70">
                    {t("signin.noAccount")}{" "}
                    <Link
                        href={`/${locale}/auth/register`}
                        className="font-semibold text-link-accent hover:underline"
                    >
                        {t("signin.register")}
                    </Link>
                </p>

                {/* <p className="text-center text-xs leading-5 text-foreground/60">
                    {t("common.securityNote")}
                </p> */}

                <p className="text-center text-xs leading-6 text-foreground/60">
                    {t("signin.termsPrefix")}{" "}
                    <Link
                        href={`/${locale}/terms`}
                        className="underline underline-offset-4 hover:text-link-accent"
                    >
                        {t("signin.terms")}
                    </Link>{" "}
                    {t("signin.and")}{" "}
                    <Link
                        href={`/${locale}/privacy`}
                        className="underline underline-offset-4 hover:text-link-accent"
                    >
                        {t("signin.privacy")}
                    </Link>
                    .
                </p>
            </div>
        </AuthShell>
    );
}
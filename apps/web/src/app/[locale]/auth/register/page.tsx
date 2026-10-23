
"use client";
import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";

import { AuthShell } from "@/components/auth/auth-shell";
import { AuthInput } from "@/components/auth/auth-input";
import { PasswordInput } from "@/components/auth/password-input";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";

export default function RegisterPage() {
  const t = useTranslations("auth");
  const locale = useLocale();

  const searchParams = useSearchParams();

  const rawReturnTo = searchParams.get("returnTo");

  const returnTo =
    rawReturnTo &&
      rawReturnTo.startsWith("/") &&
      !rawReturnTo.startsWith("//") &&
      !rawReturnTo.includes("\\")
      ? rawReturnTo
      : "/booking/schedule";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");

    setError("");

    if (!apiUrl) {
      setError(t("register.errors.network"));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, password, locale }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const backendMessage = Array.isArray(result?.message)
          ? result.message.join(" ")
          : typeof result?.message === "string"
            ? result.message
            : "";

        if (response.status === 429) {
          setError(t("register.errors.rateLimited"));
        } else if (response.status === 409) {
          setError(t("register.errors.emailExists"));
        } else if (response.status === 400) {
          setError(backendMessage || t("register.errors.generic"));
        } else {
          setError(t("register.errors.generic"));
        }

        return;
      }

      if (result?.verificationRequired !== true) {
        setError(t("register.errors.generic"));
        return;
      }

      const query = new URLSearchParams({
        email: String(result.email ?? email).trim().toLowerCase(),
        returnTo,
      });

      window.location.assign(
        `/${locale}/auth/verify-otp?${query.toString()}`
      );

    } catch {
      setError(t("register.errors.network"));
    } finally {
      setLoading(false);
    }
  }



  return (
    <AuthShell
      brand={t("brand")}
      eyebrow={t("register.eyebrow")}
      title={t("register.title")}
      description={t("register.description")}
      tagline={t("shell.tagline")}
      imageSrc="/images/visa-consultation.jpg"
    >
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            id="name"
            name="name"
            label={t("register.name")}
            placeholder={t("register.namePlaceholder")}
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />

          <AuthInput
            id="email"
            name="email"
            type="email"
            label={t("register.email")}
            placeholder={t("signin.emailPlaceholder")}
            autoComplete="email"
            inputMode="email"
            required
            maxLength={254}
          />

          <PasswordInput
            id="password"
            name="password"
            label={t("register.password")}
            placeholder={t("register.passwordPlaceholder")}
            autoComplete="new-password"
            showPasswordLabel={t("signin.showPassword")}
            hidePasswordLabel={t("signin.hidePassword")}
            required
            minLength={8}
            maxLength={72}
          />

          <p className="text-xs leading-5 text-foreground/60">
            {t("register.otpNotice")}
          </p>

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
            className="w-full rounded-xl bg-button-primary px-4 py-3.5 text-sm font-semibold text-button-primary-foreground shadow-sm transition-colors hover:bg-button-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? t("register.submitting")
              : t("register.submit")}
          </button>
        </form>

        {/* Email / Google separator */}
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-border" />
          <span className="mx-4 shrink-0 text-xs text-foreground/60">
            Or register with
          </span>
          <div className="flex-grow border-t border-border" />
        </div>

        {/* Reuse the Google OAuth button from the sign-in page */}
        <GoogleSignInButton
          label="Continue with Google"
          loadingLabel="Connecting to Google..."
          errorMessage={t("register.errors.generic")}
          onError={setError}
        />

        <p className="text-center text-sm text-foreground/70">
          {t("register.hasAccount")}{" "}
          <Link
            href={{
              pathname: "/auth/signin",
              query: { returnTo },
            }}
            className="font-semibold text-link-accent hover:underline"
          >
            {t("register.signin")}
          </Link>
        </p>

        <p className="text-center text-xs leading-5 text-foreground/60">
          {t("common.securityNote")}
        </p>
      </div>
    </AuthShell>
  );
}

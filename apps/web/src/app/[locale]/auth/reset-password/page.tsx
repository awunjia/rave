"use client";

import { useState, useEffect, Suspense, type FormEvent } from "react";
import { Link } from "@/i18n/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

import { AuthShell } from "@/components/auth/auth-shell";
import { PasswordInput } from "@/components/auth/password-input";

function ResetPasswordForm() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token") ?? "";

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const activeToken = localStorage.getItem("accessToken");
    if (activeToken) {
      router.replace(`/${locale}/portal`);
    } else {
      setIsCheckingAuth(false);
    }
  }, [locale, router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    setError("");
    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (!token) {
      setError(t("resetPassword.errors.invalidLink"));
      return;
    }

    if (password !== confirmPassword) {
      setError(t("resetPassword.errors.passwordMismatch"));
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
    if (!apiUrl) {
      setError(t("resetPassword.errors.network"));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ token, password, locale }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          setError(t("resetPassword.errors.rateLimited"));
        } else if (response.status === 400 || response.status === 401) {
          setError(t("resetPassword.errors.invalidLink"));
        } else {
          setError(t("resetPassword.errors.generic"));
        }
        return;
      }

      setSuccess(true);
      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname
      );
    } catch {
      setError(t("resetPassword.errors.network"));
    } finally {
      setLoading(false);
    }
  }

  if (isCheckingAuth) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        <Loader2 className="animate-spin text-amber-500" size={32} />
      </div>
    );
  }

  return (
    <AuthShell
      brand={t("brand")}
      subbrand={t("slogan")}
      eyebrow={t("resetPassword.eyebrow")}
      title={t("resetPassword.title")}
      description={t("resetPassword.description")}
      tagline={t("shell.tagline")}
      imageSrc="/images/visa-consultation.jpg"
    >
      {success ? (
        <div role="status" className="space-y-5 rounded-xl border border-border bg-card p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-heading-accent">
            <span aria-hidden="true" className="text-xl">✓</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {t("resetPassword.successTitle")}
          </h3>
          <p className="text-sm leading-6 text-foreground/70">
            {t("resetPassword.success")}
          </p>
          <Link
            href="/auth/signin"
            className="inline-flex w-full items-center justify-center rounded-xl bg-button-primary px-4 py-3 font-semibold text-button-primary-foreground transition hover:bg-button-primary-hover"
          >
            {t("resetPassword.backToSignin")}
          </Link>
        </div>
      ) : !token ? (
        <div className="space-y-5">
          <p role="alert" className="rounded-xl border border-border bg-muted p-4 text-sm leading-6 text-foreground">
            {t("resetPassword.errors.invalidLink")}
          </p>
          <Link
            href="/auth/forgot-password"
            className="inline-flex w-full items-center justify-center rounded-xl bg-button-primary px-4 py-3 font-semibold text-button-primary-foreground transition hover:bg-button-primary-hover"
          >
            {t("resetPassword.requestNewLink")}
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <PasswordInput
            id="password"
            name="password"
            label={t("resetPassword.password")}
            placeholder={t("resetPassword.passwordPlaceholder")}
            autoComplete="new-password"
            showPasswordLabel={t("signin.showPassword")}
            hidePasswordLabel={t("signin.hidePassword")}
            required
            minLength={8}
            maxLength={128}
          />
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label={t("resetPassword.confirmPassword")}
            placeholder={t("resetPassword.confirmPasswordPlaceholder")}
            autoComplete="new-password"
            showPasswordLabel={t("signin.showPassword")}
            hidePasswordLabel={t("signin.hidePassword")}
            required
            minLength={8}
            maxLength={128}
          />
          {error && (
            <p role="alert" aria-live="polite" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-button-primary px-4 py-3.5 text-sm font-semibold text-button-primary-foreground shadow-sm transition-colors hover:bg-button-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
          >
            {loading ? t("resetPassword.submitting") : t("resetPassword.submit")}
          </button>
          <p className="text-center">
            <Link href="/auth/signin" className="text-sm font-semibold text-link-accent hover:underline">
              {t("resetPassword.backToSignin")}
            </Link>
          </p>
        </form>
      )}
    </AuthShell>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen w-full items-center justify-center bg-slate-950">
        <Loader2 className="animate-spin text-amber-500" size={32} />
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}
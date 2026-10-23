
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { AuthShell } from "@/components/auth/auth-shell";
import { AuthInput } from "@/components/auth/auth-input";

export default function ForgotPasswordPage() {
  const t = useTranslations("auth");
  const locale = useLocale();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const email = String(formData.get("email") ?? "").trim();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");

    setError("");
    setSubmitted(false);

    if (!apiUrl) {
      setError(t("forgotPassword.errors.network"));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${apiUrl}/auth/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.status === 429) {
        setError(t("forgotPassword.errors.rateLimited"));
        return;
      }

      if (!response.ok) {
        setError(t("forgotPassword.errors.generic"));
        return;
      }

      setSubmitted(true);
      formElement.reset();
    } catch {
      setError(t("forgotPassword.errors.network"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      brand={t("brand")}
      eyebrow={t("forgotPassword.eyebrow")}
      title={t("forgotPassword.title")}
      description={t("forgotPassword.description")}
      tagline={t("shell.tagline")}
      imageSrc="/images/visa-consultation.jpg"
    >
      {submitted ? (
        <div
          role="status"
          className="space-y-5 rounded-xl border border-border bg-card p-5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-heading-accent">
            <span aria-hidden="true" className="text-xl">✓</span>
          </div>

          <h3 className="text-lg font-semibold text-foreground">
            {t("forgotPassword.successTitle")}
          </h3>

          <p className="text-sm leading-6 text-foreground/70">
            {t("forgotPassword.success")}
          </p>

          <Link
            href={`/${locale}/auth/se-connecter`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-button-primary px-4 py-3 font-semibold text-button-primary-foreground transition hover:bg-button-primary-hover"
          >
            {t("forgotPassword.backToSignin")}
          </Link>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full py-2 text-sm font-medium text-link-accent hover:underline"
          >
            {t("forgotPassword.tryAnotherEmail")}
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-5">
            <AuthInput
              id="email"
              name="email"
              type="email"
              label={t("forgotPassword.email")}
              placeholder={t("signin.emailPlaceholder")}
              autoComplete="email"
              inputMode="email"
              required
              maxLength={254}
            />

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
                ? t("forgotPassword.submitting")
                : t("forgotPassword.submit")}
            </button>
          </form>

          <p className="mt-7 text-center">
            <Link
              href={`/${locale}/auth/se-connecter`}
              className="text-sm font-semibold text-link-accent hover:underline"
            >
              {t("forgotPassword.backToSignin")}
            </Link>
          </p>

          <p className="mt-6 text-center text-xs leading-5 text-foreground/60">
            {t("common.securityNote")}
          </p>
        </>
      )}
    </AuthShell>
  );
}

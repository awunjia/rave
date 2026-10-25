"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

import { AuthShell } from "@/components/auth/auth-shell";
import { AuthInput } from "@/components/auth/auth-input";

export default function ForgotPasswordPage() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Countdown state (in seconds)
  const [cooldown, setCooldown] = useState(0);

  // Check auth and initialize cooldown from sessionStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.replace(`/${locale}/portal`);
      return;
    }

    // Check if there is an active cooldown stored in session
    const storedCooldownEnd = sessionStorage.getItem("forgotPasswordCooldownEnd");
    if (storedCooldownEnd) {
      const remainingTime = Math.ceil((Number(storedCooldownEnd) - Date.now()) / 1000);
      if (remainingTime > 0) {
        setCooldown(remainingTime);
      } else {
        sessionStorage.removeItem("forgotPasswordCooldownEnd");
      }
    }

    setIsCheckingAuth(false);
  }, [locale, router]);

  // Handle countdown interval tick and persist state
  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          sessionStorage.removeItem("forgotPasswordCooldownEnd");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  // Helper to start the 60s cooldown and save expiration timestamp
  const triggerCooldown = (seconds = 60) => {
    const endTime = Date.now() + seconds * 1000;
    sessionStorage.setItem("forgotPasswordCooldownEnd", endTime.toString());
    setCooldown(seconds);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading || cooldown > 0) return;

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const email = String(formData.get("email") ?? "").trim();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");

    setError("");

    if (!apiUrl) {
      setError(t("forgotPassword.errors.network"));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, locale }),
      });

      if (response.status === 429) {
        triggerCooldown(60);
        setError(t("forgotPassword.errors.rateLimited") || "Please wait before requesting another link.");
        setLoading(false);
        return;
      }

      if (!response.ok) {
        setError(t("forgotPassword.errors.generic"));
        setLoading(false);
        return;
      }

      setSubmitted(true);
      triggerCooldown(60); // Start 60s cooldown on successful submission
      formElement.reset();
    } catch {
      setError(t("forgotPassword.errors.network"));
    } finally {
      setLoading(false);
    }
  }

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
            <span aria-hidden="true" className="text-xl">
              ✓
            </span>
          </div>

          <h3 className="text-lg font-semibold text-foreground">
            {t("forgotPassword.successTitle")}
          </h3>

          <p className="text-sm leading-6 text-foreground/70">
            {t("forgotPassword.success")}
          </p>

          <Link
            href="/auth/signin"
            className="inline-flex w-full items-center justify-center rounded-xl bg-button-primary px-4 py-3 font-semibold text-button-primary-foreground transition hover:bg-button-primary-hover"
          >
            {t("forgotPassword.backToSignin")}
          </Link>

          <button
            type="button"
            disabled={cooldown > 0}
            onClick={() => {
              if (cooldown === 0) setSubmitted(false);
            }}
            className="w-full py-2 text-sm font-medium text-link-accent hover:underline disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {cooldown > 0
              ? `Resend available in ${cooldown}s`
              : t("forgotPassword.tryAnotherEmail")}
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
              disabled={loading || cooldown > 0}
              className="w-full rounded-xl bg-button-primary px-4 py-3.5 text-sm font-semibold text-button-primary-foreground shadow-sm transition-colors hover:bg-button-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
              {loading
                ? t("forgotPassword.submitting")
                : cooldown > 0
                  ? `Wait ${cooldown}s`
                  : t("forgotPassword.submit")}
            </button>
          </form>

          <p className="mt-7 text-center">
            <Link
              href="/auth/signin"
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
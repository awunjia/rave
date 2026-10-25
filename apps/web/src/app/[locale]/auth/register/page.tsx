"use client";

import { useState, useEffect, Suspense, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import { Link } from "@/i18n/navigation";

import { AuthShell } from "@/components/auth/auth-shell";
import { AuthInput } from "@/components/auth/auth-input";
import { PasswordInput } from "@/components/auth/password-input";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";

function RegisterForm() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const rawReturnTo = searchParams.get("returnTo");
  const returnTo =
    rawReturnTo &&
      rawReturnTo.startsWith("/") &&
      !rawReturnTo.startsWith("//") &&
      !rawReturnTo.includes("\\")
      ? rawReturnTo
      : "/booking/schedule";

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
        setLoading(false);
        return;
      }

      // If registration requires OTP verification step
      if (result?.verificationRequired === true) {
        const query = new URLSearchParams({
          email: String(result.email ?? email).trim().toLowerCase(),
          returnTo,
        });

        window.location.assign(
          `/${locale}/auth/verify-otp?${query.toString()}`
        );
        return;
      }

      // If direct login access token is returned
      if (result?.accessToken) {
        localStorage.setItem("accessToken", result.accessToken);

        await fetch("/api/auth/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
          body: JSON.stringify({ accessToken: result.accessToken }),
        });

        window.location.assign(`/${locale}/portal`);
        return;
      }

      setError(t("register.errors.generic"));
    } catch {
      setError(t("register.errors.network"));
    } finally {
      setLoading(false);
    }
  }

  // Hydration guard: Show loading spinner instead of flickering the form
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
            className="w-full rounded-xl bg-button-primary px-4 py-3.5 text-sm font-semibold text-button-primary-foreground shadow-sm transition-colors hover:bg-button-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
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

        {/* <p className="text-center text-xs leading-5 text-foreground/60">
          {t("common.securityNote")}
        </p> */}
      </div>
    </AuthShell>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center bg-slate-950">
          <Loader2 className="animate-spin text-amber-500" size={32} />
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
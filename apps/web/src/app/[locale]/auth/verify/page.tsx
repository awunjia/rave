"use client";

import {
  Suspense,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import { ShieldCheck } from "lucide-react";

import { AuthShell } from "@/components/auth/auth-shell";


function OtpCells({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  function handleChange(index: number, rawValue: string) {
    const digits = rawValue.replace(/\D/g, "");

    if (!digits) {
      const next = value.split("");
      next[index] = "";
      onChange(next.join("").slice(0, 6));
      return;
    }

    if (digits.length > 1) {
      const pasted = digits.slice(0, 6);
      onChange(pasted);
      inputRefs.current[Math.min(pasted.length, 5)]?.focus();
      return;
    }

    const next = value.split("");
    next[index] = digits[0];
    onChange(next.join("").slice(0, 6));

    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === "Backspace") {
      event.preventDefault();

      const next = value.split("");

      if (next[index]) {
        next[index] = "";
        onChange(next.join(""));
      } else if (index > 0) {
        next[index - 1] = "";
        onChange(next.join(""));
        inputRefs.current[index - 1]?.focus();
      }
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  return (
    <div
      className="flex justify-center gap-2 sm:gap-3"
      role="group"
      aria-label="Six-digit verification code"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          aria-label={`Verification digit ${index + 1}`}
          value={value[index] ?? ""}
          disabled={disabled}
          maxLength={6}
          required={index === 0}
          onChange={(event) =>
            handleChange(index, event.target.value)
          }
          onKeyDown={(event) => handleKeyDown(index, event)}
          onFocus={(event) => event.currentTarget.select()}
          className="h-12 w-10 rounded-xl border border-border bg-background text-center text-xl font-semibold text-foreground outline-none transition focus:border-accent focus-visible:ring-4 focus-visible:ring-accent/25 disabled:opacity-50 sm:h-14 sm:w-12 sm:text-2xl"
        />
      ))}
    </div>
  );
}

function VerifyOtpForm() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const searchParams = useSearchParams();

  const email = (searchParams.get("email") ?? "")
    .trim()
    .toLowerCase();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const rawReturnTo = searchParams.get("returnTo");

  const returnTo =
    rawReturnTo &&
      rawReturnTo.startsWith("/") &&
      !rawReturnTo.startsWith("//") &&
      !rawReturnTo.includes("\\")
      ? rawReturnTo
      : "/portal";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setError("");
    setSuccess("");

    if (!email) {
      setError("Your email address is missing. Please register again.");
      return;
    }

    if (!/^\d{6}$/.test(code)) {
      setError("Enter the six-digit verification code sent to your email.");
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");

    if (!apiUrl) {
      setError("Unable to connect to the server. Please try again.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/auth/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, code }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const message = Array.isArray(result?.message)
          ? result.message.join(" ")
          : typeof result?.message === "string"
            ? result.message
            : "Verification failed. Please try again.";

        setError(message);
        setLoading(false);
        return;
      }

      if (
        typeof result?.accessToken !== "string" ||
        !result.accessToken
      ) {
        setError("Verification succeeded, but authentication could not be established.");
        setLoading(false);
        return;
      }

      const sessionResponse = await fetch("/api/auth/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({
          accessToken: result.accessToken,
        }),
      });

      if (!sessionResponse.ok) {
        setError("Your email is verified, but we could not sign you in. Please try again.");
        setLoading(false);
        return;
      }

      setSuccess("Email verified successfully. Redirecting to your portal...");

      window.setTimeout(() => {
        window.location.assign(
          `/${locale}${returnTo === "/" ? "" : returnTo}`
        );
      }, 1000);

    } catch {
      setError("Unable to connect to the server. Please try again.");
      setLoading(false);
    }
  }

  return (
    <AuthShell
      brand={t("brand")}
      eyebrow="EMAIL VERIFICATION"
      title="Verify your email"
      description="Enter the six-digit code we sent to your email address."
      tagline={t("shell.tagline")}
      imageSrc="/images/visa-consultation.jpg"
    >
      <div className="space-y-6">
        {email ? (
          <p className="text-sm text-foreground/70">
            Verification code sent to{" "}
            <span className="font-semibold text-foreground">
              {email}
            </span>
          </p>
        ) : (
          <p role="alert" className="text-sm text-red-600">
            No email address was provided. Please return to registration.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-foreground">
                Verification code
              </label>

              <OtpCells
                value={code}
                onChange={setCode}
                disabled={loading}
              />

              <p className="text-center text-xs leading-5 text-foreground/60">
                Enter the six-digit code sent to your email. It expires
                after 10 minutes.
              </p>
            </div>
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

          {success && (
            <p
              role="status"
              aria-live="polite"
              className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-300"
            >
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !email || code.length !== 6}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-button-primary px-4 py-3.5 text-sm font-semibold text-button-primary-foreground shadow-sm transition-colors hover:bg-button-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
                Verifying...
              </>
            ) : (
              <>
                <ShieldCheck size={18} aria-hidden="true" />
                Verify email
              </>
            )}
          </button>
        </form>

        <p className="text-center text-sm text-foreground/70">
          Wrong email address?{" "}
          <Link
            href={`/${locale}/auth/register`}
            className="font-semibold text-link-accent hover:underline"
          >
            Register again
          </Link>
        </p>

        <p className="text-center text-xs leading-5 text-foreground/60">
          {t("common.securityNote")}
        </p>
      </div>
    </AuthShell>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-sm text-foreground/60">
            Loading verification page...
          </p>
        </div>
      }
    >
      <VerifyOtpForm />
    </Suspense>
  );
}
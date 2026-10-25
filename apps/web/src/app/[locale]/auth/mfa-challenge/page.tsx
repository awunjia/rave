"use client";

import { useState, useEffect, useRef, type FormEvent, type ClipboardEvent, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { AuthShell } from "@/components/auth/auth-shell";
import { Mail, ArrowRight, Loader2, RefreshCw } from "lucide-react";

export default function MfaChallengePage() {
    const t = useTranslations("auth");
    const locale = useLocale();
    const router = useRouter();

    const [challengeData, setChallengeData] = useState<{ challengeId: string; email: string; cooldownExpiresAt?: number } | null>(null);
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const [error, setError] = useState("");
    const [infoMessage, setInfoMessage] = useState("");

    useEffect(() => {
        const stored = sessionStorage.getItem("mfaChallenge");
        if (!stored) {
            router.replace(`/${locale}/auth/signin`);
            return;
        }
        try {
            const parsed = JSON.parse(stored);
            const now = Date.now();

            // If cooldown expiration isn't set yet, initialize it to 60 seconds from now
            if (!parsed.cooldownExpiresAt) {
                parsed.cooldownExpiresAt = now + 60_000;
                sessionStorage.setItem("mfaChallenge", JSON.stringify(parsed));
            }

            // Calculate remaining seconds based on the persistent timestamp
            const remaining = Math.ceil((parsed.cooldownExpiresAt - now) / 1000);
            setCooldown(remaining > 0 ? remaining : 0);
            setChallengeData(parsed);
        } catch {
            router.replace(`/${locale}/auth/signin`);
        }
    }, [locale, router]);

    // Countdown interval effect
    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setInterval(() => {
            setCooldown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [cooldown]);

    const handleInputChange = (index: number, value: string) => {
        const digit = value.replace(/\D/g, "").slice(-1);
        const newOtp = [...otp];
        newOtp[index] = digit;
        setOtp(newOtp);

        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        const newOtp = ["", "", "", "", "", ""];
        for (let i = 0; i < pastedData.length; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);
        const nextIndex = Math.min(pastedData.length, 5);
        inputRefs.current[nextIndex]?.focus();
    };

    const handleVerify = async (e: FormEvent) => {
        e.preventDefault();
        const code = otp.join("");
        if (code.length !== 6 || !challengeData) return;

        setLoading(true);
        setError("");
        setInfoMessage("");

        try {
            const res = await fetch("/api/auth/mfa/challenge/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    challengeId: challengeData.challengeId,
                    code,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Invalid or expired verification code.");

            localStorage.setItem("accessToken", data.accessToken);

            await fetch("/api/auth/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ accessToken: data.accessToken }),
            });

            sessionStorage.removeItem("mfaChallenge");
            window.location.assign(`/${locale}/portal`);
        } catch (err: any) {
            setError(err.message || "Verification failed.");
            setLoading(false);
        }
    };

    const handleResendCode = async () => {
        if (!challengeData || cooldown > 0) return;
        setResending(true);
        setError("");
        setInfoMessage("");

        try {
            const res = await fetch("/api/auth/mfa/challenge/resend", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ challengeId: challengeData.challengeId }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to resend code.");

            const now = Date.now();
            const newCooldownExpiresAt = now + 60_000;

            // Update session storage with new challenge ID and new cooldown expiry timestamp
            const updated = {
                ...challengeData,
                challengeId: data.challengeId || challengeData.challengeId,
                cooldownExpiresAt: newCooldownExpiresAt,
            };

            setChallengeData(updated);
            sessionStorage.setItem("mfaChallenge", JSON.stringify(updated));

            setInfoMessage("A new 6-digit passcode has been sent to your email.");
            setCooldown(60);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setResending(false);
        }
    };

    if (!challengeData) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-950">
                <Loader2 className="animate-spin text-amber-500" size={32} />
            </div>
        );
    }

    return (
        <AuthShell
            brand={t("brand")}
            subbrand={t("slogan")}
            eyebrow="Two-Factor Security"
            title="Verify Your Email Code"
            description={`Enter the 6-digit passcode sent to ${challengeData.email}`}
            tagline={t("shell.tagline")}
            imageSrc="/images/visa-consultation.jpg"
        >
            <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
                    <Mail size={20} className="text-amber-500 shrink-0" />
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        We sent a security passkey to <strong>{challengeData.email}</strong>. Please enter it below to access your consultation portal.
                    </p>
                </div>

                {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold">
                        {error}
                    </div>
                )}

                {infoMessage && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                        {infoMessage}
                    </div>
                )}

                <form onSubmit={handleVerify} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                            6-Digit Security Passcode
                        </label>
                        <div className="flex gap-2 justify-between mt-4">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => { inputRefs.current[index] = el; }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className="h-14 w-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-center font-mono text-xl font-black text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                                    required
                                    autoFocus={index === 0}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || otp.join("").length !== 6}
                        className="w-full h-12 rounded-2xl bg-amber-500 hover:bg-amber-600 font-bold text-slate-950 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? (
                            <Loader2 size={16} className="animate-spin" />
                        ) : (
                            <>
                                Verify & Proceed <ArrowRight size={16} />
                            </>
                        )}
                    </button>
                </form>

                <div className="flex items-center justify-between pt-2">
                    <button
                        type="button"
                        onClick={handleResendCode}
                        disabled={resending || cooldown > 0}
                        className="text-xs font-bold text-amber-500 hover:underline flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {resending ? (
                            <Loader2 size={12} className="animate-spin" />
                        ) : (
                            <RefreshCw size={12} />
                        )}
                        {cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend Email Code"}
                    </button>

                    <button
                        type="button"
                        onClick={() => router.push(`/${locale}/auth/signin`)}
                        className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </AuthShell>
    );
}
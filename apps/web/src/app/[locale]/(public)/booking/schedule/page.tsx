
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Check,
    CheckCircle2,
    Clock,
    CreditCard,
    MapPin,
    Video,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

type Format = "online" | "in-person";

const CONFIG = {
    online: {
        label: "Online consultation",
        price: 75,
        maxHours: 4,
    },
    "in-person": {
        label: "In-person consultation",
        price: 90,
        maxHours: 2,
    },
};

const LOCATIONS = [
    { id: "toronto", label: "Toronto consultation office" },
    { id: "mississauga", label: "Mississauga consultation office" },
];

const TIMES = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

const STEPS = [
    {
        title: "Consultation",
        description: "Choose how you would like to meet.",
    },
    {
        title: "Date & time",
        description: "Select your preferred appointment date and time.",
    },
    {
        title: "Duration",
        description: "Choose the duration and add any notes.",
    },
    {
        title: "Review",
        description: "Review your consultation details and total.",
    },
    {
        title: "Payment",
        description: "Choose your preferred payment method.",
    },
    {
        title: "Confirmation",
        description: "Review your confirmation details.",
    },
];

type ReviewRowProps = {
    label: string;
    value: string;
};

function ReviewRow({ label, value }: ReviewRowProps) {
    return (
        <div className="flex items-start justify-between gap-4 border-b border-border py-3 last:border-b-0">
            <span className="shrink-0 text-sm text-foreground/55">
                {label}
            </span>
            <span className="break-words text-right text-sm font-medium">
                {value}
            </span>
        </div>
    );
}

export default function ConsultationSchedulePage() {
    const router = useRouter();
    const { user, loading } = useAuth();

    const [currentStep, setCurrentStep] = useState(0);
    const [format, setFormat] = useState<Format>("online");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [hours, setHours] = useState(1);
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [bookingError, setBookingError] = useState("");

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/auth/signin");
        }
    }, [loading, user, router]);

    const config = CONFIG[format];
    const total = config.price * hours;

    const money = (amount: number) =>
        new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
        }).format(amount);

    const selectedLocation =
        LOCATIONS.find((item) => item.id === location)?.label ??
        (format === "online" ? "Google Meet / Zoom" : "Not selected");

    function changeFormat(value: Format) {
        setFormat(value);
        setDate("");
        setTime("");
        setHours(1);
        setLocation("");
        setBookingError("");
    }

    const canContinue = (() => {
        switch (currentStep) {
            case 0:
                return format === "online" || Boolean(location);
            case 1:
                return Boolean(date && time);
            case 2:
                return hours >= 1 && hours <= config.maxHours;
            case 3:
                return Boolean(date && time);
            case 4:
                return Boolean(paymentMethod);
            default:
                return true;
        }
    })();

    if (loading || !user) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
                <p className="text-sm text-foreground/65">
                    Checking your account...
                </p>
            </main>
        );
    }


    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
                <button
                    type="button"
                    onClick={() => router.push("/booking")}
                    className="mb-6 flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground"
                >
                    <ArrowLeft size={17} />
                    Back to consultations
                </button>

                <div className="mb-8">
                    <p className="text-sm font-medium text-foreground/55">
                        RAVE consultations
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                        Schedule a consultation
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/65 sm:text-base">
                        Choose your consultation type, select a suitable time, and
                        review your booking details before proceeding to payment.
                    </p>
                </div>

                {/* Horizontal six-step progress indicator */}
                <div className="mb-8 overflow-x-auto pb-3">
                    <div className="flex min-w-[640px] items-start">
                        {STEPS.map((step, index) => (
                            <div
                                key={step.title}
                                className="flex flex-1 items-start"
                            >
                                <button
                                    type="button"
                                    disabled={index > currentStep}
                                    onClick={() => {
                                        if (index < currentStep) {
                                            setCurrentStep(index);
                                            setBookingError("");
                                        }
                                    }}
                                    className="flex min-w-0 flex-col items-center gap-2 disabled:cursor-default"
                                    aria-current={
                                        currentStep === index ? "step" : undefined
                                    }
                                >
                                    <span
                                        className={`flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${currentStep === index
                                            ? "border-accent bg-accent text-white"
                                            : currentStep > index
                                                ? "border-accent bg-accent/10 text-accent"
                                                : "border-border text-foreground/45"
                                            }`}
                                    >
                                        {currentStep > index ? (
                                            <Check size={17} />
                                        ) : (
                                            index + 1
                                        )}
                                    </span>

                                    <span
                                        className={`whitespace-nowrap text-xs ${currentStep === index
                                            ? "font-semibold text-foreground"
                                            : "text-foreground/55"
                                            }`}
                                    >
                                        {step.title}
                                    </span>
                                </button>

                                {index < STEPS.length - 1 && (
                                    <div
                                        className={`mx-2 mt-[18px] h-px flex-1 ${currentStep > index
                                            ? "bg-accent"
                                            : "bg-border"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main responsive layout */}
                <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-8">
                    {/* Left: active step and navigation */}
                    <section className="min-w-0 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-7">
                        <div className="mb-7">
                            <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                                Step {currentStep + 1} of {STEPS.length}
                            </p>
                            <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
                                {STEPS[currentStep].title}
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-foreground/60">
                                {STEPS[currentStep].description}
                            </p>
                        </div>

                        {/* STEP 1: Consultation type */}
                        {currentStep === 0 && (
                            <div className="space-y-5">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {(["online", "in-person"] as Format[]).map(
                                        (value) => {
                                            const selected = format === value;
                                            const online = value === "online";

                                            return (
                                                <button
                                                    key={value}
                                                    type="button"
                                                    onClick={() => changeFormat(value)}
                                                    className={`rounded-xl border p-5 text-left transition ${selected
                                                        ? "border-accent bg-accent/10 ring-1 ring-accent"
                                                        : "border-border hover:border-accent/50"
                                                        }`}
                                                    aria-pressed={selected}
                                                >
                                                    {online ? (
                                                        <Video
                                                            size={25}
                                                            className="mb-4 text-icon-accent"
                                                        />
                                                    ) : (
                                                        <MapPin
                                                            size={25}
                                                            className="mb-4 text-icon-accent"
                                                        />
                                                    )}

                                                    <div className="flex items-center justify-between gap-2">
                                                        <h3 className="font-semibold">
                                                            {online ? "Online" : "In person"}
                                                        </h3>

                                                        {selected && (
                                                            <CheckCircle2
                                                                size={19}
                                                                className="text-icon-accent"
                                                            />
                                                        )}
                                                    </div>

                                                    <p className="mt-2 text-sm leading-6 text-foreground/60">
                                                        {online
                                                            ? "Meet remotely through Google Meet or Zoom."
                                                            : "Meet with our team at a consultation branch."}
                                                    </p>

                                                    <p className="mt-4 font-semibold">
                                                        {money(CONFIG[value].price)}
                                                        <span className="text-sm font-normal text-foreground/55">
                                                            {" "}/ hour
                                                        </span>
                                                    </p>
                                                </button>
                                            );
                                        }
                                    )}
                                </div>

                                {format === "in-person" && (
                                    <div>
                                        <label
                                            htmlFor="consultation-location"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Select branch
                                        </label>

                                        <select
                                            id="consultation-location"
                                            value={location}
                                            onChange={(event) =>
                                                setLocation(event.target.value)
                                            }
                                            className="w-full rounded-xl border border-border bg-background p-3"
                                        >
                                            <option value="">Choose a branch</option>
                                            {LOCATIONS.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* STEP 2: Date and time */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="consultation-date"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        <CalendarDays
                                            size={16}
                                            className="mr-2 inline"
                                        />
                                        Preferred date
                                    </label>

                                    <input
                                        id="consultation-date"
                                        type="date"
                                        min={new Date().toLocaleDateString("en-CA")}
                                        value={date}
                                        onChange={(event) => {
                                            setDate(event.target.value);
                                            setTime("");
                                        }}
                                        className="w-full rounded-xl border border-border bg-background p-3"
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 text-sm font-medium">
                                        <Clock size={16} className="mr-2 inline" />
                                        Available time
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                        {TIMES.map((item) => (
                                            <button
                                                key={item}
                                                type="button"
                                                disabled={!date}
                                                onClick={() => setTime(item)}
                                                className={`rounded-xl border px-3 py-3 text-sm transition disabled:cursor-not-allowed disabled:opacity-40 ${time === item
                                                    ? "border-accent bg-accent/10 font-semibold"
                                                    : "border-border hover:border-accent/50"
                                                    }`}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>

                                    <p className="mt-3 text-xs leading-5 text-foreground/50">
                                        These are demonstration time slots. Your backend
                                        must verify live availability before confirming
                                        an appointment.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Duration and notes */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div>
                                    <p className="mb-3 text-sm font-medium">
                                        Consultation duration
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {Array.from(
                                            { length: config.maxHours },
                                            (_, index) => index + 1
                                        ).map((hour) => (
                                            <button
                                                key={hour}
                                                type="button"
                                                onClick={() => setHours(hour)}
                                                className={`rounded-xl border px-3 py-4 text-sm transition ${hours === hour
                                                    ? "border-accent bg-accent/10 font-semibold"
                                                    : "border-border hover:border-accent/50"
                                                    }`}
                                                aria-pressed={hours === hour}
                                            >
                                                {hour} {hour === 1 ? "hour" : "hours"}
                                            </button>
                                        ))}
                                    </div>

                                    <p className="mt-3 text-xs text-foreground/55">
                                        Maximum {config.maxHours} hours for this
                                        consultation type.
                                    </p>
                                </div>

                                <div>
                                    <label
                                        htmlFor="consultation-notes"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        What would you like to discuss?
                                    </label>

                                    <textarea
                                        id="consultation-notes"
                                        rows={5}
                                        maxLength={1000}
                                        value={notes}
                                        onChange={(event) => setNotes(event.target.value)}
                                        placeholder="Tell us about your goals or questions (optional)."
                                        className="w-full resize-y rounded-xl border border-border bg-background p-3"
                                    />

                                    <p className="mt-2 text-right text-xs text-foreground/50">
                                        {notes.length}/1000
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Right sidebar: user details and booking summary */}
                        <aside className="h-fit space-y-6 rounded-2xl border border-border bg-card p-5 sm:p-6 lg:sticky lg:top-24">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Confirmation details
                                </h2>
                                <p className="mt-1 text-sm text-foreground/60">
                                    Your booking confirmation will be sent to:
                                </p>

                                <div className="mt-4 rounded-xl bg-background p-4">
                                    <p className="font-medium">
                                        {user.name}
                                    </p>
                                    <p className="mt-1 break-all text-sm text-foreground/65">
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-border pt-5">
                                <h3 className="font-semibold">Booking summary</h3>

                                <p className="mt-4 text-sm text-foreground/60">
                                    {config.label}
                                </p>

                                <p className="mt-2 text-3xl font-bold">
                                    {money(total)}
                                </p>

                                <p className="mt-1 text-sm text-foreground/55">
                                    {hours} {hours === 1 ? "hour" : "hours"} ×{" "}
                                    {money(config.price)}/hour
                                </p>

                                <div className="my-5 border-t border-border" />

                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="text-foreground/60">Date</span>
                                        <span className="text-right">
                                            {date || "Not selected"}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-3">
                                        <span className="text-foreground/60">Time</span>
                                        <span className="text-right">
                                            {time || "Not selected"}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-3">
                                        <span className="text-foreground/60">Duration</span>
                                        <span className="text-right">
                                            {hours} {hours === 1 ? "hour" : "hours"}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-3">
                                        <span className="text-foreground/60">Location</span>
                                        <span className="max-w-[60%] text-right">
                                            {format === "online"
                                                ? "Google Meet / Zoom"
                                                : LOCATIONS.find(
                                                    (item) => item.id === location
                                                )?.label || "Not selected"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-border p-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="shrink-0 text-icon-accent"
                                    />
                                    <p className="text-sm font-medium">
                                        Secure booking
                                    </p>
                                </div>

                                <p className="mt-2 text-xs leading-5 text-foreground/55">
                                    Your appointment is confirmed only after the
                                    backend validates your booking and payment.
                                </p>
                            </div>
                        </aside>
                    </section>
                </div>
            </div>
        </main >
    );
}
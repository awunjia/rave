import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

// Opt this layout out of instant validation to allow blocking on request-time cookies & params
export const instant = false;

interface AuthLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function AuthLayout({ children, params }: AuthLayoutProps) {
    const { locale } = await params;
    const cookieStore = await cookies();

    // Read HTTP session cookie
    const token =
        cookieStore.get("accessToken")?.value ||
        cookieStore.get("session")?.value ||
        cookieStore.get("session_token")?.value;

    // Direct server-side redirect before any HTML/UI renders
    if (token) {
        redirect(`/${locale}/portal`);
    }

    return <>{children}</>;
}
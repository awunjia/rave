import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getLocale } from "next-intl/server";

export async function POST(request: Request) {
    const locale = await getLocale();
    const cookieStore = await cookies();

    // 1. Retrieve current token before wiping cookies
    const sessionToken =
        cookieStore.get("accessToken")?.value ||
        cookieStore.get("session_token")?.value ||
        cookieStore.get("session")?.value ||
        cookieStore.get("token")?.value;

    // 2. Forward logout signal to NestJS Backend Microservice
    if (sessionToken && process.env.NESTJS_BACKEND_URL) {
        try {
            await fetch(`${process.env.NESTJS_BACKEND_URL}/api/v1/auth/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionToken}`
                },
                body: JSON.stringify({
                    userAgent: request.headers.get("user-agent"),
                    forwardedFor: request.headers.get("x-forwarded-for")
                })
            });
        } catch (error) {
            console.error("Failed to notify NestJS backend of user logout:", error);
        }
    }

    // 3. Clear all frontend auth session cookies (including 'accessToken')
    const authCookies = [
        "accessToken",
        "session",
        "session_token",
        "token",
        "jwt",
        "next-auth.session-token",
        "__Secure-next-auth.session-token",
        "refreshToken"
    ];

    authCookies.forEach((cookieName) => {
        cookieStore.delete(cookieName);
    });

    // 4. Perform clean redirect to sign-in page matching current locale
    const signInUrl = new URL(`/${locale}/auth/signin`, request.url);
    return NextResponse.redirect(signInUrl, { status: 303 });
}

// Support direct GET navigation to /api/auth/signout
export async function GET(request: Request) {
    return POST(request);
}
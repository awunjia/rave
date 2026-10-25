import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token =
        request.cookies.get("accessToken")?.value ||
        request.cookies.get("session")?.value ||
        request.cookies.get("session_token")?.value;

    // Check if the user is visiting any authentication page
    const isAuthPage =
        pathname.includes("/auth/signin") ||
        pathname.includes("/auth/register") ||
        pathname.includes("/auth/forgot-password");

    if (isAuthPage && token) {
        const localeMatch = pathname.match(/^\/(en|fr)\//);
        const locale = localeMatch ? localeMatch[1] : "en";

        return NextResponse.redirect(new URL(`/${locale}/portal`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
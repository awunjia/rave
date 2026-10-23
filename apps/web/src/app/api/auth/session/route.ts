
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

const isProduction = process.env.NODE_ENV === "production";

export async function GET() {
  try {
    const user = await getCurrentUser();

    return NextResponse.json(
      { user: user ?? null },
      {
        headers: {
          "Cache-Control": "private, no-store, max-age=0",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { user: null },
      {
        headers: {
          "Cache-Control": "private, no-store, max-age=0",
        },
      },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const accessToken = body?.accessToken;

    if (
      typeof accessToken !== "string" ||
      !accessToken.trim()
    ) {
      return NextResponse.json(
        { message: "Access token is required." },
        { status: 400 },
      );
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",
      maxAge: 900,
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: "Unable to establish the session." },
      { status: 400 },
    );
  }
}

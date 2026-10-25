import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { accessToken } = body;

    if (!accessToken) {
      return NextResponse.json({ message: "Token missing" }, { status: 400 });
    }

    const response = NextResponse.json({ success: true });

    // Ensure path is explicitly "/" so middleware and root pages can access it
    response.cookies.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 900, // 15 minutes
    });

    return response;
  } catch {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
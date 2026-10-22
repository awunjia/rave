
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

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

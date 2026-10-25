import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export interface DecodedAuthUser {
  id: string;
  email: string;
  name: string;
  status: string;
  role: "CLIENT" | "CONSULTANT" | "REVIEWER" | "ADMIN" | "SUPER_ADMIN";
  roles: string[];
}

export async function getCurrentUser(): Promise<DecodedAuthUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return null;
    }

    const secretKey = process.env.JWT_ACCESS_SECRET;
    if (!secretKey) {
      throw new Error("JWT_ACCESS_SECRET is not configured on the web application.");
    }

    const encodedSecret = new TextEncoder().encode(secretKey);

    // Verify JWT algorithm, audience, issuer, and signature matching NestJS configuration
    const { payload } = await jwtVerify(token, encodedSecret, {
      algorithms: ["HS256"],
      issuer: "rave-api",
      audience: "rave-web",
    });

    if (
      typeof payload.sub !== "string" ||
      !payload.sub ||
      typeof payload.email !== "string"
    ) {
      return null;
    }

    // 🔎 DEBUG LOGS (Placed BEFORE return so they actually print in your terminal)
    console.log("----------------------------------------");
    console.log("DECODED JWT PAYLOAD:", JSON.stringify(payload, null, 2));
    console.log("EXTRACTED ROLE CLAIM:", payload.role || (payload.user as any)?.role);
    console.log("----------------------------------------");

    // 1. Safely extract role from payload (supports root claim or nested user object)
    const rawRole = (payload.role || (payload.user as any)?.role || "CLIENT") as string;

    // 2. Normalize to uppercase to prevent case mismatches ("super_admin" -> "SUPER_ADMIN")
    const normalizedRole = rawRole.toUpperCase();

    // 3. Validate against allowed roles, fallback to CLIENT if unrecognized
    const validRoles: DecodedAuthUser["role"][] = ["CLIENT", "CONSULTANT", "REVIEWER", "ADMIN", "SUPER_ADMIN"];
    const primaryRole = validRoles.includes(normalizedRole as any)
      ? (normalizedRole as DecodedAuthUser["role"])
      : "CLIENT";

    const assignedRoles = Array.isArray(payload.roles)
      ? (payload.roles as string[]).map((r) => r.toUpperCase())
      : [primaryRole];

    return {
      id: payload.sub,
      email: payload.email,
      name: (payload.name as string) || (payload.email.split("@")[0] ?? "User"),
      status: (payload.status as string) || "ACTIVE",
      role: primaryRole,
      roles: assignedRoles,
    };

  } catch (error) {
    console.error("getCurrentUser verification failed:", error);
    return null;
  }
}
import { cookies } from "next/headers";

const API_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  'http://localhost:4000/api/v1';

export interface AuthResponse {
  accessToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  user: {
    id: string;
    name: string;
    email: string;
    status: string;
    roles: string[];
  };
}

async function request<T>(
  path: string,
  body: Record<string, string>,
): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const message = Array.isArray(result?.message)
      ? result.message.join(', ')
      : result?.message;

    throw new Error(message ?? 'Request failed. Please try again.');
  }

  return result as T;
}

export function register(input: {
  name: string;
  email: string;
  password: string;
}) {
  return request<AuthResponse>('/auth/register', input);
}

export function login(input: {
  email: string;
  password: string;
}) {
  return request<AuthResponse>('/auth/login', input);
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

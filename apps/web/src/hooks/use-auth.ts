
"use client";

import { useCallback, useEffect, useState } from "react";

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  status: string;
  roles: string[];
}

interface SessionResponse {
  user: CurrentUser | null;
}

export function useAuth() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/session", {
        method: "GET",
        cache: "no-store",
        credentials: "same-origin",
      });

      if (!response.ok) {
        setUser(null);
        return;
      }

      const data: SessionResponse = await response.json();
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { user, loading, refresh };
}


"use client";

import { useEffect, useState } from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Change theme"
        className="rounded-xl border p-2"
      >
        <Sun size={20} />
      </button>
    );
  }

  const Icon =
    theme === "dark"
      ? Moon
      : theme === "light"
        ? Sun
        : Laptop;

  const nextTheme =
    theme === "light"
      ? "dark"
      : theme === "dark"
        ? "system"
        : "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Current theme: ${theme}. Switch theme`}
      className="rounded-xl border bg-card p-3 text-foreground hover:bg-muted"
    >
      <Icon size={20} />
    </button>
  );
}

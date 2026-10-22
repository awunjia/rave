
import { getApiHealth } from "@/lib/api";

export async function ApiStatus() {
  try {
    const health = await getApiHealth();

    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="font-semibold">
          Rave API: {health.status}
        </p>

        <p className="mt-1 text-sm text-foreground/70">
          Connected to {health.service}
        </p>
      </div>
    );
  } catch {
    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="font-semibold">
          API connection unavailable
        </p>

        <p className="mt-1 text-sm text-foreground/70">
          Check that the server is running.
        </p>
      </div>
    );
  }
}

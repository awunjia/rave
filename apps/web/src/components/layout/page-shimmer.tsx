
export function PageShimmer() {
  return (
    <div
      className="min-h-screen animate-pulse bg-background"
      role="status"
      aria-label="Loading page"
    >
      <span className="sr-only">Loading page...</span>

      {/* Top contact bar */}
      <div className="bg-[#102B46]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-5">
            <div className="h-3 w-36 rounded bg-white/20" />
            <div className="h-3 w-32 rounded bg-white/20" />
          </div>
          <div className="h-3 w-44 rounded bg-white/20" />
        </div>
      </div>

      {/* Header and navigation */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8">
          <div className="h-11 w-36 rounded-md bg-muted" />

          <div className="hidden items-center gap-5 xl:flex">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="h-3 w-16 rounded bg-muted"
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden h-9 w-9 rounded-md bg-muted sm:block" />
            <div className="h-10 w-24 rounded-md bg-muted" />
          </div>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div className="space-y-6">
            <div className="h-3 w-48 rounded bg-muted" />

            <div className="space-y-3">
              <div className="h-10 w-full max-w-xl rounded bg-muted sm:h-12" />
              <div className="h-10 w-11/12 max-w-lg rounded bg-muted sm:h-12" />
              <div className="h-10 w-3/4 max-w-md rounded bg-muted sm:h-12" />
            </div>

            <div className="space-y-2 pt-2">
              <div className="h-4 w-full max-w-lg rounded bg-muted" />
              <div className="h-4 w-10/12 max-w-md rounded bg-muted" />
              <div className="h-4 w-7/12 max-w-sm rounded bg-muted" />
            </div>

            <div className="flex flex-wrap gap-4 pt-3">
              <div className="h-12 w-48 rounded-md bg-muted" />
              <div className="h-12 w-36 rounded-md bg-muted" />
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="aspect-[4/3] w-full rounded-2xl bg-muted" />
        </section>

        {/* Feature cards */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
            <div className="mx-auto h-4 w-32 rounded bg-muted" />
            <div className="mx-auto h-8 w-64 max-w-full rounded bg-muted" />
            <div className="mx-auto h-4 w-full max-w-md rounded bg-muted" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <article
                key={index}
                className="rounded-2xl border border-border p-6"
              >
                <div className="h-11 w-11 rounded-lg bg-muted" />
                <div className="mt-5 h-5 w-2/3 rounded bg-muted" />
                <div className="mt-4 h-3 w-full rounded bg-muted" />
                <div className="mt-2 h-3 w-5/6 rounded bg-muted" />
                <div className="mt-5 h-3 w-28 rounded bg-muted" />
              </article>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border p-8 sm:p-12">
            <div className="h-8 w-full max-w-md rounded bg-muted" />
            <div className="mt-5 h-4 w-full max-w-xl rounded bg-muted" />
            <div className="mt-3 h-4 w-3/4 max-w-lg rounded bg-muted" />
            <div className="mt-7 h-12 w-40 rounded-md bg-muted" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-4">
              <div className="h-5 w-32 rounded bg-muted" />
              <div className="h-3 w-40 max-w-full rounded bg-muted" />
              <div className="h-3 w-32 rounded bg-muted" />
              <div className="h-3 w-36 rounded bg-muted" />
            </div>
          ))}
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:px-6 md:flex-row md:justify-between lg:px-8">
            <div className="h-3 w-56 max-w-full rounded bg-muted" />
            <div className="h-3 w-44 max-w-full rounded bg-muted" />
          </div>
        </div>
      </footer>
    </div>
  );
}

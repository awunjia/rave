
type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function PagePlaceholder({
  title,
  description = "This page is under development.",
}: PagePlaceholderProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-foreground">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Rave — Travel & Consular Assistance
      </p>

      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>

      <p className="text-muted-foreground">{description}</p>
    </main>
  );
}

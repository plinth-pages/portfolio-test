export function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="w-full px-6 py-[calc(var(--plinth-space)/2)]">
      <div className="mx-auto w-full max-w-3xl">
        {heading ? (
          <h2 className="mb-6 text-sm font-semibold tracking-[0.14em] text-muted uppercase">{heading}</h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}

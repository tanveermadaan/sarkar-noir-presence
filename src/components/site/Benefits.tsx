const benefits = [
  { title: "Long-Lasting", copy: "Designed to leave a memorable fragrance trail." },
  {
    title: "Premium Blend",
    copy: "A carefully balanced combination of citrus, spice, woods and oud.",
  },
  { title: "Versatile", copy: "Perfect for evenings, occasions, dates and everyday statements." },
  {
    title: "Made for Presence",
    copy: "A fragrance designed around confidence and individuality.",
  },
];

export function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="section-pad border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Sarkar Noir</p>
          <h2 id="benefits-heading" className="mt-4 text-4xl leading-tight md:text-5xl">
            Built Around Confidence
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {benefits.map((b) => (
            <article key={b.title} className="border-t border-primary/50 pt-6">
              <h3 className="text-2xl">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {b.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const pyramid = [
  {
    stage: "Top Notes",
    caption: "The opening",
    items: ["Bergamot", "Lemon", "Black Pepper"],
  },
  {
    stage: "Heart Notes",
    caption: "The character",
    items: ["Lavender", "Cinnamon", "Geranium"],
  },
  {
    stage: "Base Notes",
    caption: "The trail",
    items: ["Oud", "Cedarwood", "Amber", "Musk"],
  },
];

export function Notes() {
  return (
    <section id="notes" className="section-pad border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Fragrance Pyramid</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">The Scent of Confidence</h2>
          <div className="rule-gold mt-6" />
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {pyramid.map((group, i) => (
            <article
              key={group.stage}
              className="rounded-sm border border-border/70 bg-elevated p-7 transition-colors hover:border-primary/60 md:p-9"
            >
              <span className="font-display text-3xl text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xs font-semibold tracking-[0.2em] text-foreground uppercase">
                {group.stage}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{group.caption}</p>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-display text-xl">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

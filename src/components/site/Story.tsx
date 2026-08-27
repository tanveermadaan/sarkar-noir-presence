const stages = [
  {
    number: "01",
    title: "The First Impression",
    copy: "Fresh citrus and black pepper create an energetic opening.",
  },
  {
    number: "02",
    title: "The Presence",
    copy: "Lavender, cinnamon and geranium create a sophisticated heart.",
  },
  {
    number: "03",
    title: "The Signature",
    copy: "Oud, cedarwood, amber and musk leave a warm, memorable trail.",
  },
];

export function Story() {
  return (
    <>
      <section id="story" className="section-pad border-b border-border/60 bg-elevated">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Made to Be Remembered</h2>
          <div className="rule-gold mx-auto mt-6" />
          <p className="mt-8 font-display text-xl leading-relaxed text-foreground/85 md:text-2xl">
            Sarkar Noir was created around a simple idea — your fragrance should become part of your
            identity. It opens fresh and energetic, develops into a warm and confident heart, and
            settles into a deep woody trail that stays with you long after you leave.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="section-pad border-b border-border/60"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">The Experience</p>
            <h2 id="experience-heading" className="mt-4 text-4xl leading-tight md:text-5xl">
              How Sarkar Noir Wears Through the Day
            </h2>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border/70 bg-border/70 md:mt-16 md:grid-cols-3">
            {stages.map((s) => (
              <li key={s.number} className="bg-background p-7 md:p-10">
                <span className="font-display text-4xl text-primary">{s.number}</span>
                <h3 className="mt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

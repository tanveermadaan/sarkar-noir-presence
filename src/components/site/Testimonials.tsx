/** Demo placeholders — replace with genuine customer reviews before launch. */
const testimonials = [
  {
    quote:
      "Elegant, bold and incredibly easy to wear. Sarkar Noir has become my go-to evening fragrance.",
    author: "Customer Name",
  },
  { quote: "This smells sophisticated without being overpowering.", author: "Customer Name" },
  { quote: "Perfect for nights out and special occasions.", author: "Customer Name" },
];

export function Testimonials() {
  return (
    <section id="reviews" className="section-pad border-b border-border/60 bg-elevated">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">What Wearers Say</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Sample placeholder reviews shown for layout purposes. These are demo texts, not verified
            customer reviews.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex h-full flex-col justify-between rounded-sm border border-border/70 p-7 md:p-9"
            >
              <blockquote className="font-display text-xl leading-relaxed text-foreground/90 md:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                — {t.author} <span className="text-primary/70">(sample)</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

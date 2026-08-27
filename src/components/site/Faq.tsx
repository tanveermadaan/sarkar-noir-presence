export const faqs = [
  {
    q: "What does Sarkar Noir smell like?",
    a: "Sarkar Noir is a woody, spicy oriental fragrance. It opens bright and citrusy, moves into a warm spiced heart, and settles into a deep oud and woods base.",
  },
  {
    q: "What are the top, heart and base notes?",
    a: "Top: bergamot, lemon and black pepper. Heart: lavender, cinnamon and geranium. Base: oud, cedarwood, amber and musk.",
  },
  {
    q: "When should I wear Sarkar Noir?",
    a: "It suits evenings, dinners, dates, weddings, events and occasions where you want a confident, memorable presence.",
  },
  {
    q: "Is Sarkar Noir suitable for everyday use?",
    a: "Yes. Applied lightly, it works well for daily wear — especially in cooler weather and for evening plans.",
  },
  {
    q: "How long does the fragrance last?",
    a: "The woody and oud base is built for a lasting trail. Longevity varies with skin type, weather and how much you apply.",
  },
  {
    q: "Where can I buy Sarkar Noir?",
    a: "Sarkar Noir is available directly from Sarkar Perfume — use the Shop Sarkar Noir button on this page.",
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-pad border-b border-border/60">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-heading" className="mt-4 text-4xl leading-tight md:text-5xl">
          Questions About Sarkar Noir
        </h2>

        <div className="mt-10 divide-y divide-border/70 border-y border-border/70">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg text-foreground md:text-xl">
                <h3 className="text-lg font-normal md:text-xl">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

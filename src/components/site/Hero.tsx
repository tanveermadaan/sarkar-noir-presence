import heroImage from "@/assets/sarkar-noir-hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-12 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pt-20 md:pb-24">
        <div className="reveal">
          <p className="eyebrow">Sarkar Perfume · Signature Edition</p>
          <h1 className="mt-5 text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            SARKAR
            <span className="block text-primary">NOIR</span>
          </h1>
          <p className="mt-5 font-display text-xl text-foreground/90 italic md:text-2xl">
            Leave a Presence. Not Just a Scent.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            An unforgettable blend of bold citrus, rich spices, warm woods and deep oud — created
            for those who command attention without asking for it.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#buy"
              className="rounded-sm bg-primary px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Shop Sarkar Noir
            </a>
            <a
              href="#notes"
              className="rounded-sm border border-border px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Discover the Scent
            </a>
          </div>

          <p className="mt-8 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Long-Lasting <span className="text-primary">•</span> Premium Fragrance{" "}
            <span className="text-primary">•</span> Made for Modern India
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-10 bottom-10 rounded-full bg-primary/10 blur-3xl"
          />
          <img
            src={heroImage}
            alt="Sarkar Noir premium men's perfume bottle lit against a dark stone surface"
            width={1280}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="relative mx-auto w-full max-w-md rounded-sm object-cover shadow-[var(--shadow-luxe)]"
          />
        </div>
      </div>
    </section>
  );
}

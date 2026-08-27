export function FinalCta() {
  return (
    <section aria-labelledby="final-cta" className="section-pad bg-elevated text-center">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h2 id="final-cta" className="text-4xl leading-tight md:text-6xl">
          Your Signature Starts Here.
        </h2>
        <p className="mt-6 font-display text-xl text-muted-foreground italic md:text-2xl">
          Some fragrances are noticed. The right fragrance is remembered.
        </p>
        <a
          href="#buy"
          className="mt-9 inline-block rounded-sm bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Shop Sarkar Noir
        </a>
      </div>
    </section>
  );
}

const quickLinks = [
  { href: "#fragrance", label: "Fragrance" },
  { href: "#story", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const socials = ["Instagram", "Facebook", "YouTube"];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl">Sarkar Perfume</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Premium Indian fragrances crafted for a confident, lasting presence.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-xs tracking-[0.18em] text-primary uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact">
          <h2 className="text-xs tracking-[0.18em] text-primary uppercase">Follow</h2>
          <ul className="mt-4 space-y-3">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#contact"
                  aria-label={`Sarkar Perfume on ${s} (link coming soon)`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Sarkar Perfume. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

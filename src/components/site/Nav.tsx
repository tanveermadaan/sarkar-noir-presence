import { useState } from "react";

const links = [
  { href: "#fragrance", label: "Fragrance" },
  { href: "#notes", label: "Notes" },
  { href: "#story", label: "Story" },
  { href: "#reviews", label: "Reviews" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
      >
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-wide md:text-2xl">Sarkar</span>
          <span className="eyebrow text-[0.55rem]">Perfume</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#buy"
            className="hidden rounded-sm border border-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block"
          >
            Shop Sarkar Noir
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-sm border border-border md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border/60 bg-elevated md:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-4 text-base text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href="#buy"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-primary px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
              >
                Shop Sarkar Noir
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

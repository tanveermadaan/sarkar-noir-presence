import productImage from "@/assets/sarkar-noir-product.jpg";

/** Edit product details here. Keep PRICE as a placeholder until confirmed. */
export const product = {
  name: "Sarkar Noir",
  price: "₹[PRICE]",
  family: "Woody • Spicy • Oriental",
  suitableFor: "Evening • Dates • Events • Special occasions",
  description:
    "A bold, sophisticated eau de parfum built on bright citrus, warm spice and a deep oud-and-woods base — crafted for the moments when you want to be remembered.",
  shopUrl: "#buy",
};

export function Product() {
  return (
    <section id="buy" className="section-pad border-b border-border/60 bg-elevated">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <img
          src={productImage}
          alt="Sarkar Noir perfume bottle with oud wood, cedar, cinnamon and bergamot peel"
          width={1280}
          height={1280}
          loading="lazy"
          decoding="async"
          className="w-full rounded-sm object-cover shadow-[var(--shadow-luxe)]"
        />

        <div id="fragrance">
          <p className="eyebrow">The Fragrance</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">{product.name}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {product.description}
          </p>

          <dl className="mt-8 space-y-4 border-t border-border/70 pt-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <dt className="w-40 shrink-0 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Fragrance family
              </dt>
              <dd className="text-base">{product.family}</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <dt className="w-40 shrink-0 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Suitable for
              </dt>
              <dd className="text-base">{product.suitableFor}</dd>
            </div>
          </dl>

          <p className="mt-8 font-display text-4xl text-primary">{product.price}</p>

          <a
            href={product.shopUrl}
            className="mt-6 block rounded-sm bg-primary px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

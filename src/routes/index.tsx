import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Notes } from "@/components/site/Notes";
import { Story } from "@/components/site/Story";
import { Product, product } from "@/components/site/Product";
import { Benefits } from "@/components/site/Benefits";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq, faqs } from "@/components/site/Faq";
import { FinalCta, Footer } from "@/components/site/Footer";

const TITLE = "Sarkar Noir | Premium Men's Fragrance | Sarkar Perfume";
const DESCRIPTION =
  "Discover Sarkar Noir by Sarkar Perfume — a sophisticated blend of citrus, spice, oud and warm woods, created for a confident and unforgettable presence.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Sarkar Noir",
          brand: { "@type": "Brand", name: "Sarkar Perfume" },
          category: "Perfume",
          description: product.description,
          additionalProperty: [
            { "@type": "PropertyValue", name: "Fragrance family", value: product.family },
            { "@type": "PropertyValue", name: "Top notes", value: "Bergamot, Lemon, Black Pepper" },
            { "@type": "PropertyValue", name: "Heart notes", value: "Lavender, Cinnamon, Geranium" },
            {
              "@type": "PropertyValue",
              name: "Base notes",
              value: "Oud, Cedarwood, Amber, Musk",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Notes />
        <Story />
        <Product />
        <Benefits />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

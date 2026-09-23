import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { OUR_FOOD_CATEGORIES } from "@/data/our-food-categories";
import { getFeaturedProducts } from "@/lib/services/products";
import type { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Our Food | iD Fresh",
  description: "Batters, parottas, coffee decoctions and more — 100% authentic, zero shortcuts.",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/our-food/${product.slug}`}
      className="group shrink-0 rounded-2xl border border-brand-100 bg-white p-4 transition-colors hover:bg-brand-50"
    >
      <div className="relative aspect-square w-full">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 220px, 45vw"
            className="object-contain"
          />
        ) : (
          <PlaceholderImage
            tone={product.tone}
            emoji={product.emoji}
            className="h-full w-full rounded-xl"
            emojiClassName="text-5xl"
          />
        )}
      </div>
      {product.badge && (
        <span className="mt-3 inline-block rounded-full bg-lime-400 px-3 py-1 font-heading text-xs font-bold text-brand-900">
          {product.badge}
        </span>
      )}
      <h3 className="mt-2 font-heading text-base font-bold text-brand-900 group-hover:text-brand-600">
        {product.name}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-inkgray">{product.description}</p>
    </Link>
  );
}

export default async function OurFoodPage() {
  const products = await getFeaturedProducts();

  // Only build a browse section for categories that actually have products —
  // empty ones (e.g. Chutneys) stay reachable via the pill row above, which
  // links through to /our-food/[category] and renders an honest "coming
  // soon" there instead of an empty section on this page.
  const sections = OUR_FOOD_CATEGORIES.map((category) => ({
    category,
    products: products.filter(
      (product) => product.category === category.slug || product.secondaryCategories?.includes(category.slug)
    ),
  })).filter((section) => section.products.length > 0);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <h1 className="text-center font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          Our Food
        </h1>
        <p className="mx-auto mt-2 max-w-md text-center font-accent italic text-lg text-inkgray sm:text-xl">
          discover more about our fresh food
        </p>

        {/* Jumps straight to the matching section below when it has products; categories
            with none yet (e.g. Chutneys) go to their own page's honest empty state instead. */}
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {OUR_FOOD_CATEGORIES.map((c) => {
            const hasSection = sections.some((s) => s.category.slug === c.slug);
            return (
              <a
                key={c.slug}
                href={hasSection ? `#${c.slug}` : `/our-food/${c.slug}`}
                className="shrink-0 whitespace-nowrap rounded-full bg-brand-50 px-4 py-2 font-nav text-xs font-bold text-brand-800 transition-colors hover:bg-brand-100"
              >
                {c.label}
              </a>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col gap-14">
          {sections.map(({ category, products: categoryProducts }) => (
            <section key={category.slug} id={category.slug} className="scroll-mt-28">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-heading text-2xl font-extrabold text-brand-900 sm:text-3xl">
                  {category.label}
                </h2>
                <Link
                  href={`/our-food/${category.slug}`}
                  className="flex shrink-0 items-center gap-1 font-heading text-sm font-bold text-brand-600 hover:text-brand-800"
                >
                  See all
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { getFeaturedProducts } from "@/lib/services/products";

export const metadata: Metadata = {
  title: "Our Foods | iD Fresh",
  description: "Batters, parottas, coffee decoctions and more — 100% authentic, zero shortcuts.",
};

export default async function ProductsPage() {
  const products = await getFeaturedProducts();

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <h1 className="text-center font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          Our Foods
        </h1>
        <p className="mx-auto mt-2 max-w-md text-center font-accent italic text-lg text-inkgray sm:text-xl">
          discover more about our fresh food
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="rounded-2xl border border-brand-100 bg-white p-4 transition-colors hover:bg-brand-50"
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
              <h2 className="mt-2 font-heading text-base font-bold text-brand-900">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-inkgray">{product.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Product } from "@/lib/types";

export function ProductShowcase({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const amount = (card?.offsetWidth ?? 280) + 20;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
    setActiveIndex((prev) => Math.min(Math.max(prev + direction, 0), products.length - 1));
  }

  return (
    <section id="products" data-scroll-target className="py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <h2
            className="font-heading text-4xl font-extrabold text-brand-500 sm:text-5xl"
            style={{ textShadow: "2px 0 0 #B6D946" }}
          >
            Packed with goodness
          </h2>
          <p className="mt-2 font-accent italic text-xl text-inkgray sm:text-2xl">
            discover more about our fresh food
          </p>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:justify-center"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-64 shrink-0 snap-center rounded-3xl border border-brand-100 bg-white p-4 shadow-sm sm:w-72"
            >
              {product.image ? (
                <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 640px) 18rem, 16rem"
                    className="object-contain"
                  />
                </div>
              ) : (
                <PlaceholderImage
                  tone={product.tone}
                  emoji={product.emoji}
                  className="h-56 w-full rounded-2xl"
                  emojiClassName="text-6xl"
                />
              )}
              {product.badge && (
                <span className="mt-3 inline-block rounded-full bg-lime-400 px-3 py-1 font-heading text-xs font-bold text-brand-900">
                  {product.badge}
                </span>
              )}
              <h3 className="mt-2 font-heading text-lg font-bold text-brand-900">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-inkgray">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous product"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {products.map((product, index) => (
              <span
                key={product.id}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === activeIndex ? "bg-brand-800" : "bg-lime-300"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next product"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/our-food" variant="primary" className="bg-brand-600 text-lime-300 hover:bg-brand-700">
            Explore all Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

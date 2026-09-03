"use client";

import { useState } from "react";
import { ProductDetailView } from "@/components/product/ProductDetailView";
import type { Product, Recipe } from "@/lib/types";

export interface ProductBundle {
  product: Product;
  relatedProducts: Product[];
  relatedRecipes: Recipe[];
}

/** Category landing page: shows one product's full detail at a time, with a pill
 * row to swap between every product in the category — all client-side, no
 * navigation/reload, since every bundle's data is already resolved server-side.
 * Also reused on a single product's own URL (see [slug]/page.tsx) so that page
 * shows the same sibling-product pills, pre-selected to the visited product. */
export function CategoryProductSwitcher({
  bundles,
  initialSlug,
}: {
  bundles: ProductBundle[];
  initialSlug?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(() => {
    const index = bundles.findIndex((bundle) => bundle.product.slug === initialSlug);
    return index === -1 ? 0 : index;
  });
  const active = bundles[activeIndex];

  const switcher = bundles.length > 1 && (
    <div className="no-scrollbar -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
      {bundles.map((bundle, index) => (
        <button
          key={bundle.product.id}
          type="button"
          onClick={() => setActiveIndex(index)}
          style={index === activeIndex ? undefined : { animationDelay: `${index * 0.3}s` }}
          className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-nav text-xs font-bold shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 ${
            index === activeIndex
              ? "bg-brand-500 text-white"
              : "animate-pill-breathe bg-brand-50 text-brand-800 hover:bg-brand-100"
          }`}
        >
          {bundle.product.name}
        </button>
      ))}
    </div>
  );

  return (
    <ProductDetailView
      product={active.product}
      relatedProducts={active.relatedProducts}
      relatedRecipes={active.relatedRecipes}
      switcher={switcher}
    />
  );
}

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
 * navigation/reload, since every bundle's data is already resolved server-side. */
export function CategoryProductSwitcher({ bundles }: { bundles: ProductBundle[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = bundles[activeIndex];

  return (
    <>
      {bundles.length > 1 && (
        <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {bundles.map((bundle, index) => (
            <button
              key={bundle.product.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-nav text-xs font-bold transition-colors ${
                index === activeIndex
                  ? "bg-brand-500 text-white"
                  : "bg-brand-50 text-brand-800 hover:bg-brand-100"
              }`}
            >
              {bundle.product.name}
            </button>
          ))}
        </div>
      )}

      <ProductDetailView
        product={active.product}
        relatedProducts={active.relatedProducts}
        relatedRecipes={active.relatedRecipes}
      />
    </>
  );
}

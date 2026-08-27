import { PRODUCTS } from "@/data/products";
import type { Product } from "@/lib/types";

/** Data-access seam for the product catalogue — mock today, DB/API later. */
export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((product) => product.slug === slug);
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  if (!product.relatedProductSlugs?.length) return [];
  return PRODUCTS.filter((p) => product.relatedProductSlugs?.includes(p.slug));
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return PRODUCTS.filter((product) => product.category === categorySlug);
}

import { PRODUCTS } from "@/data/products";
import type { Product } from "@/lib/types";

/** Data-access seam for the product catalogue — mock today, DB/API later. */
export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS;
}

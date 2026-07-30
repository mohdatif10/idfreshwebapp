import { NextResponse } from "next/server";
import { getFeaturedProducts } from "@/lib/services/products";

export async function GET() {
  const products = await getFeaturedProducts();
  return NextResponse.json({ products });
}

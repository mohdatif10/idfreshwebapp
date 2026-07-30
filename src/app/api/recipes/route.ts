import { NextResponse } from "next/server";
import { getTrendingRecipes } from "@/lib/services/recipes";

export async function GET() {
  const recipes = await getTrendingRecipes();
  return NextResponse.json({ recipes });
}

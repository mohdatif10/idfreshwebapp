import { RECIPES } from "@/data/recipes";
import type { Recipe } from "@/lib/types";

/**
 * Data-access seam for recipes. Today this reads the local mock catalogue;
 * swap the body for a real fetch/DB call once the recipes backend exists —
 * callers (Server Components, API routes) don't need to change.
 */
export async function getTrendingRecipes(): Promise<Recipe[]> {
  return RECIPES;
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | undefined> {
  return RECIPES.find((recipe) => recipe.slug === slug);
}

export async function getRelatedRecipes(recipe: Recipe, limit = 3): Promise<Recipe[]> {
  return RECIPES.filter(
    (candidate) => candidate.id !== recipe.id && candidate.tags.some((tag) => recipe.tags.includes(tag))
  ).slice(0, limit);
}

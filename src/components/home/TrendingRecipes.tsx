"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import type { Recipe } from "@/lib/types";

interface TrendingRecipesProps {
  recipes: Recipe[];
  activeFilter: string | null;
  query: string;
  onClear: () => void;
}

export function TrendingRecipes({ recipes, activeFilter, query, onClear }: TrendingRecipesProps) {
  const hasFilter = Boolean(activeFilter || query);

  return (
    <section id="trending-recipes" data-scroll-target className="py-14 sm:py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Trending Recipes
          </h2>
          <Link
            href="/recipes"
            className="whitespace-nowrap font-heading text-sm font-semibold text-brand-500 underline underline-offset-4 hover:text-brand-700"
          >
            view all →
          </Link>
        </div>

        {hasFilter && (
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl bg-brand-50 px-4 py-3">
            <p className="font-heading text-sm font-medium text-brand-800">
              {recipes.length === 0
                ? "No recipes match that yet — more dropping soon."
                : `Showing ${recipes.length} recipe${recipes.length === 1 ? "" : "s"}${
                    activeFilter ? ` for "${activeFilter}"` : ""
                  }${query ? ` matching "${query}"` : ""}`}
            </p>
            <button
              type="button"
              onClick={onClear}
              className="ml-auto flex items-center gap-1 font-heading text-xs font-semibold text-brand-600 hover:text-brand-800"
            >
              <X className="h-3.5 w-3.5" />
              Clear
            </button>
          </div>
        )}

        <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} className="snap-start w-56 sm:w-64" />
          ))}
        </div>
      </Container>
    </section>
  );
}

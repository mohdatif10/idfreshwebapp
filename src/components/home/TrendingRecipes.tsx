"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock3, Heart, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Recipe } from "@/lib/types";

interface TrendingRecipesProps {
  recipes: Recipe[];
  activeFilter: string | null;
  query: string;
  onClear: () => void;
}

export function TrendingRecipes({ recipes, activeFilter, query, onClear }: TrendingRecipesProps) {
  const [favorited, setFavorited] = useState<Record<string, boolean>>({});
  const hasFilter = Boolean(activeFilter || query);

  function toggleFavorite(id: string) {
    setFavorited((prev) => ({ ...prev, [id]: !prev[id] }));
  }

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
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.slug}`}
              className="group w-56 shrink-0 snap-start sm:w-64"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-64">
                {recipe.image ? (
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    sizes="(min-width: 640px) 16rem, 14rem"
                    className="object-cover"
                  />
                ) : (
                  <PlaceholderImage
                    tone={recipe.tone}
                    emoji={recipe.emoji}
                    className="h-full w-full"
                    emojiClassName="text-6xl"
                  />
                )}
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    toggleFavorite(recipe.id);
                  }}
                  aria-label="Save recipe"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
                >
                  <Heart
                    className={`h-4 w-4 ${favorited[recipe.id] ? "fill-lime-400 text-lime-400" : ""}`}
                  />
                </button>
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold text-brand-900 group-hover:text-brand-600">
                {recipe.title}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 font-mono text-sm text-inkgray">
                <Clock3 className="h-3.5 w-3.5" />
                {recipe.minutes}m
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

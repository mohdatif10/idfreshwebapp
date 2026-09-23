"use client";

import Link from "next/link";
import { useRef } from "react";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { ScrollArrowButton } from "@/components/ui/ScrollArrowButton";
import { scrollTrackByCard } from "@/lib/scrollRail";
import type { Recipe } from "@/lib/types";

export function RecipeRail({
  title,
  recipes,
  viewAllHref,
}: {
  title: string;
  recipes: Recipe[];
  viewAllHref?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  if (recipes.length === 0) return null;

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-heading text-2xl font-extrabold text-brand-900 sm:text-3xl">
          {title}
        </h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="whitespace-nowrap font-heading text-sm font-semibold text-brand-500 underline underline-offset-4 hover:text-brand-700"
          >
            view all →
          </Link>
        )}
      </div>
      <div className="relative mt-5">
        <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} className="snap-start w-48 sm:w-56" />
          ))}
        </div>
        {recipes.length > 1 && (
          <>
            {/* top-32 = half of RecipeCard's default h-64 image height (arrows only
                ever show at md:+, where that sm:h-64 size is already active) — not
                top-1/2, which would center on the whole card including the title/time
                text below the image. */}
            <ScrollArrowButton
              direction="left"
              onClick={() => scrollTrackByCard(trackRef.current, -1)}
              className="absolute -left-3 top-32 -translate-y-1/2"
            />
            <ScrollArrowButton
              direction="right"
              onClick={() => scrollTrackByCard(trackRef.current, 1)}
              className="absolute -right-3 top-32 -translate-y-1/2"
            />
          </>
        )}
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Hero } from "@/components/home/Hero";
import { TrendingRecipes } from "@/components/home/TrendingRecipes";
import type { Recipe } from "@/lib/types";

function matchesFilter(recipe: Recipe, filter: string | null, query: string): boolean {
  if (filter) {
    const normalized = filter.toLowerCase();
    const matchesTag =
      normalized === "< 10min"
        ? recipe.minutes < 10
        : recipe.tags.some((tag) => tag.toLowerCase() === normalized);
    if (!matchesTag) return false;
  }

  if (query.trim()) {
    const q = query.trim().toLowerCase();
    const haystack = `${recipe.title} ${recipe.tags.join(" ")}`.toLowerCase();
    if (!haystack.includes(q)) return false;
  }

  return true;
}

export function HomeExperience({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredRecipes = useMemo(
    () => recipes.filter((recipe) => matchesFilter(recipe, activeFilter, query)),
    [recipes, activeFilter, query]
  );

  function scrollToRecipes() {
    document
      .getElementById("trending-recipes")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleToggleFilter(label: string) {
    setActiveFilter((prev) => (prev === label ? null : label));
    scrollToRecipes();
  }

  function handleSubmit() {
    scrollToRecipes();
  }

  function handleClear() {
    setQuery("");
    setActiveFilter(null);
  }

  return (
    <>
      <Hero
        query={query}
        onQueryChange={setQuery}
        onSubmit={handleSubmit}
        activeFilter={activeFilter}
        onToggleFilter={handleToggleFilter}
      />
      <TrendingRecipes
        recipes={filteredRecipes}
        activeFilter={activeFilter}
        query={query}
        onClear={handleClear}
      />
    </>
  );
}

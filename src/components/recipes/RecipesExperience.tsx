"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { RecipeRail } from "@/components/recipes/RecipeRail";
import { RECIPE_CATEGORIES } from "@/data/recipe-categories";
import type { Recipe } from "@/lib/types";

// Curated shelves for the landing page. "Related Recipes" mirrors the three
// real-photo dishes from the design; the other two split the remaining
// catalogue thematically until real per-shelf curation data exists.
const RELATED_SLUGS = ["parotta-shawarma-wrap", "crispy-paneer-dosa-tacos", "crispy-paneer-masala-dosa"];
const TRENDING_SLUGS = ["crispy-dosa-cones", "protein-loaded-idly-bowl", "sprouted-moong-dosa"];
const FUSION_SLUGS = ["malabar-parotta-pizza", "5-minute-instant-dosa"];

function pickBySlug(recipes: Recipe[], slugs: string[]) {
  return slugs
    .map((slug) => recipes.find((recipe) => recipe.slug === slug))
    .filter((recipe): recipe is Recipe => Boolean(recipe));
}

export function RecipesExperience({ recipes }: { recipes: Recipe[] }) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(RECIPE_CATEGORIES[0].label);
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");

  // A header search (from any page) lands here via ?q= — sync it in whenever
  // it changes, including repeat searches while already on this page.
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuery(q);
      document.getElementById("all-recipes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  const related = useMemo(() => pickBySlug(recipes, RELATED_SLUGS), [recipes]);
  const trending = useMemo(() => pickBySlug(recipes, TRENDING_SLUGS), [recipes]);
  const fusion = useMemo(() => pickBySlug(recipes, FUSION_SLUGS), [recipes]);

  const filtered = useMemo(() => {
    const category = RECIPE_CATEGORIES.find((c) => c.label === activeCategory);
    let list = recipes;
    if (category?.tag) {
      list = list.filter((recipe) => recipe.tags.includes(category.tag as string));
    }
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((recipe) => `${recipe.title} ${recipe.tags.join(" ")}`.toLowerCase().includes(q));
    }
    return list;
  }, [recipes, activeCategory, query]);

  function handleCategoryClick(label: string) {
    setActiveCategory(label);
    document.getElementById("all-recipes")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section className="relative -mt-20 h-[28rem] overflow-hidden sm:-mt-24 sm:h-[32rem]">
        <Image
          src="/brand/misc/recipes-hero.png"
          alt="A steaming filter coffee and dosa wrap, ready to eat"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-900/70 via-transparent to-brand-900/20" />

        <Container className="relative flex h-full flex-col justify-between pb-6 pt-24 sm:pt-28">
          <div>
            <h1 className="font-heading text-4xl font-extrabold text-cream drop-shadow-sm sm:text-5xl">
              Recipes
            </h1>

            <div className="mt-4 flex items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-xl sm:max-w-sm">
              <Search className="h-5 w-5 shrink-0 text-brand-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="search recipes..."
                className="w-full bg-transparent font-accent italic text-brand-900 placeholder:text-brand-900/40 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand-400 transition-colors hover:text-brand-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            {RECIPE_CATEGORIES.map((category) => {
              const isActive = category.label === activeCategory;
              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => handleCategoryClick(category.label)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 font-nav text-xs font-bold transition-colors ${
                    isActive
                      ? "bg-lime-500/90 text-brand-900"
                      : "bg-black/50 text-white/70 backdrop-blur-sm hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <Container className="flex flex-col gap-12 py-10 sm:gap-14 sm:py-14">
        <RecipeRail title="Related Recipes" recipes={related} viewAllHref="#all-recipes" />
        <RecipeRail title="Trending Recipes" recipes={trending} viewAllHref="#all-recipes" />
        <RecipeRail title="Fusion Recipes" recipes={fusion} viewAllHref="#all-recipes" />

        <div id="all-recipes" data-scroll-target>
          <h2 className="font-heading text-2xl font-extrabold text-brand-900 sm:text-3xl">
            All Recipes
          </h2>
          <p className="mt-1 font-heading text-sm font-semibold text-inkgray">
            {filtered.length} recipe{filtered.length === 1 ? "" : "s"}
          </p>
          {filtered.length === 0 ? (
            <p className="mt-6 rounded-xl bg-brand-50 px-4 py-6 text-center font-heading text-brand-800">
              No recipes here yet — check back soon!
            </p>
          ) : (
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} className="w-full" imageClassName="h-40 sm:h-48" />
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

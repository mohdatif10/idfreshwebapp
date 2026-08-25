"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { RECIPE_CATEGORIES } from "@/data/recipe-categories";
import type { Recipe } from "@/lib/types";

export function RecipesExperience({ recipes }: { recipes: Recipe[] }) {
  const [activeCategory, setActiveCategory] = useState(RECIPE_CATEGORIES[0].label);

  const filtered = useMemo(() => {
    const category = RECIPE_CATEGORIES.find((c) => c.label === activeCategory);
    if (!category?.tag) return recipes;
    return recipes.filter((recipe) => recipe.tags.includes(category.tag as string));
  }, [recipes, activeCategory]);

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
          <h1 className="font-heading text-4xl font-extrabold text-cream drop-shadow-sm sm:text-5xl">
            Recipes
          </h1>

          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            {RECIPE_CATEGORIES.map((category) => {
              const isActive = category.label === activeCategory;
              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(category.label)}
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

      <Container className="py-10 sm:py-14">
        <p className="font-heading text-sm font-semibold text-inkgray">
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
      </Container>
    </>
  );
}

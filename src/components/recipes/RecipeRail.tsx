import Link from "next/link";
import { RecipeCard } from "@/components/recipes/RecipeCard";
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
      <div className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} className="snap-start w-48 sm:w-56" />
        ))}
      </div>
    </div>
  );
}

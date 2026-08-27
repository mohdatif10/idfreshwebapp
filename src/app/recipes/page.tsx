import type { Metadata } from "next";
import { Suspense } from "react";
import { FeaturedVideo } from "@/components/recipes/FeaturedVideo";
import { RecipesExperience } from "@/components/recipes/RecipesExperience";
import { getTrendingRecipes } from "@/lib/services/recipes";

export const metadata: Metadata = {
  title: "Recipes | iD Fresh",
  description:
    "Everything you can cook with iD Fresh — idly & dosa batter, parottas, and quick everyday recipes.",
};

export default async function RecipesPage() {
  const recipes = await getTrendingRecipes();

  return (
    <>
      <Suspense fallback={null}>
        <RecipesExperience recipes={recipes} />
      </Suspense>
      <FeaturedVideo />
    </>
  );
}

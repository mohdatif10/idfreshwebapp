import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Recipes | iD Fresh",
};

export default function RecipesPage() {
  return (
    <ComingSoon
      emoji="📖"
      label="Recipes"
      title="The full recipe library is on its way"
      description="We're plating up a searchable collection of everything you can cook with iD Fresh — for now, check the Trending Recipes on our homepage."
    />
  );
}

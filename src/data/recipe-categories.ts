export interface RecipeCategory {
  label: string;
  tag: string | null;
}

// Matches the filter chip row from the Figma "Recipes" page spec.
// "All products" shows everything; the rest filter by the matching recipe tag.
export const RECIPE_CATEGORIES: RecipeCategory[] = [
  { label: "All products", tag: null },
  { label: "batter", tag: "idly & dosa" },
  { label: "parota", tag: "parota" },
  { label: "chapati", tag: "chapati" },
  { label: "Essentials", tag: "quick" },
];

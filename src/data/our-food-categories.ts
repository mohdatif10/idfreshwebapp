// The "Our Food" sub-navigation from the site map. Each maps to a Product.category
// value (see data/products.ts) — pages filter the catalogue by this slug via
// /our-food?category=<slug>. Categories with no matching products yet render an
// honest empty state rather than fake content.
export interface OurFoodCategory {
  label: string;
  slug: string;
}

export const OUR_FOOD_CATEGORIES: OurFoodCategory[] = [
  { label: "Batter", slug: "batter" },
  { label: "Parota", slug: "parota" },
  { label: "What's New", slug: "whats-new" },
  { label: "Protein", slug: "protein" },
  { label: "Snack", slug: "snack" },
  { label: "Coffee", slug: "coffee" },
  { label: "Chapati", slug: "chapati" },
  { label: "Chutneys", slug: "chutneys" },
  { label: "Dairy", slug: "dairy" },
  { label: "Frozen Fruit Pulp", slug: "frozen-fruit-pulp" },
];

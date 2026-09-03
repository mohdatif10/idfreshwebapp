export type PlaceholderTone =
  | "lime"
  | "amber"
  | "teal"
  | "clay"
  | "sand"
  | "moss";

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  minutes: number;
  tags: string[];
  emoji: string;
  tone: PlaceholderTone;
  favorited?: boolean;
  /** Real photo path from /public/brand — falls back to the emoji/tone placeholder when absent. */
  image?: string;

  // Detail-page-only fields. Placeholder content today for all 8 recipes — swap for the
  // real per-recipe copy (matching the live site's intro/ingredients/steps structure)
  // when it's available.
  description?: string;
  servings?: number;
  ingredients?: string[];
  steps?: string[];
}

export interface CreatorPost {
  id: string;
  creatorName: string;
  metricLabel: string;
  emoji: string;
  tone: PlaceholderTone;
  /** Real baked creator-post image (already includes caption/IG badge) — falls back to placeholder when absent. Also used as the <video> poster frame when `video` is set. */
  image?: string;
  /** Self-hosted video clip (mp4) from /public/brand — autoplays muted+looped when scrolled into view. Requires a licensed/downloaded copy of the clip; never a live Instagram embed. */
  video?: string;
  /** Optional secondary link to the creator's Instagram profile/post — opens in a new tab, never the card's primary click target (keeps viewers on-site). */
  instagramUrl?: string;
}

export interface HowToStep {
  title: string;
  description: string;
  image?: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  timeAgo: string;
}

export interface NutritionFact {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  badge?: string;
  emoji: string;
  tone: PlaceholderTone;
  /** Real product photo path from /public/brand — falls back to the emoji/tone placeholder when absent. */
  image?: string;
  /** Slug matching data/our-food-categories.ts — powers /our-food?category=<slug> filtering. */
  category: string;

  // Detail-page-only fields (product listing/rail cards ignore these). Populated for
  // products that have real detail content; other products fall back to a simple view.
  heroImage?: string;
  tagline?: string;
  longDescription?: string;
  sizes?: string[];
  ingredientsNote?: string;
  howToMake?: HowToStep[];
  faqs?: FaqEntry[];
  testimonials?: Testimonial[];
  relatedProductSlugs?: string[];

  // Official product-page content (sourced from the live idfreshfood.com listing).
  keyClaims?: string[];
  storageInstructions?: string;
  allergenDeclaration?: string;
  /** Reference quantity (per 100g / per serving) is NOT confirmed by the source — see nutritionNote. */
  nutritionFacts?: NutritionFact[];
  nutritionNote?: string;
}

export interface NewsPost {
  id: string;
  tag: string;
  date: string;
  title: string;
  highlight: string;
  href: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  /** Dropdown (desktop) / expandable section (mobile drawer) sub-links, per the site map. */
  children?: NavChild[];
}

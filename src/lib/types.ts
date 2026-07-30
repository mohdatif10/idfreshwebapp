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
}

export interface CreatorPost {
  id: string;
  creatorName: string;
  metricLabel: string;
  emoji: string;
  tone: PlaceholderTone;
  /** Real baked creator-post image (already includes caption/IG badge) — falls back to placeholder when absent. */
  image?: string;
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

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

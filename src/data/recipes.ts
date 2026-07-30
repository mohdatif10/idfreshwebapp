import type { Recipe } from "@/lib/types";

// Mock recipe catalogue. Swap for a real fetch in lib/services/recipes.ts
// once the recipes CMS/API is ready — the shape here is the contract.
export const RECIPES: Recipe[] = [
  {
    id: "r1",
    slug: "parotta-shawarma-wrap",
    title: "Parotta shawarma wrap",
    minutes: 20,
    tags: ["parota", "quick"],
    emoji: "🌯",
    tone: "moss",
    image: "/brand/recipes/parotta-shawarma-wrap.png",
  },
  {
    id: "r2",
    slug: "crispy-paneer-dosa-tacos",
    title: "Crispy paneer dosa tacos",
    minutes: 20,
    tags: ["idly & dosa", "protein"],
    emoji: "🌮",
    tone: "amber",
    image: "/brand/recipes/paneer-dosa-tacos.png",
  },
  {
    id: "r3",
    slug: "crispy-dosa-cones",
    title: "Crispy dosa cones",
    minutes: 15,
    tags: ["idly & dosa", "quick"],
    emoji: "🍧",
    tone: "teal",
    image: "/brand/recipes/dosa-cones.png",
  },
  {
    id: "r4",
    slug: "protein-loaded-idly-bowl",
    title: "Protein-loaded idly bowl",
    minutes: 12,
    tags: ["idly & dosa", "protein", "quick"],
    emoji: "🥣",
    tone: "clay",
  },
  {
    id: "r5",
    slug: "malabar-parotta-pizza",
    title: "Malabar parotta pizza",
    minutes: 25,
    tags: ["parota"],
    emoji: "🍕",
    tone: "lime",
  },
  {
    id: "r6",
    slug: "sprouted-moong-dosa",
    title: "Sprouted moong dosa",
    minutes: 10,
    tags: ["idly & dosa", "protein", "quick"],
    emoji: "🥞",
    tone: "sand",
  },
  {
    id: "r7",
    slug: "crispy-paneer-masala-dosa",
    title: "Crispy paneer masala dosa",
    minutes: 20,
    tags: ["idly & dosa", "protein"],
    emoji: "🥚",
    tone: "amber",
    image: "/brand/recipes/paneer-masala-dosa.png",
  },
  {
    id: "r8",
    slug: "5-minute-instant-dosa",
    title: "5-minute instant dosa",
    minutes: 5,
    tags: ["idly & dosa", "quick"],
    emoji: "⏱️",
    tone: "teal",
  },
];

export const HERO_FILTERS = [
  { label: "idly & dosa", icon: "circle-dot" },
  { label: "protein", icon: "hand" },
  { label: "< 10min", icon: "timer" },
  { label: "parota", icon: "layers" },
] as const;

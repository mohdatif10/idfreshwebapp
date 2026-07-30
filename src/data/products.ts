import type { Product } from "@/lib/types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "high-fibre-brown-rice-oats-batter",
    name: "High Fibre Brown Rice & Oats Batter",
    description: "30% of daily fibre in just 2 dosas. No soda, no preservatives.",
    badge: "High fibre",
    emoji: "🥞",
    tone: "amber",
    image: "/brand/products/high-fibre-batter.png",
  },
  {
    id: "p2",
    slug: "idly-dosa-batter",
    name: "Idly Dosa Batter",
    description: "Soft idlis, crispy dosas — the one that started it all.",
    emoji: "🍽️",
    tone: "lime",
  },
  {
    id: "p3",
    slug: "multigrain-idly-dosa-batter",
    name: "Multigrain Idly Dosa Batter",
    description: "Six grains, one batter, zero shortcuts.",
    badge: "Multigrain",
    emoji: "🌾",
    tone: "teal",
  },
  {
    id: "p4",
    slug: "malabar-parotta",
    name: "Malabar Parotta",
    description: "Flaky, buttery layers — ready from freezer to tawa in minutes.",
    emoji: "🫓",
    tone: "clay",
  },
  {
    id: "p5",
    slug: "jaggery-filter-coffee-decoction",
    name: "Jaggery Filter Coffee Decoction",
    description: "Let the flavours blend beautifully, the traditional way.",
    badge: "New",
    emoji: "☕",
    tone: "sand",
  },
];

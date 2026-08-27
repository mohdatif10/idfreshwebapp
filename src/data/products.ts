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
    category: "batter",
  },
  {
    id: "p2",
    slug: "idly-dosa-batter",
    name: "Idli & Dosa Batter",
    description: "Soft idlis, crispy dosas — the one that started it all.",
    emoji: "🍽️",
    tone: "lime",
    category: "batter",
    image: "/brand/products/idly-dosa-batter-thumb.png",
    heroImage: "/brand/products/idly-dosa-batter-hero.png",
    tagline: "Your very own bite-sized clouds of happiness",
    longDescription:
      "Whether you're rushing to work on a Monday morning, or putting your feet up on a lazy Sunday afternoon, your dose of bite-sized happiness is only a batter away! Help yourself to a mouthful of soft, delicate idlies or bite into a crispy, golden brown dosa, with our preservative-free batter. And watch as the wholesomeness of home-made food casts a spell on your day.",
    sizes: ["500ml", "1L", "2L"],
    ingredientsNote:
      "RO-Purified Water (55%), Rice (34%), Urad Dal, Fenugreek and Iodised Salt.",
    ingredientsList: [
      "RO-Purified Water (55%)",
      "Rice (34%)",
      "Urad Dal",
      "Fenugreek",
      "Iodised Salt",
    ],
    howToMake: [
      {
        title: "1. Wash the pack",
        description: "Wash the pack before using the batter.",
        image: "/brand/products/how-to-1-wash.png",
      },
      {
        title: "2. Open the pack",
        description:
          "Cut open the pack. Add salt only if needed — the batter is already mildly salted.",
      },
      {
        title: "3. For Idli",
        description:
          "Scoop the batter directly into an idli steamer. Stir the batter before filling the moulds for softer idlis.",
        image: "/brand/products/how-to-2-pour.png",
      },
      {
        title: "4. For Dosa",
        description:
          "Add some water to dilute the batter to dosa consistency. Once diluted, it can no longer be used to make idlis.",
      },
      {
        title: "5. Cooking dosa",
        description: "Stir the diluted batter, then pour it onto a hot pan and spread.",
        image: "/brand/products/how-to-3-steam.png",
      },
      {
        title: "6. Serving",
        description: "Serve the idlis or dosas hot with an accompaniment of your choice.",
      },
    ],
    keyClaims: [
      "Fresh ingredients",
      "No preservatives",
      "Traditional idli & dosa preparation made easier",
      "Mildly salted",
      "One batter, two applications",
    ],
    storageInstructions:
      "Store refrigerated at 0–5°C. Bring the batter to room temperature before cooking.",
    allergenDeclaration: "Manufactured in a facility that also processes wheat.",
    nutritionFacts: [
      { label: "Energy", value: "138.7 kcal" },
      { label: "Protein", value: "1.74 g" },
      { label: "Fat", value: "1.61 g" },
      { label: "Saturated Fatty Acid", value: "0.62 g" },
      { label: "MUFA", value: "0.54 g" },
      { label: "PUFA", value: "0.36 g" },
      { label: "Trans Fatty Acid", value: "0 g" },
      { label: "Sugar", value: "0 g" },
      { label: "Cholesterol", value: "0 mg" },
      { label: "Carbohydrate", value: "26.32 g" },
      { label: "Sodium", value: "142.4 mg" },
    ],
    nutritionNote:
      "As shown on iD Fresh's product page — the reference quantity (per 100g or per serving) isn't stated there, so treat these as indicative rather than confirmed per-100g figures. Check the physical pack for the authoritative value.",
    testimonials: [
      {
        name: "Priya Raghavan",
        location: "Bengaluru",
        quote:
          "The batter is exactly like home — soft idlies on day one, crisp dosas by day three. Nothing in the pack I can't name.",
        timeAgo: "3 weeks ago",
      },
      {
        name: "Arjun Menon",
        location: "Chennai",
        quote:
          "Been buying this every week for two years now. My kids can't tell it apart from their grandmother's batter.",
        timeAgo: "1 month ago",
      },
    ],
    relatedProductSlugs: ["high-fibre-brown-rice-oats-batter", "rice-rava-batter"],
  },
  {
    id: "p3",
    slug: "multigrain-idly-dosa-batter",
    name: "Multigrain Idly Dosa Batter",
    description: "Six grains, one batter, zero shortcuts.",
    badge: "Multigrain",
    emoji: "🌾",
    tone: "teal",
    category: "batter",
  },
  {
    id: "p4",
    slug: "malabar-parotta",
    name: "Malabar Parotta",
    description: "Flaky, buttery layers — ready from freezer to tawa in minutes.",
    emoji: "🫓",
    tone: "clay",
    category: "parota",
  },
  {
    id: "p5",
    slug: "jaggery-filter-coffee-decoction",
    name: "Jaggery Filter Coffee Decoction",
    description: "Let the flavours blend beautifully, the traditional way.",
    badge: "New",
    emoji: "☕",
    tone: "sand",
    category: "coffee",
  },
  {
    id: "p6",
    slug: "rice-rava-batter",
    name: "Rice Rava Batter",
    description: "Light, airy dosas with the signature crunch of rice rava.",
    emoji: "🍚",
    tone: "clay",
    category: "batter",
    image: "/brand/products/rice-rava-batter.png",
  },
];

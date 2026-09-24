export interface HomeCarouselItem {
  name: string;
  description: string;
  image: string;
  href: string;
}

// Curated homepage "Packed with goodness" carousel — deliberately only the
// products the user supplied real 3D pack renders for (2026-09-24), not the
// full catalogue. Copy/hrefs reused from data/products.ts where a single
// matching SKU exists; the two "range" shots (frozen fruit pulp, frozen
// parathas) link to their category page instead of one specific flavour.
export const HOME_CAROUSEL_ITEMS: HomeCarouselItem[] = [
  {
    name: "Idli & Dosa Batter",
    description: "Soft idlis, crispy dosas — the one that started it all.",
    image: "/brand/products/3d-packs/idly-dosa-batter.png",
    href: "/our-food/idly-dosa-batter",
  },
  {
    name: "Organic Idly & Dosa Batter",
    description: "Certified organic, from farm to ferment — no shortcuts, no chemicals.",
    image: "/brand/products/3d-packs/organic-batter.png",
    href: "/our-food/organic-idly-dosa-batter",
  },
  {
    name: "Multigrain Idly & Dosa Batter",
    description: "Your favourite idly & dosa, now healthier.",
    image: "/brand/products/3d-packs/multigrain-batter.png",
    href: "/our-food/multigrain-idly-dosa-batter",
  },
  {
    name: "High Fibre Brown Rice & Oats Batter",
    description: "30% of daily fibre in just 2 dosas. No soda, no preservatives.",
    image: "/brand/products/3d-packs/high-fibre-batter.png",
    href: "/our-food/high-fibre-brown-rice-oats-batter",
  },
  {
    name: "Malabar Parotta",
    description: "Flaky, buttery layers — ready from freezer to tawa in minutes.",
    image: "/brand/products/3d-packs/malabar-parota.png",
    href: "/our-food/malabar-parotta",
  },
  {
    name: "Whole Wheat Lachha Paratha",
    description: "Crispy, flaky, golden brown layers that melt in your mouth.",
    image: "/brand/products/3d-packs/wheat-lachha-paratha.png",
    href: "/our-food/whole-wheat-lachha-paratha",
  },
  {
    name: "Homestyle Whole Wheat Paratha",
    description: "100% whole wheat, triangular parathas with no preservatives or additives.",
    image: "/brand/products/3d-packs/homestyle-paratha.png",
    href: "/our-food/homestyle-whole-wheat-paratha",
  },
  {
    name: "Whole Wheat Chapati",
    description: "Soft, fresh chapatis, ready in under a minute — no kneading required.",
    image: "/brand/products/3d-packs/whole-wheat-chapati.png",
    href: "/our-food/whole-wheat-chapati",
  },
  {
    name: "Soft & Creamy Paneer",
    description: "Milky chunks of healthy goodness, made with pure milk and lemon.",
    image: "/brand/products/3d-packs/paneer.png",
    href: "/our-food/soft-creamy-paneer",
  },
  {
    name: "Freshly Frozen Fruit Pulp",
    description: "Real fruit, freshly frozen — mango, tender coconut, chickoo and pineapple.",
    image: "/brand/products/3d-packs/frozen-fruit-pulp-range.png",
    href: "/our-food/frozen-fruit-pulp",
  },
  {
    name: "Frozen Parathas",
    description: "Soft, loaded and irresistibly delicious — aloo, onion and paneer.",
    image: "/brand/products/3d-packs/stuffed-paratha-range.png",
    href: "/our-food/frozen-parathas",
  },
];

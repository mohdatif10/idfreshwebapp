import type { NavItem } from "@/lib/types";
import { OUR_FOOD_CATEGORIES } from "@/data/our-food-categories";

// Mirrors "iD Fresh Website Site Map.pdf": Home / Our Food / Recipes / Corporate
// Page / TransparenSee, each with the site map's sub-items as dropdown children
// (desktop) / expandable sections (mobile drawer). Shared by Header and the
// mobile bottom tab bar (which only uses the top level — no dropdowns on a tab bar).
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  {
    label: "Our Food",
    href: "/our-food",
    icon: "shopping-bag",
    children: OUR_FOOD_CATEGORIES.map((category) => ({
      label: category.label,
      href: `/our-food/${category.slug}`,
    })),
  },
  { label: "Recipes", href: "/recipes", icon: "soup" },
  {
    label: "Corporate Page",
    href: "/corporate",
    icon: "building-2",
    children: [
      { label: "About Us & iD DNA", href: "/corporate/about-us" },
      { label: "Our Team", href: "/corporate/our-team" },
      { label: "Media", href: "/corporate/media" },
      { label: "Careers / Join Our Team", href: "/careers" },
      { label: "Corporate Matters", href: "/corporate/corporate-matters" },
      { label: "Terms, Privacy & Disclaimer", href: "/corporate/legal" },
      { label: "iD Kitchens / Food Map", href: "/foodmap" },
    ],
  },
  { label: "TransparenSee", href: "/transparensee", icon: "eye" },
];

// Curated subset for the mobile bottom tab bar — a full 5-item nav with two
// dropdown-bearing sections doesn't work as icon tabs, so this trims to the
// most-used destinations; the full tree above is still reachable via the
// hamburger drawer on every screen size.
export const BOTTOM_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Our Food", href: "/our-food", icon: "shopping-bag" },
  { label: "Recipes", href: "/recipes", icon: "soup" },
  { label: "Corporate", href: "/corporate", icon: "building-2" },
  { label: "TransparenSee", href: "/transparensee", icon: "eye" },
];

export const CAREERS_NAV: NavItem = {
  label: "Careers",
  href: "/careers",
  icon: "briefcase",
};

export const FOOTER_LINKS = {
  company: [
    { label: "About Us & iD DNA", href: "/corporate/about-us" },
    { label: "Recipes", href: "/recipes" },
    { label: "What's New", href: "/our-food/whats-new" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Our Food", href: "/our-food" },
    { label: "TransparenSee", href: "/transparensee" },
    { label: "Complaint & Feedback", href: "/complaint-feedback" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "X", href: "https://x.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
] as const;

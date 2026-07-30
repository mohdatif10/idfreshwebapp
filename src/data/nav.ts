import type { NavItem } from "@/lib/types";

// Shared across the desktop header, mobile drawer, and mobile bottom tab bar.
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Recipes", href: "/recipes", icon: "soup" },
  { label: "Products", href: "/products", icon: "shopping-bag" },
  { label: "What's New", href: "/whats-new", icon: "newspaper" },
  { label: "Account", href: "/account", icon: "user" },
];

export const CAREERS_NAV: NavItem = {
  label: "Careers",
  href: "/careers",
  icon: "briefcase",
};

export const FOOTER_LINKS = {
  company: [
    { label: "About iD Fresh", href: "/#our-story" },
    { label: "Recipes", href: "/recipes" },
    { label: "Newsroom", href: "/whats-new" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Our Foods", href: "/products" },
    { label: "TransparenSee", href: "/#promise" },
    { label: "Sustainability", href: "/#promise" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "X", href: "https://x.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
] as const;

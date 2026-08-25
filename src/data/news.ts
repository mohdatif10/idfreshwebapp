import type { NewsPost } from "@/lib/types";

export const NEWS_POSTS: NewsPost[] = [
  {
    id: "n1",
    tag: "LATEST · JUN 24",
    date: "2026-06-24",
    title: "We opened our factory doors to 6 credible experts",
    highlight: "factory doors",
    href: "/whats-new/factory-doors",
  },
  {
    id: "n2",
    tag: "JUN 02",
    date: "2026-06-02",
    title: "iD enters the protein category, zero shortcuts",
    highlight: "protein category",
    href: "/whats-new/protein-category",
  },
  {
    id: "n3",
    tag: "MAY 18",
    date: "2026-05-18",
    title: "45+ cities are now waking up fresh to iD",
    highlight: "45+ cities",
    href: "/whats-new/45-cities",
  },
];

// Exact copy from the Figma spec: "factory doors open ✦ 45+ cities ✦ 100% whey protein ✦"
export const NEWS_TICKER = ["FACTORY DOORS OPEN", "45+ CITIES", "100% WHEY PROTEIN"];

import type { CreatorPost, PlaceholderTone } from "@/lib/types";

// Real self-hosted video snippets for the /recipes page's three top rails —
// same card/lightbox treatment as the home page's iD Creator Collective, plus
// a full-length `fullVideo` (with real audio) that plays in the lightbox
// instead of just looping the short muted card teaser bigger. Sourced from
// the user's own "All iD Videos" export (2026-09-24): iD's own campaign
// archive, real creator collabs, and a generic trending-recipe library. 10 of
// each category, picked for variety rather than showing all ~60-75 available
// per folder.

// iD's own Instagram campaign archive has no caption metadata in the source
// export — titles below are transcribed directly from on-screen text/speech
// in each clip (watched every one rather than leave them numbered).
const CAMPAIGN_SOURCE: { slug: string; title: string; emoji: string; tone: PlaceholderTone }[] = [
  { slug: "campaign-1", title: "Fresh off the tawa", emoji: "🍽️", tone: "moss" },
  { slug: "campaign-2", title: "A little snack break", emoji: "🍌", tone: "clay" },
  { slug: "campaign-3", title: "You CAN'T resist it", emoji: "☕", tone: "amber" },
  { slug: "campaign-4", title: "A day in the life", emoji: "🏥", tone: "teal" },
  { slug: "campaign-5", title: "Meet Vidhi Doshi", emoji: "🙋‍♀️", tone: "lime" },
  { slug: "campaign-6", title: "Meet Ambica Selvam", emoji: "🙋‍♀️", tone: "sand" },
  { slug: "campaign-7", title: "Fresh, right on your windowsill", emoji: "🪟", tone: "moss" },
  { slug: "campaign-8", title: "Cook With Love", emoji: "👨‍🍳", tone: "clay" },
  { slug: "campaign-9", title: "A promise we kept", emoji: "🤝", tone: "amber" },
  { slug: "campaign-10", title: "The story of South India", emoji: "🗺️", tone: "teal" },
];

export const CAMPAIGN_VIDEOS: CreatorPost[] = CAMPAIGN_SOURCE.map(({ slug, title, emoji, tone }) => ({
  id: slug,
  creatorName: "iD Fresh",
  metricLabel: title,
  emoji,
  tone,
  video: `/brand/videos/recipes/campaign/${slug}.mp4`,
  image: `/brand/videos/recipes/campaign/${slug}.jpg`,
  fullVideo: `/brand/videos/recipes/campaign/full/${slug}-full.mp4`,
}));

const CREATOR_RECIPE_SOURCE: { slug: string; creatorName: string; metricLabel: string; emoji: string; tone: PlaceholderTone }[] = [
  { slug: "chefkunal", creatorName: "Chef Kunal", metricLabel: "Chef Kunal's iD recipe", emoji: "👨‍🍳", tone: "amber" },
  { slug: "chitwangarg", creatorName: "Chitwan Garg", metricLabel: "Nutrition Coach", emoji: "🥗", tone: "moss" },
  { slug: "dr-manan-vora", creatorName: "Dr. Manan Vora", metricLabel: "Orthopaedic Surgeon & Health Educator", emoji: "🩺", tone: "teal" },
  { slug: "leema-mahajan", creatorName: "Leema Mahajan", metricLabel: "Nutritionist", emoji: "🍽️", tone: "clay" },
  { slug: "meghna-kamdar", creatorName: "Meghna Kamdar", metricLabel: "Chef (Meghna's Food Magic)", emoji: "🍳", tone: "lime" },
  { slug: "masterchefmom", creatorName: "Masterchefmom", metricLabel: "Home chef & recipe creator", emoji: "👩‍🍳", tone: "sand" },
  { slug: "homecookingshow", creatorName: "Home Cooking Show", metricLabel: "Recipe creator", emoji: "🍲", tone: "amber" },
  { slug: "golgappa-girl", creatorName: "Golgappa Girl", metricLabel: "Food creator", emoji: "🌶️", tone: "moss" },
  { slug: "brown-chef-india", creatorName: "Brown Chef India", metricLabel: "Food creator", emoji: "🍛", tone: "teal" },
  { slug: "cnbctv18-india", creatorName: "CNBC TV18", metricLabel: "Business & lifestyle coverage", emoji: "📺", tone: "clay" },
];

export const CREATOR_RECIPE_VIDEOS: CreatorPost[] = CREATOR_RECIPE_SOURCE.map(({ slug, creatorName, metricLabel, emoji, tone }) => ({
  id: `creator-${slug}`,
  creatorName,
  metricLabel,
  emoji,
  tone,
  video: `/brand/videos/recipes/creator/${slug}.mp4`,
  image: `/brand/videos/recipes/creator/${slug}.jpg`,
  fullVideo: `/brand/videos/recipes/creator/full/${slug}-full.mp4`,
}));

const TRENDING_RECIPE_SOURCE: { slug: string; title: string; emoji: string; tone: PlaceholderTone }[] = [
  { slug: "chapati-recipe", title: "Chapati Recipe", emoji: "🫓", tone: "amber" },
  { slug: "chilli-parotha-recipe", title: "Chilli Parotha Recipe", emoji: "🌶️", tone: "clay" },
  { slug: "dosa-recipe", title: "Dosa Recipe", emoji: "🥞", tone: "lime" },
  { slug: "idly-recipe", title: "Idly Recipe", emoji: "⚪", tone: "moss" },
  { slug: "filter-coffee-recipe", title: "Filter Coffee Recipe", emoji: "☕", tone: "sand" },
  { slug: "sambar-recipe", title: "Sambar Recipe", emoji: "🍛", tone: "teal" },
  { slug: "paneer-recipe", title: "Paneer Recipe", emoji: "🧀", tone: "amber" },
  { slug: "uttapam", title: "Uttapam", emoji: "🍕", tone: "clay" },
  { slug: "dhokla", title: "Dhokla", emoji: "🟡", tone: "lime" },
  { slug: "malabar-recipe", title: "Malabar Recipe", emoji: "🫓", tone: "moss" },
];

export const TRENDING_RECIPE_VIDEOS: CreatorPost[] = TRENDING_RECIPE_SOURCE.map(({ slug, title, emoji, tone }) => ({
  id: `trending-${slug}`,
  creatorName: "iD Fresh",
  metricLabel: title,
  emoji,
  tone,
  video: `/brand/videos/recipes/trending/${slug}.mp4`,
  image: `/brand/videos/recipes/trending/${slug}.jpg`,
  fullVideo: `/brand/videos/recipes/trending/full/${slug}-full.mp4`,
}));

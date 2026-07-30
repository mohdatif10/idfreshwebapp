import type { CreatorPost } from "@/lib/types";

// The iD Creator Collective Instagram embeds. The three real posts already have
// captions/stats and the Instagram badge baked into the source image.
export const CREATOR_POSTS: CreatorPost[] = [
  {
    id: "c1",
    creatorName: "@kitchenwithkavya",
    metricLabel: "83.5k followers",
    emoji: "🍳",
    tone: "moss",
    image: "/brand/creators/creator-1-baking.png",
  },
  {
    id: "c2",
    creatorName: "iD Fresh",
    metricLabel: "32M views",
    emoji: "☕",
    tone: "clay",
    image: "/brand/creators/creator-2-coffee.png",
  },
  {
    id: "c3",
    creatorName: "@dosadiaries",
    metricLabel: "Sir, do you...?",
    emoji: "🥞",
    tone: "amber",
    image: "/brand/creators/creator-3-grocery.png",
  },
];

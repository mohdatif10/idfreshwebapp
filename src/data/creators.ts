import type { CreatorPost } from "@/lib/types";

// The iD Creator Collective section. These three use static photos today.
// To upgrade any of them to a self-hosted autoplay video (see CreatorVideoCard),
// add a `video: "/brand/creators/<file>.mp4"` field once a real, licensed copy
// of the clip is available — `image` then doubles as the video's poster frame.
// Never point `video` at a live Instagram URL; only a locally-hosted file.
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

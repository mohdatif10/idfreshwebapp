import type { CreatorPost } from "@/lib/types";

// The iD Creator Collective section. Three self-hosted, muted-autoplay video
// clips from iD Fresh's own Instagram account (trimmed to short ~9s teasers,
// no audio track, downscaled to card size — see public/brand/videos/ and
// scripts used to produce them). Labeled honestly as "iD Fresh" since that's
// the real source — no fabricated creator handles or invented follower/view
// counts next to real content.
export const CREATOR_POSTS: CreatorPost[] = [
  {
    id: "c1",
    creatorName: "iD Fresh",
    metricLabel: "Chana Achari Wrap",
    emoji: "🌯",
    tone: "moss",
    video: "/brand/videos/chana-achari-wrap.mp4",
    image: "/brand/videos/chana-achari-wrap.jpg",
  },
  {
    id: "c2",
    creatorName: "iD Fresh",
    metricLabel: "Coffee meets jaggery",
    emoji: "☕",
    tone: "clay",
    video: "/brand/videos/coffee-jaggery.mp4",
    image: "/brand/videos/coffee-jaggery.jpg",
  },
  {
    id: "c3",
    creatorName: "iD Fresh",
    metricLabel: "Jini Dosa nights",
    emoji: "🥞",
    tone: "amber",
    video: "/brand/videos/jini-dosa.mp4",
    image: "/brand/videos/jini-dosa.jpg",
  },
];

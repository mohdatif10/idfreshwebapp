import type { CreatorPost } from "@/lib/types";

// The iD Creator Collective section. Self-hosted, muted-autoplay video clips
// from iD Fresh's own Instagram account (trimmed to short ~9s teasers, no
// audio track, downscaled to card size — see public/brand/videos/ and
// scripts used to produce them). Clicking a card opens the same clip full
// size in VideoLightbox, with sound and native controls. Labeled honestly as
// "iD Fresh" since that's the real source — no fabricated creator handles or
// invented follower/view counts next to real content.
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
  {
    id: "c4",
    creatorName: "iD Fresh",
    metricLabel: "Cheesy & Spicy Paratha Taco",
    emoji: "🌮",
    tone: "lime",
    video: "/brand/videos/cheesy-paratha-taco.mp4",
    image: "/brand/videos/cheesy-paratha-taco.jpg",
  },
  {
    id: "c5",
    creatorName: "iD Fresh",
    metricLabel: "Idli-sambar ritual",
    emoji: "🥣",
    tone: "teal",
    video: "/brand/videos/idli-sambar-ritual.mp4",
    image: "/brand/videos/idli-sambar-ritual.jpg",
  },
  {
    id: "c6",
    creatorName: "iD Fresh",
    metricLabel: "Instant Dhokla hack",
    emoji: "🧁",
    tone: "sand",
    video: "/brand/videos/instant-dhokla-hack.mp4",
    image: "/brand/videos/instant-dhokla-hack.jpg",
  },
  {
    id: "c7",
    creatorName: "iD Fresh",
    metricLabel: "Kizhi Parota",
    emoji: "🌯",
    tone: "clay",
    video: "/brand/videos/kizhi-parota.mp4",
    image: "/brand/videos/kizhi-parota.jpg",
  },
  {
    id: "c8",
    creatorName: "iD Fresh",
    metricLabel: "Nool Parota",
    emoji: "🧵",
    tone: "moss",
    video: "/brand/videos/nool-parota.mp4",
    image: "/brand/videos/nool-parota.jpg",
  },
  {
    id: "c9",
    creatorName: "iD Fresh",
    metricLabel: "Parota Pizza",
    emoji: "🍕",
    tone: "amber",
    video: "/brand/videos/parota-pizza.mp4",
    image: "/brand/videos/parota-pizza.jpg",
  },
  {
    id: "c10",
    creatorName: "iD Fresh",
    metricLabel: "Peri-Peri Quesadilla",
    emoji: "🌶️",
    tone: "lime",
    video: "/brand/videos/peri-peri-quesadilla.mp4",
    image: "/brand/videos/peri-peri-quesadilla.jpg",
  },
  {
    id: "c11",
    creatorName: "iD Fresh",
    metricLabel: "Quick breakfast fix",
    emoji: "🍳",
    tone: "teal",
    video: "/brand/videos/quick-breakfast.mp4",
    image: "/brand/videos/quick-breakfast.jpg",
  },
];

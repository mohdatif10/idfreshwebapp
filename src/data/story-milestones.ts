export interface StoryMilestone {
  year: number;
  title: string;
  description: string;
  image?: string;
}

// The Our Story timeline slider (OurStory.tsx) shows the most recent milestone
// at or before whatever year the slider is dragged to — so with only one real
// milestone today, every year 2005-2025 shows this same chapter. Add more
// entries here as real copy/photos for later years are supplied; the slider
// mechanism already spans the full range and needs no other changes.
export const STORY_MILESTONES: StoryMilestone[] = [
  {
    year: 2005,
    title: "Once upon a time in Bangalore…",
    description:
      "Five cousins, a 50 sq ft kitchen in Tippasandra, and one stubborn idea — batter made the way home makes it.",
    image: "/brand/misc/id-shop-illustration.png",
  },
];

export const STORY_TIMELINE_START = 2005;
export const STORY_TIMELINE_END = 2025;

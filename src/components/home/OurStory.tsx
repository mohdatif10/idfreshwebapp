import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StoryTimelineSlider } from "@/components/story/StoryTimelineSlider";

export function OurStory() {
  return (
    <section id="our-story" data-scroll-target className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionLabel tone="teal">Our Story</SectionLabel>
        <StoryTimelineSlider showReadMoreLink />
      </Container>
    </section>
  );
}

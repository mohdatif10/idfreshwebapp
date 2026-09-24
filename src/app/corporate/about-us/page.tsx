import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT_US_INTRO } from "@/data/story-milestones";
import { DNA_INTRO, DNA_PILLARS, EMPLOYEE_STORIES, LEADERSHIP_PRINCIPLES } from "@/data/dna";
import { StoryTimelineSlider } from "@/components/story/StoryTimelineSlider";
import { DnaPillarsGrid } from "@/components/corporate/DnaPillarsGrid";

export const metadata: Metadata = {
  title: "About Us & iD DNA | iD Fresh",
  description:
    "iD was founded in 2005 by 5 cousins with a 50 sq ft store and one big dream. Here's our story, from a Tippasandra kitchen to homes across India, UAE, US, UK, Oman and Saudi.",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="relative -mt-20 h-[24rem] overflow-hidden sm:-mt-24 sm:h-[28rem]">
        <Image
          src="/brand/misc/about-us-banner.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-900/75 via-brand-900/10 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-10 pt-24 sm:pb-14 sm:pt-28">
          <SectionLabel tone="lime">About Us</SectionLabel>
          <h1 className="mt-2 max-w-xl font-heading text-3xl font-extrabold text-cream sm:text-5xl">
            What&rsquo;s food without a little love and a lot of goodness?
          </h1>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="max-w-2xl">
          <p className="text-center text-lg leading-relaxed text-inkgray">{ABOUT_US_INTRO}</p>
        </Container>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <SectionLabel tone="teal">The iD Timeline</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
              From 2005 to now, here&rsquo;s our story of how we grew
            </h2>
            <p className="mt-3 font-accent italic text-lg text-brand-700">
              Thanks to all the love we received.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-left">
            <StoryTimelineSlider />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <SectionLabel tone="teal">iD DNA</SectionLabel>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Our DNA is built around four key pillars
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-inkgray">{DNA_INTRO}</p>
        </Container>

        <Container className="mt-10 max-w-4xl">
          <DnaPillarsGrid pillars={DNA_PILLARS} />
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-900 py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/brand/corporate/dna/hero-made-with-love.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative max-w-4xl text-center">
          <SectionLabel tone="lime">Who thrives here</SectionLabel>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-cream sm:text-4xl">
            Leadership Principles: The Key Ingredients to Success at iD
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
            {LEADERSHIP_PRINCIPLES.map((principle) => (
              <div key={principle.title} className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <div className="relative mx-auto h-12 w-12">
                  <Image src={principle.icon} alt="" aria-hidden fill sizes="3rem" className="object-contain" />
                </div>
                <p className="mt-3 font-heading text-sm font-bold text-cream">{principle.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <Container>
          <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-3xl">
            <Image
              src="/brand/corporate/dna/dream-team.png"
              alt="The iD Dream Team, celebrating together"
              fill
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 text-center">
            <SectionLabel tone="teal">Real Faces, Real Stories</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
              Straight from the people who make iD, iD
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EMPLOYEE_STORIES.map((story) => (
              <div key={story.name} className="flex gap-4 rounded-2xl bg-white p-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-brand-50">
                  <Image src={story.photo} alt={story.name} fill sizes="3.5rem" className="object-cover" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-brand-900">{story.name}</p>
                  <p className="text-xs text-brand-500">{story.team}</p>
                  <p className="mt-2 text-sm leading-relaxed text-inkgray">&ldquo;{story.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

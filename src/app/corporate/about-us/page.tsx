import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ABOUT_US_INTRO, STORY_MILESTONES } from "@/data/story-milestones";

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

          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-10">
            {STORY_MILESTONES.map((milestone) => (
              <div key={milestone.year} className="flex flex-col gap-5 sm:flex-row sm:items-start">
                {milestone.image && (
                  <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-2xl sm:mx-0">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      sizes="10rem"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-center sm:text-left">
                  <p className="font-mono text-sm font-bold text-brand-500">{milestone.year}</p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-brand-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-inkgray">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

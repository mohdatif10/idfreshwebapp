"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { STORY_MILESTONES, STORY_TIMELINE_END, STORY_TIMELINE_START } from "@/data/story-milestones";

export function OurStory() {
  const [activeYear, setActiveYear] = useState(STORY_TIMELINE_START);

  // Show the most recent milestone at or before the dragged-to year — with
  // only one real milestone today that's always 2005's chapter, but this
  // makes the slider correctly "fill in" as more years get real content.
  const activeMilestone = useMemo(() => {
    const sorted = [...STORY_MILESTONES].sort((a, b) => a.year - b.year);
    return [...sorted].reverse().find((m) => m.year <= activeYear) ?? sorted[0];
  }, [activeYear]);

  const fillPercent =
    ((activeYear - STORY_TIMELINE_START) / (STORY_TIMELINE_END - STORY_TIMELINE_START)) * 100;

  return (
    <section id="our-story" data-scroll-target className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionLabel tone="teal">Our Story</SectionLabel>
        <h2 className="mt-2 font-heading text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
          {activeMilestone.title}
        </h2>
        <p className="mt-5 text-lg text-inkgray">
          {activeMilestone.description}{" "}
          <a href="#" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900">
            read the full story
          </a>
        </p>

        {activeMilestone.image && (
          <div className="relative mx-auto mt-12 h-56 w-56 sm:h-64 sm:w-64">
            <Image
              src={activeMilestone.image}
              alt="Illustration of the original iD Fresh shop"
              fill
              sizes="16rem"
              className="object-contain"
            />
          </div>
        )}

        <div className="mt-14">
          <div className="flex items-center justify-between font-mono text-sm font-semibold text-brand-700">
            <span>{STORY_TIMELINE_START}</span>
            <span className="text-base font-bold text-brand-900">{activeYear}</span>
            <span>{STORY_TIMELINE_END}</span>
          </div>
          <input
            type="range"
            min={STORY_TIMELINE_START}
            max={STORY_TIMELINE_END}
            step={1}
            value={activeYear}
            onChange={(event) => setActiveYear(Number(event.target.value))}
            aria-label="Story timeline year"
            className="mt-3 h-3 w-full cursor-pointer appearance-none rounded-full
              [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:cursor-pointer
              [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2
              [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-brand-600
              [&::-moz-range-thumb]:shadow-md
              [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6
              [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2
              [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-brand-600
              [&::-webkit-slider-thumb]:shadow-md"
            style={{
              background: `linear-gradient(to right, var(--color-teal-500) ${fillPercent}%, var(--color-sand) ${fillPercent}%)`,
            }}
          />
        </div>
      </Container>
    </section>
  );
}

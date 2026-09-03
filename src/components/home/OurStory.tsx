"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { STORY_MILESTONES, STORY_TIMELINE_END, STORY_TIMELINE_START } from "@/data/story-milestones";

// How much accumulated wheel delta counts as "one notch" — tuned so a single
// mouse-wheel click or one trackpad-scroll gesture reliably moves exactly one
// year, instead of firing many tiny native `input` events per physical scroll.
const WHEEL_STEP_THRESHOLD = 100;

export function OurStory() {
  const [activeYear, setActiveYear] = useState(STORY_TIMELINE_START);
  const sliderRef = useRef<HTMLInputElement>(null);
  const wheelAccumRef = useRef(0);

  // Native range inputs don't respond to the mouse wheel/trackpad at all by
  // default — scrolling over one just scrolls the page instead, which read as
  // "sometimes I scroll and nothing happens." A non-passive wheel listener
  // (React's onWheel can't reliably preventDefault) lets scrolling over the
  // slider step the year by exactly one instead, and stops the page from
  // scrolling at the same time.
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      wheelAccumRef.current += delta;

      while (Math.abs(wheelAccumRef.current) >= WHEEL_STEP_THRESHOLD) {
        const direction = wheelAccumRef.current > 0 ? 1 : -1;
        setActiveYear((year) =>
          Math.min(STORY_TIMELINE_END, Math.max(STORY_TIMELINE_START, year + direction))
        );
        wheelAccumRef.current -= direction * WHEEL_STEP_THRESHOLD;
      }
    }

    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => slider.removeEventListener("wheel", handleWheel);
  }, []);

  // Show the most recent milestone at or before the dragged-to year, so
  // dragging past a year with no dedicated entry (e.g. 2009, 2011) keeps
  // showing the last real chapter rather than going blank.
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
        <h2 className="mt-2 min-h-[5rem] font-heading text-4xl font-extrabold leading-tight text-brand-900 sm:min-h-[6.5rem] sm:text-5xl">
          {activeMilestone.title}
        </h2>
        <p className="mt-5 line-clamp-3 min-h-[5.25rem] text-lg text-inkgray">
          {activeMilestone.description}
        </p>
        <a
          href="/corporate/about-us"
          className="mt-1 inline-block font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
        >
          read the full story
        </a>

        {activeMilestone.image && (
          <div className="relative mx-auto mt-12 h-56 w-56 sm:h-64 sm:w-64">
            <Image
              src={activeMilestone.image}
              alt={activeMilestone.title}
              fill
              sizes="16rem"
              className="object-contain"
            />
          </div>
        )}

        <div className="mt-14">
          {/* Floats directly above the thumb instead of sitting fixed in the
              center — a center-fixed label reads as "always halfway between
              2005 and 2025" regardless of where the thumb actually is, which
              is misleading. Clamped 4-96% so the label itself doesn't clip
              past the track's edges at the very first/last year. */}
          <div className="relative h-6">
            <span
              className="absolute -translate-x-1/2 whitespace-nowrap font-mono text-base font-bold text-brand-900 transition-[left] duration-100"
              style={{ left: `${Math.min(96, Math.max(4, fillPercent))}%` }}
            >
              {activeYear}
            </span>
          </div>
          <input
            ref={sliderRef}
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
          <div className="mt-2 flex items-center justify-between font-mono text-xs font-semibold text-brand-700/70">
            <span>{STORY_TIMELINE_START}</span>
            <span>{STORY_TIMELINE_END}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

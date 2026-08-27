"use client";

import Image from "next/image";
import { ArrowRight, BicepsFlexed, Layers3, Search, TimerReset, Utensils } from "lucide-react";
import type { FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { HERO_FILTERS } from "@/data/recipes";

const CHIP_ICONS = {
  "circle-dot": Utensils,
  hand: BicepsFlexed,
  timer: TimerReset,
  layers: Layers3,
} as const;

interface HeroProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
  activeFilter: string | null;
  onToggleFilter: (label: string) => void;
}

export function Hero({ query, onQueryChange, onSubmit, activeFilter, onToggleFilter }: HeroProps) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <section className="relative -mt-20 flex min-h-[34rem] items-center overflow-hidden bg-brand-900 py-24 sm:-mt-24 sm:min-h-[42rem] sm:py-28">
      {/* Real iD Fresh photography: paneer dosa wrap on teal tile with palm leaf.
          Two purpose-shot crops — portrait for narrow mobile viewports, landscape
          for wide desktop ones — swapped by breakpoint rather than stretching one
          crop to fit both (which is what caused the earlier edge-banding bug). */}
      <Image
        src="/brand/misc/home-hero-mobile.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover sm:hidden"
      />
      <Image
        src="/brand/misc/home-hero-desktop.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="hidden object-cover sm:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-brand-900/85 via-brand-900/55 to-brand-900/90"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-[-0.06em] text-cream sm:text-5xl">
            what do you want to cook{" "}
            <span className="font-accent italic font-medium text-cream">today?</span>
          </h1>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
            <div className="flex items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-xl">
              <Search className="h-5 w-5 shrink-0 text-brand-500" />
              <input
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                type="text"
                placeholder="paneer tikka dosa, maybe?"
                className="w-full bg-transparent font-accent italic text-brand-900 placeholder:text-brand-900/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search recipes"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-400 text-brand-900 transition-colors hover:bg-lime-300"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {HERO_FILTERS.map((chip) => {
              const Icon = CHIP_ICONS[chip.icon];
              const isActive = activeFilter === chip.label;
              return (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => onToggleFilter(chip.label)}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 px-3 py-4 font-heading text-sm font-bold transition-colors ${
                    isActive
                      ? "border-lime-400 bg-lime-400 text-brand-900"
                      : "border-transparent bg-white text-brand-900 hover:border-lime-300"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-brand-900" : "text-brand-500"}`} />
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

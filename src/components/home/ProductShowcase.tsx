"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HOME_CAROUSEL_ITEMS } from "@/data/home-carousel";

const SLOT_WIDTH = 320;
const N = HOME_CAROUSEL_ITEMS.length;
// Three back-to-back copies of the list — a real, continuous flex row (not
// an abstract "ghost" layer) that we slide with one CSS transform. Wrapping
// past either end just keeps sliding into the next copy; once the active
// slot drifts into the first or third copy we silently re-anchor the track
// back into the middle copy (transition disabled for that one frame), so
// scrolling in one direction forever never runs out of copies to slide into.
const TRIPLED = [...HOME_CAROUSEL_ITEMS, ...HOME_CAROUSEL_ITEMS, ...HOME_CAROUSEL_ITEMS];

function slotStyle(offset: number) {
  const abs = Math.abs(offset);
  // Focused item at 2x its base box size (via scale, not a bigger box —
  // keeps the neighbours' own sizing untouched); everything else unchanged.
  const scale = abs === 0 ? 2 : abs === 1 ? 0.55 : abs === 2 ? 0.4 : 0.3;
  const opacity = abs === 0 ? 1 : abs === 1 ? 0.6 : abs === 2 ? 0.35 : abs === 3 ? 0.18 : 0;
  return { scale, opacity };
}

export function ProductShowcase() {
  // Position within TRIPLED — starts in the middle copy (index N + 0).
  const [trackIndex, setTrackIndex] = useState(N);
  const [instant, setInstant] = useState(false);
  const active = TRIPLED[trackIndex];

  function go(direction: 1 | -1) {
    setTrackIndex((i) => i + direction);
  }

  // Once the active slot drifts into the first or third copy, jump it back
  // into the middle copy with the transition switched off — same content at
  // the reset position, so the jump itself is invisible.
  useEffect(() => {
    if (trackIndex < N * 0.5 || trackIndex >= N * 2.5) {
      const id = setTimeout(() => {
        setInstant(true);
        setTrackIndex((i) => (i < N * 0.5 ? i + N : i - N));
      }, 0);
      return () => clearTimeout(id);
    }
  }, [trackIndex]);

  // Re-enable the transition only after the transition-less jump above has
  // actually painted — a single rAF can still land before that paint, so
  // this waits a full frame first, then flips it back on the one after.
  useEffect(() => {
    if (!instant) return;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setInstant(false));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [instant]);

  return (
    <section id="products" data-scroll-target className="overflow-hidden py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <h2
            className="font-heading text-4xl font-extrabold text-brand-500 sm:text-5xl"
            style={{ textShadow: "2px 0 0 #B6D946" }}
          >
            Packed with goodness
          </h2>
          <p className="mt-2 font-accent italic text-xl text-inkgray sm:text-2xl">
            discover more about our fresh food
          </p>
        </div>

        <div className="relative mt-10 h-72 sm:h-[32rem]">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous product"
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition-colors hover:bg-brand-800 sm:left-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">
            <div
              className={`relative left-1/2 flex items-center ${instant ? "" : "transition-transform duration-500 ease-out"}`}
              style={{
                transform: `translateX(${-trackIndex * SLOT_WIDTH - SLOT_WIDTH / 2}px)`,
              }}
            >
              {TRIPLED.map((item, i) => {
                const offset = i - trackIndex;
                const { scale, opacity } = slotStyle(offset);
                const isActive = offset === 0;
                return (
                  <div
                    key={`${item.href}-${i}`}
                    className="flex shrink-0 items-center justify-center"
                    style={{ width: SLOT_WIDTH }}
                  >
                    <Link
                      href={item.href}
                      className="pointer-events-auto relative h-32 w-32 transition-transform duration-500 ease-out sm:h-56 sm:w-56"
                      style={{ transform: `scale(${scale})`, opacity }}
                      tabIndex={isActive ? 0 : -1}
                      aria-hidden={!isActive}
                    >
                      <Image
                        src={item.image}
                        alt={isActive ? item.name : ""}
                        fill
                        sizes="14rem"
                        className="object-contain drop-shadow-xl"
                        priority={isActive}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next product"
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition-colors hover:bg-brand-800 sm:right-2"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-auto -mt-2 max-w-xs text-center sm:max-w-sm">
          <h3 className="font-heading text-base font-bold text-brand-900 sm:text-xl">{active.name}</h3>
          <p className="mt-1 text-xs text-inkgray sm:text-sm">{active.description}</p>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/our-food" variant="primary" className="bg-brand-600 text-lime-300 hover:bg-brand-700">
            Explore all Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const FEATURED_CLIP = {
  title: "Malabar Parota, turned into a pizza base",
  video: "/brand/videos/parota-pizza.mp4",
  poster: "/brand/videos/parota-pizza.jpg",
};

/** Same lazy-load-then-autoplay-in-view pattern as CreatorVideoCard (see there
 * for why) — kept light for loading time, with a real mute toggle since this
 * is a single featured clip rather than a muted background rail. */
export function FeaturedVideo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || shouldLoad) return;

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    preloadObserver.observe(wrapper);
    return () => preloadObserver.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [shouldLoad]);

  return (
    <section ref={wrapperRef} className="relative h-56 overflow-hidden sm:h-72">
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={FEATURED_CLIP.video}
          poster={FEATURED_CLIP.poster}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          aria-label={FEATURED_CLIP.title}
          className="h-full w-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- decorative poster before the section is near view
        <img src={FEATURED_CLIP.poster} alt="" aria-hidden className="h-full w-full object-cover" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/60 via-black/10 to-transparent" />
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <p className="max-w-[14rem] font-heading text-lg text-lime-400 sm:max-w-xs sm:text-xl">
          {FEATURED_CLIP.title}
        </p>
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="mt-4 flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2.5 font-heading text-sm font-bold text-brand-900 transition-colors hover:bg-white"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          {muted ? "unmute" : "mute"}
        </button>
      </div>
    </section>
  );
}

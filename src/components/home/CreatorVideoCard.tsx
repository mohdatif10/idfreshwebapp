"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import type { CreatorPost } from "@/lib/types";

/**
 * Self-hosted creator video card — kept deliberately light for loading time
 * and engagement, not just visuals:
 *  - No network request at all until the card scrolls near the viewport (the
 *    poster JPG shows until then) — `shouldLoad` gates whether `src` is even
 *    attached to the <video> tag, so far-off cards cost nothing on page load.
 *  - Once loaded, it only plays while meaningfully in view (a second,
 *    stricter IntersectionObserver on the video element itself) and pauses
 *    the instant it scrolls away — never more than one or two clips playing
 *    at once, whatever the rail length.
 *  - Clips themselves are short (~9s), muted, and audio-stripped at encode
 *    time (see public/brand/videos/), so even a fully "in view" clip is a
 *    small, cheap loop rather than a long download.
 * The Instagram link, when present, is a small secondary icon — never the
 * card's primary click target — so viewers stay on-site by default.
 */
export function CreatorVideoCard({ post }: { post: CreatorPost }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

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
          video.play().catch(() => {
            // Autoplay can be blocked by the browser in some contexts — fine,
            // the poster frame still shows and playback resumes on next intersect.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={wrapperRef} className="relative aspect-9/16 w-full overflow-hidden rounded-3xl bg-brand-900">
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={post.video}
          poster={post.image}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${post.creatorName} — ${post.metricLabel}`}
          className="h-full w-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- decorative poster-only placeholder before the card is near view; next/image adds no benefit here since the same file becomes the <video poster> moments later
        <img
          src={post.image}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
      )}
      <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 font-heading text-xs font-bold text-white/90 backdrop-blur-sm">
        {post.creatorName}
      </span>
      {post.instagramUrl && (
        <a
          href={post.instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${post.creatorName}'s post on Instagram`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
      <span className="absolute bottom-3 left-3 rounded-full bg-black/30 px-2.5 py-1 font-heading text-xs font-semibold text-white/90 backdrop-blur-sm">
        {post.metricLabel}
      </span>
    </div>
  );
}

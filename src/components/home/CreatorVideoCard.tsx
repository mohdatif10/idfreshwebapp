"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import type { CreatorPost } from "@/lib/types";

/**
 * Self-hosted creator video card — plays muted+looped only while scrolled into
 * view (saves bandwidth/battery vs. autoplaying every card at once), matching
 * the horizontal-scroll "reel rail" pattern used across the site. The
 * Instagram link, when present, is a small secondary icon — never the card's
 * primary click target — so viewers stay on-site by default.
 */
export function CreatorVideoCard({ post }: { post: CreatorPost }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
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

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative aspect-9/16 w-full overflow-hidden rounded-3xl bg-brand-900">
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

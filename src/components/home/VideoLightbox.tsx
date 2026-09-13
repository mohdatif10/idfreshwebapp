"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { CreatorPost } from "@/lib/types";

/**
 * Fullscreen "bigger player" for a creator video — opened by clicking a card,
 * never autoplaying on its own. Mounts the <video> only while a post is
 * active and unmounts it on close, so nothing keeps decoding/buffering in the
 * background once the viewer is done (that's what keeps this from feeling
 * laggy next to the always-on card loops).
 */
export function VideoLightbox({ post, onClose }: { post: CreatorPost | null; onClose: () => void }) {
  useEffect(() => {
    if (!post) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [post, onClose]);

  if (!post || typeof document === "undefined") return null;

  return createPortal(
    <div
      // True edge-to-edge fullscreen on phones (no letterboxing around the
      // video, matching Reels/TikTok) — from the sm breakpoint up there's
      // enough surrounding space that an inset "theater" card reads better.
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black sm:bg-black/80 sm:p-4 sm:backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${post.creatorName} — ${post.metricLabel}`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="relative h-full w-full overflow-hidden bg-black shadow-2xl sm:aspect-9/16 sm:h-full sm:max-h-[85vh] sm:w-auto sm:max-w-full sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* key remounts the element on every open so a fresh <video> always starts
            from frame zero instead of resuming whatever the last post left behind */}
        <video
          key={post.id}
          src={post.video}
          poster={post.image}
          controls
          autoPlay
          loop
          playsInline
          className="h-full w-full object-cover sm:object-contain"
        />
      </div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 font-heading text-xs font-semibold text-white/90 backdrop-blur-sm">
        {post.creatorName} · {post.metricLabel}
      </p>
    </div>,
    document.body
  );
}

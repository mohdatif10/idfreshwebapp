"use client";

import { useRef } from "react";
import { CreatorVideoCard } from "@/components/home/CreatorVideoCard";
import { ScrollArrowButton } from "@/components/ui/ScrollArrowButton";
import { scrollTrackByCard } from "@/lib/scrollRail";
import type { CreatorPost } from "@/lib/types";

export function VideoRail({
  title,
  posts,
  onOpen,
}: {
  title: string;
  posts: CreatorPost[];
  onOpen: (post: CreatorPost) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  if (posts.length === 0) return null;

  return (
    <div>
      <h2 className="font-heading text-2xl font-extrabold text-brand-900 sm:text-3xl">{title}</h2>
      <div className="relative mt-5">
        <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {posts.map((post) => (
            <div key={post.id} className="w-40 shrink-0 snap-start sm:w-52">
              <CreatorVideoCard post={post} onOpen={() => onOpen(post)} />
            </div>
          ))}
        </div>
        {posts.length > 1 && (
          // top-[11.5rem] = half of a sm:w-52 card's own aspect-9/16 height (arrows
          // only ever show at md:+, where that size is already active) — the rail
          // has no separate title/time text below the card like RecipeCard does,
          // so this is the card's own vertical center, not an offset from it.
          <>
            <ScrollArrowButton
              direction="left"
              onClick={() => scrollTrackByCard(trackRef.current, -1)}
              className="absolute -left-3 top-[11.5rem] -translate-y-1/2"
            />
            <ScrollArrowButton
              direction="right"
              onClick={() => scrollTrackByCard(trackRef.current, 1)}
              className="absolute -right-3 top-[11.5rem] -translate-y-1/2"
            />
          </>
        )}
      </div>
    </div>
  );
}

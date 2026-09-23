"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { CreatorVideoCard } from "@/components/home/CreatorVideoCard";
import { VideoLightbox } from "@/components/home/VideoLightbox";
import { ScrollArrowButton } from "@/components/ui/ScrollArrowButton";
import { scrollTrackByCard } from "@/lib/scrollRail";
import { CREATOR_POSTS } from "@/data/creators";
import type { CreatorPost } from "@/lib/types";

export function CreatorCollective() {
  const [activePost, setActivePost] = useState<CreatorPost | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <h2 className="font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
          iD Creator Collective
        </h2>

        <div className="relative mt-6">
        <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
          {CREATOR_POSTS.map((post) => (
            <div key={post.id} className="w-44 shrink-0 snap-start text-center sm:w-52">
              {post.video ? (
                <CreatorVideoCard post={post} onOpen={() => setActivePost(post)} />
              ) : post.image ? (
                <div className="relative aspect-9/16 w-full overflow-hidden rounded-3xl">
                  <Image
                    src={post.image}
                    alt={`${post.creatorName} — ${post.metricLabel}`}
                    fill
                    sizes="(min-width: 640px) 13rem, 11rem"
                    className="object-cover"
                  />
                </div>
              ) : (
                <>
                  <div className="relative">
                    <PlaceholderImage
                      tone={post.tone}
                      emoji={post.emoji}
                      className="aspect-9/16 w-full rounded-3xl"
                      emojiClassName="text-6xl"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 font-heading text-xs font-bold text-white/90 backdrop-blur-sm">
                      {post.creatorName}
                    </span>
                    <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/80 bg-black/30 text-white backdrop-blur-sm">
                      <InstagramIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-3 font-heading text-base font-bold text-brand-900">
                    {post.metricLabel}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
          <ScrollArrowButton
            direction="left"
            onClick={() => scrollTrackByCard(trackRef.current, -1)}
            className="absolute -left-3 top-1/2 -translate-y-1/2"
          />
          <ScrollArrowButton
            direction="right"
            onClick={() => scrollTrackByCard(trackRef.current, 1)}
            className="absolute -right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </Container>

      <VideoLightbox post={activePost} onClose={() => setActivePost(null)} />
    </section>
  );
}

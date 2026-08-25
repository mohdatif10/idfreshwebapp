"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock3, Heart } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Recipe } from "@/lib/types";

export function RecipeCard({
  recipe,
  className = "w-56 sm:w-64",
  imageClassName = "h-56 sm:h-64",
}: {
  recipe: Recipe;
  className?: string;
  imageClassName?: string;
}) {
  const [favorited, setFavorited] = useState(false);

  return (
    <Link href={`/recipes/${recipe.slug}`} className={`group shrink-0 ${className}`}>
      <div className={`relative w-full overflow-hidden rounded-2xl ${imageClassName}`}>
        {recipe.image ? (
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(min-width: 640px) 16rem, 14rem"
            className="object-cover"
          />
        ) : (
          <PlaceholderImage
            tone={recipe.tone}
            emoji={recipe.emoji}
            className="h-full w-full"
            emojiClassName="text-6xl"
          />
        )}
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setFavorited((prev) => !prev);
          }}
          aria-label="Save recipe"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
        >
          <Heart className={`h-4 w-4 ${favorited ? "fill-lime-400 text-lime-400" : ""}`} />
        </button>
      </div>
      <h3 className="mt-3 font-heading text-lg font-bold text-brand-900 group-hover:text-brand-600">
        {recipe.title}
      </h3>
      <p className="mt-1 flex items-center gap-1.5 font-mono text-sm text-inkgray">
        <Clock3 className="h-3.5 w-3.5" />
        {recipe.minutes}m
      </p>
    </Link>
  );
}

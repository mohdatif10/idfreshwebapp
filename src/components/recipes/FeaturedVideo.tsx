import { Play } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function FeaturedVideo() {
  return (
    <section className="relative h-56 overflow-hidden sm:h-72">
      <PlaceholderImage
        tone="clay"
        emoji="🎥"
        className="h-full w-full"
        emojiClassName="text-6xl opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/10 to-transparent" />
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <p className="font-heading text-lg text-lime-400 sm:text-xl">
          The Golden Crispy Mysore Masala Dosa
        </p>
        <button
          type="button"
          className="mt-4 flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2.5 font-heading text-sm font-bold text-brand-900 transition-colors hover:bg-white"
        >
          <Play className="h-4 w-4 fill-brand-900" />
          play
        </button>
      </div>
    </section>
  );
}

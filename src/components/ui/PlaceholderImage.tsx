import type { PlaceholderTone } from "@/lib/types";

const TONE_GRADIENTS: Record<PlaceholderTone, string> = {
  lime: "from-lime-300 via-lime-400 to-teal-700",
  amber: "from-amber-200 via-orange-300 to-orange-700",
  teal: "from-teal-300 via-teal-500 to-teal-900",
  clay: "from-orange-200 via-rose-400 to-rose-800",
  sand: "from-amber-50 via-stone-200 to-stone-500",
  moss: "from-lime-200 via-green-500 to-teal-800",
};

interface PlaceholderImageProps {
  tone: PlaceholderTone;
  emoji: string;
  className?: string;
  emojiClassName?: string;
}

/**
 * Stand-in for real photography while brand assets aren't wired up yet.
 * Renders a brand-toned gradient with a centered emoji glyph so every
 * card still communicates "what dish/product is this" at a glance.
 */
export function PlaceholderImage({
  tone,
  emoji,
  className = "",
  emojiClassName = "text-5xl",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-linear-to-br ${TONE_GRADIENTS[tone]} ${className}`}
    >
      <span className={emojiClassName} aria-hidden>
        {emoji}
      </span>
    </div>
  );
}

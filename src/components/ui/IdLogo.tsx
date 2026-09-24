import Image from "next/image";
import Link from "next/link";

// 2026 brand refresh: "mark" is the bare iD glyph (no ring/wordmark) for tight
// spaces; "full" is the complete lockup (ring, "100% AUTHENTIC", TM, FRESH
// wordmark and swoosh all baked into the artwork itself — unlike the old
// asset, the wordmark is no longer rendered as separate live text).
const LOGO_SOURCES = {
  white: {
    mark: { src: "/brand/id-logo-mark-white.png", width: 579, height: 757 },
    full: { src: "/brand/id-logo-full-white.png", width: 579, height: 757 },
  },
  teal: {
    mark: { src: "/brand/id-logo-mark-teal.png", width: 915, height: 1080 },
    full: { src: "/brand/id-logo-full-teal.png", width: 915, height: 1080 },
  },
} as const;

/**
 * The real iD Fresh logo — always keep the ring, "100% AUTHENTIC" text, and TM together in the
 * "full" variant; never redraw or recolor per brand guidelines.
 *
 * Uses intrinsic width/height (not `fill`) — the logo has a fixed aspect ratio, and `fill` with a
 * `sizes` hint inside a flex column let the browser's srcset selection fall back to Next's largest
 * configured width (3840px) for what should render at ~44-80px, which is both slow and wasteful.
 * `markHeight` drives the image's rendered size directly (its width is derived from the source's
 * aspect ratio) so sizing is unambiguous regardless of the parent's layout.
 */
export function IdLogo({
  className = "",
  tone = "white",
  markHeight = 44,
  showWordmark = true,
  priority = false,
}: {
  className?: string;
  tone?: "white" | "teal";
  markHeight?: number;
  /** true (default) renders the full lockup (ring + FRESH wordmark); false renders just the bare mark. */
  showWordmark?: boolean;
  /** Only pass for an above-the-fold instance (e.g. the header) — preloading a below-the-fold
   * instance (e.g. the footer) triggers Next's "preloaded but not used" dev warning. */
  priority?: boolean;
}) {
  const logo = LOGO_SOURCES[tone][showWordmark ? "full" : "mark"];
  const markWidth = Math.round((markHeight * logo.width) / logo.height);

  return (
    <Link href="/" aria-label="iD Fresh — Home" className={`flex shrink-0 items-center ${className}`}>
      <Image
        src={logo.src}
        alt=""
        width={markWidth}
        height={markHeight}
        // Tailwind's preflight forces `height: auto` on all <img> tags, which silently
        // overrides just one dimension of the intrinsic size Next expects — pin both via
        // inline style (wins over any stylesheet rule) so it can't drift out of sync.
        style={{ width: markWidth, height: markHeight }}
        priority={priority}
      />
    </Link>
  );
}

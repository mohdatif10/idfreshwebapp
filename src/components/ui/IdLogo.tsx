import Image from "next/image";
import Link from "next/link";

const LOGO_SOURCES = {
  white: { src: "/brand/id-logo-white.png", width: 1055, height: 1294 },
  teal: { src: "/brand/id-logo-teal.png", width: 1284, height: 1284 },
} as const;

/**
 * The real iD Fresh logo mark — always keep the ring, "100% AUTHENTIC" text, and ® together;
 * never redraw or recolor per brand guidelines. The "FRESH" wordmark beneath it is rendered as
 * real text (not part of the source image) so it stays crisp at any size/DPI.
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
  showWordmark?: boolean;
  /** Only pass for an above-the-fold instance (e.g. the header) — preloading a below-the-fold
   * instance (e.g. the footer) triggers Next's "preloaded but not used" dev warning. */
  priority?: boolean;
}) {
  const logo = LOGO_SOURCES[tone];
  const textColor = tone === "white" ? "text-white" : "text-brand-500";
  const markWidth = Math.round((markHeight * logo.width) / logo.height);

  return (
    <Link
      href="/"
      aria-label="iD Fresh — Home"
      className={`flex shrink-0 flex-col items-center gap-0.5 ${className}`}
    >
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
      {showWordmark && (
        <span
          className={`font-heading text-[9px] font-bold tracking-[0.25em] ${textColor}`}
          aria-hidden
        >
          FRESH
        </span>
      )}
    </Link>
  );
}

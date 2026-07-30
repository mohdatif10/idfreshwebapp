import Image from "next/image";
import Link from "next/link";

/** The real iD Fresh logo mark (white variant) — always keep the ring, "100% AUTHENTIC" text, and FRESH wordmark together; never redraw or recolor per brand guidelines. */
export function IdLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="iD Fresh — Home" className={`relative block shrink-0 ${className}`}>
      <Image
        src="/brand/id-logo-white.png"
        alt="iD Fresh"
        fill
        sizes="80px"
        className="object-contain"
        priority
      />
    </Link>
  );
}

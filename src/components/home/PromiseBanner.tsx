import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Real dimensions of the ticker creative — used to keep the intrinsic aspect
// ratio correct while it's scaled down responsively via CSS height.
const TICKER_WIDTH = 7134;
const TICKER_HEIGHT = 1184;

const PROMISE_CLAIMS = [
  "No added preservatives",
  "RO purified water",
  "Traditionally prepared",
  "Premium ingredients",
];

export function PromiseBanner() {
  return (
    <section
      id="promise"
      data-scroll-target
      className="bg-linear-to-br from-brand-600 to-brand-800 py-10 sm:py-16"
    >
      <Container>
        <div className="text-center">
          <SectionLabel tone="lime">The iD promise</SectionLabel>
          <p className="mt-2 font-accent italic text-3xl text-cream sm:text-4xl">
            four things we never skip
          </p>
        </div>
      </Container>

      {/* Real claims text is duplicated here for a11y/SEO — the ticker graphic below is decorative. */}
      <p className="sr-only">{PROMISE_CLAIMS.join(", ")}</p>

      <div className="mt-10 overflow-hidden" aria-hidden>
        <div className="flex w-max animate-marquee-slow items-center">
          {[0, 1].map((copy) => (
            <Image
              key={copy}
              src="/brand/misc/promise-ticker.png"
              alt=""
              width={TICKER_WIDTH}
              height={TICKER_HEIGHT}
              className="h-64 w-auto shrink-0 sm:h-96"
              priority={copy === 0}
            />
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-10 text-center font-accent italic text-2xl text-cream sm:text-3xl">
          love &amp; nothing else.
        </p>
      </Container>
    </section>
  );
}

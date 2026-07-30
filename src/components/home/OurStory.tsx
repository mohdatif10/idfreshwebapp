import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function OurStory() {
  return (
    <section id="our-story" data-scroll-target className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionLabel tone="teal">Our Story</SectionLabel>
        <h2 className="mt-2 font-heading text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
          Once upon a time
          <br />
          in Bangalore&hellip;
        </h2>
        <p className="mt-5 text-lg text-inkgray">
          2005. Five cousins, a 50 sq ft kitchen in Tippasandra, and one stubborn idea — batter
          made the way home makes it.{" "}
          <a href="#" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900">
            read the full story
          </a>
        </p>

        <div className="relative mx-auto mt-12 h-56 w-56 sm:h-64 sm:w-64">
          <Image
            src="/brand/misc/id-shop-illustration.png"
            alt="Illustration of the original iD Fresh shop"
            fill
            sizes="16rem"
            className="object-contain"
          />
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between font-mono text-sm font-semibold text-brand-700">
            <span>2005</span>
            <span>2025</span>
          </div>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-sand">
            <div className="h-full w-[6%] rounded-full bg-brand-500" />
          </div>
        </div>
      </Container>
    </section>
  );
}

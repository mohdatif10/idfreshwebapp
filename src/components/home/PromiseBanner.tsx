import { Ban, Clock3, Droplet, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PROMISES = [
  { label: "No added preservatives", icon: Ban },
  { label: "RO Purified water", icon: Droplet },
  { label: "Traditionally prepared", icon: Clock3 },
  { label: "Premium ingredients", icon: Leaf },
];

export function PromiseBanner() {
  return (
    <section
      id="promise"
      data-scroll-target
      className="bg-linear-to-br from-brand-600 to-brand-800 py-16 sm:py-24"
    >
      <Container>
        <div className="text-center">
          <SectionLabel tone="lime">The iD promise</SectionLabel>
          <p className="mt-2 font-accent italic text-3xl text-cream sm:text-4xl">
            four things we never skip
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6 sm:gap-8">
          {PROMISES.map((promise) => (
            <div key={promise.label} className="flex items-center gap-4 sm:gap-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-lime-400 text-lime-400 sm:h-20 sm:w-20">
                <promise.icon className="h-6 w-6 sm:h-9 sm:w-9" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-2xl font-normal uppercase leading-none tracking-tight text-cream sm:text-5xl">
                {promise.label}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center font-accent italic text-2xl text-cream sm:text-3xl">
          love &amp; nothing else.
        </p>
      </Container>
    </section>
  );
}

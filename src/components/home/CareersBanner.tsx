import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CAREERS_VALUES } from "@/data/careers";
import type { JobOpening } from "@/lib/types";

export function CareersBanner({ roles }: { roles: JobOpening[] }) {
  return (
    <section id="careers" data-scroll-target className="py-16 sm:py-24">
      <Container>
        <div className="rounded-[2.5rem] bg-lime-400 px-6 py-12 text-center sm:px-16 sm:py-16">
          <SectionLabel tone="teal" className="text-brand-700">
            We&rsquo;re hiring
          </SectionLabel>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-900 sm:text-5xl">
            Join the iD Fresh family
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-800/80">
            {roles.length} open role{roles.length === 1 ? "" : "s"} across operations, sales, and
            marketing — from a 50 sq ft kitchen to 45+ cities, built by people who never took the
            shortcut.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 text-left sm:grid-cols-3">
            {CAREERS_VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white/50 p-5">
                <span className="text-3xl" aria-hidden>
                  {value.emoji}
                </span>
                <h3 className="mt-2 font-heading text-base font-bold text-brand-900">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm text-brand-800/80">{value.description}</p>
              </div>
            ))}
          </div>

          <Button href="/careers" variant="primary" className="mt-10">
            I&rsquo;m interested in working at iD Fresh
          </Button>
        </div>
      </Container>
    </section>
  );
}

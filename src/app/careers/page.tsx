import type { Metadata } from "next";
import { MapPin, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CAREERS_VALUES } from "@/data/careers";
import { getOpenRoles } from "@/lib/services/careers";

export const metadata: Metadata = {
  title: "Careers | iD Fresh",
  description: "Join the iD Fresh family — open roles across operations, sales, and marketing.",
};

export default async function CareersPage() {
  const roles = await getOpenRoles();

  return (
    <>
      <section className="bg-brand-900 py-16 text-center sm:py-24">
        <Container className="max-w-2xl">
          <SectionLabel tone="lime">Careers at iD Fresh</SectionLabel>
          <h1 className="mt-2 font-heading text-4xl font-extrabold text-cream sm:text-5xl">
            Help us keep the shortcuts out
          </h1>
          <p className="mt-4 text-cream/80">
            From a 50 sq ft kitchen in Tippasandra to 45+ cities — every hire at iD Fresh keeps
            that same promise: love, and nothing else. We&rsquo;re always looking for people who
            care about food the way we do.
          </p>
          <a
            href="mailto:careers@idfreshfood.com?subject=I%27m%20interested%20in%20working%20at%20iD%20Fresh"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-heading font-bold text-brand-900 transition-colors hover:bg-lime-300"
          >
            <Send className="h-4 w-4" />
            I&rsquo;m interested in working at iD Fresh
          </a>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-center font-heading text-3xl font-extrabold text-brand-900">
            Why iD Fresh
          </h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-3">
            {CAREERS_VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl bg-brand-50 p-6 text-center">
                <span className="text-4xl" aria-hidden>
                  {value.emoji}
                </span>
                <h3 className="mt-3 font-heading text-base font-bold text-brand-900">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm text-inkgray">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-3xl font-extrabold text-brand-900">Open roles</h2>
          <div className="mt-6 flex flex-col divide-y divide-brand-100 overflow-hidden rounded-2xl border border-brand-100">
            {roles.map((role) => (
              <div
                key={role.id}
                className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-900">{role.title}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-inkgray">
                    <span>{role.department}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.location}
                    </span>
                    <span>{role.type}</span>
                  </p>
                </div>
                <a
                  href={`mailto:careers@idfreshfood.com?subject=Application%3A%20${encodeURIComponent(
                    role.title
                  )}`}
                >
                  <Button variant="outline" className="w-full sm:w-auto">
                    Apply
                  </Button>
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-inkgray">
            Don&rsquo;t see the right role? Send us your resume anyway at{" "}
            <a href="mailto:careers@idfreshfood.com" className="font-semibold text-brand-700 underline">
              careers@idfreshfood.com
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { KITCHEN_LOCATIONS } from "@/data/kitchens";

// Intentionally not linked from anywhere in site nav (header, footer, or the
// /corporate hub) — reachable only via direct URL entry. `robots: noindex`
// keeps it out of search results too, for the same reason. Do not add a nav
// link back to this page without checking with the user first.
export const metadata: Metadata = {
  title: "iD Kitchens | iD Fresh",
  description: "Every iD Fresh manufacturing kitchen, by state, with FSSAI licensing details.",
  robots: { index: false, follow: false },
};

export default function FoodMapPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-4xl">
        <SectionLabel tone="teal">iD Kitchens</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          Here&rsquo;s where the magic happens in your city.
        </h1>

        <h2 className="mt-12 font-heading text-lg font-bold text-brand-700">
          iD Fresh Food (India) Pvt. Ltd.
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {KITCHEN_LOCATIONS.map((location) => (
            <div
              key={`${location.label}-${location.region}`}
              className="rounded-2xl border border-brand-100 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-500 font-heading text-sm font-bold text-white">
                  {location.label}
                </span>
                <h3 className="font-heading text-base font-bold text-brand-900">{location.region}</h3>
              </div>
              <p className="mt-3 text-sm font-semibold text-brand-800">{location.company}</p>
              <p className="mt-1 text-sm leading-relaxed text-inkgray">{location.address}</p>
              <p className="mt-3 font-mono text-xs font-semibold text-brand-600">
                FSSAI Lic. No. {location.fssai}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

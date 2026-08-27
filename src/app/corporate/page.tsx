import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Corporate | iD Fresh",
  description: "About iD Fresh, our team, media, careers, and corporate information.",
};

const CORPORATE_SECTIONS = [
  {
    label: "About Us & iD DNA",
    href: "/corporate/about-us",
    emoji: "🌱",
    description: "How five cousins in a 50 sq ft kitchen became a 45+ city brand.",
  },
  {
    label: "Our Team",
    href: "/corporate/our-team",
    emoji: "🧑‍🍳",
    description: "The people behind the batter.",
  },
  {
    label: "Media",
    href: "/corporate/media",
    emoji: "📰",
    description: "Press coverage, brand assets, and news mentions.",
  },
  {
    label: "Careers / Join Our Team",
    href: "/careers",
    emoji: "💼",
    description: "Open roles across operations, sales, and marketing.",
  },
  {
    label: "Corporate Matters",
    href: "/corporate/corporate-matters",
    emoji: "🏢",
    description: "Governance, investor, and corporate information.",
  },
  {
    label: "Terms, Privacy & Disclaimer",
    href: "/corporate/legal",
    emoji: "📄",
    description: "Terms & Conditions, Privacy Policy, Terms of Use, and Disclaimer.",
  },
  {
    label: "iD Kitchens / Food Map",
    href: "/foodmap",
    emoji: "🗺️",
    description: "Where iD Fresh is made and delivered from.",
  },
];

export default function CorporatePage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionLabel tone="teal">Corporate</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          About iD Fresh
        </h1>
        <p className="mt-4 max-w-xl text-inkgray">
          Everything corporate — our story, our team, the press, careers, and the legal fine
          print.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CORPORATE_SECTIONS.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group flex items-start gap-4 rounded-2xl border border-brand-100 p-5 transition-colors hover:bg-brand-50"
            >
              <span className="text-3xl" aria-hidden>
                {section.emoji}
              </span>
              <div className="flex-1">
                <p className="flex items-center gap-1 font-heading text-base font-bold text-brand-900">
                  {section.label}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
                <p className="mt-1 text-sm text-inkgray">{section.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

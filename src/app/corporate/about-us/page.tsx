import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "About Us & iD DNA | iD Fresh" };

export default function AboutUsPage() {
  return (
    <ComingSoon
      emoji="🌱"
      label="About Us & iD DNA"
      title="Our full story is on its way"
      description="From a 50 sq ft kitchen in Tippasandra to 45+ cities — the complete About Us & iD DNA page is coming soon. For now, see Our Story on the homepage."
    />
  );
}

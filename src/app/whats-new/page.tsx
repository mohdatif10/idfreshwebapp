import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "What's New | iD Fresh",
};

export default function WhatsNewPage() {
  return (
    <ComingSoon
      emoji="📰"
      label="iD Newsroom"
      title="The full newsroom archive is coming soon"
      description="Announcements, launches, and milestones — a preview lives in the iD newsroom section on our homepage."
    />
  );
}

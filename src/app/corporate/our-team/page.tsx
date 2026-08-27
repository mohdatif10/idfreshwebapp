import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Our Team | iD Fresh" };

export default function OurTeamPage() {
  return (
    <ComingSoon
      emoji="🧑‍🍳"
      label="Our Team"
      title="Meet the people behind the batter"
      description="Team profiles and leadership bios are coming soon."
    />
  );
}

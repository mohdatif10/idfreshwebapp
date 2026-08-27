import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Corporate Matters | iD Fresh" };

export default function CorporateMattersPage() {
  return (
    <ComingSoon
      emoji="🏢"
      label="Corporate Matters"
      title="Corporate & governance information"
      description="Corporate and governance information is coming soon."
    />
  );
}

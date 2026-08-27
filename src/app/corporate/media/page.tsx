import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Media | iD Fresh" };

export default function MediaPage() {
  return (
    <ComingSoon
      emoji="📰"
      label="Media"
      title="Press coverage & media resources"
      description="Press mentions, brand assets, and media contact details are coming soon."
    />
  );
}

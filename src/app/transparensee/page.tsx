import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "TransparenSee | iD Fresh",
  description: "See exactly how your food is made — factory transparency at iD Fresh.",
};

export default function TransparenSeePage() {
  return (
    <ComingSoon
      emoji="👁️"
      label="TransparenSee"
      title="See exactly how your food is made"
      description="Live factory footage and manufacturing transparency are coming soon — no added preservatives, RO-purified water, traditionally prepared, premium ingredients."
    />
  );
}

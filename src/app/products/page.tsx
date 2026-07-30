import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Products | iD Fresh",
};

export default function ProductsPage() {
  return (
    <ComingSoon
      emoji="🛍️"
      label="Our Foods"
      title="The full product catalogue is coming soon"
      description="Batters, parottas, coffee decoctions and more — browse a preview under Packed with goodness on our homepage."
    />
  );
}

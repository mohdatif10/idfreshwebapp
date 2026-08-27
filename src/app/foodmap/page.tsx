import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "iD Kitchens / Food Map | iD Fresh" };

export default function FoodMapPage() {
  return (
    <ComingSoon
      emoji="🗺️"
      label="iD Kitchens"
      title="Find your nearest iD Fresh kitchen"
      description="An interactive map of every iD Fresh kitchen and delivery city is coming soon."
    />
  );
}

import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Contact Us | iD Fresh",
};

export default function ContactPage() {
  return (
    <ComingSoon
      emoji="✉️"
      label="Contact Us"
      title="A dedicated contact page is coming soon"
      description="For now, reach us on social — links are in the footer below."
    />
  );
}

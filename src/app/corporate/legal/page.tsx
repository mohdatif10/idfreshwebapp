import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Terms, Privacy & Disclaimer | iD Fresh" };

export default function LegalPage() {
  return (
    <ComingSoon
      emoji="📄"
      label="Legal"
      title="Terms & Conditions, Privacy Policy, Terms of Use and Disclaimer"
      description="Our full legal documentation is coming soon."
    />
  );
}

import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Complaint & Feedback | iD Fresh" };

export default function ComplaintFeedbackPage() {
  return (
    <ComingSoon
      emoji="💬"
      label="Complaint & Feedback"
      title="A dedicated feedback form is on its way"
      description="For now, reach us via Contact Us or your usual delivery/retail partner."
    />
  );
}

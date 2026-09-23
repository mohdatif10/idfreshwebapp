import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ComplaintFeedbackForm } from "@/components/complaint/ComplaintFeedbackForm";

export const metadata: Metadata = {
  title: "Complaint & Feedback | iD Fresh",
  description: "Share a complaint, feedback, or suggestion with the iD Fresh team.",
};

export default function ComplaintFeedbackPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container className="max-w-2xl">
        <SectionLabel tone="teal">Complaint &amp; Feedback</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          Love us? Hate us? Tell us.
        </h1>
        <p className="mt-4 text-inkgray">
          Whether it&rsquo;s a complaint, a compliment, or an idea to make our products better —
          we want to hear it. Fill out the form below and our team will get back to you.
        </p>

        <ComplaintFeedbackForm />
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CORPORATE_DOCUMENT_GROUPS } from "@/data/corporate-matters";

export const metadata: Metadata = { title: "Corporate Matters | iD Fresh" };

export default function CorporateMattersPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <SectionLabel tone="teal">Corporate Matters</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          Corporate &amp; governance information
        </h1>
        <p className="mt-4 text-inkgray">
          AGM notices and annual return / plan data for iD Fresh Food (India) Pvt. Ltd., by
          fiscal year.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {CORPORATE_DOCUMENT_GROUPS.map((group) => (
            <div key={group.year}>
              <h2 className="font-heading text-lg font-bold text-brand-900">{group.year}</h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {group.documents.map((doc) => (
                  <a
                    key={doc.href}
                    href={doc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-brand-100 p-4 transition-colors hover:bg-brand-50"
                  >
                    <FileText className="h-5 w-5 shrink-0 text-brand-500" />
                    <span className="font-heading text-sm font-semibold text-brand-900">{doc.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

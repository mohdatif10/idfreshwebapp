import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LEGAL_DOCUMENTS } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms, Privacy & Disclaimer | iD Fresh",
  description: "Terms & Conditions, Privacy Policy, Terms of Use, and Disclaimer for iD Fresh Food (India) Pvt. Ltd.",
};

export default function LegalPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <SectionLabel tone="teal">Legal</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          Terms, Privacy &amp; Disclaimer
        </h1>

        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {LEGAL_DOCUMENTS.map((doc) => (
            <a
              key={doc.slug}
              href={`#${doc.slug}`}
              className="shrink-0 whitespace-nowrap rounded-full bg-brand-50 px-4 py-2 font-nav text-xs font-bold text-brand-800 transition-colors hover:bg-brand-100"
            >
              {doc.title}
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-16">
          {LEGAL_DOCUMENTS.map((doc) => (
            <article key={doc.slug} id={doc.slug} className="scroll-mt-28">
              <h2 className="font-heading text-2xl font-extrabold text-brand-900 sm:text-3xl">
                {doc.title}
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                {doc.sections.map((section, index) => (
                  <section key={section.heading ?? index}>
                    {section.heading && (
                      <h3 className="font-heading text-base font-bold text-brand-800">
                        {section.heading}
                      </h3>
                    )}
                    {section.paragraphs?.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-sm leading-relaxed text-inkgray ${section.heading ? "mt-2" : ""} ${pIndex > 0 ? "mt-3" : ""}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="mt-3 flex flex-col gap-2 pl-5">
                        {section.list.map((item, lIndex) => (
                          <li key={lIndex} className="list-disc text-sm leading-relaxed text-inkgray">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

export interface CorporateDocumentGroup {
  year: string;
  documents: { label: string; href: string }[];
}

// AGM notices and annual return / plan data, grouped by fiscal year.
// The source zip's "Corporate Matters.docx" had no body text beyond its title —
// this page's real content is these documents themselves.
export const CORPORATE_DOCUMENT_GROUPS: CorporateDocumentGroup[] = [
  {
    year: "Latest",
    documents: [
      { label: "AGM Notice", href: "/documents/corporate-matters/AGMNotice.pdf" },
      { label: "Annual Return / Plan Data", href: "/documents/corporate-matters/annualplandata.pdf" },
    ],
  },
  {
    year: "FY25",
    documents: [
      { label: "AGM Notice", href: "/documents/corporate-matters/AGM_FY25.pdf" },
      { label: "Annual Return / Plan Data", href: "/documents/corporate-matters/annualplandata_FY25.pdf" },
    ],
  },
  {
    year: "FY24",
    documents: [
      { label: "AGM Notice", href: "/documents/corporate-matters/AGMNotice_FY24.pdf" },
      { label: "Annual Return / Plan Data", href: "/documents/corporate-matters/annualplandata_FY24.pdf" },
    ],
  },
  {
    year: "FY23",
    documents: [
      { label: "AGM Notice", href: "/documents/corporate-matters/AGMNotice_FY23.pdf" },
      { label: "Annual Return / Plan Data", href: "/documents/corporate-matters/annualplandata_FY23.pdf" },
    ],
  },
];

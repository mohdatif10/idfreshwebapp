interface SectionLabelProps {
  children: React.ReactNode;
  tone?: "teal" | "lime" | "cream";
  className?: string;
}

const TONE_CLASSES = {
  teal: "text-brand-500",
  lime: "text-lime-400",
  cream: "text-cream",
};

/** The recurring italic script label used above headings ("Our Story", "The iD promise"). */
export function SectionLabel({ children, tone = "teal", className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-accent italic text-xl sm:text-2xl ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </p>
  );
}

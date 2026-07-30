import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface ComingSoonProps {
  emoji: string;
  label: string;
  title: string;
  description: string;
}

/** Shared placeholder for routes reachable from nav that aren't built yet. */
export function ComingSoon({ emoji, label, title, description }: ComingSoonProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <div
          aria-hidden
          className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-brand-50 text-6xl"
        >
          {emoji}
        </div>
        <SectionLabel tone="teal">{label}</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900">{title}</h1>
        <p className="mt-4 text-lg text-inkgray">{description}</p>
        <Button href="/" variant="outline" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}

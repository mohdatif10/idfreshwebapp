import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TRANSPARENSEE_EXPERTS, TRANSPARENSEE_YOUTUBE_URL } from "@/data/transparensee";

export const metadata: Metadata = {
  title: "TransparenSee | iD Fresh",
  description: "See exactly how your food is made — factory transparency at iD Fresh.",
};

function getYoutubeEmbedUrl(url: string): string {
  const match = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})(?:[&?]t=(\d+))?/);
  const id = match?.[1] ?? "";
  const start = match?.[2];
  return `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ""}`;
}

export default function TransparenSeePage() {
  return (
    <div className="py-12 sm:py-16">
      <Container className="max-w-2xl text-center">
        <SectionLabel tone="teal">TransparenSee</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          See exactly how your food is made
        </h1>
        <p className="mt-4 text-inkgray">
          We opened our factory doors to 6 credible experts in the fields of health, nutrition
          &amp; food.
        </p>
      </Container>

      <Container className="mt-8 max-w-3xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-brand-900">
          <iframe
            src={getYoutubeEmbedUrl(TRANSPARENSEE_YOUTUBE_URL)}
            title="TransparenSee — factory tour"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>

      <section className="mt-14">
        <Container>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {TRANSPARENSEE_EXPERTS.map((expert) => (
              <div key={expert.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[9rem] overflow-hidden rounded-2xl bg-brand-50">
                  {expert.photo ? (
                    <Image src={expert.photo} alt={expert.name} fill sizes="9rem" className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-heading text-3xl font-extrabold text-brand-300">
                      {expert.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <p className="mt-3 font-heading text-sm font-bold text-brand-900">{expert.name}</p>
                <p className="mt-1 text-xs leading-snug text-inkgray">{expert.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="mt-14 max-w-2xl text-center">
        <p className="font-accent italic text-xl text-brand-700">
          They reaffirmed our commitment to clean-label, preservative-free food, as we stood
          together to promote greater transparency in the industry.
        </p>
      </Container>
    </div>
  );
}

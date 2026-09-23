import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AWARDS, PRESS_MENTIONS, VIDEO_CAMPAIGNS } from "@/data/media";

export const metadata: Metadata = {
  title: "Media | iD Fresh",
  description: "Campaign videos, press coverage, and awards for iD Fresh Food.",
};

export default function MediaPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container className="max-w-3xl text-center">
        <SectionLabel tone="teal">Media</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          iD in the spotlight
        </h1>
        <p className="mt-4 text-inkgray">
          The best meals are those #MadeWithLove, with premium ingredients and without
          preservatives. Bring home love with India&rsquo;s No.1 Idli-Dosa Batter.
        </p>
      </Container>

      <section className="mt-14">
        <Container>
          <h2 className="font-heading text-2xl font-extrabold text-brand-900">Campaigns we cooked up</h2>
          <p className="mt-2 max-w-xl text-inkgray">
            We take the opportunity to celebrate every occasion with a home-made feast and share
            the joy with you through media.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEO_CAMPAIGNS.map((video, index) => (
              <a
                key={`${video.youtubeUrl}-${index}`}
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-2xl border border-brand-100 p-5 transition-colors hover:bg-brand-50"
              >
                <PlayCircle className="h-8 w-8 text-brand-500" />
                <h3 className="mt-3 font-heading text-base font-bold text-brand-900 group-hover:text-brand-600">
                  {video.title}
                </h3>
                <p className="mt-1 line-clamp-3 text-sm text-inkgray">{video.description}</p>
                <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand-600">
                  Watch on YouTube
                  <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16 bg-brand-900 py-14">
        <Container>
          <SectionLabel tone="lime">Awards, Acknowledgement and Appreciation</SectionLabel>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-cream">
            iD, recognised
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((award) => (
              <div key={award.title} className="text-center">
                <div className="relative mx-auto h-32 w-32">
                  <Image src={award.badge} alt={`${award.title} ${award.year}`} fill sizes="8rem" className="object-contain" />
                </div>
                <p className="mt-3 font-heading text-sm font-bold text-cream">{award.title}</p>
                <p className="mt-1 text-xs text-cream/70">{award.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16">
        <Container>
          <h2 className="font-heading text-2xl font-extrabold text-brand-900">In the news</h2>
          <p className="mt-2 text-inkgray">All the times we made headlines and we are over the moon about it!</p>
          <div className="mt-6 flex flex-col divide-y divide-brand-100 overflow-hidden rounded-2xl border border-brand-100">
            {PRESS_MENTIONS.map((mention, index) => (
              <a
                key={`${mention.url}-${index}`}
                href={mention.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 p-4 transition-colors hover:bg-brand-50"
              >
                <div>
                  <p className="font-heading text-sm font-bold text-brand-900 group-hover:text-brand-600">
                    {mention.title}
                  </p>
                  <p className="mt-0.5 text-xs text-inkgray">{mention.source}</p>
                </div>
                <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-400" />
              </a>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

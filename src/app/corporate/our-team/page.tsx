import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BOARD_OF_DIRECTORS, LEADERSHIP_TEAM, PARTNERS_AT_ID, type TeamMember } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team | iD Fresh",
  description:
    "Meet the Board of Directors, the Partners at iD, and iD's Leadership Team — the people behind the batter.",
};

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
      {members.map((member) => (
        <div key={`${member.name}-${member.title}`} className="text-center">
          <div className="relative mx-auto aspect-square w-full max-w-[9rem] overflow-hidden rounded-2xl bg-brand-50">
            <Image src={member.photo} alt={member.name} fill sizes="9rem" className="object-cover" />
          </div>
          <p className="mt-3 font-heading text-sm font-bold text-brand-900">{member.name}</p>
          <p className="mt-1 text-xs leading-snug text-inkgray">{member.title}</p>
        </div>
      ))}
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-5xl">
        <SectionLabel tone="teal">Our Team</SectionLabel>
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
          Meet the people behind the batter
        </h1>

        <section className="mt-14">
          <h2 className="font-heading text-2xl font-extrabold text-brand-900">Board of Directors</h2>
          <TeamGrid members={BOARD_OF_DIRECTORS} />
        </section>

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-extrabold text-brand-900">The Partners at iD</h2>
          <TeamGrid members={PARTNERS_AT_ID} />
        </section>

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-extrabold text-brand-900">iD&rsquo;s Leadership Team</h2>
          <TeamGrid members={LEADERSHIP_TEAM} />
        </section>
      </Container>
    </div>
  );
}

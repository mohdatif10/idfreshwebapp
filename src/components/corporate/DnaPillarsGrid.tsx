"use client";

import Image from "next/image";
import { useState } from "react";
import type { DnaPillar } from "@/data/dna";
import { DnaPillarModal } from "@/components/corporate/DnaPillarModal";

export function DnaPillarsGrid({ pillars }: { pillars: DnaPillar[] }) {
  const [activePillar, setActivePillar] = useState<DnaPillar | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <div key={pillar.number} className="overflow-hidden rounded-2xl border border-brand-100">
            <div className="relative h-40 w-full">
              <Image src={pillar.image} alt={pillar.title} fill sizes="24rem" className="object-cover" />
            </div>
            <div className="p-6">
              <span className="font-mono text-sm font-bold text-lime-500">{pillar.number}</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-brand-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-inkgray">{pillar.description}</p>
              <button
                type="button"
                onClick={() => setActivePillar(pillar)}
                className="mt-4 font-heading text-sm font-bold text-brand-600 underline underline-offset-4 hover:text-brand-800"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      <DnaPillarModal pillar={activePillar} onClose={() => setActivePillar(null)} />
    </>
  );
}

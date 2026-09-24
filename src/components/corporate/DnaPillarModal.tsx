"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import type { DnaPillar } from "@/data/dna";

/** "Read more" popup for a DNA pillar — full body copy, opened from its card. */
export function DnaPillarModal({ pillar, onClose }: { pillar: DnaPillar | null; onClose: () => void }) {
  useEffect(() => {
    if (!pillar) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pillar, onClose]);

  if (!pillar || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={pillar.title}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative h-56 w-full sm:h-64">
          <Image src={pillar.image} alt={pillar.title} fill sizes="32rem" className="object-cover" />
        </div>

        <div className="p-6 sm:p-8">
          <span className="font-mono text-sm font-bold text-lime-500">#{Number(pillar.number)}</span>
          <h3 className="mt-1 font-heading text-2xl font-extrabold text-brand-900">{pillar.title}</h3>
          <div className="mt-4 flex flex-col gap-3">
            {pillar.popupBody.map((paragraph, index) => (
              <p key={index} className="text-sm leading-relaxed text-inkgray">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

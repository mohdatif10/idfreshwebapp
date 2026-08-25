"use client";

import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

export function ProductAccordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-100 rounded-2xl border border-brand-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg font-bold text-brand-500">{item.title}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-brand-500 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen && <div className="px-5 pb-5">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

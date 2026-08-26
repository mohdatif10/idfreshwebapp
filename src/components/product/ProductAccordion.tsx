"use client";

import { useState, type ReactNode } from "react";
import { Minus, Plus } from "lucide-react";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

export function ProductAccordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-brand-100 border-t border-brand-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const Icon = isOpen ? Minus : Plus;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-xl font-bold text-brand-500">{item.title}</span>
              <Icon className="h-5 w-5 shrink-0 text-brand-500" />
            </button>
            {isOpen && <div className="pb-6">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

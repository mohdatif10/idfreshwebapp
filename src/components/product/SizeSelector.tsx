"use client";

import { useState } from "react";

export function SizeSelector({ sizes }: { sizes: string[] }) {
  const [selected, setSelected] = useState(sizes[0]);

  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => setSelected(size)}
          className={`rounded-lg border-2 px-5 py-2.5 font-mono text-sm font-medium transition-colors ${
            selected === size
              ? "border-brand-900 text-brand-900"
              : "border-brand-100 text-brand-800 hover:border-brand-300"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

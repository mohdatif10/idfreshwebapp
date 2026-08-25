"use client";

import { useState } from "react";

export function SizeSelector({ sizes }: { sizes: string[] }) {
  const [selected, setSelected] = useState(sizes[0]);

  return (
    <div className="mx-auto flex w-fit gap-1 rounded-full bg-brand-50 p-1">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => setSelected(size)}
          className={`rounded-full px-5 py-2 font-mono text-sm font-medium transition-colors ${
            selected === size ? "bg-brand-500 text-white" : "text-brand-800 hover:bg-brand-100"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

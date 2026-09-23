"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface ScrollArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}

/** Overlaid prev/next button for a horizontal card rail — visible from `md:`
 * up only, since touch/trackpad swipe already covers phone and tablet, and
 * a mouse-driven laptop-wide screen otherwise has no way to advance one. */
export function ScrollArrowButton({ direction, onClick, className = "" }: ScrollArrowButtonProps) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-800 shadow-lg shadow-black/10 transition-colors hover:bg-brand-50 md:flex ${className}`}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

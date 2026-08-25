import { BadgeCheck, Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-72 shrink-0 snap-start rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
      <div className="flex gap-0.5 text-lime-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-lime-500" />
        ))}
      </div>
      <p className="mt-3 text-sm text-brand-900">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="font-heading text-sm font-bold text-brand-900">{testimonial.name}</p>
          <p className="font-mono text-xs uppercase text-inkgray">{testimonial.location}</p>
        </div>
        <div className="text-right">
          <p className="flex items-center gap-1 text-xs font-medium text-brand-600">
            <BadgeCheck className="h-3.5 w-3.5" />
            verified customer
          </p>
          <p className="mt-0.5 text-xs text-inkgray">{testimonial.timeAgo}</p>
        </div>
      </div>
    </div>
  );
}

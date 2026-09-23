import Link from "next/link";
import { MessageCircleHeart } from "lucide-react";

/** Floating shortcut to /complaint-feedback — previously only reachable via
 * the "Love us / Hate us?" pill on /contact, easy to miss. Sits above
 * MobileBottomNav's pill bar on mobile (which spans the full width at
 * bottom-3), lower on desktop where that bar is hidden. */
export function ComplaintFeedbackFab() {
  return (
    <Link
      href="/complaint-feedback"
      className="fixed bottom-24 right-4 z-40 flex items-center gap-2 rounded-full bg-brand-800 px-4 py-3 font-heading text-sm font-bold text-cream shadow-lg shadow-black/20 transition-colors hover:bg-brand-900 md:bottom-6"
    >
      <MessageCircleHeart className="h-5 w-5 shrink-0" />
      Feedback
    </Link>
  );
}

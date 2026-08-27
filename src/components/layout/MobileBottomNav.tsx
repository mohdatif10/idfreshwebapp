"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ICON_MAP } from "@/components/ui/icon-map";
import { BOTTOM_NAV } from "@/data/nav";

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-between gap-1 rounded-full border border-white/10 bg-brand-950/95 px-2 py-2 shadow-lg shadow-black/30 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.5rem)" }}
    >
      {BOTTOM_NAV.map((item) => {
        const Icon = ICON_MAP[item.icon];
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-2.5 font-nav text-xs font-bold transition-colors ${
              isActive ? "bg-lime-500 text-brand-900" : "text-white/80 hover:text-lime-300"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={2.25} />
            {isActive && (
              <span className={item.label === "Home" ? "" : "lowercase"}>{item.label}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

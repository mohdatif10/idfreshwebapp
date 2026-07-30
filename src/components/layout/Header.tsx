"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { IdLogo } from "@/components/ui/IdLogo";
import { CAREERS_NAV, PRIMARY_NAV } from "@/data/nav";

const DESKTOP_LINKS = PRIMARY_NAV.filter((item) => item.href !== "/");

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-8">
        <IdLogo className="h-12 w-12 sm:h-14 sm:w-14" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {DESKTOP_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-sm font-semibold text-white/90 transition-colors hover:text-lime-400"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={CAREERS_NAV.href}
            className="rounded-full bg-lime-400 px-4 py-2 font-heading text-sm font-bold text-brand-900 transition-colors hover:bg-lime-300"
          >
            {CAREERS_NAV.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/recipes"
            aria-label="Search recipes"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-lime-400 hover:text-lime-400"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-lime-400 hover:text-lime-400 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-brand-950 px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col divide-y divide-white/10">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 font-heading text-base font-semibold text-white/90 hover:text-lime-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={CAREERS_NAV.href}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full bg-lime-400 px-4 py-3 font-heading text-base font-bold text-brand-900 hover:bg-lime-300"
          >
            I&rsquo;m interested in working at iD Fresh
          </Link>
        </div>
      )}
    </header>
  );
}

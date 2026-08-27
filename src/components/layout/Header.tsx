"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { IdLogo } from "@/components/ui/IdLogo";
import { CAREERS_NAV, PRIMARY_NAV } from "@/data/nav";

const DESKTOP_LINKS = PRIMARY_NAV.filter((item) => item.href !== "/");

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:pt-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-brand-950/30 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-5 sm:py-3">
        <IdLogo markHeight={36} showWordmark={false} priority />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {DESKTOP_LINKS.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-nav text-sm font-bold text-white transition-colors hover:text-lime-400"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                {/* Invisible bridge so the pointer can travel from link to panel without the hover chain breaking */}
                <div className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2" />
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-3 rounded-2xl border border-white/10 bg-brand-950/95 p-2 opacity-0 shadow-xl backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-3.5 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 font-nav text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-lime-400"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-nav text-sm font-bold text-white transition-colors hover:text-lime-400"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href={CAREERS_NAV.href}
            className="rounded-full bg-lime-400 px-4 py-1.5 font-nav text-sm font-bold text-brand-900 transition-colors hover:bg-lime-300"
          >
            {CAREERS_NAV.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/recipes"
            aria-label="Search recipes"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-lime-400 hover:text-lime-400 sm:h-10 sm:w-10"
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-lime-400 hover:text-lime-400 sm:h-9 sm:w-9 md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 max-h-[calc(100vh-6rem)] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/15 bg-brand-950/90 px-4 pb-6 pt-2 shadow-xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col divide-y divide-white/10">
            {PRIMARY_NAV.map((item) => (
              <div key={item.href} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-nav text-base font-bold text-white/90 hover:text-lime-400"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="flex flex-col gap-0.5 pb-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg py-1.5 font-nav text-sm font-medium text-white/70 hover:text-lime-400"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link
            href={CAREERS_NAV.href}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full bg-lime-400 px-4 py-3 font-nav text-base font-bold text-brand-900 hover:bg-lime-300"
          >
            I&rsquo;m interested in working at iD Fresh
          </Link>
        </div>
      )}
    </header>
  );
}

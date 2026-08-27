"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { IdLogo } from "@/components/ui/IdLogo";
import { CAREERS_NAV, PRIMARY_NAV } from "@/data/nav";

const DESKTOP_LINKS = PRIMARY_NAV.filter((item) => item.href !== "/");

export function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!menuOpen && !searchOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuOpen, searchOpen]);

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = searchValue.trim();
    router.push(trimmed ? `/recipes?q=${encodeURIComponent(trimmed)}` : "/recipes");
    setSearchOpen(false);
    setSearchValue("");
  }

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
          <button
            type="button"
            aria-label={searchOpen ? "Close search" : "Search recipes"}
            aria-expanded={searchOpen}
            onClick={() => {
              const willOpen = !searchOpen;
              // Flush synchronously so the input exists in the DOM before we
              // call .focus() below — mobile browsers only open the on-screen
              // keyboard for a focus() that happens within the same tap
              // gesture, and a plain setState + effect-based focus lands one
              // tick too late for that on some devices.
              flushSync(() => {
                setSearchOpen(willOpen);
                setMenuOpen(false);
              });
              if (willOpen) searchInputRef.current?.focus();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-lime-400 hover:text-lime-400 sm:h-10 sm:w-10"
          >
            {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              // Reset on every toggle (not just close) — the drawer only
              // ever reopens via this button, so this alone guarantees it's
              // always fully collapsed when it becomes visible.
              setMenuOpen((open) => !open);
              setOpenMobileItem(null);
              setSearchOpen(false);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-lime-400 hover:text-lime-400 sm:h-9 sm:w-9 md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-3xl border border-white/15 bg-brand-950/90 p-3 shadow-xl backdrop-blur-xl">
          <form
            onSubmit={handleSearchSubmit}
            onClick={() => searchInputRef.current?.focus()}
            className="flex items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-xl"
          >
            <Search className="h-5 w-5 shrink-0 text-brand-500" />
            <input
              ref={searchInputRef}
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              type="text"
              placeholder="paneer tikka dosa, maybe?"
              className="w-full bg-transparent font-accent italic text-brand-900 placeholder:text-brand-900/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search recipes"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-400 text-brand-900 transition-colors hover:bg-lime-300"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <div className="mx-auto mt-2 max-h-[calc(100vh-6rem)] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/15 bg-brand-950/90 px-4 pb-6 pt-2 shadow-xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col divide-y divide-white/10">
            {PRIMARY_NAV.map((item) => {
              const isOpen = openMobileItem === item.href;
              return (
                <div key={item.href} className="py-1">
                  {item.children ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenMobileItem((current) => (current === item.href ? null : item.href))
                      }
                      className="flex w-full items-center justify-between py-2 font-nav text-base font-bold text-white/90 hover:text-lime-400"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 font-nav text-base font-bold text-white/90 hover:text-lime-400"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && isOpen && (
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
              );
            })}
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

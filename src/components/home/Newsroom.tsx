import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NEWS_TICKER } from "@/data/news";
import type { NewsPost } from "@/lib/types";

function highlightTitle(title: string, highlight: string) {
  const index = title.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <span className="text-lime-400">{title.slice(index, index + highlight.length)}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

export function Newsroom({ posts }: { posts: NewsPost[] }) {
  const [featured, ...rest] = posts;
  const tickerItems = [...NEWS_TICKER, ...NEWS_TICKER];

  return (
    <section id="newsroom" data-scroll-target className="py-16 sm:py-24">
      <Container>
        <h2 className="font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
          iD newsroom
        </h2>

        {featured && (
          <div className="mt-6 rounded-3xl bg-brand-800 p-8 sm:p-12">
            <div className="flex items-center justify-between font-mono text-xs font-semibold text-lime-300">
              <span>{featured.tag}</span>
              <span>01/0{posts.length}</span>
            </div>
            <h3 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-cream sm:text-4xl">
              {highlightTitle(featured.title, featured.highlight)}
            </h3>
            <Link
              href={featured.href}
              className="mt-4 inline-block font-accent italic text-cream/90 underline underline-offset-4 hover:text-lime-300"
            >
              read the announcement →
            </Link>
          </div>
        )}

        <div className="mt-2 overflow-hidden rounded-2xl bg-lime-400 py-3">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-sm font-bold tracking-wide text-brand-900">
            {tickerItems.map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-8">
                {item}
                <span aria-hidden>◆</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="flex aspect-4/3 items-center justify-center rounded-3xl bg-linear-to-br from-amber-100 via-orange-200 to-orange-400 text-6xl sm:aspect-auto sm:h-full">
            🥘
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-brand-500 p-8 text-cream">
            <p className="font-heading text-5xl font-extrabold text-lime-300 sm:text-6xl">45+</p>
            <p className="mt-2 font-accent italic text-lg sm:text-xl">waking up fresh to iD</p>
          </div>
        </div>

        {rest[0] && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Link
              href={rest[0].href}
              className="relative flex aspect-4/3 overflow-hidden rounded-3xl sm:aspect-auto"
            >
              <Image
                src="/brand/misc/newsroom-featured-tile.png"
                alt={rest[0].title}
                fill
                sizes="(min-width: 640px) 24rem, 90vw"
                className="object-cover"
              />
            </Link>
            <Link
              href="/whats-new"
              className="flex items-center justify-center rounded-3xl bg-lime-400 px-6 py-6 font-heading text-lg font-bold text-brand-900 transition-colors hover:bg-lime-300"
            >
              browse all →
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

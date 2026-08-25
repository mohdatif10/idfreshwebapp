import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IdLogo } from "@/components/ui/IdLogo";
import { ICON_MAP } from "@/components/ui/icon-map";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data/nav";

export function Footer() {
  return (
    <footer className="bg-brand-700 pb-28 pt-14 text-cream md:pb-14">
      <Container>
        <IdLogo markHeight={100} />

        <div className="my-10 h-px w-full bg-cream/20" />

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="flex flex-col gap-4">
            {FOOTER_LINKS.company.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-heading text-sm font-medium text-cream/90 hover:text-lime-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {FOOTER_LINKS.resources.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-heading text-sm font-medium text-cream/90 hover:text-lime-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-cream/60">
            © iD Fresh Food {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICON_MAP[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/40 text-cream transition-colors hover:border-lime-400 hover:text-lime-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}

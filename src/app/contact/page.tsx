import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CONTACT_ACTIONS, CONTACT_LOCATIONS, HEAD_OFFICE } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us | iD Fresh",
  description: "Get in touch with iD Fresh — visit us, call, email, or explore distribution opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container className="max-w-2xl text-center">
        <SectionLabel tone="teal">Contact Us</SectionLabel>
        <h1 className="mt-2 font-heading text-4xl font-extrabold text-brand-900 sm:text-5xl">
          We&rsquo;re always open to communicate
        </h1>
        <p className="mt-4 text-inkgray">
          If you want to share some love and feedback, or if you&rsquo;re looking to partner with
          us as a distributor, we&rsquo;re listening! Our products only get better with your
          feedback and our extended family.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CONTACT_ACTIONS.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full bg-brand-50 px-5 py-2.5 font-heading text-sm font-bold text-brand-800 transition-colors hover:bg-brand-100"
            >
              {action.label}
            </a>
          ))}
        </div>
      </Container>

      <section className="mt-16 bg-sand py-14">
        <Container className="max-w-2xl">
          <SectionLabel tone="teal">Get In Touch</SectionLabel>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-brand-900">
            Visit us, call, or drop us an email
          </h2>
          <p className="mt-3 text-inkgray">
            Enquiries about products, availability, ingredients or a quick hello are always
            welcome. You can visit us or get in touch via phone or email. Send us your details
            and your query, and we&rsquo;ll get back at the earliest.
          </p>

          <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-white p-6">
            <a
              href={HEAD_OFFICE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <div>
                <p className="font-heading text-sm font-bold text-brand-900 group-hover:text-brand-600">
                  {HEAD_OFFICE.name}
                </p>
                <p className="mt-1 flex items-center gap-1 text-sm text-inkgray">
                  {HEAD_OFFICE.address}
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </p>
              </div>
            </a>
            <a href={`tel:${HEAD_OFFICE.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-500" />
              <span className="text-sm font-semibold text-brand-900">{HEAD_OFFICE.phone}</span>
            </a>
            <a href={`mailto:${HEAD_OFFICE.email}`} className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-500" />
              <span className="text-sm font-semibold text-brand-900">{HEAD_OFFICE.email}</span>
            </a>
          </div>
        </Container>
      </section>

      <section className="mt-16">
        <Container className="max-w-2xl">
          <SectionLabel tone="teal">iD Kitchens</SectionLabel>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-brand-900">
            Here&rsquo;s where the magic happens in your city.
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {CONTACT_LOCATIONS.map((location, index) => (
              <div key={index} className="rounded-2xl border border-brand-100 p-5">
                <p className="font-heading text-sm font-bold text-brand-900">{location.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-inkgray">{location.address}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

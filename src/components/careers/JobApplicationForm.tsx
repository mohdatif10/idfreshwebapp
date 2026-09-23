"use client";

import { useState, type FormEvent } from "react";

const FIELDS = [
  { name: "name", placeholder: "Name", type: "text" },
  { name: "email", placeholder: "Email ID", type: "email" },
  { name: "phone", placeholder: "Phone Number", type: "tel" },
  { name: "ctc", placeholder: "Current CTC (in ₹)", type: "text" },
  { name: "linkedin", placeholder: "Linkedin URL", type: "url" },
  { name: "referredBy", placeholder: "Referred By (Name)", type: "text" },
] as const;

/**
 * Open/general application form — for candidates who don't see a role that
 * fits but still want to be considered. No backend exists yet (see
 * lib/services/careers.ts), so submitting just confirms receipt locally,
 * the same "mock today, real integration later" pattern used everywhere
 * else in this app.
 */
export function JobApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="apply" className="scroll-mt-24 bg-linear-to-br from-brand-600 to-brand-800 py-16 sm:py-20">
      <div className="mx-auto max-w-xl px-5 sm:px-8">
        <p className="text-lg text-cream">We&rsquo;re always looking for fresh talent.</p>
        <p className="mt-4 text-lg text-cream">Interested in joining us but unsure where you fit?</p>
        <p className="mt-4 text-lg text-cream">Send us your details.</p>

        {submitted ? (
          <p className="mt-8 rounded-xl bg-white/10 p-5 text-cream">
            Thanks — we&rsquo;ve got your details and will reach out if there&rsquo;s a fit.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            {FIELDS.map((field) => (
              <input
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.name === "name" || field.name === "email"}
                className="w-full rounded-md border border-brand-100 bg-white px-4 py-3 text-brand-900 placeholder:text-inkgray/70 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            ))}

            <div>
              <label htmlFor="cv" className="block text-cream">
                Upload CV
              </label>
              <input
                id="cv"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                className="mt-2 text-sm text-cream file:mr-3 file:rounded-md file:border-0 file:bg-sand file:px-4 file:py-2 file:font-heading file:text-sm file:font-bold file:text-brand-900 hover:file:bg-cream"
              />
              <p className="mt-2 text-sm text-cream/70">(Docx / PDF format only)</p>
            </div>

            <button
              type="submit"
              className="mt-2 w-fit rounded-md bg-sand px-6 py-2.5 font-heading font-bold text-brand-900 transition-colors hover:bg-cream"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

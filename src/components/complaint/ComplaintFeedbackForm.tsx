"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Paperclip, ShieldCheck, X } from "lucide-react";

const REASON_OPTIONS = ["Complaint", "Feedback", "Suggestion", "Product Query", "Other"] as const;

const INPUT_CLASSES =
  "w-full rounded-md border border-brand-100 bg-white px-4 py-3 text-brand-900 placeholder:text-inkgray/70 focus:outline-none focus:ring-2 focus:ring-lime-400";

type OtpStage = "idle" | "sent" | "verified";

/**
 * UI/UX only — no backend yet. Phone verification is mocked (any 4+ digit
 * code "confirms"), and attachments are held in memory for preview only,
 * matching the "mock today, real integration later" pattern used by
 * JobApplicationForm.
 */
export function ComplaintFeedbackForm() {
  const [phone, setPhone] = useState("");
  const [otpStage, setOtpStage] = useState<OtpStage>("idle");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value);
    if (otpStage !== "idle") {
      setOtpStage("idle");
      setOtp("");
      setOtpError(false);
    }
  }

  function handleSendOtp() {
    if (phone.trim().length < 8) return;
    setOtpStage("sent");
    setOtp("");
    setOtpError(false);
  }

  function handleVerifyOtp() {
    if (otp.trim().length < 4) {
      setOtpError(true);
      return;
    }
    setOtpStage("verified");
    setOtpError(false);
  }

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    setAttachments((prev) => [...prev, ...files]);
    event.target.value = "";
  }

  function removeAttachment(index: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-600" />
        <p className="mt-3 font-heading text-lg font-bold text-brand-900">
          Thanks — we&rsquo;ve got your message.
        </p>
        <p className="mt-1 text-sm text-inkgray">
          Our team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      <input name="name" type="text" placeholder="Name" required className={INPUT_CLASSES} />

      <div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={handlePhoneChange}
            disabled={otpStage === "verified"}
            className={`${INPUT_CLASSES} disabled:bg-brand-50 disabled:text-inkgray`}
          />
          {otpStage === "verified" ? (
            <span className="flex shrink-0 items-center gap-1.5 rounded-md bg-brand-50 px-4 py-3 font-heading text-sm font-bold text-brand-700">
              <ShieldCheck className="h-4 w-4" />
              Verified
            </span>
          ) : (
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={phone.trim().length < 8}
              className="shrink-0 rounded-md border-2 border-brand-800 px-5 py-3 font-heading text-sm font-bold text-brand-800 transition-colors hover:bg-brand-50 disabled:cursor-not-allowed disabled:border-brand-100 disabled:text-inkgray/50 disabled:hover:bg-transparent"
            >
              {otpStage === "sent" ? "Resend OTP" : "Send OTP"}
            </button>
          )}
        </div>

        {otpStage === "sent" && (
          <div className="mt-3 flex flex-col gap-2 rounded-md bg-brand-50 p-4 sm:flex-row sm:items-center sm:gap-3">
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter OTP"
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value);
                setOtpError(false);
              }}
              className="w-full rounded-md border border-brand-100 bg-white px-4 py-2.5 text-brand-900 placeholder:text-inkgray/70 focus:outline-none focus:ring-2 focus:ring-lime-400 sm:max-w-[10rem]"
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              className="shrink-0 rounded-md bg-brand-800 px-5 py-2.5 font-heading text-sm font-bold text-cream transition-colors hover:bg-brand-900"
            >
              Confirm OTP
            </button>
            <p className="text-xs text-inkgray sm:ml-auto">
              We&rsquo;ve sent a verification code to {phone}
            </p>
          </div>
        )}
        {otpError && (
          <p className="mt-2 text-xs font-semibold text-red-600">Enter the code sent to your number.</p>
        )}
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <input name="email" type="email" placeholder="Email" required className={`${INPUT_CLASSES} sm:flex-1`} />
        <select
          name="reason"
          defaultValue=""
          required
          className={`${INPUT_CLASSES} sm:flex-1`}
        >
          <option value="" disabled>
            —Please choose an option—
          </option>
          {REASON_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <input name="subject" type="text" placeholder="Subject" className={INPUT_CLASSES} />
      <input name="place" type="text" placeholder="Place" className={INPUT_CLASSES} />
      <textarea
        name="message"
        placeholder="Message / Feedback"
        required
        rows={6}
        className={`${INPUT_CLASSES} resize-y`}
      />

      <div>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-md border-2 border-dashed border-brand-200 px-5 py-3 font-heading text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50"
        >
          <Paperclip className="h-4 w-4" />
          Attach photos or videos
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleFilesSelected}
          className="hidden"
        />

        {attachments.length > 0 && (
          <ul className="mt-3 flex flex-col gap-2">
            {attachments.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between gap-3 rounded-md bg-brand-50 px-4 py-2 text-sm text-brand-900"
              >
                <span className="truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeAttachment(index)}
                  aria-label={`Remove ${file.name}`}
                  className="shrink-0 text-inkgray hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={otpStage !== "verified"}
          className="w-fit rounded-full border-2 border-brand-800 px-8 py-3 font-heading text-sm font-bold text-brand-800 transition-colors hover:bg-brand-50 disabled:cursor-not-allowed disabled:border-brand-100 disabled:text-inkgray/50 disabled:hover:bg-transparent"
        >
          Send Message
        </button>
        {otpStage !== "verified" && (
          <p className="mt-2 text-xs text-inkgray">Verify your phone number to send your message.</p>
        )}
      </div>
    </form>
  );
}

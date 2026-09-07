"use client";

import { FormEvent, useEffect, useState } from "react";
import { Send, ShieldCheck } from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: ""
};

const formSubmitEndpoint = "https://formsubmit.co/sanjeebmezu@gmail.com";
const thankYouUrl = "https://consultation.mezustudio.com/thank-you";

export function CTAForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHasHydrated(true), 0);

    return () => window.clearTimeout(timer);
  }, []);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: Errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlPattern =
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

    if (!form.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Active Email is required.";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.whatsapp.trim()) nextErrors.whatsapp = "WhatsApp Number is required.";
    if (!form.businessName.trim()) nextErrors.businessName = "Business Name is required.";
    if (form.website.trim() && !urlPattern.test(form.website.trim())) {
      nextErrors.website = "Enter a valid website or Facebook URL.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!validate()) {
      event.preventDefault();
      return;
    }

    setIsSubmitting(true);
  }

  return (
    <section id="book-call" className="section-shell scroll-mt-8 pb-20 pt-6 sm:pb-28">
      <div className="panel mx-auto grid max-w-6xl gap-8 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Book the call</p>
          <h2 className="mt-4 text-3xl font-black tracking-normal text-white sm:text-5xl">
            Get your customized AI marketing plan
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            One-to-One Consultation. Customized Strategy for Your Business.
          </p>
          <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-slate-200">
            <ShieldCheck size={17} className="text-brand" />
            We respect your privacy. No spam.
          </div>
        </div>

        <form
          action={formSubmitEndpoint}
          method="post"
          onSubmit={handleSubmit}
          noValidate={hasHydrated}
          className="grid gap-5"
        >
          <input type="hidden" name="_subject" value="New AI Marketing Consultation Booking" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={thankYouUrl} />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          <Field
            id="fullName"
            name="Full Name"
            label="Full Name"
            placeholder="Enter your full name"
            value={form.fullName}
            error={errors.fullName}
            onChange={(value) => updateField("fullName", value)}
            required
          />
          <Field
            id="email"
            name="Email"
            label="Active Email"
            placeholder="you@example.com"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(value) => updateField("email", value)}
            required
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="whatsapp"
              name="WhatsApp Number"
              label="WhatsApp Number"
              placeholder="Your WhatsApp number"
              value={form.whatsapp}
              error={errors.whatsapp}
              onChange={(value) => updateField("whatsapp", value)}
              required
            />
            <Field
              id="businessName"
              name="Business Name"
              label="Business Name"
              placeholder="Your business name"
              value={form.businessName}
              error={errors.businessName}
              onChange={(value) => updateField("businessName", value)}
              required
            />
          </div>
          <Field
            id="website"
            name="Website or Facebook URL"
            label="Website or Facebook URL"
            placeholder="https://example.com or Facebook page"
            value={form.website}
            error={errors.website}
            onChange={(value) => updateField("website", value)}
          />
          <div className="grid gap-2">
            <label htmlFor="message" className="label">
              Anything You Want to Say
            </label>
            <textarea
              id="message"
              name="Message"
              className="field min-h-32 resize-y py-4"
              placeholder="Tell us what you want help with"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-black text-ink shadow-glow transition hover:bg-accent focus:outline-none focus:ring-4 focus:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Booking..." : "Book Free Consultation"}
            <Send size={18} />
          </button>
          <p className="flex items-center justify-center gap-2 text-center text-sm font-medium text-slate-400">
            <ShieldCheck size={16} className="text-brand" />
            We respect your privacy. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  required = false
}: {
  id: keyof FormState;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="label">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="field"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm font-medium text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";

const SERVICE_OPTIONS = [
  "Lawn Mowing & Maintenance",
  "Landscape Design & Install",
  "Mulching & Bed Refresh",
  "Hardscaping & Patios",
  "Seasonal Cleanup",
  "Irrigation Systems",
  "Something else",
];

function Field({
  label,
  name,
  ...inputProps
}: { label: string; name: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        {...inputProps}
      />
    </div>
  );
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-emerald-800">
          Thanks — request received!
        </h3>
        <p className="mt-2 text-sm text-emerald-700">
          This is a demo form, so nothing was actually sent. On the live site,
          this routes straight to the owner&apos;s phone and email the moment
          it&apos;s submitted.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" type="text" required />
        <Field label="Phone number" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          What do you need done?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
      >
        Get My Free Quote
      </button>
    </form>
  );
}

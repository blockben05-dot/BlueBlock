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

type Status = "idle" | "submitting" | "success" | "error";

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
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-emerald-800">
          Thanks — we got it!
        </h3>
        <p className="mt-2 text-sm text-emerald-700">
          Your request was sent. We&apos;ll reach out shortly.
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

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">
          Something went wrong sending your request. Please try again, or
          call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Quote"}
      </button>
    </form>
  );
}

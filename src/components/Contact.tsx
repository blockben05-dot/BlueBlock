import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { QuoteForm } from "./QuoteForm";

const CONTACT_DETAILS = [
  { label: "(302) 555-0142", icon: Phone },
  { label: "hello@diamondstateblocklandscaping.example", icon: Mail },
  { label: "Newark, DE — serving New Castle County", icon: MapPin },
  { label: "Mon–Sat, 7am–6pm", icon: Clock },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Get a Free Quote
          </h2>
          <p className="mt-3 text-slate-600">
            Tell us about the job and we&apos;ll get back to you fast.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <QuoteForm />
          </div>

          <div className="md:col-span-2">
            <div className="rounded-2xl bg-emerald-800 p-8 text-white">
              <h3 className="text-lg font-semibold">Prefer to just call?</h3>
              <ul className="mt-6 space-y-4">
                {CONTACT_DETAILS.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-start gap-3 text-sm">
                    <Icon size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

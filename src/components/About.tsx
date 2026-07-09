import { ShieldCheck, MapPin, Clock, Users } from "lucide-react";

const BADGES = [
  { label: "Licensed & insured", icon: ShieldCheck },
  { label: "Locally owned & operated", icon: MapPin },
  { label: "12+ years in business", icon: Clock },
  { label: "400+ properties served", icon: Users },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            About Diamond State Block Landscaping
          </h2>
          <p className="mt-4 text-slate-600">
            We&apos;re a local crew based in Newark, DE, serving homeowners and
            small businesses across New Castle County — Hockessin, Bear, Pike
            Creek, and everywhere in between. No call centers, no
            subcontractors you&apos;ve never met — just the same crew showing
            up on schedule, season after season.
          </p>
          <p className="mt-4 text-slate-600">
            Whatever the property needs — a weekly mow, a full landscape
            redesign, or a patio built for summer — we quote it straight and
            do the work right the first time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {BADGES.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <p className="text-sm font-medium text-slate-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

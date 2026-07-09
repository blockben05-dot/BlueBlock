import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Hockessin, DE",
    quote:
      "They transformed our front beds in a weekend. Communication was great the whole time.",
  },
  {
    name: "Tom R.",
    location: "Newark, DE",
    quote:
      "Same crew every week, and they always show up when they say they will. Lawn has never looked better.",
  },
  {
    name: "Denise K.",
    location: "Bear, DE",
    quote:
      "Got a quote same day and the patio project was done faster than we expected.",
  },
];

export function Reviews() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            What Neighbors Are Saying
          </h2>
          <p className="mt-3 text-slate-600">
            Sample reviews shown for demo purposes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-700">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {review.name}
              </p>
              <p className="text-xs text-slate-500">{review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Leaf } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Newark &amp; Hockessin, DE
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Lawns and landscapes your neighbors will ask about.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Diamond State Block Landscaping keeps New Castle County properties
            looking sharp all year — mowing, mulching, cleanups, and full
            landscape installs from a local crew you can actually reach.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-600 hover:text-emerald-600"
            >
              See Our Work
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <dt className="text-2xl font-bold text-slate-900">12+</dt>
              <dd className="text-sm text-slate-500">Years in business</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-slate-900">400+</dt>
              <dd className="text-sm text-slate-500">Properties served</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-slate-900">Licensed</dt>
              <dd className="text-sm text-slate-500">&amp; fully insured</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-800 shadow-xl">
          <Leaf className="h-20 w-20 text-white/40" strokeWidth={1} />
          <span className="absolute bottom-4 text-sm font-medium text-white/70">
            Project photo placeholder
          </span>
        </div>
      </div>
    </section>
  );
}

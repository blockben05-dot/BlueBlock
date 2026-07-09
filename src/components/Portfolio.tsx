import { ImageIcon } from "lucide-react";

type Project = {
  title: string;
  location: string;
  tag: string;
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    title: "Front Yard Renovation",
    location: "Hockessin, DE",
    tag: "Landscape Design",
    gradient: "from-emerald-400 to-emerald-700",
  },
  {
    title: "Paver Patio & Fire Pit",
    location: "Newark, DE",
    tag: "Hardscaping",
    gradient: "from-amber-400 to-amber-700",
  },
  {
    title: "Weekly Lawn Program",
    location: "Bear, DE",
    tag: "Maintenance",
    gradient: "from-lime-400 to-emerald-600",
  },
  {
    title: "Fall Cleanup & Mulch",
    location: "Pike Creek, DE",
    tag: "Seasonal",
    gradient: "from-orange-400 to-rose-600",
  },
  {
    title: "Retaining Wall Install",
    location: "Hockessin, DE",
    tag: "Hardscaping",
    gradient: "from-stone-400 to-stone-700",
  },
  {
    title: "New Sod & Irrigation",
    location: "Newark, DE",
    tag: "Installation",
    gradient: "from-teal-400 to-emerald-700",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Portfolio
          </h2>
          <p className="mt-3 text-slate-600">
            A sample of recent projects around Newark and Hockessin.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div
                className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <ImageIcon className="h-10 w-10 text-white/50" strokeWidth={1.5} />
                <span className="absolute bottom-3 rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white">
                  Photo placeholder
                </span>
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  {project.tag}
                </span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Scissors,
  TreePine,
  Sprout,
  Grid3x3,
  Wind,
  Droplets,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    title: "Lawn Mowing & Maintenance",
    description:
      "Weekly or bi-weekly mowing, edging, and trimming to keep your yard camera-ready.",
    icon: Scissors,
  },
  {
    title: "Landscape Design & Install",
    description:
      "Full design-build for beds, walkways, and plantings that fit your property.",
    icon: TreePine,
  },
  {
    title: "Mulching & Bed Refresh",
    description:
      "Seasonal mulch, edging, and bed cleanups that make everything pop.",
    icon: Sprout,
  },
  {
    title: "Hardscaping & Patios",
    description:
      "Paver patios, retaining walls, and walkways built to last.",
    icon: Grid3x3,
  },
  {
    title: "Seasonal Cleanup",
    description:
      "Spring and fall cleanups — leaves, debris, and prep for the next season.",
    icon: Wind,
  },
  {
    title: "Irrigation Systems",
    description:
      "Installation and tune-ups so your lawn gets water exactly where it needs it.",
    icon: Droplets,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Services
          </h2>
          <p className="mt-3 text-slate-600">
            Everything your property needs, from a weekly mow to a full
            backyard overhaul.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

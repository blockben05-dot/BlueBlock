const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm font-semibold text-white">
          Diamond State Block{" "}
          <span className="text-emerald-400">Landscaping</span>
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs">
          &copy; {new Date().getFullYear()} Diamond State Block Landscaping —
          demo site
        </p>
      </div>
    </footer>
  );
}

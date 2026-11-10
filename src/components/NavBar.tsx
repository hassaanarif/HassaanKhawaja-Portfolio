import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
];

function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4">
      <nav
        className={`section-container nav-surface rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
          scrolled ? "shadow-2xl shadow-black/60 border-white/15" : "border-white/10"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <a
            href="#about"
            className="group flex items-center gap-3"
            aria-label="Khawaja Hassaan Arif, home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] p-0.5 shadow-lg shadow-[var(--accent)]/20 transition-transform duration-200 group-hover:scale-105">
              <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-[var(--page-bg)] font-mono text-xs font-black tracking-tight text-[var(--accent)]">
                KHA
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-bold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors">
                Khawaja Hassaan Arif
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Senior Engineer · Full-Stack & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors duration-150 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls: Let's Talk CTA & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Contact Button */}
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] px-5 py-2 text-xs font-bold text-[var(--accent-contrast)] shadow-md shadow-[var(--accent)]/20 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent)]/30"
            >
              Let's Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10 lg:hidden"
              aria-expanded={menuIsOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuIsOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuIsOpen && (
          <div className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-3 lg:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuIsOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;

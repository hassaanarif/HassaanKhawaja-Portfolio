import { useState } from "react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
];

function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="nav-surface sticky top-0 z-20 border-b border-white/[0.08] backdrop-blur-xl">
      <nav className="section-container flex min-h-[72px] flex-wrap items-center justify-between gap-4 py-3" aria-label="Main navigation">
        <a href="#about" className="flex items-center gap-3" aria-label="Hassaan Khawaja, home">
          <span className="accent-bg accent-contrast-text flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black tracking-tight">
            HK
          </span>
          <span className="hidden text-sm font-semibold text-[#e8e9e7] sm:inline">Hassaan Khawaja</span>
        </a>

        <button
          type="button"
          className="rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-white md:hidden"
          aria-expanded={menuIsOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? "Close" : "Menu"}
        </button>

        <div
          id="primary-navigation"
          className={`${menuIsOpen ? "flex" : "hidden"} w-full flex-col gap-2 pb-2 md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:pb-0`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuIsOpen(false)}
              className="py-2 text-sm text-[#a7afa8] transition hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuIsOpen(false)}
            className="accent-border accent-text mt-1 rounded-full border px-5 py-2.5 text-center text-sm font-semibold transition hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] md:mt-0"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

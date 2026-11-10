import github from "../assets/icon-github.svg";
import linkedin from "../assets/icon-linkedin.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="border-t border-white/10 bg-black/40 mt-12">
      <div className="section-container flex flex-col items-center justify-between gap-6 py-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-mono text-xs text-slate-400">
            © {new Date().getFullYear()} Khawaja Hassaan Arif · Built with React, TypeScript & Tailwind CSS
          </p>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-slate-300 hover:border-[var(--accent)] hover:text-white transition-all flex items-center gap-1.5"
        >
          <span>Back to Top</span>
          <span>↑</span>
        </button>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/khawajahassaanarif/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="transition-transform hover:scale-110"
          >
            <img src={linkedin} alt="LinkedIn" className="h-5 w-5 opacity-70 transition hover:opacity-100" />
          </a>
          <a
            href="https://github.com/hassaanarif"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="transition-transform hover:scale-110"
          >
            <img src={github} alt="GitHub" className="h-5 w-5 invert opacity-70 transition hover:opacity-100" />
          </a>
          <a
            href="mailto:hassaanarif.ha@gmail.com"
            className="font-mono text-xs text-slate-400 transition hover:text-[var(--accent)]"
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

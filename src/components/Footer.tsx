import github from "../assets/icon-github.svg";
import linkedin from "../assets/icon-linkedin.svg";

function Footer() {
  return (
    <footer id="footer" className="border-t border-white/[0.08]">
      <div className="section-container flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-[#9ba79e]">
          © {new Date().getFullYear()} Hassaan Khawaja
        </p>
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/khawajahassaanarif/" target="_blank" rel="noreferrer" title="LinkedIn">
            <img src={linkedin} alt="LinkedIn" className="h-7 w-7 opacity-70 transition hover:opacity-100" />
          </a>
          <a href="https://github.com/hassaanarif" target="_blank" rel="noreferrer" title="GitHub">
            <img src={github} alt="GitHub" className="h-6 w-6 invert opacity-70 transition hover:opacity-100" />
          </a>
          <a href="mailto:hassaanarif.ha@gmail.com" className="text-sm text-[#9ba79e] transition hover:text-[var(--accent)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

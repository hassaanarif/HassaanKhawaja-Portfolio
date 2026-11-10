import { motion } from "framer-motion";
import moment from "moment";
import JobProp from "../interfaces/Job";

const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = moment(startDate).format("MMM YYYY");
  const end = endDate ? moment(endDate).format("MMM YYYY") : "Present";
  return `${start} — ${end}`;
};

export default function Job({ company, location, positions, time, startDate, endDate, companyLogoURL }: JobProp) {
  const isCurrent = !endDate || endDate.toLowerCase() === "present";

  return (
    <motion.article
      className="surface-card relative p-6 sm:p-8 transition-all duration-300 hover:border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45 }}
    >
      {/* Timeline indicator node for desktop */}
      <div
        className="hidden md:flex absolute -left-[31px] top-8 h-4 w-4 items-center justify-center rounded-full bg-[var(--page-bg)] ring-2 ring-[var(--accent)]"
        aria-hidden="true"
      >
        <span className={`h-1.5 w-1.5 rounded-full ${isCurrent ? "bg-[var(--accent)] animate-ping" : "bg-white"}`} />
      </div>

      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/90 p-2 shadow-md">
            <img src={companyLogoURL} alt={`${company} logo`} className="max-h-full max-w-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-lg tracking-tight">{company}</h3>
              {isCurrent && (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              )}
            </div>
            <p className="mt-0.5 font-mono text-xs text-slate-400">
              {location} · <span className="text-slate-300">{time}</span>
            </p>
          </div>
        </div>

        <div className="flex sm:flex-col sm:items-end justify-between items-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
            {formatDateRange(startDate, endDate)}
          </span>
        </div>
      </header>

      <div className="mt-6 space-y-6 border-t border-white/10 pt-5">
        {positions.map((position) => {
          // Parse out tech stack line if present
          const contentParts = position.content.split(/Tech stack:/i);
          const bulletsHtml = contentParts[0]
            .replace(/(?:<br\s*\/?>|\s|•|·|-)+$/gi, "")
            .trim();
          const techStackRaw = contentParts[1];
          const techBadges = techStackRaw
            ? techStackRaw
                .replace(/<br\s*\/?>/gi, "")
                .replace(/\./g, "")
                .split(",")
                .map((t) => t.trim().replace(/^and\s+/i, ""))
                .filter(Boolean)
            : [];

          return (
            <section key={position.title} className="space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span>
                <span>{position.title}</span>
              </h4>

              <div className="experience-copy text-sm leading-relaxed text-slate-300 pl-3 border-l border-white/10">
                <div dangerouslySetInnerHTML={{ __html: bulletsHtml }} />
              </div>

              {techBadges.length > 0 && (
                <div className="pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technologies Deployed:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {techBadges.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:border-[var(--accent)]/50 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </motion.article>
  );
}

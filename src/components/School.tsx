import { motion } from "framer-motion";
import SchoolProp from "../interfaces/School";

export default function School({ name, location, degree, startDate, endDate, logoURL, highlights }: SchoolProp) {
  return (
    <motion.article
      className="surface-card p-6 sm:p-7 transition-all duration-300 hover:border-white/20"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-md">
          <img src={logoURL} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">{degree}</h3>
              <p className="mt-0.5 font-mono text-xs text-slate-400">
                {name} · {location}
              </p>
            </div>
            <span className="self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-[var(--accent)]">
              {startDate} — {endDate}
            </span>
          </div>

          <div className="education-copy mt-4 text-sm leading-relaxed text-slate-300 pl-3 border-l border-white/10">
            <div dangerouslySetInnerHTML={{ __html: highlights }} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

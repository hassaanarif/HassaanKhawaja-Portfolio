import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectProp from "../interfaces/Project";
import LazyImage from "./LazyImage";

function Project({
  index = 0,
  title,
  imageURL,
  briefIntroduction,
  theProblem,
  myContributions,
  theOutcome,
  technologiesUsed,
  projectURL,
}: ProjectProp) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const isFeatured = index === 0;

  const displayUrl = projectURL ? projectURL.replace(/^https?:\/\//i, "") : `${title.toLowerCase().replace(/[^a-z0-9]/g, "")}.dev`;

  const techBadges = technologiesUsed
    ? technologiesUsed
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  return (
    <motion.article
      layout
      className={`surface-card group overflow-hidden transition-all duration-300 hover:border-white/20 ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45 }}
    >
      {/* App / Browser Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>
        
        {projectURL ? (
          <a
            href={projectURL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-0.5 font-mono text-[11px] text-slate-300 hover:border-[var(--accent)] hover:text-white transition-colors"
            title="Open project link"
          >
            <span className="truncate max-w-[200px] sm:max-w-[320px]">{displayUrl}</span>
            <span className="text-[10px] text-[var(--accent)] font-bold">↗</span>
          </a>
        ) : (
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 font-mono text-[11px] text-slate-400">
            {displayUrl}
          </div>
        )}

        <div className="w-8"></div>
      </div>

      <div className={`grid ${isFeatured ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        {/* Project Image Preview */}
        <div
          className={`relative overflow-hidden bg-black/30 ${
            isFeatured ? "min-h-[280px] lg:min-h-full" : "aspect-[16/10]"
          }`}
        >
          <LazyImage
            src={imageURL}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-bottom)]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className={`flex flex-col p-6 sm:p-7 ${isFeatured ? "lg:p-8" : ""}`}>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="eyebrow text-[11px]">
              {isFeatured ? "FEATURED ARCHITECTURE" : `PROJECT 0${index + 1}`}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-300">{briefIntroduction}</p>

          {/* Outcome / Impact Banner */}
          <div className="mt-5 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-3.5">
            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)] uppercase tracking-wider mb-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Verified Impact & Outcome</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{theOutcome}</p>
          </div>

          {/* Collapsible Architecture & Contributions */}
          <div className="mt-5 border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="flex w-full items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 hover:text-[var(--accent)] transition-colors py-1"
            >
              <span>{detailsOpen ? "Hide Technical Breakdown" : "Explore Technical Breakdown"}</span>
              <svg
                className={`w-4 h-4 text-[var(--accent)] transition-transform duration-200 ${
                  detailsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {detailsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs leading-relaxed text-slate-300">
                    <div>
                      <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-0.5">
                        Problem Statement:
                      </strong>
                      <span>{theProblem}</span>
                    </div>

                    <div>
                      <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-0.5">
                        Engineering Contribution:
                      </strong>
                      <span>{myContributions}</span>
                    </div>

                    <div>
                      <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        Stack & Tools:
                      </strong>
                      <div className="flex flex-wrap gap-1.5">
                        {techBadges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-200"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default Project;

import { useState } from "react";
import certifications from "../constants/Certifications";
import Certificate from "./Certificate";

function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="section-container section-spacing pt-0">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="eyebrow mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>CONTINUOUS MASTERY</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-accent-text">verified courses</span>.
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-400">
          In-depth technical coursework across enterprise TypeScript, React, SQL optimization, and backend architectures.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayedCertifications.map((certificate, index) => (
          <Certificate
            key={index}
            title={certificate.title}
            issuer={certificate.issuer}
            duration={certificate.duration}
            logoURL={certificate.logoURL}
          />
        ))}
      </div>

      {certifications.length > 6 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 font-mono text-xs font-semibold text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-[var(--accent)] hover:bg-white/10 hover:text-white"
          >
            <span>{showAll ? "Show Fewer Certifications" : `Show All (${certifications.length}) Certifications`}</span>
            <svg
              className={`h-3.5 w-3.5 text-[var(--accent)] transition-transform ${showAll ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

export default Certifications;

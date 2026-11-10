import { motion } from "framer-motion";
import ProjectProp from "../interfaces/Project";
import LazyImage from "./LazyImage";

function Project({
  index,
  title,
  imageURL,
  briefIntroduction,
  theProblem,
  myContributions,
  theOutcome,
  technologiesUsed,
}: ProjectProp) {
  const isFeatured = index === 0;

  return (
    <motion.article
      className={`surface-card group overflow-hidden ${isFeatured ? "lg:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45 }}
    >
      <div className={`grid ${isFeatured ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
        <div className={`input-surface overflow-hidden ${isFeatured ? "min-h-64 lg:min-h-full" : "aspect-[16/9]"}`}>
          <LazyImage
            src={imageURL}
            alt={`${title} project preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        </div>
        <div className={`flex flex-col p-5 sm:p-7 ${isFeatured ? "lg:p-9" : ""}`}>
          <p className="eyebrow mb-3">{isFeatured ? "Featured project" : "Project"}</p>
          <h3 className="text-xl font-semibold tracking-tight text-[#f0f1ed] sm:text-2xl">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#a7afa8]">{briefIntroduction}</p>

          <div className="accent-border mt-5 border-l-2 pl-4">
            <p className="accent-text text-xs font-bold uppercase tracking-[0.12em]">Impact</p>
            <p className="mt-1 text-sm leading-6 text-[#d3d9d3]">{theOutcome}</p>
          </div>

          <details className="mt-5 border-t border-white/[0.08] pt-4">
            <summary className="accent-marker cursor-pointer text-sm font-semibold text-[#d7ddd7] marker:text-[var(--accent)] hover:text-[var(--accent)]">
              More about the project
            </summary>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#a7afa8]">
              <p>
                <span className="font-semibold text-[#e1e6e1]">Challenge: </span>
                {theProblem}
              </p>
              <p>
                <span className="font-semibold text-[#e1e6e1]">My contribution: </span>
                {myContributions}
              </p>
              <p>
                <span className="font-semibold text-[#e1e6e1]">Tools: </span>
                {technologiesUsed}
              </p>
            </div>
          </details>
        </div>
      </div>
    </motion.article>
  );
}

export default Project;

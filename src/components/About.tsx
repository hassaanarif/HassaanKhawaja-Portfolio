import { motion } from "framer-motion";
import DP from "../assets/DP.jpeg";

const highlights = [
  { value: "5+", label: "Years building software" },
  { value: "2,200+", label: "Schools mapped" },
  { value: "60%", label: "Peak DB usage reduced" },
  { value: "£30K", label: "Revenue from reporting" },
];

function About() {
  return (
    <section id="about" className="section-container section-spacing pb-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-6">Senior software engineer · Full-stack & AI</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.06em] text-[#f0f1ed] sm:text-6xl lg:text-7xl">
            Building software
            <span className="accent-text block">for real-world</span>
            complexity.
          </h1>
          <p className="muted-copy mt-7 max-w-2xl text-base sm:text-lg">
            I’m Hassaan Khawaja, a software engineer with 5+ years of experience building web applications and
            distributed systems across government, enterprise, SaaS, and AI. I turn complex problems into reliable,
            easy-to-use products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="accent-bg accent-contrast-text rounded-full px-6 py-3 text-sm font-bold transition"
            >
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a
              href="#contact"
              className="accent-text accent-border rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#a7afa8]">
            <a className="teal-link" href="https://www.linkedin.com/in/khawajahassaanarif/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="teal-link" href="https://github.com/hassaanarif" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="teal-link" href="mailto:hassaanarif.ha@gmail.com">
              Email ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="accent-soft-border absolute -inset-4 rounded-[2rem] border" />
          <div className="raised-surface relative overflow-hidden rounded-[1.75rem] border border-white/10 p-3">
            <img src={DP} alt="Hassaan Khawaja" className="aspect-square w-full rounded-[1.25rem] object-cover" />
            <div className="flex items-center justify-between gap-4 px-3 py-4">
              <div>
                <p className="font-semibold text-white">Hassaan Khawaja</p>
                <p className="mt-1 text-sm text-[#9ba79e]">Lahore, Pakistan</p>
              </div>
              <span className="accent-soft-bg accent-soft-border accent-text rounded-full border px-3 py-1.5 text-xs font-semibold">
                Software engineer
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {highlights.map((highlight) => (
          <div key={highlight.label} className="surface-card px-5 py-5 sm:px-6">
            <p className="accent-text text-3xl font-semibold tracking-tight">{highlight.value}</p>
            <p className="mt-2 text-sm text-[#a7afa8]">{highlight.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

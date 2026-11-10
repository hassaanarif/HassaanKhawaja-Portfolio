import { useState } from "react";
import { motion } from "framer-motion";
import DP from "../assets/DP.jpeg";
import { toast } from "react-toastify";

const highlights = [
  {
    value: "5+",
    label: "Years in Production",
    detail: "Enterprise, SaaS, Gov & AI",
    icon: (
      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    value: "2,200+",
    label: "Schools Mapped",
    detail: "NSW Digital Twin GIS",
    icon: (
      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    value: "60%",
    label: "Peak DB Reduction",
    detail: "Azure optimization & microservices",
    icon: (
      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    value: "£30k+",
    label: "Revenue Generated",
    detail: "Custom reporting & dashboards",
    icon: (
      <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hassaanarif.ha@gmail.com");
    setCopied(true);
    toast.info("Email copied to clipboard! 📋", {
      position: "bottom-center",
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="section-container section-spacing pt-8 sm:pt-14 pb-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Left Hero Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Senior Software Engineer · Full-Stack & AI
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
            Architecting <span className="gradient-accent-text">intelligent systems</span> & scalable software.
          </h1>

          {/* Bio copy */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            I’m <strong className="text-white font-semibold">Khawaja Hassaan Arif</strong>, a senior engineer with 5+ years of
            experience building distributed web platforms, enterprise microservices, and generative AI agentic systems across
            healthcare AI, government infrastructure, and enterprise SaaS.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] px-6 py-3 text-sm font-bold text-[var(--accent-contrast)] shadow-lg shadow-[var(--accent)]/20 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent)]/30"
            >
              <span>Explore Selected Work</span>
              <span aria-hidden="true">↘</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-[var(--accent)] hover:bg-white/10"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400 font-mono text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="h-4 w-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[var(--accent)] transition-colors"
              href="https://www.linkedin.com/in/khawajahassaanarif/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
              <span>LinkedIn ↗</span>
            </a>
            <span className="text-slate-600">/</span>
            <a
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[var(--accent)] transition-colors"
              href="https://github.com/hassaanarif"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub ↗</span>
            </a>
            <span className="text-slate-600">/</span>
            <a
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[var(--accent)] transition-colors"
              href="mailto:hassaanarif.ha@gmail.com"
            >
              <span>Email: hassaanarif.ha@gmail.com</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean Framed Picture Container */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="surface-card overflow-hidden border border-white/15 p-4 sm:p-5 shadow-2xl">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
              <img
                src={DP}
                alt="Khawaja Hassaan Arif"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Floating Overlay Info */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-white">Khawaja Hassaan Arif</h2>
                      <span className="inline-flex items-center rounded-full bg-rose-500/20 px-2 py-0.5 text-[10px] font-semibold text-rose-300 border border-rose-400/30">
                        ✓ Verified
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-xs text-slate-300">Senior Software Engineer</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-[11px] font-medium text-emerald-300 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Arbisoft
                  </span>
                </div>
              </div>
            </div>

            {/* Spec metadata pills */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                <span className="block text-[10px] font-mono uppercase text-slate-400">Location</span>
                <span className="font-semibold text-slate-200">Lahore, PK (UTC+5)</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                <span className="block text-[10px] font-mono uppercase text-slate-400">Core Domain</span>
                <span className="font-semibold text-slate-200">Full-Stack & GenAI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Metrics Bento Grid */}
      <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.label}
            className="surface-card group p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[var(--accent)]/40 transition-colors">
                {highlight.icon}
              </span>
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Metric</span>
            </div>
            <p className="gradient-accent-text text-3xl sm:text-4xl font-extrabold tracking-tight">
              {highlight.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-white">{highlight.label}</p>
            <p className="mt-0.5 text-xs text-slate-400">{highlight.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

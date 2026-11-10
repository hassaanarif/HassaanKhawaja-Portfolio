import { useState } from "react";
import projects from "../constants/Projects";
import Project from "./Project";

const independentProjects = [
  {
    title: "DSA Visualizer",
    tag: "Algorithms & Education",
    description: "An interactive visualization platform demonstrating real-time traversal and sorting algorithm behaviors.",
    stack: "React · TypeScript",
  },
  {
    title: "AI Practice Suite",
    tag: "Generative AI",
    description: "Contextual conversational agent with automated semantic sentiment extraction and real-time product summary generation.",
    stack: "Python · LangChain · OpenAI · Vector DB",
  },
];

type CategoryFilter = "all" | "ai" | "enterprise" | "apps";

function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "ai") {
      return (
        project.title.toLowerCase().includes("peter") ||
        project.title.toLowerCase().includes("chat") ||
        project.technologiesUsed.toLowerCase().includes("langgraph") ||
        project.technologiesUsed.toLowerCase().includes("bedrock")
      );
    }
    if (filter === "enterprise") {
      return (
        project.title.toLowerCase().includes("nsw") ||
        project.title.toLowerCase().includes("south wales") ||
        project.title.toLowerCase().includes("trackergo") ||
        project.title.toLowerCase().includes("database")
      );
    }
    if (filter === "apps") {
      return (
        project.title.toLowerCase().includes("portfolio") ||
        project.title.toLowerCase().includes("vidly") ||
        project.title.toLowerCase().includes("rock paper") ||
        project.title.toLowerCase().includes("chat")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="section-container section-spacing">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="eyebrow mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-accent-text">engineering projects</span>.
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-300">
          From agentic AI architectures and geospatial digital twins to cost-cutting enterprise platforms.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {[
          { key: "all", label: "All Projects", count: projects.length },
          { key: "ai", label: "AI & Distributed", count: 2 },
          { key: "enterprise", label: "Enterprise & GIS", count: 3 },
          { key: "apps", label: "Web Applications", count: 4 },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key as CategoryFilter)}
            className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-200 ${
              filter === tab.key
                ? "bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-md shadow-[var(--accent)]/20"
                : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <Project
            key={project.title}
            index={index}
            title={project.title}
            imageURL={project.imageURL}
            briefIntroduction={project.briefIntroduction}
            theProblem={project.theProblem}
            myContributions={project.myContributions}
            theOutcome={project.theOutcome}
            technologiesUsed={project.technologiesUsed}
            projectURL={project.projectURL}
          />
        ))}
      </div>

      {/* Outside of Work / Independent Projects */}
      <div className="mt-20">
        <div className="eyebrow mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          <span>RESEARCH & LABS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Independent experiments.
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Personal exploration into algorithmic visualization and generative applications.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {independentProjects.map((project, index) => (
            <article
              key={project.title}
              className="surface-card group flex flex-col justify-between p-6 transition-all duration-300 hover:border-white/25 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[var(--accent)] border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
                    LAB 0{index + 1}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{project.tag}</span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-3">
                <span className="font-mono text-[11px] text-slate-400">{project.stack}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

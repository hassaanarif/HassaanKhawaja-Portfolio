import { useState } from "react";
import skills from "../constants/Skills";
import SkillBadge from "./SkillBadge";

const skillGroups = [
  {
    title: "AI, GenAI & Cloud",
    description: "Orchestration, multi-agent frameworks, cloud compute and AI tooling",
    names: [
      "LangGraph",
      "LangChain",
      "AWS Bedrock",
      "MCP Servers",
      "RAG",
      "AWS Lambda",
      "Amazon S3",
      "Azure Functions",
      "Azure DevOps",
      "Docker",
      "CI/CD",
      "CircleCI",
      "GitHub Copilot",
      "Claude Code",
      "Cursor IDE",
      "Esri ArcGIS SDK",
    ],
  },
  {
    title: "Languages & Core",
    description: "Core languages used in production architectures",
    names: ["TypeScript", "JavaScript", "C#", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend Engineering",
    description: "Modern component architectures, state management, and geospatial visualization",
    names: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Redux",
      "React Query",
      "Tailwind css",
      "Styled Components",
      "Bootstrap",
      "Chakra UI",
      "JQuery",
    ],
  },
  {
    title: "Backend, APIs & Databases",
    description: "Distributed architectures, microservices, messaging queues, and databases",
    names: [
      "NodeJS",
      "ASP.NET Core",
      "ASP.NET Core MVC",
      "Microservices",
      "Serverless Architecture",
      "REST APIs",
      "GraphQL",
      "Kafka",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
    ],
  },
  {
    title: "Practices & Tooling",
    description: "Engineering rigor, quality assurance, and team delivery methodologies",
    names: [
      "OOP",
      "SOLID Principles",
      "Design Patterns",
      "TDD",
      "Agile & Scrum",
      "Swagger",
      "Git",
      "SonarQube",
      "Jira",
      "Confluence",
    ],
  },
];

function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  return (
    <section id="skills" className="section-container section-spacing">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="eyebrow mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-accent-text">technologies</span>.
          </h2>
          <p className="muted-copy mt-4 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of the modern languages, AI frameworks, cloud primitives, and architectural
            patterns I leverage in production.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="w-full sm:w-72">
          <label htmlFor="skill-search" className="sr-only">
            Search technologies
          </label>
          <div className="relative">
            <input
              id="skill-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. AWS, React, C#)..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-xs font-mono text-white placeholder-slate-400 backdrop-blur-sm focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
            <svg
              className="absolute left-3.5 top-3 h-4 w-4 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-2.5 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => {
          const matchingNames = group.names.filter((name) =>
            !normalizedQuery ? true : name.toLowerCase().includes(normalizedQuery)
          );

          if (normalizedQuery && matchingNames.length === 0) {
            return null;
          }

          return (
            <section
              key={group.title}
              className="surface-card flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:border-white/20"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{group.title}</span>
                  </h3>
                  <span className="font-mono text-xs text-slate-400">
                    {matchingNames.length} {matchingNames.length === 1 ? "tool" : "tools"}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">{group.description}</p>

                <div className="flex flex-wrap gap-2">
                  {matchingNames.map((name) => {
                    const skill = skills.find((item) => item.name.toLowerCase() === name.toLowerCase());
                    return <SkillBadge key={name} logoURL={skill?.logoURL} name={name} />;
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

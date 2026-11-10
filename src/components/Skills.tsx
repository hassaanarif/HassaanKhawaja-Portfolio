import skills from "../constants/Skills";
import SkillBadge from "./SkillBadge";

const skillGroups = [
  { title: "Languages", names: ["JavaScript", "TypeScript", "C#", "Python", "SQL", "HTML", "CSS"] },
  {
    title: "Frontend",
    names: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Redux",
      "React Query",
      "Tailwind css",
      "Styled Components",
      "JQuery",
      "Bootstrap",
      "Chakra UI",
    ],
  },
  {
    title: "Backend & data",
    names: [
      "NodeJS",
      "ASP.NET Core",
      "ASP.NET Core MVC",
      "Microservices",
      "Serverless Architecture",
      "REST APIs",
      "GraphQL",
      "Kafka",
      "MongoDB",
      "PostgreSQL",
      "SQL Server",
    ],
  },
  {
    title: "Cloud, AI & tools",
    names: [
      "AWS Bedrock",
      "AWS Lambda",
      "Amazon S3",
      "Azure Functions",
      "Azure DevOps",
      "Docker",
      "CI/CD",
      "CircleCI",
      "RAG",
      "LangGraph",
      "LangChain",
      "MCP Servers",
      "Esri ArcGIS SDK",
      "Swagger",
      "Git",
      "GitHub Copilot",
      "Claude Code",
      "Cursor IDE",
      "SonarQube",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Ways of working",
    names: ["OOP", "SOLID Principles", "Design Patterns", "TDD", "Agile & Scrum"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-container section-spacing">
      <div className="mb-10">
        <p className="eyebrow mb-3">My toolkit</p>
        <h2 className="section-title">Tools for the whole stack.</h2>
        <p className="muted-copy mt-4 max-w-2xl">
          From product interfaces to cloud services, I choose the tools that fit the problem and the team.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.title} className="surface-card p-5 sm:p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#dfe5df]">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.names.map((name) => {
                const skill = skills.find((item) => item.name === name);
                return skill ? <SkillBadge key={skill.name} logoURL={skill.logoURL} name={skill.name} /> : null;
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Skills;

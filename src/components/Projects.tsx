import projects from "../constants/Projects";
import Project from "./Project";

const independentProjects = [
  {
    title: "DSA Visualizer",
    description: "Building an interactive app that shows how data structures and algorithms work.",
  },
  {
    title: "AI Practice Project",
    description: "Built an AI app with contextual chat and automatic product review summaries.",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-container section-spacing">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="section-title">Projects with purpose.</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#a7afa8]">
          A few products and experiments where thoughtful engineering made a practical difference.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
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
          />
        ))}
      </div>

      <div className="mt-16">
        <p className="eyebrow mb-3">Outside of work</p>
        <h3 className="text-2xl font-semibold tracking-tight text-[#f0f1ed]">Independent projects</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {independentProjects.map((project, index) => (
            <article key={project.title} className="surface-card flex gap-4 p-5 sm:p-6">
              <span className="accent-soft-bg accent-text flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold">
                0{index + 1}
              </span>
              <div>
                <h4 className="font-semibold text-[#f0f1ed]">{project.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#a7afa8]">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

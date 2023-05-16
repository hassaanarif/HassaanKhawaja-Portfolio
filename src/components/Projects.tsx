import projects from "../constants/Projects";
import Project from "./Project";

function Projects() {
	return (
		<section id="projects" className="my-20 mx-5 md:mx-36">
			<h1 className="text-center text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
				PROJECTS
			</h1>

			{projects.map((project, index) => {
				return (
					<Project
						key={index}
						index={index}
						title={project.title}
						imageURL={project.imageURL}
						description={project.description}
						technologiesUsed={project.technologiesUsed}
					/>
				);
			})}
		</section>
	);
}

export default Projects;

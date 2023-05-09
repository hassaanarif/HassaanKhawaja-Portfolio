import SkillBadge from "./SkillBadge";
import skills from "../constants/Skills";

function Skills() {
	return (
		<section id="skills" className="py-10 px-10">
			<h1 className="text-center text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
				SKILLS
			</h1>

			<section className="mt-10 overflow-hidden bg-white bg-opacity-20 py-6 rounded-md ">
				<div className="flex flex-row items-center w-fit banner-r-l">
					{skills.map((skill, index) => {
						return <SkillBadge key={index} logoURL={skill.logoURL} name={skill.name} />;
					})}
				</div>
			</section>
		</section>
	);
}

export default Skills;

import skills from "../constants/Skills";
import SkillBadge from "./SkillBadge";

function Skills() {
  return (
    <section id="skills" className="py-10 px-5 md:px-36">
      <h1 className="text-center text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
        SKILLS
      </h1>

      <section className="mt-10 overflow-hidden bg-gray-100 bg-opacity-30 py-6 rounded-md ">
        <div className="flex flex-row items-center scrollBannerRightToLeft  banner-r-l">
          {skills.map((skill, index) => {
            return <SkillBadge key={index} logoURL={skill.logoURL} name={skill.name} />;
          })}
        </div>
      </section>
    </section>
  );
}

export default Skills;

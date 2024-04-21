import { motion } from "framer-motion";
import DP from "../assets/DP.webp";

function About() {
  return (
    <section className="py-10 px-5 md:py-20 md:px-36 overflow-hidden">
      <motion.article
        id="about"
        className="text-center "
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="text-6xl font-extrabold text-white">HEY, I AM </span>
        <span className="text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">HASSAAN KHAWAJA</span>
        <br />
        <p className="font-thin text-2xl mt-2">A Software Developer</p>
      </motion.article>

      <article className="flex flex-col items-center gap-2 mt-10 md:mt-20 md:block">
        <img src={DP} alt="Display Picture" className="rounded-full w-[200px] mb-5 md:mb-0 md:float-left md:shape-outside-circle md:mr-5" />

        <motion.div initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <p className="text-justify">
            As a software developer with 4 years of experience, I bring a wealth of knowledge and expertise to every project I undertake. My
            proficiency in programming languages such as JavaScript, TypeScript, and C# and frameworks such as React, NextJs and ASP.NET Core allows
            me to design and build efficient and elegant applications that meet the needs of clients across a wide range of industries. My technical
            skills are matched by my creativity and innovative thinking. I approach each project with a fresh perspective, working closely with
            clients to understand their unique needs and requirements and develop customized solutions that exceed their expectations. I have a keen
            eye for detail and am committed to ensuring that every application I build is thoroughly tested and rigorously optimized for performance.
            In addition to my technical prowess, I possess exceptional communication and collaboration skills. I am a natural problem solver, able to
            work effectively with teams of designers, developers, and project managers to overcome challenges and deliver outstanding results. My
            ability to think strategically and work efficiently make me a valuable asset to any team, and my dedication to delivering projects on time
            and within budget has earned me a reputation as a reliable and trustworthy partner. Outside of work, I am an avid learner and enjoy
            staying up to date with the latest trends and developments in my field. I am passionate about technology and its potential to change the
            world, and I am committed to using my skills and knowledge to make a positive impact on society. Overall, my combination of technical
            expertise, creativity, and collaboration skills make me a valuable addition to any team seeking to develop high-quality software solutions
            that meet the needs of clients and users alike.
          </p>
        </motion.div>
      </article>
    </section>
  );
}

export default About;

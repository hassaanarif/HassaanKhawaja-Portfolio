import { motion } from "framer-motion";
import DP from "../assets/DP.jpeg";

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
        <span className="text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
          KHAWAJA HASSAAN ARIF
        </span>
        <br />
        <p className="font-thin text-2xl mt-2">Senior Software Developer</p>
      </motion.article>

      <article className="flex flex-col items-center gap-2 mt-10 md:mt-20 md:block">
        <img
          src={DP}
          alt="Display Picture"
          className="rounded-full w-[200px] mb-5 md:mb-0 md:float-left md:shape-outside-circle md:mr-5"
        />

        <motion.div initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <p className="text-justify">
            With 5+ years of experience designing and building scalable web applications across industries including
            field service, government, and enterprise software. My expertise spans the full stack, from creating modern,
            responsive UIs with React, Next.js, Vue.js, and Angular to building scalable back-end systems with ASP.NET
            Core, Node.js, microservices, and serverless architectures. I’ve also worked extensively with SQL Server,
            PostgreSQL, and MongoDB, where I optimized enterprise-level databases by reducing peak usage by 60%,
            improving query performance by 75%, and generating over £30,000 in revenue through advanced reporting
            dashboards. On the cloud side, I’ve deployed secure and scalable solutions using Azure, AWS, Docker, and
            CI/CD pipelines. Some of my key projects include leading development of a GIS Digital Twin for NSW Education
            that improved asset management across 2,200+ schools, building TrackerGo, a custom CRM that cut Joblogic’s
            costs by 30% through microservices migration, and delivering real-time dashboards that supported critical
            business decisions. Alongside client work, I actively explore AI and emerging technologies, experimenting
            with LangChain, agentic AI, MCP servers, and vector databases to integrate intelligent features into modern
            web solutions. At the core of everything I do is a focus on solving problems, optimizing performance, and
            creating solutions that deliver real value.
          </p>
        </motion.div>
      </article>
    </section>
  );
}

export default About;

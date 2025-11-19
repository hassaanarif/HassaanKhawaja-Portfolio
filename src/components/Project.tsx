import { motion } from "framer-motion";
import ProjectProp from "../interfaces/Project";
import LazyImage from "./LazyImage";

function Project({
  index,
  title,
  imageURL,
  briefIntroduction,
  theProblem,
  myContributions,
  theOutcome,
  technologiesUsed,
}: ProjectProp) {
  return (
    <article className="mt-10 mb-20 ">
      <h4 className="text-center font-extrabold text-3xl mb-10  text-white">{title}</h4>

      <div
        className={`md:flex md:gap-20 md:items-center ${
          (index ?? 0) % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <motion.div
          className="w-full md:w-[50%] mt-10 mb-5 md:m-0 perspective"
          initial={(index ?? 0) % 2 === 0 ? { x: -50 } : { x: 50 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <LazyImage src={imageURL} alt="Project Screenshot" />
        </motion.div>
        <motion.div
          className="w-full md:w-[50%] text-justify"
          initial={(index ?? 0) % 2 === 0 ? { x: 50 } : { x: -50 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <b className="text-orange-600">BRIEF INTRODUCTION:</b>
          <p>{briefIntroduction}</p>
          <br />
          <b className="text-orange-600">THE PROBLEM:</b>
          <p>{theProblem}</p>
          <br />
          <b className="text-orange-600">MY CONTRIBUTIONS:</b>
          <p>{myContributions}</p>
          <br />
          <b className="text-orange-600">THE OUTCOME:</b>
          <p>{theOutcome}</p>
          <br />
          <b className="text-orange-600">TECHNOLOGIES USED:</b> {technologiesUsed}
        </motion.div>
      </div>
    </article>
  );
}

export default Project;

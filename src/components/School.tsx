import { motion } from "framer-motion";
import SchoolProp from "../interfaces/School";

export default function School({ name, location, degree, startDate, endDate, logoURL, highlights }: SchoolProp) {
  return (
    <motion.article initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
      <section className="flex gap-5 items-center mt-10">
        <img src={logoURL} alt="School Icon" className="w-12 rounded-sm self-start pt-2" />
        <div>
          <h2 className="font-semibold text-lg">{name.toUpperCase()}</h2>
          <h3>
            {" "}
            {startDate} - {endDate}, {location}
          </h3>
        </div>
      </section>
      <ol className="relative border-l gradient-border-t-b">
        <li key={0} className="ml-6 my-10 md:my-5">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-3 bg-orange-600"></span>
          <h3 className="font-medium leading-tight mb-3">{degree}</h3>
          <div className="text-sm text-justify ">{<div dangerouslySetInnerHTML={{ __html: highlights }}></div>}</div>
        </li>
      </ol>
    </motion.article>
  );
}

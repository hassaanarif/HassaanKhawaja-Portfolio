import { motion } from "framer-motion";
import SchoolProp from "../interfaces/School";

export default function School({ name, location, degree, startDate, endDate, logoURL, highlights }: SchoolProp) {
  return (
    <motion.article
      className="surface-card mt-4 flex flex-col gap-5 p-5 sm:flex-row sm:p-7"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2">
        <img src={logoURL} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="min-w-0">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-lg font-semibold text-[#f0f1ed]">{degree}</h3>
            <p className="mt-1 text-sm text-[#9ba79e]">{name} · {location}</p>
          </div>
          <p className="accent-text text-sm">{startDate} — {endDate}</p>
        </div>
        <div className="education-copy mt-4 text-sm leading-6 text-[#a7afa8]">
          <div dangerouslySetInnerHTML={{ __html: highlights }} />
        </div>
      </div>
    </motion.article>
  );
}

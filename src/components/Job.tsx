import { motion } from "framer-motion";
import moment from "moment";
import JobProp from "../interfaces/Job";

const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = moment(startDate).format("MMM YYYY");
  const end = endDate ? moment(endDate).format("MMM YYYY") : "Present";
  return `${start} — ${end}`;
};

export default function Job({ company, location, positions, time, startDate, endDate, companyLogoURL }: JobProp) {
  return (
    <motion.article
      className="surface-card p-5 sm:p-7"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
            <img src={companyLogoURL} alt={`${company} logo`} className="max-h-full max-w-full object-contain" />
          </div>
          <div>
            <p className="accent-text text-xs font-semibold uppercase tracking-[0.15em]">{company}</p>
            <p className="mt-1 text-sm text-[#9ba79e]">{location} · {time}</p>
          </div>
        </div>
        <p className="text-sm font-medium text-[#a7afa8] sm:text-right">{formatDateRange(startDate, endDate)}</p>
      </header>

      <div className="mt-6 space-y-6 border-t border-white/[0.08] pt-5">
        {positions.map((position) => (
          <section key={position.title}>
            <h3 className="text-lg font-semibold text-[#f0f1ed]">{position.title}</h3>
            <div className="experience-copy mt-3 text-sm leading-7 text-[#b3bbb4]">
              <div dangerouslySetInnerHTML={{ __html: position.content }} />
            </div>
          </section>
        ))}
      </div>
    </motion.article>
  );
}

import { motion } from "framer-motion";
import Badge from "../assets/icon-badge.png";
import CertificateProps from "../interfaces/Certificate";

function Certificate({ title, duration, issuer, logoURL }: CertificateProps) {
  return (
    <motion.div
      className="surface-card flex h-full flex-col justify-between p-5 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <img src={logoURL} alt={`${issuer} logo`} className="h-7 w-7 rounded-lg object-contain bg-white/10 p-0.5" />
            <span className="font-mono text-xs text-slate-400">{issuer}</span>
          </div>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
            Completed
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
          {title}
        </h3>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
        <span className="font-mono text-xs text-slate-400">{duration}</span>
        <img src={Badge} alt="Verified Badge" className="h-6 w-6 object-contain opacity-80" />
      </div>
    </motion.div>
  );
}

export default Certificate;

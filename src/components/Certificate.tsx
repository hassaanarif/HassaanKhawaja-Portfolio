import { motion } from "framer-motion";
import Badge from "../assets/icon-badge.png";
import CertificateProps from "../interfaces/Certificate";

function Certificate({ title, duration, issuer, logoURL }: CertificateProps) {
  return (
    <motion.div
      className="surface-card flex h-full flex-col p-5"
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <h3 className="mb-5 text-base font-semibold leading-6 text-[#eef1ec]">{title}</h3>
      <div className="mb-5 flex items-center gap-3">
        <img src={logoURL} alt={`${issuer} logo`} className="h-9 w-9 rounded-md object-cover" />
        <span className="text-sm font-medium text-[#c2ccc3]">{issuer}</span>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-4">
        <div className="text-xs text-[#9ba79e]">{duration}</div>
        <img src={Badge} alt="" className="h-8 w-8 object-contain" />
      </div>
    </motion.div>
  );
}

export default Certificate;

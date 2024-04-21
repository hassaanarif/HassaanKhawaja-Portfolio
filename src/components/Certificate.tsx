import CertificateProps from "../interfaces/Certificate";
import Badge from "../assets/icon-badge.png";
import { motion } from "framer-motion";

function Certificate({ title, duration, issuer, logoURL }: CertificateProps) {
  return (
    <motion.div
      className="grow rounded-md card-shadow text-white bg-purple-950 bg-opacity-50  p-5"
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <h2 className="text-xl font-medium  mb-4">{title}</h2>
      <div className="flex items-center mb-4">
        <img src={logoURL} alt="Organization Logo" className="w-10 h-10 rounded-sm inline-block mr-2 " />{" "}
        <span className="font-semibold">{issuer}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="bg-black bg-opacity-50 rounded-full px-3 py-1 w-fit font-semibold">{duration}</div>
        <img src={Badge} alt="Organization Logo" className="w-15 h-15 rounded-sm inline-block" />{" "}
      </div>
    </motion.div>
  );
}

export default Certificate;

import SkillBadgeProp from "../interfaces/SkillBadge";

function SkillBadge({ logoURL, name }: SkillBadgeProp) {
  const needsLightLogo = name === "JQuery" || name === "Kafka" || name === "Next.js" || name === "Git";

  return (
    <div className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-200 transition-all duration-200 hover:border-[var(--accent)]/50 hover:bg-white/[0.07] hover:scale-105 hover:shadow-md hover:shadow-[var(--accent)]/10">
      {logoURL ? (
        <img
          src={logoURL}
          alt=""
          className={`h-4 w-4 sm:h-5 sm:w-5 object-contain transition-transform group-hover:scale-110 ${
            needsLightLogo ? "brightness-0 invert" : ""
          }`}
          loading="lazy"
        />
      ) : (
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
      )}
      <span className="text-xs sm:text-sm font-medium tracking-tight group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}

export default SkillBadge;

import SkillBadgeProp from "../interfaces/SkillBadge";

function SkillBadge(props: SkillBadgeProp) {
  const needsLightLogo = props.name === "JQuery" || props.name === "Kafka";

  return (
    <div className="input-surface flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[#c5cec6]">
      {props.logoURL && (
        <img
          src={props.logoURL}
          alt=""
          className={`h-5 w-5 object-contain ${needsLightLogo ? "brightness-0 invert" : ""}`}
        />
      )}
      <span className="text-sm font-medium">{props.name}</span>
    </div>
  );
}

export default SkillBadge;

import SkillBadgeProp from "../interfaces/SkillBadge";

function SkillBadge(props: SkillBadgeProp) {
  return (
    <div className="flex shrink-0 gap-2 mx-2 items-center border-2 px-3 py-2 rounded-full border-gray-100	text-gray-950 bg-gray-100">
      <img src={props.logoURL} alt={props.name} className="w-8 " />
      <div className="font-semibold text-lg">{props.name}</div>
    </div>
  );
}

export default SkillBadge;

import HTML from "../assets/icon-html.png";
import CSS from "../assets/icon-css.png";
import JS from "../assets/icon-javascript.png";
import TS from "../assets/icon-typescript.png";
import RT from "../assets/icon-react.png";
import RD from "../assets/icon-redux.png";
import ND from "../assets/icon-node.png";
import MDB from "../assets/icon-mongodb.png";
import GIT from "../assets/icon-git.png";
import CS from "../assets/icon-csharp.png";
import ASP from "../assets/icon-asp.png";
import CUI from "../assets/icon-chakraui.png";
import BS from "../assets/icon-bootstrap.png";
import JQ from "../assets/icon-jquery.png";
import SQL from "../assets/icon-sql.png";
import TW from "../assets/icon-tailwindcss.png";
import RQ from "../assets/icon-reactQuery.png";

interface Skill {
	logoURL: string;
	name: string;
}

const skills: Skill[] = [
	{
		logoURL: HTML,
		name: "HTML",
	},
	{
		logoURL: CSS,
		name: "CSS",
	},
	{
		logoURL: JS,
		name: "JavaScript",
	},
	{
		logoURL: TS,
		name: "TypeScript",
	},
	{
		logoURL: RT,
		name: "React",
	},
	{
		logoURL: RD,
		name: "Redux",
	},
	{
		logoURL: ND,
		name: "NodeJS",
	},
	{
		logoURL: MDB,
		name: "MongoDB",
	},
	{
		logoURL: JQ,
		name: "JQuery",
	},
	{
		logoURL: GIT,
		name: "Git",
	},
	{
		logoURL: CS,
		name: "C Sharp",
	},
	{
		logoURL: ASP,
		name: "ASP.NET Core",
	},
	{
		logoURL: SQL,
		name: "SQL",
	},
	{
		logoURL: CUI,
		name: "Chakra UI",
	},
	{
		logoURL: TW,
		name: "Tailwind css",
	},
	{
		logoURL: BS,
		name: "Bootstrap",
	},
	{
		logoURL: RQ,
		name: "React Query",
	},
];

export default skills;

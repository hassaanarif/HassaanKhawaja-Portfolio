import H from "../assets/icon-h.png";
import K from "../assets/icon-k.png";
import linkedin from "../assets/icon-linkedin.svg";
import twitter from "../assets/icon-twitter.svg";
import github from "../assets/icon-github.svg";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";

function NavBar() {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
	const [sectionInView, setSectionInView] = useState("");

	return (
		<nav className="px-5 py-2 flex justify-between flex-wrap border-b-2 gradient-border-l-r">
			<div className="flex gap-1 items-center md:basis-[40%] hover:cursor-pointer">
				<img src={H} alt="Display Picture" className="w-6" />
				<img src={K} alt="Display Picture" className="w-6" />
			</div>

			<div className="invert flex items-center hover:cursor-pointer md:hidden">
				<a onClick={() => setMenuIsOpen(!menuIsOpen)} title="menu">
					<img src={menuIsOpen ? close : menu} alt="menu" className="w-6" />
				</a>
			</div>

			<section
				className={`${
					menuIsOpen ? "flex flex-col" : "hidden"
				} mt-5 md:m-0 w-full md:flex md:flex-row md:justify-between md:basis-[60%] items-center`}
			>
				<div className="flex flex-col gap-2 md:flex-row md:gap-10">
					<div className="text-lg hover:cursor-pointer hover:text-orange-400 transition-all ease-linear w-full text-center">
						<a href="#">Home</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-orange-400 transition-all ease-linear w-full text-center">
						<a href="#about">About</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-orange-400 transition-all ease-linear w-full text-center">
						<a href="#experience">Experience</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-orange-400 transition-all ease-linear w-full text-center">
						<a href={"#skills"}>Skills</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-orange-400 transition-all ease-linear w-full text-center">
						<a href={"#projects"}>Projects</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-orange-400 transition-all ease-linear w-full text-center">
						<a href={"#contact"}>Contact</a>
					</div>
				</div>

				<div className="flex gap-2 justify-center mt-5 md:mt-0">
					<a href="https://www.linkedin.com/in/khawajahassaanarif/" target="_blank" rel="noreferrer" title="Linked">
						<img src={linkedin} alt="LinkedIn" className="w-8" />
					</a>
					<a href="https://twitter.com/IamHassaanArif" target="_blank" rel="noreferrer" title="Twitter">
						<img src={twitter} alt="Twitter" className="w-8 rounded-full" />
					</a>
					<a href="https://github.com/hassaanarif" target="_blank" rel="noreferrer" title="Github">
						<img src={github} alt="GitHub" className="w-8 rounded-full invert" />
					</a>
				</div>
			</section>
		</nav>
	);
}

export default NavBar;

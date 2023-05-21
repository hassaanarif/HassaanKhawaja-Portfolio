import H from "../assets/icon-h.png";
import K from "../assets/icon-k.png";

import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import { useEffect, useRef, useState } from "react";

function NavBar() {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
	const navBarRef = useRef<HTMLElement>(null);

	const scrollHandler = (): void => {
		document.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				navBarRef?.current?.classList.add("backdrop-blur-md");
			} else {
				navBarRef?.current?.classList.remove("backdrop-blur-md");
			}
		});
	};

	useEffect(() => {
		scrollHandler();

		return () => {
			document.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return (
		<nav ref={navBarRef} className="px-5 py-2 flex justify-between flex-wrap border-b-2 gradient-border-l-r sticky top-0 z-10">
			<a href="#" className="flex gap-1 items-center md:basis-[30%]">
				<img src={H} alt="Display Picture" className="w-6" />
				<img src={K} alt="Display Picture" className="w-6" />
			</a>

			<div className="invert flex items-center hover:cursor-pointer md:hidden">
				<a onClick={() => setMenuIsOpen(!menuIsOpen)} title="menu">
					<img src={menuIsOpen ? close : menu} alt="menu" className="w-6" />
				</a>
			</div>

			<section
				className={`${
					menuIsOpen ? "flex flex-col" : "hidden"
				} py-5 md:p-2 md:m-0 w-full md:flex md:flex-row md:justify-between md:basis-[70%] items-center`}
			>
				<div className="flex flex-col gap-2 md:flex-row md:gap-10">
					<div className="text-lg hover:cursor-pointer hover:text-green-400 transition-all ease-linear w-full text-center">
						<a href="#" onClick={() => setMenuIsOpen(false)}>
							Home
						</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-green-400 transition-all ease-linear w-full text-center">
						<a href="#about" onClick={() => setMenuIsOpen(false)}>
							About
						</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-green-400 transition-all ease-linear w-full text-center">
						<a href="#experience" onClick={() => setMenuIsOpen(false)}>
							Experience
						</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-green-400 transition-all ease-linear w-full text-center">
						<a href={"#skills"} onClick={() => setMenuIsOpen(false)}>
							Skills
						</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-green-400 transition-all ease-linear w-full text-center">
						<a href={"#certifications"} onClick={() => setMenuIsOpen(false)}>
							Certifications
						</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-green-400 transition-all ease-linear w-full text-center">
						<a href={"#projects"} onClick={() => setMenuIsOpen(false)}>
							Projects
						</a>
					</div>
					<div className="text-lg hover:cursor-pointer hover:text-green-400 transition-all ease-linear w-full text-center">
						<a href={"#contact"} onClick={() => setMenuIsOpen(false)}>
							Contact
						</a>
					</div>
				</div>
			</section>
		</nav>
	);
}

export default NavBar;

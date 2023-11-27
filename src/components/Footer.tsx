import github from "../assets/icon-github.svg";
import linkedin from "../assets/icon-linkedin.svg";

function Footer() {
	return (
		<section id="footer" className="py-5 text-center border-t-[1px] gradient-border-l-r ">
			<div className="flex gap-2 justify-center mt-5 md:mt-0">
				<a href="https://www.linkedin.com/in/khawajahassaanarif/" target="_blank" rel="noreferrer" title="LinkedIn">
					<img src={linkedin} alt="LinkedIn" className="w-12" />
				</a>
				<a href="https://github.com/hassaanarif" target="_blank" rel="noreferrer" title="Github">
					<img src={github} alt="GitHub" className="w-12 invert" />
				</a>
			</div>
			<p className="mt-2">
				© Copyright 2023. Made by{" "}
				<a href="https://hassaan-khawaja.vercel.app/" className="font-semibolde hover:cursor-pointer hover:text-orange-600 transition-all ease-linear">
					Hassaan Khawaja
				</a>
			</p>
		</section>
	);
}

export default Footer;

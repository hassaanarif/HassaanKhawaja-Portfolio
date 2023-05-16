import ProjectProp from "../interfaces/Project";

function Project({ index, title, imageURL, description, technologiesUsed }: ProjectProp) {
	return (
		<article className=" mt-10 mb-20">
			<h4 className="text-center font-bold text-3xl mb-5 text-orange-400 underline">{title}</h4>

			<div className={` md:flex md:gap-20 md:items-center  ${(index ?? 0) % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
				<div className="w-full md:w-[50%] mt-10 mb-5 md:m-0 perspective">
					<img
						src={imageURL}
						alt="Rock Paper Scissor Screenshot "
						className={`rounded-md shadow-lg shadow-orange-400 ${(index ?? 0) % 2 === 0 ? "md:rotate3d-right" : "md:rotate3d-left"}`}
					/>
				</div>
				<div className="w-full md:w-[50%] text-justify">
					<dl>{description}</dl>
					<dl className="mt-2">
						<b className="text-white">TECHNOLOGIES USED:</b> {technologiesUsed}
					</dl>
				</div>
			</div>
		</article>
	);
}

export default Project;

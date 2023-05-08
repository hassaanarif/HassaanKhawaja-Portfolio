import DP from "../assets/DP.jfif";

function Hero() {
	return (
		<>
			<section id="about" className="py-20 px-10 w-full text-center ">
				<span className="text-6xl font-extrabold text-white">HEY, I AM </span>
				<span className="text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
					HASSAAN KHAWAJA
				</span>
				<br />
				<p className="font-thin text-2xl">Software Engineer/ Full-Stack Developer</p>
			</section>

			<section className="flex flex-col md:block items-center px-10 py-5 gap-2">
				<img
					src={DP}
					alt="Display Picture"
					className="rounded-full w-[200px] md:float-left md:shape-outside-circle md:mr-10"
				/>
				<p className="text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo molestias porro dolore, nostrum quaerat
					sapiente voluptatem fuga aliquam aspernatur incidunt eaque aut iusto libero, consequuntur rerum? Omnis soluta
					error autem facere, recusandae quidem eveniet, neque quos voluptatem adipisci dolor rem officia libero quas
					optio ipsum pariatur voluptatibus delectus dicta laborum maxime. Inventore eaque nisi, veniam magnam odio sunt
					molestias ipsam architecto possimus tenetur id culpa aut numquam est quisquam provident illum perspiciatis
					qui? Repellat impedit officiis omnis. Omnis quod perspiciatis ullam incidunt aliquid quas pariatur quo
					quibusdam esse. Minima minus incidunt cupiditate deleniti sapiente explicabo, reprehenderit accusantium fugit
					expedita eius, neque voluptatem doloremque, enim debitis alias nam? Sequi ratione quae necessitatibus soluta
					ad, voluptates placeat eaque, illum ea laboriosam id vitae incidunt! Architecto corporis sint, reprehenderit,
					soluta ex nobis doloribus quo ipsum vel laboriosam asperiores praesentium. Quasi voluptatum accusantium
					possimus a eligendi consequatur nihil sunt tempora perspiciatis, nisi dolor, omnis animi libero est quaerat
					quas molestiae doloremque unde beatae corrupti laboriosam. Incidunt cupiditate eveniet illo enim, animi
					laboriosam deserunt id veritatis necessitatibus velit sequi dolore autem possimus error quam deleniti maiores
					iusto, debitis a reiciendis facere excepturi sapiente dolorum! Temporibus, excepturi. Earum excepturi
					necessitatibus sint ducimus aut, accusamus nemo.
				</p>
			</section>
		</>
	);
}

export default Hero;

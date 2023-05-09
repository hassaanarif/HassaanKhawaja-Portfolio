import Jobs from "../constants/Jobs";
import Job from "./Job";

function Experience() {
	return (
		<section id="experience" className="py-10 px-10">
			<h1 className="text-center text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
				EXPERIENCE
			</h1>

			{Jobs.map((job, index) => {
				return (
					<Job
						key={index}
						time={job.time}
						location={job.location}
						company={job.company}
						positions={job.positions}
						startDate={job.startDate}
						endDate={job.endDate}
						companyLogoURL={job.companyLogoURL}
					></Job>
				);
			})}
		</section>
	);
}

export default Experience;

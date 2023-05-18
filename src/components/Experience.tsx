import Jobs from "../constants/Jobs";
import Job from "./Job";

function Experience() {
	return (
		<section id="experience" className="my-20 mx-5 md:mx-36">
			<h1 className="text-center break-words text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
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

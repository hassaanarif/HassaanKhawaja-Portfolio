import moment from "moment";
import JobProp from "../interfaces/Job";
import { motion } from "framer-motion";

export default function Job({ company, location, positions, time, startDate, endDate, companyLogoURL }: JobProp) {
	const calculateExperienceDuration = (experience: { startDate: string; endDate?: string }): string => {
		const now = moment();
		const start = moment(experience.startDate);
		const end = moment(experience.endDate) ?? now;

		const diffInMonths = end.diff(start, "months");
		const diffInYears = Math.floor(diffInMonths / 12);
		const remainingMonths = diffInMonths % 12;

		return `${diffInYears} years ${remainingMonths} months`;
	};

	return (
		<motion.article initial={{ y: 100 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
			<section className="flex gap-5 items-center mt-10">
				<img src={companyLogoURL} alt="Joblogic" className="w-12 rounded-sm self-start pt-2" />
				<div>
					<h2 className="font-semibold text-lg">{company.toUpperCase()}</h2>
					<h3>
						{time} {calculateExperienceDuration({ startDate, endDate })}
					</h3>
					<h3>{location}</h3>
				</div>
			</section>
			<ol className="relative border-l gradient-border-t-b">
				{positions.map((position, index) => {
					return (
						<li key={index} className="ml-6 my-10 md:my-5">
							<span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-3 bg-orange-600"></span>
							<h3 className="font-medium leading-tight mb-3">{position.title}</h3>
							<div className="text-sm text-justify ">{<div dangerouslySetInnerHTML={{ __html: position.content }}></div>}</div>
						</li>
					);
				})}
			</ol>
		</motion.article>
	);
}

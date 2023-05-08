import moment from "moment";
import JobProp from "../interfaces/Job";

export default function Job({ company, location, positions, startDate, endDate, companyLogoURL }: JobProp) {
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
		<>
			<section className="flex gap-5 mb-5 items-center mt-10">
				<img src={companyLogoURL} alt="Joblogic" className="w-10 rounded-sm " />
				<div>
					<h2 className="font-semibold text-lg">{company.toUpperCase()}</h2>
					<h3>Full-Time {calculateExperienceDuration({ startDate, endDate })}</h3>
					<h3>{location}</h3>
				</div>
			</section>
			<ol className="y-10 relative border-l gradient-border-t-b mx-4">
				{positions.map((position, index) => {
					return (
						<>
							<li key={index} className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-3 ring-gray-900 bg-gray-700"></span>
								<h3 className="font-medium leading-tight mb-3">{position.title}</h3>
								<p className="text-sm text-justify ">
									{<div dangerouslySetInnerHTML={{ __html: position.content }}></div>}
								</p>
							</li>
						</>
					);
				})}
			</ol>
		</>
	);
}

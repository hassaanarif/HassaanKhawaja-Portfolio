import JobPosition from "./JobPosition";

export default interface Job {
	company: string;
	companyLogoURL: string;
	location: string;
	startDate: string;
	endDate?: string;
	positions: JobPosition[];
}

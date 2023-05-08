import JL from "../assets/Joblogic.png";
import Freelance from "../assets/icon-freelance.png";
import SWIUS from "../assets/SWIUS.jpg";
import Job from "../interfaces/Job";

const jobs: Job[] = [
	{
		company: "Joblogic",
		location: "Lahore, Pakistan",
		companyLogoURL: JL,
		startDate: "2021-02-08",
		positions: [
			{
				title: "Full-Stack Developer",
				content: `• Involved in the development of TrackerGo, a vital internal tool of Joblogic Pvt Ltd, that enabled
							streamlined management of customer data, finances, and onboarding journey using C#, ASP.NET Core, Entity
							Framework, and SQL Server
							<br />• Implemented intricate business logic for customer permission management, ensuring that sensitive
							data remained secure and accessible only to authorized individuals <br />• Created a responsive user
							interface using Bootstrap and jQuery, providing efficient navigation of customer data, chat history, and
							tickets <br />• Leveraging my expertise, the system underwent substantial optimization, resulting in a
							significant boost to user productivity and overall system effectiveness <br />• My refined frontend/UI
							development skills enabled me to craft a highly intuitive and visually appealing user interface, resulting
							in a substantial uptick in user productivity and satisfaction • Provided guidance and mentorship to junior
							engineers, instilling best practices and reinforcing a culture of continuous improvement`,
			},
			{
				title: "Software Engineer",
				content: `• Devised and executed innovative strategies for optimizing SQL queries and improving system efficiency,
							resulting in increased application responsiveness and smoother end-user experiences <br />• Employed
							third-party tools such as "Stimulsoft" to develop dynamic forms and dashboards that were seamlessly
							integrated with the Joblogic Application, enabling customers to effortlessly access critical business data
							and metrics <br />• Fostered positive relationships with clients through extensive interaction and
							diligent gathering of their requirements, utilizing comprehensive SQL scripts to craft custom dashboards,
							forms, and reports tailored to their specific needs
							<br />• Mentored and trained new team members on database and SQL optimization techniques, fostering a
							culture of continuous learning and skill development <br />• Collaborated with fellow software engineers
							to troubleshoot complex technical issues and ensure adherence to coding best practices, conducting
							comprehensive code reviews to maintain high standards of code quality and performance <br />• Maintained
							comprehensive documentation of software development processes, including design documents, user manuals,
							and technical specifications, enabling efficient knowledge transfer and promoting the maintenance of best
							practices <br />• Actively participated in team meetings and provided innovative suggestions for improving
							software development processes and maximizing team efficiency`,
			},
		],
	},

	{
		company: "Freelancing",
		companyLogoURL: Freelance,
		location: "Lahore, Pakistan",
		startDate: "2020-10-10",
		positions: [
			{
				title: "React Developer",
				content: `• Developed and maintained scalable and responsive web applications using ReactJS, Functional Components,
							and Redux that resulted in a significant improvement in the user experience and a boost in overall
							productivity <br />• Implemented efficient and reusable code that followed industry best practices, such
							as modular programming, DRY and SOLID principles, resulting in streamlined development processes, enhanced
							code robustness, and reduced maintenance costs <br />• Optimized application performance and page load
							times using advanced optimization techniques such as lazy loading, server-side rendering, and performance
							profiling tools, resulting in an increase in user engagement and retention rates <br />• Collaborated with
							cross-functional teams in agile development environments, employing JIRA and other agile methodologies to
							deliver high-quality products in a timely manner, resulting in positive feedback and high customer
							satisfaction <br />• Developed and integrated complex REST APIs with Node.js and MongoDB, utilizing
							industry-standard authentication and authorization techniques such as OAuth2 and JWT, resulting in a
							secure and efficient data exchange system <br />• Utilized Tailwind CSS, Bootstrap and Material UI to
							create visually appealing and user-friendly UI designs that significantly improved the application's
							aesthetics and usability, resulting in high user adoption rates and positive user feedback`,
			},
		],
	},

	{
		company: "Sublime Wireless Inc.",
		companyLogoURL: SWIUS,
		location: "Lahore, Pakistan",
		startDate: "2019-06-06",
		endDate: "2020-07-06",
		positions: [
			{
				title: "Radio Frequency Engineer",
				content: `• Involved in the development of TrackerGo, a vital internal tool of Joblogic Pvt Ltd, that enabled
							streamlined management of customer data, finances, and onboarding journey using C#, ASP.NET Core, Entity
							Framework, and SQL Server
							<br />• Implemented intricate business logic for customer permission management, ensuring that sensitive
							data remained secure and accessible only to authorized individuals <br />• Created a responsive user
							interface using Bootstrap and jQuery, providing efficient navigation of customer data, chat history, and
							tickets <br />• Leveraging my expertise, the system underwent substantial optimization, resulting in a
							significant boost to user productivity and overall system effectiveness <br />• My refined frontend/UI
							development skills enabled me to craft a highly intuitive and visually appealing user interface, resulting
							in a substantial uptick in user productivity and satisfaction • Provided guidance and mentorship to junior
							engineers, instilling best practices and reinforcing a culture of continuous improvement`,
			},
		],
	},
];

export default jobs;

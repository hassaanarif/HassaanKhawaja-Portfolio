import JL from "../assets/Joblogic.png";
import Aircod from "../assets/Aircod.png";
import Freelance from "../assets/icon-freelance.png";
import Job from "../interfaces/Job";

const jobs: Job[] = [
  {
    company: "Joblogic Pvt Ltd",
    location: "Sydney, Australia (Remote)",
    companyLogoURL: JL,
    time: "Full-time",
    startDate: "2021-02-08",
    positions: [
      {
        title: "Full Stack Developer",
        content: `
•	Developed a cloud-hosted Customer Relationship Management software, called TrackerGo, in-house, which led to the elimination of reliance of Joblogic on third party paid CRMs, hence cutting its annual expenditures by 27%. 
<br/>•	Devised different optimization techniques to deal with large data throughput, resulting in quick navigation between pages, faster page loads, smooth animations, quick query executions and overall, 60% improvement in user experience.
<br/>•	Integrated TrackerGo with Xero API, automating the invoicing process, and ensuring accurate synchronization between the two platforms, resulting in an 18% reduction in invoicing errors.
<br/>•	Migrated legacy code from monolithic to microservice architecture, making it 55% more scalable and maintainable.
<br/>•	Skills used were HTML, CSS, JavaScript, jQuery, Vue.js, C#, ASP.NET Core MVC, Entity Framework, SQL, Swagger, Microsoft Azure, Azure Functions, Azure DevOps, CI/CD Pipeline and Git.
`,
      },
      {
        title: "Database Engineer",
        content: `
•	Maintained and optimized enterprise-level databases, resulting in 31% reduction in peak database usage, hence significantly reducing Joblogic’s annual Microsoft Azure’s subscription cost. 
<br/>•	Optimized more than 500 legacy queries using different ingenious techniques, resulting in 75% decrease in query execution time.
<br/>•	Wrote more than 200 complex SQL Queries and Stored Procedures, using uncommon coding techniques such as recursive queries, to gather and manipulate data to be used for creating bespoke reports and dashboards, as per the customers’ requirements.
<br/>•	Created more than 60 bespoke Dashboards, resulting in generating around £30,000 revenue for Joblogic.
<br/>•	Skills used were SQL, MongoDB, C#, jQuery, JavaScript, Python, Power BI, Tableau, Stimulsoft, Git and Microsoft Azure.
`,
      },
    ],
  },

  {
    company: "Freelance",
    companyLogoURL: Freelance,
    time: "Part-time",
    location: "Sydney, Australia (Remote)",
    startDate: "2020-11-10",
    positions: [
      {
        title: "Full Stack Developer",
        content: `
•	Worked closely with 10+ clients from concept to development to deployment, providing technical guidance on best practices for performance, security, and costs.
<br/>•	Designed and developed a scalable e-commerce platform, that handled 2000+ simultaneous users, incorporating a user-friendly interface and seamless payment processing, utilizing clean, robust, and efficient coding pattern.
<br/>•	Created a task management application with real-time collaboration features, enhancing team productivity and communication.
<br/>•	Built a dynamic blog platform, that hosted 400+ articles, with content management capabilities, enabling easy publishing and editing of articles.
<br/>•	Skills used were HTML, CSS, Tailwind CSS, JavaScript, TypeScript, ReactJS, Node.js, Next.js, MongoDB, Redux, Primsa.io, React Query and Vercel.
`,
      },
    ],
  },

  {
    company: "Aircod Technologies",
    companyLogoURL: Aircod,
    time: "Full-time",
    location: "Lahore, Pakistan",
    startDate: "2019-08-01",
    endDate: "2020-08-01",
    positions: [
      {
        title: "Full Stack Developer",
        content: `
•	Developed real-time data visualization dashboard, improving data monitoring capabilities by 30%.
<br/>•	Integrated telecom APIs into the portal, automating data retrieval processes and reducing manual data entry by 40%, leading to increased accuracy in reporting and operational efficiency.
<br/>•	Optimized database performance for handling large volumes of telecom data, resulting in a 20% reduction in query response time and ensuring seamless access to real-time information for users.
<br/>•	Skills used were HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Node.js, MongoDB, Figma, Google Maps API, REST API and Git.`,
      },
    ],
  },
];

export default jobs;

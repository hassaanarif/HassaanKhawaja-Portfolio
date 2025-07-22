import Aircod from "../assets/Aircod.png";
import Freelance from "../assets/icon-freelance.png";
import JL from "../assets/Joblogic.png";
import Woolpert from "../assets/Woolpert.png";
import Job from "../interfaces/Job";

const jobs: Job[] = [
  {
    company: "Woolpert Australia",
    companyLogoURL: Woolpert,
    time: "Full-time",
    location: "Sydney, Australia",
    startDate: "2024-05-27",

    positions: [
      {
        title: "Senior Software Developer",
        content: `
•	Collaborated with the New South Wales and Queensland Governments to deliver advanced GIS web solutions.
<br/>•	Developed NSW School Infrastructure Digital Twin, streamlining asset management for 2200+ schools in New South Wales.
<br/>•	Enhanced GIS tool capabilities through extensive SDK integration, increasing tool functionality by 40%.
<br/>•	Skills used were HTML5, CSS3, JavaScript, TypeScript, Vue.js, Node.js, Esri ArcGIS SDK, PostgreSQL, Azure DevOps, CI/CD Pipeline and Git.
`,
      },
    ],
  },
  {
    company: "Joblogic Pvt Ltd",
    location: "Lahore, Pakistan",
    companyLogoURL: JL,
    time: "Full-time",
    startDate: "2021-02-08",
    endDate: "2024-04-30",
    positions: [
      {
        title: "Full Stack Developer",
        content: `
•	Built TrackerGo, a cloud-based CRM developed in-house, which replaced third-party CRMs and helped Joblogic cut annual costs by 30%.
<br/>•	Devised different optimization techniques to deal with large data throughput, resulting in quick navigation between pages, faster page loads, smooth animations, quick query executions and overall, 60% improvement in user experience.
<br/>•	Integrated TrackerGo with Xero API, automating the invoicing process, resulting in a 90% reduction in invoicing errors.
<br/>•	Migrated legacy code from monolithic to microservice architecture, making it 100% more scalable and maintainable.
<br/>•	Skills used were HTML5, CSS3, JavaScript, jQuery, Vue.js, C#, ASP.NET Core MVC, Entity Framework ORM, SQL Server, Swagger, Microsoft Azure, Azure Functions, Azure DevOps, REST API, CI/CD Pipeline, Batch & Stream Processing, Kafka, Jira and Git.
`,
      },
      {
        title: "Database Engineer",
        content: `
•	Managed and optimized enterprise-level databases, cutting peak usage by 60% and significantly lowering Joblogic’s Microsoft Azure costs. 
<br/>•	Optimized more than 500 legacy queries using different ingenious techniques, resulting in 75% decrease in query execution time.
<br/>•	Wrote more than 200 complex SQL Queries and Stored Procedures, using uncommon coding techniques such as recursive queries.
<br/>•	Created 60+ custom dashboards and reports that helped generate approximately £30,000 in revenue within a year.
<br/>•	Skills used were SQL Server, C#, jQuery, JavaScript, Python, Power BI, Tableau, Stimulsoft, Microsoft Azure DevOps, Jira and Git.
`,
      },
    ],
  },

  {
    company: "Freelance",
    companyLogoURL: Freelance,
    time: "Part-time",
    location: "Lahore, Pakistan (Remote)",
    startDate: "2020-11-10",
    endDate: "2024-03-01",
    positions: [
      {
        title: "Full Stack Developer",
        content: `
•	Worked closely with 10+ clients from concept to development to deployment, offering technical guidance on best practices for performance, security, and costs.
<br/>•	Designed and developed a scalable e-commerce platform, that handled 2000+ simultaneous users, incorporating a user-friendly interface and seamless payment processing, utilizing clean, robust, and efficient coding pattern.
<br/>•	Created a task management application with real-time collaboration features, enhancing team productivity and communication.
<br/>•	Skills used were HTML, Tailwind CSS, JavaScript, TypeScript, React, Node, Next.js, MongoDB, Redux, Vercel, AWS and Lambda Functions.
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
•	Developed real-time data visualization dashboard, improving data monitoring capabilities by 50%.
<br/>•	Integrated APIs into the portal, automating data retrieval processes and reducing manual data entry by 70%, leading to increased accuracy in reporting and operational efficiency.
<br/>•	Optimized database performance for handling large volumes of data, resulting in a 20% reduction in query response time and ensuring seamless access to real-time information for users.
<br/>•	Skills used were HTML5, CSS3, Bootstrap, JavaScript, React JS, Node JS, MongoDB, Figma, WebSocket, Google Maps API, REST API and Git.
`,
      },
    ],
  },
];

export default jobs;

import Aircod from "../assets/Aircod.png";
import JL from "../assets/Joblogic.png";
import Woolpert from "../assets/Woolpert.png";
import Job from "../interfaces/Job";

const jobs: Job[] = [
  {
    company: "Woolpert Asia Pacific",
    companyLogoURL: Woolpert,
    time: "Full-time",
    location: "Sydney, Australia",
    startDate: "2024-05-27",
    endDate: "2025-06-01",

    positions: [
      {
        title: "Senior Software Engineer",
        content: `
• Led development of the NSW School Infrastructure Digital Twin, from Phase 1 to completion.
<br/>• Integrated Esri ArcGIS SDK to enable seamless 2D and 3D mapping for over 2,200 schools across NSW.
<br/>• Built custom widgets and APIs to manage assets and documents, streamlining workflows and replacing legacy systems.
<br/>• Optimized map rendering and frontend speed, improving performance of complex geospatial visualisations by an estimated 30–40%
<br/>• Delivered a full web and GIS solution that enabled NSW Education to better manage infrastructure, plan future investments, and improve decision-making across schools.
<br/>• Tech stack: TypeScript, Vue.js, React.js, Node.js, ArcGIS SDK, PostgreSQL, Azure DevOps, CI/CD, Git, Jira, Confluence
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
        title: "Full Stack Engineer",
        content: `
•  Built TrackerGo, a cloud-based CRM developed in-house, which replaced third-party CRMs and helped Joblogic cut annual costs by 30%.
<br/>•  Devised different optimization techniques to deal with large data throughput, resulting in quick navigation between pages, faster page loads, smooth animations, quick query executions and overall, 60% improvement in user experience.
<br/>•  Integrated TrackerGo with Xero API, automating the invoicing process, resulting in a 90% reduction in invoicing errors.
<br/>•  Migrated legacy code from monolithic to microservice architecture, making it 100% more scalable and maintainable.
<br/>•  Tech stack: HTML5, CSS3, JavaScript, jQuery, Vue.js, C#, ASP.NET Core MVC, Entity Framework ORM, SQL Server, Swagger, Microsoft Azure, Azure Functions, Azure DevOps, REST API, CI/CD Pipeline, Batch & Stream Processing, Kafka, Jira and Git.
`,
      },
      {
        title: "Database Engineer",
        content: `
•  Managed and optimized enterprise-level databases, cutting peak usage by 60% and significantly lowering Microsoft Azure costs. 
<br/>•  Optimized more than 500 legacy queries using different ingenious techniques, resulting in 75% decrease in query execution time.
<br/>•  Wrote more than 200 complex SQL Queries and Stored Procedures, using uncommon coding techniques such as recursive queries.
<br/>•  Created 60+ custom dashboards and reports that helped generate approximately £30,000 in revenue within a year.
<br/>•  Tech stack: SQL Server, C#, jQuery, JavaScript, Python, Power BI, Tableau, Stimulsoft, Microsoft Azure DevOps, Jira and Git.
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
        title: "Full Stack Engineer",
        content: `
•  Created real-time data visualization dashboard, improving data monitoring capabilities by 50%.
<br/>•  Integrated APIs into the portal, automating data retrieval processes and reducing manual data entry by 70%, leading to increased accuracy in reporting and operational efficiency.
<br/>•  Optimized database performance for handling large volumes of data, resulting in a 20% reduction in query response time and ensuring seamless access to real-time information for users.
<br/>•  Tech stack: HTML5, CSS3, Bootstrap, JavaScript, React JS, Node JS, MongoDB, Figma, WebSocket, Google Maps API, REST API and Git.
`,
      },
    ],
  },
];

export default jobs;

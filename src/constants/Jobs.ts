import Arbisoft from "../assets/Arbisoft.webp";
import Freelance from "../assets/icon-freelance.png";
import JL from "../assets/Joblogic.png";
import Woolpert from "../assets/Woolpert.png";
import Job from "../interfaces/Job";

const jobs: Job[] = [
  {
    company: "Arbisoft",
    companyLogoURL: Arbisoft,
    time: "Full-time (Contract)",
    location: "Remote, Pakistan",
    startDate: "2025-11-10",

    positions: [
      {
        title: "Senior Software Engineer",
        content: `
•  Developing Peter, an AI assistant that helps clinical research teams find answers in study protocols and related documents.
<br/>•  Building LangGraph workflows with AWS Bedrock to route trial questions to the right AI and retrieval process.
<br/>•  Improving clinical document search and retrieval with OpenSearch.
<br/>•  Tech stack: TypeScript, React.js, Node.js, Apollo GraphQL, LangGraph, AWS Bedrock, PostgreSQL, Kafka, microservices, Git, Jira, and CI/CD.
`,
      },
    ],
  },
  {
    company: "Woolpert Asia Pacific",
    companyLogoURL: Woolpert,
    time: "Full-time (Contract)",
    location: "Sydney, Australia",
    startDate: "2024-05-27",
    endDate: "2025-06-01",

    positions: [
      {
        title: "Software Engineer",
        content: `
• Helped build the NSW Government's School Infrastructure Digital Twin.
<br/>• Added 2D and 3D maps for more than 2,200 schools using Esri ArcGIS SDK.
<br/>• Improved complex map performance by an estimated 30–40%.
<br/>• Helped NSW Education manage school infrastructure and plan future investments.
<br/>•  Tech stack: TypeScript, Vue.js, React.js, Node.js, Esri ArcGIS SDK, PostgreSQL, Azure DevOps, CI/CD, Git, Jira, Confluence
`,
      },
    ],
  },
  {
    company: "Joblogic Pvt Ltd",
    location: "Lahore, Pakistan",
    companyLogoURL: JL,
    time: "Full-time",
    startDate: "2022-02-01",
    endDate: "2024-04-30",
    positions: [
      {
        title: "Full Stack Engineer",
        content: `
•  Built TrackerGo, an internal operations platform that replaced third-party tools and cut annual costs by 30%.
<br/>•  Improved user experience by 60% with faster page loads, navigation, animations, and database queries.
<br/>•  Automated invoicing with the Xero API, reducing errors by 90%.
<br/>•  Moved legacy software to microservices, making it 100% more scalable and maintainable.
<br/>•  Tech stack: JavaScript, jQuery, Vue.js, C#, ASP.NET Core MVC, Entity Framework, SQL Server, SonarQube, Azure, CI/CD, Kafka, Jira, and Git.
`,
      },
    ],
  },
  {
    company: "Joblogic Pvt Ltd",
    location: "Lahore, Pakistan",
    companyLogoURL: JL,
    time: "Full-time",
    startDate: "2021-02-01",
    endDate: "2022-02-01",
    positions: [
      {
        title: "Database Engineer",
        content: `
•  Reduced peak database usage by 60%, lowering Microsoft Azure costs.
<br/>•  Improved more than 500 legacy queries, cutting execution time by 75%.
<br/>•  Wrote 200+ SQL queries and stored procedures, including recursive queries.
<br/>•  Built 60+ dashboards and reports that generated about £30,000 in revenue in one year.
<br/>•  Tech stack: SQL Server, C#, jQuery, JavaScript, Python, Power BI, Stimulsoft, Microsoft Azure DevOps, Jira, and Git.
`,
      },
    ],
  },

  {
    company: "Freelance",
    companyLogoURL: Freelance,
    time: "Freelance",
    location: "Lahore, Pakistan",
    startDate: "2019-08-01",
    endDate: "2021-02-01",
    positions: [
      {
        title: "Web Developer",
        content: `
•  Built responsive web applications from scratch and as part of project teams.
<br/>•  Connected applications to third-party services, including FormSpree.
<br/>•  Tech stack: HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, and Git.
`,
      },
    ],
  },
];

export default jobs;

import NSW from "../assets/NSW-Department-of-Education-logo.png";
import CA from "../assets/screenshot-chatApplication.png";
import JL from "../assets/Screenshot-joblogic.png";
import PF from "../assets/screenshot-potfolio.png";
import RPS from "../assets/screenshot-rockPaperScissor.png";
import TG from "../assets/screenshot-trackerGo.png";
import VD from "../assets/screenshot-vidly.png";
import Peter from "../assets/Screenshot-Peter The Protocol Reader.png";
import Project from "../interfaces/Project";

const projects: Project[] = [
  {
    title: "Peter the Protocol Reader",
    imageURL: Peter,
    briefIntroduction: `Peter is an AI assistant for clinical research teams. It helps find, reference, and summarize information in study documents. Care Access, part of Reify Health, provides Peter, which is integrated with StudyTeam.`,
    theProblem: `Study protocols are long, and important details can be hard to find. Peter helps teams search across documents using questions in everyday language.`,
    myContributions: `Building LangGraph workflows with AWS Bedrock to route trial questions, and improving document search and retrieval with OpenSearch.`,
    theOutcome: `Peter returns document-based answers and summaries to support research teams. Users review its responses and original sources.`,
    technologiesUsed: "TypeScript, React.js, Node.js, Apollo GraphQL, LangGraph, AWS Bedrock, OpenSearch, PostgreSQL, Kafka, Microservices",
    projectURL: "https://studyteamapp.com/site/peter",
  },
  {
    title: "New South Wales School Infrastructure Digital Twin",
    imageURL: NSW,
    briefIntroduction: `A digital twin for the NSW Department of Education to view and manage school infrastructure.`,
    theProblem: `School asset information was difficult to track and use for planning.`,
    myContributions: `Built features and fixed issues with Vue.js and TypeScript. Used Azure DevOps to manage development work.`,
    theOutcome: `The project helped the department manage assets, plan upgrades, and make better decisions across more than 2,200 schools.`,
    technologiesUsed:
      "HTML5, CSS3, TypeScript, Vue.js, Azure DevOps, Azure, REST API, Microservices, Geospatial Technologies",
    projectURL: "https://portal.spatial.nsw.gov.au/explorer/index.html",
  },
  {
    title: "TrackerGo",
    imageURL: TG,
    briefIntroduction: `TrackerGo is an internal operations platform built for Joblogic.`,
    theProblem: `Joblogic relied on paid third-party tools and manual invoicing.`,
    myContributions: `Built and optimized TrackerGo, connected it to Xero to automate invoicing, and moved legacy code to microservices.`,
    theOutcome: `TrackerGo cut annual costs by 30%, improved user experience by 60%, and reduced invoicing errors by 90%. The migration made the system 100% more scalable and maintainable.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), C#, ASP.NET Core, Entity Framework, JQuery, Bootstrap, KendoUI",
    projectURL: "https://trackergo.joblogic.com",
  },
  {
    title: "Enterprise-Level Database Optimization and Maintenance",
    imageURL: JL,
    briefIntroduction: `Database performance and reporting improvements for Joblogic.`,
    theProblem: `High database usage increased Azure costs, and legacy queries ran slowly.`,
    myContributions: `Optimized 500+ queries, wrote 200+ SQL queries and stored procedures, and built 60+ dashboards and reports.`,
    theOutcome: `Peak database usage fell by 60% and query time by 75%. The dashboards generated about £30,000 in revenue in one year.`,
    technologiesUsed: "SQL Server, C#, jQuery, JavaScript, Python, Power BI, Stimulsoft, Azure DevOps, Jira, Git",
    projectURL: "https://joblogic.com",
  },
  {
    title: "Portfolio",
    imageURL: PF,
    briefIntroduction: `A personal website to share my work and experience.`,
    theProblem: `I needed a clear, responsive way to present my skills and projects.`,
    myContributions: `Built the portfolio with React, TypeScript, and Tailwind CSS, and deployed it on Vercel.`,
    theOutcome: `The site presents my work in a responsive layout across devices.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Vercel",
    projectURL: "https://github.com/hassaanarif/HassaanKhawaja-Portfolio",
  },
  {
    title: "Chat application",
    imageURL: CA,
    briefIntroduction: `A chat app for real-time conversations using Socket.io.`,
    theProblem: `Users needed a way to exchange messages instantly.`,
    myContributions: `Built the chat interface and real-time messaging with React, Node.js, Express, Socket.io, and MongoDB.`,
    theOutcome: `The app lets users exchange messages in real time.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), ReactJS 18, Node.js, Express.js, Socket.io, MongoDB",
    projectURL: "https://github.com/hassaanarif/Chat_Application",
  },
  {
    title: "Vidly - a video rental app",
    imageURL: VD,
    briefIntroduction: `A video rental app built with React and Node.js.`,
    theProblem: `I wanted to build a simple way to browse and manage movie rentals online.`,
    myContributions: `Built the React interface and a Node.js and Express backend.`,
    theOutcome: `The project helped me learn React and build a full-stack web application.`,
    technologiesUsed:
      "HTML5, CSS3, JavaScript (ES6+), ReactJS, React Router DOM, Joi, LoDash, Bootstrap, Node.js, Express.js, MongoDB, Heruko",
    projectURL: "https://github.com/hassaanarif/Vidly-Project",
  },
  {
    title: "Rock Paper Scissors game",
    imageURL: RPS,
    briefIntroduction: `A browser-based Rock Paper Scissors game and my first web game.`,
    theProblem: `I wanted to make a simple game with clear controls and smooth rounds.`,
    myContributions: `Built the game logic, interface, and round transitions with JavaScript, HTML, and CSS.`,
    theOutcome: `The project gave me hands-on experience building interactive web apps.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+)",
    projectURL: "https://github.com/hassaanarif/Rock-Paper-Scissor",
  },
];

export default projects;

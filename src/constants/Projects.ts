import Project from "../interfaces/Project";
import TG from "../assets/screenshot-trackerGo.png";
import CA from "../assets/screenshot-chatApplication.png";
import RPS from "../assets/screenshot-rockPaperScissor.png";
import VD from "../assets/screenshot-vidly.png";
import AX from "../assets/Screenshot-airviewX.png";
import PF from "../assets/screenshot-potfolio.png";
import JL from "../assets/Screenshot-joblogic.png";

const projects: Project[] = [
  {
    title: "TRACKER GO",
    imageURL: TG,
    briefIntroduction: `In this project, I developed an in-house, cloud-hosted Customer Relationship Management software, TrackerGo, for Joblogic Pvt Ltd. This solution eliminated the company's reliance on third-party paid CRMs, significantly reducing its annual expenditures.`,
    theProblem: `Company's heavy reliance on expensive third-party CRM systems and inefficient manual invoicing processes.`,
    myContributions: `I contributed by using my skills in JavaScript, HTML, CSS, C#, SQL, ASP.NET, Azure, Vue.js, Serverless, REST API, Microservices, and jQuery. I developed optimization techniques for large data throughput, integrated TrackerGo with Xero API for automated invoicing, and migrated legacy code to a more scalable and maintainable microservice architecture.`,
    theOutcome: `A 27% cut in annual expenditures, 60% improvement in user experience, 18% reduction in invoicing errors, and a 55% increase in scalability and maintainability of the system.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), C#, ASP.NET Core, Entity Framework, JQuery, Bootstrap, KendoUI",
  },
  {
    title: "Enterprise-Level Database Optimization and Maintenance",
    imageURL: JL,
    briefIntroduction: `Enterprise-Level Database Optimization and Maintenance`,
    theProblem: `The project aimed to address the high costs associated with Joblogic's Microsoft Azure subscription due to peak database usage. Additionally, there was an issue of slow query execution time due to legacy queries.`,
    myContributions: `I utilized my skills in SQL, jQuery, Optimization and Microsoft Azure to optimize over 500 legacy queries, reducing query execution time by 75%. I also wrote over 200 complex SQL Queries and Stored Procedures and created more than 60 bespoke dashboards as per customer requirements.`,
    theOutcome: `The optimization resulted in a 31% reduction in peak database usage, significantly reducing Joblogic's annual Microsoft Azure's subscription cost. Additionally, the bespoke dashboards generated around £30,000 in revenue for Joblogic in one year.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), TypeScript, Chakra UI, React Query, Rawg.io API",
  },
  {
    title: "AIRVIEW X",
    imageURL: AX,
    briefIntroduction: `This project involved the creation of a real-time data visualization dashboard for AirViewX, a unified digitalization platform. The aim was to accelerate digital transformation efforts for businesses, thereby improving efficiencies and significantly reducing costs.`,
    theProblem: `The challenge was to enhance data monitoring capabilities, automate data retrieval processes, and optimize database performance for handling large volumes of telecom data.`,
    myContributions: `Using skills in JavaScript, HTML, CSS, TypeScript, React, Node.js, Express.js, API Integration, and CI/CD, I developed a dashboard, integrated telecom APIs into the portal, and optimized database performance.`,
    theOutcome: `The project resulted in a 30% improvement in data monitoring, a 40% reduction in manual data entry, and a 20% reduction in query response time. These improvements led to increased accuracy in reporting and operational efficiency.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB",
  },
  {
    title: "PORTFOLIO",
    imageURL: PF,
    briefIntroduction: `I had the opportunity to create a personal portfolio, a testament to my skills and accomplishments. Utilizing React with TypeScript and Tailwind CSS, I embarked on a journey of self-expression.`,
    theProblem: `The challenge was to create a robust, scalable, and visually appealing portfolio that effectively highlights my work and expertise across various devices.`,
    myContributions: `Leveraging my skills in JavaScript, HTML, Tailwind CSS, CSS, TypeScript, React, Node.js, Express.js, Vercel and Next.js, I developed a portfolio using React's component-based architecture and TypeScript's static typing. Tailwind CSS was instrumental in achieving a sleek, modern design.`,
    theOutcome: `The result was a comprehensive portfolio that not only demonstrated my technical abilities but also highlighted my creativity and commitment to continuous improvement. It provided a responsive user experience across different devices, effectively showcasing my work and expertise.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Vercel",
  },
  {
    title: "CHAT APPLICATION",
    imageURL: CA,
    briefIntroduction: `This project involved the creation of a Chat Application leveraging Socket.io for real-time communication. The goal was to create a dynamic and engaging platform for instant conversation.`,
    theProblem: `The challenge was to harness the power of Socket.io to facilitate real-time, interactive communication between users.	`,
    myContributions: `Utilizing my skills in JavaScript, HTML, CSS, Tailwind CSS, TypeScript, MongoDB, React, Node.js, Express.js, Sockets, REST API, and GitHub, I delved into the intricacies of Socket.io, crafting a highly interactive chat application.`,
    theOutcome: `The project was a success, revolutionizing user engagement through instant, real-time communication. This experience showcased the potential of Socket.io in creating dynamic and interactive applications.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), ReactJS 18, Node.js, Express.js, Socket.io, MongoDB",
  },
  {
    title: "VIDLY - A VIDEO RENTAL APP",
    imageURL: VD,
    briefIntroduction: `I embarked on a journey to create "Vidly," a captivating video rental application using ReactJS. This marked my first web project with ReactJS, utilizing its class and functional components for frontend development, and Node.js along with Express for backend functionality.`,
    theProblem: `The project aimed to modernize the traditional video rental experience, providing a user-friendly interface and robust functionality to streamline the process.`,
    myContributions: `Leveraging skills in JavaScript, HTML, Tailwind CSS, CSS, TypeScript, React, Node.js, Express.js, Firebase, GitHub, and MongoDB, I developed an engaging user interface and a robust framework to power the application's functionality.`,
    theOutcome: `The completion of this project marked a pivotal milestone in my web development journey, further fueling my passion to explore and excel in this dynamic field. The application successfully revolutionized the video rental experience, making it more accessible and enjoyable for users.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), ReactJS, React Router DOM, Joi, LoDash, Bootstrap, Node.js, Express.js, MongoDB, Heruko",
  },
  {
    title: "ROCK PAPER SCISSOR GAME",
    imageURL: RPS,
    briefIntroduction: `This project entailed the creation of my first web game, "Rock Paper Scissor". The game featured intuitive user interfaces and seamless transitions between rounds, providing users with a captivating digital experience.`,
    theProblem: `The project aimed to address the challenge of creating an engaging and dynamic web-based game that could provide an immersive user experience.`,
    myContributions: `Using my skills in JavaScript, HTML, CSS, Node.js, GitHub, jQuery, and REST API, I was able to design and implement the game logic, user interface, and transitions. My problem-solving abilities were put to the test, and I gained valuable insights into web development.`,
    theOutcome: `The game was well-received by users, their engagement and enjoyment serving as strong testament to the success of the project. This venture served as a steppingstone for me, igniting a passion for web development and prompting me to explore further horizons in the field.`,
    technologiesUsed: "HTML5, CSS3, JavaScript (ES6+)",
  },
];

export default projects;

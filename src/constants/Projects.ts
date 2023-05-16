import Project from "../interfaces/Project";
import TG from "../assets/screenshot-trackerGo.png";
import CA from "../assets/screenshot-chatApplication.png";
import RPS from "../assets/screenshot-rockPaperScissor.png";
import VD from "../assets/screenshot-vidly.png";
import RC from "../assets/screenshot-rawgClone.png";
import PF from "../assets/screenshot-potfolio.png";

const projects: Project[] = [
	{
		title: "ROCK PAPER SCISSOR GAME",
		imageURL: RPS,
		description: `Undertaking my inaugural web project, the "Rock Paper Scissor" game, proved to be an enlightening experience that left an indelible mark on my journey as a developer. With this venture, I implemented several noteworthy features, including intuitive user interfaces, dynamic gameplay mechanics, and seamless transitions between rounds. Through the process, I gained invaluable insights into front-end development, honed my problem-solving abilities, and acquired a deeper understanding of Javascript's versatility. Moreover, witnessing the enjoyment and engagement of users as they immersed themselves in the game further fueled my passion for creating captivating digital experiences. This project served as a stepping stone, igniting a fervor within me to explore further horizons in web development.`,
		technologiesUsed: "HTML5, CSS3, JavaScript (ES6+)",
	},
	{
		title: "VIDLY [VIDEO RENTAL APP]",
		imageURL: VD,
		description: `I embarked on my very first web project utilizing ReactJS, a remarkable journey that resulted in the creation of "Vidly," a captivating video rental application. Leveraging ReactJS' class and functional components for the frontend, and Node.js along with Express for the backend, I deftly crafted an engaging user interface and a robust framework to power the application's functionality. This experience served as a pivotal milestone in my web development endeavors, further fueling my passion to explore and excel in this dynamic field.`,
		technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), ReactJS, React Router DOM, Joi, LoDash, Bootstrap, Node.js, Express.js, MongoDB, Heruko",
	},
	{
		title: "CHAT APPLICATION",
		imageURL: CA,
		description: `I took on an exciting project that involved building a Chat Application using Socket.io. It was a fascinating exploration of Socket.io's capabilities for enabling real-time communication. I dove into the intricacies of Socket.io, creating a dynamic platform that allowed users to engage in instant conversations. This experience opened my eyes to the power of Socket.io in crafting interactive and engaging real-time applications.`,
		technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), ReactJS 18, Node.js, Express.js, Socket.io, MongoDB",
	},
	{
		title: "TRACKER GO",
		imageURL: TG,
		description: `I had the privilege of contributing to the development of TrackerGo, a pivotal internal tool at Joblogic Pvt Ltd. This robust system revolutionized the management of customer data, finances, and onboarding processes. Leveraging my proficiency in C#, ASP.NET Core, Entity Framework, and SQL Server, I implemented intricate business logic to safeguard sensitive information, granting authorized access to authorized personnel. Employing Bootstrap and jQuery, I crafted a responsive user interface that facilitated seamless navigation through customer data, chat history, and support tickets. By optimizing system performance, I significantly enhanced user productivity and overall effectiveness. Additionally, my frontend/UI expertise allowed me to create an intuitive and visually pleasing interface, resulting in heightened user satisfaction.`,
		technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), C#, ASP.NET Core, Entity Framework, JQuery, Bootstrap, KendoUI",
	},
	{
		title: "RAWG.IO CLONE",
		imageURL: RC,
		description: `I had the privilege of working on an exhilarating project, a clone of the popular gaming website rawg.io. What made this endeavor even more exciting was that it was developed using TypeScript, the statically-typed superset of JavaScript. Leveraging the latest version of React (v18) and incorporating renowned libraries like React Query and Chakra UI, I embarked on this TypeScript-driven journey. With meticulous attention to detail, I meticulously recreated the captivating features and functionalities of rawg.io, ensuring a seamless and immersive gaming experience for users. TypeScript's robust type system allowed for enhanced code quality and improved maintainability, reducing errors and facilitating efficient collaboration within the development team. By employing React Query, I optimized data fetching and caching, while the utilization of Chakra UI facilitated the creation of visually stunning and user-friendly interfaces. This project not only allowed me to explore the power of TypeScript but also sharpened my skills in crafting exceptional web applications.`,
		technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), TypeScript, Chakra UI, React Query, Rawg.io API",
	},
	{
		title: "PORTFOLIO",
		imageURL: PF,
		description: `I had the pleasure of crafting my own personal portfolio, a showcase of my skills and achievements. Leveraging the power of React with TypeScript and harnessing the flexibility of Tailwind CSS, I embarked on this self-expression journey. By employing React's component-based architecture and TypeScript's static typing, I created a robust and scalable portfolio that seamlessly showcased my work and expertise. With the help of Tailwind CSS, I achieved a sleek and modern design, ensuring a visually appealing and responsive user experience across different devices. This project not only allowed me to demonstrate my technical prowess but also served as a testament to my creativity and dedication to continuous improvement.`,
		technologiesUsed: "HTML5, CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Vercel",
	},
];

export default projects;

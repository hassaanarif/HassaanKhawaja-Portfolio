import ASP from "../assets/icon-asp.png";
import ANGULAR from "../assets/icon-angular.svg";
import AWS from "../assets/icon-amazonwebservices.svg";
import AZURE from "../assets/icon-azure.svg";
import AZUREDEVOPS from "../assets/icon-azuredevops.svg";
import BS from "../assets/icon-bootstrap.png";
import CIRCLECI from "../assets/icon-circleci.svg";
import CLAUDE from "../assets/icon-claude.svg";
import CUI from "../assets/icon-chakraui.png";
import CS from "../assets/icon-csharp.png";
import CSS from "../assets/icon-css.png";
import CONFLUENCE from "../assets/icon-confluence.svg";
import COPILOT from "../assets/icon-github-copilot.svg";
import CURSOR from "../assets/icon-cursor.svg";
import DOCKER from "../assets/icon-docker.png";
import ESRI from "../assets/icon-esri.svg";
import GIT from "../assets/icon-git.png";
import GQL from "../assets/icon-graphql.svg";
import HTML from "../assets/icon-html.png";
import JS from "../assets/icon-javascript.png";
import JQ from "../assets/icon-jquery.png";
import JIRA from "../assets/icon-jira.svg";
import KAFKA from "../assets/icon-kafka.png";
import LANGCHAIN from "../assets/icon-langchain.svg";
import LANGGRAPH from "../assets/icon-langgraph.svg";
import MCP from "../assets/icon-mcp.svg";
import MDB from "../assets/icon-mongodb.png";
import NEXT from "../assets/icon-nextjs.svg";
import ND from "../assets/icon-node.png";
import PG from "../assets/icon-postgresql.svg";
import PY from "../assets/icon-python.svg";
import RT from "../assets/icon-react.png";
import RQ from "../assets/icon-reactQuery.png";
import RD from "../assets/icon-redux.png";
import SONAR from "../assets/icon-sonar.svg";
import SQL from "../assets/icon-sql.png";
import SQLSERVER from "../assets/icon-microsoftsqlserver.svg";
import STYLED from "../assets/icon-styled-components.svg";
import SWAGGER from "../assets/icon-swagger.svg";
import TW from "../assets/icon-tailwindcss.png";
import TS from "../assets/icon-typescript.png";
import VUE from "../assets/icon-vue.svg";
import DOTNET from "../assets/icon-dotnet.svg";

interface Skill {
  logoURL?: string;
  name: string;
}

const skills: Skill[] = [
  {
    logoURL: HTML,
    name: "HTML",
  },
  {
    logoURL: CSS,
    name: "CSS",
  },
  {
    logoURL: JS,
    name: "JavaScript",
  },
  {
    logoURL: TS,
    name: "TypeScript",
  },
  {
    logoURL: RT,
    name: "React",
  },
  {
    logoURL: RD,
    name: "Redux",
  },
  {
    logoURL: ND,
    name: "NodeJS",
  },
  {
    logoURL: MDB,
    name: "MongoDB",
  },
  {
    logoURL: JQ,
    name: "JQuery",
  },
  {
    logoURL: GIT,
    name: "Git",
  },
  {
    logoURL: CS,
    name: "C#",
  },
  {
    logoURL: ASP,
    name: "ASP.NET Core",
  },
  {
    logoURL: SQL,
    name: "SQL",
  },
  {
    logoURL: CUI,
    name: "Chakra UI",
  },
  {
    logoURL: TW,
    name: "Tailwind css",
  },
  {
    logoURL: BS,
    name: "Bootstrap",
  },
  {
    logoURL: RQ,
    name: "React Query",
  },
  {
    logoURL: DOCKER,
    name: "Docker",
  },
  {
    logoURL: KAFKA,
    name: "Kafka",
  },
  { logoURL: PY, name: "Python" },
  { logoURL: NEXT, name: "Next.js" },
  { logoURL: VUE, name: "Vue.js" },
  { logoURL: ANGULAR, name: "Angular" },
  { logoURL: STYLED, name: "Styled Components" },
  { logoURL: DOTNET, name: "ASP.NET Core MVC" },
  { name: "Microservices" },
  { name: "Serverless Architecture" },
  { name: "REST APIs" },
  { logoURL: GQL, name: "GraphQL" },
  { logoURL: PG, name: "PostgreSQL" },
  { logoURL: SQLSERVER, name: "SQL Server" },
  { name: "RAG" },
  { logoURL: LANGGRAPH, name: "LangGraph" },
  { logoURL: LANGCHAIN, name: "LangChain" },
  { logoURL: AWS, name: "AWS Bedrock" },
  { logoURL: MCP, name: "MCP Servers" },
  { logoURL: AZURE, name: "Azure Functions" },
  { logoURL: AZUREDEVOPS, name: "Azure DevOps" },
  { logoURL: AWS, name: "AWS Lambda" },
  { logoURL: AWS, name: "Amazon S3" },
  { logoURL: CIRCLECI, name: "CircleCI" },
  { name: "CI/CD" },
  { logoURL: ESRI, name: "Esri ArcGIS SDK" },
  { logoURL: SWAGGER, name: "Swagger" },
  { logoURL: CURSOR, name: "Cursor IDE" },
  { logoURL: CLAUDE, name: "Claude Code" },
  { logoURL: COPILOT, name: "GitHub Copilot" },
  { logoURL: SONAR, name: "SonarQube" },
  { logoURL: JIRA, name: "Jira" },
  { logoURL: CONFLUENCE, name: "Confluence" },
  { name: "OOP" },
  { name: "SOLID Principles" },
  { name: "Design Patterns" },
  { name: "TDD" },
  { name: "Agile & Scrum" },
];

export default skills;

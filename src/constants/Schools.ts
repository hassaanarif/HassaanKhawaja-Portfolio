import UET from "../assets/UET.jpg";
import Mosh from "../assets/Mosh.jpg";
import School from "../interfaces/School";

const schools: School[] = [
  {
    name: "Mosh Academy",
    location: "Online",
    degree: "Web Development Certifications",
    startDate: "2020",
    endDate: "2022",
    logoURL: Mosh,
    highlights: `
      •	Successfully completed over 15 advanced programming courses with certificates of completion from codewithmosh.com, showcasing a commitment to continuous learning and mastery of diverse programming concepts.
<br/> •	Developed a solid foundation in building responsive and dynamic web applications through guided, project-based learning.
    `,
  },
  {
    name: "University of Engineering and Technology",
    location: "Lahore",
    degree: "BSc. Electrical Engineering",
    startDate: "2014",
    endDate: "2018",
    logoURL: UET,
    highlights: `
      •	Completed a Bachelor of Electrical Engineering with a major in Computer Science.
<br/> •	Coursework included Introduction to Computing, Programming Fundamentals, Operating Systems, Computer Networking, Data Structures and Algorithms, Microprocessor Systems and Databases.
`,
  },
];

export default schools;

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Aspiring Web Developer with skills in HTML, CSS, JavaScript,Tailwind CSS and React  Currently learning MERN stack development through an Internshala course. Committed to building responsive and user-friendly web applications.`;

export const ABOUT_TEXT = `I am a front-end developer skilled in HTML, CSS, JavaScript, Tailwind CSS, and React. I completed my BCA in 2024 and am seeking an internship in MERN stack development. I enjoy creating user-friendly, responsive websites and want to gain real-world experience. I am eager to learn, work on projects, and grow as a developer.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Tic Tac Toe webapp Game ",
    link:"https://justforfun.tiiny.site/",
    image: project1,
    description:
      "Tic Tac Toe multiplayer game where two players compete to align three Xs or Os on a 3x3 grid. Simple, fun, and engaging!",
    technologies: ["HTML", "CSS", "javascript"]
  },
  {
    title: "Number Guessing Game",
    link:"https://guessthenumber2312.netlify.app/",
    image: project2,
    description:
      "A simple and fun game where players attempt to guess a randomly generated number within a specific range. After each guess, feedback is provided to indicate whether the guess is too high, too low, or correct. The goal is to guess the correct number in the fewest attempts possible..",
    technologies: ["HTML", "CSS", "javascript"],
  },
  {
    title: "Portfolio Website",
    link:"#",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS","Tailwindcss", "React"],
  },
  {
    title: "Weather App",
    link:"https://weather2312.netlify.app/",
    image: project4,
    description:
      "Stay updated with real-time weather forecasts,Wind Speed, temperature, and conditions. Simple, accurate, and user-friendly for everyday use.",
    technologies: ["HTML", "CSS","javascript"]
  },
];

export const CONTACT = {
  address: "Vastrapur, Ahmedabad, Gujarat",
  phoneNo: "+91 8980316382 ",
  email: "tejasdonga4@gmail.com",
};

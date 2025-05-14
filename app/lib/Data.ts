import { title } from "process";

export const links=[
    {
        name:"Home",
        hash :"#home"
    },
    {
        name:"About",
        hash:"#about"
    },
    {
        name:"Project",
        hash:"#project"
    },
    {
        name:"Skills",
        hash:"#skills"
    },
    {
        name:"Contact",
        hash:"#contact"
    },
] as const;
export const projectData=[
    {
        title:"My Portfolio",
        Description:"Created a Portfolio website for me with NextJS, TailwindCSS for styling, and Resend for email.",
        tags:["NextJS", "TypeScript", "TailwindCSS", "Framer-Motion"],
        image:"",
        githuburl:"",
        liveurl:""
    },
    {
        title:"TrackNSpend",
        Description:"I developed an expense tracker using React.js, Node.js, Express.js, and MongoDB. The app includes a dashboard, transaction history, and income/expense tracking, offering a scalable, user-friendly interface.",
        tags:["ReactJs","NodeJs","Express","MongoDB","ChartJs"],
        image:"",
        githuburl:"https://github.com/Sachin2001-kumar/Expense-Tracker-App",
        liveurl:""
    },
    {
        title:"NewsFlow Web",
        Description:"",
        tags:["HTML","CSS","JavaScript"],
        image:"",
        githuburl:"I developed a news app using HTML, CSS, and JavaScript, integrating real-time data with the News API to showcase my frontend and API integration skills.",
        liveurl:"https://github.com/Sachin2001-kumar/NewsFlow-Web"
    }
] as const;
export const skillsData = [
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "Next.js",
    "TailwindCSS",
    "React.js",
    "Recoil",
    "Node.js",
    "Express.js",
    "TurboRepo",
    "MongoDB",
    "Prisma",
    "Git",
    "Docker",

  ] as const;
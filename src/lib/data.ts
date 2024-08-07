import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import anseoImg from "/public/anseo.svg"
import onYourBikeImg from "/public/on_your_bike.png";
import javaGameImg from "/public/java_game_pic.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: LuGraduationCap,
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: CgWorkAlt,
    date: "2019 - 2021",
  },
  { 
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: FaReact,
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Anseo",
    description:
      "Developed an application to help entrepreneurs and business owners identify the best locations to start their business in New York.",
    tags: [
      "React",
      "TypeScript",
      "Framer",
      "PostgreSQL",
      "Tailwind",
      "Java",
      "Python",
      "FastAPI",
      "Spring Boot"
    ],
    imageUrl: anseoImg,
    link: "https://anseo.live/"
  },
  {
    title: "OnYourBike",
    description:
      "Dublin Bikes project developed in team of 3 using Google Maps API and machine learning to predict bike station occupancy.",
    tags: ["JavaScript", "Python", "Flask", "MySQL", "scikit-learn", "AWS"],
    imageUrl: onYourBikeImg,
    link: "https://onyourbike.info/"
  },
  {
    title: "Carbon Crunchers",
    description:
      "Developed a 2D game in Java using LibGDX to educate kids on sustainable transport practices and carbon emissions.",
    tags: ["Java", "LibGDX"],
    imageUrl: javaGameImg,
    link: "https://github.com/aTomical2/Java"
  },
] as const;

export const skillsData = [
  { name: "HTML", iconUrl: "vscode-icons:file-type-html" },
  { name: "CSS", iconUrl: "vscode-icons:file-type-css" },
  { name: "JavaScript", iconUrl: "logos:javascript" },
  { name: "TypeScript", iconUrl: "logos:typescript-icon" },
  { name: "React", iconUrl: "logos:react" },
  { name: "Node.js", iconUrl: "logos:nodejs-icon" },
  { name: "Git", iconUrl: "logos:git-icon" },
  { name: "Tailwind", iconUrl: "vscode-icons:file-type-tailwind" },
  { name: "GraphQL", iconUrl: "vscode-icons:file-type-graphql" },
  { name: "PostgreSQL", iconUrl: "logos:postgresql" },
  { name: "Go", iconUrl: "vscode-icons:file-type-go" },
  { name: "Java", iconUrl: "logos:java" },
  { name: "Python", iconUrl: "vscode-icons:file-type-python" },
  { name: "Figma", iconUrl: "logos:figma" },  
  { name: "Framer Motion", iconUrl: "devicon:framermotion" },
] as const;
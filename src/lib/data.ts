import { CgWorkAlt } from "react-icons/cg";
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
    title: "Private Solder in Irish Defence forces",
    location: "Dublin, Ireland",
    description:
      "Provided aid to the Civil Power, engaged in ceremonial duties at local and national events, and pursued ongoing training to enhance skills and proficiency with new equipment, adapting to a dynamic environment.",
    icon: CgWorkAlt,
    date: "Aug 2015 - Sep 2017",
  },
  {
    title: "BA (Hons) in International Business",
    location: "Waterford Institute of Technology",
    description:
      "I graduated with a first-class honours degree in international business as an undergraduate.",
    icon: LuGraduationCap,
    date: "2017 - 2021",
  },
  {
    title: "Housekeeping Assistant, Noel Group Recruitment",
    location: "Kilkenny, Ireland",
    description:
      "During the Covid-19 pandemic, I maintained cleanliness and infection control in a district hospital, following strict guidelines to ensure high standards of cleanliness in Covid-19 wards, helped control the spread of the virus to maintain safe ward conditions, and provided food to patients throughout the day.",
    icon: CgWorkAlt,
    date: "Apr 2020 - May 2021",
  },
  {
    title: "ESL Teacher, Spěváček Language School",
    location: "Prague, Czech Republic",
    description:
      "I evaluated student progress and generated comprehensive reports, encouraged a positive atmosphere in the classroom, and inspired and motivated pupils to reach their learning objectives.",
    icon: CgWorkAlt,
    date: "Jun 2021 - Dec 2021",
  },
  {
    title: "International Assignment Associate, Graebel Relocation",
    location: "Prague, Czech Republic",
    description:
      "I processed allowances, payments, and costs, ensured transferees' services and expenses complied with the Client’s policy, and maintained organised files to ensure reliable tracking and reporting for sustained data quality.",
    icon: CgWorkAlt,
    date: "Jul 2021 - Apr 2022",
  },
  {
    title: "MSc Computer Science",
    location: "University College Dublin",
    description:
      "Currently completing a Master's degree in Computer Science and graduating in December 2024.",
    icon: LuGraduationCap,
    date: "Sep 2023 - Present",
  },
  {
    title: "BikeHood Research Project",
    location: "University College Dublin",
    description:
      "We are developing a digital twin of a Dublin neighbourhood, capturing spatial and temporal dynamics of cycling, pedestrian, and transport infrastructure. We will also develop an interactive web application to showcase the digital twin to a variety of stakeholders.",
    icon: CgWorkAlt,
    date: "Aug 2024 - Present",
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
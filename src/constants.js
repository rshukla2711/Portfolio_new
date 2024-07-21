import Synapse from './assets/Synapse.jpg';
import Brieflink from './assets/Brieflink.jpg';
import portfolio from './assets/portfolio.jpg';

export const Study = [
    {
      year: "2021 - 2025",
      college: "Birla Institute of Technology, Mesra",
      degree: "B.Tech in Information Technology",
      description: `GPA:8.7 (Till 6th Semester)`,
      
    },
    {
      year: "2019 - 2020",
      college: "Kendriya Vidyalaya",
      degree: "AISSCE",
      description: `Percentage:94%`
    },
    {
      year: "2017 - 2018",
      college: "Kendriya Vidyalaya",
      degree: "AISSE",
      description: `Percentage:89.4%`
    }
  ];
  export const PROJECTS = [
    {
      title: "Synapse- Chat Application",
      image: Synapse,
      description:
        "A chatting application that allows users to create accounts and send real-time messages with user authentication using Nodemailer.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Nodemailer", "SOCKET.IO"],
    },
    {
      title: "URL Shortener App",
      image: Brieflink,
      description:
        "A URL shortener and QR code generator web application. Simplifies sharing of long URLs, enhancing user convenience",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      image: portfolio,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["React", "Framer-Motion", "Tailwind CSS"],
    }
  ];
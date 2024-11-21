import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import Meme from "@/public/Meme.png";
import EAlert from "@/public/EAlert.png";
import VMarket from "@/public/VMarket.png";
import IManag from "@/public/IManag.png";
import { FaCertificate } from "react-icons/fa";


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
    title: "Software Engineer - Intern",
    location: "Oracle",
    description:
      "Completed 7+ Oracle courses on web development. Built 2 web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Jun 2021",
  },
  {
    title: "Software Developer II",
    location: "Oracle",
    description:
      "Developed UI using Typescript, HTML, CSS, Bootstrap. Performed integration and functional testing using jQuery, JUnit. Developed backend of the web applications using Java, JDBC and written Karate Scripts for backend applications. Tested applications using GAT, Selenium and Cypress tools.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Dec 2022",
  },
  {
    title: "Student Assistant",
    location: "University at Albany, SUNY",
    description:
      "Developed graphic websites and application interfaces using HTML5, CSS3, and Bootstrap. Designed engaging graphics with Figma, Photoshop, and Sketch, while contributing to web applications using Spring MVC and deploying them on AWS S3.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Sep 2024",
  }, 
  {
    title: "Software Engineer Intern",
    location: "New York State Department of Health",
    description:
    "Utilized Node.js and MongoDB for data management in two projects to enhance efficiency, while leveraging PostgreSQL for complex queries on large datasets. Achieved improved user engagement by enriching the UI/UX with Angular.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Present",
  },
  {
    title: "Certificates",
    location: "",
    description:
    "Typescript Workshop Certificate \u00A0\u00A0\u00A0\u00A0\u00A0| Mar 2020 " +
    "Hackathon Participation Certificate \u00A0| Dec 2019\n" +
    "Python Workshop Certificate \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0| Sep 2018",
    icon: React.createElement(FaCertificate),
    date: "2018 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Mall Management System",
    description:
      "Web application to book movie tickets, a parking slot and event, view multiple deals & blueprint of store locations inside the mall, apply for jobs in the mall, order food and view the games present in the game zone.",
    tags: ["HTML", "CSS", "Java", "Javascript", "Spring Boot", "Mysql"],
    imageUrl: Meme,
  },
  {
    title: "Inventory Management",
    description:
      "Project to gain experience on React, MongoDB, Docker which includes user sessions, navigation between pages, modal classes, uploading images, CRUD operations ",
    tags: ["React", "Javascript", "CSS", "MongoDB", "Docker"],
    imageUrl: IManag,
  },
  {
    title: "Virtual Marketplace",
    description:
      "It is a j-hub \"hackathon\" project where I developed UI for an online platform with seamless navigation and flexible inventory management.",
    tags: ["HTML", "Javascript", "CSS", "Bootstrap"],
    imageUrl: VMarket,
  },
  
  {
    title: "Better and faster emergency care during accidents",
    description:
      "Mobile application which sends real-time alert messages to emergency contacts in critical situations",
    tags: ["Android Studio", "Java", "Firebase Database"],
    imageUrl: EAlert,
  },
  
] as const;

export const skillsData = [
  "Java", "C", "Python", "Algorithms", "Data Structures", "JavaScript", "Typescript", "Angular",
  "HTML", "CSS", "React", "Node.js", "Karate", "REST", "Microservices", "jQuery", "Junit", "JDBC",
  "MySQL", "PL/SQL", "PostgreSQL", "MongoDB", "Oracle DB",
  "AWS (EC2, S3)", "Docker", "Jira", "Maven", "Figma", "Photoshop", "Sketch", "GAT", "Cypress", "Selenium", 
 

] as const;
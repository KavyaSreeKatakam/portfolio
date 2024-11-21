"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As a Computer Science graduate, I have had the privilege of working with esteemed organizations like 
      <span className="font-bold"> Oracle, University at Albany - SUNY, New York State Department of Health</span>. 
      My ultimate goal is to design and develop fully-fledged applications, 
      managing everything from the initial design to deployment. 
      To achieve this, I am actively gaining experience by working 
      on both the front-end and back-end, as well as exploring design aspects using tools like Figma. 
      I’ve built a strong foundation in front-end technologies such as HTML, CSS, TypeScript, JavaScript, 
      and React, creating intuitive and user-friendly interfaces. Additionally, 
      I have experience with back-end technologies like Java, Node.js, MongoDB, 
      and PostgreSQL to ensure smooth functionality and seamless integration.
      </p>

      <p>
      While I enjoy the entire development process, 
      my true passion lies in designing and front-end development, 
      where I can <span className = "underline">bring the ideas and designs to life</span>.
      I also recognize the importance of a solid back-end to support the front-end, 
      and I’m equally committed to building a reliable and efficient back-end system. 
      I’m always eager to learn new technologies to improve both my design 
      and development skills, and I’m looking for opportunities to contribute to 
      projects that allow me to leverage both my design and full-stack development experience.
      </p>
    </motion.section>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "../lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
       ref={ref}
        className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
      <SectionHeading>About me</SectionHeading>
      <p>
        Hello, I am Sachin Kumar Dagar. My core skills are{" "}
        <span className="bg-red-300">C++, Python, Next.js, MySQL</span>. I am
        also familiar with{" "}
        <span className="bg-blue-300">PostgreSQL and Docker</span>.
        </p>
        <p>
        <span className="font-semibold">When I'm not coding, I enjoy watching</span>{" "}
        <span className="font-serif">Movies</span> <span className="font-semibold">and playing </span>
        <span className="font-serif">Cricket</span>.
        </p>
      
    </motion.section>
  );
};

export default About;

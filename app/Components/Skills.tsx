"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "../lib/Data";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [showAll, setShowAll] = useState(false); 
  const number = 4;

  const toggleSkills = () => {
    setShowAll(!showAll);
  };

  const displaySkills = () => {
    return showAll ? skillsData : skillsData.slice(0, number);
  };

  return (
    <>
      <section
        id="skills"
        ref={ref}
        className="mb-12 max-w-[53rem] scroll-mt-28 text-center"
      >
        <SectionHeading>My Skills</SectionHeading>
    
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="grid sm:grid-cols-4 grid-cols-2 justify-center gap-4 text-lg text-black-600">
            {displaySkills().map((skill, index) => (
              <motion.div
                className="bg-orange-500 border-black-400 border hover:bg-blue-400 hover:shadow-lg rounded-xl sm:px-5 sm:py-3 p-2 font-semibold flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1"
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          
          <motion.button
            onClick={toggleSkills}
            className="bg-green-300 border-green-500 border hover:bg-green-600 hover:shadow-lg rounded-xl px-5 py-3 mt-6 font-semibold flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      </section>
    </>
  );
}

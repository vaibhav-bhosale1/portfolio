"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNode,
    FaAws, FaDocker, FaGitAlt,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCplusplus, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiTypescript, SiKubernetes, SiJenkins, SiAnsible, SiGithubactions, SiJira, SiPostgresql } from "react-icons/si";

const skillsIcon = [
  {
    icon: <FaReact size={140} />,
    label: "React",
  },
  {
    icon: <FaNode size={140} />,
    label: "Node.js",
  },
  {
    icon: <RiNextjsFill size={140} />, 
    label: "Next.js",
  },
  {
    icon: <SiExpress size={140} />,
    label: "Express.js",
  },
  {
    icon: <SiTailwindcss size={140} />,
    label: "Tailwind CSS",
  },
  {
    icon: <SiMongodb size={140} />,
    label: "MongoDB", // Existing, not replaced
  },
  {
    icon: <SiCplusplus size={140} />,
    label: "C++",
  },
  {
    icon: <SiMysql size={140} />,
    label: "MySQL", // Existing, not replaced
  },
  {
    icon: <FaJava size={140} />,
    label: "Java",
  },
  {
    icon: <FaBootstrap size={140} />,
    label: "Bootstrap",
  },
  {
    icon: <FaHtml5 size={140} />,
    label: "HTML5",
  },
  {
    icon: <FaCss3Alt size={140} />,
    label: "CSS3",
  },
  {
    icon: <FaJsSquare size={140} />,
    label: "JavaScript",
  },
  {
    icon: <SiTypescript size={140} />,
    label: "TypeScript",
  },
  // --- New Skills Added Below ---
  {
    icon: <FaAws size={140} />, 
    label: "AWS",
  },
  {
    icon: <FaDocker size={140} />,
    label: "Docker",
  },
  {
    icon: <SiKubernetes size={140} />,
    label: "Kubernetes",
  },
  {
    icon: <SiJenkins size={140} />, 
    label: "Jenkins",
  },
  {
    icon: <SiAnsible size={140} />,
    label: "Ansible",
  },
  {
    icon: <FaGitAlt size={140} />, 
    label: "Git",
  },
  {
    icon: <SiGithubactions size={140} />,
    label: "GitHub Actions",
  },
  {
    icon: <SiJira size={140} />, 
    label: "JIRA",
  },
  {
    icon: <SiPostgresql size={140} />,
    label: "PostgreSQL",
  },
];

const Skills = () => {
  return (
    <div className="relative  py-3">
      {/* Background Video */}
  
      {/* Content Section */}
      <div className="relative z-10">
        <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
          {/* Animated Title */}
          <motion.h2
            className="text-6xl font-bold mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Technical <span className="text-orange-400">Skills</span>
          </motion.h2>
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillsIcon.map((skill, index) => (
              <motion.div
                key={index}
                className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {skill.icon}
                <p className="mt-2">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

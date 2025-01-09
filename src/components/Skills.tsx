"use client";
import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNode,
  

  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCplusplus, SiExpress, SiMongodb, SiMysql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const skillsIcon = [
  {
    icon: <FaReact size={140} />,
    label: "React",
  },
  {
    icon: <FaNode size={140} />,
    label: "Node",
  },
  {
    icon: <RiNextjsFill size={140} />,
    label: "Next js",
  },
  {
    icon: <SiExpress size={140} />,
    label: "Express",
  },
  {
    icon: <SiTailwindcss size={140} />,
    label: "C++",
  },
  {
    icon: <SiMongodb size={140} />,
    label: "Mongodb",
  },
  {
    icon: <SiCplusplus size={140} />,
    label: "C++",
  },
  {
    icon: <SiMysql size={140} />,
    label: "Mongodb",
  },
  {
    icon: <FaJava size={140} />,
    label: "C++",
  },
  {
    icon: <FaBootstrap size={140} />,
    label: "Mongodb",
  },
  {
    icon: <FaHtml5 size={140} />,
    label: "HTML",
  },
  {
    icon: <FaCss3Alt size={140} />,
    label: "CSS",
  },
  {
    icon: <FaJsSquare size={140} />,
    label: "Javascript",
  },
  {
    icon: <SiTypescript size={140} />,
    label: "Javascript",
  },

];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsIcon.map((skill, index) => (
            <div
              key={index}
              className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl "
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

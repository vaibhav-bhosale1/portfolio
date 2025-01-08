"use client";
import React from "react";
import project1 from "../assets/proj1.jpg";
import project2 from "../assets/proj2.jpg";

import { motion } from "framer-motion";
import Image from "next/image";
import { li } from "framer-motion/client";

const projects = [
  {
    title: "VirtueHireX - AI Mock Interview Platform ",
    desc: "Implemented AI-powered interview system generating personalized questions and instant feedback,Built real-time video/audio recording and analysis using React Webcam,Developed automated performance rating system with detailed improvement suggestions",
    devStack:
      " Next.js, React, PostgreSQL/Drizzle ORM, Google's Generative AI, Next UI, TailwindCSS, Clerk.js",
    link: "https://virtuehirex.vercel.app/",
    git: "https://github.com/vaibhav-bhosale1/ai-mock-interview",
    src: project1,
  },
  {
    title: "ChatterBox- Chat App",
    desc: " Integrated Socket.io for real-time messaging and online user status updates,Created authentication and authorization using JWT to ensure secure access,Developed robust error handling on both the server and client sides",
    devStack:
      "React.js, Node.js, Express.js, Mongodb, TailwindCSS, Daisy UI, Socket IO",
    link: "https://chatterbox-2gjn.onrender.com/",
    git: "https://github.com/vaibhav-bhosale1/CHAT-APP",
    src: project2,
  },
  {
    title: "Blogify-A Blog Website",
    desc: "",
    devStack: "Node.js, Express.js",
    link: "https://virtuehirex.vercel.app/",
    git: "https://github.com/vaibhav-bhosale1/ai-mock-interview",
    src: project1,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white  bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected  <span className="text-orange-400">Project</span>
      </h1>

      <div className="px-6  md:px-0 max-w-[1000px] mx-auto space-y-24 mt-30">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col mt-12 flex ${
              index % 2 == 1
                ? " md:flex-row-reverse gap-12"
                : " md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70 ">
                {`0${index + 1}`}
              </h2>
              <h2 className="text-4xl ">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git} className="mr-6">
                  Github
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt="project"
                className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

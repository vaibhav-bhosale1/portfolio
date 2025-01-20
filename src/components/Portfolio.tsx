"use client";
import React from "react";
import project1 from "../../public/image.png";
import project3 from "../../public/image2.png";
import project2 from "../../public/virtuehirex.png";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "VirtueHireX - AI Mock Interview Platform",
    desc: "Implemented AI-powered interview system generating personalized questions and instant feedback, built real-time video/audio recording and analysis using React Webcam, developed automated performance rating system with detailed improvement suggestions.",
    devStack:
      "Next.js, React, PostgreSQL/Drizzle ORM, Google's Generative AI, Next UI, TailwindCSS, Clerk.js",
    link: "https://virtuehirex.vercel.app/",
    git: "https://github.com/vaibhav-bhosale1/ai-mock-interview",
    src: project2,
  },
  {
    title: "ChatterBox - Chat App",
    desc: "Integrated Socket.io for real-time messaging and online user status updates, created authentication and authorization using JWT to ensure secure access, developed robust error handling on both the server and client sides.",
    devStack: "React.js, Node.js, Express.js, MongoDB, TailwindCSS, Daisy UI, Socket IO",
    link: "https://chatterbox-2gjn.onrender.com/",
    git: "https://github.com/vaibhav-bhosale1/CHAT-APP",
    src: project1,
  },
  {
    title: "Blogify - A Blog Website",
    desc: "Created a full-stack blog application with CRUD operations, authentication, and responsive UI.",
    devStack: "Node.js, Express.js, MongoDB, React.js, TailwindCSS",
    git: "https://github.com/vaibhav-bhosale1/",
    src: project3,
  },
];

const Portfolio = () => {
  return (
    <div
      className="bg-black text-white py-18 mt-3"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-30">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-12`}
          >
            {/* Project Details */}
            <motion.div
              initial={{ x: index % 2 === 1 ? 50 : -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 max-w-[600px]"
            >
              <h2 className="text-6xl text-white/70">{`0${index + 1}`}</h2>
              <h3 className="text-3xl font-semibold">{project.title}</h3>
              <p className="text-lg text-white/80">{project.desc}</p>
              <p className="text-md text-orange-400 font-medium">{project.devStack}</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <Image
                src={project.src}
                alt={project.title}
                width={700}
                height={450}
                className="object-cover rounded-lg border border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
                priority={index === 0} // Prioritize loading the first project image
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

"use client";
import Image from "next/image";
import React from "react";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto p-6  text-white " id="about ">
  

      {/* Main Heading */}
      <h1 className="text-center text-4xl md:text-6xl font-bold mb-10 relative z-10">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {/* Education Section */}
        <motion.div
          className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-orange-500 transition-all duration-500"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
          <div className="p-8 relative z-10 flex flex-col items-center text-center space-y-4">
            {/* Icon */}
            <motion.div
              className="p-4 bg-orange-500/20 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Image src={book} alt="Education" className="w-16 h-16" />
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-orange-400">Education</h2>

            {/* Divider */}
            <div className="w-12 h-1 bg-orange-400 rounded-full"></div>

            {/* Content */}
            <motion.div
              className="space-y-2 text-gray-300 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg font-medium">
                B.Tech in Electronics and Telecommunication
              </p>
              <p className="text-lg">
                Vishwakarma Institute of Information Technology
              </p>
              
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Links Section */}
        <motion.div
          className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-orange-500 transition-all duration-500"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
          <div className="p-8 relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <motion.div
              className="p-4 bg-orange-500/20 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Image src={pc} alt="Links Icon" className="w-16 h-16" />
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-orange-400">Profile Links</h2>

            {/* Divider */}
            <div className="w-12 h-1 bg-orange-400 rounded-full"></div>

            {/* Links */}
            <motion.ul
              className="space-y-4 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[{ icon: <FaGithub size={20} />, url: "https://github.com/vaibhav-bhosale1", label: "Github" },
                { icon: <SiLeetcode size={20} />, url: "https://leetcode.com/u/vaibhav_bhosale_/", label: "Leetcode" },
                { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/vaibhav-bhosale-0a2b13259/", label: "LinkedIn" },
                { icon: <SiGeeksforgeeks size={20} />, url: "https://www.geeksforgeeks.org/user/vaibhavbhosale/", label: "GeeksforGeeks" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <span className="text-orange-300">{link.icon}</span>
                  <a
                    href={link.url}
                    className="hover:text-orange-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-orange-500 transition-all duration-500"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
          <div className="p-8 relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <motion.div
              className="p-4 bg-orange-500/20 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Image src={card} alt="About Icon" className="w-16 h-16" />
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-orange-400">About Me</h2>

            {/* Divider */}
            <div className="w-12 h-1 bg-orange-400 rounded-full"></div>

            {/* Content */}
            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             I'm Vaibhav Bhosale, a pre-final year student skilled in full-stack development and Data Structures & Algorithms. I specialize in building high-performance MERN stack applications, solving problems, writing clean code, and learning new technologies to deliver impactful solutions.
            </motion.p>
          </div>
        </motion.div>

        {/* Internship Section */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden col-span-1 sm:col-span-2 lg:col-span-3 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500 animate__animated animate__fadeIn">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="p-6 relative z-10">
            <Image
              src={finance}
              alt="Internship Experience"
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h2 className="text-2xl font-bold text-center text-orange-400 mb-4">
              Internship Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 p-4 rounded-lg w-11/12 mx-auto md:w-3/4">
                <h3 className="text-lg font-bold text-orange-300">Bluestock Fintech</h3>
                <p className="text-sm text-gray-300">June 2023 - July 2023</p>
                <ul className="list-disc ml-4">
                  <li>
                    Developed dynamic and responsive web pages using HTML, CSS,
                    JavaScript, and Bootstrap, designed and executed visually stunning
                    and highly functional user interfaces, leading to an increase in
                    user engagement.
                  </li>
                  <li>
                    Led the effort to roll out 4 new customer-centric features in
                    collaboration with product and engineering teams, ensuring smooth
                    integration with backend systems, contributing to a 30% increase in
                    user engagement metrics.
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 p-4 rounded-lg w-11/12 mx-auto md:w-3/4">
                <h3 className="text-lg font-bold text-orange-300">Suvidha Foundation</h3>
                <p className="text-sm text-gray-300">May 2022 - July 2022</p>
                <ul className="list-disc ml-4">
                  <li>
                    Designed and implemented the frontend using React and TailwindCSS,
                    providing flexibility in building user interfaces to create
                    responsive and visually appealing web applications.
                  </li>
                  <li>
                    Ensured seamless communication between frontend and backend systems
                    by implementing RESTful APIs in Node.js, creating 10+ endpoints,
                    parsing data efficiently, and optimizing client-server interaction,
                    resulting in a 15% decrease in data processing time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

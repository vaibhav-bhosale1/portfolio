// ...existing imports...
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLink, FaCode, FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

type SectionHeaderProps = {
  title: string;
  highlight: string;
  description?: string;
};

// Reusable Section Header Component
const SectionHeader = ({ title, highlight, description }: SectionHeaderProps) => (
  <motion.div
    className="text-center mb-20 relative z-20"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-400 mb-4 tracking-tight" style={{ textShadow: '0px 0px 15px rgba(255, 165, 0, 0.4)' }}>
      {title} <span className="text-orange-500">{highlight}</span>
    </h2>
    {description && (
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
        {description}
      </p>
    )}
    <div className="w-28 h-2 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full mt-6 shadow-lg"></div>
  </motion.div>
);

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 text-white overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black" id="about">
      {/* Dynamic Background Elements (Blobs) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-screen-xl mx-auto z-10 relative py-16">
        <SectionHeader
          title="About"
          highlight="Me"
          description="Discover my journey, expertise, and how I transform ideas into impactful digital solutions."
        />

        {/* Central About Me Hero Section */}
       <motion.div
  className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-orange-400/40 rounded-2xl p-8 md:p-12 mb-16 shadow-lg flex flex-col items-center transition-all duration-300 hover:border-orange-400/80"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  {/* Avatar */}
  
  <h3 className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-3 tracking-tight text-center" style={{ textShadow: '0px 0px 8px rgba(255,165,0,0.5)' }}>
    Hi, I'm Vaibhav Bhosale!
  </h3>
  <p className="text-base md:text-lg text-gray-300 text-center max-w-2xl leading-relaxed">
    Final year <span className="font-semibold text-orange-300">B.Tech</span> student passionate about <span className="font-semibold text-orange-300">full-stack development</span> and <span className="font-semibold text-orange-300">DSA</span>. I love building <span className="font-semibold text-orange-300">MERN stack</span> apps and turning complex ideas into elegant, scalable solutions. Always learning, always building!
  </p>
</motion.div>

        {/* Dynamic Information Pods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {/* Education Pod */}
          <motion.div
            className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 md:p-10 shadow-xl border border-orange-400/30 hover:border-orange-500 transition-all duration-500 overflow-hidden backdrop-blur-lg hover:scale-105 hover:shadow-orange-500/30"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -top-8 -right-8 text-orange-900/30 transition-colors duration-500 group-hover:text-orange-500/50"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <FaGraduationCap size={120} />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-orange-400 mb-4 flex items-center">
                <FaGraduationCap className="mr-3 text-orange-500" /> Education
              </h3>
              <p className="text-lg text-gray-200">
                <span className="font-semibold">B.Tech in Electronics and Telecommunication</span>
              </p>
              <p className="text-md text-gray-400">
                Vishwakarma Institute of Information Technology
              </p>
              <p className="text-sm text-gray-500 mt-2">(2022 - 2026)</p>
            </div>
          </motion.div>

          {/* Divider for large screens */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-1 h-40 bg-gradient-to-b from-orange-500/30 to-orange-400/10 rounded-full"></div>
          </div>

          {/* Core Expertise Pod */}
          <motion.div
            className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 md:p-10 shadow-xl border border-orange-400/30 hover:border-orange-500 transition-all duration-500 overflow-hidden backdrop-blur-lg hover:scale-105 hover:shadow-orange-500/30"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -bottom-8 -left-8 text-orange-900/30 transition-colors duration-500 group-hover:text-orange-500/50"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: -360 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <FaCode size={120} />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-orange-400 mb-4 flex items-center">
                <FaCode className="mr-3 text-orange-500" /> Expertise
              </h3>
              <div className="flex flex-wrap gap-3 text-gray-200 justify-center">
                {['MERN Stack', 'Full-stack Dev', 'Data Structures', 'Algorithms', 'Problem Solving', 'Devops', 'Scalable Apps'].map((skill, idx) => (
                  <span key={idx} className="bg-gray-700/60 text-sm py-1 px-3 rounded-full border border-orange-400/30 hover:bg-orange-700/50 hover:border-orange-500 transition-colors duration-300 cursor-pointer shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Divider for large screens */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-1 h-40 bg-gradient-to-b from-orange-500/30 to-orange-400/10 rounded-full"></div>
          </div>

          {/* Profile Links Pod */}
          <motion.div
            className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 md:p-10 shadow-xl border border-orange-400/30 hover:border-orange-500 transition-all duration-500 overflow-hidden backdrop-blur-lg hover:scale-105 hover:shadow-orange-500/30"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -top-8 -right-8 text-orange-900/30 transition-colors duration-500 group-hover:text-orange-500/50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <FaLink size={120} />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-orange-400 mb-4 flex items-center">
                <FaLink className="mr-3 text-orange-500" /> Connect
              </h3>
              <div className="flex flex-col space-y-4">
                {[
                  { icon: <FaGithub size={30} />, url: "https://github.com/vaibhav-bhosale1", label: "Github" },
                  { icon: <SiLeetcode size={30} />, url: "https://leetcode.com/u/vaibhav_bhosale_/", label: "Leetcode" },
                  { icon: <FaLinkedin size={30} />, url: "https://www.linkedin.com/in/vaibhav-bhosale-0a2b13259/", label: "LinkedIn" },
                  { icon: <SiGeeksforgeeks size={30} />, url: "https://www.geeksforgeeks.org/user/vaibhavbhosale/", label: "GeeksforGeeks" },
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800/60 p-3 rounded-xl hover:bg-orange-800/60 transition-all duration-300 group-hover:scale-[1.02] transform group-hover:translate-x-2 border border-orange-400/20 hover:border-orange-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-orange-300 mr-4 flex-shrink-0">{link.icon}</span>
                    <span className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Experience Section - The Journey Timeline */}
        <motion.div
          className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-16 border border-orange-400/30 overflow-hidden mt-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center text-orange-400 mb-12">
            Professional <span className="text-white">Journey</span>
          </h3>
          <div className="relative pl-6 md:pl-12 space-y-16 before:absolute before:top-0 before:left-2 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-orange-500/60 before:to-orange-400/10 before:rounded-full">
            {/* Timeline Item */}
            <motion.div
              className="relative bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg border-t-2 border-orange-600 group"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute -left-8 top-8 w-8 h-8 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FaBriefcase />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-orange-300 mb-1">Indian Air Force (9BRD)</h4>
              <p className="text-sm text-gray-400 mb-4">Jan 2025 - June 2025</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-300 text-base leading-relaxed">
                <li>Developed a React-based interface to display real-time thermal and visual inspection results, integrating AI model predictions (KNN, SVM, Autoencoder) via REST APIs to dynamically render defect overlays across 20+ PCB samples.</li>
                <li>Deployed the frontend on Jetson Nano & Raspberry Pi, integrating it with the inspection pipeline to enable faster defect validation and reduce manual inspection time by 30%.</li>
                <li>Implemented advanced state management and real-time image rendering in the React interface, enabling seamless overlay of AI-based defect results during live inspections.</li>
              </ul>
            </motion.div>
            {/* Timeline Item */}
            <motion.div
              className="relative bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg border-t-2 border-orange-600 group"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            >
              <div className="absolute -left-8 top-8 w-8 h-8 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-full flex items-center justify-center text-white text-xl font-bold border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <FaBriefcase />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-orange-300 mb-1">Bluestock Fintech</h4>
              <p className="text-sm text-gray-400 mb-4">June 2024 - July 2024</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-300 text-base leading-relaxed">
                <li>Developed dynamic and responsive web pages using HTML, CSS, JavaScript, and Bootstrap, designed and executed visually stunning and highly functional user interfaces, leading to an increase in user engagement.</li>
                <li>Led the effort to roll out 4 new customer-centric features in collaboration with product and engineering teams, ensuring smooth integration with backend systems, contributing to a 30% increase in user engagement metrics.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
// ...existing code...
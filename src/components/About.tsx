"use client";
import Image from "next/image";
import React from "react";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-black text-white" id="about">
      {/* Main Heading */}
      <h1 className="text-center text-4xl md:text-6xl font-bold mb-10">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Education Section */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500 animate__animated animate__fadeIn">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="p-6 relative z-10 flex flex-col items-center">
            <Image src={book} alt="Education" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-orange-400 mb-2">Education</h2>
            <p className="text-center">B.Tech in Electronics and Telecommunication</p>
            <p className="text-center">Vishwakarma Institute of Information Technology</p>
            <p className="text-center font-semibold">CGPA: 7.75</p>
          </div>
        </div>

        {/* Profile Links Section */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500 animate__animated animate__fadeIn">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="p-6 relative z-10 flex flex-col items-center">
            <Image src={pc} alt="Links" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-orange-400 mb-2">Profile Links</h2>
            <ul className="text-center space-y-2">
              <li className="flex items-center justify-center gap-3">
                <FaGithub size={20} className="text-orange-300" />
                <a
                  href="https://github.com/vaibhavbhosale1"
                  className="hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <SiLeetcode size={20} className="text-orange-300" />
                <a
                  href="https://leetcode.com/u/vaibhav_bhosale_/"
                  className="hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leetcode
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <FaLinkedin size={20} className="text-orange-300" />
                <a
                  href="https://www.linkedin.com/in/vaibhav-bhosale-0a2b13259/"
                  className="hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <SiGeeksforgeeks size={20} className="text-orange-300" />
                <a
                  href="https://www.geeksforgeeks.org/user/vaibhavbhosale/"
                  className="hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GeeksforGeeks
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500 animate__animated animate__fadeIn">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="p-6 relative z-10 flex flex-col items-center">
            <Image src={card} alt="About" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-orange-400 mb-2">About Me</h2>
            <p className="text-center">
              I am a BTech student in Electronics and Telecommunication at VIIT Pune with expertise in web development and software engineering. I have experience in React, Node.js, and Next.js, gained through internships at Bluestock Fintech and Suvidha Foundation, where I developed responsive interfaces and efficient backend integrations.
            </p>
          </div>
        </div>

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

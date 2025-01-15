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
    <div className="max-w-screen-xl mx-auto p-6" id="about">
      {/* Main Heading */}
      <h1 className="text-center text-4xl md:text-6xl font-bold text-white mb-10">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Education Section */}
        <div className="relative bg-gradient-to-b from-purple-700 via-orange-500 to-orange-600 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="p-6 relative z-10 flex flex-col items-center">
            <Image src={book} alt="Education" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
            <p className="text-center text-white">
              B.Tech in Electronics and Telecommunication
            </p>
            <p className="text-center text-white">
              Vishwakarma Institute of Information Technology
            </p>
            <p className="text-center text-white font-semibold">CGPA: 7.75</p>
          </div>
        </div>

        {/* Profile Links Section */}
        <div className="relative bg-gradient-to-b from-purple-700 via-orange-500 to-purple-600 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="p-6 relative z-10 flex flex-col items-center">
            <Image src={pc} alt="Links" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Profile Links</h2>
            <ul className="text-center text-white space-y-2">
              <li className="flex items-center justify-center gap-3">
                <FaGithub size={20} className="text-orange-300" />
                <a
                  href="https://github.com/vaibhavbhosale1"
                  className="hover:text-orange-500"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <SiLeetcode size={20} className="text-orange-300" />
                <a href="https://leetcode.com/u/vaibhav_bhosale_/" className="hover:text-orange-500">
                  Leetcode
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <FaLinkedin size={20} className="text-orange-300" />
                <a href="https://www.linkedin.com/in/vaibhav-bhosale-0a2b13259/" className="hover:text-orange-500">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <SiGeeksforgeeks size={20} className="text-orange-300" />
                <a href="https://www.geeksforgeeks.org/user/vaibhavbhosale/" className="hover:text-orange-500">
                  GeeksforGeeks
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div className="relative bg-gradient-to-b from-purple-700 via-orange-500 to-purple-600 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="p-6 relative z-10 flex flex-col items-center">
            <Image src={card} alt="About" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
            <p className="text-center text-white">
            I am a BTech student in Electronics and Telecommunication at VIIT Pune with expertise in web development and software engineering. I have experience in React, Node.js, and Next.js, gained through internships at Bluestock Fintech and Suvidha Foundation, where I developed responsive interfaces and efficient backend integrations.
            </p>
          </div>
        </div>

        {/* Internship Section */}
        <div className="relative bg-gradient-to-b from-purple-700 via-orange-500 to-orange-600 rounded-lg shadow-lg overflow-hidden col-span-2 lg:col-span-3">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="p-6 relative z-10">
            <Image src={finance} alt="Internship Experience" className="w-16 h-16 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Internship Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-orange-300">
                  Bluestock Fintech
                </h3>
                <p className="text-sm text-gray-300">June 2023 - July 2023</p>
                <p className="text-white">
                 
                  <li>Developed the dynamic and responsive web pages using HTML, CSS, JavaScript, and Bootstrap, designed and
                  executed visually stunning and highly functional user interfaces, leading to increase in user engagement.</li>
                  <li>
                  Led the effort to roll out 4 new customer-centric features in collaboration with product and engineering teams, ensured
                  smooth integration with backend systems, contributing to a 30% increase in user engagement metrics.
                  </li>
              
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-orange-300">
                  Suvidha Foundation
                </h3>
                <p className="text-sm text-gray-300">May 2022 - July 2022</p>
                <p className="text-white">
                 
                  <li> Responsible for designing and implementing the frontend using React and TaiwindCSS, flexibility in building user
                  interfaces and to create responsive and visually appealing web applications
                  </li>
                 
                 <li> Seamless communication between frontend and backend systems by implementing RESTful APIs in Node.js, creating
 10+ endpoints, parsing data efficiently, and optimizing client-server interaction, resulting in a 15% decrease in data
 processing time
                 </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

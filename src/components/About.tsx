"use client";
import Image from "next/image";
import React from "react";

import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { BsDot } from "react-icons/bs";


const About = () => {
  return (
    <div className="max-w-[1100px] mx-auto mt-10" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="px-6 md:px-0 grid md:grid-cols-8 gap-6 place-items-center">
        {/* Education Section */}
        <div className="w-full md:col-span-5 relative bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col md:flex-row p-6">
            {/* Hide image on mobile */}
            <Image
              src={book}
              alt="Education"
              className="hidden sm:block w-auto h-[130px] md:mr-4"
            />
            <div className="flex flex-col animate gradient-xy">
              <h2 className="text-2xl font-bold text-orange-500 underline">
                Education
              </h2>
              <p className="text-lg text-white">B.Tech in Electronic and Telecommunication</p>
              <p className="text-lg text-white">Vishwakarma Institute of Information Technology</p>
              <p className="text-lg text-white font-bold">CGPA: 7.75</p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col md:flex-row p-6">
            {/* Hide image on mobile */}
            <Image
              src={pc}
              alt="Links"
              className="hidden sm:block w-auto h-[130px] md:mr-4"
            />
            <div className="flex flex-col ">
            <h1 className="text-4xl text-orange-500">
                    Profile Links
                </h1>
           
            <div className="grid md:grid-cols-2 mt-3 relative left-10">
             
             <h2 className="text-xl font-bold text-white hover:text-orange-500 mb-4 cursor-pointer flex gap-4">
                Github
               <a href="https://github.com/vaibhavbhosale1" className="text-orange-300 cursor-pointer">
                 <FaGithub size={24} />
               </a>
             </h2>
             <h2 className="text-xl font-bold text-white flex gap-4 mb-4">
               Leetcode
               <a href="#" className="text-orange-300">
                 <SiLeetcode size={24} />
               </a>
             </h2>
             <h2 className="text-xl font-bold text-white flex gap-4 mb-4">
             Linkedin
               <a href="#" className="text-orange-300">
                 <FaLinkedin size={24} />
               </a>
             </h2>
             <h2 className="text-xl font-bold text-white flex gap-4 mb-4">
               GeeksforGeeks
               <a href="#" className="text-orange-300">
                 <SiGeeksforgeeks size={24} />
               </a>
             </h2>
           </div>
                
            </div>
             
          </div>
        </div>

        {/* About Section */}
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col md:flex-row p-6">
            <Image
              src={card}
              alt="About"
              className="hidden sm:block w-auto h-[130px] md:mr-4"
            />
            <div className="flex flex-col mt-4">
              <h2 className="text-3xl font-bold text-orange-500 underline">
                About
              </h2>
              <p className="text-lg text-white mt-1">
                I am a BTech student in Electronics and Telecommunication at VIIT Pune, with expertise in web development and software engineering. I have worked on impactful projects during internships at Bluestock Fintech and Suvidha Foundation, specializing in React, Node.js, and Next.js. I am skilled at creating responsive web interfaces and seamless backend integrations, and I actively contribute to technical communities as a proactive leader and team player.
              </p>
            </div>
          </div>
        </div>

        {/* Internship Experience Section */}
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col md:flex-row p-6">
            <Image
              src={finance}
              alt="Internship Experience"
              className="hidden sm:block w-auto h-[130px] md:mr-4"
            />
            <div className="flex flex-col mt-4">
              <section id="experience" className="py-7">
                <div className="container mx-auto px-5">
                  <h2 className="text-3xl font-bold text-cente mb-3 text-orange-500 underline">
                    Internship Experience
                  </h2>
                  <div className="">
                    <div className="shadow-md rounded-lg p-6">
                      <h3 className="text-2xl font-semibold text-orange-600">Bluestock Fintech</h3>
                      <p className="text-gray-300 text-sm">Duration: June 2023 - July 2023</p>
                      <p className="mt-2 text-gray-200">
                        Developed a robust FinTech dashboard using React and TailwindCSS, enhancing user experience through responsive web interfaces. Integrated APIs for dynamic data visualization and implemented optimized backend workflows.
                      </p>
                    </div>
                    <div className="shadow-md rounded-lg p-6">
                      <h3 className="text-2xl font-semibold text-orange-600">Suvidha Foundation</h3>
                      <p className="text-gray-300 text-sm">Duration: May 2022 - July 2022</p>
                      <p className="mt-2 text-gray-300">
                        Led the development of a community portal for resource sharing using Next.js and Node.js. Improved system efficiency by implementing seamless backend APIs and database integrations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

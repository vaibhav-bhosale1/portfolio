"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center bg-black">
      <h1 className="text-2xl font-bold text-orange-400">
        Vaibhav Bhosale
      </h1>
      <div className="flex space-x-6 mt-4">
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/vaibhav-bhosale-0a2b13259/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <FaLinkedin size={24} />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/vaibhavbhosale1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ duration: 0.3 }}
        >
          <FaGithub size={24} />
        </motion.a>

        {/* Leetcode */}
        <motion.a
          href="https://leetcode.com/u/vaibhav_bhosale_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <SiLeetcode size={24} />
        </motion.a>

        {/* GeeksforGeeks */}
        <motion.a
          href="https://www.geeksforgeeks.org/user/vaibhavbhosale/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ duration: 0.3 }}
        >
          <SiGeeksforgeeks size={24} />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;

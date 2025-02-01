"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mt-12 py-8 text-white/70 border-t border-gray-700">
      {/* Footer Content */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-0 space-y-4 md:space-y-0">
        {/* Name */}
        <h1 className="text-2xl font-bold text-orange-400">Vaibhav Bhosale</h1>

        {/* Visitor Counter */}
        <div className="text-gray-400 flex flex-col items-center">
          <p>Total Visits:</p>
          <div id="sfcchw5nf152brx1ckrkkddwuwlys1a4kfs"></div>
          <script
            type="text/javascript"
            src="https://counter6.optistats.ovh/private/counter.js?c=chw5nf152brx1ckrkkddwuwlys1a4kfs&down=async"
            async
          ></script>
          <noscript>
            <a href="https://www.freecounterstat.com" title="free page counter">
              <img
                src="https://counter6.optistats.ovh/private/freecounterstat.php?c=chw5nf152brx1ckrkkddwuwlys1a4kfs"
                border="0"
                title="free page counter"
                alt="free page counter"
              />
            </a>
          </noscript>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
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
    </div>
  );
};

export default Footer;

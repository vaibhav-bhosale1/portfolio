"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const incrementKey = 'incrementedVisitorCount';
    
    const fetchCount = async () => {
      try {
        // Only increment if we haven't already in this browser session
        if (!sessionStorage.getItem(incrementKey)) {
          sessionStorage.setItem(incrementKey, 'true'); // Set flag immediately
          const response = await fetch('/api/visitor', {
            method: 'POST',
            cache: 'no-store'
          });
          const data = await response.json();
          setVisitorCount(data.count);
        } else {
          const response = await fetch('/api/visitor', {
            method: 'GET',
            cache: 'no-store'
          });
          const data = await response.json();
          setVisitorCount(data.count);
        }
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };
  
    fetchCount();
  }, []);
  

  return (
    <div className="mt-12 py-8 text-white/70 border-t border-gray-700">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-0 space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-orange-400">Vaibhav Bhosale</h1>
        <div className="text-gray-400 flex flex-col items-center">
          <p>Total Visits: {visitorCount ?? "Loading..."}</p>
        </div>
        {/* Social Links */}
        <div className="flex space-x-6">
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
          <motion.a
            href="https://github.com/vaibhav-bhosale1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub size={24} />
          </motion.a>
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
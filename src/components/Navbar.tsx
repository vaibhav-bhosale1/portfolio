"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "Projects", path: "#portfolio" },
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
];

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const toggleNav = () => {
    setnav(!nav);
  };
  const closeNav = () => {
    setnav(false);
  };
  const menuVariant = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="relative text-white">
      {/* Background Video */}
    

      {/* Navbar Content */}
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px] relative z-10">
        <ul className="flex flex-row p-4 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="text-white hover:text-orange-400">
                <p className="relative group">{link.title}</p>
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className="group">
              <h1 className="text-lg font-bold text-white cursor-pointer">
                Contact
              </h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded border-white/70 p-2 z-50 text-white"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariant}
        className="fixed left-0 top-0 w-full z-40 bg-black/90"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-white hover:text-orange-400"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;

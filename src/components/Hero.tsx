"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import me from "../../public/me.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden relative  text-white">
      {/* Enhanced Video Background */}
   

      {/* Content with Framer Motion */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center"
      >
        {/* Headline with Staggered Animation */}
        <motion.div variants={itemVariants} className="font-bold mt-40 sm:mt-10">
          <motion.h1 
            variants={itemVariants}
            className="text-[#98B4CE] text-3xl md:text-6xl lg:text-7xl"
          >
            Hi, I am
          </motion.h1>
          <motion.h1 
            variants={itemVariants}
            className="text-[#E48A57] text-4xl md:text-7xl lg:text-8xl break-words"
          >
            Vaibhav Bhosale
          </motion.h1>
        </motion.div>

        {/* Floating Icons with Enhanced Drag */}
        <AnimatePresence>
          <motion.div
            className="hidden md:block absolute -left-[140px] top-[250px]"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={cursor}
              height={150}
              width={150}
              alt="cursor"
              draggable="false"
            />
          </motion.div>

          <motion.div
            className="hidden md:block absolute -right-[140px] top-[50px]"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={lightning}
              height={120}
              width={120}
              alt="lightning"
              draggable="false"
            />
          </motion.div>
        </AnimatePresence>

        {/* Animated Typewriter */}
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={[
              "A Full Stack Developer",
              1200,
              "A Problem Solver",
              1200,
              "Turning Ideas into Reality with Code",
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.div>

        {/* Profile Image with Hover Effect */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={me}
            height={150}
            width={150}
            alt="profilepic"
            className="h-auto w-auto mx-auto rounded-full border-4 border-[#E48A57]"
          />
        </motion.div>

        {/* Animated Resume Button */}
        <motion.a
          variants={itemVariants}
          href="/Resume1.pdf"
          download="Vaibhav_Bhosale_Resume.pdf"
          className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 mb-7"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import me from "../../public/me.jpg"

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden relative bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      {/* Background Gradient */}
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      {/* Content */}
      <div className="relative text-center">
        {/* Headline */}
        <div className="font-bold mt-40 sm:mt-10">
  



          <h1 className="text-[#98B4CE] text-3xl md:text-6xl lg:text-7xl">Hi, I am</h1>
      

          
          <h1 className="text-[#E48A57] text-4xl md:text-7xl lg:text-8xl break-words">Vaibhav Bhosale</h1>
        </div>

        {/* Floating Icons */}
        <motion.div
          className="hidden md:block absolute -left-[140px] top-[250px]" // Positioned farther left and higher up
          drag
        >
          <Image
            src={cursor}
            height={150} // Increased size
            width={150}
            alt="cursor"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute -right-[140px] top-[50px]" // Positioned farther right and higher up
          drag
        >
          <Image
            src={lightning}
            height={120} // Increased size
            width={120}
            alt="lightning"
            draggable="false"
          />
        </motion.div>

        {/* Subtext */}
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A Full Stack Developer',
        1200, // wait 1s before replacing "Mice" with "Hamsters"
        'A problem solver',
        1200,
        'Turning Ideas into Reality with Code',
      
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />


        {/* Profile Image */}
        <Image
          src={me}
          height={150} // Increased size
          width={150}
          alt="profilepic"
          className="h-auto w-auto mx-auto"
        />

        {/* Download Resume Button */}
        <a
          href="/Resume1.pdf" // Replace this with the actual path to your resume
          download="Vaibhav_Bhosale_Resume.pdf" // Optional: Specify the downloaded file name
          className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 mb-7"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";

import React from "react";

const Hero = () => {
  return (
    <div className="p-24 overflow-clip relative bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 
      bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi I am</h1>
          <h1 className="text-[#E48A57]">Vaibhav Bhosale</h1>
        </div>

        <motion.div className="hidden md:block absolute left-[140px] top-[170px]" drag>
          <Image
            src={cursor}
            height={190}
            width={190}
            alt="img"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div className="hidden md:block absolute right-[80px] top-[20px]" drag>
          <Image
            src={lightning}
            height={130}
            width={130}
            alt="img"
            className=""
            draggable="false"
          />
        </motion.div>
   
      <p className="text-center text-xl max-w-[500px] mx-auto mt-0 text-white/80">
        I am a Full-stack developer,a problem solver
      </p>
      <Image src={profilepic}
      alt="profilepic"
      className="h-auto w-auto mx-auto"
      />

    </div>
    </div>
  );
};

export default Hero;

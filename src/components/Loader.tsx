"use client";
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black">
      {/* Animated Text Loading Effect */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold text-white"
      >
        {Array.from("Vaibhav Bhosale").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08, // Smoother, staggered animation
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subscript for "Loading" */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-sm text-gray-400 mt-2"
      >
        Loading Portfolio...
      </motion.p>
    </div>
  );
};

export default Loader;

"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete(); // Call function to indicate loading is done
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#030303] z-50">
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
              delay: index * 0.08,
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

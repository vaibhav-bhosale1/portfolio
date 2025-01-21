"use client";
import React, { useState, useEffect } from "react";
import { quantum } from "ldrs";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Register the quantum loader
quantum.register();

export default function Home() {
  const [loading, setLoading] = useState(true); // State to manage the loading state

  useEffect(() => {
    // Simulate loading duration
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust timing as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {loading ? (
        // Loader display while loading is true
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f9f9f9", // Optional background color
          }}
        >
          <l-quantum size="70" speed="1.75" color="black"></l-quantum>
        </div>
      ) : (
        // Main content display after loading is complete
        <>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

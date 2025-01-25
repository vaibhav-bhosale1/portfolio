"use client"
import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Themain from "@/components/Themain";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleLoadComplete = () => {
    setIsLoading(false);
    
    // Reveal animation for main content
    if (mainContentRef.current) {
      const mainContent = mainContentRef.current;
      
      // Staggered reveal with scale and opacity
      gsap.fromTo(
        mainContent.children, 
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        }
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader onLoadComplete={handleLoadComplete} />
      ) : (
        <div ref={mainContentRef}>
 
          <Themain />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic"; 
import { gsap } from "gsap";

// Ensure Lottie runs only on client
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import runningManAnimation from "../../public/running-man.json";

const Loader: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isClient, setIsClient] = useState(false); // Ensure it runs only in the browser

  useEffect(() => {
    setIsClient(true); // Prevents SSR execution

    if (typeof window !== "undefined") {
      const loader = loaderRef.current;
      const animation = animationRef.current;
      const text = textRef.current;

      if (loader && animation && text) {
        const timeline = gsap.timeline({
          defaults: { ease: "power2.out" },
          onComplete: () => onLoadComplete(),
        });

        timeline
          .fromTo(animation, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 })
          .fromTo(text, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
          .to(animation, { opacity: 0, scale: 1.1, duration: 0.6, ease: "power2.in" }, "+=1")
          .to(text, { opacity: 0, duration: 0.4, ease: "power2.in" }, "-=0.5")
          .to(loader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              if (loader) loader.style.display = "none";
            },
          }, "-=0.2");
      }
    }
  }, [onLoadComplete]);

  if (!isClient) return null; // Ensures it runs only in the browser

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black flex flex-col justify-center items-center z-[9999] transition-all duration-700"
    >
      <div ref={animationRef} className="w-82 h-82 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
        <Lottie animationData={runningManAnimation} loop autoplay />
      </div>
      <span ref={textRef} className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
        WELCOME TO VAIBHAV BHOSALE'S PORTFOLIO
      </span>
    </div>
  );
};

export default Loader;

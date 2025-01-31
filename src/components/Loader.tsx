"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const counter = counterRef.current;
    const topBar = topBarRef.current;
    const bottomBar = bottomBarRef.current;

    if (loader && counter && topBar && bottomBar) {
      const tl = gsap.timeline({
        onComplete: () => {
          onLoadComplete();
        }
      });

      // Counter animation
      tl.fromTo(counter, 
        { 
          textContent: 0,
          color: '#ff0000',
          textShadow: '0 0 1px #ff0000',
          scale: 0.8,
          opacity: 0
        },
        {
          textContent: 100,
          duration: 4,
          roundProps: "textContent",
          ease: "power3.inOut",
          color: '#ff0000',
         
          scale: 1,
          opacity: 1
        }
      )
      // Hyper-smooth bar reveal
      .to(topBar, {
        scaleY: 0,
        duration: 1.5,
        ease: "power4.inOut",
        transformOrigin: "top center"
      }, "+=0.3")
      .to(bottomBar, {
        scaleY: 0,
        duration: 1.5,
        ease: "power4.inOut",
        transformOrigin: "bottom center"
      }, "-=1.2")
      .to(loader, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
      });
    }
  }, [onLoadComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 bg-black z-[9999] flex flex-col justify-center items-center"
    >
      {/* Reveal bars with scale transformation */}
      <div 
        ref={topBarRef} 
        className="absolute top-0 w-full bg-yellow-500 h-1/2 origin-top"
      />
      <div 
        ref={bottomBarRef} 
        className="absolute bottom-0 w-full bg-blue-300 h-1/2 origin-bottom"
      />

      {/* Counter */}
      <div 
        ref={counterRef} 
        className="text-9xl font-bold tracking-wider uppercase "
        style={{ 
          
          background: 'linear-gradient(45deg, #ff0000, ##ff0000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        0
      </div>
      <div className="text-2xl mt-4 text-white tracking-widest uppercase">
        Loading Vaibhav Bhosale's Portfolio
      </div>
    </div>
  );
};

export default Loader;

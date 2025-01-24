"use client"
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Themain = () => {
  return (
    <div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="vaporwave-background.mp4" type="video/mp4" />
        </video>
      </div>
        <Navbar/>
        <Hero/>
      
    </div>
  )
}

export default Themain

import React from 'react';
import { motion } from 'framer-motion';
import logo1 from './dv.svg'; // Adjust the path to your logo image
import logo2 from './os.svg'; // Adjust the path to your logo image
import bckHero from './bck.jpg'; // Import the background image

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white">
      {/* Overlay with blur and dark bluish filter */}
      <div className="absolute inset-0 bg-blue-900 opacity-50 backdrop-blur-md"></div>

      {/* Background Image */}
      <div 
        className="relative w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-red-500 to-indigo-600"
        style={{
          backgroundImage: `url(${bckHero})`, // Set the background image
          backgroundSize: 'cover', // Make the background cover the entire section
          backgroundPosition: 'center', // Center the background image
        }}
      >
        {/* Overlay logos in the center */}
        <div className="flex items-center justify-center mb-10 space-x-20">
          {/* Left Logo with fade in from the left */}
          <motion.img 
            src={logo1} 
            alt="Logo 1" 
            className="w-40 h-40 md:w-52 md:h-52 object-contain"
            initial={{ opacity: 0, x: -100 }}  // Start faded out and to the left
            animate={{ opacity: 1, x: 0 }}     // Animate to full opacity and original position
            transition={{ duration: 1 }}       // Set duration of the animation
          />
          
          {/* X symbol with bounce scale */}
          <motion.span 
            className="text-white font-extrabold text-6xl md:text-8xl"
            initial={{ scale: 0 }}              // Start at a scale of 0 (invisible)
            animate={{ scale: [1.2, 0.9, 1] }}  // Bounce effect (scaling up and then down to 1)
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}  // Animation duration and delay
          >
            X
          </motion.span>
          
          {/* Right Logo with fade in from the right */}
          <motion.img 
            src={logo2} 
            alt="Logo 2" 
            className="w-40 h-40 md:w-52 md:h-52 object-contain"
            initial={{ opacity: 0, x: 100 }}   // Start faded out and to the right
            animate={{ opacity: 1, x: 0 }}     // Animate to full opacity and original position
            transition={{ duration: 1 }}       // Set duration of the animation
          />
        </div>

        {/* Main text content */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}  // Initial state
          animate={{ opacity: 1, y: 0 }}    // Animate to full opacity
          transition={{ duration: 1 }}      // Animation duration
        >
          DataVerse & Open Source  Events
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-xl mt-4 xl:pl-20 xl:pr-20 ml-20 mr-20 text-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the synergy of innovation as Open Source Days collaborates with Dataverse. Together, we bring you an event that celebrates open-source technology and data management.
        </motion.p>
        

      </div>
    </section>
  );
}

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'; // For dynamic writing animation
import logo1 from './dv.svg'; // Adjust the path to your logo image
import logo2 from './os.svg'; // Adjust the path to your logo image
import bckHero from './bg.jpg'; // Import the background image

const Hero = () => {
  const scrollToNextSection = () => {
    // Smoothly scroll to the next section
    window.scrollTo({
      top: window.innerHeight, // Scroll by the viewport height
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white">
      {/* Overlay with blur and gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-blue-900 opacity-70 backdrop-blur-md"></div>

      {/* Background Image */}
      <div 
        className="relative w-full h-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bckHero})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay logos */}
        <div className="flex items-center justify-center mb-10 space-x-10 md:space-x-20">
          {/* Left Logo with animation */}
          <motion.img 
            src={logo1} 
            alt="Logo 1" 
            className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 object-contain"
            initial={{ opacity: 0, x: -150 }}  
            animate={{ opacity: 1, x: 0 }}     
            transition={{ duration: 1 }}       
          />
          
          {/* X symbol with bounce animation */}
          <motion.span 
            className="text-white font-extrabold text-4xl sm:text-6xl md:text-8xl"
            initial={{ scale: 0 }}             
            animate={{ scale: [1.2, 0.9, 1] }} 
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          >
            X
          </motion.span>
          
          {/* Right Logo with animation */}
          <motion.img 
            src={logo2} 
            alt="Logo 2" 
            className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 object-contain"
            initial={{ opacity: 0, x: 150 }}   
            animate={{ opacity: 1, x: 0 }}     
            transition={{ duration: 1 }}       
          />
        </div>

        {/* Main heading with typing effect */}
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}  
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 1 }}
        >
          <Typewriter
            options={{
              strings: [
                'DataVerse & Open Source Events',
                'Celebrating Innovation and Collaboration',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </motion.h1>
        
        {/* Description text with fade-in animation */}
        <motion.p 
          className="text-sm sm:text-lg md:text-xl mt-4 mx-6 sm:mx-16 md:mx-40 text-center leading-relaxed"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
        >
          Experience the synergy of innovation as Open Source Days collaborates with Dataverse. Together, we bring you an event that celebrates open-source technology and data management.
        </motion.p>

        {/* Scroll-down button */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={scrollToNextSection}
        >
          {/* Arrow animation */}
          <motion.div
            className="text-white text-2xl mb-2 animate-bounce"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
          <span className="text-white text-sm sm:text-md font-medium">
            Scroll Down
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

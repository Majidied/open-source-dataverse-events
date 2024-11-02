import { motion } from 'framer-motion';
import logo1 from './dv.svg'; // Adjust the path to your logo image
import logo2 from './os.svg'; // Adjust the path to your logo image
import bckHero from './bck.jpg'; // Import the background image

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex flex-col justify-center items-center text-white p-4" // Added padding for better spacing
      style={{
        backgroundImage: `url(${bckHero})`, // Set the background image
        backgroundSize: 'cover', // Make the background cover the entire section
        backgroundPosition: 'center', // Center the background image
        backgroundAttachment: 'fixed', // Parallax effect for a more dynamic design
      }}
    >
      {/* Overlay with blur and dark bluish filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-transparent opacity-70 backdrop-blur-md"></div>

      {/* Background Image */}
      <div 
        className="relative w-full h-full flex flex-col justify-center items-center space-y-6 md:space-y-8 lg:space-y-10"
      >
        {/* Overlay logos in the center */}
        <div className="flex flex-wrap items-center justify-center mb-6 space-x-3 sm:space-x-5 md:space-x-10">
          {/* Left Logo with fade in from the left */}
          <motion.img 
            src={logo1} 
            alt="Logo 1" 
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-lg"
            initial={{ opacity: 0, x: -100 }}  // Start faded out and to the left
            animate={{ opacity: 1, x: 0 }}     // Animate to full opacity and original position
            transition={{ duration: 1 }}       // Set duration of the animation
          />
          
          {/* X symbol with bounce scale */}
          <motion.span 
            className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl drop-shadow-md"
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
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-lg"
            initial={{ opacity: 0, x: 100 }}   // Start faded out and to the right
            animate={{ opacity: 1, x: 0 }}     // Animate to full opacity and original position
            transition={{ duration: 1 }}       // Set duration of the animation
          />
        </div>

        {/* Main text content */}
        <motion.h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}  // Initial state
          animate={{ opacity: 1, y: 0 }}    // Animate to full opacity
          transition={{ duration: 1 }}      // Animation duration
        >
          DataVerse & Open Source Events
        </motion.h1>
        
        <motion.p 
          className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 px-4 md:px-8 lg:px-12 text-center max-w-3xl"
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
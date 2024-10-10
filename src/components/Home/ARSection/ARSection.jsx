import React, { useEffect, useState } from 'react';
import myImage from './pervar.svg'; // Adjust the path as needed
import bckar from './image.png'; // Background image

const ARSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation once the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id='ar-section' 
      className="relative min-h-screen text-white flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bckar})`, // Set the background image
        backgroundSize: 'cover', // Make the background cover the entire section
        backgroundPosition: 'center', // Center the background image
      }}
    >
      {/* Flex container for PC */}
      <div className="relative w-full h-full flex flex-col md:flex-row items-start justify-between px-8 md:px-16">
        {/* Left side - Text and Button */}
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Augmented Reality</h2>
          <p className="text-lg mb-20">Join us as we bridge innovative ideas and technology through two groundbreaking events. Experience networking, learning, and collaboration like never before.</p>
          <button className="bg-white text-blue-800 py-2 px-6 rounded-full font-semibold hover:bg-transparent hover:text-white border-2 transition duration-300">
            Try Now
          </button>
        </div>

        {/* Right side - Image with rise animation */}
        <div 
          className="md:w-1/2 relative flex justify-center items-end"
          style={{ height: '100%' }}
        >
          <img 
            src={myImage}  // Use the imported image here
            alt="Augmented Reality Experience"
            className={`relative transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ 
         // Set the width of the image
   // Ensure it fits within the height of the section
              height:'100%',
              zIndex: '2', 
              bottom: 0, // Position at the bottom of the section
 
              transform: 'translateY(50%)' // Center the image horizontally
            }} 
          />
        </div>
      </div>
    </section>
  );
}

export default ARSection;

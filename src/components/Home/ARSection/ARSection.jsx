import React, { useEffect, useState } from 'react';
import myImage from './vh.png'; // Adjust the path as needed

const ARSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation once the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id='ar-section' 
      className="relative min-h-screen  text-white flex items-center justify-center overflow-hidden"
    >
      {/* Flex container for PC */}
      <div className="relative w-full h-full flex flex-col md:flex-row items-start justify-between px-8 md:px-16">
        {/* Left side - Text and Button */}
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Augmented Reality</h2>
          <p className="text-lg mb-20">Join us as we bridge innovative ideas and technology through two groundbreaking events. Experience networking, learning, and collaboration like never before.</p>
          <button className="bg-white text-indigo-600 py-2 px-6 rounded-full font-semibold hover:bg-indigo-600 hover:text-white border-2 transition duration-300">
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
            className={`absolute bottom-0 transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ maxHeight: '80%', width: 'auto' }} // Adjust height to ensure it fits well
          />
        </div>
      </div>
    </section>
  );
}

export default ARSection;

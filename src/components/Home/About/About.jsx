import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has already occurred
  const sectionRef = useRef(null);

  // Using Intersection Observer to detect when the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) { // Check if it is visible and hasn't animated yet
          setIsInView(true);
          setHasAnimated(true); // Set to true so it won't animate again
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]); // Re-run effect if hasAnimated changes

  return (
    <section
    id='About'
    ref={sectionRef}
    className="relative h-3/4 flex flex-col justify-center m-20 items-center text-white"
    >
    {/* Flex container with flex-col to stack elements vertically */}
    <div className="h-full flex flex-col items-center justify-center space-y-8 px-10 text-center">
        {/* Heading with fade-in and slide-up effect */}
        <motion.h1
        className="text-lg md:text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }}  // Start out of view
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}  // Trigger when in view
        transition={{ duration: 1 }}     // Animation duration
        >
        about us
        </motion.h1>

        {/* Paragraph with fade-in and slide-up effect */}
        <motion.p
        className="text-l md:text-xl max-w-6xl px-10"
        initial={{ opacity: 0, y: 50 }}  // Start out of view
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}  // Trigger when in view
        transition={{ duration: 1, delay: 0.5 }}  // Animation with delay
        >
        Open Source Days began as a grassroots initiative aimed at fostering collaboration in the tech community. Over the years, it has evolved into a vibrant gathering that celebrates innovation and open-source contributions. Similarly, Dataverse emerged from a need for data sharing and collaboration, growing into a pivotal event that connects data enthusiasts and professionals.
        </motion.p>
    </div>
    </section>
  );
}

export default About;

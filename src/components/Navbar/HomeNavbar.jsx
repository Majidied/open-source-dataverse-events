import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useEffect, Children } from 'react';
import { delay, easeInOut, motion,AnimatePresence } from 'framer-motion';
import icone from "../../assets/icone.png"
const HomeNavbar = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    // Debugging: Check if event and ref are working
    console.log('Clicked element:', event.target);
    console.log('Menu Ref:', menuRef.current);

    // Check if the clicked target is outside of the menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      console.log('Clicked outside the menu');
      toggleMenu(false);   // Close the menu
    }
  };

  // Attach click event listener when component mounts
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    console.log("effect");
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
      console.log("remove"); 
    };
  }, [isOpen, toggleMenu]);


  const closeMenu = () => {
    toggleMenu(false); // Close the menu
  };
  
// Framer Motion variants for menu animations
const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easeInOut }
  },
  closed: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: easeInOut  }
  }
};

  return (
    <nav className="text-gray-300 absolute w-full z-10 top-0">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isOpen ? "bg-black bg-opacity-60 backdrop-blur-md items-center":"bg-transparent" } `}>
        <div className="flex items-center md:justify-center justify-between h-16"
        >
          <img src={icone} className={`${isOpen ? "text-white font-medium justify-start w-8" : "hidden"}`}/>
          <div className="flex items-center">
            
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:text-white hover:border-b-2 hover:border-b-red-500 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#planning" className="hover:text-white hover:border-b-2 hover:border-b-red-500 px-3 py-2 text-sm font-medium">Planning</a>
              <a href="#sponsors" className="hover:text-white hover:border-b-2 hover:border-b-red-500 px-3 py-2 text-sm font-medium">Sponsors</a>
              <a href="#guests" className="hover:text-white hover:border-b-2 hover:border-b-red-500 px-3 py-2 text-sm font-medium">Guests</a>
              <a href="#ar-section" className="hover:text-white hover:border-b-2 hover:border-b-red-500 px-3 py-2 text-sm font-medium">Augmented Reality</a>
              <Link to="/OpenSource" className="hover:text-white hover:border-b-2 hover:border-b-red-500 px-3 py-2 text-sm font-medium">Open Source</Link>
              <Link to="/DataVerse" className="hover:text-white hover:border-b-2 hover:border-b-red-500 px-3 py-2 text-sm font-medium">DataVerse</Link>
            </div>
            </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-red-500 hover:duration-300 mx-6 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div ref={menuRef} className="md:hidden bg-black bg-opacity-60 backdrop-blur-md text-white ease-in-out rounded-b-3xl "
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={menuVariants}>
        {/* Animation for open and close  */}
          <div className="flex flex-col items-start space-y-3 py-4">
            {/* Render mobile links */}
            <a onClick={closeMenu} href="#planning" className="hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 ">Planning</a>
            <a onClick={closeMenu} href="#sponsors" className="hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 ">Sponsors</a>
            <a onClick={closeMenu} href="#guests" className="hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 ">Guests</a>
            <a onClick={closeMenu} href="#ar-section" className="hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 ">Augmented Reality</a>
            <Link to="/OpenSource" className="hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 ">Open Source</Link>
            <Link to="/DataVerse" className="hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 ">DataVerse</Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>   
        
  );
};

export default HomeNavbar;
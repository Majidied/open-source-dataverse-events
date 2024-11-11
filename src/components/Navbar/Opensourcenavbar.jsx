import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoOpen from "../../assets/lg1.png"
import { useRef, useEffect } from 'react';
import { delay, easeInOut, motion,AnimatePresence } from 'framer-motion';
const OpenSourceNavbar = ({ isOpen, toggleMenu }) => {
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
  // Close the menu
  const closeMenu = () => {
    toggleMenu(false); 
  };
  // function for navbar mobile animation
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
    <nav className="text-gray-500 fixed w-full z-10 top-0 shadow-md border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logoOpen} alt="img" className="h-48"/>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-red-600 hover:font-medium px-5 py-2 text-base font-normal">Home</Link>
              <a href="#historique" className="hover:text-red-600 hover:font-medium px-5 py-2 text-base font-normal">Historique</a>
              <a href="#team" className="hover:text-red-600 hover:font-medium px-5 py-2 text-base font-normal">Team</a>
              <a href="#sponsors" className="hover:text-red-600 hover:font-medium px-5 py-2 text-base font-normal">Sponsors</a>
              <Link to="/DataVerse" className="hover:text-red-600 hover:font-medium px-5 py-2 text-base font-normal">DataVerse</Link>
            </div>
            </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black mx-6">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div ref={menuRef} className=" md:hidden "
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}>
            {/* Animation on open and close */}
          <div className="px-2 pt-2 pb-3 flex-col flex items-center">
            {/* Render mobile links */}
            <Link to="/" className="text-gray-900 px-3 py-2">Home</Link>
            <a onClick={closeMenu} href="#historique" className="text-gray-900 px-3 py-2">Historique</a>
            <a onClick={closeMenu} href="#team" className="text-gray-900 px-3 py-2">Team</a>
            <a onClick={closeMenu} href="#sponsors" className="text-gray-900 px-3 py-2">Sponsors</a>
            <Link to="/DataVerse" className="text-gray-900 px-3 py-2">DataVerse</Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default OpenSourceNavbar;
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useEffect } from 'react';


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


  // Function to close menu if clicked outside
  

  return (
    <nav className="text-gray-300 absolute w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:justify-center justify-end h-16">
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
            <button onClick={toggleMenu} className="text-white mx-3">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div ref={menuRef} className={`fixed left-0 right-0 top-16 mx-4 rounded-xl md:hidden bg-white bg-opacity-90 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? 'translate-y-0 opacity-100 visible'
            : '-translate-y-10 opacity-0 invisible'
        }`}>
        
          <div className="px-2 pt-2 pb-3 flex-col flex items-center">
            {/* Render mobile links */}
            <a onClick={closeMenu} href="#planning" className="text-gray-600 px-3 py-2">Planning</a>
            <a onClick={closeMenu} href="#sponsors" className="text-gray-600 px-3 py-2">Sponsors</a>
            <a onClick={closeMenu} href="#guests" className="text-gray-600 px-3 py-2">Guests</a>
            <a onClick={closeMenu} href="#ar-section" className="text-gray-600 px-3 py-2">Augmented Reality</a>
            <Link to="/OpenSource" className="text-gray-600 px-3 py-2">Open Source</Link>
            <Link to="/DataVerse" className="text-gray-600 px-3 py-2">DataVerse</Link>
          </div>
        </div>
      )}
    </nav>   
        
  );
};

export default HomeNavbar;
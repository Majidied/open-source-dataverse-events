import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useEffect } from 'react';
const DataVerseNavbar = ({ isOpen, toggleMenu }) => {
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
  //close menu
  const closeMenu = () => {
    toggleMenu(false); 
  };
  return (
    <nav className="bg-blue-900 text-white fixed w-full z-10 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">DataVerse</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Define links for DataVerseNavbar */}
              <Link to="/" className="hover:text-red-500 px-3 py-2">Home</Link>
              <a href="#historique" className="hover:text-red-500 px-3 py-2">Historique</a>
              <a href="#team" className="hover:text-red-500 px-3 py-2">Team</a>
              <a href="#sponsors" className="hover:text-red-500 px-3 py-2">Sponsors</a>
              <Link to="/OpenSource" className="hover:text-red-500 px-3 py-2">Open Source</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white mx-6">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 flex-col flex items-center">
            {/* Render mobile links */}
            <Link to="/" className="text-gray-900 px-3 py-2">Home</Link>
            <a onClick={closeMenu} href="#historique" className="text-gray-900 px-3 py-2">Historique</a>
            <a onClick={closeMenu} href="#team" className="text-gray-900 px-3 py-2">Team</a>
            <a onClick={closeMenu} href="#sponsors" className="text-gray-900 px-3 py-2">Sponsors</a>
            <Link to="/OpenSource" className="text-gray-900 px-3 py-2">Open Source</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DataVerseNavbar;
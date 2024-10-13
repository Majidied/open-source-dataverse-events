import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Hook to get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to trigger sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Helper function to determine the links
  const renderLinks = () => {
    return (
      <>
        <a
          href="#"
          className="hover:underline hover:underline-offset-8 px-3 py-2 text-sm font-medium transition-all"
        >
          Home
        </a>
        <a
          href="#About"
          className="hover:underline hover:underline-offset-8 px-3 py-2 text-sm font-medium transition-all"
        >
          About Us
        </a>
        <a
          href="#team"
          className="hover:underline hover:underline-offset-8 px-3 py-2 text-sm font-medium transition-all"
        >
          Conférenciers
        </a>
        <a
          href="#JOHackathon"
          className="hover:underline hover:underline-offset-8 px-3 py-2 text-sm font-medium transition-all"
        >
          Hackathon
        </a>
        <a
          href="https://dataverse.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-8 px-3 py-2 text-sm font-medium transition-all"
        >
          Dataverse
        </a>
        <a
          href="https://opensource.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-8 px-3 py-2 text-sm font-medium transition-all"
        >
          Open Source
        </a>
      </>
    );
  };

  return (
    <nav
      className={`fixed w-full z-10 top-0 transition-all duration-300 ${
        isScrolled ? "bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Centered elements */}
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10">

            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {renderLinks()}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{renderLinks()}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

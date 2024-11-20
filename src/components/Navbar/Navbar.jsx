import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderLinks = () => (
    <>
      <a href="#planning" className="nav-link">
            Planning
          </a>
          <a href="#sponsors" className="nav-link">
            Sponsors
          </a>
          <a href="#guests" className="nav-link">
            Guests
          </a>
          <a href="https://open-source-days13.com" className="nav-link">
            Open Source
          </a>
          <a href="https://dataverse-three.vercel.app" className="nav-link">
            DataVerse
          </a>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-black to-red-900 text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-bold tracking-wide hover:text-indigo-400 transition-colors duration-300 ml-0"
            >
              ENSA Khouribga Events
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {renderLinks()}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-indigo-400 transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-2xl focus:outline-none hover:text-indigo-400 transition-colors duration-300"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col space-y-6">{renderLinks()}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import OpenSourceNavbar from "./Opensourcenavbar";
import DataVerseNavbar from "./DataVerseNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const path = location.pathname;

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              {location.pathname === "/"
                ? "Home"
                : location.pathname === "/DataVerse"
                ? "DataVerse"
                : "Open Source v13"}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-screen ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderLinks()}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

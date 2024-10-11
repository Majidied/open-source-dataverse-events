import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to determine which links to show
  const renderLinks = () => {
    const path = location.pathname;

    if (path === "/") {
      return (
        <>
          <a
            href="#"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#planning"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Planning
          </a>
          <a
            href="#sponsors"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Sponsors
          </a>
          <a
            href="#guests"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Guests
          </a>
          <a
            href="#ar-section"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Augmented Reality
          </a>
          <Link
            to="/OpenSource"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Open Source
          </Link>
          <Link
            to="/DataVerse"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            DataVerse
          </Link>
        </>
      );
    } else if (path === "/OpenSource") {
      return (
        <>
          <Link
            to="/"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <a href="#historique" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Historique
              </a>
              <a href="#team" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Team
              </a>
              <a href="#sponsors" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Sponsors
              </a>
          <Link
            to="/OpenSource"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Open Source
          </Link>
          <Link
            to="/DataVerse"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            DataVerse
          </Link>
        </>
      );
    } else if (path === "/DataVerse") {
      return (
        <>
          <Link
            to="/"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <a href="#historique" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Historique
              </a>
              <a href="#team" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Team
              </a>
              <a href="#sponsors" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Sponsors
              </a>
          <Link
            to="/OpenSource"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Open Source
          </Link>
          <Link
            to="/DataVerse"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            DataVerse
          </Link>
        </>
      );
    }
  };

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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderLinks()}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

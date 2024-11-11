import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
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
      <>
        {path === "/" && <HomeNavbar isOpen={isOpen} toggleMenu={toggleMenu} />}
        {path === "/OpenSource" && <OpenSourceNavbar isOpen={isOpen} toggleMenu={toggleMenu} />}
        {path === "/DataVerse" && <DataVerseNavbar isOpen={isOpen} toggleMenu={toggleMenu} />}
      </>
    );
  };
  
  export default Navbar;

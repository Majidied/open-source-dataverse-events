import React from "react";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa"; // Social media icons
import logo1 from "./dataversetxt.png"; // Adjust the path to your logo image
import logo2 from "./os.svg"; // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-r from-blue-900 via-black to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Column 1: Central Logos with X */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <img src={logo1} alt="Logo 1" className="w-24 h-24 object-contain" />
              <span className="text-white font-extrabold text-3xl">X</span>
              <img src={logo2} alt="Logo 2" className="w-24 h-24 object-contain" />
            </div>
            <p className="text-center text-sm">
              Collaboration between Dataverse v4.0 and Open Source Days v13.
            </p>
          </div>

          {/* Column 2: DataVerse Logo and Socials */}
          <div className="flex flex-col items-center space-y-4">
            <img src={logo1} alt="Dataverse Logo" className="w-20 h-20 object-contain" />
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/data.verse3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/dataverse1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <FaGoogle size={24} />
              </a>
            </div>
          </div>

          {/* Column 3: Open Source Logo and Socials */}
          <div className="flex flex-col items-center space-y-4">
            <img src={logo2} alt="Open Source Logo" className="w-20 h-20 object-contain" />
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/open_source_days_13.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/open-source-days-11-0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <FaGoogle size={24} />
              </a>
            </div>
          </div>

          {/* Column 4: Event Location */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <h3 className="font-bold text-lg">Event Location</h3>
            <p className="text-sm">
              École Nationale des Sciences Appliquées, BP 77 Bd Beni Amir, Khouribga 25000
            </p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="my-8 border-t border-gray-600"></div>

      {/* Footer Bottom Section */}
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dataverse v3.0 & Open Source Days v13. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

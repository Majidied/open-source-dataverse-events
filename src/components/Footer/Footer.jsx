import React from "react";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa"; // Import social media icons
import logo1 from "./dataversetxt.png"; // Adjust the path to your logo image
import logo2 from "./os.svg"; // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Column 1: Logos separated by "X" */}
          <div className="flex flex-col items-center w-full sm:w-auto justify-center text-center my-4 space-x-4">
            <div className="flex items-center justify-center space-x-4">
              <img
                src={logo1}
                alt="Logo 1"
                className="w-24 h-24 object-contain"
              />
              <span className="text-white font-extrabold text-2xl">X</span>
              <img
                src={logo2}
                alt="Logo 2"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          {/* Vertical line */}
          <div className="hidden md:block h-20 border-l border-gray-500 mx-4"></div>

          {/* Column 2: First logo with socials */}
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center space-y-2">
            <img
              src={logo1}
              alt="Logo"
              className="w-32 h-32 object-contain"
            />
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/data.verse3.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-4 h-4 hover:opacity-80" />
              </a>
              <a
                href="https://www.linkedin.com/company/dataverse1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-4 h-4 hover:opacity-80" />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle className="w-4 h-4 hover:opacity-80" />
              </a>
            </div>
          </div>

          {/* Column 3: Second logo with socials */}
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center space-y-2">
            <img
              src={logo2}
              alt="Logo"
              className="w-32 h-32 object-contain"
            />
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/open_source_days_13.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-4 h-4 hover:opacity-80" />
              </a>
              <a
                href="https://www.linkedin.com/company/open-source-days-11-0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-4 h-4 hover:opacity-80" />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle className="w-4 h-4 hover:opacity-80" />
              </a>
            </div>
          </div>

          {/* Column 4: Event location */}
          <div className="mb-4 w-full lg:w-1/4 flex flex-col items-center space-y-2">
            <h3 className="font-bold text-lg text-center">Event Location</h3>
            <p className="text-center">
              École Nationale des Sciences Appliquées, BP 77 Bd Beni Amir,
              Khouribga 25000
            </p>{" "}
            {/* Replace with actual address */}
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="text-center mt-4">
        <p>
          &copy; 2024 dataverse v4.0 & open source days v13. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

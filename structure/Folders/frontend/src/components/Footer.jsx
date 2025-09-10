import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Brand */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">NaariKavach</h2>
          <p className="text-sm text-gray-300">
            Empowering women with safety & support.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex space-x-6 text-sm">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/chatbot" className="hover:text-gray-300 transition">
            Chatbot
          </Link>
          <Link to="/sos" className="hover:text-gray-300 transition">
            SOS
          </Link>
        </div>

        {/* Right: Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-gray-300 text-center md:text-right">
          © {new Date().getFullYear()} NaariKavach. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white px-6 py-3 shadow-md flex justify-between items-center">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        NaariKavach
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-200 transition">
          Home
        </Link>
        <Link to="/chatbot" className="hover:text-gray-200 transition">
          Chatbot
        </Link>
        <Link to="/sos" className="hover:text-gray-200 transition">
          SOS
        </Link>
      </div>

      {/* CTA Button */}
      <Link
        to="/sos"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
      >
        Emergency SOS
      </Link>
    </nav>
  );
};

export default Navbar;

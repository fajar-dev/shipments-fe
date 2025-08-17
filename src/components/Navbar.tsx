import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="relative border-b border-gray-300 bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Nusanet" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

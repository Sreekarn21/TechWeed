"use client";

import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const openDropdown = () => {
    clearTimeout(closeTimeout);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Delay before closing
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md relative">
      {/* Logo / Brand Name */}
      <Link href="/">
        <span className="text-2xl font-bold cursor-pointer">TechWeed.com</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {/* Courses Dropdown */}
        <div 
          className="relative cursor-pointer" 
          onMouseEnter={openDropdown} 
          onMouseLeave={closeDropdown}
        >
          <div className="flex items-center space-x-2">
            <span>Courses</span>
            <FaChevronDown className="text-sm" />
          </div>
          {dropdownOpen && (
            <div 
              className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg"
              onMouseEnter={openDropdown} 
              onMouseLeave={closeDropdown}
            >
              <Link href="/fullstack" className="block px-4 py-2 hover:bg-gray-700">Full Stack Development</Link>
              <Link href="/datascience" className="block px-4 py-2 hover:bg-gray-700">Data Science</Link>
              <Link href="/ai" className="block px-4 py-2 hover:bg-gray-700">AI</Link>
              <Link href="/cybersecurity" className="block px-4 py-2 hover:bg-gray-700">Cybersecurity</Link>
            </div>
          )}
        </div>

        {/* Other Pages */}
        <Link href="/about-us" className="hover:text-gray-400">About Us</Link>
        <Link href="/careers" className="hover:text-gray-400">Careers</Link>
        <Link href="/contact-us" className="hover:text-gray-400">Contact Us</Link>

        {/* Register & Login */}
        <Link href="/register">
          <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">Register</button>
        </Link>
        <Link href="/login">
          <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-800">Login</button>
        </Link>

        {/* Social Media Icons */}
        <a href="https://www.linkedin.com/company/techweed-com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:text-blue-500" />
        </a>
        <a href="https://www.instagram.com/_techweed_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-pink-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

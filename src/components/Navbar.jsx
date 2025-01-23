'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Function to check if a link is active
  const isActive = (href) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md dark:bg-gray-900">
      <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.svg"
            className="h-20 cursor-pointer"
            alt="Logo"
          />
        </Link>

        {/* Hamburger menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-gray-500 rounded-lg md:hidden dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex items-center space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent shadow-lg md:shadow-none`}
        >
          <Link
            href="/"
            className={`block px-4 py-2 ${
              isActive('/')
                ? 'text-teal-600 dark:text-teal-400'
                : 'text-gray-900 dark:text-white hover:text-teal-600'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block px-4 py-2 ${
              isActive('/about')
                ? 'text-teal-600 dark:text-teal-400'
                : 'text-gray-900 dark:text-white hover:text-teal-600'
            }`}
          >
            About
          </Link>
          <Link
            href="/destinations"
            className={`block px-4 py-2 ${
              isActive('/contact')
                ? 'text-teal-600 dark:text-teal-400'
                : 'text-gray-900 dark:text-white hover:text-teal-600'
            }`}
          >
            Destinations
          </Link>
          <Link
            href="/packages"
            className={`block px-4 py-2 ${
              isActive('/contact')
                ? 'text-teal-600 dark:text-teal-400'
                : 'text-gray-900 dark:text-white hover:text-teal-600'
            }`}
          >
            Packages
          </Link>
          <Link
            href="/services"
            className={`block px-4 py-2 ${
              isActive('/services')
                ? 'text-teal-600 dark:text-teal-400'
                : 'text-gray-900 dark:text-white hover:text-teal-600'
            }`}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className={`block px-4 py-2 ${
              isActive('/gallery')
                ? 'text-teal-600 dark:text-teal-400'
                : 'text-gray-900 dark:text-white hover:text-teal-600'
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`block px-4 py-2 ${
              isActive('/contact')
                ? 'text-teal-600 dark:text-teal-400'
                : 'text-gray-900 dark:text-white hover:text-teal-600'
            }`}
          >
            Contact
          </Link>
        
          
        </div>

        {/* Get Quote and Book Now buttons */}
        <div className="items-center hidden space-x-4 md:flex">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-teal-900 rounded-none hover:bg-teal-800 focus:ring-4 focus:outline-none dark:bg-teal-700 dark:hover:bg-teal-800 dark:focus:ring-teal-900"
          >
            Get Quote
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-black bg-white border-2 border-black rounded-none hover:bg-gray-200 focus:ring-4 focus:outline-none dark:bg-teal-700 dark:hover:bg-teal-800 dark:focus:ring-teal-900"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
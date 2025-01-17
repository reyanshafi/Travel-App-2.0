'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ isHeroPage }) => {
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isHeroPage) {
      const handleScroll = () => {
        setIsTop(window.scrollY < 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isHeroPage]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isHeroPage && isTop ? 'bg-transparent' : 'bg-white dark:bg-gray-900'
      } shadow-md transition-colors duration-300`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/">
          <img
            src={isHeroPage && isTop ? "/images/logo-white.svg" : "/images/logo.svg"}
            className="h-12 cursor-pointer"
            alt="Logo"
          />
        </Link>

        {/* Menu button for small screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-500 md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
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
          } md:flex md:items-center md:space-x-8 absolute md:relative top-full left-0 w-full md:w-auto md:bg-transparent bg-white dark:bg-gray-900 md:dark:bg-transparent`}
        >
          <Link href="/" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-teal-600">
            Home
          </Link>
          <Link href="/about" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-teal-600">
            About
          </Link>
          <Link href="/services" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-teal-600">
            Services
          </Link>
          <Link href="/gallery" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-teal-600">
            Gallery
          </Link>
          <Link href="/contact" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-teal-600">
            Contact
          </Link>
          {/* Dropdowns */}
          <div className="relative group">
            <button className="block py-2 px-3 text-gray-900 dark:text-white hover:text-teal-600">
              Destinations
            </button>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg">
              <Link
                href="/destinations/kashmir"
                className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
              >
                Destinations in Kashmir
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="block py-2 px-3 text-gray-900 dark:text-white hover:text-teal-600">
              Packages
            </button>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg">
              <Link
                href="/packages/kashmir"
                className="block px-4 py-2 hover:bg-teal-500 hover:text-white"
              >
                Packages in Kashmir
              </Link>
            </div>
          </div>
        </div>

        {/* Get Quote button */}
        <button
          type="button"
          className="hidden md:block text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-teal-700 dark:hover:bg-teal-800 dark:focus:ring-teal-900"
        >
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

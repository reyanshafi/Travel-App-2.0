'use client';
import React, { useState } from 'react';
import TopBar from './TopBar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <>
      <TopBar />
      <nav className="fixed top-0 left-0 z-50 w-full mt-10 bg-white shadow-md dark:bg-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/logo.svg"
              className="h-20 cursor-pointer"
              alt="Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-4 md:flex">
            {/* Nav Links */}
            <div className="flex items-center space-x-4">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Destinations', '/destinations'],
                ['Packages', '/packages'],
                ['Services', '/services'],
                // ['Gallery', '/gallery'],
                ['Contact', '/contact'],
              ].map(([title, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 text-sm ${
                    isActive(href)
                      ? 'text-blue-900 dark:text-orange-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-orange-400'
                  }`}
                >
                  {title}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="flex items-center ml-4 space-x-3">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-none hover:bg-orange-700"
              >
                Get Quote
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-blue-900 bg-white border-2 border-blue-900 rounded-none hover:bg-gray-100"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-500 rounded-lg md:hidden dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
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

          {/* Mobile Sidebar */}
          <div
            className={`fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden z-50`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col p-4 space-y-4">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Destinations', '/destinations'],
                ['Packages', '/packages'],
                ['Services', '/services'],
                // ['Gallery', '/gallery'],
                ['Contact', '/contact'],
              ].map(([title, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 ${
                    isActive(href)
                      ? 'text-blue-900 dark:text-orange-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-orange-400'
                  }`}
                >
                  {title}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  className="w-full px-4 py-2 mb-3 text-sm font-medium text-white bg-blue-900 hover:bg-blue-800"
                >
                  Get Quote
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium text-blue-900 border-2 border-blue-900 hover:bg-gray-100"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
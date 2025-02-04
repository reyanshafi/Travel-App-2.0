'use client';
import React, { useState } from 'react';
import TopBar from './TopBar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';

const NAV_LINKS = [
  ['Home', '/'],
  ['About', '/about'],
  ['Destinations', '/destinations'],
  ['Packages', '/packages'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const renderNavLinks = (mobile = false) =>
    NAV_LINKS.map(([title, href]) => (
      <Link
        key={href}
        href={href}
        onClick={() => mobile && setMenuOpen(false)}
        className={clsx(
          'px-3 py-2 text-sm transition-colors',
          isActive(href)
            ? 'text-blue-900 font-semibold'
            : 'text-gray-700 hover:text-blue-900',
          mobile && 'text-base'
        )}
      >
        {title}
      </Link>
    ));

  const renderButtons = (mobile = false) => (
    <>
      <button
        type="button"
        onClick={() => window.open('https://wa.me/917006297432', '_blank')}
        className={clsx(
          'font-medium text-white bg-orange-600 hover:bg-orange-700 transition-colors',
          mobile ? 'block w-full px-4 py-3 text-base' : 'px-4 py-2 text-sm'
        )}
      >
        Get Quote
      </button>
      <Link
        href="/packages"
        className={clsx(
          'font-medium text-blue-900 border-2 border-blue-900 hover:bg-gray-100 transition-colors',
          mobile ? 'block w-full px-4 py-3 text-center text-base' : 'px-4 py-2 text-sm'
        )}
      >
        Book Now
      </Link>
    </>
  );

  return (
    <>
      <TopBar />
      <nav className="fixed top-0 left-0 z-50 w-full mt-10 bg-white shadow-md">
        <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link href="/" aria-label="Home" className="relative w-40 h-20">
            <Image
              src="/images/logo.svg"
              alt="Company Logo"
              priority
              fill
              sizes="(max-width: 768px) 100px, 160px"
              className="object-contain cursor-pointer"
            />
          </Link>

          <div className="items-center hidden gap-4 md:flex">
            <div className="flex items-center space-x-4">{renderNavLinks()}</div>
            <div className="flex items-center ml-4 space-x-3">{renderButtons()}</div>
          </div>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div
            className={clsx(
              'fixed right-0 top-0 h-full w-64 bg-white shadow-xl',
              'transform transition-transform duration-300 ease-in-out md:hidden z-50',
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="flex justify-end p-4">
              <button
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
                className="p-2 text-gray-500 rounded-lg hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col p-4 space-y-4">
              {renderNavLinks(true)}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="flex flex-col gap-3">
                  {renderButtons(true)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
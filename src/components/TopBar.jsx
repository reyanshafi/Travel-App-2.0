'use client';
import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#114B5F] text-teal-200 py-2 shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2 text-sm md:flex-row md:space-y-0 md:space-x-10">
          {/* Phone Number */}
          <div className="flex items-center space-x-2">
            <FaPhone className="text-white" />
            <a href="tel:+91194548250" className="transition-colors hover:text-gray-300">
              +91 194 2458250
            </a>
          </div>

          {/* WhatsApp Number */}
          <div className="flex items-center space-x-2">
            <FaWhatsapp className="text-white" />
            <a
              href="https://wa.me/917006297432"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-300"
            >
              +91 700 629 7432
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white" />
            <a
              href="mailto:suwidatourandtravels@gmail.com"
              className="transition-colors hover:text-gray-300"
            >
              suwidatourandtravels@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
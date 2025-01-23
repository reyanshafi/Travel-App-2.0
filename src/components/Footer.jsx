'use client';
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-white bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logofooter.svg" // Update with your logo path
              alt="SUWIDA Tour and Travels Logo"
              width={200}
              height={100}
              className="mb-4"
            />
            <p className="text-sm text-center text-gray-400 md:text-left">
              Your trusted partner for exploring the breathtaking beauty of Kashmir. We specialize in creating unforgettable travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/packages" className="text-gray-400 transition hover:text-teal-400">
                  Travel Packages
                </a>
              </li>
              <li>
                <a href="/destinations" className="text-gray-400 transition hover:text-teal-400">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 transition hover:text-teal-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 transition hover:text-teal-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 transition hover:text-teal-400">
                  Travel Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-teal-400">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-teal-400" size={18} />
                <p>Landmark Hotel Hilal Palace, Khan Khan Dalgate, Srinagar, Jammu & Kashmir, 190001</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="mt-1 text-teal-400" size={18} />
                <p>
                  <a href="tel:+91194548250" className="transition hover:text-teal-400">
                    +91 194 2458250
                  </a>
                  ,{' '}
                  <a href="tel:+917006297432" className="transition hover:text-teal-400">
                    +91 700 629 7432
                  </a>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FaWhatsapp className="mt-1 text-teal-400" size={18} />
                <p>
                  <a
                    href="https://wa.me/917006297432"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-teal-400"
                  >
                    +91 700 629 7432
                  </a>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="mt-1 text-teal-400" size={18} />
                <p>
                  <a
                    href="mailto:suwidatourandtravels@gmail.com"
                    className="transition hover:text-teal-400"
                  >
                    suwidatourandtravels@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-teal-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-teal-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-teal-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-teal-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/917006297432"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-teal-400"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Go to Top Button */}
        <div className="flex flex-col items-center pt-8 mt-12 border-t border-gray-800 md:flex-row md:justify-between md:items-center">
          <p className="text-sm text-center text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} SUWIDA Tour and Travels. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="px-6 py-2 mt-4 text-white transition bg-teal-600 rounded-md md:mt-0 hover:bg-teal-500"
          >
            Go to Top
          </button>
        </div>
        <div>Developed by <a href='https://www.linkedin.com/in/reyanshafi/' className='text-green-600'>Reyan Shafi </a></div>
      </div>
    </footer>
  );
};

export default Footer;
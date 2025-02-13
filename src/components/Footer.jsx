'use client';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-white bg-gray-900 border-t border-gray-700 md:px-20">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="max-w-xs">
              <h2 className="mb-4 text-2xl font-bold text-orange-500">SUWIDA Tour and Travels</h2>
              <p className="text-sm leading-relaxed text-gray-400">
                Crafting unforgettable experiences in the heart of Kashmir. Premium tour services with personalized itineraries.
              </p>
              {/* Social Links Integrated */}
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold text-gray-200">CONNECT WITH US</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" className="text-gray-400 transition-colors hover:text-orange-400">
                    <FaFacebook size={20} />
                  </a>
                  <a href="https://instagram.com" className="text-gray-400 transition-colors hover:text-orange-400">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://wa.me/917006297432" className="text-gray-400 transition-colors hover:text-orange-400">
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-gray-200">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-sm text-gray-400 transition-colors hover:text-orange-400">About Us</a>
              </li>
              <li>
                <a href="/packages" className="text-sm text-gray-400 transition-colors hover:text-orange-400">Tour Packages</a>
              </li>
              <li>
                <a href="/services" className="text-sm text-gray-400 transition-colors hover:text-orange-400">Services</a>
              </li>
              <li>
                <a href="/gallery" className="text-sm text-gray-400 transition-colors hover:text-orange-400">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-gray-200">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="text-sm text-gray-400 transition-colors hover:text-orange-400">Contact Us</a>
              </li>
              <li>
                <a href="/faq" className="text-sm text-gray-400 transition-colors hover:text-orange-400">FAQs</a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-gray-400 transition-colors hover:text-orange-400">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-gray-400 transition-colors hover:text-orange-400">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className='mb-4 text-sm font-semibold text-gray-200'>CONTACT INFO</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                
                <FaMapMarkerAlt className="flex-shrink-0 mt-1 text-orange-400" />
                <p className="text-gray-400">Landmark Hotel Hilal Palace, Khona Khan, Dalgate Srinagar, J&K, 190001</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-orange-400" />
                <p className="text-gray-400">
                  <a href="tel:+91194548250" classNa  me="transition-colors hover:text-orange-400">+91 194 2458250</a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-orange-400" />
                <p className="text-gray-400">
                  <a href="https://wa.me/917006297432" className="transition-colors hover:text-orange-400">+91 700 629 7432</a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-400" />
                <p className="text-gray-400">
                  <a href="mailto:suwidatourandtravels@gmail.com" className="transition-colors hover:text-orange-400">suwidatourandtravels@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-center text-gray-400 md:mb-0">
              &copy; {new Date().getFullYear()} SUWIDA Tour and Travels. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <button 
                onClick={scrollToTop}
                className="flex items-center text-gray-400 transition-colors hover:text-orange-400"
              >
                <span className="mr-2 text-sm">Back to Top</span>
                <FaArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-4 text-sm text-center text-gray-400">
            Developed by {' '}
            <a 
              href="https://www.linkedin.com/in/reyanshafi/" 
              className="text-orange-400 transition-colors hover:text-orange-300"
            >
              Reyan Shafi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
'use client';
import React from "react";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-teal-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo.svg"
              alt="Salt Lake Tours & Travels Logo"
              width={200}
              height={150}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Addam Tours</h3>
            <p className="text-center md:text-left">
              Your trusted partner for exploring stunning destinations and creating unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/packages" className="hover:text-teal-400 transition">
                  Travel Packages
                </a>
              </li>
              <li>
                <a href="/destinations" className="hover:text-teal-400 transition">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-teal-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-teal-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-teal-400 transition">
                  Travel Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:info@saltlaketourandtravels.in"
                className="hover:text-teal-400 transition"
              >
                info@saltlaketourandtravels.in
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-teal-400 transition">
                +123 456 7890
              </a>
            </p>
            <p>
              Address: 123 Travel Lane, Salt Lake City, Kashmir, India
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center md:flex-row md:justify-between md:items-center border-t pt-6">
          <p className="text-sm text-center md:text-left">
            &copy; 2025 Addam Tours. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-white bg-teal-700 px-6 py-2 rounded-md hover:bg-teal-600 transition"
          >
            Go to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

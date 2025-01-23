'use client';
import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

const Contact = () => {
  return (
    <div className="pt-40 bg-white dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-64 text-white bg-teal-900">
        <div className="text-center fade-in">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-lg">We'd love to hear from you! Reach out to us for any inquiries or bookings.</p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-8 fade-in-left">
            <h2 className="text-3xl font-bold text-teal-900 dark:text-teal-200">Get in Touch</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="text-teal-900 dark:text-teal-200">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Address</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Landmark Hotel Hilal Palace, Khan Khan Dalgate, Srinagar, Jammu & Kashmir, 190001
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-4">
                <div className="text-teal-900 dark:text-teal-200">
                  <FaPhone size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a href="tel:+91194548250" className="transition hover:text-teal-600">
                      +91 194 2458250
                    </a>
                    ,{' '}
                    <a href="tel:+917006297432" className="transition hover:text-teal-600">
                      +91 700 629 7432
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="text-teal-900 dark:text-teal-200">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a
                      href="https://wa.me/917006297432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-teal-600"
                    >
                      +91 700 629 7432
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="text-teal-900 dark:text-teal-200">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a
                      href="mailto:suwidatourandtravels@gmail.com"
                      className="transition hover:text-teal-600"
                    >
                      suwidatourandtravels@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 fade-in-right">
            <h2 className="mb-6 text-3xl font-bold text-teal-900 dark:text-teal-200">Why Choose Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-teal-900 dark:text-teal-200">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Local Expertise</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    With years of experience, we know the best spots and hidden gems in Kashmir.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-teal-900 dark:text-teal-200">
                  <FaPhone size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">24/7 Support</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    We're always here to assist you, no matter the time or day.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-teal-900 dark:text-teal-200">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Personalized Service</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    We tailor every experience to meet your unique needs and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 fade-in">
          <h2 className="mb-6 text-3xl font-bold text-teal-900 dark:text-teal-200">Our Location</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.762691665894!2d74.809314315221!3d34.083773980605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1856e8a8f5c9f%3A0x5f5f5f5f5f5f5f5f!2sLandmark%20Hotel%20Hilal%20Palace%2C%20Khan%20Khan%20Dalgate%2C%20Srinagar%2C%20Jammu%20%26%20Kashmir%20190001!5e0!3m2!1sen!2sin!4v1633083083083!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
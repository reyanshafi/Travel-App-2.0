'use client';
import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Us | Suwida Tour & Travels</title>
        <meta
          name="description"
          content="Get in touch with KashmirExplorer for personalized travel solutions. Contact us via phone, WhatsApp, or email to plan your dream Kashmir adventure."
        />
        <meta
          name="keywords"
          content="Kashmir travel, Kashmir tours, Suwida Tour & Travels, contact Swuida Tour and Travels, Kashmir travel agency, Srinagar tours, Gulmarg tours, Pahalgam tours"
        />
        <link rel="canonical" href="https://www.suwidatourandtravels.in/contact" />
      </Head>

      <div className="bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-24 mt-36 bg-gradient-to-br from-blue-300 to-blue-100">
          <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
            <div className="space-y-6 animate-fade-in-down">
              <h4 className="text-lg font-semibold tracking-wider text-orange-600 uppercase">
                Get in Touch
              </h4>
              <h1 className="text-3xl font-bold leading-tight text-blue-950 md:text-6xl">
                Let’s Plan Your Kashmir Adventure
                <div className="w-32 h-2 mx-auto mt-4 bg-orange-500 rounded-full"></div>
              </h1>
              <p className="max-w-3xl mx-auto text-xl text-gray-600">
                We're here to help you create unforgettable memories. Reach out to us for personalized travel solutions.
              </p>
              <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
                <button
                  onClick={() => window.open('https://wa.me/917006297432', '_blank')}
                  className="px-6 py-3 font-semibold text-white transition-all transform bg-orange-600 rounded-lg shadow-lg sm:px-8 hover:bg-orange-700 hover:scale-105"
                >
                  Chat on WhatsApp ↗
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:suwidatourandtravels@gmail.com'}
                  className="px-6 py-3 font-semibold transition-all transform border-2 rounded-lg shadow-lg sm:px-8 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white hover:scale-105"
                >
                  Send an Email →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="mb-12 text-4xl font-bold text-blue-950">Get in Touch</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Office Address */}
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4">
                  <FaMapMarkerAlt className="text-3xl text-orange-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-950">Our Office</h3>
                <p className="text-gray-600">
                  Landmark Hotel Hilal Palace,<br />
                  Khan Khan Dalgate, Srinagar<br />
                  Jammu & Kashmir 190001
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4">
                  <FaPhone className="text-3xl text-orange-500" />
                </div>
                <h3 className="mb -2 text-xl font-semibold text-blue-950">Call Us</h3>
                <div className="space-y-2">
                  <a href="tel:+91194548250" className="block text-gray-600 hover:text-orange-500">
                    +91 194 2458250
                  </a>
                  <a href="tel:+917006297432" className="block text-gray-600 hover:text-orange-500">
                    +91 700 629 7432
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4">
                  <FaWhatsapp className="text-3xl text-orange-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-950">WhatsApp</h3>
                <a href="https://wa.me/917006297432" className="text-gray-600 hover:text-orange-500">
                  +91 700 629 7432
                </a>
              </div>

              {/* Email */}
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4">
                  <FaEnvelope className="text-3xl text-orange-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-950">Email Us</h3>
                <a href="mailto:suwidatourandtravels@gmail.com" className="text-gray-600 hover:text-orange-500">
                  suwidatourandtravels@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Travel With Us Section */}
        <section className="py-16">
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="mb-12 text-4xl font-bold text-blue-950">Why Travel With Us?</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Local Expertise */}
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4">
                  <FaMapMarkerAlt className="text-3xl text-orange-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-950">Local Expertise</h3>
                <p className="text-gray-600">
                  Born and raised in Kashmir, our team knows every hidden valley and secret viewpoint.
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4">
                  <FaPhone className="text-3xl text-orange-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-950">24/7 Support</h3>
                <p className="text-gray-600">
                  From arrival to departure, our dedicated team is always available.
                </p>
              </div>

              {/* Tailored Experiences */}
              <div className="p-6 text-center bg-white shadow-lg rounded-xl">
                <div className="flex justify-center mb-4">
                  <FaEnvelope className="text-3xl text-orange-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-950">Tailored Experiences</h3>
                <p className="text-gray-600">
                  We craft unique itineraries that match your pace, interests, and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="mb-12 text-4xl font-bold text-blue-950">Find Us on the Map</h2>
            </div>
            <div className="overflow-hidden shadow-xl rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.762691665894!2d74.809314315221!3d34.083773980605!2m3!1f 0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1856e8a8f5c9f%3A0x5f5f5f5f5f5f5f5f!2sLandmark%20Hotel%20Hilal%20Palace%2C%20Khan%20Khan%20Dalgate%2C%20Srinagar%2C%20Jammu%20%26%20Kashmir%20190001!5e0!3m2!1sen!2sin!4v1633083083083!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
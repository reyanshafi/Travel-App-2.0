'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

const About = () => {
  return (
    <>
      <Navbar isHeroPage={false} />
      <section className="bg-white dark:bg-gray-900 py-24 mt-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Us Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="md:pr-8">
              <Image src="/images/about.webp" alt="About Us" className="rounded-lg shadow-lg w-full h-64 object-cover" layout="responsive" width={700} height={475} />
            </div>
            <div className="fade-in-right">
              <h2 className="inline text-3xl font-bold mb-4 text-gray-900 dark:text-white hover:text-red-800">About Us</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Welcome to KashmirExplorer! We are passionate about helping you discover the breathtaking beauty and rich cultural heritage of Kashmir. Our mission is to provide unforgettable travel experiences that will create lasting memories.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our team of dedicated professionals is here to assist you every step of the way. Whether you're looking for adventure, relaxation, or cultural immersion, we have the perfect travel options for you in the enchanting Kashmir Valley.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="fade-in-left">
              <Image src="/images/mission-kashmir.jpg" alt="Our Mission" className="rounded-lg shadow-lg w-full h-64 object-cover" layout="responsive" width={700} height={475} />
            </div>
            <div className="fade-in-right">
              <h2 className="inline text-3xl font-bold mb-4 text-gray-900 dark:text-white hover:text-red-800">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                To inspire and empower people to explore the majestic landscapes and vibrant culture of Kashmir, offering tailored travel experiences that suit individual preferences and create lifelong memories.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="fade-in-left">
              <Image src="/images/vision-kashmir.jpg" alt="Our Vision" className="rounded-lg shadow-lg w-full h-64 object-cover" layout="responsive" width={700} height={475} />
            </div>
            <div className="fade-in-right">
              <h2 className="inline text-3xl font-bold mb-4 text-gray-900 dark:text-white hover:text-red-800">Our Vision</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                To be the world’s most trusted and innovative travel company, enriching lives through unforgettable travel experiences in the mesmerizing Kashmir Valley.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center fade-in">
            <h2 className="inline text-3xl font-bold mb-4 text-gray-900 dark:text-white hover:text-red-800">Join Us on an Adventure</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Ready to explore the beauty of Kashmir? Contact us today and let us help you plan your next unforgettable journey.
            </p>
            <button className="bg-red-800 text-white font-bold py-2 px-4 rounded mx-2 hover:bg-red-700">Contact Us</button>
            <button className="bg-yellow-600 text-white font-bold py-2 px-4 rounded mx-2 hover:bg-red-700">Learn More</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

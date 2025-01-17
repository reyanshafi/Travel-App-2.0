import React from 'react';
import '../app/globals.css';

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="md:pr-8">
            <img src="/images/about.webp" alt="About Us" className="rounded-lg shadow-lg w-full h-64 object-cover" />
          </div>
          <div>
            <h2 className="inline text-3xl font-bold mb-4 text-teal-800 dark:text-teal-500 hover:border-b-2 hover:border-teal-800">
              About Us
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Welcome to YourTravelSite! We are passionate about helping you discover new places and experiences.
              Our mission is to provide unforgettable travel experiences that will create lasting memories.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our team of dedicated professionals is here to assist you every step of the way. Whether you're looking
              for adventure, relaxation, or cultural immersion, we have the perfect travel options for you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="inline text-3xl font-bold mb-4 text-teal-800 dark:text-teal-500 hover:border-b-2 hover:border-teal-800">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              To inspire and empower people to explore the world, offering tailored travel experiences that suit individual preferences and create lifelong memories.
            </p>
          </div>
          <div className="md:pl-8">
            <img src="/images/mission.jpeg" alt="Our Mission" className="rounded-lg shadow-lg w-full h-64 object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="md:pr-8">
            <img src="/images/vision.jpg" alt="Our Vision" className="rounded-lg shadow-lg w-full h-64 object-cover" />
          </div>
          <div>
            <h2 className="inline text-3xl font-bold mb-4 text-teal-800 dark:text-teal-500 hover:border-b-2 hover:border-teal-800">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              To be the world’s most trusted and innovative travel company, enriching lives through unforgettable travel experiences.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="inline text-3xl font-bold mb-4 text-teal-800 dark:text-teal-500 hover:border-b-2 hover:border-teal-800">
            Join Us on an Adventure
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Ready to explore the world? Contact us today and let us help you plan your next unforgettable journey.
          </p>
          <button className="bg-teal-800 text-white font-bold py-2 px-4 rounded mx-2 hover:bg-teal-700 transition duration-300">
            Contact Us
          </button>
          <button className="bg-green-700 text-white font-bold py-2 px-4 rounded mx-2 hover:bg-green-800 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

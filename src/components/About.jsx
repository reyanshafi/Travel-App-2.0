import React from 'react';
import '../app/globals.css';

const About = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="grid items-center grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div className="md:pr-8">
            <img
              src="/images/about.webp"
              alt="About Us"
              className="object-cover w-full h-64 rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="inline mb-4 text-3xl font-bold text-[#114B5F] dark:text-[#0F838D] hover:underline  cursor-pointer">
              About Us
            </h2>
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              Welcome to YourTravelSite! We are passionate about helping you discover new places and experiences.
              Our mission is to provide unforgettable travel experiences that will create lasting memories.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our team of dedicated professionals is here to assist you every step of the way. Whether you're looking
              for adventure, relaxation, or cultural immersion, we have the perfect travel options for you.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid items-center grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div>
            <h2 className="inline mb-4 text-3xl font-bold text-[#114B5F] dark:text-[#0F838D] hover:underline cursor-pointer">
              Our Mission
            </h2>
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              To inspire and empower people to explore the world, offering tailored travel experiences that suit individual preferences and create lifelong memories.
            </p>
          </div>
          <div className="md:pl-8">
            <img
              src="/images/mission.jpg"
              alt="Our Mission"
              className="object-cover w-full h-64 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="grid items-center grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div className="md:pr-8">
            <img
              src="/images/vision.jpg"
              alt="Our Vision"
              className="object-cover w-full h-64 rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="inline mb-4 text-3xl font-bold text-[#114B5F] dark:text-[#0F838D] hover:underline cursor-pointer">
              Our Vision
            </h2>
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              To be the world’s most trusted and innovative travel company, enriching lives through unforgettable travel experiences.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h2 className="inline mb-4 text-3xl font-bold text-[#114B5F] dark:text-[#0F838D] hover:underline cursor-pointer">
            Join Us on an Adventure
          </h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Ready to explore the world? Contact us today and let us help you plan your next unforgettable journey.
          </p>
          <button className="px-4 py-2 mx-2 font-bold text-white transition duration-300 bg-[#114B5F] rounded hover:bg-[#0F838D] cursor-pointer">
            Contact Us
          </button>
          <button className="px-4 py-2 mx-2 font-bold text-white transition duration-300 bg-[#0F838D] rounded hover:bg-[#114B5F] cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
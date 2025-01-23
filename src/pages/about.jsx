'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

const About = () => {
  return (
    <>
      <Navbar isHeroPage={false} />
      <section className="py-24 pt-40 bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          {/* About Us Headline and Description */}
          <div className="mb-16 text-center fade-in">
            <h1 className="mb-6 text-4xl font-bold text-teal-900 transition-colors duration-300 md:text-5xl dark:text-teal-200 hover:text-teal-700">
              About Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              At KashmirExplorer, we are passionate about showcasing the breathtaking beauty and rich cultural heritage of Kashmir. Our mission is to provide unforgettable travel experiences that create lasting memories for our clients.
            </p>
          </div>

          {/* About Us Details */}
          <div className="space-y-16">
            {/* Our Mission */}
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
              <div className="fade-in-left">
                <Image
                  src="/images/mission-kashmir.jpg"
                  alt="Our Mission"
                  className="object-cover w-full h-64 rounded-lg shadow-lg"
                  layout="responsive"
                  width={700}
                  height={475}
                />
              </div>
              <div className="fade-in-right">
                <h2 className="mb-4 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  To inspire and empower people to explore the majestic landscapes and vibrant culture of Kashmir, offering tailored travel experiences that suit individual preferences and create lifelong memories.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
              <div className="md:order-2 fade-in-right">
                <Image
                  src="/images/vision-kashmir.jpg"
                  alt="Our Vision"
                  className="object-cover w-full h-64 rounded-lg shadow-lg"
                  layout="responsive"
                  width={700}
                  height={475}
                />
              </div>
              <div className="md:order-1 fade-in-left">
                <h2 className="mb-4 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  To be the world’s most trusted and innovative travel company, enriching lives through unforgettable travel experiences in the mesmerizing Kashmir Valley.
                </p>
              </div>
            </div>

            {/* Our Team */}
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
              <div className="fade-in-left">
                <Image
                  src="/images/team-kashmir.jpg"
                  alt="Our Team"
                  className="object-cover w-full h-64 rounded-lg shadow-lg"
                  layout="responsive"
                  width={700}
                  height={475}
                />
              </div>
              <div className="fade-in-right">
                <h2 className="mb-4 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
                  Our Team
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Our team is composed of passionate travel enthusiasts and local experts who are dedicated to providing you with the best travel experiences. From itinerary planning to on-ground support, we are here to ensure your journey is seamless and memorable.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
              <div className="md:order-2 fade-in-right">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Why Choose Us"
                  className="object-cover w-full h-64 rounded-lg shadow-lg"
                  layout="responsive"
                  width={700}
                  height={475}
                />
              </div>
              <div className="md:order-1 fade-in-left">
                <h2 className="mb-4 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  We pride ourselves on offering personalized travel experiences that cater to your unique needs. With our deep local knowledge, commitment to sustainability, and exceptional customer service, we ensure that every trip with us is extraordinary.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
              <div className="fade-in-left">
                <Image
                  src="/images/values-kashmir.jpg"
                  alt="Our Values"
                  className="object-cover w-full h-64 rounded-lg shadow-lg"
                  layout="responsive"
                  width={700}
                  height={475}
                />
              </div>
              <div className="fade-in-right">
                <h2 className="mb-4 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
                  Our Values
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  At KashmirExplorer, we are guided by our core values of integrity, sustainability, and customer satisfaction. We believe in creating meaningful connections between travelers and the destinations they visit.
                </p>
              </div>
            </div>

            {/* Customer Testimonials */}
            <div className="text-center fade-in">
              <h2 className="mb-8 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
                What Our Customers Say
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800"
                  >
                    <p className="italic text-gray-700 dark:text-gray-300">
                      "KashmirExplorer made our trip unforgettable! The team was incredibly helpful, and every detail was perfect."
                    </p>
                    <p className="mt-4 font-semibold text-teal-900 dark:text-teal-200">
                      – Customer {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sustainability Commitment */}
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
              <div className="md:order-2 fade-in-right">
                <Image
                  src="/images/sustainability-kashmir.jpg"
                  alt="Sustainability Commitment"
                  className="object-cover w-full h-64 rounded-lg shadow-lg"
                  layout="responsive"
                  width={700}
                  height={475}
                />
              </div>
              <div className="md:order-1 fade-in-left">
                <h2 className="mb-4 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
                  Sustainability Commitment
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  We are committed to promoting sustainable tourism practices that protect the environment and support local communities. Travel responsibly with us and leave a positive impact on Kashmir.
                </p>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="text-center fade-in">
              <h2 className="mb-8 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
                Travel Tips for Kashmir
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  "Pack warm clothing for the chilly weather.",
                  "Respect local customs and traditions.",
                  "Try the local cuisine for an authentic experience.",
                ].map((tip, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center fade-in">
            <h2 className="mb-6 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
              Join Us on an Adventure
            </h2>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Ready to explore the beauty of Kashmir? Contact us today and let us help you plan your next unforgettable journey.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 font-bold text-white transition-colors duration-300 bg-teal-900 rounded-lg hover:bg-teal-700">
                Contact Us
              </button>
              <button className="px-6 py-3 font-bold text-teal-900 transition-colors duration-300 bg-white border-2 border-teal-900 rounded-lg hover:bg-teal-900 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
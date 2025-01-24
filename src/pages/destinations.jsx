'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: 'Srinagar',
      description: 'The summer capital of Jammu & Kashmir, known for its beautiful Dal Lake and Mughal gardens.',
      image: '/images/srinagar.jpg',
    },
    {
      id: 2,
      title: 'Gulmarg',
      description: 'A popular skiing destination with stunning views of the Himalayas.',
      image: '/images/gulmarg.jpg',
    },
    {
      id: 3,
      title: 'Pahalgam',
      description: 'A serene town known for its lush green valleys and the Lidder River.',
      image: '/images/pahalgam.jpg',
    },
    {
      id: 4,
      title: 'Sonamarg',
      description: 'The "Meadow of Gold" offering breathtaking views of glaciers and alpine meadows.',
      image: '/images/sonamarg.jpg',
    },
    {
      id: 5,
      title: 'Leh-Ladakh',
      description: 'A high-altitude desert known for its rugged landscapes and Buddhist monasteries.',
      image: '/images/leh.jpg',
    },
    {
      id: 6,
      title: 'Jammu',
      description: 'The winter capital of Jammu & Kashmir, famous for its temples and vibrant culture.',
      image: '/images/jammu.jpg',
    },
  ];

  return (
    <div className="bg-white pt-28 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-64 text-white bg-[#114B5F]">
        <div className="text-center fade-in">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl animate-fade-in-up">Destinations</h1>
          <p className="text-lg delay-100 animate-fade-in-up">
            Explore the breathtaking destinations of Jammu & Kashmir.
          </p>
        </div>
      </div>

      {/* Masonry Grid Layout */}
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="gap-8 columns-1 sm:columns-2 lg:columns-3">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="mb-8 transition-transform duration-300 bg-white rounded-lg shadow-lg break-inside-avoid dark:bg-gray-800 animate-fade-in-up hover:scale-105"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold text-[#114B5F] dark:text-[#114B5F]">
                  {destination.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Destinations;
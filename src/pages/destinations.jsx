'use client';
import React from 'react';
import Image from 'next/image';
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
    <div className="pt-40 bg-white dark:bg-gray-900">
      <Navbar />

      {/* Modified Hero Section */}
      <div className="relative flex items-center justify-center h-64 bg-white">
  <div className="text-center fade-in">
    <h4 className='mb-4 font-light'>Explore</h4>
    <h1 className="pb-2 mb-4 text-4xl font-bold border-b-4 border-b-orange-500 md:text-5xl animate-fade-in-up text-blue-950">
      Discover Your Adventure
    </h1>
    <p className="px-10 text-lg text-gray-600 delay-100 animate-fade-in-up">
      Explore the breathtaking destinations of Jammu & Kashmir.
    </p>
    <div className="mt-6 space-x-4">
      <button 
        className="px-6 py-2 text-white bg-orange-600 rounded-full hover:bg-orange-700"
        onClick={() => window.open('https://wa.me/yourwhatsappnumber?text=Hi, I would like to get a quote for my trip.', '_blank')}
      >
        Get Quote
      </button>
      <button 
        className="px-6 py-2 bg-transparent border rounded-full text-blue-950 border-blue-950 hover:bg-blue-950 hover:text-white"
        onClick={() => window.location.href = '/packages'}
      >
        Book Now
      </button>
    </div>

  </div>
</div>

<div className='flex justify-center mt-8 text-center'>
  <div className='justify-center w-24 bg-gray-400 border-b-2'></div>
</div>

      {/* Original Masonry Grid Layout */}
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className='mb-12 font-normal text-center'>
          <h4>Destinations</h4>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl animate-fade-in-up text-blue-950">
      Explore Top Destinations
      <div className="w-40 h-1 mx-auto mt-2 bg-orange-600 rounded-full"></div>
    </h2>
        </div>
        <div className="gap-8 columns-1 sm:columns-2 lg:columns-3">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="mb-8 transition-transform duration-300 bg-white rounded-lg shadow-lg break-inside-avoid dark:bg-gray-800 animate-fade-in-up hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold text-blue-950 dark:text-blue-200">
                  {destination.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Destinations;
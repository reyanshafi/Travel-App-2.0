'use client';
import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'DalLake, Srinagar',
      description: 'Experience the city of love and its iconic landmarks.',
      image: '/images/dallake.jpg'
    },
    {
      id: 2,
      name: 'Gulmarg, Baramulla',
      description: 'Explore the ancient temples and serene gardens of Kyoto.',
      image: '/images/gulmarg.jpg'
    },
    {
      id: 3,
      name: 'Pahalgam, Anantnag',
      description: 'Discover the vibrant culture and beautiful beaches of Sydney.',
      image: '/images/pahalgam.jpg'
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      {/* Container for Content */}
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-8 text-3xl font-bold text-center text-[#114B5F] dark:text-[#0F838D] cursor-pointer">
          Featured Destinations
        </h2>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              {/* Destination Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full h-64"
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              {/* Destination Details (Visible on Hover) */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white transition-opacity duration-300 opacity-0 hover:opacity-100">
                <h3 className="mb-2 text-2xl font-bold">{destination.name}</h3>
                <p className="mb-4">{destination.description}</p>
                <button className="px-4 py-2 font-bold text-white bg-[#114B5F] rounded hover:bg-[#0F838D]">
                  Discover More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Destinations Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 font-bold text-white bg-[#114B5F] rounded-md hover:bg-[#0F838D]">
            More Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
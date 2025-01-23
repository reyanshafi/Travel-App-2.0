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
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-teal-600 dark:text-teal-500 text-center">Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 p-6 flex flex-col items-start justify-end text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="mb-4">{destination.description}</p>
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                  Discover More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-md text-center font-bold">
          More Destinations
        </button>
      </div>
    </section>
  );
};

export default Destinations;

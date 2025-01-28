'use client';
import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Dal Lake, Srinagar',
      description: 'Experience serene shikara rides amidst Himalayan vistas.',
      image: '/images/dallake.jpg'
    },
   
    {
      id: 2,
      name: 'Pahalgam, Anantnag',
      description: 'Pristine valleys and Lidder river trekking routes.',
      image: '/images/pahalgam.jpg'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl px-6 mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-blue-950">
            Explore Kashmir's Wonders
          </h2>
          <p className="max-w-xl mx-auto text-gray-600">
            Discover breathtaking landscapes in the crown of India
          </p>
        </div>

        {/* Destinations List */}
        <div className="space-y-16">
          {destinations.map((destination) => (
            <div key={destination.id} className="w-full">
              {/* Full-width Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full rounded-lg shadow-lg h-96"
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />

              {/* Text Content Below Image */}
              <div className="flex items-start justify-between mt-6">
                <div className="flex-1 pr-4">
                  <h3 className="mb-2 text-2xl font-bold text-blue-950">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
                <button className="px-6 py-2.5 font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-700 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Destinations Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
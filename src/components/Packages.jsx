'use client';
import React from 'react';
import Link from 'next/link';

const Packages = () => {
  const packages = [
    {
      id: 1,
      titlePart1: "Skiing Adventure in",
      titlePart2: "Gulmarg",
      description: "Experience world-class skiing slopes and snow-capped mountain vistas.",
      icon: '/images/gulmarg.jpg'
    },
    {
      id: 2,
      titlePart1: "Valley Exploration in",
      titlePart2: "Pahalgam",
      description: "Discover lush meadows and pristine Lidder River valleys.",
      icon: '/images/pahalgam.jpg'
    },
    {
      id: 3,
      titlePart1: "Mountain Trekking in",
      titlePart2: "Sonmarg",
      description: "Conquer challenging trails through the Himalayan golden peaks.",
      icon: '/images/sonamarg.jpg'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl px-6 mx-auto sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-lg font-semibold text-orange-600">Explore Kashmir</p>
          <h2 className="mb-4 text-4xl font-bold text-blue-950">
            Discover Our Kashmir Packages
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience the breathtaking beauty of Kashmir with our handpicked tours. Discover majestic valleys, serene lakes, and rich cultural heritage.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-100 rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
            >
              {/* Package Image */}
              <img
                src={pkg.icon}
                alt={pkg.titlePart2}
                className="object-cover w-full h-48"
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />

              {/* Package Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-950">
                  {pkg.titlePart1} <br />
                  <span className="text-orange-600">{pkg.titlePart2}</span>
                </h3>
                <p className="mt-3 text-gray-600">{pkg.description}</p>
                <div className="mt-6 text-right">
                  <Link href="/packages" passHref>
                    <button className="px-6 py-2.5 text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 cursor-pointer">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <Link href="/packages" passHref>
            <button className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-orange-600 rounded-md cursor-pointer hover:bg-orange-700">
              View All Kashmir Tours
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;
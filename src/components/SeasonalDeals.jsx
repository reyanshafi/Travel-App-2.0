'use client';
import React from 'react';
import Link from 'next/link';

const SeasonalDeals = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-950 to-[#0F3A4D]">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <div className="mb-4">
              <span className="font-semibold text-orange-600">Discover</span>
              <h2 className="mt-2 text-4xl font-bold md:text-5xl">
                Unbeatable Seasonal
                <br />
                Offers Just for You
              </h2>
            </div>
            
            <p className="max-w-xl mb-8 text-lg">
              Take advantage of our exclusive deals and explore breathtaking Kashmiri destinations.
              Book now and create unforgettable memories!
            </p>

            <Link href="/offers">
              <button className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700">
                Learn More
              </button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full">
            <div className="p-8 bg-white border rounded-lg shadow-xl border-orange-600/20">
              <div className="mb-6">
                <span className="px-4 py-1 text-sm text-white rounded-full bg-blue-950">
                  Limited Time
                </span>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-blue-950">
                Exclusive Offers
              </h3>
              <p className="mb-6 text-gray-600">
                Enjoy special rates on select packages for a limited time.
                Grab your chance to save big on your next Himalayan adventure.
              </p>
              <Link href="/booking">
                <button className="w-full px-6 py-3 text-lg font-semibold text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalDeals;
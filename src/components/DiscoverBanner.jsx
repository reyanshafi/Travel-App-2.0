'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DiscoverAdventure = React.memo(() => {
  const handleImageError = (e) => {
    e.target.src = '/images/placeholder.jpg';
  };

  return (
    <section className="py-16 bg-gray-100" aria-labelledby="discover-adventure-heading">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Text Content - Left Side */}
          <div className="flex-1 lg:pr-12">
            <h2 id="discover-adventure-heading" className="text-4xl font-bold text-blue-950 md:text-5xl">
              Discover Your Next <br />
              <span className="text-orange-600">Himalayan Adventure</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              At Kashmir Travels, we're dedicated to crafting unforgettable mountain experiences.
              Our mission is to connect you with the pristine beauty and rich culture of
              Kashmir through carefully curated journeys.
            </p>

            <div className="mt-8">
              <Link href="/tours" passHref>
                <button
                  className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-orange-600 rounded-md cursor-pointer hover:bg-orange-700"
                  aria-label="Explore packages"
                >
                  Explore Packages
                </button>
              </Link>
            </div>
          </div>

          {/* Image Container - Right Side */}
          <div className="flex-1 w-full h-64 overflow-hidden bg-gray-100 rounded-lg lg:h-96">
            <div className="relative w-full h-full">
              <Image
                src="/images/kashmir-adventure.jpg"
                alt="Kashmir Adventure"
                layout="fill"
                objectFit="cover"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

DiscoverAdventure.displayName = 'DiscoverAdventure';

export default DiscoverAdventure;
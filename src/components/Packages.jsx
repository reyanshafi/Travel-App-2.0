'use client';
import React from 'react';
import Link from 'next/link';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Adventure Package',
      description: 'Explore the wild with our Adventure Package. Perfect for thrill-seekers!',
      price: '$1200',
      icon: '/images/gulmarg.jpg'
    },
    {
      id: 2,
      name: 'Relaxation Package',
      description: 'Unwind and rejuvenate with our Relaxation Package. Ideal for a peaceful getaway.',
      price: '$1500',
      icon: '/images/dallake.jpg'
    },
    {
      id: 3,
      name: 'Cultural Package',
      description: 'Immerse yourself in new cultures with our Cultural Package. Perfect for cultural enthusiasts.',
      price: '$1300',
      icon: '/images/pahalgam.jpg'
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl px-6 mx-auto sm:px-8 lg:px-12">
        {/* Heading */}
        <h2 className="mb-12 text-4xl font-bold text-center text-[#114B5F] cursor-pointer ">
          Our Exclusive Packages
        </h2>

        {/* Package Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
            >
              {/* Package Image */}
              <img
                src={pkg.icon}
                alt={pkg.name}
                className="object-cover w-full h-48"
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />

              {/* Package Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black">{pkg.name}</h3>
                <p className="mt-3 text-gray-600">{pkg.description}</p>
                <div className="flex items-center justify-between mt-6">
                  <p className="text-xl font-bold text-[#114B5F]">{pkg.price}</p>
                  <Link href="/packages" passHref>
                    <button className="px-4 py-2 text-white transition-colors bg-[#114B5F] rounded hover:bg-[#0F838D] cursor-pointer">
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
            <button className="px-6 py-3 font-bold text-white transition-colors bg-[#114B5F] rounded shadow-md hover:bg-[#0F838D] cursor-pointer">
              View More Packages
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;
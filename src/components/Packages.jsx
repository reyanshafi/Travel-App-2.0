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
    <section className="bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-bold mb-12 text-teal-600 text-center">Our Exclusive Packages</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={pkg.icon}
                alt={pkg.name}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black">{pkg.name}</h3>
                <p className="text-gray-600 mt-3">{pkg.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xl font-bold text-green-600">{pkg.price}</p>
                  <Link href={`/packages/${pkg.id}`} passHref>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/packages" passHref>
            <button className="bg-teal-600 text-white font-bold px-6 py-3 rounded shadow-md hover:bg-teal-700 transition-colors">
              View More Packages
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;

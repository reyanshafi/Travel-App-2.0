'use client';
import React from 'react';

const StatsContainer = React.memo(() => {
  const stats = [
    {
      id: 1,
      value: '150+',
      label: 'Destinations',
    },
    {
      id: 2,
      value: '10,000+',
      label: 'Customers',
    },
    {
      id: 3,
      value: '24/7',
      label: 'Support',
    },
    {
      id: 4,
      value: '50+',
      label: 'Services',
    },
  ];

  return (
    <div className="justify-center hidden p-6 -mt-10 sm:flex">
      <div
        className="grid w-full max-w-6xl grid-cols-2 gap-4 p-4 bg-white rounded-none shadow-md md:grid-cols-4 drop-shadow-lg"
        role="region"
        aria-labelledby="stats-heading"
      >
        {/* Heading for Accessibility */}
        <h2 id="stats-heading" className="sr-only">
          Statistics
        </h2>

        {stats.map((stat) => (
          <div
            key={stat.id}
            className="p-4 text-center transition-all duration-300 transform cursor-pointer hover:scale-105 hover:shadow-lg"
            role="group"
            aria-label={`Statistic: ${stat.label}`}
          >
            <h3 className="text-3xl font-bold text-blue-950">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

StatsContainer.displayName = 'StatsContainer';

export default StatsContainer;
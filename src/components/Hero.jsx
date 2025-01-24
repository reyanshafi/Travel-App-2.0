'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const slides = [
    {
      image: '/images/slide1.jpg',
      title: 'Explore the Beauty of Gulmarg',
      description: 'Experience the breathtaking landscapes and adventure sports in Gulmarg.'
    },
    {
      image: '/images/slide2.jpg',
      title: 'Discover the Serenity of Dal Lake',
      description: 'Enjoy a peaceful shikara ride and the stunning views of the mountains.'
    },
    {
      image: '/images/slide3.jpg',
      title: 'Adventure Awaits in Pahalgam',
      description: 'Trek through lush green valleys and enjoy the pristine nature of Pahalgam.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        <Image
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-700 ease-in-out"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-black rounded-md opacity-50 m-60 shadow-black drop-shadow-xl"></div>
      </div>

      {/* Centered Text (Dynamic) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center text-[#26a6b2]">
        <h1 className="mb-4 text-4xl font-bold transition-opacity duration-700 ease-in-out md:text-5xl">
          {slides[currentIndex].title}
        </h1>
        <p className="max-w-2xl mb-8 text-lg text-gray-200 transition-opacity duration-700 ease-in-out md:text-xl">
          {slides[currentIndex].description}
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 font-bold text-white transition duration-300 bg-[#114B5F] rounded-lg hover:bg-[#0F838D]">
            Book Now
          </button>
          <button className="px-6 py-3 font-bold text-[#114B5F] transition duration-300 bg-white border border-white rounded-lg hover:bg-gray-100 hover:border-gray-100">
            Get Quote
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute z-30 p-3 text-white transition duration-300 transform -translate-y-1/2 bg-[#114B5F] rounded-full left-4 top-1/2 hover:bg-[#0F838D]"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute z-20 p-3 text-white transition duration-300 transform -translate-y-1/2 bg-[#114B5F] rounded-full right-4 top-1/2 hover:bg-[#0F838D]"
      >
        &gt;
      </button>

      {/* Navigation Dots */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-20 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? 'bg-[#114B5F]' : 'bg-gray-400'
            } transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
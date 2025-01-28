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
      {/* Text Content at the Top */}
      {/* <div className="relative z-10 p-8 text-center text-white bg-blue-950">
        <h1 className="mb-4 text-4xl font-bold">Explore the World</h1>
        <p className="text-lg">
          Discover breathtaking destinations and tailor-made travel experiences that suit your every need. Let us guide you on a journey filled with excitement, culture, and unforgettable memories.
        </p>
      </div> */}

      {/* Image Slideshow Below */}
      <div className="relative w-full mt-40 h-3/4">
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
          <Image
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-700 ease-in-out"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Centered Text on Slideshow */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white transition-opacity duration-700 ease-in-out md:text-5xl">
            {slides[currentIndex].title}
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-gray-200 transition-opacity duration-700 ease-in-out md:text-xl">
            {slides[currentIndex].description}
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 font-bold text-white transition duration-300 bg-blue-900 rounded-lg hover:bg-blue-800">
              Book Now
            </button>
            <button className="px-6 py-3 font-bold transition duration-300 bg-white border border-white rounded-lg text-blue-950 hover:bg-gray-300 hover:border-gray-300">
              Get Quote
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute z-30 p-3 text-white transition duration-300 transform -translate-y-1/2 rounded-full bg-blue-950 left-4 top-1/2 hover:bg-blue-800"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute z-20 p-3 text-white transition duration-300 transform -translate-y-1/2 bg-blue-900 rounded-full right-4 top-1/2 hover:bg-blue-800"
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
                currentIndex === index ? 'bg-blue-900' : 'bg-gray-400'
              } transition duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
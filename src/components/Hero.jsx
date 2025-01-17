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
      
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        <Image
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="bg-cover bg-center transition-transform duration-700 ease-in-out"
        />
                <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 bg-black opacity-60 m-56"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-teal-500 font-montserrat p-4 md:p-8">
 <h1 className="text-3xl md:text-4xl font-bold mb-4 transition-opacity duration-700 ease-in-out opacity-100">{slides[currentIndex].title}</h1>
          <p className="text-lg md:text-xl mb-8 text-white transition-opacity duration-700 ease-in-out opacity-100">{slides[currentIndex].description}</p>
          <div className="flex space-x-4">
            <button className="bg-teal-800 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Book Now</button>
            
            <button className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800 transition duration-300">Get Quote</button>
          </div>
        </div>
      </div>
      <div className="absolute z-30 top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={goToPrevious} className="text-white bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition duration-300">
          &lt;
        </button>
      </div>
      <div className="absolute z-30 top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={goToNext} className="text-white bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition duration-300">
          &gt;
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-teal-800' : 'bg-gray-300'} transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
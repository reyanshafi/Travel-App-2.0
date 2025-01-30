'use client';
import React, { useEffect, useState, useCallback, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';


const slides = [
  {
    image: '/images/slide1.jpg',
    title: 'Mountain Adventures',
    location: 'Gulmarg, Kashmir',
    description: 'Experience world-class skiing and snowboarding in the Himalayas',
    highlight: 'Ski Resort'
  },
  {
    image: '/images/slide2.jpg',
    title: 'Houseboat Experience',
    location: 'Dal Lake, Srinagar',
    description: 'Stay in traditional houseboats surrounded by majestic mountains',
    highlight: 'Waterfront Stay'
  },
  {
    image: '/images/slide3.jpg',
    title: 'Nature Trails',
    location: 'Pahalgam Valley',
    description: 'Explore scenic trekking routes through pine forests',
    highlight: 'Hiking Paradise'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
      setProgress(0);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);
    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  return (
    <div className="relative flex flex-col w-full h-screen pt-2 mt-36 md:flex-row">
      {/* Image Section (Left 55%) */}
      <div className="relative w-full md:w-[55%] h-[60vh] md:h-full overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-950/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 z-30 w-full h-1 bg-blue-900">
          <div 
            className="h-full transition-all ease-linear bg-orange-500 duration-50" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content Section (Right 45%) */}
      <div className="w-full md:w-[45%] bg-gradient-to-br from-blue-950 via-blue-950 to-blue-900 p-8 md:p-12 flex flex-col justify-center relative">
        <div className="max-w-md mx-auto">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Location Badge */}
              <div className="flex items-center gap-2 mb-6">
                <FiMapPin className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-orange-500">
                  {slides[currentIndex].location}
                </span>
              </div>

              {/* Title Group */}
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                  {slides[currentIndex].title}
                </h1>
                <div className="w-16 h-1 bg-orange-500 rounded-full" />
              </div>

              {/* Highlight Card */}
              <div className="p-6 mb-8 border bg-blue-900/30 backdrop-blur-sm rounded-xl border-blue-800/50">
                <span className="block mb-2 text-sm font-semibold text-orange-500">
                  Featured Experience
                </span>
                <p className="text-2xl font-bold text-white">
                  {slides[currentIndex].highlight}
                </p>
              </div>

              {/* Description */}
              <p className="mb-10 text-lg leading-relaxed text-gray-300">
                {slides[currentIndex].description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
               <Link href='/packages'>
                <button className="flex items-center justify-center gap-3 px-6 py-4 text-white transition-all bg-orange-500 rounded-xl hover:bg-orange-600">
                  <span>Explore Packages</span>
                  <FiArrowRight className="w-5 h-5" />
                </button>
                </Link>
                <Link href='/destinations'>
                <button className="px-6 py-4 text-orange-400 transition-all border border-orange-500/30 rounded-xl hover:bg-orange-500/10">
                  Destinations
                </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical Navigation Dots */}
        <div className="absolute flex-col hidden gap-4 -translate-y-1/2 right-8 top-1/2 md:flex">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-orange-500 scale-150' 
                  : 'bg-blue-800 hover:scale-125'
              }`}
            >
              {currentIndex === index && (
                <motion.div
                  className="absolute inset-0 border-2 border-orange-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
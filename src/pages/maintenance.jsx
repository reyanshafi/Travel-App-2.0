'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../app/globals.css';

export default function MaintenancePage() {
  const targetDate = new Date('2025-02-03T12:00:00'); // Set your desired end date and time here
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(target) {
    const difference = target - new Date();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Timer stops at 0
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-teal-500 to-indigo-600">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-8 text-center bg-white shadow-lg rounded-xl bg-opacity-10 backdrop-blur-md"
      >
        <motion.h1
          className="mb-4 text-4xl font-extrabold sm:text-5xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          🚀 Suwida Tour and Travels
        </motion.h1>
        <motion.p
          className="mb-6 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Our website is currently under development. We're working hard to bring you an amazing experience. Stay tuned!
        </motion.p>
        <div className="flex items-center justify-center mt-4 space-x-6 sm:space-x-12">
          <TimerBox label="Days" value={timeLeft.days} />
          <TimerBox label="Hours" value={timeLeft.hours} />
          <TimerBox label="Minutes" value={timeLeft.minutes} />
          <TimerBox label="Seconds" value={timeLeft.seconds} />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-6"
        >
          <button
            className="px-6 py-2 font-semibold text-indigo-600 transition bg-white rounded-full shadow-lg hover:bg-opacity-90"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute text-sm text-white bottom-6"
      >
        © {new Date().getFullYear()} Suwida Tour and Travels. All Rights Reserved.
      </motion.div>
    </div>
  );
}

function TimerBox({ label, value }) {
  return (
    <div className="flex flex-col items-center px-4 py-2 bg-white rounded-lg shadow-md bg-opacity-20">
      <span className="text-3xl font-bold sm:text-4xl">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm tracking-wider uppercase">{label}</span>
    </div>
  );
}

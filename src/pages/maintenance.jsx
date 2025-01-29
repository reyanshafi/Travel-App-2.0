'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import '../app/globals.css';

const targetDate = new Date('2025-02-03T12:00:00');

function calculateTimeLeft() {
  const difference = targetDate - new Date();
  return difference > 0
    ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    : { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const updateTimer = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [updateTimer]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-8 mx-4 text-center bg-gray-800 shadow-lg rounded-xl bg-opacity-90 backdrop-blur-md"
      >
        <motion.h1
          className="mb-4 text-4xl font-extrabold text-purple-400 sm:text-5xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          🚀 Suwida Tour and Travels
        </motion.h1>
        <motion.p
          className="mb-6 text-base text-gray-300 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Our website is currently under maintenance. Stay tuned for an amazing experience!
        </motion.p>
        <div className="flex flex-wrap items-center justify-center mt-4 space-x-2 sm:space-x-6">
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
            className="px-6 py-2 font-semibold text-white transition bg-purple-500 rounded-full shadow-lg hover:bg-purple-600"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </motion.div>
        <motion.p
          className="mt-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          For any assistance, contact: <a href="tel:+919906512509" className="underline">+91 9906512509</a>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute text-sm text-gray-500 bottom-6"
      >
        © {new Date().getFullYear()} Suwida Tour and Travels. All Rights Reserved.
      </motion.div>
    </div>
  );
}

function TimerBox({ label, value }) {
  return (
    <div className="flex flex-col items-center px-4 py-2 m-2 bg-gray-700 rounded-lg shadow-md bg-opacity-80">
      <span className="text-3xl font-bold text-purple-400 sm:text-4xl">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm tracking-wider text-gray-300 uppercase">{label}</span>
    </div>
  );
}

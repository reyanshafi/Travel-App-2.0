'use client';
import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

// ServiceCard Component wrapped in React.memo
const ServiceCard = React.memo(({ service }) => (
  <div
    className="p-8 transition-all duration-300 transform bg-white border-2 border-blue-100 rounded-lg shadow-lg opacity-0 hover:shadow-xl hover:border-orange-500 hover:-translate-y-2 service-card group hover:cursor-pointer"
  >
    <div className="mb-4 text-4xl transition-colors text-blue-950 group-hover:text-orange-500">
      {service.icon}
    </div>
    <h2 className="mb-4 text-2xl font-bold transition-colors text-blue-950 group-hover:text-orange-500">
      {service.title}
    </h2>
    <p className="text-lg text-gray-700">{service.description}</p>
  </div>
));

// WhyChooseUsItem Component wrapped in React.memo
const WhyChooseUsItem = React.memo(({ item }) => (
  <div className="p-8 text-center transition-all duration-300 hover:bg-orange-50 rounded-xl hover:cursor-pointer">
    <div className="mb-4 text-4xl text-orange-500">{item.icon}</div>
    <h3 className="text-2xl font-bold text-blue-950">{item.title}</h3>
    <p className="mt-2 text-lg text-gray-700">{item.text}</p>
  </div>
));

const Services = () => {
  const services = [
    {
      title: 'Customized Tour Packages',
      description: 'Explore the beauty of Kashmir with tailor-made tour packages designed to suit your preferences.',
      icon: '✈️',
    },
    {
      title: 'Houseboat Stays',
      description: 'Experience the charm of Dal Lake with luxurious and comfortable houseboat accommodations.',
      icon: '🛶',
    },
    {
      title: 'Adventure Activities',
      description: 'Enjoy thrilling activities like trekking, skiing, and river rafting in the breathtaking landscapes of Kashmir.',
      icon: '⛷️',
    },
    {
      title: 'Transportation Services',
      description: 'Travel hassle-free with our reliable cab and transportation services across Kashmir.',
      icon: '🚗',
    },
    {
      title: 'Guided Tours',
      description: 'Discover the hidden gems of Kashmir with the help of our experienced local guides.',
      icon: '🗺️',
    },
    {
      title: 'Cultural Experiences',
      description: 'Immerse yourself in the rich culture of Kashmir with traditional music, dance, and cuisine.',
      icon: '🎶',
    },
    {
      title: 'Photography Tours',
      description: 'Capture the stunning landscapes and vibrant culture of Kashmir with our guided photography tours.',
      icon: '📸',
    },
    {
      title: 'Wellness Retreats',
      description: 'Relax and rejuvenate with our wellness retreats set amidst the serene beauty of Kashmir.',
      icon: '🧘',
    },
  ];

  // WhatsApp integration function
  const handleGetQuote = useCallback(() => {
    const phoneNumber = '1234567890'; // Replace with your WhatsApp business number
    const message = encodeURIComponent('Hi KashmirExplorer, I would like to get a quote for your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }, []);

  // Staggered animation effect for service cards
  useEffect(() => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
      card.classList.add('fade-in-up');
    });
  }, []);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mt-36 py-32 bg-[url('/images/kashmir.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-screen-xl px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-200 md:text-6xl drop-shadow-md">
            Discover <span className="text-orange-500">Kashmir</span> with Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white">
            Experience the magic of Kashmir with our expertly curated services. From adventure to relaxation, we’ve got you covered.
          </p>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">Our Featured Services</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700">
              Explore our most popular services designed to make your Kashmir trip unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">Why Choose KashmirExplorer?</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700">
              We are committed to providing you with the best travel experience in Kashmir.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            {[{ icon: '🌟', title: 'Expert Guides', text: 'Our experienced guides ensure you discover the best of Kashmir.' },
              { icon: '💎', title: 'Tailored Experiences', text: 'Customized tours designed to match your preferences.' },
              { icon: '🛡️', title: 'Safety First', text: 'Your safety is our top priority at all times.' }
            ].map((item, index) => (
              <WhyChooseUsItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-950">
        <div className="max-w-screen-xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Explore Kashmir?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-orange-100">
            Contact us today to book your dream trip and experience the magic of Kashmir.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={handleGetQuote}
              className="px-8 py-4 font-bold text-white transition-all duration-300 bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300"
            >
              Get Free Quote
            </button>
            <Link
              href="/packages"
              className="px-8 py-4 font-bold transition-all duration-300 bg-white border-2 border-white rounded-lg text-blue-950 hover:bg-transparent hover:text-white"
            >
              Book Package Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

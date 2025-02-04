'use client';
import Head from 'next/head';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Updated import for Next.js 13+
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

const About = () => {
  const router = useRouter(); // Initialize the router

  return (
    <>
     <Head>
        <title>About Us - KashmirExplorer | Discover Our Story</title>
        <meta name="description" content="Learn about KashmirExplorer's mission to provide unparalleled Kashmiri journeys. Discover our commitment to sustainability, authenticity, and excellence in Kashmir tourism." />
        <meta name="keywords" content="Kashmir Tourism, Kashmiri Journeys, Himalayan Tourism, Kashmir Travel Packages, Sustainable Tourism Kashmir" />
        <meta property="og:title" content="About Us - KashmirExplorer | Discover Our Story" />
        <meta property="og:description" content="Learn about KashmirExplorer's mission to provide unparalleled Kashmiri journeys. Discover our commitment to sustainability, authenticity, and excellence in Kashmir tourism." />
        <meta property="og:image" content="/images/mission.jpg" />
        <meta property="og:url" content="https://www.kashmirexplorer.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar isHeroPage={false} />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 mt-36 bg-gradient-to-br from-blue-300 to-blue-100">
  <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
    <div className="space-y-6 animate-fade-in-down">
      <h4 className="text-lg font-semibold tracking-wider text-orange-600 uppercase">
        About Us
      </h4>
      <h1 className="text-4xl font-bold leading-tight text-blue-950 md:text-6xl">
        Discover Our Story
        <div className="w-32 h-2 mx-auto mt-4 bg-orange-500 rounded-full"></div>
      </h1>
      <p className="max-w-3xl mx-auto text-xl text-gray-600">
        Where Passion Meets the Majesty of Kashmir
      </p>
      <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
        
        <button
          onClick={() => window.location.href = '/packages'}
          className="px-6 py-3 font-semibold transition-all transform border-2 rounded-lg shadow-lg sm:px-8 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white hover:scale-105"
        >
          Explore Packages →
        </button>
      </div>
    </div>
  </div>
</section>

        {/* Content Sections */}
        <div className="px-4 py-20 mx-auto space-y-24 max-w-7xl sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden shadow-xl h-96 rounded-2xl">
              <Image
                src="/images/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="mb-4 text-3xl font-bold text-blue-950">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-orange-600">
                    Mission
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    To craft unparalleled Kashmiri journeys that inspire 
                    wonder while preserving the valley's natural beauty 
                    and cultural heritage.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-orange-600">
                    Vision
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    Redefining Himalayan tourism through innovative 
                    experiences that benefit both travelers and local 
                    communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team & Expertise */}
          <div className="grid items-center gap-12 md:grid-cols-2 md:flex-row-reverse">
            <div className="relative overflow-hidden shadow-xl md:order-2 h-96 rounded-2xl">
              <Image
                src="/images/team.jpg"
                alt="Our Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 md:order-1">
              <h2 className="mb-4 text-3xl font-bold text-blue-950">
                Local Expertise, Global Standards
              </h2>
              <p className="leading-relaxed text-gray-600">
                Our team combines deep regional knowledge with international 
                hospitality experience. From third-generation houseboat 
                owners to certified mountain guides, we bring you authentic 
                experiences with modern comfort.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-blue-50">
                  <span className="text-2xl font-bold text-orange-600">15+</span>
                  <p className="mt-2 text-gray-600">Years Experience</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50">
                  <span className="text-2xl font-bold text-orange-600">98%</span>
                  <p className="mt-2 text-gray-600">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values & Sustainability */}
          <div className="p-8 shadow-inner bg-blue-50 rounded-2xl md:p-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-blue-950">
                  Our Core Values
                </h2>
                <ul className="space-y-6">
                  {[
                    { title: 'Authenticity', content: 'Preserving true Kashmiri traditions' },
                    { title: 'Sustainability', content: 'Eco-friendly tourism practices' },
                    { title: 'Excellence', content: 'Curated premium experiences' },
                    { title: 'Community', content: 'Empowering local livelihoods' },
                  ].map((value, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-600 bg-orange-100 rounded-full">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-950">{value.title}</h3>
                        <p className="text-gray-600">{value.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden h-96 rounded-xl">
                <Image
                  src="/images/sustainability.jpg"
                  alt="Sustainability"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <section className="py-2">
            <h2 className="mb-12 text-3xl font-bold text-center text-blue-950">
              Traveler Experiences
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-6 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 mr-3 bg-blue-100 rounded-full">
                      <span className="font-semibold text-blue-950">JD</span>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-950">John Doe</p>
                      <p className="text-sm text-gray-500">Adventure Seeker</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "KashmirExplorer transformed our family vacation into 
                    a cultural immersion we'll cherish forever. Every 
                    detail was perfectly orchestrated."
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="p-8 text-center text-white bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Ready for Your Kashmiri Adventure?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100">
              Let us craft your perfect journey through the Himalayas. 
              Experience Kashmir like never before with our expert guidance.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => router.push('/packages')} // Navigate to packages page
                className="px-8 py-3 font-semibold transition-colors bg-orange-600 rounded-lg hover:bg-orange-700"
              >
                Explore Packages
              </button>
              <button
                onClick={() => router.push('/contact')} // Navigate to contact page
                className="px-8 py-3 font-semibold transition-colors border-2 border-white rounded-lg hover:bg-white hover:text-blue-950"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
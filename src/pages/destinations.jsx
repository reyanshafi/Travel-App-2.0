'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

// Memoized Destination Card Component
const DestinationCard = React.memo(({ destination }) => (
  <div className="overflow-hidden transition-transform duration-300 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] group">
    <div className="relative h-64">
      <Image
        src={destination.image}
        alt={`${destination.title} landscape`}
        fill
        className="object-cover transition-opacity duration-300 group-hover:opacity-90"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        priority={destination.id <= 3}
      />
    </div>
    <div className="p-6 bg-white">
      <h3 className="text-xl font-bold text-blue-950">{destination.title}</h3>
      <p className="mt-2 text-gray-600">{destination.description}</p>
      <button className="mt-4 font-semibold text-orange-600 hover:text-orange-700">
        Explore More ↓
      </button>
    </div>
  </div>
));

DestinationCard.displayName = 'DestinationCard';

// Memoized Travel Tip Component
const TravelTip = React.memo(({ tip }) => (
  <div className="p-6 bg-white shadow-lg rounded-xl">
    <div className="flex items-center gap-4">
      <span className="text-3xl">{tip.icon}</span>
      <h3 className="text-xl font-semibold text-blue-950">{tip.title}</h3>
    </div>
    <p className="mt-4 text-gray-600">{tip.content}</p>
  </div>
));

TravelTip.displayName = 'TravelTip';

const Destinations = () => {
  // Memoize static data
  const destinations = useMemo(() => [
    { id: 1, title: 'Srinagar', description: 'The summer capital of Jammu & Kashmir, known for its beautiful Dal Lake and Mughal gardens.', image: '/images/srinagar.jpg' },
    { id: 2, title: 'Gulmarg', description: 'A popular skiing destination with stunning views of the Himalayas.', image: '/images/gulmarg.jpg' },
    { id: 3, title: 'Pahalgam', description: 'A serene town known for its lush green valleys and the Lidder River.', image: '/images/pahalgam.jpg' },
    { id: 4, title: 'Sonamarg', description: 'The "Meadow of Gold" offering breathtaking views of glaciers and alpine meadows.', image: '/images/sonamarg.jpg' },
    { id: 5, title: 'Leh-Ladakh', description: 'A high-altitude desert known for its rugged landscapes and Buddhist monasteries.', image: '/images/leh.jpg' },
    { id: 6, title: 'Jammu', description: 'The winter capital of Jammu & Kashmir, famous for its temples and vibrant culture.', image: '/images/jammu.jpg' },
  ], []);

  const travelTips = useMemo(() => [
    { icon: '⛰️', title: 'Altitude Awareness', content: 'Acclimate properly when visiting high-altitude areas like Leh-Ladakh' },
    { icon: '🧣', title: 'Seasonal Packing', content: 'Carry layered clothing - temperatures vary dramatically between day and night' },
    { icon: '🕌', title: 'Cultural Respect', content: 'Dress modestly when visiting religious sites and local villages' }
  ], []);

  return (
    <div className="pt-40 bg-white dark:bg-gray-900">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-300 to-blue-100">
        <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="space-y-6 animate-fade-in-down">
            <h4 className="text-lg font-semibold tracking-wider text-orange-600 uppercase">
              Discover Kashmir
            </h4>
            <h1 className="text-4xl font-bold leading-tight text-blue-950 md:text-6xl">
              Explore Majestic Destinations
              <div className="w-32 h-2 mx-auto mt-4 bg-orange-500 rounded-full"></div>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Journey through paradise on earth with our curated selection of Kashmir's most breathtaking locations
            </p>
            <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
              <button 
                onClick={() => window.open('https://wa.me/917006297432', '_blank')}
                className="px-6 py-3 font-semibold text-white transition-all transform bg-orange-600 rounded-lg shadow-lg sm:px-8 hover:bg-orange-700 hover:scale-105"
              >
                Instant Quote ↗
              </button>
              <button 
                onClick={() => window.location.href = '/packages'}
                className="px-6 py-3 font-semibold transition-all transform border-2 rounded-lg shadow-lg sm:px-8 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white hover:scale-105"
              >
                Custom Package →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
            Featured Destinations
            <div className="w-24 h-1 mx-auto mt-4 bg-orange-500 rounded-full"></div>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Discover the diverse landscapes and cultural treasures of Jammu & Kashmir
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-16 bg-blue-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
              Essential Travel Tips
              <div className="w-24 h-1 mx-auto mt-4 bg-orange-500 rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {travelTips.map((tip, index) => (
              <TravelTip key={index} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
                Ideal Travel Seasons
                <div className="w-24 h-1 mt-4 bg-orange-500 rounded-full"></div>
              </h2>
              <p className="text-gray-600">
                Kashmir offers unique experiences throughout the year. Here's our seasonal guide:
              </p>
              <div className="space-y-4">
                {[
                  { season: 'Spring (Mar-May)', detail: 'Bloom of tulip gardens, mild weather' },
                  { season: 'Summer (Jun-Aug)', detail: 'Perfect for houseboats and mountain trekking' },
                  { season: 'Autumn (Sep-Nov)', detail: 'Golden poplars and harvest festivals' },
                  { season: 'Winter (Dec-Feb)', detail: 'Skiing in Gulmarg, snowy landscapes' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-blue-50">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-600 bg-orange-100 rounded-full">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-950">{item.season}</h4>
                      <p className="text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden shadow-xl h-96 rounded-xl">
              <Image
                src="/images/seasonal.jpg"
                alt="Seasonal guide visual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900">
  <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-orange-500 md:text-4xl">
        Ready for Your Kashmiri Adventure?
      </h2>
      <p className="text-lg text-blue-200">
        Let our experts craft your perfect itinerary. 24/7 support and personalized planning included.
      </p>
      <div className="mt-8">
        <button 
          onClick={() => window.open('https://wa.me/917006297432', '_blank')}
          className="block px-8 py-4 mx-auto font-semibold text-orange-500 transition-all transform border-2 border-orange-500 rounded-lg shadow-lg hover:bg-white hover:text-blue-950 hover:scale-105 w-fit"
          aria-label="Chat with travel expert on WhatsApp"
        >
          Chat with Expert →
        </button>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default Destinations;
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import supabase from "../../supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import "../app/globals.css";

const Cabs = () => {
  const [cabs, setCabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCabs, setFilteredCabs] = useState([]);
  const router = useRouter();

  // Fetch cabs data from Supabase
  useEffect(() => {
    const fetchCabs = async () => {
      try {
        const { data, error } = await supabase.from("cabs").select("*");
        if (error) throw error;
        setCabs(data);
        setFilteredCabs(data);
      } catch (error) {
        console.error("Error fetching cabs: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCabs();
  }, []);

  // Filter cabs based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCabs(cabs);
    } else {
      const filtered = cabs.filter(cab =>
        cab.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCabs(filtered);
    }
  }, [searchTerm, cabs]);

  if (loading) return <Loader />;

  return (
    <div className="bg-white">
      <Head>
        <title>Kashmir Cab Services - Tour and Travel Kashmir</title>
        <meta name="description" content="Explore reliable and affordable cab services in Kashmir. Book comfortable cabs for local travel, sightseeing, and airport transfers with trusted drivers." />
        <meta name="keywords" content="Kashmir cab services, Kashmir car rental, Kashmir taxi, Srinagar cab, Gulmarg taxi, Pahalgam cab" />
        <meta property="og:title" content="Kashmir Cab Services - Reliable and Affordable" />
        <meta property="og:description" content="Book comfortable cabs for local travel, sightseeing, and airport transfers in Kashmir. Trusted drivers and best prices guaranteed." />
        <meta property="og:image" content="/images/kashmir-cabs-og.jpg" />
        <meta property="og:url" content="https://www.suwidatourandtravels.in/cabs" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-20 mt-36 bg-gradient-to-br from-blue-300 to-blue-100">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h4 className="text-lg font-semibold tracking-wider text-orange-600 uppercase">
            Kashmir Cab Services
          </h4>
          <h1 className="text-4xl font-bold leading-tight text-blue-950 md:text-5xl">
            Reliable and Affordable Cabs
            <div className="w-32 h-2 mx-auto mt-4 bg-orange-500 rounded-full" />
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-600">
            Explore Kashmir with our comfortable and trusted cab services
          </p>
        </div>
      </section>

      {/* Cab Filters */}
      <div className="max-w-6xl px-4 mx-auto my-12">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md sm:flex-row sm:justify-center">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search for cabs..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search Kashmir cab services"
            />
          </div>
        </div>
      </div>

      {/* Cabs Grid */}
      <main className="max-w-6xl px-4 mx-auto mb-20">
        {filteredCabs.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-600">No cabs found. Try different search terms or check back later!</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCabs.map((cab, index) => (
              <article
                key={index}
                className="overflow-hidden transition-transform duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02]"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative h-64">
                  <Image
                    src={cab.image_url || "/images/kashmir-default-cab.jpg"}
                    alt={`Kashmir Cab - ${cab.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    itemProp="image"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-blue-950" itemProp="name">
                      {cab.name}
                    </h2>
                    <span className="px-3 py-1 text-sm text-orange-600 bg-orange-100 rounded-full">
                      {cab.type}
                    </span>
                  </div>

                  <div className="flex gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span>🚗</span>
                      <span itemProp="vehicleType">{cab.seats} Seater</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span itemProp="starRating">{cab.rating || '4.8'}/5</span>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600 line-clamp-3" itemProp="description">
                    {cab.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-blue-950" itemProp="price">
                      ₹{cab.price}/day
                      <meta itemProp="priceCurrency" content="INR" />
                    </p>
                    <button
                       onClick={() => window.open('https://wa.me/917006297432', '_blank')}
                      className="px-6 py-2 font-semibold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600"
                      aria-label={`Book ${cab.name} cab`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-blue-950">
            Why Choose Our Cab Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🚕',
                title: 'Wide Range',
                text: 'Choose from sedans, SUVs, and luxury vehicles'
              },
              {
                icon: '🛡️',
                title: 'Safe & Reliable',
                text: 'Verified drivers and well-maintained cabs'
              },
              {
                icon: '💵',
                title: 'Affordable Rates',
                text: 'Competitive pricing with no hidden charges'
              },
              {
                icon: '📞',
                title: '24/7 Support',
                text: 'Dedicated support for all your travel needs'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 text-center bg-white rounded-xl"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <div className="mb-4 text-4xl" itemProp="image">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-blue-950" itemProp="name">
                  {feature.title}
                </h3>
                <p className="text-gray-600" itemProp="description">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Need a Custom Cab Service?
          </h2>
          <p className="mb-8 text-lg text-blue-200">
            Contact us for special requests or long-term rentals
          </p>
          <button
            onClick={() => window.open('https://wa.me/917006297432', '_blank')}
            className="px-8 py-3 font-semibold text-white transition-all bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-105"
            aria-label="Chat with Kashmir cab service experts on WhatsApp"
          >
            Chat with Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cabs;
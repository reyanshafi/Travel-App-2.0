import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import supabase from "../../supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import "../app/globals.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data, error } = await supabase.from("packages").select("*");
        if (error) throw error;
        setPackages(data);
        setFilteredPackages(data);
      } catch (error) {
        console.error("Error fetching packages: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPackages(packages);
    } else {
      const filtered = packages.filter(pkg =>
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPackages(filtered);
    }
  }, [searchTerm, packages]);

  if (loading) return <Loader />;

  return (
    <div className="bg-white">
      <Head>
        <title>Kashmir Travel Packages - Tour and Travel Kashmir</title>
        <meta name="description" content="Discover authentic Kashmir tour packages with local experts. Choose from adventure trips, cultural journeys, and luxury stays in the Himalayas. Best price guarantee!" />
        <meta name="keywords" content="Kashmir tour packages, Himalayan travel, Kashmir adventure trips, Kashmir luxury stays, Kashmir cultural tours" />
        <meta property="og:title" content="Kashmir Travel Packages - Curated Himalayan Experiences" />
        <meta property="og:description" content="Explore our collection of authentic Kashmir tour packages designed by local experts. Adventure, culture, and luxury in the Himalayas." />
        <meta property="og:image" content="/images/kashmir-packages-og.jpg" />
        <meta property="og:url" content="https://www.suwidatourandtravels.in/packages" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 mt-36 bg-gradient-to-br from-blue-300 to-blue-100">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h4 className="text-lg font-semibold tracking-wider text-orange-600 uppercase">
            Kashmir Tour Packages
          </h4>
          <h1 className="text-4xl font-bold leading-tight text-blue-950 md:text-5xl">
            Curated Himalayan Experiences
            <div className="w-32 h-2 mx-auto mt-4 bg-orange-500 rounded-full" />
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-600">
            Experience the best of Kashmir with our locally-crafted itineraries
          </p>
        </div>
      </section>

      {/* Package Filters */}
      <div className="max-w-6xl px-4 mx-auto my-12">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md sm:flex-row sm:justify-center">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search Kashmir packages..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search Kashmir tour packages"
            />
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <main className="max-w-6xl px-4 mx-auto mb-20">
        {filteredPackages.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-600">No packages found. Try different search terms or check back later!</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg, index) => (
              <article 
                key={index}
                className="overflow-hidden transition-transform duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02]"
                itemScope
                itemType="https://schema.org/TouristTrip"
              >
                <div className="relative h-64">
                  <Image
                    src={pkg.image_url || "/images/kashmir-default-package.jpg"}
                    alt={`Kashmir Tour Package - ${pkg.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    itemProp="image"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-blue-950" itemProp="name">
                      {pkg.name}
                    </h2>
                    <span className="px-3 py-1 text-sm text-orange-600 bg-orange-100 rounded-full">
                      {pkg.days}D/{pkg.nights}N
                    </span>
                  </div>

                  <div className="flex gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span itemProp="starRating">{pkg.rating || '4.8'}/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      <span itemProp="partySize">{pkg.group_size || '2-12'} People</span>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600 line-clamp-3" itemProp="description">
                    {pkg.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-blue-950" itemProp="price">
                      ₹{pkg.price}
                      <meta itemProp="priceCurrency" content="INR" />
                    </p>
                    <button
                      onClick={() => router.push({
                        pathname: "/PaymentPortal",
                        query: { id: pkg.id },
                      })}
                      className="px-6 py-2 font-semibold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600"
                      aria-label={`Book ${pkg.name} package`}
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
            Why Choose Our Kashmir Packages
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[ 
              { 
                icon: '✅', 
                title: 'Local Experts', 
                text: 'Designed by 3rd-generation Kashmir guides' 
              },
              { 
                icon: '🛡️', 
                title: 'Full Protection', 
                text: 'Government-approved accommodations & transports' 
              },
              { 
                icon: '💵', 
                title: 'Best Value', 
                text: 'Premium Kashmir experiences at local rates' 
              },
              { 
                icon: '📞', 
                title: '24/7 Support', 
                text: 'Dedicated Kashmiri trip coordinator' 
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
            Custom Kashmir Itinerary?
          </h2>
          <p className="mb-8 text-lg text-blue-200">
            Let our local experts craft your perfect Himalayan journey
          </p>
          <button
            onClick={() => window.open('https://wa.me/917006297432', '_blank')}
            className="px-8 py-3 font-semibold text-white transition-all bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-105"
            aria-label="Chat with Kashmir travel experts on WhatsApp"
          >
            Chat with Local Experts
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
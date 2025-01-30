import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
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

  // Search filter logic
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
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 mt-36 bg-gradient-to-br from-blue-300 to-blue-100">
        <div className="max-w-6xl px-4 mx-auto text-center">
        <h4 className="text-lg font-semibold tracking-wider text-orange-600 uppercase">
        Packages
      </h4>
          <h1 className="text-4xl font-bold leading-tight text-blue-950 md:text-5xl">
            Curated Travel Experiences
            <div className="w-32 h-2 mx-auto mt-4 bg-orange-500 rounded-full" />
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-600">
            Discover perfectly planned Kashmir journeys with local expertise
          </p>
        </div>
      </section>

      {/* Package Filters */}
      <div className="max-w-6xl px-4 mx-auto my-12">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md sm:flex-row sm:justify-center">
          {/* <div className="flex items-center gap-2">
            <span className="text-gray-600">Filter by:</span>
            <button className="px-4 py-2 rounded-lg text-blue-950 bg-blue-50">All</button>
            <button className="px-4 py-2 text-gray-600 rounded-lg hover:bg-blue-50">Adventure</button>
            <button className="px-4 py-2 text-gray-600 rounded-lg hover:bg-blue-50">Luxury</button>
          </div> */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search packages..."
              className="w-full px-4 py-2 border rounded-lg sm:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <main className="max-w-6xl px-4 mx-auto mb-20">
        {filteredPackages.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-600">No packages currently available. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg, index) => (
              <div
                key={index}
                className="overflow-hidden transition-transform duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="relative h-64">
                  <Image
                    src={pkg.image_url || "/images/default-image.jpg"}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-blue-950">{pkg.name}</h2>
                    <span className="px-3 py-1 text-sm text-orange-600 bg-orange-100 rounded-full">
                      {pkg.days}D/{pkg.nights}N
                    </span>
                  </div>

                  <div className="flex gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      {pkg.rating || '4.8'}
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      {pkg.group_size || '2-12'} People
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600 line-clamp-3">{pkg.description}</p>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-blue-950">
                      ₹{pkg.price}
                      {/* <span className="text-sm font-normal text-gray-600">/person</span> */}
                    </p>
                    <button
                      onClick={() => router.push({
                        pathname: "/PaymentPortal",
                        query: { id: pkg.id },
                      })}
                      className="px-6 py-2 font-semibold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-blue-950">
            Why Choose Our Packages
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[ 
              { icon: '✅', title: 'Local Experts', text: 'Designed by Kashmir natives' },
              { icon: '🛡️', title: 'Full Protection', text: 'Verified accommodations & transports' },
              { icon: '💵', title: 'Best Value', text: 'Quality experiences at fair prices' },
              { icon: '📞', title: '24/7 Support', text: 'Dedicated trip coordinator' }
            ].map((feature, index) => (
              <div key={index} className="p-6 text-center bg-white rounded-xl">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-blue-950">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Need a Custom Package?
          </h2>
          <p className="mb-8 text-lg text-blue-200">
            Let us craft your perfect Kashmir itinerary
          </p>
          <button
            onClick={() => window.open('https://wa.me/917006297432', '_blank')}
            className="px-8 py-3 font-semibold text-white transition-all bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-105"
          >
            Chat with Our Experts
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;

import { useState, useEffect } from "react";
import supabase from "../../supabaseClient"; // Import Supabase client
import Navbar from "../components/Navbar"; // Assuming Navbar component is in 'components'
import Footer from "../components/Footer"; // Assuming Footer component is in 'components'
import Loader from "../components/Loader"; // Import the Loader component
import '../app/globals.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // Fetch packages from Supabase
        const { data, error } = await supabase
          .from("packages") // Replace with your Supabase table name
          .select("*"); // Fetch all columns

        if (error) throw error;

        // Set the fetched packages to state
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Show the Loader while data is being fetched
  if (loading) return <Loader />;

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Packages Section */}
      <div className="py-8 pt-40 bg-gray-50 dark:bg-gray-900">
        <h1 className="mb-8 text-4xl font-bold text-center text-[#114B5F] dark:text-[#114B5F]">
          Travel Packages
        </h1>
        <div className="container px-4 mx-auto">
          {packages.length === 0 ? (
            <div className="text-lg text-center text-gray-500 dark:text-gray-400">
              No packages found
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105 dark:bg-gray-800"
                >
                  <img
                    src={pkg.image_url || "/images/default-image.jpg"} // Use image_url from Supabase
                    alt={pkg.name}
                    className="object-cover w-full h-48 rounded-lg"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-[#114B5F] dark:text-[#114B5F]">
                    {pkg.name}
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {pkg.description}
                  </p>
                  <p className="mt-4 text-xl font-semibold text-[#114B5F] dark:text-[#114B5F]">
                    ₹{pkg.price}
                  </p>
                  <button className="w-full px-6 py-2 mt-6 text-white bg-[#114B5F] rounded-lg hover:bg-[#0D3A4A] transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Packages;
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // import the Firebase config
import Navbar from "../components/Navbar"; // Assuming Navbar component is in 'components'
import Footer from "../components/Footer"; // Assuming Footer component is in 'components'
import '../app/globals.css';


const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "packages"));
        const fetchedPackages = querySnapshot.docs.map(doc => doc.data());
        setPackages(fetchedPackages);
      } catch (error) {
        console.error("Error fetching packages: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Packages Section */}
      <div className="packages-page py-8">
        <h1 className="text-center text-3xl mb-8">Travel Packages</h1>
        <div className="container mx-auto px-4">
          {packages.length === 0 ? (
            <div className="text-center text-lg text-gray-500">No data found</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div key={index} className="package-card bg-white p-4 shadow-md rounded-lg">
                  <img
                    src={pkg.image || "/images/default-image.jpg"} // Default image if no image provided
                    alt={pkg.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h2 className="mt-4 text-xl font-bold">{pkg.name}</h2>
                  <p className="text-gray-500">{pkg.description}</p>
                  <p className="mt-2 text-lg text-teal-600">{`₹${pkg.price}`}</p>
                  <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md">Book Now</button>
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

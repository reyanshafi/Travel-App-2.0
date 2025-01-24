import { useState, useEffect } from "react";
import supabase from "../../../supabaseClient"; // Import Supabase client
import AdminHeader from "./AdminHeader";
import { FaTrash, FaPlus } from "react-icons/fa"; // Import icons
import '../../app/globals.css';

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({
    name: "",
    price: "",
    description: "",
    days: "",
    nights: "",
    image: null, // For image upload
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        // Fetch packages from Supabase
        const { data, error } = await supabase
          .from("packages") // Replace with your Supabase table name
          .select("*"); // Fetch all columns

        if (error) throw error;

        // Set the fetched packages to state
        setPackages(data);
      } catch (err) {
        setError("Error fetching packages");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleAddPackage = async () => {
    // Check if the user is authenticated
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("You must be logged in to add a package.");
      return;
    }
  
    console.log("User:", user);
  
    const { data: { session } } = await supabase.auth.getSession();
    console.log("Session:", session);
  
    if (!newPackage.name || !newPackage.price || !newPackage.description || !newPackage.days || !newPackage.nights || !newPackage.image) {
      setError("All fields are required!");
      return;
    }
  
    setLoading(true);
    setError("");
    try {
      // Upload image to Supabase Storage
      const { data: imageData, error: imageError } = await supabase
        .storage
        .from("packages") // Replace with your Supabase bucket name
        .upload(`images/${newPackage.image.name}`, newPackage.image);
  
      if (imageError) throw imageError;
  
      // Get the image URL
      const { data: imageUrl } = supabase
        .storage
        .from("packages")
        .getPublicUrl(imageData.path);
  
      // Log the payload
      console.log("Inserting package:", {
        name: newPackage.name,
        price: newPackage.price,
        description: newPackage.description,
        days: newPackage.days,
        nights: newPackage.nights,
        image_url: imageUrl.publicUrl,
      });
  
      // Add package to Supabase Database
      const { data, error } = await supabase
        .from("packages")
        .insert([{
          name: newPackage.name,
          price: newPackage.price,
          description: newPackage.description,
          days: newPackage.days,
          nights: newPackage.nights,
          image_url: imageUrl.publicUrl, // Save the image URL
        }]);
  
      if (error) throw error;
  
      // Reset form
      setNewPackage({
        name: "",
        price: "",
        description: "",
        days: "",
        nights: "",
        image: null,
      });
  
      setMessage("Package added successfully!");
  
      // Refresh package list
      const { data: updatedPackages } = await supabase
        .from("packages")
        .select("*");
      setPackages(updatedPackages);
    } catch (error) {
      console.error("Error adding package:", error);
      setError("Error adding package: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDeletePackage = async (id) => {
    setLoading(true);
    try {
      // Delete package from Supabase Database
      const { error } = await supabase
        .from("packages")
        .delete()
        .eq("id", id); // Delete the package with the specified ID

      if (error) throw error;

      setMessage("Package deleted successfully!");

      // Refresh package list
      const { data: updatedPackages } = await supabase
        .from("packages")
        .select("*");
      setPackages(updatedPackages);
    } catch (error) {
      setError("Error deleting package: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPackage({ ...newPackage, image: file });
    }
  };

  return (
    <div className="container px-8 py-6 mx-auto admin-packages">
      <AdminHeader />

      <h1 className="mb-6 text-3xl font-bold text-[#114B5F]">Manage Packages</h1>

      {/* Error or Success Message */}
      {error && <p className="mb-4 text-red-500">{error}</p>}
      {message && <p className="mb-4 text-green-500">{message}</p>}

      {/* Add New Package Form */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-[#114B5F]">Add New Package</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Package Name</label>
            <input
              type="text"
              value={newPackage.name}
              onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
              placeholder="Package Name"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              value={newPackage.price}
              onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
              placeholder="Price"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={newPackage.description}
              onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Days</label>
            <input
              type="text"
              value={newPackage.days}
              onChange={(e) => setNewPackage({ ...newPackage, days: e.target.value })}
              placeholder="Number of Days"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Nights</label>
            <input
              type="text"
              value={newPackage.nights}
              onChange={(e) => setNewPackage({ ...newPackage, nights: e.target.value })}
              placeholder="Number of Nights"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleAddPackage}
            disabled={loading}
            className={`flex items-center justify-center w-full px-6 py-2 text-white bg-[#114B5F] rounded-md ${
              loading ? "bg-[#0D3A4A]" : "hover:bg-[#0D3A4A]"
            } transition`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
            ) : (
              <>
                <FaPlus className="mr-2" />
                Add Package
              </>
            )}
          </button>
        </div>
      </div>

      {/* Package List */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="flex items-center justify-center col-span-3">
            <div className="w-12 h-12 border-4 border-[#114B5F] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          packages.map((pkg) => (
            <div
              key={pkg.id}
              className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-md hover:scale-105"
            >
              {pkg.image_url && (
                <img
                  src={pkg.image_url}
                  alt={pkg.name}
                  className="object-cover w-full h-48 mb-4 rounded-lg"
                />
              )}
              <h2 className="text-xl font-bold text-[#114B5F]">{pkg.name}</h2>
              <p className="mt-2 text-gray-600">{pkg.description}</p>
              <p className="mt-2 text-gray-600">{`${pkg.days} Days / ${pkg.nights} Nights`}</p>
              <p className="mt-2 text-lg font-semibold text-[#114B5F]">₹{pkg.price}</p>
              <button
                onClick={() => handleDeletePackage(pkg.id)}
                className="flex items-center justify-center w-full px-4 py-2 mt-4 text-white transition bg-red-600 rounded-md hover:bg-red-500"
              >
                <FaTrash className="mr-2" />
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManagePackages;
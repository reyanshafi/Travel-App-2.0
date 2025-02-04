import { useState, useEffect } from "react";
import supabase from "../../../supabaseClient";
import AdminHeader from "./AdminHeader";
import { FaTrash, FaPlus, FaEdit, FaImage } from "react-icons/fa";
import '../../app/globals.css';

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({
    name: "",
    price: "",
    description: "",
    days: "",
    nights: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editingPackage, setEditingPackage] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("packages")
          .select("*");

        if (error) throw error;
        setPackages(data);
      } catch (err) {
        setError("Error fetching packages");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleAddOrUpdatePackage = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("Authentication required");
      return;
    }

    if (!newPackage.name || !newPackage.price || !newPackage.description || !newPackage.days || !newPackage.nights) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let imageUrl = null;
      if (newPackage.image) {
        const { data: imageData, error: imageError } = await supabase.storage
          .from("packages")
          .upload(`images/${Date.now()}_${newPackage.image.name}`, newPackage.image);

        if (imageError) throw imageError;

        const { data: imageUrlData } = supabase.storage
          .from("packages")
          .getPublicUrl(imageData.path);

        imageUrl = imageUrlData.publicUrl;
      }

      const packageData = {
        name: newPackage.name,
        price: newPackage.price,
        description: newPackage.description,
        days: newPackage.days,
        nights: newPackage.nights,
        image_url: imageUrl || editingPackage?.image_url,
      };

      if (editingPackage) {
        const { error } = await supabase
          .from("packages")
          .update(packageData)
          .eq("id", editingPackage.id);
        if (error) throw error;
        setMessage("Package updated successfully");
      } else {
        const { error } = await supabase
          .from("packages")
          .insert([packageData]);
        if (error) throw error;
        setMessage("Package added successfully");
      }

      const { data: updatedPackages } = await supabase
        .from("packages")
        .select("*");
      setPackages(updatedPackages);

      setNewPackage({
        name: "",
        price: "",
        description: "",
        days: "",
        nights: "",
        image: null,
      });
      setEditingPackage(null);
      setIsEditModalOpen(false);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePackage = async (id) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("packages")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setMessage("Package deleted successfully");
      const { data: updatedPackages } = await supabase
        .from("packages")
        .select("*");
      setPackages(updatedPackages);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setNewPackage({ ...newPackage, image: file });
  };

  const handleEditPackage = (pkg) => {
    setNewPackage({
      name: pkg.name,
      price: pkg.price,
      description: pkg.description,
      days: pkg.days,
      nights: pkg.nights,
      image: null,
    });
    setEditingPackage(pkg);
    setIsEditModalOpen(true);
  };

  const EditPackageModal = ({ isOpen, onClose, packageData }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg">
          <h2 className="mb-6 text-2xl font-semibold text-blue-950">
            Edit Package
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Package Name
                </label>
                <input
                  type="text"
                  value={newPackage.name}
                  onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                  className="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Himalayan Adventure"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Price
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={newPackage.price}
                    onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                    className="w-full py-2 pl-8 pr-4 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="29999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Description
                </label>
                <textarea
                  value={newPackage.description}
                  onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 mt-1 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Describe the package..."
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-950">
                    Days
                  </label>
                  <input
                    type="number"
                    value={newPackage.days}
                    onChange={(e) => setNewPackage({ ...newPackage, days: e.target.value })}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-950">
                    Nights
                  </label>
                  <input
                    type="number"
                    value={newPackage.nights}
                    onChange={(e) => setNewPackage({ ...newPackage, nights: e.target.value })}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Package Image
                </label>
                <div className="flex items-center justify-center w-full mt-1">
                  <label className="flex flex-col w-full p-6 transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-orange-600">
                    <div className="space-y-1 text-center">
                      <FaImage className="w-8 h-8 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-600">
                        {newPackage.image 
                          ? newPackage.image.name 
                          : 'Click to upload image'}
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG up to 2MB
                      </p>
                    </div>
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <button
                onClick={handleAddOrUpdatePackage}
                disabled={loading}
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-100"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                ) : (
                  <>
                    <FaEdit className="w-5 h-5 mr-2" />
                    Update Package
                  </>
                )}
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute p-2 text-gray-500 top-4 right-4 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mt-20 mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-950 sm:text-4xl">
            Manage Travel Packages
          </h1>
          <p className="mt-2 text-gray-600">
            Create and update tour packages for your travelers
          </p>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="p-4 mb-6 text-red-700 bg-red-100 border border-red-200 rounded-lg">
            {error}
          </div>
        )}
        {message && (
          <div className="p-4 mb-6 text-green-700 bg-green-100 border border-green-200 rounded-lg">
            {message}
          </div>
        )}

        {/* Package Form */}
        <div className="p-6 mb-8 bg-white border border-gray-200 shadow-sm rounded-xl">
          <h2 className="mb-6 text-2xl font-semibold text-blue-950">
            Create New Package
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Package Name
                </label>
                <input
                  type="text"
                  value={newPackage.name}
                  onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Himalayan Adventure"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Price
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={newPackage.price}
                    onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                    className="w-full py-2 pl-8 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="29999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Description
                </label>
                <textarea
                  value={newPackage.description}
                  onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Describe the package..."
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-950">
                    Days
                  </label>
                  <input
                    type="number"
                    value={newPackage.days}
                    onChange={(e) => setNewPackage({ ...newPackage, days: e.target.value })}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-950">
                    Nights
                  </label>
                  <input
                    type="number"
                    value={newPackage.nights}
                    onChange={(e) => setNewPackage({ ...newPackage, nights: e.target.value })}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Package Image
                </label>
                <div className="flex items-center justify-center w-full mt-1">
                  <label className="flex flex-col w-full p-6 transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-orange-600">
                    <div className="space-y-1 text-center">
                      <FaImage className="w-8 h-8 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-600">
                        {newPackage.image 
                          ? newPackage.image.name 
                          : 'Click to upload image'}
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG up to 2MB
                      </p>
                    </div>
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <button
                onClick={handleAddOrUpdatePackage}
                disabled={loading}
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-100"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                ) : (
                  <>
                    <FaPlus className="w-5 h-5 mr-2" />
                    Create Package
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="flex items-center justify-center col-span-3 py-12">
              <div className="w-12 h-12 border-4 border-orange-600 rounded-full border-t-transparent animate-spin" />
            </div>
          ) : (
            packages.map((pkg) => (
              <div
                key={pkg.id}
                className="overflow-hidden transition-shadow bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md"
              >
                {pkg.image_url && (
                  <div className="bg-gray-100 aspect-video">
                    <img
                      src={pkg.image_url}
                      alt={pkg.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-950">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {pkg.description}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        Duration
                      </span>
                      <span className="text-blue-950">
                        {pkg.days}D/{pkg.nights}N
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        Price
                      </span>
                      <span className="text-lg font-semibold text-orange-600">
                        ₹{pkg.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <button
                      onClick={() => handleEditPackage(pkg)}
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-lg text-blue-950 border-blue-950 hover:bg-blue-50"
                    >
                      <FaEdit className="w-4 h-4 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeletePackage(pkg.id)}
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      <FaTrash className="w-4 h-4 mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Edit Package Modal */}
      <EditPackageModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        packageData={editingPackage}
      />
    </div>
  );
};

export default ManagePackages;
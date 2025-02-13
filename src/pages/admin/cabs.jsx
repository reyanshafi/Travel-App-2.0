import { useState, useEffect } from "react";
import supabase from "../../../supabaseClient";
import AdminHeader from "./AdminHeader";
import { FaTrash, FaPlus, FaEdit, FaImage } from "react-icons/fa";
import '../../app/globals.css';

const ManageCabs = () => {
  const [cabs, setCabs] = useState([]);
  const [newCab, setNewCab] = useState({
    name: "",
    type: "",
    seats: "",
    price: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editingCab, setEditingCab] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchCabs = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("cabs")
          .select("*");

        if (error) throw error;
        setCabs(data);
      } catch (err) {
        setError("Error fetching cabs");
      } finally {
        setLoading(false);
      }
    };

    fetchCabs();
  }, []);

  const handleAddOrUpdateCab = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("Authentication required");
      return;
    }

    if (!newCab.name || !newCab.type || !newCab.seats || !newCab.price || !newCab.description) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let imageUrl = null;
      if (newCab.image) {
        const { data: imageData, error: imageError } = await supabase.storage
          .from("cabs")
          .upload(`images/${Date.now()}_${newCab.image.name}`, newCab.image);

        if (imageError) throw imageError;

        const { data: imageUrlData } = supabase.storage
          .from("cabs")
          .getPublicUrl(imageData.path);

        imageUrl = imageUrlData.publicUrl;
      }

      const cabData = {
        name: newCab.name,
        type: newCab.type,
        seats: newCab.seats,
        price: newCab.price,
        description: newCab.description,
        image_url: imageUrl || editingCab?.image_url,
      };

      if (editingCab) {
        const { error } = await supabase
          .from("cabs")
          .update(cabData)
          .eq("id", editingCab.id);
        if (error) throw error;
        setMessage("Cab updated successfully");
      } else {
        const { error } = await supabase
          .from("cabs")
          .insert([cabData]);
        if (error) throw error;
        setMessage("Cab added successfully");
      }

      const { data: updatedCabs } = await supabase
        .from("cabs")
        .select("*");
      setCabs(updatedCabs);

      setNewCab({
        name: "",
        type: "",
        seats: "",
        price: "",
        description: "",
        image: null,
      });
      setEditingCab(null);
      setIsEditModalOpen(false);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCab = async (id) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("cabs")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setMessage("Cab deleted successfully");
      const { data: updatedCabs } = await supabase
        .from("cabs")
        .select("*");
      setCabs(updatedCabs);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setNewCab({ ...newCab, image: file });
  };

  const handleEditCab = (cab) => {
    setNewCab({
      name: cab.name,
      type: cab.type,
      seats: cab.seats,
      price: cab.price,
      description: cab.description,
      image: null,
    });
    setEditingCab(cab);
    setIsEditModalOpen(true);
  };

  const EditCabModal = ({ isOpen, onClose, cabData }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg">
          <h2 className="mb-6 text-2xl font-semibold text-blue-950">
            Edit Cab
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Cab Name
                </label>
                <input
                  type="text"
                  value={newCab.name}
                  onChange={(e) => setNewCab({ ...newCab, name: e.target.value })}
                  className="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Toyota Innova"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Type
                </label>
                <input
                  type="text"
                  value={newCab.type}
                  onChange={(e) => setNewCab({ ...newCab, type: e.target.value })}
                  className="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="SUV"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Seats
                </label>
                <input
                  type="number"
                  value={newCab.seats}
                  onChange={(e) => setNewCab({ ...newCab, seats: e.target.value })}
                  className="w-full px-4 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="7"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Price (per day)
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={newCab.price}
                    onChange={(e) => setNewCab({ ...newCab, price: e.target.value })}
                    className="w-full py-2 pl-8 pr-4 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="2000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Description
                </label>
                <textarea
                  value={newCab.description}
                  onChange={(e) => setNewCab({ ...newCab, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 mt-1 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Describe the cab..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Cab Image
                </label>
                <div className="flex items-center justify-center w-full mt-1">
                  <label className="flex flex-col w-full p-6 transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-orange-600">
                    <div className="space-y-1 text-center">
                      <FaImage className="w-8 h-8 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-600">
                        {newCab.image 
                          ? newCab.image.name 
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
                onClick={handleAddOrUpdateCab}
                disabled={loading}
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-100"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                ) : (
                  <>
                    <FaEdit className="w-5 h-5 mr-2" />
                    Update Cab
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
            Manage Cab Services
          </h1>
          <p className="mt-2 text-gray-600">
            Add, update, or delete cab services for your travelers
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

        {/* Cab Form */}
        <div className="p-6 mb-8 bg-white border border-gray-200 shadow-sm rounded-xl">
          <h2 className="mb-6 text-2xl font-semibold text-blue-950">
            Create New Cab
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Cab Name
                </label>
                <input
                  type="text"
                  value={newCab.name}
                  onChange={(e) => setNewCab({ ...newCab, name: e.target.value })}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Toyota Innova"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Type
                </label>
                <input
                  type="text"
                  value={newCab.type}
                  onChange={(e) => setNewCab({ ...newCab, type: e.target.value })}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="SUV"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Seats
                </label>
                <input
                  type="number"
                  value={newCab.seats}
                  onChange={(e) => setNewCab({ ...newCab, seats: e.target.value })}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="7"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Price (per day)
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={newCab.price}
                    onChange={(e) => setNewCab({ ...newCab, price: e.target.value })}
                    className="w-full py-2 pl-8 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="2000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Description
                </label>
                <textarea
                  value={newCab.description}
                  onChange={(e) => setNewCab({ ...newCab, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Describe the cab..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Cab Image
                </label>
                <div className="flex items-center justify-center w-full mt-1">
                  <label className="flex flex-col w-full p-6 transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-orange-600">
                    <div className="space-y-1 text-center">
                      <FaImage className="w-8 h-8 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-600">
                        {newCab.image 
                          ? newCab.image.name 
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
                onClick={handleAddOrUpdateCab}
                disabled={loading}
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-100"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                ) : (
                  <>
                    <FaPlus className="w-5 h-5 mr-2" />
                    Create Cab
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Cabs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="flex items-center justify-center col-span-3 py-12">
              <div className="w-12 h-12 border-4 border-orange-600 rounded-full border-t-transparent animate-spin" />
            </div>
          ) : (
            cabs.map((cab) => (
              <div
                key={cab.id}
                className="overflow-hidden transition-shadow bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md"
              >
                {cab.image_url && (
                  <div className="bg-gray-100 aspect-video">
                    <img
                      src={cab.image_url}
                      alt={cab.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-950">
                    {cab.name}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {cab.description}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        Type
                      </span>
                      <span className="text-blue-950">
                        {cab.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        Seats
                      </span>
                      <span className="text-blue-950">
                        {cab.seats} Seater
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        Price (per day)
                      </span>
                      <span className="text-lg font-semibold text-orange-600">
                        ₹{cab.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <button
                      onClick={() => handleEditCab(cab)}
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-lg text-blue-950 border-blue-950 hover:bg-blue-50"
                    >
                      <FaEdit className="w-4 h-4 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCab(cab.id)}
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

      {/* Edit Cab Modal */}
      <EditCabModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        cabData={editingCab}
      />
    </div>
  );
};

export default ManageCabs;
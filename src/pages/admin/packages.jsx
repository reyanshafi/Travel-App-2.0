import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import AdminHeader from "./AdminHeader";
import '../../app/globals.css';

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({ name: "", price: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "packages"));
        const fetchedPackages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPackages(fetchedPackages);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Error fetching packages");
      }
    };
    fetchPackages();
  }, []);

  const handleAddPackage = async () => {
    if (!newPackage.name || !newPackage.price || !newPackage.description) {
      setError("All fields are required!");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await addDoc(collection(db, "packages"), newPackage);
      setNewPackage({ name: "", price: "", description: "" }); // Reset form
      setMessage("Package added successfully!");
      // Refresh package list
      const querySnapshot = await getDocs(collection(db, "packages"));
      const fetchedPackages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPackages(fetchedPackages);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error adding package: " + error.message);
    }
  };

  const handleDeletePackage = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "packages", id));
      setMessage("Package deleted successfully!");
      // Refresh package list
      const querySnapshot = await getDocs(collection(db, "packages"));
      const fetchedPackages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPackages(fetchedPackages);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error deleting package: " + error.message);
    }
  };

  return (
    <div className="admin-packages container mx-auto py-6 px-8">
      <AdminHeader />

      <h1 className="text-3xl font-bold text-teal-500 mb-6">Manage Packages</h1>

      {/* Error or Success Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {message && <p className="text-green-500 mb-4">{message}</p>}

      {/* Add New Package Form */}
      <div className="add-package mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl text-white mb-4">Add New Package</h2>
        <input
          type="text"
          value={newPackage.name}
          onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
          placeholder="Package Name"
          className="mb-4 p-2 w-full rounded-md text-black"
        />
        <input
          type="text"
          value={newPackage.price}
          onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
          placeholder="Price"
          className="mb-4 p-2 w-full rounded-md text-black"
        />
        <textarea
          value={newPackage.description}
          onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
          placeholder="Description"
          className="mb-4 p-2 w-full rounded-md text-black"
        />
        <button
          onClick={handleAddPackage}
          disabled={loading}
          className={`bg-teal-500 text-white px-6 py-2 rounded-md ${loading ? "bg-teal-300" : "hover:bg-teal-600"} transition`}
        >
          {loading ? "Adding..." : "Add Package"}
        </button>
      </div>

      {/* Package List */}
      <div className="package-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-3 text-center text-xl">Loading...</div>
        ) : (
          packages.map((pkg) => (
            <div key={pkg.id} className="package-item bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-teal-600">{pkg.name}</h2>
              <p className="text-gray-600">{pkg.description}</p>
              <p className="mt-2 text-lg text-teal-600">₹{pkg.price}</p>
              <button
                onClick={() => handleDeletePackage(pkg.id)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition"
              >
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

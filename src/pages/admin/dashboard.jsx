import { useEffect, useState } from "react";
import { auth } from "../../../firebaseConfig";
import { useRouter } from "next/router";
import AdminHeader from "./AdminHeader";
import '../../app/globals.css';
import Navbar from "@/components/Navbar";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/admin/login"); // Redirect to login page if not logged in
      }
    });
    return unsubscribe;
  }, [router]);

  if (!user) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <>      
    <Navbar isHeroPage={false} /> 
    <div className="bg-white min-h-screen mt-20 text-white">
      <AdminHeader />
      <div className="container  mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-center text-teal-500 mb-6">Welcome, {user.email}</h1>
        <p className="text-xl text-center text-gray-900 mb-8">Admin Dashboard</p>
        <div className="flex justify-around text-center">
          {/* Admin Controls */}
          <div className="w-80 text-center bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition">
            <h3 className="text-xl font-semibold mb-4">Manage Packages</h3>
            <p>View, add, edit, and delete travel packages.</p>
            <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-500 transition">
              Go to Packages
            </button>
          </div>

          <div className="w-80 text-center bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition">
            <h3 className="text-xl font-semibold mb-4">Manage Destinations</h3>
            <p>View, add, edit, and delete travel destinations.</p>
            <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-500 transition">
              Go to Destinations
            </button>
          </div>

          <div className="w-80 text-center bg-teal-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition">
            <h3 className="text-xl font-semibold mb-4">Manage Bookings</h3>
            <p>View and manage customer bookings and orders.</p>
            <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-500 transition">
              View Bookings
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;

import { useEffect, useState } from "react";
import supabase from "../../../supabaseClient"; // Correct import
import { useRouter } from "next/router";
import AdminHeader from "./AdminHeader";
import '../../app/globals.css';
import Navbar from "@/components/Navbar";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user); // Set the user if logged in
      } else {
        router.push("/admin/login"); // Redirect to login page if not logged in
      }
    });

    return () => subscription.unsubscribe(); // Cleanup function
  }, [router]);

  if (!user) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-[#114B5F] rounded-full loader"></div>
    </div>
  );

  return (
    <>
      <Navbar isHeroPage={false} />
      <div className="min-h-screen mt-32 bg-gray-50 dark:bg-gray-900">
        <AdminHeader />
        <div className="container px-6 py-10 mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-center text-[#114B5F] dark:text-[#114B5F]">
            Welcome, {user.name}
          </h1>
          <p className="mb-8 text-xl text-center text-gray-700 dark:text-gray-300">
            Admin Dashboard
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Admin Controls */}
            <div className="p-8 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105 dark:bg-gray-800">
              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold text-[#114B5F] dark:text-[#114B5F]">
                  Manage Packages
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  View, add, edit, and delete travel packages.
                </p>
                <button className="px-6 py-2 text-white bg-[#114B5F] rounded-lg hover:bg-[#0D3A4A] transition-colors duration-300">
                  Go to Packages
                </button>
              </div>
            </div>

            <div className="p-8 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105 dark:bg-gray-800">
              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold text-[#114B5F] dark:text-[#114B5F]">
                  Manage Destinations
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  View, add, edit, and delete travel destinations.
                </p>
                <button className="px-6 py-2 text-white bg-[#114B5F] rounded-lg hover:bg-[#0D3A4A] transition-colors duration-300">
                  Go to Destinations
                </button>
              </div>
            </div>

            <div className="p-8 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105 dark:bg-gray-800">
              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold text-[#114B5F] dark:text-[#114B5F]">
                  Manage Bookings
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  View and manage customer bookings and orders.
                </p>
                <button className="px-6 py-2 text-white bg-[#114B5F] rounded-lg hover:bg-[#0D3A4A] transition-colors duration-300">
                  View Bookings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
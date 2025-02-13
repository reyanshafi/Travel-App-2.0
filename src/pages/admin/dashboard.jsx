import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import supabase from "../../../supabaseClient";
import AdminHeader from "./AdminHeader";
import Navbar from "@/components/Navbar";
import '../../app/globals.css';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if the user is authenticated
  const checkAuth = useCallback(async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  }, []);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUser = await checkAuth();
        if (!currentUser) {
          // Redirect to login if no user is found
          router.push("/admin/login");
          return;
        }
        setUser(currentUser);
      } catch (error) {
        console.error("Auth error:", error);
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    // Listen for auth state changes (e.g., user logs out)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          // Redirect to login if the user is not authenticated
          router.push("/admin/login");
        }
      }
    );

    // Initialize auth check
    initializeAuth();

    // Cleanup subscription on unmount
    return () => subscription?.unsubscribe();
  }, [checkAuth, router]);

  // Show a loading spinner while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-bounce">
          <div className="w-12 h-12 rounded-full bg-blue-950"></div>
        </div>
      </div>
    );
  }

  // If the user is authenticated, render the dashboard
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar isHeroPage={false} /> */}
      
      <main className="bg-white ">
        <AdminHeader />
        
        <div className="container px-4 mx-auto mt-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-blue-950 md:text-5xl">
              <span className="text-orange-500">Suwida</span> Tour & Travels
            </h1>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Admin Portal</h2>
            <p className="mb-8 text-xl text-gray-600">
              Manage your travel portal content
            </p>
          </div>

          <div className="grid gap-8 mt-12 sm:grid-cols-1 lg:grid-cols-3">
            <DashboardCard 
              title="Manage Packages"
              description="Create, edit, and organize travel packages"
              actionText="View Packages"
              actionLink="/admin/packages"
            />

            <DashboardCard 
              title="Manage Gallery"
              description="Manage destination images and media content"
              actionText="View Gallery"
              actionLink="/admin/AdminGallery"
            />

            <DashboardCard 
              title="Manage Cabs"
              description="Add, edit, and organize cab services"
              actionText="View Cabs"
              actionLink="/admin/cabs"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// DashboardCard component for reusable cards
const DashboardCard = ({ title, description, actionText, actionLink }) => (
  <div className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-xl rounded-xl hover:shadow-lg hover:border-orange-600">
    <div className="text-center">
      <h3 className="mb-3 text-xl font-semibold text-blue-950">{title}</h3>
      <p className="mb-5 text-gray-600">{description}</p>
      <a
        href={actionLink}
        className="inline-block px-5 py-2.5 text-sm font-medium shadow-lg text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
        aria-label={`Go to ${title}`}
      >
        {actionText}
      </a>
    </div>
  </div>
);

export default AdminDashboard;
import { useState } from "react";
import { useRouter } from "next/router";
import supabase from "../../supabaseClient"; // Import Supabase client
import '../app/globals.css';
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Redirect to admin dashboard
      router.push("/admin/dashboard");
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-8 text-4xl font-bold text-center text-blue-950">
            Admin Login
            <div className="w-20 h-1.5 mx-auto mt-4 bg-orange-500 rounded-full"></div>
          </h2>

          {error && (
            <div className="p-2 mb-4 text-center text-white bg-red-500 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-blue-950">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900" // Added text-gray-900
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-blue-950">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900" // Added text-gray-900
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 text-lg font-semibold text-white transition-all transform bg-orange-600 rounded-md hover:bg-orange-700 hover:scale-105 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLogin;
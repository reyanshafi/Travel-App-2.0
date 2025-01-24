// components/ProtectedRoute.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../../supabaseClient";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (!session || error) {
        router.push("/admin/login"); // Redirect to login if not authenticated
      }
    };

    checkSession();
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
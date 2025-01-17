import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      await signOut(auth);
      router.push("/admin/login"); // Redirect to login page after logout
    };
    logout();
  }, [router]);

  return <div>Logging out...</div>;
};

export default Logout;

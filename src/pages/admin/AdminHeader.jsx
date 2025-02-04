import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { 
  CogIcon,
  CubeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon 
} from "@heroicons/react/24/outline";
import supabase from "../../../supabaseClient"; // Import Supabase client

const AdminHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: CogIcon },
    { name: "Packages", href: "/admin/packages", icon: CubeIcon },
    { name: "Gallery", href: "/admin/AdminGallery", icon: UserCircleIcon },
  ];

  // Logout function
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut(); // Sign out using Supabase
      if (error) throw error;

      // Redirect to the login page after logout
      router.push("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm ">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link 
              href="/admin/dashboard" 
              className="text-2xl font-bold transition-colors text-blue-950 hover:text-orange-600"
            >
              Suwida<span className="text-orange-600">Admin</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-1 pt-1 text-sm font-medium ${
                  router.pathname === item.href
                    ? "text-orange-600 pb-1 border-b-2 border-orange-600"
                    : "text-blue-950 hover:text-orange-600 "
                } transition-colors`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </Link>
            ))}
            <Link href='/'>
              <button  className="px-4 mt-1 text-white bg-red-600 rounded-md">Return to Website</button>
              </Link>         
               </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-blue-950 hover:text-orange-600 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            
          </div>

          {/* Logout Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleLogout} // Call handleLogout on click
              className="flex items-center px-3 py-2 text-sm font-medium transition-colors text-blue-950 hover:text-orange-600"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          as={Fragment}
          show={isMenuOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-base font-medium ${
                    router.pathname === item.href
                      ? "bg-orange-50 text-orange-600"
                      : "text-blue-950 hover:bg-gray-100 hover:text-orange-600"
                  } rounded-lg`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}

              <button
                onClick={handleLogout} // Call handleLogout on click
                className="flex items-center w-full px-3 py-2 text-base font-medium rounded-lg text-blue-950 hover:bg-gray-100 hover:text-orange-600"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
                Logout
              </button>
              <Link href='/'>
              <button  className="px-4 ml-4 text-white bg-red-600 rounded-md">Return to Website</button>
              </Link>
              
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default AdminHeader;
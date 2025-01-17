import Link from "next/link";

const AdminHeader = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-500">Admin Panel</h1>
        <nav className="space-x-6">
          <Link
            href="/admin/dashboard"
            className="text-lg text-white hover:text-teal-500 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/packages"
            className="text-lg text-white hover:text-teal-500 transition"
          >
            Manage Packages
          </Link>
          <Link
            href="/admin/logout"
            className="text-lg text-white hover:text-teal-500 transition"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;

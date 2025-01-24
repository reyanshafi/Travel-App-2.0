import Link from "next/link";

const AdminHeader = () => {
  return (
    <header className="text-white bg-[#114B5F] shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
        <nav className="space-x-6">
          <Link
            href="/admin/dashboard"
            className="text-lg text-white transition hover:text-[#90d3ec]"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/packages"
            className="text-lg text-white transition hover:text-[#7dd0ee]"
          >
            Manage Packages
          </Link>
          <Link
            href="/admin/logout"
            className="text-lg text-white transition hover:text-[#6fc7e8]"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;

import Link from 'next/link';
import { FaTachometerAlt, FaList, FaUser, FaSignOutAlt } from 'react-icons/fa';

export default function SmeSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold">SME Dashboard</h2>
      </div>
      <nav className="mt-10">
        <ul>
          <li>
            <Link href="/sme/dashboard" className="flex items-center p-4 hover:bg-gray-700 transition">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/sme/list-asset" className="flex items-center p-4 hover:bg-gray-700 transition">
              <FaList className="mr-2" /> List Asset
            </Link>
          </li>
          <li>
            <Link href="/sme/my-assets" className="flex items-center p-4 hover:bg-gray-700 transition">
              <FaUser className="mr-2" /> My Assets
            </Link>
          </li>
          <li>
            <Link href="/logout" className="flex items-center p-4 hover:bg-gray-700 transition">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

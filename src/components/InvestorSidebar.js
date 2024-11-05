
import Link from 'next/link';
import { FaTachometerAlt, FaMoneyBillWave, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

export default function InvestorSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Investor</h2>
      </div>
      <nav className="mt-10">
        <ul>
          <li>
            <Link href="/investor/dashboard" className="flex items-center p-4 hover:bg-gray-700 transition">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/investor/my-investments" className="flex items-center p-4 hover:bg-gray-700 transition">
              <FaMoneyBillWave className="mr-2" /> My Investments
            </Link>
          </li>
          <li>
            <Link href="/marketplace" className="flex items-center p-4 hover:bg-gray-700 transition">
              <FaClipboardList className="mr-2" /> Marketplace
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

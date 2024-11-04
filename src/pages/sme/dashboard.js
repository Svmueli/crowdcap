
import SmeSidebar from '../../components/SmeSidebar';
import { FaPlusCircle, FaChartLine, FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';

export default function SmeDashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SmeSidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your SME Dashboard</h1>
        <p className="mb-6">Manage your assets and track your investments.</p>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Total Assets</h2>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Total Investments</h2>
            <p className="text-2xl font-bold">KES 100,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Funding Progress</h2>
            <div className="bg-gray-300 h-2 rounded">
              <div className="bg-green-500 h-2 w-3/4 rounded"></div>
            </div>
            <p className="text-sm text-gray-500">75% funded</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold flex items-center">
            <FaPlusCircle className="mr-2" /> Quick Actions
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/sme/list-asset" className="bg-gray-200 p-4 rounded hover:bg-gray-300 transition cursor-pointer text-center">
              <p className="font-semibold">List a New Asset</p>
            </Link>
            <Link href="/sme/my-assets" className="bg-gray-200 p-4 rounded hover:bg-gray-300 transition cursor-pointer text-center">
              <p className="font-semibold">View My Assets</p>
            </Link>
            <Link href="/sme/analytics" className="bg-gray-200 p-4 rounded hover:bg-gray-300 transition cursor-pointer text-center">
              <p className="font-semibold">View Analytics</p>
            </Link>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold flex items-center">
            <FaBullhorn className="mr-2" /> Recent Activities
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="border-b py-2">Listed a new asset: Delivery Truck</li>
            <li className="border-b py-2">Received an investment of KES 10,000 for Delivery Truck</li>
            <li className="border-b py-2">Updated asset details for New Coffee Machine</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

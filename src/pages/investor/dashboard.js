import InvestorSidebar from '../../components/InvestorSidebar';
import { FaChartPie, FaClipboardList, FaMoneyBillWave } from 'react-icons/fa';
import Link from 'next/link';

export default function InvestorDashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <InvestorSidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100 pt-24"> {/* Added pt-24 for navbar offset */}
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Investor Dashboard</h1>
        <p className="mb-6">Track your investments and discover new opportunities.</p>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Total Investments</h2>
            <p className="text-2xl font-bold">KES 500,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Current Holdings</h2>
            <p className="text-2xl font-bold">5 Assets</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Recent Returns</h2>
            <p className="text-2xl font-bold">KES 50,000</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold flex items-center">
            <FaClipboardList className="mr-2" /> Quick Actions
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4 rounded hover:bg-gray-300 transition cursor-pointer">
              <Link href="/investor/my-investments">
                <p className="text-center font-semibold">View My Investments</p>
              </Link>
            </div>
            <div className="bg-gray-200 p-4 rounded hover:bg-gray-300 transition cursor-pointer">
              <Link href="/marketplace">
                <p className="text-center font-semibold">Explore New Assets</p>
              </Link>
            </div>
            <div className="bg-gray-200 p-4 rounded hover:bg-gray-300 transition cursor-pointer">
              <Link href="/investor/investment-insights">
                <p className="text-center font-semibold">Investment Insights</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Investment Overview */}
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold flex items-center">
            <FaChartPie className="mr-2" /> Investment Overview
          </h2>
          <div className="mt-4">
            <p className="font-semibold">Your Portfolio:</p>
            <ul className="space-y-2">
              <li className="border-b py-2">Asset: Delivery Truck - KES 200,000</li>
              <li className="border-b py-2">Asset: Coffee Machine - KES 150,000</li>
              <li className="border-b py-2">Asset: New Van - KES 100,000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

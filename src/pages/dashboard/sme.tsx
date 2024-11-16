import React from 'react';
import Link from 'next/link';

const SmeDashboard = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-black mb-8">SME Dashboard</h1>

        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome, Jane Smith</h2>
          <p className="text-md text-gray-600 mt-2">Manage your listed assets, track investments, and grow your business.</p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Total Assets Listed</h3>
            <p className="text-lg text-yellow-500">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Funds Raised</h3>
            <p className="text-lg text-yellow-500">KSh 300,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Pending Listings</h3>
            <p className="text-lg text-yellow-500">2</p>
          </div>
        </div>

        {/* Add New Asset Button */}
        <div className="mt-8">
          <Link href="/add-asset">
            <div className="flex items-center justify-center bg-gradient-to-r from-[#C33764] to-[#1D2671] text-white rounded-full py-3 px-8 cursor-pointer hover:bg-gradient-to-l transition-all">
              <span className="text-md font-semibold">Add New Asset</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SmeDashboard;

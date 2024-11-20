import React from 'react';
import InvestorSidebar from '../../components/Sidebar/InvestorSidebar'; // Import Investor Sidebar

const InvestorDashboard = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <InvestorSidebar />

      {/* Content Area */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-black mb-8">Investor Dashboard</h1>

        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome, John Doe</h2>
          <p className="text-md text-gray-600 mt-2">Manage your investments, track performance, and explore new opportunities.</p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Total Investments</h3>
            <p className="text-lg text-yellow-500">KSh 1,500,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Assets in Portfolio</h3>
            <p className="text-lg text-yellow-500">5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Returns This Month</h3>
            <p className="text-lg text-yellow-500">KSh 150,000</p>
          </div>
        </div>

        {/* Add New Investment Button */}
        <div className="mt-8">
          <div className="flex items-center justify-center bg-gradient-to-r from-[#C33764] to-[#1D2671] text-white rounded-full py-3 px-8 cursor-pointer hover:bg-gradient-to-l transition-all">
            <span className="text-md font-semibold">Add New Investment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorDashboard;

import React from 'react';
import SMESidebar from '../../components/Sidebar/SMESidebar'; // Import SME Sidebar

const SMEDashboard = () => {
  return (
    <section className="flex">
      {/* Sidebar */}
      <SMESidebar />

      {/* Content Area */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-black mb-8">SME Dashboard</h1>

        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome, ABC Business</h2>
          <p className="text-md text-gray-600 mt-2">Manage your business, explore investment opportunities, and track growth.</p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Total Revenue</h3>
            <p className="text-lg text-yellow-500">KSh 3,000,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Assets Tokenized</h3>
            <p className="text-lg text-yellow-500">10</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Investments Raised</h3>
            <p className="text-lg text-yellow-500">KSh 2,500,000</p>
          </div>
        </div>

        {/* Add New Asset Button */}
        <div className="mt-8">
          <div className="flex items-center justify-center bg-gradient-to-r from-[#C33764] to-[#1D2671] text-white rounded-full py-3 px-8 cursor-pointer hover:bg-gradient-to-l transition-all">
            <span className="text-md font-semibold">Add New Asset</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMEDashboard;

import React from 'react';
import Footer from '../components/Footer';

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Bar with Logo, Title, and Add Listing Button */}
      <div className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
        <h1 className="text-3xl font-extrabold text-white">CrowdCap</h1>
        <h2 className="text-2xl font-semibold text-white">Marketplace</h2>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-yellow-600">
          + Add Listing
        </button>
      </div>

      {/* Header Section */}
      <div className="p-8 bg-gray-800 text-center">
        <p className="text-lg text-gray-400">
          Browse through essential assets and equipment for SMEs in Kenya.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Enter location or type"
            className="flex-1 p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
          />
          <select className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-400">
            <option>Asset Type</option>
            <option>Agriculture & Equipment</option>
            <option>Real Estate and Infrastructure</option>
            <option>Manufacturing and Industrial Assets</option>
            <option>Inventory and Consumables</option>
            <option>Healthcare and Medical Equipment</option>
          </select>
          <button className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600">
            Search
          </button>
        </div>
      </div>

      {/* Listings Section */}
      <div className="p-8 space-y-12">
        {/* Agriculture & Equipment */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Agriculture & Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/path/to/agriculture-image.jpg" alt="Agriculture Equipment" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xl font-semibold text-yellow-500">Ksh 300,000</p>
                <p className="text-gray-400 mt-2">Tractor, Eldoret</p>
                <div className="flex items-center space-x-4 mt-4 text-gray-400">
                  <span>🚜 Heavy-duty</span>
                  <span>🌾 For large-scale farming</span>
                </div>
              </div>
            </div>
            {/* Repeat Card with different data */}
          </div>
        </div>

        {/* Real Estate and Infrastructure */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Real Estate and Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/path/to/real-estate-image.jpg" alt="Real Estate" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xl font-semibold text-yellow-500">Ksh 5,000,000</p>
                <p className="text-gray-400 mt-2">Retail Space, Nairobi</p>
                <div className="flex items-center space-x-4 mt-4 text-gray-400">
                  <span>🏬 Prime location</span>
                  <span>📏 1500 sq ft</span>
                </div>
              </div>
            </div>
            {/* Repeat Card with different data */}
          </div>
        </div>

        {/* Manufacturing and Industrial Assets */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Manufacturing and Industrial Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/path/to/manufacturing-image.jpg" alt="Manufacturing Equipment" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xl font-semibold text-yellow-500">Ksh 1,000,000</p>
                <p className="text-gray-400 mt-2">Industrial Mixer, Thika</p>
                <div className="flex items-center space-x-4 mt-4 text-gray-400">
                  <span>⚙️ High capacity</span>
                  <span>🏭 Durable build</span>
                </div>
              </div>
            </div>
            {/* Repeat Card with different data */}
          </div>
        </div>

        {/* Inventory and Consumables */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Inventory and Consumables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/path/to/inventory-image.jpg" alt="Inventory" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xl font-semibold text-yellow-500">Ksh 150,000</p>
                <p className="text-gray-400 mt-2">Bulk Stock, Mombasa</p>
                <div className="flex items-center space-x-4 mt-4 text-gray-400">
                  <span>📦 Wholesale price</span>
                  <span>🏪 Ready for sale</span>
                </div>
              </div>
            </div>
            {/* Repeat Card with different data */}
          </div>
        </div>

        {/* Healthcare and Medical Equipment */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Healthcare and Medical Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="/path/to/medical-equipment.jpg" alt="Medical Equipment" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xl font-semibold text-yellow-500">Ksh 800,000</p>
                <p className="text-gray-400 mt-2">X-Ray Machine, Kisumu</p>
                <div className="flex items-center space-x-4 mt-4 text-gray-400">
                  <span>🏥 High resolution</span>
                  <span>🔋 Battery backup</span>
                </div>
              </div>
            </div>
            {/* Repeat Card with different data */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Marketplace;

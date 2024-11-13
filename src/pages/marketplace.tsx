import { FC } from 'react';

const Marketplace: FC = () => {
  return (
    <div className="relative w-full max-w-[1440px] h-auto bg-[#211F1F]">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 bg-[#0B0B0B] box-shadow-lg rounded-xl max-w-[1349px] mx-auto z-0">
        <div className="text-white font-bold text-2xl">CrowdCap</div>
        <nav className="flex-1 text-center">
          <a href="#" className="text-white font-semibold text-xl">
            Marketplace
          </a>
        </nav>
        <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
          Add Listing
        </button>
      </header>

      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center text-white absolute top-[151px] left-1/2 transform -translate-x-1/2"
        style={{
          width: '1340px',
          height: '378px',
          backgroundImage: 'url(/assets/hero-background.jpg)', // Ensure correct image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center p-4">
          <h1 className="text-4xl font-bold">Discover Assets with CrowdCap</h1>
          <p className="text-lg mt-2">Invest in Kenyan SMEs. Contribute to community growth.</p>
        </div>
      </div>

      {/* Search Section (Find Property Field) */}
      <div
        className="flex flex-row justify-center items-center p-4 gap-4 absolute top-[calc(50%-82px/2-1016.5px)] left-1/2 transform -translate-x-1/2 bg-white opacity-90 shadow-lg rounded-full"
        style={{
          width: '1240px',
          height: '82px',
        }}
      >
        <input
          type="text"
          placeholder="Enter City, Zip, Address"
          className="w-full p-3 rounded-lg text-black"
        />
        <div className="flex space-x-4">
          <select className="p-3 rounded-lg bg-white text-black">
            <option>Select Property Type</option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
          <select className="p-3 rounded-lg bg-white text-black">
            <option>Select Budget</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
            Search
          </button>
        </div>
      </div>

      {/* Other Featured Assets Section */}
      <section className="p-6 mt-24">
        <h2 className="text-white text-2xl font-bold">Other Featured Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Asset Card Example */}
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/property1.jpg" // Ensure image exists
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">KSh 22,250</h3>
              <p className="text-sm">Penthouse, Nairobi City</p>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/property2.jpg"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">KSh 654,250</h3>
              <p className="text-sm">Semi-detached house, Kiambu</p>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/property3.jpg"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">KSh 926,250</h3>
              <p className="text-sm">Bungalow, Kisumu</p>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/property4.jpg"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">KSh 850,000</h3>
              <p className="text-sm">Villa, Eldoret</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Picks Section */}
      <section className="p-6 bg-[#1D1D1D]">
        <h2 className="text-white text-2xl font-bold">Hot Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Asset Card Example */}
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/property5.jpg"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">KSh 1,500,000</h3>
              <p className="text-sm">Office space, Nairobi</p>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/property6.jpg"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">KSh 800,000</h3>
              <p className="text-sm">Retail unit, Mombasa</p>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/property7.jpg"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">KSh 1,200,000</h3>
              <p className="text-sm">Warehouse, Nakuru</p>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/property8.jpg"
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">KSh 2,000,000</h3>
              <p className="text-sm">Business center, Kisumu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#211F1F] text-white text-center p-6">
        <p>&copy; 2024 CrowdCap. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Marketplace;

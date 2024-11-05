import { useState } from 'react';
import { FaSearch, FaHeart } from 'react-icons/fa';
import FeaturedAssets from '../components/FeaturedAssets';

export default function Marketplace() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-emerald-600">Explore Investment Opportunities</h1>
        
        {/* Search Bar */}
        <div className="flex justify-center mt-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full py-3 pl-4 pr-10 rounded-full border border-gray-300 shadow focus:outline-none focus:border-emerald-500 transition"
            />
            <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Featured Assets */}
        <FeaturedAssets />
      </div>
    </div>
  );
}

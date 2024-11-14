import React from 'react';
import { FaHandshake, FaRegBuilding, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left side - Text */}
        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          {/* Gradient text for the heading */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C33764] to-[#1D2671]">
            Introducing CrowdCap
          </h1>
          
          <p className="text-lg text-black">
            Empowering Small & Micro Enterprises (SMEs) in Kenya to grow and scale through fractional ownership. Invest in Kenyan SMEs and contribute to community growth.
          </p>

          <p className="text-md text-black mb-6">
            Join our platform to be part of a movement that transforms local businesses into thriving, community-backed assets. Whether you're an investor or an SME, CrowdCap offers an innovative way to invest and grow together.
          </p>

          <div className="flex space-x-6 mt-6">
            {/* Join as Investor Button with reduced size */}
            <div className="flex items-center justify-center bg-yellow-500 text-black rounded-lg p-4 shadow-lg w-40 hover:bg-yellow-400 transition-colors cursor-pointer">
              <h3 className="text-md font-semibold text-white">Join as Investor</h3>
            </div>

            {/* Register as SME Button - Black with white text */}
            <div className="flex items-center justify-center bg-black text-white rounded-lg p-4 shadow-lg w-40 hover:bg-gray-800 transition-colors cursor-pointer">
              <h3 className="text-md font-semibold text-white">Register as SME</h3>
            </div>
          </div>

          {/* Discover Assets Button with Arrow Icon */}
          <div className="mt-6 flex items-center justify-center bg-gradient-to-r from-[#C33764] to-[#1D2671] text-white rounded-full py-3 px-8 cursor-pointer hover:bg-gradient-to-l transition-all">
            <Link href="/marketplace" className="flex items-center space-x-3">
              <span className="text-md font-semibold">Discover Assets</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-start">
          <img src="/images/background.svg" alt="CrowdCap Illustration" className="w-full h-auto" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Our Impact So Far</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-yellow-500">500+</h3>
              <p className="text-lg font-semibold">Investors</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-yellow-500">200+</h3>
              <p className="text-lg font-semibold">SMEs Registered</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
              <p className="text-lg font-semibold">Businesses Funded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

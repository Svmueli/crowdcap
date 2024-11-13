import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen relative">
      {/* Logo on the Top Left */}
      <div className="absolute top-6 left-6">
        <h1 className="text-3xl font-extrabold text-black">CrowdCap</h1>
      </div>

      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start px-16 bg-white">
        <h2 className="text-5xl font-bold mb-4">Introducing CrowdCap</h2>
        <p className="text-lg mb-6">
          Empowering small and medium businesses in Kenya to grow and scale through fractional ownership. Invest in local businesses and be part of their success.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => router.push('/signup/investor')}
            className="bg-gold text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600"
          >
            Join as Investor
          </button>
          <button
            onClick={() => router.push('/signup/sme')}
            className="bg-gold text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600"
          >
            Register SME
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-2">Join the platform that connects you to Kenya's growth. No commitment needed.</p>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-black text-white flex justify-center items-center relative">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/images/background.svg" alt="Background" className="h-full w-full object-cover opacity-80" />
        </div>

        {/* Header Links */}
        <div className="absolute top-6 right-8 flex space-x-6 text-lg">
          <a href="#features" className="hover:text-gold">Features</a>
          <a href="#about" className="hover:text-gold">About us</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-lg font-bold hover:bg-gold">
            Marketplace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

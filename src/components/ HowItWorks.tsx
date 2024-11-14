import React from 'react';
import { FaUserPlus, FaWallet, FaHandsHelping } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-black text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Step 1: Join the Platform */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl text-center">
          <FaUserPlus className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Step 1: Join the Platform</h3>
          <p>Create an account as an investor or SME and start your journey towards fractional ownership.</p>
        </div>

        {/* Step 2: Invest or Register */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl text-center">
          <FaWallet className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Step 2: Invest or Register</h3>
          <p>Investors can explore available assets, while SMEs can list their assets for fractional ownership.</p>
        </div>

        {/* Step 3: Grow Together */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl text-center">
          <FaHandsHelping className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Step 3: Grow Together</h3>
          <p>Collaborate with the community, track investments, and witness the growth of local businesses.</p>
        </div>
      </div>

      {/* Additional Section Info */}
      <div className="mt-12 text-center text-lg text-gray-700">
        <p>Experience a seamless process with CrowdCap, where investors and SMEs join forces for a prosperous future. Let's grow together!</p>
      </div>
    </section>
  );
};

export default HowItWorks;

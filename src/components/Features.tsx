import React from 'react';
import { FaRegHandshake, FaCoins, FaUsers, FaLock } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="py-16 px-4 md:px-12 max-w-[1200px] mx-auto">
      <h2 className="text-black text-3xl font-bold text-center mb-12">CrowdCap Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
          <FaRegHandshake className="text-4xl text-yellow-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Tokenized Assets</h3>
          <p>Invest in tokenized assets, supporting local businesses through fractional ownership.</p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
          <FaCoins className="text-4xl text-yellow-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Secure Transactions</h3>
          <p>All transactions are secured with blockchain technology, ensuring transparency and trust.</p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
          <FaUsers className="text-4xl text-yellow-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Community Growth</h3>
          <p>Empower communities to invest in local businesses and foster sustainable growth.</p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
          <FaLock className="text-4xl text-yellow-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Privacy & Security</h3>
          <p>Your data and investments are protected by industry-leading security measures.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

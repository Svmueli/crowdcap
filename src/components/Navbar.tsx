import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white text-black py-4 px-8 shadow-md">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link href="/">CrowdCap</Link> {/* Enlarged Logo */}
        </div>
        <div className="flex space-x-8">
        <Link href="#marketplace" className="text-lg font-bold bg-gradient-to-r from-[#C33764] to-[#1D2671] text-white px-6 py-2 rounded-full hover:bg-gradient-to-l transition-colors">
            Marketplace
          </Link>

          <Link href="#features" className="text-lg font-bold hover:text-gray-600">Features</Link>
          <Link href="#pricing" className="text-lg font-bold hover:text-gray-600">Pricing</Link>
          <Link href="#contact" className="text-lg font-bold hover:text-gray-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

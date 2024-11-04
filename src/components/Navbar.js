// src/components/Navbar.js

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          CrowdCap
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-emerald-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex ${isOpen ? "block" : "hidden"} flex-grow justify-center`}>
          <Link href="/marketplace" className="text-lg text-gray-600 hover:text-emerald-600">
            Marketplace
          </Link>
        </div>

        {/* Other Links */}
        <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
          <Link href="/investor/signup" className="flex items-center mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-emerald-600 mr-4">
            For Investors
          </Link>
          <Link href="/sme/signup" className="flex items-center mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-emerald-600">
            For SMEs
          </Link>
        </div>
      </div>
    </nav>
  );
}

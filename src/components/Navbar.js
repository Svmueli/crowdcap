import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Gradient */}
        <Link href="/" className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-yellow-400 bg-clip-text text-transparent">
          CrowdCap
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-emerald-600 hover:text-emerald-500 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex flex-grow justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/marketplace" className="mx-4 text-lg font-semibold text-gray-700 hover:text-emerald-600 transition">
            Marketplace
          </Link>
          <Link href="/about-us" className="mx-4 text-lg font-semibold text-gray-700 hover:text-emerald-600 transition">
            About Us
          </Link>
          <Link href="/contact" className="mx-4 text-lg font-semibold text-gray-700 hover:text-emerald-600 transition">
            Contact
          </Link>
        </div>

        {/* User Links */}
        <div className={`lg:flex items-center space-x-4 ${isOpen ? 'block mt-4' : 'hidden'}`}>
          <Link href="/investor/signup" className="px-4 py-2 text-lg font-semibold text-gray-700 hover:text-emerald-600 transition">
            For Investors
          </Link>
          <Link href="/sme/signup" className="px-4 py-2 text-lg font-semibold text-gray-700 hover:text-emerald-600 transition">
            For SMEs
          </Link>
        </div>
      </div>
    </nav>
  );
}

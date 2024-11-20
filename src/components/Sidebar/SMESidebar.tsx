import React from 'react';
import { FaHome, FaClipboardList, FaChartBar, FaWallet, FaCogs, FaSignOutAlt, FaUsers, FaTags } from 'react-icons/fa';
import Link from 'next/link';

const SMESidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-black p-6 shadow-xl">
      {/* Logo */}
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-2xl font-bold">CrowdCap</h2>
      </div>

      {/* Sidebar Links */}
      <ul className="space-y-6">
        <li>
          <Link href="/dashboard/sme">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaHome className="text-gradient" />
              <span>SME Dashboard</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/asset-owner">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaUsers className="text-gradient" />
              <span>Asset Owner</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/overview">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaClipboardList className="text-gradient" />
              <span>Overview</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/portfolio">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaTags className="text-gradient" />
              <span>Portfolio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/marketplace">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaClipboardList className="text-gradient" />
              <span>Marketplace</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaChartBar className="text-gradient" />
              <span>Analytics</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/wallet">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaWallet className="text-gradient" />
              <span>Wallet</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaCogs className="text-gradient" />
              <span>Settings</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/signout">
            <div className="flex items-center space-x-4 text-lg hover:text-gray-400 cursor-pointer">
              <FaSignOutAlt className="text-gradient" />
              <span>Sign Out</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SMESidebar;

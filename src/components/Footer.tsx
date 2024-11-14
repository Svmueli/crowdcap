import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      {/* Wrapper div to limit the width of the horizontal line */}
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Horizontal Line */}
        <div className="border-t border-gray-200 mb-8"></div> 
      </div>

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* CrowdCap Information */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">CrowdCap</h2>
            <p className="text-sm mt-2">Empowering Small & Micro Enterprises through Fractional Ownership</p>
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
            <a href="#features" className="text-lg hover:text-gray-600">Features</a>
            <a href="#pricing" className="text-lg hover:text-gray-600">Pricing</a>
            <a href="#contact" className="text-lg hover:text-gray-600">Contact</a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">
            CrowdCap is a registered Kenyan company under the Companies Act. We are committed to empowering SMEs and creating sustainable economic growth through community-driven investments.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Mission:</strong> To provide a platform that fosters financial inclusion by enabling small businesses to raise capital through fractional ownership.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Vision:</strong> To create a thriving ecosystem where small businesses can scale, and communities can directly invest in local growth.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://facebook.com" className="text-2xl hover:text-gray-600"><FaFacebook /></a>
          <a href="https://twitter.com" className="text-2xl hover:text-gray-600"><FaTwitter /></a>
          <a href="https://linkedin.com" className="text-2xl hover:text-gray-600"><FaLinkedin /></a>
          <a href="https://instagram.com" className="text-2xl hover:text-gray-600"><FaInstagram /></a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm text-gray-500">&copy; 2024 CrowdCap. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

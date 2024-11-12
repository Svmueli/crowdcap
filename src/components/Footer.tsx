import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-8 bg-gray-800 text-center text-gray-400">
      <p>© 2024 CrowdCap. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-gold">Twitter</a>
        <a href="#" className="hover:text-gold">LinkedIn</a>
        <a href="#" className="hover:text-gold">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

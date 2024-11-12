import React from 'react';
import { useRouter } from 'next/router';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen relative">
      {/* Logo on the Top Left */}
      <div className="absolute top-6 left-6">
        <h1
          className="text-3xl font-extrabold text-black cursor-pointer"
          onClick={() => router.push('/')}
        >
          CrowdCap
        </h1>
      </div>

      {/* Left Section - Page Content */}
      <div className="flex-1 flex flex-col justify-center items-start px-16 bg-white">
        {children}
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-black text-white flex justify-center items-center relative">
        {/* Background Globe or Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/globe.png" alt="Globe" className="h-80 w-auto object-cover opacity-80" />
        </div>

        {/* Header Links */}
        <div className="absolute top-6 right-8 flex space-x-6 text-lg">
          <a href="#features" className="hover:text-gold">Features</a>
          <a href="#about" className="hover:text-gold">About us</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
          <button
            onClick={() => router.push('/marketplace')}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg font-bold hover:bg-gold"
          >
            Marketplace
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

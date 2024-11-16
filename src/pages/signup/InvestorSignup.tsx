// src/pages/signup/InvestorSignup.tsx
import React from 'react';

const InvestorSignup: React.FC = () => {
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mx-auto mt-24">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Sign Up as an Investor</h2>

      <form className="space-y-5">
        <div>
          <label className="block text-gray-600 text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
          />
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition duration-200">
          Create Account
        </button>
      </form>

      <button
        type="button"
        className="w-full mt-4 bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition duration-200"
      >
        Sign up with Google
      </button>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Already have an account? <a href="/login" className="text-yellow-500 font-semibold hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default InvestorSignup;

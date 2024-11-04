// src/pages/sme/signup.js

import { useState } from 'react';

export default function SMESignup() {
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle signup (e.g., API call)
    console.log({ businessName, ownerName, email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold text-center">SME Signup</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="business-name">Business Name</label>
          <input
            type="text"
            id="business-name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="owner-name">Owner Name</label>
          <input
            type="text"
            id="owner-name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full px-3 py-2"
            required
          />
        </div>
        <button type="submit" className="bg-emerald-600 text-white rounded w-full py-2 hover:bg-emerald-500">
          Sign Up
        </button>
      </form>
    </div>
  );
}

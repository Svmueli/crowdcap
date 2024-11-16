import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required');
    } else {
      setError('');
      // Handle login logic here (e.g., Firebase authentication)
      console.log('Login submitted', { email, password });
      router.push('/dashboard'); // Redirect after successful login (example)
    }
  };

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mx-auto mt-24">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Sign In to CrowdCap</h2>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            placeholder="6+ Characters, 1 Capital letter"
            className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          Sign In
        </button>
      </form>

      <button
        type="button"
        className="w-full mt-4 bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition duration-200"
      >
        Sign in with Google
      </button>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Don't have an account? <a href="/signup/investor" className="text-yellow-500 font-semibold hover:underline">Sign Up</a>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <a href="/forgot-password" className="text-gray-700 hover:underline">Forgot password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

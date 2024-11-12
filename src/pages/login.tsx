import React from 'react';
import AuthLayout from '../components/AuthLayout';

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Sign In to CrowdCap</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="6+ Characters, 1 Capital letter"
              className="w-full p-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-gold"
            />
          </div>
          <button type="submit" className="w-full bg-gold text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition duration-200">
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
            Don't have an account? <a href="/signup/investor" className="text-gold font-semibold hover:underline">Sign Up</a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <a href="/forgot-password" className="text-gray-700 hover:underline">Forgot password?</a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;

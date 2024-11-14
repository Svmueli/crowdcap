import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-black text-center mb-12">Choose Your Plan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-300">
          <h3 className="text-2xl font-semibold text-center mb-4">Basic Plan</h3>
          <p className="text-xl font-bold text-center mb-4">KES 250/month</p>
          <p className="text-center mb-6">Ideal for new investors looking to explore tokenized assets.</p>

          {/* Features List */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-lg">✔️ Access to basic assets</span>
            </li>
            <li className="flex items-center">
              <span className="text-lg">✔️ Beginner-friendly interface</span>
            </li>
            <li className="flex items-center">
              <span className="text-lg">✔️ Community support</span>
            </li>
          </ul>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 w-full">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-300">
          <h3 className="text-2xl font-semibold text-center mb-4">Pro Plan</h3>
          <p className="text-xl font-bold text-center mb-4">KES 400/month</p>
          <p className="text-center mb-6">For serious investors and SMEs looking for deeper engagement.</p>

          {/* Features List */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-lg">✔️ Access to advanced tokenized assets</span>
            </li>
            <li className="flex items-center">
              <span className="text-lg">✔️ Higher investment limits</span>
            </li>
            <li className="flex items-center">
              <span className="text-lg">✔️ Priority support</span>
            </li>
            <li className="flex items-center">
              <span className="text-lg">✔️ Monthly growth reports</span>
            </li>
          </ul>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 w-full">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-300">
          <h3 className="text-2xl font-semibold text-center mb-4">Enterprise Plan</h3>
          <p className="text-xl font-bold text-center mb-4">KES 650/month</p>
          <p className="text-center mb-6">For large-scale investments and SMEs with multiple assets.</p>

          {/* Features List */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-lg">✔️ Unlimited access to all tokenized assets</span>
            </li>
            <li className="flex items-center">
              <span className="text-lg">✔️ Dedicated account manager</span>
            </li>
            <li className="flex items-center">
              <span className="text-lg">✔️ Full portfolio management tools</span>
            </li>
            <li className="flex items-center">
              <span className="text-lg">✔️ Comprehensive investment analytics</span>
            </li>
          </ul>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 w-full">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

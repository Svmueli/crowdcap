import { useState } from 'react';

export default function ListAsset() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    fundingGoal: '',
    fractionPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to the backend to save the asset
    console.log('Asset listed:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      description: '',
      fundingGoal: '',
      fractionPrice: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-emerald-600">List Your Asset</h1>
      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Asset Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow-md border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Enter the asset name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="shadow-md border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Describe the asset"
            rows="4"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fundingGoal">
            Funding Goal (KES)
          </label>
          <input
            type="number"
            id="fundingGoal"
            name="fundingGoal"
            value={formData.fundingGoal}
            onChange={handleChange}
            required
            className="shadow-md border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Enter the funding goal"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fractionPrice">
            Fraction Price (KES)
          </label>
          <input
            type="number"
            id="fractionPrice"
            name="fractionPrice"
            value={formData.fractionPrice}
            onChange={handleChange}
            required
            className="shadow-md border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Enter the fraction price"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-semibold py-2 px-4 rounded hover:bg-emerald-500 transition duration-300 ease-in-out"
        >
          List Asset
        </button>
      </form>
    </div>
  );
}

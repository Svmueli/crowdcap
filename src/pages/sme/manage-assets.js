
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function ManageAssets() {
  const [assets, setAssets] = useState([
    { id: 1, name: 'Delivery Truck', description: 'Delivery vehicle for local goods', fundingProgress: 50 },
    { id: 2, name: 'Coffee Machine', description: 'High-quality coffee machine', fundingProgress: 30 },
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-emerald-600">Manage Your Assets</h1>
      <div className="mt-8 space-y-4">
        {assets.map((asset) => (
          <div key={asset.id} className="p-4 border rounded-lg shadow-lg bg-white flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-xl text-gray-800">{asset.name}</h2>
              <p className="text-gray-600">{asset.description}</p>
              <div className="mt-2">
                <div className="bg-gray-300 h-2 rounded">
                  <div className="bg-emerald-500 h-2" style={{ width: `${asset.fundingProgress}%` }}></div>
                </div>
                <p className="mt-1 text-sm text-gray-500">Funding progress: {asset.fundingProgress}%</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition">
                <FaEdit />
              </button>
              <button className="p-2 bg-red-500 text-white rounded hover:bg-red-400 transition">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


import SmeSidebar from '../../components/SmeSidebar';
import { FaTools, FaMoneyBillWave } from 'react-icons/fa';

export default function MyAssets() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SmeSidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">My Assets</h1>
        <p className="mb-6">Here you can view and manage your listed assets.</p>

        {/* Asset List */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Your Listed Assets</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">Asset Name</th>
                <th className="border p-2 text-left">Value</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Asset Rows */}
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className="border p-2">Asset {index + 1}</td>
                  <td className="border p-2">KES {Math.floor(Math.random() * 100000)}</td>
                  <td className="border p-2">Active</td>
                  <td className="border p-2">
                    <button className="text-blue-600 hover:underline">Edit</button>
                    <button className="ml-4 text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

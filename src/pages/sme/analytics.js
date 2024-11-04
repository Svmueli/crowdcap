
import SmeSidebar from '../../components/SmeSidebar';
import { FaChartLine, FaRegChartBar } from 'react-icons/fa';

export default function Analytics() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SmeSidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Analytics</h1>
        <p className="mb-6">Track your asset performance and investment growth.</p>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold flex items-center">
              <FaChartLine className="mr-2" /> Investment Growth
            </h2>
            <p className="text-2xl font-bold">KES 150,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold flex items-center">
              <FaRegChartBar className="mr-2" /> Monthly Returns
            </h2>
            <p className="text-2xl font-bold">KES 15,000</p>
          </div>
        </div>

        {/* Graph Placeholder */}
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Performance Chart</h2>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for a chart component */}
            <p className="text-gray-500">Chart will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

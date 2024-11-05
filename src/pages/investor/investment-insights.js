import { FaChartLine, FaChartPie } from 'react-icons/fa';

export default function InvestmentInsights() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-emerald-600">Investment Insights</h1>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Investment Performance Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaChartLine className="mr-2 text-blue-500" /> Performance Overview
          </h2>
          <p className="mt-4">Track the performance of your portfolio over time.</p>
          <div className="mt-4">
            {/* Placeholder for performance chart */}
            <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
              <span className="text-gray-500">[Performance Chart Here]</span>
            </div>
          </div>
        </div>

        {/* Allocation Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaChartPie className="mr-2 text-yellow-500" /> Allocation Summary
          </h2>
          <p className="mt-4">See how your investments are distributed across different assets.</p>
          <div className="mt-4">
            {/* Placeholder for allocation pie chart */}
            <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
              <span className="text-gray-500">[Pie Chart Here]</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Investment Trends */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaChartLine className="mr-2 text-green-500" /> Investment Trends
        </h2>
        <p className="mt-4">Analyze recent trends and potential growth areas in your portfolio.</p>
        <div className="mt-4">
          {/* Placeholder for trend analysis chart */}
          <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
            <span className="text-gray-500">[Trend Analysis Chart Here]</span>
          </div>
        </div>
      </div>
    </div>
  );
}

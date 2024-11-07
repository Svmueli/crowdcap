import { FaChartLine, FaChartPie } from 'react-icons/fa';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required Chart.js elements
ChartJS.register(LineElement, PointElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function InvestmentInsights() {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Portfolio Value (KES)',
        data: [100000, 120000, 140000, 160000, 180000, 200000],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const allocationData = {
    labels: ['Real Estate', 'Stocks', 'Bonds', 'Commodities'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(234, 179, 8, 0.7)',
          'rgba(239, 68, 68, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const trendsData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Projected Growth (KES)',
        data: [210000, 220000, 235000, 250000, 265000, 280000],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <h1 className="text-4xl font-bold text-center text-emerald-600">Investment Insights</h1>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaChartLine className="mr-2 text-blue-500" /> Performance Overview
          </h2>
          <div className="mt-4 h-40">
            {performanceData && (
              <Line data={performanceData} options={{ responsive: true, maintainAspectRatio: false }} />
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center">
            <FaChartPie className="mr-2 text-yellow-500" /> Allocation Summary
          </h2>
          <div className="mt-4 h-40">
            {allocationData && (
              <Pie data={allocationData} options={{ responsive: true, maintainAspectRatio: false }} />
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaChartLine className="mr-2 text-green-500" /> Investment Trends
        </h2>
        <div className="mt-4 h-40">
          {trendsData && (
            <Line data={trendsData} options={{ responsive: true, maintainAspectRatio: false }} />
          )}
        </div>
      </div>
    </div>
  );
}

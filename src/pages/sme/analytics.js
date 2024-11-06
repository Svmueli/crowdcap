import SmeSidebar from '../../components/SmeSidebar';
import { FaChartLine, FaRegChartBar } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  // Data for the charts
  const investmentGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Investment Growth (KES)',
        data: [10000, 20000, 35000, 50000, 75000, 150000],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const monthlyReturnsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Returns (KES)',
        data: [5000, 8000, 10000, 12000, 14000, 15000],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

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

        {/* Performance Charts */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Investment Growth Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Investment Growth</h2>
            <Line data={investmentGrowthData} options={{ responsive: true }} />
          </div>

          {/* Monthly Returns Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Monthly Returns</h2>
            <Bar data={monthlyReturnsData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function MyInvestments() {
  return (
    <div className="container mx-auto px-4 py-12 pt-20"> {/* Add pt-20 for top padding */}
      <h1 className="text-4xl font-bold text-center text-emerald-600">My Investments</h1>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Current Investments</h2>
        <ul className="space-y-2">
          <li className="border-b py-2">Asset: Delivery Truck - KES 200,000</li>
          <li className="border-b py-2">Asset: Coffee Machine - KES 150,000</li>
          <li className="border-b py-2">Asset: New Van - KES 100,000</li>
          <li className="border-b py-2">Asset: Warehouse - KES 50,000</li>
        </ul>
      </div>
      <Link href="/investor/dashboard" className="mt-6 block text-center text-blue-500 hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}

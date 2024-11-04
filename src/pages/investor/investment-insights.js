import Link from 'next/link';

export default function InvestmentInsights() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-emerald-600">Investment Insights</h1>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Your Insights</h2>
        <p>Here you can find insights about your investments and overall portfolio performance.</p>
        <ul className="mt-4 space-y-2">
          <li className="border-b py-2">Overall Return: KES 50,000</li>
          <li className="border-b py-2">Asset Performance: Delivery Truck - KES 20,000 profit</li>
          <li className="border-b py-2">Investment Growth: 10% this quarter</li>
        </ul>
      </div>
      <Link href="/investor/dashboard" className="mt-6 block text-center text-blue-500 hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}

import { FaSearch, FaCoins, FaChartLine } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch className="text-emerald-600 text-4xl" />,
      title: "Browse Local Businesses",
      description: "Discover SMEs and their assets open for fractional investment."
    },
    {
      icon: <FaCoins className="text-amber-500 text-4xl" />,
      title: "Invest in Fractions",
      description: "Purchase shares in assets and contribute to SME growth."
    },
    {
      icon: <FaChartLine className="text-deep-blue text-4xl" />,
      title: "Earn and Grow Together",
      description: "Track your investment and benefit from returns as the business grows."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-charcoal-gray">How It Works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 border rounded shadow-lg">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

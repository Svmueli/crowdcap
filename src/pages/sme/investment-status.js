
export default function InvestmentStatus() {
    const investments = [
      { id: 1, asset: 'Delivery Truck', amount: 5000, status: 'Ongoing' },
      { id: 2, asset: 'Coffee Machine', amount: 3000, status: 'Completed' },
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center">Investment Status</h1>
        <div className="mt-8 space-y-4">
          {investments.map((investment) => (
            <div key={investment.id} className="p-4 border rounded shadow bg-white">
              <h2 className="font-semibold">{investment.asset}</h2>
              <p>Investment Amount: KES {investment.amount}</p>
              <p>Status: {investment.status}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
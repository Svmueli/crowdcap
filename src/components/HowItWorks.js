
export default function HowItWorks() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Browse Local Businesses', 'Invest in Fractions', 'Earn and Grow Together'].map((step, index) => (
              <div key={index} className="p-6 border rounded shadow">
                <h3 className="text-xl font-semibold">{step}</h3>
                <p className="mt-2">Description for {step.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
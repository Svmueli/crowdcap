
export default function HeroSection() {
    return (
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white">Invest Locally, Grow Together</h1>
          <p className="mt-4 text-xl text-gray-200">Empowering SMEs through blockchain-based fractional ownership.</p>
          <div className="mt-6 space-x-4">
            <a href="/investor/signup" className="px-4 py-2 bg-yellow-400 text-gray-900 rounded shadow hover:bg-yellow-300 transition">Get Started as an Investor</a>
            <a href="/sme/signup" className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-400 transition">List Your Business as an SME</a>
          </div>
        </div>
      </div>
    );
  }
  
export default function HeroSection() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-90"
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          Invest Locally, Grow Together
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl lg:text-2xl text-gray-100">
          Empowering SMEs through blockchain-based fractional ownership.
        </p>
        
        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/investor/signup"
            className="px-6 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-gray-900 shadow-lg hover:bg-yellow-300 transition"
          >
            Get Started as an Investor
          </a>
          <a
            href="/sme/signup"
            className="px-6 py-3 text-lg font-semibold rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition"
          >
            List Your Business as an SME
          </a>
        </div>
      </div>
    </div>
  );
}

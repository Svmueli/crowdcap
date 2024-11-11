export default function HeroSection() {
  return (
    <section className="relative bg-outer-gradient py-16">
      <div className="container mx-auto flex justify-center">
        {/* Card with Neon Background */}
        <div className="bg-darkBg text-center p-10 rounded-xl shadow-neon border border-neonBlue">
          <h1 className="text-5xl font-bold text-white mb-4">
            Elevate Your Investment with{' '}
            <span className="text-neonGreen">CrowdCap</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Join a community-driven platform empowering local businesses through
            blockchain-based fractional ownership.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/investor/signup"
              className="px-6 py-3 bg-gradient-to-r from-neonPink to-neonPurple text-white rounded-lg shadow-neon hover:shadow-lg transition"
            >
              Get Started as an Investor
            </a>
            <a
              href="/sme/signup"
              className="px-6 py-3 bg-gradient-to-r from-neonGreen to-neonBlue text-white rounded-lg shadow-neon hover:shadow-lg transition"
            >
              List Your Business as an SME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

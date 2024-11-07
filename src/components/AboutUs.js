export default function AboutUs() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-emerald-600 mb-10">About CrowdCap</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            CrowdCap is a platform that connects small and medium enterprises (SMEs) with investors who are eager to support local businesses. 
            Our goal is to foster economic growth by making it easy for SMEs to access the funding they need to thrive.
          </p>
          
          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
              <div className="text-emerald-600 mb-4">
                {/* Icon example */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Opportunities</h3>
              <p className="text-gray-600">Access unique investment opportunities in local businesses and help them grow while generating potential returns.</p>
            </div>
  
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
              <div className="text-emerald-600 mb-4">
                {/* Icon example */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l3 3m0 0l3-3m-3 3V6m6 12l3 3m0 0l3-3m-3 3V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Funding</h3>
              <p className="text-gray-600">SMEs can raise funds in smaller increments, allowing for flexible investment amounts and manageable milestones.</p>
            </div>
  
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
              <div className="text-emerald-600 mb-4">
                {/* Icon example */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Impact</h3>
              <p className="text-gray-600">Support local economies and communities by investing in small businesses that create jobs and drive growth.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
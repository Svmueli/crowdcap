import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-black text-center mb-12">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-xl w-full sm:w-1/3 transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            {/* Image Placeholder */}
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
            <p className="font-semibold text-xl">David Kim</p>
          </div>
          <p className="italic mb-4">"CrowdCap made investing in local businesses so easy. I was able to support a local café and track my investment."</p>
          <p className="font-semibold">Investor</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-xl w-full sm:w-1/3 transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            {/* Image Placeholder */}
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
            <p className="font-semibold text-xl">Jane Smith</p>
          </div>
          <p className="italic mb-4">"As a small business owner, listing my café on CrowdCap was a game-changer. The community support has been amazing."</p>
          <p className="font-semibold">SME</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-xl w-full sm:w-1/3 transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            {/* Image Placeholder */}
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
            <p className="font-semibold text-xl">Mark James</p>
          </div>
          <p className="italic mb-4">"The process of investing and tracking my returns is seamless. CrowdCap is changing how we invest in businesses."</p>
          <p className="font-semibold">Investor</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

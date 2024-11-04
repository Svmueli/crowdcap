
export default function FeaturedAssets() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Featured Assets</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Sample Asset Card */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="p-4 border rounded shadow bg-white">
                <h3 className="font-semibold">Business Name</h3>
                <p>Asset Name</p>
                <div className="mt-2">Fraction Price: KES.XX.XX</div>
                <div className="mt-2 bg-gray-300 h-2 rounded">
                  <div className="bg-green-500 h-2 w-1/2 rounded"></div> {/* Funding progress */}
                </div>
                <a href="/assets/1" className="mt-4 block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition">View Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
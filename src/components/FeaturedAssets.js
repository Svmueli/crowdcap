import { FaHeart, FaArrowRight } from 'react-icons/fa';

export default function FeaturedAssets() {
  const assets = [
    {
      id: 1,
      businessName: "Green Harvest Farms",
      assetName: "Tractor",
      fractionPrice: "KES 10,000",
      fundingProgress: "75%",
      link: "/assets/1"
    },
    {
      id: 2,
      businessName: "City Logistics",
      assetName: "Delivery Van",
      fractionPrice: "KES 15,000",
      fundingProgress: "60%",
      link: "/assets/2"
    },
    {
      id: 3,
      businessName: "Tech Spark Labs",
      assetName: "3D Printer",
      fractionPrice: "KES 20,000",
      fundingProgress: "50%",
      link: "/assets/3"
    },
    {
      id: 4,
      businessName: "Ocean Fresh",
      assetName: "Fishing Boat",
      fractionPrice: "KES 25,000",
      fundingProgress: "85%",
      link: "/assets/4"
    },
    {
      id: 5,
      businessName: "Eco Clean Services",
      assetName: "Cleaning Equipment",
      fractionPrice: "KES 8,000",
      fundingProgress: "40%",
      link: "/assets/5"
    },
    {
      id: 6,
      businessName: "Farm-to-Table",
      assetName: "Cold Storage Unit",
      fractionPrice: "KES 30,000",
      fundingProgress: "90%",
      link: "/assets/6"
    },
    {
      id: 7,
      businessName: "Solar Solutions",
      assetName: "Solar Panels",
      fractionPrice: "KES 12,000",
      fundingProgress: "55%",
      link: "/assets/7"
    },
    {
      id: 8,
      businessName: "Urban Greens",
      assetName: "Hydroponic Farm",
      fractionPrice: "KES 18,000",
      fundingProgress: "70%",
      link: "/assets/8"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-600 mb-10">Featured Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {assets.map((asset) => (
            <div key={asset.id} className="relative bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:scale-105">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
                <FaHeart />
              </button>

              <h3 className="text-xl font-semibold text-emerald-600 mb-1">{asset.businessName}</h3>
              <p className="text-gray-700 mb-2">{asset.assetName}</p>

              <div className="mt-4">
                <p className="text-gray-600 text-sm">Fraction Price</p>
                <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-emerald-500 text-transparent bg-clip-text">{asset.fractionPrice}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600">Funding Progress</p>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                    style={{ width: asset.fundingProgress }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 text-right mt-1">{asset.fundingProgress} funded</p>
              </div>

              <a
                href={asset.link}
                className="mt-6 inline-flex items-center justify-center w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2 rounded-full font-semibold hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 transition transform hover:scale-105"
              >
                View Details
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

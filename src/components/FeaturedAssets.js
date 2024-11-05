import { FaHeart } from 'react-icons/fa';

export default function FeaturedAssets() {
  const sampleAssets = [
    {
      id: 1,
      businessName: "Green Harvest Farms",
      assetName: "Tractor",
      fractionPrice: "KES 10,000",
      fundingProgress: 75,
      link: "/assets/1"
    },
    {
      id: 2,
      businessName: "City Logistics",
      assetName: "Delivery Van",
      fractionPrice: "KES 15,000",
      fundingProgress: 60,
      link: "/assets/2"
    },
    {
      id: 3,
      businessName: "Tech Spark Labs",
      assetName: "3D Printer",
      fractionPrice: "KES 20,000",
      fundingProgress: 50,
      link: "/assets/3"
    },
    {
      id: 4,
      businessName: "Ocean Fresh",
      assetName: "Fishing Boat",
      fractionPrice: "KES 25,000",
      fundingProgress: 85,
      link: "/assets/4"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
      {sampleAssets.map((asset) => (
        <div key={asset.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          {/* Heart Icon for Wishlist */}
          <div className="flex justify-end">
            <button className="text-gray-500 hover:text-red-500 transition">
              <FaHeart />
            </button>
          </div>
          <h3 className="text-2xl font-semibold text-emerald-600">{asset.assetName}</h3>
          <p className="mt-2 text-gray-700">Fraction Price: <span className="font-bold">{asset.fractionPrice}</span></p>

          {/* Funding Progress Bar */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">Funding Progress</p>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-emerald-500 h-2 rounded-full"
                style={{ width: `${asset.fundingProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-right text-gray-500 mt-1">{asset.fundingProgress}% funded</p>
          </div>

          {/* View Details Button */}
          <div className="mt-6">
            <a
              href={asset.link}
              className="block w-full text-center bg-emerald-500 text-white py-2 rounded-full font-semibold hover:bg-emerald-600 transition"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

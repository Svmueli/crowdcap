// src/components/FeaturedAssets.js

export default function FeaturedAssets() {
  const sampleAssets = [
    {
      businessName: "Green Harvest Farms",
      assetName: "Tractor",
      fractionPrice: "KES 10,000",
      fundingProgress: "75%",
      link: "/assets/1"
    },
    {
      businessName: "City Logistics",
      assetName: "Delivery Van",
      fractionPrice: "KES 15,000",
      fundingProgress: "60%",
      link: "/assets/2"
    },
    {
      businessName: "Tech Spark Labs",
      assetName: "3D Printer",
      fractionPrice: "KES 20,000",
      fundingProgress: "50%",
      link: "/assets/3"
    },
    {
      businessName: "Ocean Fresh",
      assetName: "Fishing Boat",
      fractionPrice: "KES 25,000",
      fundingProgress: "85%",
      link: "/assets/4"
    },
    {
      businessName: "Eco Clean Services",
      assetName: "Cleaning Equipment",
      fractionPrice: "KES 8,000",
      fundingProgress: "40%",
      link: "/assets/5"
    },
    {
      businessName: "Farm-to-Table",
      assetName: "Cold Storage Unit",
      fractionPrice: "KES 30,000",
      fundingProgress: "90%",
      link: "/assets/6"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-charcoal-gray">Featured Assets</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sampleAssets.map((asset, index) => (
            <div key={index} className="p-6 border rounded shadow bg-white">
              <h3 className="font-semibold text-emerald-600">{asset.businessName}</h3>
              <p className="mt-2 text-gray-600">{asset.assetName}</p>
              <div className="mt-2 text-lg text-blue-700">Fraction Price: {asset.fractionPrice}</div>
              <div className="mt-2 bg-gray-300 h-2 rounded">
                <div
                  className="bg-green-500 h-2 rounded"
                  style={{ width: asset.fundingProgress }}
                ></div>
              </div>
              <div className="text-gray-500 mt-1 text-sm">
                Funding Progress: {asset.fundingProgress}
              </div>
              <a
                href={asset.link}
                className="mt-4 block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

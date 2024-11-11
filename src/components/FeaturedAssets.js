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
    <section className="py-16 bg-darkBg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Featured Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {assets.map((asset) => (
            <div key={asset.id} className="relative bg-gradient-to-r from-gray-800 to-black rounded-xl shadow-lg p-6 hover:shadow-neon transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-neonGreen mb-1">{asset.businessName}</h3>
              <p className="text-gray-400">{asset.assetName}</p>
              <p className="text-lg font-bold bg-gradient-to-r from-neonBlue to-neonPurple text-transparent bg-clip-text mt-4">
                {asset.fractionPrice}
              </p>
              <a href={asset.link} className="inline-block mt-6 bg-gradient-to-r from-neonPink to-neonPurple text-white px-4 py-2 rounded-full shadow-neon hover:shadow-lg transition">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

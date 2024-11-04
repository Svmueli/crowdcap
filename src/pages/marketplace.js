
import FeaturedAssets from '../components/FeaturedAssets';

export default function Marketplace() {
  return (
    <div>
      <header className="bg-emerald-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Marketplace</h1>
        <p className="mt-2">Discover and invest in local businesses.</p>
      </header>
      <FeaturedAssets />
    </div>
  );
}

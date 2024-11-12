import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-900 h-screen w-64 text-white flex flex-col items-start p-6">
      <div className="text-2xl font-bold mb-10">CrowdCap</div>
      <nav className="space-y-4">
        <Link href="/dashboard/overview" passHref>
          <a className={`${router.pathname === '/dashboard/overview' ? 'text-yellow-500' : ''} hover:text-yellow-500`}>
            Overview
          </a>
        </Link>
        <Link href="/dashboard/portfolio" passHref>
          <a className={`${router.pathname === '/dashboard/portfolio' ? 'text-yellow-500' : ''} hover:text-yellow-500`}>
            Portfolio
          </a>
        </Link>
        <Link href="/marketplace" passHref>
          <a className={`${router.pathname === '/marketplace' ? 'text-yellow-500' : ''} hover:text-yellow-500`}>
            Marketplace
          </a>
        </Link>
        <Link href="/dashboard/analytics" passHref>
          <a className={`${router.pathname === '/dashboard/analytics' ? 'text-yellow-500' : ''} hover:text-yellow-500`}>
            Analytics
          </a>
        </Link>
        <Link href="/dashboard/wallet" passHref>
          <a className={`${router.pathname === '/dashboard/wallet' ? 'text-yellow-500' : ''} hover:text-yellow-500`}>
            Wallet
          </a>
        </Link>
        <Link href="/dashboard/settings" passHref>
          <a className={`${router.pathname === '/dashboard/settings' ? 'text-yellow-500' : ''} hover:text-yellow-500`}>
            Settings
          </a>
        </Link>
      </nav>
      <div className="mt-auto pt-10">
        <p className="text-gray-400 text-sm">Logged in as:</p>
        <p className="font-medium">John Doe</p>
      </div>
    </div>
  );
};

export default Sidebar;

import { BellIcon, UserCircleIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white px-6 py-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <BellIcon className="w-6 h-6 text-gray-400 hover:text-yellow-500" />
        <UserCircleIcon className="w-8 h-8 text-gray-400 hover:text-yellow-500" />
      </div>
    </div>
  );
};

export default Navbar;

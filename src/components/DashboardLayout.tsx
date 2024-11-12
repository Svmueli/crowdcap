import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

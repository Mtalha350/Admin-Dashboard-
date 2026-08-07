import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className='flex flex-1 flex-col overflow-hidden'>
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className='flex-1 overflow-auto p-4 md:p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />

      <div className='flex min-w-0 flex-1 flex-col overflow-hidden'>
        <Header />

        <main className='flex-1 overflow-y-auto p-6 md:p-8'>
          {children}
        </main>
      </div>
    </div>
  );
}

import { X } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { workspaceMenu, systemMenu } from './sidebarData';
import logo from '../../assets/logo.png';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: Props) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 lg:hidden'
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          flex
          h-screen
          w-64
          flex-col
          bg-[#062B2B]
          text-white
          shadow-xl
          transition-transform
          duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:static
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className='flex items-center justify-between border-b border-white/10 p-6'>
          <div className='flex items-center gap-3'>
            <img
              src={logo}
              alt='Invoice Hub'
              className='h-10 w-10 rounded-lg'
            />

            <div>
              <h2 className='text-sm font-semibold'>INVOICE HUB</h2>

              <p className='text-xs text-slate-400'>Admin console</p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button
            type='button'
            onClick={onClose}
            className='rounded-lg p-2 transition hover:bg-white/10 lg:hidden'
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <div className='flex-1 overflow-y-auto px-3 py-5'>
          <p className='mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500'>
            Workspace
          </p>

          <div className='space-y-1'>
            {workspaceMenu.map((item) => (
              <SidebarItem key={item.title} {...item} />
            ))}
          </div>

          <p className='mb-2 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500'>
            System
          </p>

          <div className='space-y-1'>
            {systemMenu.map((item) => (
              <SidebarItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className='border-t border-white/10 p-4'>
          <div className='flex items-center gap-3'>
            <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-semibold'>
              MT
            </div>

            <div className='min-w-0'>
              <p className='truncate text-sm font-medium'>Muhammad Talha</p>

              <p className='truncate text-xs text-slate-400'>Owner</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

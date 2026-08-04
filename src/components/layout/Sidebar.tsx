import SidebarItem from './SidebarItem';
import { workspaceMenu, systemMenu } from './sidebarData';

export default function Sidebar() {
  return (
    <aside className='hidden h-screen w-64 shrink-0 flex-col bg-[#062B2B] text-white lg:flex'>
      <div className='border-b border-white/10 px-5 py-5'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-sm font-bold text-black'>
            NW
          </div>

          <div>
            <h2 className='text-sm font-semibold'>Northwind Ops</h2>

            <p className='text-xs text-slate-400'>Admin console</p>
          </div>
        </div>
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

        <p className='mt-8 mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500'>
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
        <div className='flex items-center gap-3 px-1'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-xs font-semibold'>
            RK
          </div>

          <div>
            <p className='text-sm font-medium'>Rina Kapoor</p>

            <p className='text-xs text-slate-400'>Owner</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

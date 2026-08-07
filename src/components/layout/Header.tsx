import { Bell, Menu, Search } from 'lucide-react';

type Props = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: Props) {
  return (
    <header className='flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 md:px-6'>
      <div className='flex items-center gap-3'>
        <button
          type='button'
          onClick={onMenuClick}
          className='rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden'
        >
          <Menu size={22} />
        </button>

        <div className='relative hidden md:block'>
          <Search
            size={16}
            className='absolute left-4 top-1/2 -translate-y-1/2 text-[#5B6D6D]'
          />

          <input
            type='text'
            placeholder='Search invoices, customers...'
            className='w-72 rounded-[10px] bg-white border border-[#D5E1E1] py-2.5 pl-10 pr-4 text-sm text-[#5B6D6D] outline-none transition placeholder:text-[#5B6D6D] focus:bg-white focus:ring-2 focus:ring-teal-600/20 lg:w-96'
          />
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <button
          type='button'
          className='relative rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700'
        >
          <Bell size={20} />
          <span className='absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-amber-400 ring-2 ring-white' />
        </button>

        <button
          type='button'
          className='flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-sm font-semibold text-white'
        >
          RK
        </button>
      </div>
    </header>
  );
}

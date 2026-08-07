import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

type Props = {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  plan: string;
  onPlanChange: (value: string) => void;

  totalRecords: number;
  filteredRecords: number;
};

export default function TableToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  plan,
  onPlanChange,
  totalRecords,
  filteredRecords,
}: Props) {
  return (
    <div className='border-b border-slate-200 p-4'>
      {/* Heading */}

      <div className='mb-4 flex items-start justify-between'>
        <div>
          <h2 className='text-[20px] font-bold text-slate-900'>Invoices</h2>

          <p className='text-xs text-slate-500'>
            {filteredRecords} of {totalRecords} records
          </p>
        </div>

        <button className='rounded-xl p-3 transition hover:bg-slate-100'>
          <SlidersHorizontal size={22} className='text-slate-500' />
        </button>
      </div>

      {/* Filters */}

      <div className='flex flex-col gap-4 xl:flex-row'>
        {/* Search */}

        <div className='relative flex-1'>
          <Search
            size={18}
            className='absolute left-5 top-[18px] -translate-y-1/2 text-[#5B6D6D]'
          />

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder='Search by customer, email or ID'
            className='h-9 w-full rounded-xl border border-[#D5E1E1] bg-white pl-14 pr-4 text-sm outline-none transition focus:border-teal-600 placeholder:text-[#5B6D6D] text-[#5B6D6D]'
          />
        </div>

        {/* Status */}

        <div className='relative'>
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className='h-9 min-w-[220px] appearance-none rounded-xl border border-[#D5E1E1] bg-white px-5 pr-10 text-sm outline-none'
          >
            <option>All statuses</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Refunded</option>
            <option>Failed</option>
          </select>

          <ChevronDown
            size={18}
            className='pointer-events-none absolute right-4 top-[20px] -translate-y-1/2 text-slate-500'
          />
        </div>

        {/* Plan */}

        <div className='relative'>
          <select
            value={plan}
            onChange={(e) => onPlanChange(e.target.value)}
            className='h-9 min-w-[220px] appearance-none rounded-xl border border-[#D5E1E1] bg-white px-5 pr-10 text-sm outline-none'
          >
            <option>All plans</option>
            <option>Starter</option>
            <option>Growth</option>
            <option>Scale</option>
          </select>

          <ChevronDown
            size={18}
            className='pointer-events-none absolute right-4 top-[20px] -translate-y-1/2 text-slate-500'
          />
        </div>
      </div>
    </div>
  );
}

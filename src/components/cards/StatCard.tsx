import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

type Props = {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  positive: boolean;
};

export default function StatCard({
  title,
  value,
  subtitle,
  change,
  positive,
}: Props) {
  return (
    <div className='flex min-h-[130px] flex-col rounded-2xl border border-[#D5E1E1] bg-white p-4 shadow-sm'>
      <p className='text-[12px] uppercase tracking-[0.15em] text-[#5B6D6D]'>
        {title}
      </p>

      <div className='mt-2 flex items-center justify-between gap-3'>
        <h2 className='text-2xl font-medium tracking-tight text-slate-900'>
          {value}
        </h2>

        <div
          className={`inline-flex shrink-0 items-center gap-0.5 rounded-full px-1.5 py-1 text-xs ${
            positive ? 'bg-[#E6F3ED] text-[#2A9D67]' : 'bg-sky-50 text-sky-600'
          }`}
        >
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}

          {change}
        </div>
      </div>

      <p className='mt-auto text-xs text-[#5B6D6D]'>{subtitle}</p>
    </div>
  );
}

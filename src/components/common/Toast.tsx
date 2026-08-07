import { CheckCircle2 } from 'lucide-react';

type Props = {
  title: string;
  description: string;
};

export default function Toast({ title, description }: Props) {
  return (
    <div className='flex w-95 items-start gap-4 rounded-xl border border-emerald-200 bg-white p-3 shadow-xl'>
      <div>
        <CheckCircle2 size={20} className='text-emerald-600' />
      </div>

      <div className='flex-1'>
        <h3 className='font-semibold text-slate-900'>{title}</h3>

        <p className='text-xs text-slate-500'>{description}</p>
      </div>
    </div>
  );
}

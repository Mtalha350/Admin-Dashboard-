import { FileText, Plus } from 'lucide-react';

type Props = {
  onCreate: () => void;
};

export default function EmptyState({ onCreate }: Props) {
  return (
    <div className='flex h-[300px] flex-col items-center justify-center px-4'>
      <div className='flex h-15 w-15 items-center justify-center rounded-full bg-slate-100'>
        <FileText size={38} className='text-slate-400' />
      </div>

      <h2 className='mt-4 text-xl font-semibold text-slate-900'>
        No invoices found
      </h2>

      <p className='mt-1 max-w-md text-sm text-center text-slate-500'>
        There are no invoices available. Create your first invoice to start
        managing billing.
      </p>

      <button
        onClick={onCreate}
        className='mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800'
      >
        <Plus size={18} />
        Create Invoice
      </button>
    </div>
  );
}

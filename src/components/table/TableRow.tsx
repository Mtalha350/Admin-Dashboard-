import StatusBadge from './StatusBadge';
import type { Invoice } from '../../types/invoice';

type Props = {
  invoice: Invoice;
};

export default function TableRow({ invoice }: Props) {
  return (
    <tr className='border-t border-slate-200 transition-colors hover:bg-slate-50'>
      <td className='px-6 py-2 text-sm font-medium text-slate-900 whitespace-nowrap'>
        {invoice.id}
      </td>

      <td className='px-6 py-2'>
        <div>
          <p className='text-sm text-slate-900'>{invoice.customer}</p>

          <p className='text-xs text-slate-500'>{invoice.email}</p>
        </div>
      </td>

      <td className='px-6 py-2 text-sm text-slate-600'>{invoice.plan}</td>

      <td className='px-6 py-2'>
        <StatusBadge status={invoice.status} />
      </td>

      <td className='px-6 py-2 text-sm text-slate-600 whitespace-nowrap'>
        {invoice.date}
      </td>

      <td className='px-6 py-2 text-right text-sm font-semibold text-slate-900 whitespace-nowrap'>
        ${invoice.amount.toLocaleString()}
      </td>
    </tr>
  );
}

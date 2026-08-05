import { useMemo, useState } from 'react';

import type { Invoice } from '../../types/invoice';

import EmptyState from './EmptyState';
import TableRow from './TableRow';
import TableToolbar from './TableToolbar';

type Props = {
  invoices: Invoice[];
  onCreateInvoice: () => void;
};

export default function InvoiceTable({ invoices, onCreateInvoice }: Props) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All statuses');
  const [plan, setPlan] = useState('All plans');

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const matchesSearch =
        invoice.customer.toLowerCase().includes(search.toLowerCase()) ||
        invoice.email.toLowerCase().includes(search.toLowerCase()) ||
        invoice.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === 'All statuses' || invoice.status === status;

      const matchesPlan = plan === 'All plans' || invoice.plan === plan;

      return matchesSearch && matchesStatus && matchesPlan;
    });
  }, [invoices, search, status, plan]);

  const hasInvoices = invoices.length > 0;
  const hasResults = filteredInvoices.length > 0;

  return (
    <section className='mt-8 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm'>
      <TableToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        plan={plan}
        onPlanChange={setPlan}
        totalRecords={filteredInvoices.length}
      />

      <div className='h-[430px] overflow-y-auto'>
        <table className='w-full table-fixed border-collapse'>
          <thead className='sticky top-0 z-20 bg-white shadow-[0_1px_0_0_#E2E8F0]'>
            <tr>
              <th className='w-[14%] px-5 py-4 text-left text-sm font-medium text-[#5B6D6D]'>
                Invoice
              </th>

              <th className='w-[33%] px-5 py-4 text-left text-sm font-medium text-[#5B6D6D]'>
                Customer
              </th>

              <th className='w-[12%] px-5 py-4 text-left text-sm font-medium text-[#5B6D6D]'>
                Plan
              </th>

              <th className='w-[18%] px-5 py-4 text-left text-sm font-medium text-[#5B6D6D]'>
                Status
              </th>

              <th className='w-[13%] px-5 py-4 text-left text-sm font-medium text-[#5B6D6D]'>
                Date
              </th>

              <th className='w-[10%] px-5 py-4 text-right text-sm font-medium text-[#5B6D6D]'>
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id} invoice={invoice} />
              ))
            ) : (
              <tr>
                <td colSpan={6} className='p-0'>
                  <EmptyState onCreate={onCreateInvoice} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

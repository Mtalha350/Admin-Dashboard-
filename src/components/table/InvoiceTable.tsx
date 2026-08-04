import { useMemo, useState } from 'react';

import { invoices } from '../../data/invoices';

import TableToolbar from './TableToolbar';
import TableRow from './TableRow';

export default function InvoiceTable() {
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
  }, [search, status, plan]);

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
        <table className='w-full table-fixed'>
          <thead className='sticky top-0 z-10 bg-white text-[#5B6D6D]'>
            <tr>
              <th className='w-[14%] px-5 py-3 text-left font-medium'>
                Invoice
              </th>
              <th className='w-[33%] px-5 py-3 text-left font-medium'>
                Customer
              </th>
              <th className='w-[12%] px-5 py-3 text-left font-medium'>Plan</th>
              <th className='w-[18%] px-5 py-3 text-left font-medium'>
                Status
              </th>
              <th className='w-[13%] px-5 py-3 text-left font-medium'>Date</th>
              <th className='w-[10%] px-5 py-3 text-right font-medium'>
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredInvoices.map((invoice) => (
              <TableRow key={invoice.id} invoice={invoice} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

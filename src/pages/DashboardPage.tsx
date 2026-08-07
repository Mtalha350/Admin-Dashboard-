import { useEffect, useState } from 'react';

import StatsGrid from '../components/cards/StatsGrid';
import StatsGridSkeleton from '../components/cards/StatsGridSkeleton';

import RevenueChart from '../components/chart/RevenueChart';
import RevenueChartSkeleton from '../components/chart/RevenueChartSkeleton';

import InvoiceTable from '../components/table/InvoiceTable';
import InvoiceTableSkeleton from '../components/table/InvoiceTableSkeleton';

import CreateInvoiceModal from '../components/modal/CreateInvoiceModal';
import ToastContainer from '../components/common/ToastContainer';

import type { Invoice } from '../types/invoice';
import type { InvoiceFormValues } from '../schemas/invoiceSchema';
import { getInvoices, saveInvoices } from '../utils/invoiceStorage';

const DashboardPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [invoices, setInvoices] = useState<Invoice[]>(() => getInvoices());

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCreateInvoice = (data: InvoiceFormValues) => {
    const latestInvoiceNumber = Math.max(
      ...invoices.map((invoice) => Number(invoice.id.replace('INV-', ''))),
    );

    const newInvoice: Invoice = {
      id: `INV-${latestInvoiceNumber + 1}`,
      customer: data.customer,
      email: data.email,
      plan: data.plan,
      status: data.status,
      amount: data.amount,
      date: new Date().toISOString().slice(0, 10),
    };

    const updatedInvoices = [newInvoice, ...invoices];

    setInvoices(updatedInvoices);
    saveInvoices(updatedInvoices);
    setOpen(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      <div>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
          <div>
            <h1 className='text-3xl font-medium text-slate-900'>Overview</h1>

            <p className='text-sm text-slate-500'>
              Revenue, accounts and invoice activity for the last 30 days.
            </p>
          </div>

          <button
            type='button'
            onClick={() => setOpen(true)}
            className='shrink-0 rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800'
          >
            + New Invoice
          </button>
        </div>

        {loading ? (
          <>
            <StatsGridSkeleton />
            <RevenueChartSkeleton />
            <InvoiceTableSkeleton />
          </>
        ) : (
          <>
            <StatsGrid />
            <RevenueChart />

            <InvoiceTable
              invoices={invoices}
              onCreateInvoice={() => setOpen(true)}
            />
          </>
        )}

        <CreateInvoiceModal
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={handleCreateInvoice}
        />
      </div>

      <ToastContainer open={showSuccess} />
    </>
  );
};

export default DashboardPage;

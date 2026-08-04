import DashboardLayout from './layouts/DashboardLayout';
import StatsGrid from './components/cards/StatsGrid';
import RevenueChart from './components/chart/RevenueChart';
import InvoiceTable from './components/table/InvoiceTable';

function App() {
  return (
    <DashboardLayout>
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
            className='shrink-0 rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800'
          >
            + New invoice
          </button>
        </div>

        <StatsGrid />
        <RevenueChart />
        <InvoiceTable />
      </div>
    </DashboardLayout>
  );
}

export default App;

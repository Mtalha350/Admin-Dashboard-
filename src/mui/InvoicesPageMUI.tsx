import { useMemo, useState } from 'react';

import { Box, Button, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import InvoiceToolbarMUI from './InvoiceToolbarMUI';
import InvoiceTableMUI from './InvoiceTableMUI';
import CreateInvoiceDialog from './CreateInvoiceDialog';
import StatsGridMUI from './StatsGridMUI';

import type { Invoice } from '../types/invoice';
import type { InvoiceFormValues } from '../schemas/invoiceSchema';
import { getInvoices, saveInvoices } from '../utils/invoiceStorage';

export default function InvoicesPageMUI() {
  const [open, setOpen] = useState(false);

  const [invoices, setInvoices] = useState<Invoice[]>(() => getInvoices());

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
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Invoices (MUI)
          </Typography>

          <Typography color='text.secondary'>
            Manage customer invoices
          </Typography>
        </Box>

        <Button
          variant='contained'
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          New Invoice
        </Button>
      </Box>

      <StatsGridMUI />

      <Paper
        elevation={1}
        sx={{
          p: 3,
          borderRadius: 1,
        }}
      >
        <InvoiceToolbarMUI
          search={search}
          status={status}
          plan={plan}
          totalRecords={invoices.length}
          filteredRecords={filteredInvoices.length}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onPlanChange={setPlan}
        />

        <InvoiceTableMUI
          invoices={filteredInvoices}
          onCreateInvoice={() => setOpen(true)}
        />
      </Paper>

      <CreateInvoiceDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleCreateInvoice}
      />
    </Box>
  );
}

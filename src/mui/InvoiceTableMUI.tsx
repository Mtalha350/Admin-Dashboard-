import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import StatusChip from './StatusChip';
import EmptyStateMUI from './EmptyStateMUI';

import type { Invoice } from '../types/invoice';

type Props = {
  invoices: Invoice[];
  onCreateInvoice: () => void;
};

export default function InvoiceTableMUI({ invoices, onCreateInvoice }: Props) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        height: 430,
        overflow: 'auto',
      }}
    >
      <Table stickyHeader sx={{ minWidth: 768 }}>
        <TableHead>
          <TableRow>
            <TableCell>Invoice</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Plan</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align='right'>Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {invoices.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                sx={{
                  borderBottom: 'none',
                  p: 0,
                }}
              >
                <EmptyStateMUI onCreate={onCreateInvoice} />
              </TableCell>
            </TableRow>
          ) : (
            invoices.map((invoice) => (
              <TableRow hover key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>

                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar>{invoice.customer[0]}</Avatar>

                    <Box>
                      <Box sx={{ fontWeight: 600 }}>{invoice.customer}</Box>

                      <Box sx={{ fontSize: 13, color: 'text.secondary' }}>
                        {invoice.email}
                      </Box>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>{invoice.plan}</TableCell>

                <TableCell>
                  <StatusChip status={invoice.status} />
                </TableCell>

                <TableCell>{invoice.date}</TableCell>

                <TableCell align='right'>${invoice.amount}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

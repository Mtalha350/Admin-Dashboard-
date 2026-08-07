import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';

import {
  invoiceSchema,
  type InvoiceFormInput,
  type InvoiceFormValues,
} from '../schemas/invoiceSchema';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: InvoiceFormValues) => void;
};

export default function CreateInvoiceDialog({
  open,
  onClose,
  onSubmit,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InvoiceFormInput>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      customer: '',
      email: '',
      plan: 'Starter',
      status: 'Pending',
      amount: undefined,
    },
  });

  const submit = (data: InvoiceFormInput) => {
    onSubmit(invoiceSchema.parse(data));
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <DialogTitle>Create Invoice</DialogTitle>

      <form onSubmit={handleSubmit(submit)}>
        <DialogContent>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label='Customer Name'
              {...register('customer')}
              error={!!errors.customer}
              helperText={errors.customer?.message}
            />

            <TextField
              fullWidth
              label='Email'
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              select
              fullWidth
              label='Plan'
              defaultValue='Starter'
              {...register('plan')}
              error={!!errors.plan}
              helperText={errors.plan?.message}
            >
              <MenuItem value='Starter'>Starter</MenuItem>
              <MenuItem value='Growth'>Growth</MenuItem>
              <MenuItem value='Scale'>Scale</MenuItem>
            </TextField>

            <TextField
              select
              fullWidth
              label='Status'
              defaultValue='Pending'
              {...register('status')}
              error={!!errors.status}
              helperText={errors.status?.message}
            >
              <MenuItem value='Paid'>Paid</MenuItem>
              <MenuItem value='Pending'>Pending</MenuItem>
              <MenuItem value='Refunded'>Refunded</MenuItem>
              <MenuItem value='Failed'>Failed</MenuItem>
            </TextField>

            <TextField
              fullWidth
              type='number'
              label='Amount'
              {...register('amount', {
                valueAsNumber: true,
              })}
              error={!!errors.amount}
              helperText={errors.amount?.message}
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button variant='outlined' onClick={onClose}>
            Cancel
          </Button>

          <Button type='submit' variant='contained'>
            Create Invoice
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

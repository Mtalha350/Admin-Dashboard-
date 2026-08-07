import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  invoiceSchema,
  type InvoiceFormInput,
  type InvoiceFormValues,
} from '../../schemas/invoiceSchema';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: InvoiceFormValues) => void;
};

export default function CreateInvoiceModal({ open, onClose, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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

  if (!open) return null;

  const submit = (data: InvoiceFormInput) => {
    onSubmit(invoiceSchema.parse(data));

    reset();

    onClose();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
      <div className='w-full max-w-2xl rounded-3xl bg-white shadow-2xl'>
        {/* Header */}

        <div className='flex items-center justify-between border-b border-slate-200 px-8 py-6'>
          <h2 className='text-2xl font-bold'>Create Invoice</h2>

          <button
            onClick={onClose}
            className='rounded-lg p-2 hover:bg-slate-100'
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(submit)} className='space-y-6 p-8'>
          {/* Customer */}

          <div>
            <label className='mb-2 block text-sm font-medium'>
              Customer Name
            </label>

            <input
              {...register('customer')}
              className='h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-teal-600'
            />

            {errors.customer && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.customer.message}
              </p>
            )}
          </div>

          {/* Email */}

          <div>
            <label className='mb-2 block text-sm font-medium'>Email</label>

            <input
              {...register('email')}
              className='h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-teal-600'
            />

            {errors.email && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Plan & Status */}

          <div className='grid grid-cols-2 gap-5'>
            <div>
              <label className='mb-2 block text-sm font-medium'>Plan</label>

              <select
                {...register('plan')}
                className='h-12 w-full rounded-xl border border-slate-200 px-4'
              >
                <option>Starter</option>
                <option>Growth</option>
                <option>Scale</option>
              </select>
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium'>Status</label>

              <select
                {...register('status')}
                className='h-12 w-full rounded-xl border border-slate-200 px-4'
              >
                <option>Paid</option>
                <option>Pending</option>
                <option>Refunded</option>
                <option>Failed</option>
              </select>
            </div>
          </div>

          {/* Amount */}

          <div>
            <label className='mb-2 block text-sm font-medium'>Amount</label>

            <input
              type='number'
              {...register('amount', {
                valueAsNumber: true,
              })}
              className='h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-teal-600'
            />

            {errors.amount && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.amount.message}
              </p>
            )}
          </div>

          {/* Footer */}

          <div className='flex justify-end gap-3 pt-2'>
            <button
              type='button'
              onClick={onClose}
              className='rounded-xl border border-slate-200 px-6 py-3 font-medium'
            >
              Cancel
            </button>

            <button
              type='submit'
              className='rounded-xl bg-teal-700 px-6 py-3 font-medium text-white hover:bg-teal-800'
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

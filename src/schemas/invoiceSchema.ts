import { z } from 'zod';

export const invoiceSchema = z.object({
  customer: z.string().min(3, 'Customer name is required'),

  email: z.email(),

  plan: z.enum(['Starter', 'Growth', 'Scale']),

  amount: z.coerce.number().min(1),

  status: z.enum(['Paid', 'Pending', 'Refunded', 'Failed']),
});

export type InvoiceFormInput = z.input<typeof invoiceSchema>;
export type InvoiceFormValues = z.output<typeof invoiceSchema>;

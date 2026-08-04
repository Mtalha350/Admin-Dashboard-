export type InvoiceStatus = 'Paid' | 'Pending' | 'Refunded' | 'Failed';

export type InvoicePlan = 'Starter' | 'Growth' | 'Scale';

export interface Invoice {
  id: string;
  customer: string;
  email: string;
  plan: InvoicePlan;
  status: InvoiceStatus;
  date: string;
  amount: number;
}

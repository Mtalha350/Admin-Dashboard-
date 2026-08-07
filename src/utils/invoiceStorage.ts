import { invoices as mockInvoices } from '../data/invoices';
import type { Invoice } from '../types/invoice';

const STORAGE_KEY = 'admin-dashboard-invoices';

export function getInvoices(): Invoice[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockInvoices));

    return mockInvoices;
  }

  return JSON.parse(stored);
}

export function saveInvoices(invoices: Invoice[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
}

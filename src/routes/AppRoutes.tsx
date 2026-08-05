import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import InvoicesPage from '../pages/InvoicesPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />

      <Route path='/invoices' element={<InvoicesPage />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

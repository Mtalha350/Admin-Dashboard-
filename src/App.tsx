import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import InvoicesPage from './pages/InvoicesPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/invoices' element={<InvoicesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

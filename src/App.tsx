import { Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import InvoicesPageMUI from './mui/InvoicesPageMUI';

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/invoices' element={<InvoicesPageMUI />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

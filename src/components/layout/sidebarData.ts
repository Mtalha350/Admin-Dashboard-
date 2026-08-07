import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Layers,
  Settings,
  LifeBuoy,
} from 'lucide-react';

export const workspaceMenu = [
  {
    title: 'Overview',
    icon: LayoutDashboard,
    path: '/',
  },
  {
    title: 'Invoices',
    subtitle: 'Material UI',
    icon: FileText,
    path: '/invoices',
  },
  {
    title: 'Customers',
    icon: Users,
    path: '/customers',
  },
  {
    title: 'Reports',
    icon: BarChart3,
    path: '/reports',
  },
];

export const systemMenu = [
  {
    title: 'Tailwind vs MUI',
    icon: Layers,
    path: '/tailwind-vs-mui',
  },
  {
    title: 'Settings',
    icon: Settings,
    path: '/settings',
  },
  {
    title: 'Support',
    icon: LifeBuoy,
    path: '/support',
  },
];

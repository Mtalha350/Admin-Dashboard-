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
    active: true,
  },
  {
    title: 'Invoices',
    icon: FileText,
  },
  {
    title: 'Customers',
    icon: Users,
  },
  {
    title: 'Reports',
    icon: BarChart3,
  },
];

export const systemMenu = [
  {
    title: 'Tailwind vs MUI',
    icon: Layers,
  },
  {
    title: 'Settings',
    icon: Settings,
  },
  {
    title: 'Support',
    icon: LifeBuoy,
  },
];

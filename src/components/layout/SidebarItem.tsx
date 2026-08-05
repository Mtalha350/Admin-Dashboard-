import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  icon: LucideIcon;
  path: string;
};

export default function SidebarItem({ title, icon: Icon, path }: Props) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx(
          'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200',
          isActive
            ? 'bg-white/10 text-white'
            : 'text-slate-400 hover:bg-white/5 hover:text-white',
        )
      }
    >
      <Icon size={17} strokeWidth={1.75} />

      <span className='font-medium'>{title}</span>
    </NavLink>
  );
}

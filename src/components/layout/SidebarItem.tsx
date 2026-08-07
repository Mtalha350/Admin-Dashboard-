import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  path: string;
};

export default function SidebarItem({
  title,
  subtitle,
  icon: Icon,
  path,
}: Props) {
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

      <div className='flex flex-col'>
        <span className='font-medium'>{title}</span>
        <p className='text-xs text-slate-500'>{subtitle}</p>
      </div>
    </NavLink>
  );
}

import clsx from 'clsx';

type Props = {
  className?: string;
};

export default function Skeleton({ className }: Props) {
  return (
    <div className={clsx('animate-pulse rounded-lg bg-slate-200', className)} />
  );
}

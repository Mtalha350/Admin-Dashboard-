type Props = {
  status: 'Paid' | 'Pending' | 'Refunded' | 'Failed';
};

const styles = {
  Paid: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    dot: 'bg-emerald-500',
  },
  Pending: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    dot: 'bg-amber-700',
  },
  Refunded: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    dot: 'bg-sky-500',
  },
  Failed: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    dot: 'bg-red-500',
  },
};

export default function StatusBadge({ status }: Props) {
  const style = styles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${style.bg} ${style.text}`}
    >
      <span className={`h-2 w-2 rounded-full ${style.dot}`} />

      {status}
    </span>
  );
}

type RevenueTooltipProps = {
  active?: boolean;
  payload?: {
    value: number;
  }[];
  label?: string;
};

export default function RevenueTooltip({
  active,
  payload,
  label,
}: RevenueTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className='rounded-xl border border-slate-200 bg-white p-3 shadow-xl'>
      <p className='text-sm font-semibold text-slate-900'>{label}</p>

      <p className='mt-1 text-sm text-teal-700'>
        Revenue: ${payload[0].value}k
      </p>
    </div>
  );
}

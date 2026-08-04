import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import RevenueTooltip from './RevenueTooltip';

const data = [
  { month: 'Feb', revenue: 18 },
  { month: 'Mar', revenue: 24 },
  { month: 'Apr', revenue: 22 },
  { month: 'May', revenue: 40 },
  { month: 'Jun', revenue: 46 },
  { month: 'Jul', revenue: 52 },
];

export default function RevenueChart() {
  return (
    <section className='mt-8 rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm'>
      <div className='mb-6 flex items-start justify-between'>
        <div>
          <h2 className='text-[18px] font-semibold text-slate-900'>
            Revenue trend
          </h2>

          <p className='text-sm text-slate-500'>
            Monthly net revenue, in thousands USD
          </p>
        </div>

        <span className='rounded-full bg-stone-100 px-4 py-1 text-xs text-slate-700'>
          6 months
        </span>
      </div>

      <div className='h-52.5'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='revenueGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#0F766E' stopOpacity={0.25} />

                <stop offset='100%' stopColor='#0F766E' stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke='#D9E4E6'
              strokeDasharray='2 3'
              vertical={false}
            />

            <XAxis
              dataKey='month'
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 10,
                fill: '#64748B',
              }}
            />

            <YAxis hide domain={[0, 60]} />

            <Tooltip
              cursor={{
                stroke: '#CBD5E1',
                strokeWidth: 2,
              }}
              content={<RevenueTooltip />}
            />

            <Area
              type='monotone'
              dataKey='revenue'
              stroke='#0F766E'
              strokeWidth={3}
              fill='url(#revenueGradient)'
              dot={false}
              activeDot={{
                r: 5,
                fill: '#0F766E',
                stroke: '#fff',
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

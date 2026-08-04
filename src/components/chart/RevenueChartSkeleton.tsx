import Skeleton from '../common/Skeleton';

export default function RevenueChartSkeleton() {
  return (
    <section className='mt-8 rounded-[20px] border border-slate-200 bg-white p-8'>
      <div className='flex items-center justify-between'>
        <div>
          <Skeleton className='h-6 w-44' />

          <Skeleton className='mt-3 h-4 w-64' />
        </div>

        <Skeleton className='h-10 w-28 rounded-full' />
      </div>

      <Skeleton className='mt-8 h-[330px] w-full rounded-2xl' />
    </section>
  );
}

import Skeleton from '../common/Skeleton';

export default function StatCardSkeleton() {
  return (
    <div className='h-40 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
      <div className='flex h-full justify-between'>
        <div className='flex flex-col justify-between'>
          <div>
            <Skeleton className='h-3 w-28' />

            <Skeleton className='mt-6 h-10 w-32' />
          </div>

          <Skeleton className='h-4 w-40' />
        </div>

        <Skeleton className='h-8 w-20 rounded-full' />
      </div>
    </div>
  );
}

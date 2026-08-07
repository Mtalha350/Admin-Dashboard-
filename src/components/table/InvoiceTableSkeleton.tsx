import Skeleton from '../common/Skeleton';

export default function InvoiceTableSkeleton() {
  return (
    <section className='mt-8 overflow-hidden rounded-[20px] border border-slate-200 bg-white'>
      <div className='border-b p-6'>
        <Skeleton className='h-7 w-44' />

        <Skeleton className='mt-3 h-4 w-32' />

        <Skeleton className='mt-6 h-12 w-full rounded-xl' />
      </div>

      <div className='p-5'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className='flex items-center justify-between border-b py-5'
          >
            <Skeleton className='h-4 w-24' />
            <Skeleton className='h-4 w-52' />
            <Skeleton className='h-8 w-20 rounded-full' />
            <Skeleton className='h-4 w-20' />
            <Skeleton className='h-4 w-16' />
          </div>
        ))}
      </div>
    </section>
  );
}

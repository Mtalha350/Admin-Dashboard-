import StatCardSkeleton from './StatCardSkeleton';

export default function StatsGridSkeleton() {
  return (
    <section className='mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      {Array.from({ length: 4 }).map((_, index) => (
        <StatCardSkeleton key={index} />
      ))}
    </section>
  );
}

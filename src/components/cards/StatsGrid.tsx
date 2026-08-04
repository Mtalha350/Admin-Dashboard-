import StatCard from './StatCard';
import { stats } from '../../data/dashboardData';

export default function StatsGrid() {
  return (
    <section className='mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
          change={item.change}
          positive={item.positive}
        />
      ))}
    </section>
  );
}

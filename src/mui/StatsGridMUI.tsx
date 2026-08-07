import { Grid } from '@mui/material';

import StatCardMUI from './StatCardMUI';
import { stats } from '../data/dashboardData';

export default function StatsGridMUI() {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {stats.map((card) => (
        <Grid key={card.title} size={{ xs: 12, md: 6 }}>
          <StatCardMUI {...card} />
        </Grid>
      ))}
    </Grid>
  );
}

import { Box, Chip, Paper, Typography } from '@mui/material';

type Props = {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  positive: boolean;
};

export default function StatCardMUI({
  title,
  value,
  subtitle,
  change,
  positive,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        p: 2,
        height: 120,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: 2,
            color: '#64748B',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant='h2'
          sx={{
            mt: 2,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {value}
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: 12,
            color: 'text.secondary',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Chip
        label={change}
        color={positive ? 'success' : 'primary'}
        variant='outlined'
        sx={{
          height: 25,
          borderRadius: '999px',
          fontWeight: 600,

          '& .MuiChip-label': {
            px: 1.5, // 12px
            py: 0.5, // 4px
            fontSize: '12px',
          },
        }}
      />
    </Paper>
  );
}

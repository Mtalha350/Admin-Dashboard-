import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AddIcon from '@mui/icons-material/Add';

import { Box, Button, Typography } from '@mui/material';

type Props = {
  onCreate: () => void;
};

export default function EmptyStateMUI({ onCreate }: Props) {
  return (
    <Box
      sx={{
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          bgcolor: '#F1F5F9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <DescriptionOutlinedIcon
          sx={{
            fontSize: 30,
            color: '#94A3B8',
          }}
        />
      </Box>

      <Typography
        variant='h4'
        sx={{
          fontWeight: 700,
          fontSize: 25,
          mb: 0.5,
        }}
      >
        No invoices found
      </Typography>

      <Typography
        color='text.secondary'
        align='center'
        sx={{
          maxWidth: 500,
          fontSize: 15,
          mb: 3,
        }}
      >
        There are no invoices available. Create your first invoice to start
        managing billing.
      </Typography>

      <Button
        variant='contained'
        startIcon={<AddIcon />}
        onClick={onCreate}
        sx={{
          px: 2,
          py: 0.8,
          borderRadius: 1,
        }}
      >
        Create Invoice
      </Button>
    </Box>
  );
}

import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

type Props = {
  search: string;
  status: string;
  plan: string;
  totalRecords: number;
  filteredRecords: number;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onPlanChange: (value: string) => void;
};

export default function InvoiceToolbarMUI({
  search,
  status,
  plan,
  totalRecords,
  filteredRecords,
  onSearchChange,
  onStatusChange,
  onPlanChange,
}: Props) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 700,
            }}
          >
            Invoices
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            {filteredRecords} of {totalRecords} records
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <TextField
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder='Search invoice...'
          size='small'
          sx={{
            width: 320,
            '& .MuiOutlinedInput-root': {
              borderRadius: 1,
              backgroundColor: '#fff',
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon fontSize='small' />
                </InputAdornment>
              ),
            },
          }}
        />

        <Select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          size='small'
          sx={{
            width: 180,
            borderRadius: 1,
          }}
        >
          <MenuItem value='All statuses'>All Statuses</MenuItem>
          <MenuItem value='Paid'>Paid</MenuItem>
          <MenuItem value='Pending'>Pending</MenuItem>
          <MenuItem value='Refunded'>Refunded</MenuItem>
          <MenuItem value='Failed'>Failed</MenuItem>
        </Select>

        <Select
          value={plan}
          onChange={(e) => onPlanChange(e.target.value)}
          defaultValue='All plans'
          size='small'
          sx={{
            width: 180,
            borderRadius: 1,
          }}
        >
          <MenuItem value='All plans'>All Plans</MenuItem>
          <MenuItem value='Starter'>Starter</MenuItem>
          <MenuItem value='Growth'>Growth</MenuItem>
          <MenuItem value='Scale'>Scale</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}

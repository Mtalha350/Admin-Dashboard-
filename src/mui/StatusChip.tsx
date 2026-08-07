import { Chip } from '@mui/material';

type Props = {
  status: string;
};

export default function StatusChip({ status }: Props) {
  const color =
    status === 'Paid'
      ? 'success'
      : status === 'Pending'
        ? 'warning'
        : status === 'Refunded'
          ? 'info'
          : 'error';

  return <Chip label={status} color={color} size='small' />;
}

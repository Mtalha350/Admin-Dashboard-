import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F766E',
    },

    background: {
      default: '#F8FAFC',
    },
  },

  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;

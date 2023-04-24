import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    background: {
      default: '#000',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#556cd6',
    },
    text: {
      primary: '#FFF',
      secondary: '#9E9E9E',
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#9E9E9E',
        },
      },
    },
  },
});

export default theme;
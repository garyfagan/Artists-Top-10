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
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF',
          borderRadius: 25,
          color: '#000',
          padding: '10px 15px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          backgroundColor: '#000',
          color: '#9E9E9E',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#1ED760',
          borderRadius: '500px',
          color: '#000',
          '&:hover': {
            backgroundColor: '#1FDF64',
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#181818',
          // color: '#FFF',
        },
      },
    },
  },
});

export default theme;
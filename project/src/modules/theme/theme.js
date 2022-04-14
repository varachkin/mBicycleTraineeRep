import { createTheme } from '@mui/material/styles';
import { blue, green, orange } from '@mui/material/colors'

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: orange[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: green[700],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
    },
  },
  transitions: {
    duration: {
      short: 250,
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: green[500],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#0A1929',
    },
  },
  transitions: {
    duration: {
      short: 250,
    },
  },
  typography: {
    fontFamily: 'Quicksand-Regular',
  },
});

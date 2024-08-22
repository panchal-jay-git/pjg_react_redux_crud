// src/theme_template/Theme.js
import { createTheme } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

const getTheme = (mode) => createTheme({
  palette: {
    mode: mode,
    primary: {
      main: mode === 'dark' ? blue[700] : blue[500],
    },
    background: {
      default: mode === 'dark' ? grey[900] : grey[100],
      paper: mode === 'dark' ? grey[800] : '#fff',
    },
    text: {
      primary: mode === 'dark' ? '#fff' : '#000',
      secondary: mode === 'dark' ? grey[400] : grey[800],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          backgroundColor: mode === 'dark' ? grey[800] : '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default getTheme;

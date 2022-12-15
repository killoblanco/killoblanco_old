import { createTheme, responsiveFontSizes } from '@mui/material';
import { teal } from '@mui/material/colors';

export const theme = responsiveFontSizes(createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(2px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        fixed: true,
        maxWidth: 'md',
      }
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      light: teal.A200,
      main: teal.A400,
      dark: teal.A700,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ['Fira Code', 'sans-serif'].join(','),
  },
}));

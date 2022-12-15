import React from 'react';
import Menu from './components/Menu';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './assets/css/style.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#a30b47',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu>
        <Home />
      </Menu>
    </ThemeProvider>
  );
}

export default App;

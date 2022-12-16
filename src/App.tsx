import React from 'react';
import Menu from './components/Menu';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BottomMenu from './components/BottomMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';
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
  },
});

function App() {
  const [mobile, setMobile] = React.useState<boolean>(false);
  const [componentId, setComponentId] = React.useState<number>(0);
  const [menuId, setMenuId] = React.useState<number>(0);
  const mobileCheck = useMediaQuery(
    json2mq({
      maxWidth: 900,
    }),
  );

  React.useEffect(() => {
    setMobile(mobileCheck);
  }, [mobileCheck]);

  return (
    <ThemeProvider theme={theme}>
      <Menu setMenuId={setMenuId}>
        <Home componentId={componentId} mobile={mobile} menuId={menuId} setComponentId={setComponentId} />
      </Menu>
      <BottomMenu setComponentId={setComponentId} setMenuId={setMenuId}/>
    </ThemeProvider>
  );
}

export default App;

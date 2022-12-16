import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    text: {
      secondary: '#cccccc',
    },
  },
  typography: {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
  }
});

interface BottomMenuProps {
  setComponentId: (componentId: number) => void,
  setMenuId: (menuId: number) => void,
}

const BottomMenu: React.FC<BottomMenuProps> = ({setComponentId, setMenuId}) => {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: 500,
        '@media (min-width:1025px)' : {
          display: 'none'
        }
      }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              setComponentId(newValue);
              setMenuId(newValue);
            }}
            sx={{bgcolor: '#8e3457'}}
          >
            <BottomNavigationAction label="Contacts" icon={<AccountBoxIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Messages" icon={<MessageIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default BottomMenu;
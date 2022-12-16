import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../assets/css/menu.css';
import Logo from '../assets/images/logo.png';

interface MenuIconsProps {
  setMenu : (menu:number) => void,
}

const MenuIcons:React.FC<MenuIconsProps> = ({setMenu}) => {
  return (
    <Grid
      container
      direction="column"
    >
      <Grid item sx={{ alignSelf: 'center', paddingBottom: 5 }}>
        <Avatar src={Logo} sx={{ bgcolor: '#a30b47', width: 80, height: 80, marginTop: 3 }}/>
      </Grid>

      <Grid item className='menu-item' onClick={() => setMenu(0)}>
        <AccountBoxIcon sx={{ fontSize: 40 }} />
        <Typography variant="subtitle2" component="div" sx={{ textAlign: 'center' }}>
          CONTACTS
        </Typography>
      </Grid>

      <Grid item className='menu-item' onClick={() => setMenu(1)}>
        <FavoriteIcon sx={{ fontSize: 40 }} />
        <Typography variant="subtitle2" component="div" sx={{ textAlign: 'center' }}>
          FAVORITE
        </Typography>
      </Grid>

      <Grid item className='menu-item' onClick={() => setMenu(2)}>
        <MessageIcon sx={{ fontSize: 40 }} />
        <Typography variant="subtitle2" component="div" sx={{ textAlign: 'center' }}>
          MESSAGES
        </Typography>
      </Grid>
    </Grid>
  );
};

interface MenuProps {
  children: React.ReactNode,
  setMenuId: (menuId:number) => void,
}

const Menu:React.FC<MenuProps> = ({children, setMenuId}) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >

      <Grid item>
        <div className='main-box'>
          <div className='menu-box'>
            <MenuIcons setMenu={setMenuId} />
          </div>
        </div>
      </Grid>

      <Grid item xs>
        {children}
      </Grid>
    </Grid>
  );
};

export default Menu;
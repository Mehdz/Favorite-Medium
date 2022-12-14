import React from 'react';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TuneIcon from '@mui/icons-material/Tune';
import '../assets/css/menu.css';
import MessageMenu from './MessagesMenu';
import ContactMenu from './ContactMenu';
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
      <Grid item sx={{ alignSelf: 'center', paddingBottom: 15 }}>
        <Avatar src={Logo} sx={{ bgcolor: '#a30b47', width: 80, height: 80, marginTop: 3 }}/>
        <Divider sx={{marginTop: 2, backgroundColor: 'white'}} />
      </Grid>

      <Divider />
      <Grid item className='menu-item' onClick={() => setMenu(0)}>
        <AccountBoxIcon sx={{ fontSize: 40 }} />
        <Typography variant="subtitle2" component="div" sx={{ textAlign: 'center' }}>
          CONTACTS
        </Typography>
      </Grid>
      <Divider />

      <Grid item className='menu-item' onClick={() => setMenu(1)}>
        <FavoriteIcon sx={{ fontSize: 40 }} />
        <Typography variant="subtitle2" component="div" sx={{ textAlign: 'center' }}>
          FAVORITES
        </Typography>
      </Grid>
      <Divider />

      <Grid item className='menu-item' onClick={() => setMenu(2)}>
        <MessageIcon sx={{ fontSize: 40 }} />
        <Typography variant="subtitle2" component="div" sx={{ textAlign: 'center' }}>
          MESSAGES
        </Typography>
      </Grid>
      <Divider />

      <Grid item className='menu-item' onClick={() => setMenu(3)}>
        <TuneIcon sx={{ fontSize: 40 }} />
        <Typography variant="subtitle2" component="div" sx={{ textAlign: 'center' }}>
          SETTINGS
        </Typography>
      </Grid>

    </Grid>
  );
};

export default function Menu() {
  const [menu, setMenu] = React.useState<number>(0);

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
            <MenuIcons setMenu={setMenu}/>
          </div>
        </div>
      </Grid>
      <Grid item>
        {menu === 0 ? <ContactMenu /> : ''}
        {menu === 1 ? <ContactMenu /> : ''}
        {menu === 2 ? <MessageMenu /> : ''}
        {menu === 3 ? <ContactMenu /> : ''}
      </Grid>
      <Grid item xs>
      content
      </Grid>
    </Grid>

  );
}
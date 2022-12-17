import { Grid } from '@mui/material';
import React from 'react';
import ContactDetails from '../components/ContactDetails';
import ContactMenu from '../components/ContactMenu';
import FavoriteMenu from '../components/FavoriteMenu';
import Messages from '../components/Messages';
import MessageMenu from '../components/MessagesMenu';

interface HomeProps {
  mobile: boolean,
  componentId: number,
  menuId: number,
  setComponentId: (id: number) => void,
}

const Home: React.FC<HomeProps> = (props) => {
  const { mobile, componentId, menuId, setComponentId } = props;
  return (
    <Grid container>
      {!mobile &&
      <>
        <Grid item md>
          {menuId === 0 && <ContactMenu setComponentId={setComponentId}/>}
          {menuId === 1 && <FavoriteMenu setComponentId={setComponentId}/>}
          {menuId === 2 && <MessageMenu setComponentId={setComponentId}/>}
        </Grid>
        <Grid item md={6}>
          <Messages />
        </Grid>
        <Grid item md={3}>
          <ContactDetails setComponentId={setComponentId}/>
        </Grid>
      </>
      }

      {mobile && componentId === 0 &&
      <Grid item xs={12} md>
        <ContactMenu setComponentId={setComponentId}/>
      </Grid>
      }
      {mobile && componentId === 1 &&
      <Grid item xs={12} md={6}>
        <FavoriteMenu setComponentId={setComponentId}/>
      </Grid>
      }
      {mobile && componentId === 2 &&
      <Grid item xs={12} md={3}>
        <MessageMenu setComponentId={setComponentId}/>
      </Grid>
      }
      {mobile && componentId === 3 &&
      <Grid item xs={12} md={3}>
        <Messages />
      </Grid>
      }
      {mobile && componentId === 4 &&
      <Grid item xs={12} md={3}>
        <ContactDetails setComponentId={setComponentId}/>
      </Grid>
      }
    </Grid>
  );
};

export default Home;
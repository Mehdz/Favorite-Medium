import React from 'react';
import { Grid, List, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/store';
import { Contact } from './ContactMenu';

interface FavoriteMenuProps {
  setComponentId: (id: number) => void,
}

const FavoriteMenu: React.FC<FavoriteMenuProps> = ({setComponentId}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const contacts = useSelector((state: RootState) => state.contactSlice);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setComponentId(4);
  };

  return (
    <div className='messages-box'>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
      >

        <Grid item pt={5} pb={2} pl={2} pr={2}>
          <Stack direction="row" spacing={2} justifyContent='space-between'>
            <Typography variant="h6">
              Favorite Contacts
            </Typography>
          </Stack>
        </Grid>


        <Grid item>
          <List style={{maxHeight: '87vh', overflow: 'auto'}} >
            {
              contacts.filter(contact => contact.isFavorite === true).length > 0 ?
                contacts && contacts[0] && contacts.map((contact, index) => (
                  contact.isFavorite &&
                    <Contact selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} contact={contact} key={index} />
                )) : <Typography variant="h6" style={{textAlign: 'center'}}>No favorite contacts</Typography>
            }
          </List>
        </Grid>
      </Grid>

    </div>
  );
};

export default FavoriteMenu;
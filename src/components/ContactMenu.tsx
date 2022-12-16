import React from 'react';
import { Avatar, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NewContact from './Modals/NewContact';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/store';
import { useDispatch } from 'react-redux';
import { editSelectedContactId } from '../reducers/userSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { editFav, removeContact } from '../reducers/contactSlice';
import DeleteIcon from '@mui/icons-material/Delete';

type Contact = {
  id?: number;
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean;
};

interface ContactProps {
    selectedIndex: number;
    handleListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
    contact: Contact;
  }

export const Contact:React.FC<ContactProps>  = ({selectedIndex, handleListItemClick, contact}) => {
  const dispatch = useDispatch();

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item xs>
        <ListItemButton
          selected={selectedIndex === contact.id}
          onClick={(event) => {
            handleListItemClick(event, contact.id || 0);
            dispatch(editSelectedContactId(contact.id || 0));
          }}
        >
          <ListItemIcon>
            <Avatar
              alt={contact.name + ' \'s avatar'}
              sx={{ backgroundColor: '#a30b47', height: 32, width: 32 }}
            />
          </ListItemIcon>

          <ListItemText primary={contact.name} />

        </ListItemButton>
      </Grid>

      <Grid item>
        <IconButton color="primary" onClick={() => {
          dispatch(editFav(contact.id || 0));
        }}>
          {contact.isFavorite ? <FavoriteIcon color="primary" />: <FavoriteBorderIcon color="primary"/>}
        </IconButton>
      </Grid>

      <Grid item>
        <IconButton color="primary" onClick={() => {
          dispatch(removeContact(contact.id || 0));
        }}>
          {<DeleteIcon color="primary" />}
        </IconButton>
      </Grid>


    </Grid>
  );
};

interface ContactMenuProps {
  setComponentId: (id: number) => void,
}

const ContactMenu: React.FC<ContactMenuProps> = ({setComponentId}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
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
      { open && <NewContact open={open} setOpen={setOpen} /> }
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
      >

        <Grid item pt={5} pb={2} pl={2} pr={2}>
          <Stack direction="row" spacing={2} justifyContent='space-between'>
            <Typography variant="h6">
              Contacts
            </Typography>

            <IconButton color="primary" onClick={()=> setOpen(true)}>
              <PersonAddIcon />
            </IconButton>
          </Stack>
        </Grid>


        <Grid item>
          <List style={{maxHeight: '87vh', overflow: 'auto'}} >
            {contacts && contacts[0] && contacts.map((contact, index) => (
              <Contact selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} contact={contact} key={index}/>
            ))
            ||
            <Typography variant="h6" component="div" sx={{ textAlign : 'center' }}>
              No contacts
            </Typography>
            }
          </List>
        </Grid>

      </Grid>

    </div>
  );
};

export default ContactMenu;
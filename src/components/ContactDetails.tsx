import React from 'react';
import { Avatar, Button, Divider, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import { RootState } from '../reducers/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editFav, removeContact } from '../reducers/contactSlice';
import EditContact from './Modals/EditContact';
import { Contact } from '../constants/types';

interface ContactDetailsProps {
  setComponentId: (id: number) => void,
}

const ContactDetails: React.FC<ContactDetailsProps> = ({setComponentId}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const contacts = useSelector((state: RootState) => state.contactSlice);
  const user = useSelector((state: RootState) => state.userSlice);
  const [selectedContact, setSelectedContact] = React.useState<Contact>({
    name: '',
    email: '',
    phone: '',
    isFavorite: false,
  });

  React.useEffect(() => {
    const contact = contacts.find((contact: Contact) => contact.id === user.user.selectedContactId);

    if (contact)
      setSelectedContact(contact);
    else {
      setSelectedContact({
        name: '',
        email: '',
        phone: '',
        isFavorite: false,
      });
      setComponentId(0);
    }

  }, [user.user.selectedContactId, contacts]);

  return (
    <React.Fragment>
      { selectedContact && selectedContact.id ?
        <div className='contact-details-box'>
          { open && <EditContact open={open} setOpen={setOpen} contactId={selectedContact.id || 0}/> }
          <Grid
            container
            direction="column"
            alignContent={'center'}
            sx={{textAlign: 'center'}}
          >

            <Grid item pt={5} pb={2} pl={2} pr={2}>
              <Typography variant="h6">
                Contact
              </Typography>
            </Grid>

            <Grid item pb={2} pl={2} pr={2}>
              <Avatar
                alt={selectedContact.name + ' \'s avatar'}
                sx={{ height: 200, width: 200,backgroundColor : '#a30b47' }}
              />
            </Grid>

            <Grid item pt={5} pb={2} pl={2} pr={2}>
              <Typography color="primary">
                Name
              </Typography>
              <Typography variant="h5" component="div" pb={2}>
                {selectedContact.name}
              </Typography>
              <Typography color="primary" variant="subtitle2">
                Email
              </Typography>
              <Typography variant="h6" component="div" pb={2}>
                {selectedContact.email}
              </Typography>
              {selectedContact?.phone &&
              <div>
                <Typography color="primary" variant="subtitle2">
                Phone
                </Typography>
                <Typography variant="h6" component="div" pb={2}>
                  {selectedContact.phone}
                </Typography>
              </div>
              }

            </Grid>
          </Grid>

          <Divider />

          <Grid
            container
            direction="column"
            spacing={2}
            p={4}
          >
            <Grid item xs>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<FavoriteIcon />}
                onClick={() => dispatch(editFav(selectedContact.id || 0))}>
                {selectedContact.isFavorite ? 'Unfavorite this Contact' : 'Favorite this Contact'}
              </Button>
            </Grid>

            <Grid item xs>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<EditIcon />}
                onClick={()=> setOpen(true)}>
                Edit Contact
              </Button>
            </Grid>

            <Grid item xs>
              <Button
                variant="text"
                color="primary"
                fullWidth
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(removeContact(selectedContact.id || 0))}>
                Delete Contact
              </Button>
            </Grid>

          </Grid>

        </div>
        : ''}
    </React.Fragment>
  );
};

export default ContactDetails;
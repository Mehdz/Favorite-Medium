import * as React from 'react';
import {Avatar, Box, Button, CardActions, CardContent, Checkbox, FormControlLabel, InputAdornment, Modal, TextField, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import { MuiTelInput } from 'mui-tel-input';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch } from 'react-redux';
import { editContact } from '../../reducers/contactSlice';
import '../../assets/css/modals.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/store';
import { Contact } from '../../constants/types';


interface EditContactFormProps {
  setOpen : (open:boolean) => void,
  contactId: number,
 }

const EditContactForm: React.FC<EditContactFormProps> = ({setOpen, contactId}) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contactSlice);
  const [contact, setContact] = React.useState<Contact>({
    name: '',
    email: '',
    phone: '',
    isFavorite: false
  });

  React.useEffect(() => {
    const contact = contacts.find((contact: Contact) => contact.id === contactId);

    if (contact)
      setContact(contact);
    else
      setContact({
        name: '',
        email: '',
        phone: '',
        isFavorite: false,
      });

  }, [contactId, contacts]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editContact(contact));
    setOpen(false);
  };


  return (
    <form onSubmit={onSubmit}>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" component="div">
          New contact
          </Typography>

          <Avatar sx={{ bgcolor: 'primary.main', height: 100, width: 100, alignSelf: 'center' }}>
            <PersonIcon />
          </Avatar>

          <TextField
            id="outlined-name"
            label="Name"
            onChange={e => setContact({...contact, name: e.target.value})}
            value={contact.name}
            required
            InputProps={{
              startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
            }}
          />
          <TextField
            id="outlined-email"
            label="Email"
            required
            value={contact.email}
            onChange={e => setContact({...contact, email: e.target.value})}
            type="email"
            InputProps={{
              startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
            }}
          />
          <MuiTelInput
            value={contact.phone}
            onChange={(phone) => setContact({...contact, phone: phone})}
          />
        </Stack>

        <FormControlLabel
          value="end"
          control={<Checkbox checked={contact.isFavorite} onChange={e => setContact({...contact, isFavorite: e.target.checked})} inputProps={{ 'aria-label': 'controlled' }}/>}
          label="Add to Favorite"
          labelPlacement="end"
        />

      </CardContent>
      <CardActions>
        <Button size="small" fullWidth variant='outlined' color='secondary' type="submit" onClick={() => console.log(contact)}>
        Save
        </Button>
      </CardActions>
    </form>
  );
};

interface NewContactProps {
  open: boolean,
  setOpen : (open:boolean) => void,
  contactId: number,
 }

const EditContact: React.FC<NewContactProps> = ({open, setOpen, contactId}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal'>
          <EditContactForm setOpen={setOpen} contactId={contactId}/>
        </Box>
      </Modal>
    </div>
  );
};

export default EditContact;
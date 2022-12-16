import * as React from 'react';
import {Avatar, Box, Button, CardActions, CardContent, Checkbox, FormControlLabel, InputAdornment, Modal, TextField, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import { MuiTelInput } from 'mui-tel-input';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch } from 'react-redux';
import { addContact } from '../../reducers/contactSlice';
import '../../assets/css/modals.css';
import { Contact } from '../../constants/types';

interface NewContactFormProps {
  setOpen : (open:boolean) => void,
 }

const NewContactForm: React.FC<NewContactFormProps> = ({setOpen}) => {
  const dispatch = useDispatch();
  const [contact, setContact] = React.useState<Contact>({
    name: '',
    email: '',
    phone: '',
    isFavorite: false
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addContact(contact));
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
            required
            InputProps={{
              startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
            }}
          />
          <TextField
            id="outlined-email"
            label="Email"
            required
            onChange={e => setContact({...contact, email: e.target.value})}
            type="email"
            InputProps={{
              startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
            }}
          />
          <MuiTelInput
            value={contact.phone}
            onChange={(phone) => setContact({...contact, phone})}
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
 }

const NewContact: React.FC<NewContactProps> = ({open, setOpen}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal'>
          <NewContactForm setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
};

export default NewContact;
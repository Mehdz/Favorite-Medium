import * as React from 'react';
import {Avatar, Box, Button, CardActions, CardContent, Checkbox, FormControlLabel, Modal, TextField, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import '../../assets/css/modals.css';


const NewContactContent = () => {
  return (
    <Box className='modal'>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" component="div">
          New contact
          </Typography>
          <Avatar
            alt={'Avatar n°1'}
            src={'/static/images/avatar/r.jpg'}
            sx={{ height: 100, width: 100, alignSelf: 'center'}}
          />
          <TextField id="outlined-name" label="Name" required/>
          <TextField id="outlined-email" label="Email" required/>
          <TextField id="outlined-name" label="Phone" />
        </Stack>

        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Add to Favorite"
          labelPlacement="end"
        />

      </CardContent>
      <CardActions>
        <Button size="small" fullWidth variant='outlined' color='secondary'>
        Save
        </Button>
      </CardActions>
    </Box>
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
        <NewContactContent />
      </Modal>
    </div>
  );
};

export default NewContact;
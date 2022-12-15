import React from 'react';
import { Avatar, Button, Divider, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';

export default function ContactDetails() {
  return (
    <div className='contact-details-box'>
      <Grid
        container
        direction="column"
        alignContent={'center'}
        justifyContent={'center'}
        sx={{textAlign: 'center'}}
      >

        <Grid item pt={5} pb={2} pl={2} pr={2}>
          <Typography variant="h6">
            Contact
          </Typography>

          <div style={{padding: 40}}>
            <Avatar
              alt={'Avatar n°1'}
              src={'/static/images/avatar/r.jpg'}
              sx={{ height: 200, width: 200, alignSelf: 'center'}}
            />
          </div>

          <Typography color="primary">
            Name
          </Typography>
          <Typography variant="h5" component="div" pb={2}>
            John Doe
          </Typography>
          <Typography color="primary" variant="subtitle2">
            Email
          </Typography>
          <Typography variant="h6" component="div" pb={2}>
            john.doe@email.com
          </Typography>
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
          <Button variant="contained" color="primary" fullWidth startIcon={<FavoriteIcon />}>
              Fav this Contact
          </Button>
        </Grid>

        <Grid item xs>
          <Button variant="contained" color="primary" fullWidth startIcon={<EditIcon />}>
              Edit Contact
          </Button>
        </Grid>

        <Grid item xs>
          <Button variant="text" color="error" fullWidth startIcon={<DeleteIcon />}>
          Delete Contact
          </Button>
        </Grid>

      </Grid>

    </div>
  );
}
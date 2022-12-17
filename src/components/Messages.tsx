import React from 'react';
import { Avatar, Card, CardContent, Grid, List, Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';

const SendedMessage: React.FC = () => {
  return (
    <Stack direction="row-reverse" spacing={2} sx={{ width: '100%' }}>
      <Avatar sx={{ height: 50, width: 50, backgroundColor: 'primary.main' }} />

      <Card sx={{backgroundColor: '#a30b47', maxWidth: '70vh', color: 'white'}}>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

const ReceivedMessage: React.FC = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
      <Avatar sx={{ height: 50, width: 50, backgroundColor: '#b7a6ad' }} />

      <Card sx={{backgroundColor: '#b7a6ad', maxWidth: '70vh', color: 'white'}}>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};


const Messages: React.FC = () => {
  return (
    <div className='box'>
      <Container sx={{paddingTop: 4}}>
        <List sx={{height: {xs : '74vh', md: '74vh', lg :'78vh'}, overflow: 'auto'}} >
          <Grid container spacing={2} flexDirection='column'>
            <Grid item xs>
              <SendedMessage />
            </Grid>
            <Grid item xs>
              <SendedMessage />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <SendedMessage />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <SendedMessage />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <SendedMessage />
            </Grid>

          </Grid>
        </List>

        <div style={{marginTop: 3}}>
          <TextField
            id="filled-multiline-message"
            placeholder="Enter your message here..."
            multiline
            rows={4}
            fullWidth
          />

        </div>
      </Container>
    </div>

  );
};

export default Messages;
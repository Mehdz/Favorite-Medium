import React from 'react';
import { Avatar, Card, CardContent, Grid, List, Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';

interface SendedMessageProps {
  message : string,
}

const SendedMessage: React.FC<SendedMessageProps> = ({message}) => {
  return (
    <Stack direction="row-reverse" spacing={2} sx={{ width: '100%' }}>
      <Avatar alt={'John Doe'} src={'/static/images/avatar/r.jpg'} sx={{ height: 50, width: 50 }} />

      <Card sx={{backgroundColor: '#a30b47', maxWidth: '70vh', color: 'white'}}>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {message}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

const ReceivedMessage = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
      <Avatar alt={'John Doe'} src={'/static/images/avatar/r.jpg'} sx={{ height: 50, width: 50 }} />

      <Card sx={{backgroundColor: '#b7a6ad', maxWidth: '70vh', color: 'white'}}>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};


const Messages = () => {
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut';

  return (
    <div className='box'>
      <Container sx={{paddingTop: 4}}>
        <List style={{height: '78vh', overflow: 'auto'}} >
          <Grid container spacing={2} flexDirection='column'>
            <Grid item xs>
              <SendedMessage message={message} />
            </Grid>
            <Grid item xs>
              <SendedMessage message={message} />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <SendedMessage message={message} />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
            </Grid>
            <Grid item xs>
              <ReceivedMessage />
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
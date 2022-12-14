import { Avatar, Grid, IconButton, List, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

interface MessageProps {
  selectedIndex: number;
  handleListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
  id: number;
}

const Message:React.FC<MessageProps> = ({selectedIndex, handleListItemClick, id}) => {
  return (
    <React.Fragment>
      <ListItemButton
        selected={selectedIndex === id}
        onClick={(event) => handleListItemClick(event, id)}
      >
        <ListItemAvatar>
          <Avatar alt="User" sx={{ bgcolor: '#a30b47' }}/>
        </ListItemAvatar>

        <ListItemText
          primary="Author"
          secondary={'Message...'}
        />

      </ListItemButton>

    </React.Fragment>
  );
};

interface MessageMenuProps {
  setComponentId: (id: number) => void,
}

const MessageMenu: React.FC<MessageMenuProps> = ({setComponentId}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setComponentId(3);
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
              Messages
            </Typography>

            <IconButton color="primary">
              <MapsUgcIcon />
            </IconButton>
          </Stack>
        </Grid>


        <Grid item>
          <List style={{maxHeight: '87vh', overflow: 'auto'}} >
            <Message selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} id={0}/>
          </List>
        </Grid>

      </Grid>

    </div>
  );
};

export default MessageMenu;
import React from 'react';
import { Avatar, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

interface ContactProps {
    selectedIndex: number;
    handleListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
    id: number;
}

const Contact:React.FC<ContactProps>  = ({selectedIndex, handleListItemClick, id}) => {
  return (
    <React.Fragment>
      <ListItemButton
        selected={selectedIndex === id}
        onClick={(event) => handleListItemClick(event, id)}
      >
        <ListItemIcon>
          <Avatar
            alt={'Avatar n°1'}
            src={'/static/images/avatar/r.jpg'}
          />
        </ListItemIcon>

        <ListItemText primary="Inbox" />

      </ListItemButton>
    </React.Fragment>
  );
};

export default function ContactMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className='messages-box'>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
      >
        <Grid item pt={5} pb={2} pl={2}>
          <Typography variant="h6">
            Contact
          </Typography>
        </Grid>


        <Grid item>
          <List style={{maxHeight: '87vh', overflow: 'auto'}} >
            <Contact selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} id={0}/>
          </List>

        </Grid>

      </Grid>

    </div>
  );
}
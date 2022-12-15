import React from 'react';
import { Avatar, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NewContact from './Modals/NewContact';

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
            alt={'John Doe'}
            sx={{ backgroundColor: '#a30b47', height: 32, width: 32 }}
            src={'/static/images/avatar/r.jpg'}
          />
        </ListItemIcon>

        <ListItemText primary="John Doe" />

      </ListItemButton>
    </React.Fragment>
  );
};

export default function ContactMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
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
            <Contact selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} id={0}/>
          </List>
        </Grid>

      </Grid>

    </div>
  );
}
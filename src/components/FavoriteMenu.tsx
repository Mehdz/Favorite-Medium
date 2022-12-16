import React from 'react';
import { Avatar, Grid, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

interface FavoriteProps {
    selectedIndex: number;
    handleListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
    id: number;
}

const Favorite:React.FC<FavoriteProps>  = ({selectedIndex, handleListItemClick, id}) => {
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

interface FavoriteMenuProps {
  setComponentId: (id: number) => void,
}

const FavoriteMenu: React.FC<FavoriteMenuProps> = ({setComponentId}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setComponentId(4);
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
              Favorite Contacts
            </Typography>
          </Stack>
        </Grid>


        <Grid item>
          <List style={{maxHeight: '87vh', overflow: 'auto'}} >
            <Favorite selectedIndex={selectedIndex} handleListItemClick={handleListItemClick} id={0}/>
          </List>
        </Grid>

      </Grid>

    </div>
  );
};

export default FavoriteMenu;
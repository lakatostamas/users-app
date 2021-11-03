import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, CircularProgress, Box, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { useGetUserByIdQuery } from './api';

function Show() {
  const { userId } = useParams<{ userId: string }>();
  const { data: user, isLoading: isUserLoading } = useGetUserByIdQuery(userId);

  if (isUserLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Box display="flex" justifyContent="center" my={2}>
        <Avatar alt={user?.firstName} src={user?.picture} sx={{ width: 72, height: 72 }} />
      </Box>
      <Paper>
        <List>
          <ListItem>
            <ListItemText primary={user?.title} secondary="Title" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.firstName} secondary="Firstname" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.lastName} secondary="Lastname" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.gender} secondary="Gender" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.email} secondary="Email" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.dateOfBirth} secondary="Date of Birth" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.registerDate} secondary="Register Date" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.phone} secondary="Phone" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.location?.street} secondary="Street" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.location?.city} secondary="City" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.location?.state} secondary="State" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.location?.country} secondary="Country" />
          </ListItem>
          <ListItem>
            <ListItemText primary={user?.location?.timezone} secondary="Timezone" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

export default Show;
